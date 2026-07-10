"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function CallToActionSection() {
  return (
    <section className="w-full min-h-[700px] md:h-[85vh] flex flex-col md:flex-row">
      
      {/* LATO SINISTRO: DIVENTA MANAGER */}
      <div className="relative w-full md:w-1/2 h-[500px] md:h-full group overflow-hidden cursor-pointer">
        <Image 
          src="/images/manager.jpg" 
          alt="Diventa Manager" 
          fill 
          className="object-cover object-center transition-transform duration-[1.5s] ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10"></div>
        {/* Overlay extra che si scurisce all'hover per dare risalto al testo */}
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition-colors duration-500"></div>

        <div className="absolute inset-0 flex flex-col justify-end px-8 py-16 md:p-16 lg:px-24 lg:py-20 z-10 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-md"
          >
            <p className="text-lg md:text-xl font-light mb-1">Sviluppo distretti</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wide leading-tight mb-6">
              DIVENTA<br/>MANAGER
            </h2>
            <p className="text-base md:text-lg font-light leading-relaxed mb-10 text-gray-200">
              Guida lo sviluppo di un distretto e attiva nuove relazioni qualificate.
            </p>
            <Link href="/diventa-manager" className="inline-flex items-center gap-2 text-[10px] md:text-xs font-bold tracking-[0.15em] uppercase border-b border-white/50 group-hover:border-white pb-1 transition-colors">
              DIVENTA MANAGER
              <span className="transform transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* LATO DESTRO: PROPONI IL TUO PROGETTO */}
      <div className="relative w-full md:w-1/2 h-[500px] md:h-full group overflow-hidden cursor-pointer">
        <Image 
          src="/images/store.jpg" 
          alt="Proponi il tuo progetto" 
          fill 
          className="object-cover object-center transition-transform duration-[1.5s] ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10"></div>
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition-colors duration-500"></div>

        <div className="absolute inset-0 flex flex-col justify-end px-8 py-16 md:p-16 lg:px-24 lg:py-20 z-10 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-md"
          >
            <p className="text-lg md:text-xl font-light mb-1">Opportunità per progetti</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wide leading-tight mb-6">
              PROPONI IL<br/>TUO PROGETTO
            </h2>
            <p className="text-base md:text-lg font-light leading-relaxed mb-10 text-gray-200">
              Proponi il tuo progetto e valorizzalo in un ecosistema selezionato e riconoscibile.
            </p>
            <Link href="/entra-nel-polo" className="inline-flex items-center gap-2 text-[10px] md:text-xs font-bold tracking-[0.15em] uppercase border-b border-white/50 group-hover:border-white pb-1 transition-colors">
              PROPONI IL TUO PROGETTO
              <span className="transform transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </motion.div>
        </div>
      </div>

    </section>
  );
}

