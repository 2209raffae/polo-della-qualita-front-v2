import Header from "@/components/layout/Header";
import DistrettoHero from "@/components/ui/DistrettoHero";
import SplitFeatureSection from "@/components/ui/SplitFeatureSection";
import TextListSection from "@/components/ui/TextListSection";
import ContactSection from "@/components/ui/ContactSection";
import Footer from "@/components/layout/Footer";

export default function DiventaManagerPage() {
  return (
    <main className="relative min-h-screen bg-polo-dark">
      {/* HEADER GLOBALE TRASPARENTE */}
      <Header />
      
      {/* HERO SECTION SPECIFICO PER DIVENTA MANAGER */}
      <DistrettoHero 
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Diventa Manager", href: "/diventa-manager" }
        ]}
        title="DIVENTA MANAGER DI DISTRETTO"
        description="Partecipa allo sviluppo del Polo della Qualità e contribuisci alla crescita dei suoi distretti tematici."
        videoSrc="/videos/diventa-manager-bg.mp4"
        links={[
          { label: "CANDIDATI ORA", href: "#" },
          { label: "SCOPRI DI PIÙ", href: "#" }
        ]}
        hideBottomBar={true}
      />

      {/* SEZIONE UNA NUOVA OPPORTUNITÀ */}
      <SplitFeatureSection 
        title="UNA NUOVA OPPORTUNITÀ PER PROFESSIONISTI CON RELAZIONI E VISIONE"
        description="Il progetto è rivolto a figure che conoscono un settore, ne comprendono le dinamiche e hanno la capacità di creare connessioni concrete."
        imageSrc="/images/manager-ruolo.jpg"
        imageAlt="Manager al telefono"
        imagePosition="right"
        link={{ label: "CANDIDATI ORA", href: "#" }}
      />

      {/* SEZIONE LISTA: IL RUOLO DEL MANAGER */}
      <TextListSection 
        title={"IL RUOLO DEL MANAGER\nDI DISTRETTO"}
        link={{ label: "CANDIDATI ORA", href: "#" }}
        listItems={[
          "individuare operatori e brand coerenti con il distretto;",
          "attivare relazioni commerciali qualificate;",
          "favorire incontri, call e sopralluoghi;",
          "supportare la selezione delle attività da inserire;",
          "contribuire alla definizione delle opportunità del distretto;",
          "raccogliere indicazioni dal mercato;",
          "collaborare con la proprietà e il team marketing nella valorizzazione del progetto."
        ]}
      />

      {/* SEZIONE CONTATTO / CANDIDATI */}
      <ContactSection title="CANDIDATI" />

      {/* FOOTER GLOBALE */}
      <Footer />
    </main>
  );
}
