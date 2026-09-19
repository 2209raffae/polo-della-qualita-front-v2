import type { Metadata } from "next";
import FoundationHome from "@/components/ui/FoundationHome";
import { maintenanceMode } from "@/config/maintenance";

export const metadata: Metadata = maintenanceMode
  ? {
      title: "Sito in manutenzione | Polo della Qualità",
      description: "Il sito del Polo della Qualità è temporaneamente in manutenzione.",
      robots: { index: false, follow: false },
    }
  : {};

export default function Home() {
  if (maintenanceMode) {
    return (
      <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0b0b0b] px-6 py-20 text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(200,164,93,0.15),transparent_35%),linear-gradient(135deg,#050505_0%,#17120d_50%,#080808_100%)]" />
        <div className="relative z-10 mx-auto w-full max-w-4xl text-center">
          <p className="mb-12 text-xs font-bold uppercase tracking-[0.24em] text-[#c8a45d] md:text-sm">
            Polo della Qualità
          </p>
          <div className="mx-auto mb-8 h-px w-16 bg-[#c8a45d]" />
          <h1 className="font-serif text-5xl font-medium leading-tight md:text-7xl">
            Sito in manutenzione
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-base font-light leading-relaxed text-[#d8d2c4] md:text-xl">
            Stiamo lavorando per tornare presto online. Grazie per la pazienza.
          </p>
        </div>
      </main>
    );
  }

  return <FoundationHome />;
}
