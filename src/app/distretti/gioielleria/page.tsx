import Header from "@/components/layout/Header";
import DistrettoHero from "@/components/ui/DistrettoHero";
import TextWithGallerySection from "@/components/ui/TextWithGallerySection";
import FeatureImageSection from "@/components/ui/FeatureImageSection";
import AlternatingFeaturesSection from "@/components/ui/AlternatingFeaturesSection";
import CallToActionSection from "@/components/ui/CallToActionSection";
import ContactSection from "@/components/ui/ContactSection";
import Footer from "@/components/layout/Footer";

export default function GioielleriaPage() {
  return (
    <main className="relative min-h-screen bg-polo-dark">
      {/* HEADER GLOBALE TRASPARENTE */}
      <Header />
      
      {/* HERO SECTION SPECIFICO DEL DISTRETTO */}
      <DistrettoHero 
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Distretti", href: "#" },
          { label: "Gioielleria", href: "/distretti/gioielleria" }
        ]}
        title="GIOIELLERIA"
        description="Un distretto dedicato al mondo orafo, tra gioiellerie, laboratori a vista, brand emergenti e artigianato qualificato."
        videoSrc="/videos/gioielleria-background.mp4"
        links={[
          { label: "DIVENTA MANAGER", href: "#" },
          { label: "APRI UNO STORE", href: "#" }
        ]}
      />

      {/* INTRODUZIONE CON TESTO A SINISTRA E DUE FOTO A DESTRA */}
      <TextWithGallerySection 
        title="UN NUOVO SPAZIO PER LA GIOIELLERIA"
        description="Il distretto nasce per valorizzare gioielli, manifattura e relazione con il pubblico in un contesto elegante e riconoscibile."
        images={[
          "/images/gioielleria-intro-1.jpg",
          "/images/gioielleria-intro-2.jpg"
        ]}
      />

      {/* SEZIONE LABORATORI E BRAND */}
      <FeatureImageSection 
        title="LABORATORI E BRAND SELEZIONATI"
        description="Gioiellerie, artigiani, designer e marchi emergenti trovano uno spazio pensato per raccontare qualità, competenza e valore."
        imageSrc="/images/gioielleria-laboratori.jpg"
        links={[
          { label: "DIVENTA MANAGER", href: "#" },
          { label: "APRI UNO STORE", href: "#" }
        ]}
      />

      {/* SEZIONI A SCACCHIERA (ZIGZAG) */}
      <AlternatingFeaturesSection 
        features={[
          {
            title: "ESPERIENZE,\nEVENTI E\nINCONTRI",
            description: "Presentazioni, trunk show ed eventi di settore rendono il distretto un luogo di incontro tra prodotto, pubblico e operatori.",
            mediaUrl: "/images/gioielleria-esperienze.jpg",
            mediaType: "image"
          },
          {
            title: "IL MONDO ORAFO\nAL CENTRO",
            description: "La gioielleria diventa uno dei linguaggi distintivi del Polo: eleganza, ricerca, artigianalità e relazione diretta.",
            mediaUrl: "/images/gioielleria-centro.jpg",
            mediaType: "image"
          }
        ]}
      />

      {/* SEZIONE CALL TO ACTION DIVISA */}
      <CallToActionSection />

      {/* SEZIONE CONTATTI */}
      <ContactSection />

      {/* FOOTER GLOBALE */}
      <Footer />
    </main>
  );
}
