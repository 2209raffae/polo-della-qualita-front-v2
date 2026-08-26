type DistrictFoundationExcerptProps = {
  districtTitle: string;
  paragraphs: readonly string[];
};

export default function DistrictFoundationExcerpt({
  districtTitle,
  paragraphs,
}: DistrictFoundationExcerptProps) {
  return (
    <section className="border-y border-[#c8a45d]/25 bg-[#0b0b0b] text-white">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-8 py-20 md:grid-cols-[0.75fr_1.4fr] md:px-16 md:py-28 lg:gap-20">
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#c8a45d]">
            Documento Fondativo Ufficiale
          </p>
          <h2 className="font-serif text-3xl font-medium leading-tight md:text-5xl">
            {districtTitle}
          </h2>
        </div>
        <div className="flex max-w-3xl flex-col gap-5 text-base leading-relaxed text-[#d8d2c4] md:text-lg">
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
