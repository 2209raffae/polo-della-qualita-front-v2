import { MongoClient } from "mongodb";

const globalForMongo = globalThis as typeof globalThis & {
  poloMongoClientPromise?: Promise<MongoClient>;
};

function getMongoUri() {
  const uri = process.env.MONGODB_URI?.trim();

  if (!uri) {
    throw new Error("MONGODB_URI non configurato");
  }

  return uri;
}

function getMongoClient() {
  if (!globalForMongo.poloMongoClientPromise) {
    const client = new MongoClient(getMongoUri(), {
      promoteBuffers: true,
      serverSelectionTimeoutMS: 10_000,
    });

    globalForMongo.poloMongoClientPromise = client.connect();
  }

  return globalForMongo.poloMongoClientPromise;
}

export async function getMongoDatabase() {
  const client = await getMongoClient();
  const databaseName = process.env.MONGODB_DATABASE?.trim() || "polo_della_qualita";

  return client.db(databaseName);
}
