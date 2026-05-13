import Header from "@/components/layout/Header";
import MapSidebar from "@/components/ui/MapSidebar";
import InteractiveMap from "@/components/ui/InteractiveMap";
import Footer from "@/components/layout/Footer";

export default function MapPage() {
  return (
    <div className="relative min-h-screen bg-[#f4f4f4]">
      {/* MAPPA CONTAINER A SCHERMO INTERO */}
      <main className="relative w-full h-screen min-h-[800px]">
        
        {/* 
          GRADIENTE PER L'HEADER: 
          Poiché la mappa ha uno sfondo chiaro e l'header ha testo/logo bianco, 
          aggiungiamo un gradiente in alto come mostrato nel design per renderli visibili.
        */}
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black/50 to-transparent z-20 pointer-events-none"></div>
        
        {/* HEADER GLOBALE */}
        <Header />

        {/* MAPPA 3D / SVG */}
        <div className="absolute inset-0 z-0">
          <InteractiveMap />
        </div>

        {/* SIDEBAR CON FILTRI E RICERCA */}
        <MapSidebar />

      </main>

      {/* FOOTER GLOBALE IN FONDO ALLA PAGINA */}
      <Footer />
    </div>
  );
}
