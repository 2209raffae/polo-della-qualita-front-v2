"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface DistrettoSectionProps {
  id?: string;
  subtitle: string;
  title: string;
  description: string;
  videoSrc: string;
  links: { label: string; href: string }[];
}

export default function DistrettoSection({ subtitle, title, description, videoSrc, links, id }: DistrettoSectionProps) {
  return (
    <section id={id} className="relative w-full h-screen overflow-hidden flex items-center">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover object-center"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        {/* Overlay scuro per garantire la lettura del testo */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-8 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <p className="text-xl md:text-2xl font-light text-gray-300 tracking-wide mb-1">
            {subtitle}
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase text-white tracking-wider mb-6">
            {title}
          </h2>
          <p className="text-lg md:text-xl font-light text-gray-300 leading-relaxed mb-12">
            {description}
          </p>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10">
            {links.map((link, idx) => (
              <Link 
                key={idx} 
                href={link.href} 
                className="group flex items-center gap-2 text-[10px] md:text-xs font-bold tracking-[0.15em] uppercase text-white hover:text-gray-300 transition-colors border-b border-white/40 hover:border-white pb-1"
              >
                {link.label}
                <span className="transform transition-transform group-hover:translate-x-1">→</span>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>

      {/* SCROLL INDICATOR */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <span className="text-[10px] tracking-[0.3em] font-bold uppercase text-white">Scorri</span>
        <motion.svg 
          width="16" 
          height="16" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="white" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <path d="M4 9L12 17L20 9" />
        </motion.svg>
      </motion.div>
    </section>
  );
}
