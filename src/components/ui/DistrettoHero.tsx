"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface DistrettoHeroProps {
  breadcrumbs: { label: string; href: string }[];
  title: string;
  description: string;
  videoSrc?: string;
  imageSrc?: string;
  links?: { label: string; href: string }[];
  hideBottomBar?: boolean;
}

export default function DistrettoHero({ breadcrumbs, title, description, videoSrc, imageSrc, links, hideBottomBar = false }: DistrettoHeroProps) {
  return (
    <section className="relative w-full h-screen flex items-center bg-black overflow-hidden">
      {/* BACKGROUND MEDIA */}
      {videoSrc ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      ) : imageSrc ? (
        <Image
          src={imageSrc}
          alt={title}
          fill
          sizes="100vw"
          className="object-cover z-0"
        />
      ) : null}

      {/* OVERLAY SFUMATO PER LEGGIBILITÀ */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent z-0"></div>

      {/* CONTENT */}
      <div className="relative z-10 w-full px-8 md:px-16 flex flex-col justify-center h-full pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          {/* Breadcrumbs */}
          <div className="flex items-center gap-1 text-sm md:text-base font-light text-gray-300 mb-8">
            {breadcrumbs.map((crumb, index) => (
              <div key={crumb.label} className="flex items-center">
                <Link href={crumb.href} className="hover:text-white transition-colors">
                  {crumb.label}
                </Link>
                {index < breadcrumbs.length - 1 && <span className="mx-2">/</span>}
              </div>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-wide text-white mb-6">
            {title.split('\n').map((line, i) => (
              <span key={i}>
                {line}
                {i < title.split('\n').length - 1 && <br />}
              </span>
            ))}
          </h1>

          {/* Description */}
          <p className="text-lg md:text-2xl font-light text-gray-200 leading-relaxed mb-10 max-w-xl">
            {description}
          </p>

          {/* Links inline */}
          {links && (
            <div className="flex flex-wrap gap-8">
              {links.map((link) => (
                <Link 
                  key={link.label}
                  href={link.href} 
                  className="inline-flex items-center gap-2 text-xs md:text-sm font-bold tracking-[0.15em] uppercase text-white border-b border-white/50 hover:border-white pb-1 transition-colors group"
                >
                  {link.label}
                  <span className="transform transition-transform group-hover:translate-x-1">→</span>
                </Link>
              ))}
            </div>
          )}
        </motion.div>
      </div>

      {/* BARRA INFERIORE FISSATA IN BASSO AL CENTRO */}
      {!hideBottomBar && (
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex w-[400px] max-w-[90%] z-20">
          <Link href="/diventa-manager" className="flex-1 bg-[#9c9c9c] hover:bg-[#858585] text-black text-[10px] md:text-xs font-bold tracking-[0.15em] uppercase py-4 text-center transition-colors border-r border-black/10">
            <span className="border-b border-black pb-0.5">DIVENTA MANAGER</span>
          </Link>
          <Link href="/entra-nel-polo" className="flex-1 bg-[#9c9c9c] hover:bg-[#858585] text-black text-[10px] md:text-xs font-bold tracking-[0.15em] uppercase py-4 text-center transition-colors">
            <span className="border-b border-black pb-0.5">PROPONI IL TUO PROGETTO</span>
          </Link>
        </div>
      )}
    </section>
  );
}




