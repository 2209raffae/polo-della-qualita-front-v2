import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

type ContentBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "quote"; text: string }
  | { type: "list"; items: string[] };

type DocumentSection = {
  id?: string;
  kicker: string;
  title: string;
  blocks: ContentBlock[];
};

const distretti = [
  {
    num: "01",
    title: "Distretto Eventi & Intrattenimento",
    href: "/eventi",
    paragraphs: [
      "Il Distretto Eventi & Intrattenimento sar\u00e0 dedicato allo sviluppo di attivit\u00e0 permanenti, fiere, manifestazioni, eventi fisici e digitali, congressi, iniziative culturali, spettacoli, experience economy e momenti di networking.",
      "L'obiettivo \u00e8 rendere il Polo della Qualit\u00e0 un luogo vivo durante tutto l'anno, capace di attrarre pubblico, imprese, professionisti, buyer, visitatori e stakeholder qualificati.",
    ],
    chips: [
      "Eventi permanenti",
      "Fiere permanenti",
      "Eventi digitali",
      "Congressi",
      "Convention",
      "Temporary showroom",
      "Showroom permanenti",
      "Experience economy",
      "Eventi aziendali",
      "Eventi culturali",
      "Spettacoli",
      "Intrattenimento",
      "Networking Business",
    ],
  },
  {
    num: "02",
    title: "Distretto Italiano del Gusto",
    href: "/distretti/italiano-del-gusto",
    paragraphs: [
      "Il Distretto Italiano del Gusto sar\u00e0 dedicato alla valorizzazione delle eccellenze agroalimentari italiane, delle produzioni territoriali, delle cantine, della ristorazione, delle esperienze enogastronomiche e delle filiere del Made in Italy alimentare.",
      "L'obiettivo \u00e8 creare una piattaforma permanente capace di integrare esposizione fisica, vendita digitale, degustazioni, formazione, turismo, export e promozione dei prodotti italiani.",
    ],
    chips: [
      "Food Experience",
      "Prodotti tipici agroalimentari nazionali",
      "Cantine italiane",
      "Oleifici",
      "Caseifici",
      "Pasticceria artigianale",
      "Ristorazione",
      "Cucina regionale",
      "Cooking Academy",
      "Degustazioni",
      "Export agroalimentare",
      "Marketplace Food",
    ],
  },
  {
    num: "03",
    title: "Distretto Moda & Lusso",
    href: "/distretti/moda-lusso",
    paragraphs: [
      "Il Distretto Moda & Lusso sar\u00e0 dedicato alle eccellenze italiane e internazionali nei settori moda, gioielleria, accessori, wedding, design, mobilit\u00e0 premium, nautica e retail omnicanale di qualit\u00e0.",
      "L'obiettivo \u00e8 sviluppare un ambiente esclusivo, esperienziale e commerciale, capace di attrarre brand, operatori, clienti, partner e investitori interessati al mondo del lusso, dello stile e della qualit\u00e0.",
    ],
    chips: [
      "Gioielleria",
      "Orologeria",
      "Moda",
      "Accessori",
      "Pelletteria",
      "Wedding District",
      "Luxury Experience",
      "Design",
      "Arredamento Luxury",
      "Automotive Premium",
      "Nautica Premium",
      "Retail omnicanale",
    ],
  },
  {
    num: "04",
    title: "Distretto Istruzione & Formazione",
    href: "/distretti/istruzione-formazione",
    paragraphs: [
      "Il Distretto Istruzione & Formazione sar\u00e0 dedicato allo sviluppo delle competenze, alla formazione professionale, alla formazione manageriale, alle academy, alle universit\u00e0 private, alle scuole specialistiche e ai percorsi collegati all'innovazione digitale.",
      "L'obiettivo \u00e8 creare un polo formativo permanente capace di collegare imprese, giovani, professionisti, universit\u00e0, startup e nuove competenze richieste dal mercato.",
    ],
    chips: [
      "Universit\u00e0 private",
      "Academy",
      "AI & Digital School",
      "Business School",
      "Hospitality School",
      "Luxury School",
      "Scuole professionali",
      "Formazione continua",
      "Formazione manageriale",
      "Incubazione startup",
    ],
  },
  {
    num: "05",
    title: "Distretto Salute & Benessere",
    href: "/distretti/salute-benessere",
    paragraphs: [
      "Il Distretto Salute & Benessere sar\u00e0 dedicato alla qualit\u00e0 della vita, alla prevenzione, alla longevit\u00e0, al wellness, alla medicina specialistica, alla salute digitale, alla nutrizione, al recupero fisico, alla medicina estetica e ai servizi sanitari avanzati.",
      "L'obiettivo \u00e8 creare un ecosistema integrato per la persona, nel quale salute, benessere, prevenzione, tecnologia e stile di vita possano convivere in un modello organizzato e accessibile.",
    ],
    chips: [
      "Longevity Clinic",
      "Wellness Center",
      "Fitness Premium",
      "Lifestyle Club",
      "Nutrizione",
      "Medicina preventiva",
      "Medicina estetica",
      "Health Tech",
      "Telemedicina",
      "Diagnostica",
      "Poliambulatori specialistici",
    ],
  },
  {
    num: "06",
    title: "Distretto Comunit\u00e0 Energetiche",
    href: "/distretti/comunita-energetiche",
    paragraphs: [
      "Il Distretto Comunit\u00e0 Energetiche sar\u00e0 dedicato alla sostenibilit\u00e0 energetica, alla produzione e condivisione di energia rinnovabile, all'efficientamento, alla mobilit\u00e0 elettrica e alla gestione intelligente dei consumi.",
      "L'obiettivo \u00e8 rendere il Polo della Qualit\u00e0 un ecosistema energeticamente evoluto, capace di ridurre i costi, migliorare la sostenibilit\u00e0 ambientale e creare benefici per le attivit\u00e0 aderenti e per il territorio.",
    ],
    chips: [
      "Comunit\u00e0 Energetiche Rinnovabili (CER)",
      "Produzione di energia",
      "Condivisione energetica",
      "Accumulo",
      "Efficientamento energetico",
      "Mobilit\u00e0 elettrica",
      "Colonnine di ricarica",
      "Smart Grid",
      "Gestione energetica",
      "Sostenibilit\u00e0 ambientale",
    ],
  },
];
const sections: DocumentSection[] = [
  {
    id: "inizio",
    kicker: "Nuova fase",
    title: "Una nuova fase per il Polo della Qualità",
    blocks: [
      { type: "paragraph", text: "Il Polo della Qualità entra in una nuova fase del proprio percorso." },
      { type: "paragraph", text: "Una fase fondata su visione, trasparenza, organizzazione, responsabilità e partecipazione." },
      { type: "paragraph", text: "Il presente Documento Fondativo Ufficiale nasce con l'obiettivo di raccontare in modo chiaro gli obiettivi del progetto, il valore che si intende generare, il modello organizzativo previsto e le opportunità che potranno nascere per imprese, professionisti, istituzioni, investitori, università, startup, cittadini e futuri soci della Società Consortile." },
      { type: "paragraph", text: "Siamo consapevoli che la storia pregressa del Polo della Qualità ha attraversato fasi complesse e che ogni nuovo percorso deve conquistare fiducia con i fatti, non con le promesse." },
      { type: "quote", text: "La fiducia non si chiede, si costruisce attraverso la trasparenza, la competenza e la coerenza delle azioni." },
      { type: "paragraph", text: "Il presente documento viene pubblicato come primo riferimento istituzionale del progetto, affinché tutte le parti interessate possano comprendere la visione generale, conoscere gli obiettivi e contribuire, secondo le proprie competenze, alla costruzione del nuovo ecosistema." },
    ],
  },
  {
    kicker: "01",
    title: "Perché nasce il Polo della Qualità",
    blocks: [
      { type: "paragraph", text: "Negli ultimi anni il commercio, la produzione, i servizi, la formazione, la logistica e il rapporto tra imprese e consumatori sono profondamente cambiati." },
      { type: "paragraph", text: "La crescita dell'e-commerce, la digitalizzazione dei mercati, l'aumento della concorrenza internazionale, la frammentazione delle filiere produttive e l'evoluzione delle abitudini di consumo hanno reso necessario un nuovo modello di sviluppo." },
      { type: "paragraph", text: "Molte imprese, in particolare piccole e medie aziende italiane, hanno bisogno di strumenti più forti per competere: piattaforme digitali, marketing, logistica, formazione, eventi, servizi condivisi, accesso a nuovi mercati e maggiore capacità organizzativa." },
      { type: "paragraph", text: "Allo stesso tempo, molti modelli tradizionali non sono più sufficienti." },
      { type: "paragraph", text: "Il centro commerciale tradizionale non basta più." },
      { type: "paragraph", text: "L'outlet non basta più." },
      { type: "paragraph", text: "La fiera temporanea non basta più." },
      { type: "paragraph", text: "Il marketplace digitale, da solo, non basta più." },
      { type: "paragraph", text: "Da questa consapevolezza nasce il nuovo Polo della Qualità: non come semplice riqualificazione immobiliare, ma come infrastruttura economica permanente, capace di integrare spazi fisici, piattaforme digitali, imprese, servizi, innovazione, formazione, logistica, eventi e qualità della vita." },
    ],
  },
  {
    id: "visione",
    kicker: "02-03",
    title: "Visione e Missione",
    blocks: [
      { type: "heading", text: "La Visione" },
      { type: "paragraph", text: "Il Polo della Qualità nasce con l'obiettivo di diventare:" },
      { type: "quote", text: "Il primo Ecosistema Permanente Integrato dedicato al Commercio, ai Servizi, all'Innovazione e alla Qualità della Vita." },
      { type: "paragraph", text: "Un modello capace di valorizzare il Made in Italy, sostenere la crescita delle imprese, attrarre investimenti, generare occupazione, promuovere innovazione e contribuire allo sviluppo economico e sociale del territorio." },
      { type: "paragraph", text: "La visione è quella di costruire un luogo fisico e digitale nel quale imprese, professionisti, istituzioni, università, startup, investitori e cittadini possano collaborare stabilmente all'interno di un'unica organizzazione coordinata." },
      { type: "heading", text: "La Missione" },
      { type: "paragraph", text: "La missione del Polo della Qualità è creare un ecosistema aperto, organizzato e permanente, capace di mettere a disposizione delle imprese e delle attività aderenti servizi comuni, strumenti digitali, marketing, logistica, eventi, formazione, relazioni qualificate e nuove opportunità di mercato." },
      { type: "paragraph", text: "Ogni impresa dovrà mantenere la propria autonomia, la propria identità e il proprio valore distintivo, beneficiando però della forza di un sistema condiviso." },
      { type: "paragraph", text: "L'obiettivo non è uniformare le aziende, ma valorizzarle attraverso un modello di collaborazione organizzata." },
    ],
  },
  {
    kicker: "04",
    title: "Che cos'è il Polo della Qualità",
    blocks: [
      { type: "paragraph", text: "Il Polo della Qualità viene trasformato in un:" },
      { type: "quote", text: "Permanent Integrated Lifestyle & Commerce District" },
      { type: "paragraph", text: "Un ecosistema multifunzionale permanente capace di integrare in un'unica infrastruttura fisica e digitale:" },
      { type: "list", items: ["retail fisico", "piattaforma digitale proprietaria", "showroom permanenti", "marketplace omnicanale", "logistica integrata", "eventi continuativi", "turismo", "education", "longevity & lifestyle", "food experience", "luxury districts", "CRM centralizzato", "marketing multisettoriale", "servizi condivisi per imprese, professionisti e cittadini"] },
      { type: "paragraph", text: "Il progetto supera il tradizionale modello di centro commerciale, outlet, fiera tradizionale, business park e semplice marketplace digitale per evolversi in una piattaforma infrastrutturale permanente del commercio, dei servizi, dell'innovazione e dello stile di vita italiano." },
      { type: "paragraph", text: "Il Polo della Qualità intende mettere in rete imprese, professionisti, istituzioni, università, investitori e consumatori attraverso un ecosistema integrato, capace di generare valore economico, sociale, culturale e territoriale." },
    ],
  },
  {
    kicker: "05-09",
    title: "Identità, metodo e trasparenza",
    blocks: [
      { type: "heading", text: "Chi siamo" },
      { type: "paragraph", text: "Il Polo della Qualità è un progetto di rigenerazione economica, imprenditoriale e territoriale che intende trasformare un importante patrimonio immobiliare in una piattaforma permanente di sviluppo." },
      { type: "paragraph", text: "Il progetto sarà coordinato attraverso una Società Consortile, destinata a operare come cabina di regia dell'intero ecosistema." },
      { type: "paragraph", text: "La Società Consortile avrà il compito di coordinare la governance, i servizi comuni, la piattaforma digitale, il CRM, il marketing, la logistica, gli eventi, lo sviluppo dei distretti tematici e le relazioni con imprese, partner, investitori e istituzioni." },
      { type: "heading", text: "Dove vogliamo arrivare" },
      { type: "paragraph", text: "Il Polo della Qualità intende diventare un punto di riferimento nazionale e internazionale per:" },
      { type: "list", items: ["la crescita delle imprese italiane", "la valorizzazione del Made in Italy", "lo sviluppo di filiere corte e integrate", "la nascita e la crescita di startup", "l'attrazione di investimenti", "la formazione di nuove competenze", "la creazione di occupazione qualificata", "lo sviluppo turistico e territoriale", "l'innovazione digitale", "la sostenibilità energetica", "la qualità della vita"] },
      { type: "paragraph", text: "L'obiettivo è costruire un modello replicabile, capace di generare valore nel tempo e di diventare un riferimento per altri territori." },
      { type: "heading", text: "Come lavoreremo" },
      { type: "paragraph", text: "Il progetto sarà sviluppato in modo progressivo, ordinato e trasparente. La Società Consortile coordinerà la visione generale e l'attuazione del progetto." },
      { type: "paragraph", text: "Il Direttore Generale, una volta individuato, avrà il compito di coordinare lo sviluppo operativo dell'ecosistema. I Manager di Distretto avranno il compito di sviluppare i singoli comparti, coinvolgere operatori qualificati, proporre iniziative, costruire relazioni e contribuire alla crescita delle rispettive filiere." },
      { type: "paragraph", text: "Il metodo di lavoro sarà fondato su:" },
      { type: "list", items: ["obiettivi chiari", "competenze selezionate", "responsabilità definite", "strumenti digitali condivisi", "CRM centralizzato", "marketing coordinato", "monitoraggio dei risultati", "trasparenza verso le parti interessate"] },
      { type: "heading", text: "I Principi Fondativi" },
      { type: "list", items: ["trasparenza", "legalità", "responsabilità", "meritocrazia", "competenza", "collaborazione", "innovazione continua", "sostenibilità economica, sociale e ambientale", "valorizzazione del Made in Italy", "sviluppo delle filiere corte", "digitalizzazione dei processi", "centralità delle imprese", "centralità delle persone", "qualità dei servizi", "crescita condivisa", "rispetto del territorio"] },
      { type: "paragraph", text: "Ogni futura decisione strategica dovrà essere coerente con questi principi." },
      { type: "heading", text: "La Carta della Trasparenza" },
      { type: "paragraph", text: "Il Polo della Qualità assume pubblicamente i seguenti impegni:" },
      { type: "list", items: ["pubblicare il Documento Fondativo Ufficiale e i suoi aggiornamenti", "comunicare con chiarezza gli obiettivi strategici del progetto", "favorire il dialogo con imprese, istituzioni, cittadini, investitori e professionisti", "selezionare Direttore Generale, Manager di Distretto, advisor e partner secondo criteri di competenza, esperienza, affidabilità e trasparenza", "promuovere un modello di sviluppo aperto, partecipato e verificabile", "rendere progressivamente conoscibili le principali fasi di avanzamento del progetto", "costruire un ecosistema aperto al contributo di chi condivide la visione generale"] },
      { type: "paragraph", text: "La trasparenza rappresenta il primo strumento per ricostruire fiducia e credibilità." },
    ],
  },
  {
    id: "consortile",
    kicker: "11-16",
    title: "Governance, tecnologia, marketing e logistica",
    blocks: [
      { type: "heading", text: "La Società Consortile" },
      { type: "paragraph", text: "La Società Consortile rappresenterà la cabina di regia dell'intero ecosistema. Avrà il compito di garantire coordinamento, sviluppo, trasparenza, organizzazione e continuità gestionale." },
      { type: "list", items: ["brand e identità del Polo della Qualità", "sviluppo del Masterplan", "governance generale", "piattaforma digitale proprietaria", "CRM centralizzato", "marketing centralizzato", "logistica integrata", "servizi comuni", "eventi permanenti", "sviluppo dei distretti", "relazioni istituzionali", "rapporti con investitori e partner", "selezione del Direttore Generale", "selezione dei Manager di Distretto", "regolamenti e procedure operative"] },
      { type: "paragraph", text: "La Società Consortile agirà nell'interesse generale dell'ecosistema, favorendo la crescita delle imprese aderenti e la valorizzazione dell'intero progetto." },
      { type: "heading", text: "Il Direttore Generale" },
      { type: "paragraph", text: "Il Direttore Generale sarà una figura centrale per l'attuazione del progetto. Avrà il compito di coordinare l'organizzazione operativa del Polo della Qualità, raccordando la proprietà, la Società Consortile, i Manager di Distretto, i partner, gli advisor, le imprese aderenti e gli stakeholder istituzionali." },
      { type: "list", items: ["competenza", "esperienza", "visione strategica", "capacità organizzativa", "affidabilità", "autonomia operativa", "conoscenza dei modelli di sviluppo complessi", "capacità di coordinare persone, imprese e processi"] },
      { type: "paragraph", text: "La ricerca del Direttore Generale sarà avviata attraverso il sito istituzionale del Polo della Qualità." },
      { type: "heading", text: "I Manager di Distretto" },
      { type: "paragraph", text: "I Manager di Distretto saranno figure specializzate incaricate di sviluppare i singoli comparti del Polo della Qualità. Il loro ruolo sarà fondamentale per trasformare la visione generale in progetti concreti, relazioni operative, accordi commerciali, eventi, partnership e opportunità di sviluppo." },
      { type: "list", items: ["eventi", "food", "moda", "lusso", "wedding", "automotive", "nautica", "education", "salute", "benessere", "energia", "turismo", "tecnologia", "servizi professionali", "ulteriori settori coerenti con l'evoluzione del progetto"] },
      { type: "paragraph", text: "La selezione dei Manager di Distretto sarà basata su competenza, esperienza, reputazione, capacità relazionale e concretezza operativa." },
      { type: "heading", text: "La Piattaforma Digitale" },
      { type: "paragraph", text: "Il Polo della Qualità sarà supportato da una piattaforma digitale proprietaria, pensata per integrare il mondo fisico e il mondo online." },
      { type: "list", items: ["sito istituzionale", "marketplace omnicanale", "aree dedicate ai distretti", "profili delle imprese aderenti", "sistemi di e-commerce", "CRM centralizzato", "gestione lead", "ticketing", "workflow", "marketing automation", "analytics", "business intelligence", "strumenti di intelligenza artificiale", "sistemi di prenotazione", "eventi online", "formazione digitale", "servizi ai soci"] },
      { type: "paragraph", text: "La piattaforma sarà progressivamente sviluppata per diventare uno degli strumenti principali di crescita dell'ecosistema." },
      { type: "heading", text: "Il Marketing Centralizzato" },
      { type: "paragraph", text: "Il marketing rappresenterà una funzione strategica del Polo della Qualità. Non sarà soltanto comunicazione, ma uno strumento di sviluppo, coordinamento, acquisizione, reputazione e crescita dell'intero ecosistema." },
      { type: "list", items: ["identità del brand", "comunicazione istituzionale", "campagne digitali", "campagne territoriali", "social media", "pubbliche relazioni", "eventi", "lead generation", "acquisizione imprese", "acquisizione manager", "acquisizione partner", "promozione dei distretti", "supporto alle aziende aderenti", "contenuti editoriali", "advertising", "influencer marketing", "analytics", "AI marketing automation", "CRM marketing"] },
      { type: "paragraph", text: "Il settore marketing lavorerà in coordinamento con la proprietà, la Società Consortile, il Direttore Generale, i Manager di Distretto e gli eventuali consulenti specializzati." },
      { type: "heading", text: "Il Sistema Logistico" },
      { type: "paragraph", text: "Il sistema logistico sarà uno degli elementi strategici del Polo della Qualità. L'obiettivo sarà offrire alle imprese aderenti servizi logistici integrati, capaci di sostenere la vendita fisica, il marketplace, l'e-commerce, gli eventi, la distribuzione e l'espansione verso mercati nazionali e internazionali." },
      { type: "list", items: ["deposito merci", "fulfillment", "picking", "preparazione ordini", "spedizioni", "gestione resi", "tracking", "cross docking", "dropshipping", "integrazione con corrieri", "locker automatici", "collegamenti con hub logistici", "servizi a supporto dei marketplace"] },
      { type: "paragraph", text: "L'integrazione con infrastrutture logistiche territoriali e intermodali potrà rappresentare un vantaggio competitivo per tutto l'ecosistema." },
    ],
  },
  {
    kicker: "17-21",
    title: "Opportunità e sviluppo",
    blocks: [
      { type: "heading", text: "Perché un'impresa dovrebbe aderire" },
      { type: "paragraph", text: "Un'impresa che aderisce al Polo della Qualità potrà mantenere la propria autonomia e, allo stesso tempo, beneficiare della forza di un sistema condiviso." },
      { type: "list", items: ["maggiore visibilità", "presenza fisica in un ecosistema qualificato", "accesso a una piattaforma digitale", "supporto marketing", "CRM e gestione contatti", "eventi permanenti", "opportunità commerciali", "relazioni con altre imprese", "servizi logistici", "riduzione dei costi tramite servizi comuni", "accesso a nuove filiere", "possibilità di vendere online", "partecipazione a un progetto di sviluppo territoriale"] },
      { type: "paragraph", text: "L'adesione al Polo della Qualità non dovrà essere vissuta come semplice locazione di uno spazio, ma come partecipazione a un ecosistema organizzato." },
      { type: "heading", text: "Opportunità per startup, giovani e professionisti" },
      { type: "paragraph", text: "Il Polo della Qualità intende favorire la nascita e la crescita di nuove imprese, startup, giovani imprenditori, professionisti e competenze innovative." },
      { type: "list", items: ["spazi di sviluppo", "mentorship", "relazioni con imprese mature", "accesso a piattaforme digitali", "formazione", "eventi", "networking", "supporto alla commercializzazione", "visibilità", "opportunità di collaborazione"] },
      { type: "paragraph", text: "L'obiettivo è contrastare la dispersione delle competenze e favorire la crescita di talenti, imprese e professionalità all'interno del territorio nazionale." },
      { type: "heading", text: "Opportunità per investitori, banche e partner industriali" },
      { type: "paragraph", text: "Il Polo della Qualità rappresenta un progetto di sviluppo immobiliare, economico, digitale, logistico, energetico e territoriale." },
      { type: "paragraph", text: "Per investitori, banche e partner industriali, il progetto potrà rappresentare un'opportunità di partecipazione a un ecosistema complesso e progressivo, capace di generare valore attraverso più linee di sviluppo:" },
      { type: "list", items: ["valorizzazione immobiliare", "servizi alle imprese", "piattaforme digitali", "logistica", "eventi", "formazione", "salute e benessere", "turismo", "energia", "marketplace", "partnership industriali", "sviluppo territoriale"] },
      { type: "paragraph", text: "Gli approfondimenti economici, finanziari e industriali saranno oggetto di specifici Business Plan, piani operativi e documenti tecnici dedicati." },
      { type: "heading", text: "Un progetto aperto e in evoluzione" },
      { type: "paragraph", text: "Il presente Documento Fondativo Ufficiale rappresenta la Versione 1.0 del percorso. Non è un punto di arrivo, ma un punto di partenza." },
      { type: "paragraph", text: "Le sezioni relative al Masterplan, alla governance operativa, ai regolamenti, ai singoli distretti, al piano industriale, ai business plan, alle partnership e agli sviluppi futuri saranno progressivamente approfondite con il contributo del Direttore Generale, dei Manager di Distretto, degli advisor, dei partner strategici, delle imprese aderenti e delle istituzioni." },
      { type: "paragraph", text: "Ogni sviluppo dovrà restare coerente con i principi fondativi del progetto." },
      { type: "heading", text: "Il sito istituzionale" },
      { type: "paragraph", text: "Il sito ufficiale del Polo della Qualità sarà lo strumento principale di comunicazione, trasparenza, raccolta di interesse e aggiornamento pubblico del progetto." },
      { type: "list", items: ["Documento Fondativo", "Visione", "Distretti", "Società Consortile", "Masterplan", "Opportunità per imprese", "Opportunità per investitori", "Opportunità per startup", "Ricerca Direttore Generale", "Ricerca Manager di Distretto", "Partner strategici", "Aggiornamenti del progetto", "Contatti istituzionali"] },
      { type: "paragraph", text: "Il sito non sarà una semplice vetrina, ma il punto ufficiale attraverso cui il progetto dialogherà con il mercato, con il territorio e con tutte le parti interessate." },
    ],
  },
  {
    id: "candidature",
    kicker: "22",
    title: "Call pubblica di interesse",
    blocks: [
      { type: "paragraph", text: "Con la pubblicazione del presente Documento Fondativo Ufficiale, il Polo della Qualità avvia un percorso di ascolto, selezione e coinvolgimento delle migliori competenze disponibili." },
      { type: "paragraph", text: "Sono invitati a manifestare interesse:" },
      { type: "list", items: ["professionisti con esperienza manageriale", "candidati al ruolo di Direttore Generale", "candidati al ruolo di Manager di Distretto", "imprese interessate ad aderire", "startup", "università", "centri di ricerca", "investitori", "banche", "partner industriali", "enti pubblici", "advisor", "società di consulenza", "operatori specializzati"] },
      { type: "paragraph", text: "Le manifestazioni di interesse saranno valutate secondo criteri di coerenza con la visione, competenza, esperienza, affidabilità e capacità di contribuire concretamente allo sviluppo del progetto." },
    ],
  },
  {
    kicker: "23",
    title: "Il nostro impegno finale",
    blocks: [
      { type: "paragraph", text: "Il Polo della Qualità non nasce per riempire spazi." },
      { type: "paragraph", text: "Nasce per costruire un nuovo modello di sviluppo." },
      { type: "paragraph", text: "Un modello capace di integrare persone, imprese, innovazione, servizi, formazione, tecnologia, energia, logistica, turismo, salute, benessere, cultura e territorio." },
      { type: "paragraph", text: "Un ecosistema permanente, aperto, trasparente e progressivo, nel quale ogni soggetto possa contribuire alla creazione di valore condiviso." },
      { type: "paragraph", text: "Il nostro impegno è trasformare questa visione in una realtà concreta, credibile e sostenibile, capace di diventare un riferimento per il Made in Italy, per lo sviluppo del territorio e per le future generazioni." },
    ],
  },
];

