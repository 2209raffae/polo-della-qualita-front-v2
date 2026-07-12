import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import DistrettoHero from "@/components/ui/DistrettoHero";
import SplitFeatureSection from "@/components/ui/SplitFeatureSection";
import GridFeaturesSection from "@/components/ui/GridFeaturesSection";
import EventContactSection from "@/components/ui/EventContactSection";

export default function EventiDetailPage() {
  return (
    <main className="relative min-h-screen bg-polo-dark">
      <Header />

      <DistrettoHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Events", href: "/eventi" },
        ]}
        title={"EVENTI AL POLO\nDELLA QUALIT\u00c0"}
        description="Uno spazio pensato per ospitare iniziative, temporary, open day, presentazioni, format esperienziali e appuntamenti dedicati ai distretti del Polo."
        videoSrc="/videos/eventi-background.mp4"
        links={[
          { label: "PROPONI EVENTO", href: "#proponi-evento" },
          { label: "SCOPRI DI PI\u00d9", href: "#scopri-di-piu" },
        ]}
        hideBottomBar={true}
      />

      <div id="scopri-di-piu">
        <SplitFeatureSection
          title={"EVENTI PENSATI PER\nCREARE VALORE"}
          description={"Gli eventi non sono solo momenti di comunicazione.\nAll'interno del Polo della Qualit\u00e0 diventano strumenti per attivare i distretti, generare traffico qualificato, creare contenuti, favorire incontri tra operatori e pubblico, e costruire nuove opportunit\u00e0 per brand, attivit\u00e0 e partner."}
          imageSrc="/images/eventi-valore.jpg"
          imageAlt="Folla ad un evento all'aperto"
          imagePosition="right"
          link={{ label: "PROPONI EVENTO", href: "#proponi-evento" }}
        />
      </div>

      <GridFeaturesSection
        title={"CHE TIPO DI EVENTI POSSONO\nESSERE PROPOSTI"}
        items={[
          {
            title: "Open day e giornate tematiche",
            description: "Iniziative dedicate a un settore specifico, pensate per attrarre pubblico, operatori e potenziali partner.",
          },
          {
            title: "Temporary store e pop-up",
            description: "Format temporanei per brand, attivit\u00e0 e operatori che vogliono testare il mercato o presentare prodotti e servizi.",
          },
          {
            title: "Presentazioni private",
            description: "Eventi su invito per lanci di prodotto, nuove collezioni, anteprime o incontri riservati.",
          },
          {
            title: "Workshop e dimostrazioni",
            description: "Momenti esperienziali legati a prodotto, competenza, formazione o artigianalit\u00e0.",
          },
          {
            title: "Sponsorship e partnership",
            description: "Opportunit\u00e0 per aziende interessate a legare il proprio brand a iniziative selezionate.",
          },
          {
            title: "Eventi stagionali",
            description: "Format legati a periodi specifici dell'anno, ricorrenze, festivit\u00e0, fiere o campagne commerciali.",
          },
        ]}
        link={{ label: "PROPONI EVENTO", href: "#proponi-evento" }}
      />

      <EventContactSection />
      <Footer />
    </main>
  );
}
