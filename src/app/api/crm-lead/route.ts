type LeadRequest = {
  leadType?: "contact" | "event";
  email?: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
  message?: string;
  crmTitle?: string;
};

const leadTitles: Record<NonNullable<LeadRequest["leadType"]>, string> = {
  contact: "Richiesta candidatura MANAGER",
  event: "Richiesta proposta evento",
};

function formatCrmDate(date: Date) {
  const pad = (value: number) => String(value).padStart(2, "0");

  return [
    date.getFullYear(),
    pad(date.getMonth() + 1),
    pad(date.getDate()),
  ].join("-") + ` ${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
}

function compact(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function buildMessage(lead: LeadRequest) {
  const rows = [
    ["Nome", `${compact(lead.firstName)} ${compact(lead.lastName)}`.trim()],
    ["Email", compact(lead.email)],
    ["Telefono", compact(lead.phone)],
    ["Messaggio", compact(lead.message)],
    ["Origine", lead.leadType === "event" ? "Form Eventi" : "Form Sito"],
  ];

  return rows
    .filter(([, value]) => value)
    .map(([label, value]) => `${label}: ${value}`)
    .join("\n");
}

export async function POST(request: Request) {
  const crmUrl = process.env.CRM_LEAD_ENDPOINT;
  const crmAuthorization = process.env.CRM_LEAD_AUTHORIZATION;

  if (!crmUrl || !crmAuthorization) {
    return Response.json(
      { error: "CRM non configurato: mancano CRM_LEAD_ENDPOINT o CRM_LEAD_AUTHORIZATION." },
      { status: 500 },
    );
  }

  let lead: LeadRequest;

  try {
    lead = await request.json();
  } catch {
    return Response.json({ error: "Payload non valido" }, { status: 400 });
  }

  const firstName = compact(lead.firstName);
  const lastName = compact(lead.lastName);
  const email = compact(lead.email);

  if (!firstName || !lastName || !email) {
    return Response.json({ error: "Nome, cognome ed email sono obbligatori" }, { status: 400 });
  }

  const leadType = lead.leadType === "event" ? "event" : "contact";
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
      TKTESTO: buildMessage({ ...lead, leadType }),
      TK_AGENDA_FLG: "0",
      TK_ALLEGATI: "0",
    },
  };

  const crmResponse = await fetch(crmUrl, {
    method: "POST",
    headers: {
      Authorization: crmAuthorization,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(crmPayload),
  });

  if (!crmResponse.ok) {
    return Response.json({ error: "Il CRM ha rifiutato la richiesta." }, { status: 502 });
  }

  return Response.json({ ok: true });
}
