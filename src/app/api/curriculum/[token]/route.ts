import { findCurriculum, type DownloadableCurriculum } from "@/lib/curriculum-storage";

function encodeFileName(fileName: string) {
  return encodeURIComponent(fileName).replace(/[!'()*]/g, (character) =>
    `%${character.charCodeAt(0).toString(16).toUpperCase()}`,
  );
}

function getDownloadHeaders(curriculum: DownloadableCurriculum) {
  const fallbackName = curriculum.fileName
    .normalize("NFKD")
    .replace(/[^\x20-\x7E]/g, "_")
    .replace(/["\\]/g, "_");

  return {
    "Cache-Control": "private, no-store, max-age=0",
    "Content-Disposition": `attachment; filename="${fallbackName}"; filename*=UTF-8''${encodeFileName(curriculum.fileName)}`,
    "Content-Length": String(curriculum.size),
    "Content-Security-Policy": "default-src 'none'; sandbox",
    "Content-Type": curriculum.contentType,
    "X-Content-Type-Options": "nosniff",
  };
}

async function loadCurriculum(context: RouteContext<"/api/curriculum/[token]">) {
  const { token } = await context.params;
  return findCurriculum(token);
}

export async function GET(
  _request: Request,
  context: RouteContext<"/api/curriculum/[token]">,
) {
  try {
    const curriculum = await loadCurriculum(context);

    if (!curriculum) {
      return Response.json({ error: "Curriculum non trovato o link scaduto." }, { status: 404 });
    }

    return new Response(new Uint8Array(curriculum.data), {
      headers: getDownloadHeaders(curriculum),
    });
  } catch (error) {
    console.error("Errore durante il download del curriculum", error);
    return Response.json({ error: "Non è stato possibile scaricare il curriculum." }, { status: 500 });
  }
}

export async function HEAD(
  _request: Request,
  context: RouteContext<"/api/curriculum/[token]">,
) {
  try {
    const curriculum = await loadCurriculum(context);

    if (!curriculum) {
      return new Response(null, { status: 404 });
    }

    return new Response(null, { headers: getDownloadHeaders(curriculum) });
  } catch (error) {
    console.error("Errore durante la verifica del curriculum", error);
    return new Response(null, { status: 500 });
  }
}
