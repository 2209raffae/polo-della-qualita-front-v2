import { NextResponse, type NextRequest } from "next/server";
import { maintenanceMode } from "@/config/maintenance";

export function proxy(request: NextRequest) {
  if (!maintenanceMode) {
    return NextResponse.next();
  }

  const { pathname } = request.nextUrl;

  // Framework assets are still needed to display the maintenance page.
  if (pathname.startsWith("/_next/") || pathname === "/favicon.ico") {
    return NextResponse.next();
  }

  if (pathname === "/" && (request.method === "GET" || request.method === "HEAD")) {
    const response = NextResponse.next();
    response.headers.set("Cache-Control", "no-store");
    return response;
  }

  if (pathname.startsWith("/api/") || (request.method !== "GET" && request.method !== "HEAD")) {
    return NextResponse.json(
      { error: "Il sito è temporaneamente in manutenzione." },
      { status: 503, headers: { "Cache-Control": "no-store", "Retry-After": "3600" } },
    );
  }

  const response = NextResponse.redirect(new URL("/", request.url), 307);
  response.headers.set("Cache-Control", "no-store");
  return response;
}

export const config = {
  matcher: "/:path*",
};
