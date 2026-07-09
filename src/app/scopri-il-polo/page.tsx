import Header from "@/components/layout/Header";
import Hero from "@/components/ui/Hero";
import DistrettoSection from "@/components/ui/DistrettoSection";
import DoubleFeatureSection from "@/components/ui/DoubleFeatureSection";
import CallToActionSection from "@/components/ui/CallToActionSection";
import ContactSection from "@/components/ui/ContactSection";
import Footer from "@/components/layout/Footer";

const showVideoHero = true;
const showVideoDistricts = false;
const showVideoFeature = false;

export default function ScopriIlPoloPage() {
  return (
    <main className="relative min-h-screen bg-polo-dark">
      <Header />

      {showVideoHero ? <Hero /> : null}

      {showVideoDistricts ? (
        <>
          <DistrettoSection
            id="gioielleria"
            subtitle="Distretto 1"
            title="GIOIELLERIA"
            description="Un hub orafo aperto al pubblico, dove gioiellerie, laboratori, brand emergenti e artigianato qualificato si incontrano."
            videoSrc="/videos/gioielleria-background.mp4"
            links={[
              { label: "DIVENTA MANAGER", href: "/diventa-manager" },
              { label: "APRI UNO STORE", href: "/entra-nel-polo" },
            ]}
          />

          <DistrettoSection
            id="sposi"
            subtitle="Distretto 2"
            title="SPOSI"
            description="Una destinazione dedicata al matrimonio, con atelier, cerimonia, accessori, consulenze e servizi per il giorno piu importante."
            videoSrc="/videos/sposi-background.mp4"
            links={[
              { label: "DIVENTA MANAGER", href: "/diventa-manager" },
              { label: "APRI UNO STORE", href: "/entra-nel-polo" },
            ]}
          />

          <DistrettoSection
            id="food"
            subtitle="Distretto 3"
            title="FOOD ESPERIENZIALE"
            description="Food hall, laboratori a vista, degustazioni e scuole di cucina per trasformare il gusto in un'esperienza da vivere, condividere e scoprire."
            videoSrc="/videos/food-background.mp4"
            links={[
              { label: "DIVENTA MANAGER", href: "/diventa-manager" },
              { label: "APRI UNO STORE", href: "/entra-nel-polo" },
            ]}
          />

          <DistrettoSection
            id="automotive"
            subtitle="Distretto 4"
            title="AUTOMOTIVE & SUPERCAR"
            description="Un distretto dedicato all'automotive d'eccellenza, tra supercar, presentazioni private, test drive ed eventi esclusivi."
            videoSrc="/videos/automotive-background.mp4"
            links={[
              { label: "DIVENTA MANAGER", href: "/diventa-manager" },
              { label: "APRI UNO STORE", href: "/entra-nel-polo" },
            ]}
          />

          <DistrettoSection
            id="nautica"
            subtitle="Distretto 5"
            title="NAUTICA & YACHTING"
            description="Un distretto dedicato al mondo nautico, tra imbarcazioni, broker, servizi specializzati ed eventi legati al lifestyle del mare."
            videoSrc="/videos/nautica-background.mp4"
            links={[
              { label: "DIVENTA MANAGER", href: "/diventa-manager" },
              { label: "APRI UNO STORE", href: "/entra-nel-polo" },
            ]}
          />

          <DistrettoSection
            id="retail-qualita"
            subtitle="Distretto 6"
            title="RETAIL QUALITA"
            description="Moda, accessori, design e beauty selezionato in un percorso retail pensato per dialogare con l'identita del Polo."
            videoSrc="/videos/retail-background.mp4"
            links={[
              { label: "DIVENTA MANAGER", href: "/diventa-manager" },
              { label: "APRI UNO STORE", href: "/entra-nel-polo" },
            ]}
          />
        </>
      ) : null}

      {showVideoFeature ? <DoubleFeatureSection /> : null}
      <CallToActionSection />
      <ContactSection />
      <Footer />
    </main>
  );
}