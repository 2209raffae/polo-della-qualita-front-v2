export type FoundationDistrictKey =
  | "eventi"
  | "italiano-del-gusto"
  | "moda-lusso"
  | "istruzione-formazione"
  | "salute-benessere"
  | "comunita-energetiche";

export const districtFoundationContent = {
  eventi: [
    "Il Distretto Eventi & Intrattenimento sar\u00e0 dedicato allo sviluppo di attivit\u00e0 permanenti, fiere, manifestazioni, eventi fisici e digitali, congressi, iniziative culturali, spettacoli, experience economy e momenti di networking.",
    "L'obiettivo \u00e8 rendere il Polo della Qualit\u00e0 un luogo vivo durante tutto l'anno, capace di attrarre pubblico, imprese, professionisti, buyer, visitatori e stakeholder qualificati.",
  ],
  "italiano-del-gusto": [
    "Il Distretto Italiano del Gusto sar\u00e0 dedicato alla valorizzazione delle eccellenze agroalimentari italiane, delle produzioni territoriali, delle cantine, della ristorazione, delle esperienze enogastronomiche e delle filiere del Made in Italy alimentare.",
    "L'obiettivo \u00e8 creare una piattaforma permanente capace di integrare esposizione fisica, vendita digitale, degustazioni, formazione, turismo, export e promozione dei prodotti italiani.",
  ],
  "moda-lusso": [
    "Il Distretto Moda & Lusso sar\u00e0 dedicato alle eccellenze italiane e internazionali nei settori moda, gioielleria, accessori, wedding, design, mobilit\u00e0 premium, nautica e retail omnicanale di qualit\u00e0.",
    "L'obiettivo \u00e8 sviluppare un ambiente esclusivo, esperienziale e commerciale, capace di attrarre brand, operatori, clienti, partner e investitori interessati al mondo del lusso, dello stile e della qualit\u00e0.",
  ],
  "istruzione-formazione": [
    "Il Distretto Istruzione & Formazione sar\u00e0 dedicato allo sviluppo delle competenze, alla formazione professionale, alla formazione manageriale, alle academy, alle universit\u00e0 private, alle scuole specialistiche e ai percorsi collegati all'innovazione digitale.",
    "L'obiettivo \u00e8 creare un polo formativo permanente capace di collegare imprese, giovani, professionisti, universit\u00e0, startup e nuove competenze richieste dal mercato.",
  ],
  "salute-benessere": [
    "Il Distretto Salute & Benessere sar\u00e0 dedicato alla qualit\u00e0 della vita, alla prevenzione, alla longevit\u00e0, al wellness, alla medicina specialistica, alla salute digitale, alla nutrizione, al recupero fisico, alla medicina estetica e ai servizi sanitari avanzati.",
    "L'obiettivo \u00e8 creare un ecosistema integrato per la persona, nel quale salute, benessere, prevenzione, tecnologia e stile di vita possano convivere in un modello organizzato e accessibile.",
  ],
  "comunita-energetiche": [
    "Il Distretto Comunit\u00e0 Energetiche sar\u00e0 dedicato alla sostenibilit\u00e0 energetica, alla produzione e condivisione di energia rinnovabile, all'efficientamento, alla mobilit\u00e0 elettrica e alla gestione intelligente dei consumi.",
    "L'obiettivo \u00e8 rendere il Polo della Qualit\u00e0 un ecosistema energeticamente evoluto, capace di ridurre i costi, migliorare la sostenibilit\u00e0 ambientale e creare benefici per le attivit\u00e0 aderenti e per il territorio.",
  ],
} as const satisfies Record<FoundationDistrictKey, readonly string[]>;
