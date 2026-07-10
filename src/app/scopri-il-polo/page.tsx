import Header from "@/components/layout/Header";
import Hero from "@/components/ui/Hero";
import CallToActionSection from "@/components/ui/CallToActionSection";
import ContactSection from "@/components/ui/ContactSection";
import Footer from "@/components/layout/Footer";

export default function ScopriIlPoloPage() {
  return (
    <main className="relative min-h-screen bg-polo-dark">
      <Header />
      <Hero />
      <CallToActionSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
