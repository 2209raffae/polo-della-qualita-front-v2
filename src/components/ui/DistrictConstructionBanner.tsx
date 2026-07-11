"use client";

import { useRouter } from "next/navigation";

type DistrictConstructionBannerProps = {
  title?: string;
};

export default function DistrictConstructionBanner({ title }: DistrictConstructionBannerProps) {
  const router = useRouter();

  function handleBack() {
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
      return;
    }

    router.push("/");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0b0b0b] px-6 text-white">
      <section className="w-full max-w-3xl rounded-md border border-[#c8a45d]/35 bg-white/[0.035] px-6 py-12 text-center shadow-2xl shadow-black/30 md:px-12 md:py-16">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#c8a45d]">
          {title ?? "Distretto"}
        </p>
        <h1 className="font-serif text-4xl font-medium leading-tight md:text-6xl">
          Pagina in costruzione
        </h1>
        <button
          type="button"
          onClick={handleBack}
          className="mt-10 inline-flex min-h-12 items-center justify-center rounded-md border border-white/35 px-5 py-3 text-[11px] font-bold uppercase tracking-[0.14em] text-white transition-colors hover:border-[#c8a45d] hover:text-[#c8a45d]"
        >
          Torna indietro
        </button>
      </section>
    </main>
  );
}
