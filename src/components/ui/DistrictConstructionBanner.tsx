"use client";

import Image from "next/image";
import DistrictSectors from "@/components/ui/DistrictSectors";
import { useRouter } from "next/navigation";
import {
  districtFoundationContent,
  districtFoundationSectors,
  type FoundationDistrictKey,
} from "@/data/district-foundation-content";

type DistrictConstructionBannerProps = {
  title: string;
  districtKey: FoundationDistrictKey;
  imageSrc?: string;
};

export default function DistrictConstructionBanner({
  title,
  districtKey,
  imageSrc,
}: DistrictConstructionBannerProps) {
  const router = useRouter();
  const paragraphs = districtFoundationContent[districtKey];

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
            alt={title}
            fill
            sizes="100vw"
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.75),rgba(0,0,0,0.35)_55%,rgba(0,0,0,0.55))]" />
        </>
      ) : null}

      <section className="relative z-10 w-full max-w-4xl px-0 py-12 text-center md:py-16">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#c8a45d]">
          {title}
        </p>
        <h1 className="font-serif text-4xl font-medium leading-tight md:text-6xl">
          Pagina in costruzione
        </h1>
        <div className="mx-auto mt-8 max-w-3xl space-y-4 text-base leading-relaxed text-[#d8d2c4] md:text-lg">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#c8a45d]">
            Dal Documento Fondativo Ufficiale
          </p>
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="mx-auto max-w-3xl">
          <DistrictSectors sectors={districtFoundationSectors[districtKey]} centered />
        </div>
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
