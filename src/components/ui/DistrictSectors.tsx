type DistrictSectorsProps = {
  sectors: readonly string[];
  centered?: boolean;
};

export default function DistrictSectors({ sectors, centered = false }: DistrictSectorsProps) {
  return (
    <ul
      aria-label="Settori del distretto"
      className={`mt-6 flex flex-wrap gap-2 ${centered ? "justify-center" : ""}`}
    >
      {sectors.map((sector) => (
        <li
          key={sector}
          className="max-w-full rounded-sm border border-white/15 px-2.5 py-1 text-xs leading-relaxed font-normal text-[#d8d2c4]"
        >
          {sector}
        </li>
      ))}
    </ul>
  );
}
