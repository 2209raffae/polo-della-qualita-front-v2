export type DistrictSlug =
  | "istruzione-formazione"
  | "salute-benessere"
  | "comunita-energetiche"
  | "italiano-del-gusto";

type DistrictDetail = {
  slug: DistrictSlug;
  menuLabel: string;
  title: string;
  description: string;
  heroImage: string;
  introTitle: string;
  introDescription: string;
  introImages: [string, string];
  featureTitle: string;
  featureDescription: string;
  featureImage: string;
  alternating: {
    title: string;
    description: string;
    mediaUrl: string;
  }[];
};

export const districts: DistrictDetail[] = [
  {
    slug: "istruzione-formazione",
    menuLabel: "Istruzione & Formazione",
    title: "ISTRUZIONE & FORMAZIONE",
    description:
      "Un distretto dedicato allo sviluppo delle competenze, alla formazione professionale, alle academy, alle università private e ai percorsi collegati all'innovazione.",
    heroImage: "/images/distretto-istruzione-formazione-hero.jpg",
    introTitle: "UN POLO FORMATIVO PER NUOVE COMPETENZE",
    introDescription:
      "Il distretto nasce per collegare imprese, giovani, professionisti, scuole specialistiche, università, startup e percorsi di crescita orientati al mercato.",
    introImages: [
      "/images/distretto-istruzione-formazione-intro-1.jpg",
      "/images/distretto-istruzione-formazione-intro-2.jpg",
    ],
    featureTitle: "ACADEMY, BUSINESS SCHOOL E INNOVAZIONE",
    featureDescription:
      "Spazi, programmi e relazioni pensati per ospitare formazione manageriale, percorsi professionalizzanti, laboratori digitali e progetti di aggiornamento continuo.",
    featureImage: "/images/distretto-istruzione-formazione-focus.jpg",
    alternating: [
      {
        title: "FORMAZIONE\nPROFESSIONALE",
        description:
          "Percorsi verticali per imprese, professionisti e nuove generazioni, con attenzione alle competenze richieste dai distretti del Polo.",
        mediaUrl: "/images/distretto-istruzione-formazione-professionale.jpg",
      },
      {
        title: "INNOVAZIONE,\nSTARTUP E TALENTI",
        description:
          "Un ambiente in cui formazione, tecnologia, mentorship e relazioni qualificate possono sostenere nuove iniziative imprenditoriali.",
        mediaUrl: "/images/distretto-istruzione-formazione-innovazione.jpg",
      },
    ],
  },
  {
    slug: "salute-benessere",
    menuLabel: "Salute & Benessere",
    title: "SALUTE & BENESSERE",
    description:
      "Un distretto dedicato alla qualità della vita, alla prevenzione, al wellness, alla medicina specialistica, alla nutrizione e ai servizi avanzati per la persona.",
    heroImage: "/images/distretto-salute-benessere-hero.jpg",
    introTitle: "UN ECOSISTEMA PER LA PERSONA",
    introDescription:
      "Il distretto integra salute, prevenzione, benessere, tecnologia e stile di vita in un modello organizzato, accessibile e orientato alla qualità.",
    introImages: [
      "/images/distretto-salute-benessere-intro-1.jpg",
      "/images/distretto-salute-benessere-intro-2.jpg",
    ],
    featureTitle: "PREVENZIONE, WELLNESS E SERVIZI SPECIALISTICI",
    featureDescription:
      "Cliniche, centri wellness, diagnostica, nutrizione, fitness premium e servizi sanitari avanzati possono trovare un contesto integrato e riconoscibile.",
    featureImage: "/images/distretto-salute-benessere-focus.jpg",
    alternating: [
      {
        title: "LONGEVITY\nE PREVENZIONE",
        description:
          "Programmi e servizi dedicati alla prevenzione, al monitoraggio e al miglioramento dello stile di vita.",
        mediaUrl: "/images/distretto-salute-benessere-longevity.jpg",
      },
      {
        title: "WELLNESS,\nRECOVERY E LIFESTYLE",
        description:
          "Esperienze e servizi per il benessere quotidiano, il recupero fisico, la cura della persona e la qualità del tempo.",
        mediaUrl: "/images/distretto-salute-benessere-wellness.jpg",
      },
    ],
  },
  {
    slug: "comunita-energetiche",
    menuLabel: "Comunità Energetiche",
    title: "COMUNITA ENERGETICHE",
    description:
      "Un distretto dedicato alla sostenibilità energetica, alla produzione e condivisione di energia rinnovabile, all'efficientamento e alla mobilità elettrica.",
    heroImage: "/images/distretto-comunita-energetiche-hero.jpg",
    introTitle: "ENERGIA CONDIVISA E SOSTENIBILITA",
    introDescription:
      "Il distretto punta a rendere il Polo un ecosistema energeticamente evoluto, capace di ridurre i costi e migliorare l'impatto ambientale.",
    introImages: [
      "/images/distretto-comunita-energetiche-intro-1.jpg",
      "/images/distretto-comunita-energetiche-intro-2.jpg",
    ],
    featureTitle: "RINNOVABILI, ACCUMULO E SMART GRID",
    featureDescription:
      "Produzione di energia, condivisione, accumulo, gestione intelligente dei consumi e soluzioni per l'efficientamento possono diventare asset comuni del Polo.",
    featureImage: "/images/distretto-comunita-energetiche-focus.jpg",
    alternating: [
      {
        title: "COMUNITA\nENERGETICHE",
        description:
          "Un modello collaborativo per produrre, condividere e valorizzare energia rinnovabile a beneficio delle attività aderenti.",
        mediaUrl: "/images/distretto-comunita-energetiche-cer.jpg",
      },
      {
        title: "EFFICIENZA\nE MOBILITA",
        description:
          "Soluzioni per ridurre i consumi, integrare colonnine di ricarica e gestire in modo intelligente i fabbisogni energetici.",
        mediaUrl: "/images/distretto-comunita-energetiche-mobilita.jpg",
      },
    ],
  },
  {
    slug: "italiano-del-gusto",
    menuLabel: "Italiano del Gusto",
    title: "ITALIANO DEL GUSTO",
    description:
      "Un distretto dedicato alla valorizzazione delle eccellenze agroalimentari italiane, delle produzioni territoriali, della ristorazione e delle esperienze enogastronomiche.",
    heroImage: "/images/distretto-italiano-del-gusto-hero.jpg",
    introTitle: "IL MADE IN ITALY ALIMENTARE IN UN LUOGO PERMANENTE",
    introDescription:
      "Il distretto mette al centro prodotti tipici, cantine, oleifici, caseifici, cucina regionale, degustazioni, formazione ed export agroalimentare.",
    introImages: [
      "/images/distretto-italiano-del-gusto-intro-1.jpg",
      "/images/distretto-italiano-del-gusto-intro-2.jpg",
    ],
    featureTitle: "FOOD EXPERIENCE, DEGUSTAZIONI E PROMOZIONE",
    featureDescription:
      "Un sistema capace di integrare esposizione fisica, vendita digitale, eventi, cooking academy, turismo, export e promozione delle filiere italiane.",
    featureImage: "/images/distretto-italiano-del-gusto-focus.jpg",
    alternating: [
      {
        title: "ECCELLENZE\nTERRITORIALI",
        description:
          "Produttori, consorzi e operatori possono raccontare territori, filiere e qualità attraverso esperienze dirette.",
        mediaUrl: "/images/distretto-italiano-del-gusto-territori.jpg",
      },
      {
        title: "RISTORAZIONE,\nACADEMY ED EXPORT",
        description:
          "Percorsi di degustazione, formazione, promozione commerciale e relazioni internazionali per valorizzare il gusto italiano.",
        mediaUrl: "/images/distretto-italiano-del-gusto-academy.jpg",
      },
    ],
  },
];

export const districtNavLinks = [
  {
    num: "01",
    label: "Distretto Eventi & Intrattenimento",
    href: "/eventi",
  },
  {
    num: "02",
    label: "Distretto Italiano del Gusto",
    href: "/distretti/italiano-del-gusto",
  },
  {
    num: "03",
    label: "Distretto Istruzione & Formazione",
    href: "/distretti/istruzione-formazione",
  },
  {
    num: "04",
    label: "Distretto Salute & Benessere",
    href: "/distretti/salute-benessere",
  },
  {
    num: "05",
    label: "Distretto Comunità Energetiche",
    href: "/distretti/comunita-energetiche",
  },
];

export function getDistrict(slug: DistrictSlug) {
  return districts.find((district) => district.slug === slug);
}
