"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

type DistrictConstructionBannerProps = {
  title?: string;
  imageSrc?: string;
};

export default function DistrictConstructionBanner({ title, imageSrc }: DistrictConstructionBannerProps) {
  const router = useRouter();

  function handleBack() {
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
      return;
    }

    router.push("/");
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0b0b0b] px-6 text-white">
      {imageSrc ? (
        <>
          <Image
            src={imageSrc}
            alt={title ?? "Distretto"}
            fill
            sizes="100vw"
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.75),rgba(0,0,0,0.35)_55%,rgba(0,0,0,0.55))]" />
        </>
      ) : null}

      <section className="relative z-10 w-full max-w-3xl px-0 py-12 text-center md:py-16">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#c8a45d]">
          {title ?? "Distretto"}
        </p>
        <h1 className="font-serif text-4xl font-medium leading-tight md:text-6xl">
          Pagina in costruzione
        </h1>
        <button
          type="button"
          onClick={handleBack}
          className="mt-10 inline-flex min-h-12 items-center justify-center rounded-md border border-white/45 bg-black/25 px-5 py-3 text-[11px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-sm transition-colors hover:border-[#c8a45d] hover:text-[#c8a45d]"
        >
          Torna indietro
        </button>
      </section>
    </main>
  );
}
