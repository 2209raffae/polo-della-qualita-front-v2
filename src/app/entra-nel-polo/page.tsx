import Header from "@/components/layout/Header";
import DistrettoHero from "@/components/ui/DistrettoHero";
import SplitFeatureSection from "@/components/ui/SplitFeatureSection";
import TextListSection from "@/components/ui/TextListSection";
import Footer from "@/components/layout/Footer";

export default function EntraNelPoloPage() {
  return (
    <main className="relative min-h-screen bg-polo-dark">
      {/* HEADER GLOBALE TRASPARENTE */}
      <Header />
      
      {/* HERO SECTION SPECIFICO PER ENTRA NEL POLO / APRI UNO STORE */}
      <DistrettoHero 
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Apri uno Store", href: "/entra-nel-polo" }
        ]}
        title={"APRI UNO STORE\nAL POLO DELLA\nQUALITÀ"}
        description="Uno spazio commerciale ed esperienziale pensato per accogliere brand, attività, showroom, operatori e partner selezionati."
        videoSrc="/videos/entra-nel-polo-background.mp4"
        links={[
          { label: "CANDIDATI ORA", href: "#" },
          { label: "SCOPRI DI PIÙ", href: "#" }
        ]}
        hideBottomBar={true}
      />

      {/* SEZIONE NUOVA DESTINAZIONE */}
      <SplitFeatureSection 
        title={"UNA NUOVA\nDESTINAZIONE PER\nATTIVITÀ\nSELEZIONATE"}
        description="Il Polo della Qualità non vuole replicare il modello del centro commerciale tradizionale.

L'obiettivo è creare un sistema di distretti verticali, ciascuno con una propria identità, una propria offerta e una propria capacità di attrarre pubblico, operatori e opportunità."
        imageSrc="/images/entra-nel-polo-destinazione.jpg"
        imageAlt="Vetrina di un'attività selezionata"
        imagePosition="right"
        link={{ label: "CANDIDATI ORA", href: "#" }}
      />

      {/* SEZIONE PERCHÈ ENTRARE NEL POLO */}
      <TextListSection 
        title={"PERCHÉ ENTRARE NEL\nPOLO"}
        link={{ label: "CANDIDATI ORA", href: "#" }}
        listItems={[
          "un contesto commerciale riconoscibile;",
          "una struttura organizzata per distretti;",
          "una comunicazione verticale per settore;",
          "opportunità di eventi e iniziative dedicate;",
          "sinergie con altre attività presenti;",
          "possibilità di presidiare un progetto in fase di sviluppo;",
          "supporto nella valorizzazione dell'attività all'interno del sistema Polo."
        ]}
      />

      {/* FOOTER GLOBALE */}
      <Footer />
    </main>
  );
}
