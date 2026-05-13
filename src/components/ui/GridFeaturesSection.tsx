"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface GridFeatureItem {
  title: string;
  description: string;
}

interface GridFeaturesSectionProps {
  title: string;
  items: GridFeatureItem[];
  link?: { label: string; href: string };
}

export default function GridFeaturesSection({ title, items, link }: GridFeaturesSectionProps) {
  return (
    <section className="w-full bg-[#000000] text-white py-24 md:py-32 px-8 md:px-16">
      <div className="max-w-[1920px] mx-auto">
        
        {/* TITOLO */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-[2.5rem] font-bold uppercase tracking-wide leading-[1.2] mb-20 max-w-3xl"
        >
          {title.split('\n').map((line, i) => (
            <span key={i}>
              {line}
              {i < title.split('\n').length - 1 && <br />}
            </span>
          ))}
        </motion.h2>

        {/* GRIGLIA */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-16 mb-24 pr-8">
          {items.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col"
            >
              <h3 className="text-xl md:text-[22px] font-bold mb-4 leading-tight text-white/95">
                {item.title}
              </h3>
              <p className="text-sm md:text-base font-light text-white/60 leading-relaxed pr-4">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* LINK / BOTTONE */}
        {link && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center"
          >
            <Link href={link.href} className="inline-flex items-center gap-2 text-[10px] md:text-xs font-bold tracking-[0.15em] uppercase border-b border-white hover:border-white/50 pb-1 transition-colors group">
              {link.label}
              <span className="transform transition-transform group-hover:translate-x-1 font-normal">→</span>
            </Link>
          </motion.div>
        )}

      </div>
    </section>
  );
}
