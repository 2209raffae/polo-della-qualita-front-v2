"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center">
      {/* BACKGROUND VIDEO */}
      <div className="absolute inset-0 w-full h-full">
        {/*
          Sostituisci il video mettendo il file vero nella cartella `public/videos/hero-background.mp4`
          In caso non lo trovi, fallback su un colore di sfondo
        */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover object-center"
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
        </video>
        
        {/* OVERLAY GRADIENTE: Essenziale per scurire l'immagine in alto e sotto al testo */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70"></div>
      </div>

      {/* TEXT CONTENT */}
      <div className="relative z-10 w-full px-8 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase leading-tight tracking-wider text-white text-shadow-lg mb-4">
            Il Polo Della<br />
            Qualità
          </h1>
          <h2 className="text-lg md:text-2xl lg:text-3xl font-light uppercase tracking-[0.15em] text-gray-200 text-shadow-md">
            L&apos;Eccellenza ha un<br />
            nuovo indirizzo
          </h2>
        </motion.div>
      </div>

      {/* SCROLL INDICATOR */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-[10px] tracking-[0.3em] font-bold uppercase text-white">Scorri</span>
        <motion.svg 
          width="16" 
          height="16" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <path d="M4 9L12 17L20 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </motion.svg>
      </motion.div>
    </section>
  );
}

