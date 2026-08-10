import { createHash, randomBytes } from "node:crypto";
import { ObjectId, type Collection } from "mongodb";
import { getMongoDatabase } from "@/lib/mongodb";

type CurriculumDocument = {
  _id?: ObjectId;
  contentType: string;
  createdAt: Date;
  data: Buffer;
  expiresAt?: Date;
  fileName: string;
  size: number;
  tokenHash: string;
};

export type SavedCurriculum = {
  id: ObjectId;
  token: string;
};

export type DownloadableCurriculum = {
  contentType: string;
  data: Buffer;
  fileName: string;
  size: number;
};

const globalForCurricula = globalThis as typeof globalThis & {
  poloCurriculumIndexesPromise?: Promise<unknown>;
};

const curriculumContentTypes: Record<string, string> = {
  doc: "application/msword",
  docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  pdf: "application/pdf",
};

function getRetentionDays() {
  const configuredDays = Number(process.env.MONGODB_CURRICULUM_RETENTION_DAYS);

  if (Number.isInteger(configuredDays) && configuredDays >= 0) {
    return configuredDays;
  }

  return 365;
}

function hashToken(token: string) {
  return createHash("sha256").update(token).digest("hex");
}

function sanitizeFileName(fileName: string) {
  const sanitized = fileName
    .split(/[\\/]/)
    .pop()
    ?.replace(/[\u0000-\u001f\u007f]/g, "")
    .trim();

  return (sanitized || "curriculum").slice(0, 180);
}

function getContentType(fileName: string) {
  const extension = fileName.split(".").pop()?.toLowerCase() || "";
  return curriculumContentTypes[extension] || "application/octet-stream";
}

async function getCurriculumCollection(): Promise<Collection<CurriculumDocument>> {
  const database = await getMongoDatabase();
  const collectionName = process.env.MONGODB_CURRICULUM_COLLECTION?.trim() || "curricula";

  return database.collection<CurriculumDocument>(collectionName);
}

async function ensureIndexes(collection: Collection<CurriculumDocument>) {
  if (!globalForCurricula.poloCurriculumIndexesPromise) {
    globalForCurricula.poloCurriculumIndexesPromise = Promise.all([
      collection.createIndex({ tokenHash: 1 }, { name: "tokenHash_unique", unique: true }),
      collection.createIndex(
        { expiresAt: 1 },
        { expireAfterSeconds: 0, name: "curriculum_expiration" },
      ),
    ]).catch((error) => {
      globalForCurricula.poloCurriculumIndexesPromise = undefined;
      throw error;
    });
  }

  await globalForCurricula.poloCurriculumIndexesPromise;
}

export async function saveCurriculum(file: File): Promise<SavedCurriculum> {
  const collection = await getCurriculumCollection();
  await ensureIndexes(collection);

  const token = randomBytes(32).toString("base64url");
  const createdAt = new Date();
  const retentionDays = getRetentionDays();
  const expiresAt = retentionDays
    ? new Date(createdAt.getTime() + retentionDays * 24 * 60 * 60 * 1000)
    : undefined;
  const document: CurriculumDocument = {
    contentType: getContentType(file.name),
    createdAt,
    data: Buffer.from(await file.arrayBuffer()),
    fileName: sanitizeFileName(file.name),
    size: file.size,
    tokenHash: hashToken(token),
  };

  if (expiresAt) {
    document.expiresAt = expiresAt;
  }

  const result = await collection.insertOne(document);

  return { id: result.insertedId, token };
}

export async function deleteCurriculum(id: ObjectId) {
  const collection = await getCurriculumCollection();
  await collection.deleteOne({ _id: id });
}

export async function findCurriculum(token: string): Promise<DownloadableCurriculum | null> {
  if (!/^[A-Za-z0-9_-]{43}$/.test(token)) {
    return null;
  }

  const collection = await getCurriculumCollection();
  const document = await collection.findOne({
    tokenHash: hashToken(token),
    $or: [{ expiresAt: { $exists: false } }, { expiresAt: { $gt: new Date() } }],
  });

  if (!document) {
    return null;
  }

  return {
    contentType: document.contentType,
    data: document.data,
    fileName: document.fileName,
    size: document.size,
  };
}
