import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import DistrettoHero from "@/components/ui/DistrettoHero";
import SplitFeatureSection from "@/components/ui/SplitFeatureSection";
import GridFeaturesSection from "@/components/ui/GridFeaturesSection";
import EventContactSection from "@/components/ui/EventContactSection";

export default function EventiPage() {
  return (
    <main className="relative min-h-screen bg-polo-dark">
      {/* HEADER GLOBALE TRASPARENTE */}
      <Header />
      
      {/* HERO SECTION EVENTI */}
      <DistrettoHero 
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Events", href: "/eventi" }
        ]}
        title={"EVENTI AL POLO\nDELLA QUALITÀ"}
        description="Uno spazio pensato per ospitare iniziative, temporary, open day, presentazioni, format esperienziali e appuntamenti dedicati ai distretti del Polo."
        videoSrc="/videos/eventi-background.mp4"
        links={[
          { label: "PROPONI EVENTO", href: "#proponi-evento" },
          { label: "SCOPRI DI PIÙ", href: "#scopri-di-piu" }
        ]}
        hideBottomBar={true}
      />

      {/* SEZIONE EVENTI PENSATI PER CREARE VALORE */}
      <div id="scopri-di-piu">
        <SplitFeatureSection 
          title={"EVENTI PENSATI PER\nCREARE VALORE"}
          description="Gli eventi non sono solo momenti di comunicazione.\nAll'interno del Polo della Qualità diventano strumenti per attivare i distretti, generare traffico qualificato, creare contenuti, favorire incontri tra operatori e pubblico, e costruire nuove opportunità per brand, attività e partner."
          imageSrc="/images/eventi-valore.jpg"
          imageAlt="Folla ad un evento all'aperto"
          imagePosition="right"
          link={{ label: "PROPONI EVENTO", href: "#proponi-evento" }}
        />
      </div>

      {/* SEZIONE TIPI DI EVENTI */}
      <GridFeaturesSection 
        title={"CHE TIPO DI EVENTI POSSONO\nESSERE PROPOSTI"}
        items={[
          {
            title: "Open day e giornate tematiche",
            description: "Iniziative dedicate a un settore specifico, pensate per attrarre pubblico, operatori e potenziali partner."
          },
          {
            title: "Temporary store e pop-up",
            description: "Format temporanei per brand, attività e operatori che vogliono testare il mercato o presentare prodotti e servizi."
          },
          {
            title: "Presentazioni private",
            description: "Eventi su invito per lanci di prodotto, nuove collezioni, anteprime o incontri riservati."
          },
          {
            title: "Workshop e dimostrazioni",
            description: "Momenti esperienziali legati a prodotto, competenza, formazione o artigianalità."
          },
          {
            title: "Sponsorship e partnership",
            description: "Opportunità per aziende interessate a legare il proprio brand a iniziative selezionate."
          },
          {
            title: "Eventi stagionali",
            description: "Format legati a periodi specifici dell'anno, ricorrenze, festività, fiere o campagne commerciali."
          }
        ]}
        link={{ label: "PROPONI EVENTO", href: "#proponi-evento" }}
      />

      {/* SEZIONE FORM CONTATTI EVENTI */}
      <EventContactSection />

      {/* FOOTER GLOBALE */}
      <Footer />
    </main>
  );
}
