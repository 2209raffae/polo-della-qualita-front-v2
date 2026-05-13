"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface TextListSectionProps {
  title: string;
  link?: { label: string; href: string };
  listItems: string[];
}

export default function TextListSection({ title, link, listItems }: TextListSectionProps) {
  return (
    <section className="w-full bg-[#000000] text-white py-24 md:py-32">
      <div className="w-full max-w-[1920px] mx-auto px-8 md:px-16 grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24 items-start">
        
        {/* LEFT COLUMN: Title & Link */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col h-full justify-between"
        >
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold uppercase tracking-wide leading-[1.1] mb-16 lg:mb-32">
            {title.split('\n').map((line, i) => (
              <span key={i}>
                {line}
                {i < title.split('\n').length - 1 && <br />}
              </span>
            ))}
          </h2>
          
          {link && (
            <div className="mt-auto">
              <Link href={link.href} className="inline-flex items-center gap-2 text-[10px] md:text-xs font-bold tracking-[0.15em] uppercase border-b border-white hover:border-white/50 pb-1 transition-colors group">
                {link.label}
                <span className="transform transition-transform group-hover:translate-x-1 font-normal">→</span>
              </Link>
            </div>
          )}
        </motion.div>

        {/* RIGHT COLUMN: List */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col"
        >
          <ul className="flex flex-col gap-2">
            {listItems.map((item, index) => (
              <li key={index} className="flex items-start text-base md:text-lg lg:text-[22px] font-light text-white/90 leading-tight">
                <span className="mr-3 text-white/90">·</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

      </div>
    </section>
  );
}
