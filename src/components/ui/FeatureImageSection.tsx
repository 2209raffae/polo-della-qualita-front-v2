"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface FeatureImageSectionProps {
  title: string;
  description: string;
  imageSrc: string;
  links?: { label: string; href: string }[];
}

export default function FeatureImageSection({ title, description, imageSrc, links }: FeatureImageSectionProps) {
  return (
    <section className="relative w-full h-screen flex flex-col justify-center overflow-hidden">
      {/* SFONDO IMMAGINE */}
      <div className="absolute inset-0 z-0">
        <Image 
          src={imageSrc} 
          alt={title} 
          fill 
          className="object-cover object-center"
        />
      </div>

      {/* OVERLAY SFUMATO PER LEGGIBILITÀ */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-0"></div>

      {/* CONTENUTO */}
      <div className="relative z-10 w-full px-8 md:px-16 flex items-center h-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-white"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wide leading-tight mb-6">
            {title}
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl font-light text-gray-200 leading-relaxed mb-10 max-w-xl">
            {description}
          </p>
          
          {links && (
            <div className="flex flex-wrap gap-8">
              {links.map((link) => (
                <Link 
                  key={link.label}
                  href={link.href} 
                  className="inline-flex items-center gap-2 text-[10px] md:text-xs font-bold tracking-[0.15em] uppercase border-b border-white/50 hover:border-white pb-1 transition-colors group"
                >
                  {link.label}
                  <span className="transform transition-transform group-hover:translate-x-1">→</span>
                </Link>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
