import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import DistrettoHero from "@/components/ui/DistrettoHero";
import ManagerOffer from "@/components/ui/ManagerOffer";
import ContactSection from "@/components/ui/ContactSection";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Diventa Manager di Distretto | Polo della Qualità",
  description:
    "Il Polo della Qualità seleziona Manager di Settore e società di commercializzazione per lo sviluppo dei comparti strategici del progetto.",
};

export default function DiventaManagerPage() {
  return (
    <main className="relative min-h-screen bg-polo-dark">
      <Header />

      <DistrettoHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Diventa Manager", href: "/diventa-manager" },
        ]}
        title="DIVENTA MANAGER DI DISTRETTO"
        description="Il Polo della Qualità seleziona Manager di Settore, professionisti qualificati e società di commercializzazione pronti a contribuire allo sviluppo dei comparti strategici del progetto."
        imageSrc="/images/diventa-manager-bg.png"
        links={[
          { label: "CANDIDATI ORA", href: "#candidati" },
          { label: "SCOPRI DI PIÙ", href: "#annuncio" },
        ]}
        hideBottomBar={true}
      />

      <ManagerOffer />

      <div id="candidati" className="scroll-mt-0">
        <ContactSection
          title="CANDIDATI"
          crmTitle="Candidatura Manager di Settore"
          leadType="manager"
        />
      </div>

      <Footer />
    </main>
  );
}
