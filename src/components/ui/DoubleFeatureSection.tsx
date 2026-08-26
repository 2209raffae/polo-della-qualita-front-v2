"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function DoubleFeatureSection() {
  return (
    <section className="w-full bg-[#f4f4f4] text-polo-dark py-24 md:py-32 overflow-hidden">
      <div className="w-full px-8 md:px-16 flex flex-col gap-32">
        
        {/* Blocco 1: Testo a sinistra, Video a destra */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <div className="w-full xl:w-4/5">
              <p className="text-sm md:text-base font-light tracking-widest uppercase mb-2">Spazi in movimento</p>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wide leading-tight mb-6">
                Eventi &<br/>Temporary Stores
              </h2>
              <p className="text-base md:text-lg font-light leading-relaxed mb-8 text-gray-700 max-w-md">
                Pop-up, installazioni e format temporanei pensati per ospitare brand, iniziative stagionali ed esperienze speciali.
              </p>
              <Link href="#" className="inline-flex items-center gap-2 text-[10px] md:text-xs font-bold tracking-[0.15em] uppercase border-b border-polo-dark pb-1 hover:text-gray-500 transition-colors group">
                SCOPRI DI PIÙ
                <span className="transform transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative w-full aspect-[3/4] overflow-hidden"
          >
            <div className="absolute inset-0 bg-gray-200"></div>
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover object-center z-10"
            >
              <source src="/videos/eventi-video.mp4" type="video/mp4" />
            </video>
          </motion.div>
        </div>

        {/* Blocco 2: Immagine a sinistra, Testo a destra */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative w-full aspect-[3/4] overflow-hidden md:order-1 order-2"
          >
            <div className="absolute inset-0 bg-gray-200"></div>
            <Image 
              src="/images/visione.jpg" 
              alt="Unisciti alla nostra visione" 
              fill 
              className="object-cover object-center z-10"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center md:order-2 order-1"
          >
            <div className="w-full xl:w-4/5">
              <p className="text-sm md:text-base font-light tracking-widest uppercase mb-2">Oltre il retail</p>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wide leading-tight mb-6">
                Unisciti alla<br/>Nostra Visione
              </h2>
              <p className="text-base md:text-lg font-light leading-relaxed mb-8 text-gray-700 max-w-md">
                Commercio, esperienza ed eventi si incontrano in un luogo pensato per valorizzare qualità, relazioni e nuove opportunità.
              </p>
              <Link href="#" className="inline-flex items-center gap-2 text-[10px] md:text-xs font-bold tracking-[0.15em] uppercase border-b border-polo-dark pb-1 hover:text-gray-500 transition-colors group">
                PROPONI IL TUO BUSINESS
                <span className="transform transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

