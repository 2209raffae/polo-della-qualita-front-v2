"use client";

import { useEffect, useState } from "react";

const introductoryParagraphs = [
  "Il Polo della Qualità seleziona Manager di Settore, professionisti qualificati e società di commercializzazione pronti a contribuire allo sviluppo dei comparti strategici del progetto.",
  "Il termine Manager di Settore identifica sia la persona fisica sia la società di commercializzazione incaricata della gestione, dello sviluppo e della commercializzazione di uno o più settori da inserire nel Masterplan in corso di elaborazione, a cura dello studio di architettura interno, con le medesime funzioni e responsabilità.",
  "Cerchiamo soggetti con esperienza concreta, visione strategica, capacità organizzativa, leadership, reputazione professionale, relazioni qualificate e orientamento ai risultati.",
];

const economicModelParagraphs = [
  "Il Polo della Qualità adotta una Filiera Economica fondata sulla partecipazione ai risultati e sull’allineamento degli interessi di tutti i soggetti coinvolti.",
  "La crescita del fatturato genera benefici condivisi lungo l’intera filiera, secondo principi di equità, sostenibilità e trasparenza.",
  "La remunerazione sarà solida e commisurata ai risultati raggiunti, nel rispetto degli obiettivi e delle condizioni contrattuali.",
];

const applicationParagraphs = [
  "Se hai competenza, visione e concreta capacità di sviluppo, presenta la tua manifestazione di interesse attraverso la piattaforma ufficiale del Polo della Qualità.",
  "Le candidature saranno accettate esclusivamente tramite il form dedicato, complete di curriculum o company profile.",
  "Successivamente, i soggetti selezionati opereranno in coordinamento con la Direzione Generale e assumeranno la responsabilità dello sviluppo, dell’organizzazione e della crescita del settore assegnato, nell’ambito del Masterplan del Polo della Qualità.",
  "A tal fine, prima del conferimento dell’incarico, sarà richiesta la presentazione di un business plan di settore, contenente obiettivi commerciali, previsioni di fatturato e incasso e fabbisogno degli spazi, quale riferimento per l’integrazione del progetto nel Masterplan complessivo.",
];

const activities = [
  "il coinvolgimento di imprese e brand;",
  "lo sviluppo di partnership strategiche;",
  "il coordinamento delle attività e dei punti vendita;",
  "la definizione degli standard operativi;",
  "il monitoraggio della qualità, del fatturato, della redditività e dei principali indicatori di performance.",
];

export default function ManagerOffer() {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    function expandFromHash() {
      if (window.location.hash === "#annuncio") {
        setIsExpanded(true);
      }
    }

    expandFromHash();
    window.addEventListener("hashchange", expandFromHash);
    return () => window.removeEventListener("hashchange", expandFromHash);
  }, []);

  return (
    <section id="annuncio" className="w-full scroll-mt-0 bg-[#f4f4f4] px-6 py-20 text-polo-dark md:px-16 md:py-32">
      <article className="mx-auto w-full max-w-5xl">
        <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.24em] text-[#8b6a31]">
          Opportunità professionale
        </p>
        <h2 className="mb-12 max-w-4xl text-4xl font-bold uppercase leading-[1.08] tracking-wide text-black md:text-5xl lg:text-6xl">
          Entra nel Polo della Qualità
        </h2>

        <div className="max-w-4xl space-y-7 text-base font-light leading-[1.9] text-gray-800 md:text-lg">
          {introductoryParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        {!isExpanded ? (
          <button
            type="button"
            onClick={() => setIsExpanded(true)}
            aria-expanded="false"
            aria-controls="annuncio-completo"
            className="mt-12 inline-flex cursor-pointer items-center gap-3 border-b border-black pb-1 text-[10px] font-bold uppercase tracking-[0.16em] text-black transition-colors hover:border-black/40 hover:text-black/60 md:text-xs"
          >
            Scopri di più <span aria-hidden="true">↓</span>
          </button>
        ) : null}

        <div id="annuncio-completo" hidden={!isExpanded} className="max-w-4xl pt-14">
          <h3 className="mb-7 text-2xl font-bold leading-tight text-black md:text-3xl">
            Un modello economico condiviso
          </h3>
          <div className="space-y-7 text-base font-light leading-[1.9] text-gray-800 md:text-lg">
            {economicModelParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            {applicationParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <h3 className="mb-7 mt-14 text-2xl font-bold leading-tight text-black md:text-3xl">
            Le principali attività riguarderanno:
          </h3>
          <ul className="space-y-4 text-base font-light leading-[1.8] text-gray-800 md:text-lg">
            {activities.map((activity) => (
              <li key={activity} className="flex items-start gap-4">
                <span aria-hidden="true" className="mt-[0.8em] h-px w-5 shrink-0 bg-[#8b6a31]" />
                <span>{activity}</span>
              </li>
            ))}
          </ul>

          <a
            href="#candidati"
            className="mt-14 inline-flex items-center gap-3 border-b border-black pb-1 text-[10px] font-bold uppercase tracking-[0.16em] text-black transition-colors hover:border-black/40 hover:text-black/60 md:text-xs"
          >
            Candidati ora <span aria-hidden="true">→</span>
          </a>
        </div>
      </article>
    </section>
  );
}
