import {
  deleteCurriculum,
  saveCurriculum,
  type SavedCurriculum,
} from "@/lib/curriculum-storage";

type LeadType = "contact" | "event" | "manager";

type LeadRequest = {
  leadType?: LeadType;
  email?: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
  message?: string;
  documentUrl?: string;
  crmTitle?: string;
};

const MAX_CURRICULUM_SIZE = 5 * 1024 * 1024;
const allowedCurriculumMimeTypes: Record<string, Set<string>> = {
  pdf: new Set(["application/pdf", "application/octet-stream"]),
  doc: new Set(["application/msword", "application/octet-stream"]),
  docx: new Set([
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "application/octet-stream",
    "application/zip",
  ]),
};

const leadTitles: Record<LeadType, string> = {
  contact: "Richiesta candidatura MANAGER",
  event: "Richiesta proposta evento",
  manager: "Candidatura Manager di Settore",
};

class RequestError extends Error {
  constructor(
    message: string,
    readonly status: number,
  ) {
    super(message);
  }
}

function formatCrmDate(date: Date) {
  const pad = (value: number) => String(value).padStart(2, "0");

  return [date.getFullYear(), pad(date.getMonth() + 1), pad(date.getDate())].join("-")
    + ` ${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
}

function compact(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isValidHttpUrl(value: string) {
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

function normalizeLeadType(value: unknown): LeadType {
  return value === "event" || value === "manager" ? value : "contact";
}

function formValue(formData: FormData, key: string) {
  return compact(formData.get(key));
}

async function parseRequest(request: Request) {
  const contentType = request.headers.get("content-type") || "";

  if (contentType.includes("multipart/form-data")) {
    const formData = await request.formData();
    const curriculumEntry = formData.get("curriculum");

    return {
      curriculum:
        curriculumEntry instanceof File && curriculumEntry.size > 0
          ? curriculumEntry
          : null,
      lead: {
        leadType: normalizeLeadType(formData.get("leadType")),
        email: formValue(formData, "email"),
        phone: formValue(formData, "phone"),
        firstName: formValue(formData, "firstName"),
        lastName: formValue(formData, "lastName"),
        message: formValue(formData, "message"),
        documentUrl: "",
        crmTitle: formValue(formData, "crmTitle"),
      } satisfies LeadRequest,
    };
  }

  const lead = (await request.json()) as LeadRequest;
  return { curriculum: null, lead };
}

function buildMessage(lead: LeadRequest, curriculumUrl: string) {
  const rows = [
    ["Nome", `${compact(lead.firstName)} ${compact(lead.lastName)}`.trim()],
    ["Email", compact(lead.email)],
    ["Telefono", compact(lead.phone)],
    ["Messaggio", compact(lead.message)],
    ["Curriculum", curriculumUrl],
    [
      "Origine",
      lead.leadType === "event"
        ? "Form Eventi"
        : lead.leadType === "manager"
          ? "Form Manager di Settore"
          : "Form Sito",
    ],
  ];

  return rows
    .filter(([, value]) => value)
    .map(([label, value]) => `${label}: ${value}`)
    .join("\n");
}

function validateCurriculum(file: File) {
  if (file.size > MAX_CURRICULUM_SIZE) {
    throw new RequestError("Il curriculum non può superare 5 MB.", 400);
  }

  const extension = file.name.split(".").pop()?.toLowerCase() || "";
  const allowedMimeTypes = allowedCurriculumMimeTypes[extension];
  const mimeType = file.type.toLowerCase();

  if (!allowedMimeTypes || (mimeType && !allowedMimeTypes.has(mimeType))) {
    throw new RequestError("Il curriculum deve essere in formato PDF, DOC o DOCX.", 400);
  }
}

function getPublicSiteUrl(request: Request) {
  const configuredUrl = compact(process.env.PUBLIC_SITE_URL).replace(/\/+$/, "");
  const siteUrl = configuredUrl || new URL(request.url).origin;

  if (!isValidHttpUrl(siteUrl)) {
    throw new RequestError("PUBLIC_SITE_URL non è valido.", 500);
  }

  return siteUrl;
}

function getCurriculumUrl(request: Request, token: string) {
  const siteUrl = getPublicSiteUrl(request);
  return new URL(`/api/curriculum/${encodeURIComponent(token)}`, `${siteUrl}/`).toString();
}

export async function POST(request: Request) {
  const crmUrl = process.env.CRM_LEAD_ENDPOINT;
  const crmAuthorization = process.env.CRM_LEAD_AUTHORIZATION;
  let savedCurriculum: SavedCurriculum | null = null;

  try {
    if (!crmUrl || !crmAuthorization) {
      throw new RequestError(
        "CRM non configurato: mancano CRM_LEAD_ENDPOINT o CRM_LEAD_AUTHORIZATION.",
        500,
      );
    }

    const { curriculum, lead } = await parseRequest(request);
    const firstName = compact(lead.firstName);
    const lastName = compact(lead.lastName);
    const email = compact(lead.email);
    const legacyDocumentUrl = compact(lead.documentUrl);

    if (!firstName || !lastName || !email) {
      throw new RequestError("Nome, cognome ed email sono obbligatori.", 400);
    }

    if (legacyDocumentUrl && !isValidHttpUrl(legacyDocumentUrl)) {
      throw new RequestError("Il link al curriculum non è valido.", 400);
    }

    let curriculumUrl = legacyDocumentUrl;

    if (curriculum) {
      validateCurriculum(curriculum);

      try {
        savedCurriculum = await saveCurriculum(curriculum);
      } catch (error) {
        console.error("Salvataggio curriculum su MongoDB non riuscito", error);
        throw new RequestError("Non è stato possibile salvare il curriculum.", 502);
      }

      curriculumUrl = getCurriculumUrl(request, savedCurriculum.token);
    }

    const leadType = normalizeLeadType(lead.leadType);
    const crmTitle = compact(lead.crmTitle) || leadTitles[leadType];
    const crmPayload = {
      pBODY: {
        COMANDO: "LEAD",
        TKOPERATORE: "6",
        TKDATA: formatCrmDate(new Date()),
        TKARGOMENTO: "CAND",
        TKPRIORITA: "M",
        TKFONTE: "WEB",
        TKRICHIEDENTE: "P",
        TKRIFERIMENTO: "0",
        TKPERSONA: `${firstName} ${lastName}`.trim(),
        TKDESTINATARIO: "G",
        TKCODDES: "1",
        TKSTATO: "APERTO",
        TKCHIUSO: "0",
        TKAZIONE: "APERTURA",
        TKTITOLO: crmTitle,
        TKTESTO: buildMessage({ ...lead, leadType }, curriculumUrl),
        TK_AGENDA_FLG: "0",
        TK_ALLEGATI: curriculumUrl || "0",
      },
    };

    let crmResponse: Response;

    try {
      crmResponse = await fetch(crmUrl, {
        method: "POST",
        headers: {
          Authorization: crmAuthorization,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(crmPayload),
      });
    } catch {
      throw new RequestError("Il CRM non è raggiungibile.", 502);
    }

    if (!crmResponse.ok) {
      throw new RequestError("Il CRM ha rifiutato la richiesta.", 502);
    }

    return Response.json({ ok: true });
  } catch (error) {
    if (savedCurriculum) {
      try {
        await deleteCurriculum(savedCurriculum.id);
      } catch (deleteError) {
        console.error("Impossibile eliminare il curriculum orfano da MongoDB", deleteError);
      }
    }

    if (error instanceof RequestError) {
      return Response.json({ error: error.message }, { status: error.status });
    }

    console.error("Errore inatteso durante l'invio della lead", error);
    return Response.json({ error: "Non è stato possibile inviare la richiesta." }, { status: 500 });
  }
}