function DocumentButton({
  href,
  children,
  primary = false,
}: {
  href: string;
  children: React.ReactNode;
  primary?: boolean;
}) {
  const classes = primary
    ? "border-[#c8a45d] bg-[#c8a45d] text-black hover:bg-white hover:border-white"
    : "border-white/35 text-white hover:border-[#c8a45d] hover:text-[#c8a45d]";

  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 items-center justify-center rounded-md border px-5 py-3 text-center text-[11px] font-bold uppercase tracking-[0.14em] transition-colors ${classes}`}
    >
      {children}
    </Link>
  );
}

function RenderBlock({ block }: { block: ContentBlock }) {
  if (block.type === "heading") {
    return (
      <h3 className="mt-10 font-serif text-2xl font-medium leading-tight text-white md:text-3xl">
        {block.text}
      </h3>
    );
  }

  if (block.type === "quote") {
    return (
      <blockquote className="my-8 rounded-md border border-[#c8a45d]/30 bg-white/[0.04] p-6 font-serif text-2xl leading-snug text-white md:p-8 md:text-3xl">
        {block.text}
      </blockquote>
    );
  }

  if (block.type === "list") {
    return (
      <ul className="my-6 grid gap-2 text-base leading-relaxed text-[#d8d2c4] md:grid-cols-2 md:text-lg">
        {block.items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-3 h-px w-5 shrink-0 bg-[#c8a45d]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
  }

  return <p className="text-base leading-relaxed text-[#d8d2c4] md:text-lg">{block.text}</p>;
}

function ContentSection({ section }: { section: DocumentSection }) {
  return (
    <section id={section.id} className="border-b border-[#c8a45d]/25">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-20 md:grid-cols-[0.85fr_1.35fr] md:px-12 md:py-28 lg:gap-20">
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#c8a45d]">
            {section.kicker}
          </p>
          <h2 className="font-serif text-4xl font-medium leading-tight text-white md:text-5xl lg:text-6xl">
            {section.title}
          </h2>
        </div>
        <div className="flex max-w-3xl flex-col gap-5">
          {section.blocks.map((block, index) => (
            <RenderBlock key={`${block.type}-${index}`} block={block} />
          ))}
          {section.id === "candidature" ? (
            <div className="mt-8 flex flex-wrap gap-3">
              <DocumentButton href="/diventa-manager" primary>
                Candidati come Direttore Generale
              </DocumentButton>
              <DocumentButton href="/diventa-manager">
                Candidati come Manager di Distretto
              </DocumentButton>
              <DocumentButton href="/entra-nel-polo">Manifesta interesse come Partner</DocumentButton>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export default function FoundationHome() {
  return (
    <main className="relative min-h-screen bg-[#0b0b0b] text-white">
      <Header />

      <section
        id="documento"
        className="relative flex min-h-screen items-center overflow-hidden border-b border-[#c8a45d]/25 px-6 pt-28 md:px-12"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_26%,rgba(200,164,93,0.22),transparent_30%),linear-gradient(135deg,#050505_0%,#17120d_48%,#080808_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.45),transparent_62%)]" />

        <div className="relative z-10 mx-auto w-full max-w-7xl py-16">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-[#c8a45d] md:text-sm">
            Documento Fondativo Ufficiale - Versione 1.0
          </p>
          <h1 className="max-w-5xl font-serif text-5xl font-medium leading-none text-white md:text-7xl lg:text-8xl">
            Polo della Qualità
          </h1>
          <p className="mt-7 max-w-3xl text-xl font-light leading-relaxed text-[#d8d2c4] md:text-2xl">
            Il primo Ecosistema Permanente Integrato dedicato al Commercio, ai Servizi,
            all&apos;Innovazione e alla Qualità della Vita.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <DocumentButton href="#inizio" primary>
              Leggi il Documento
            </DocumentButton>
            <DocumentButton href="/scopri-il-polo">Scopri il Polo</DocumentButton>
            <DocumentButton href="/diventa-manager">Candidati come Direttore Generale</DocumentButton>
            <DocumentButton href="/diventa-manager">Candidati come Manager di Distretto</DocumentButton>
            <DocumentButton href="/entra-nel-polo">Proponi il tuo progetto</DocumentButton>
          </div>
        </div>
      </section>

      {sections.slice(0, 5).map((section) => (
        <ContentSection key={section.title} section={section} />
      ))}

      <section id="distretti" className="border-b border-[#c8a45d]/25">
        <div className="mx-auto w-full max-w-7xl px-6 py-20 md:px-12 md:py-28">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#c8a45d]">
            10
          </p>
          <h2 className="max-w-4xl font-serif text-4xl font-medium leading-tight text-white md:text-6xl">
            I Distretti Tematici Permanenti
          </h2>
          <div className="mt-8 max-w-4xl space-y-5 text-base leading-relaxed text-[#d8d2c4] md:text-lg">
            <p>
              L&apos;organizzazione del Polo della Qualità si sviluppa attraverso Distretti
              Tematici Permanenti, ciascuno dedicato a specifiche filiere economiche e
              produttive, integrate tra loro e coordinate dalla Società Consortile.
            </p>
            <p>
              Ogni Distretto rappresenta un&apos;area strategica di sviluppo e potrà essere
              coordinato da un Manager di Distretto, da advisor, da partner industriali e da
              professionisti specializzati.
            </p>
            <p>
              I Distretti potranno evolvere nel tempo, essere integrati o ampliati in funzione
              delle esigenze del mercato, delle opportunità di sviluppo e degli obiettivi
              strategici del Polo della Qualità.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {distretti.map((distretto) => (
              <article
                key={distretto.num}
                className="flex h-full flex-col rounded-md border border-[#c8a45d]/25 bg-white/[0.035] p-6"
              >
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#c8a45d]">
                  {distretto.num}
                </p>
                <h3 className="font-serif text-2xl font-medium leading-tight text-white">
                  {distretto.title}
                </h3>
                <div className="mt-5 space-y-4 text-sm leading-relaxed text-[#d8d2c4]">
                  {distretto.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {distretto.chips.map((chip) => (
                    <span
                      key={chip}
                      className="rounded-sm border border-white/15 px-2.5 py-1 text-xs text-[#d8d2c4]"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
                <Link
                  href={distretto.href}
                  className="mt-8 inline-flex w-fit items-center border-b border-white/40 pb-1 text-[11px] font-bold uppercase tracking-[0.14em] text-white transition-colors hover:border-[#c8a45d] hover:text-[#c8a45d]"
                >
                  Vai alla pagina
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {sections.slice(5).map((section) => (
        <ContentSection key={section.title} section={section} />
      ))}

      <section className="border-b border-[#c8a45d]/25 px-6 py-20 text-center md:px-12 md:py-28">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-serif text-4xl font-medium leading-tight text-white md:text-6xl">
            Il Polo della Qualità apre una nuova fase.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-[#d8d2c4]">
            Una fase fondata su trasparenza, competenza, innovazione e partecipazione.
          </p>
          <p className="mx-auto mt-7 max-w-4xl text-lg leading-relaxed text-[#d8d2c4]">
            Invitiamo imprese, professionisti, investitori, istituzioni, startup,
            università e manager a conoscere il progetto, contribuire alla sua crescita e
            partecipare alla costruzione del primo Ecosistema Permanente Integrato dedicato
            al Commercio, ai Servizi, all&apos;Innovazione e alla Qualità della Vita.
          </p>
          <div className="mt-10 flex justify-center">
            <DocumentButton href="/entra-nel-polo" primary>
              Partecipa al progetto
            </DocumentButton>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

