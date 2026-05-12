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
    <section className="w-full bg-black text-white py-24 md:py-32">
      <div className="w-full max-w-[1920px] mx-auto px-8 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* LEFT COLUMN: Title & Link */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col max-w-xl"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-wide leading-tight mb-12">
            {title.split('\n').map((line, i) => (
              <span key={i}>
                {line}
                {i < title.split('\n').length - 1 && <br />}
              </span>
            ))}
          </h2>
          
          {link && (
            <div>
              <Link href={link.href} className="inline-flex items-center gap-2 text-[10px] md:text-xs font-bold tracking-[0.15em] uppercase border-b border-white/50 hover:border-white pb-1 transition-colors group">
                {link.label}
                <span className="transform transition-transform group-hover:translate-x-1">→</span>
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
          <ul className="flex flex-col gap-4">
            {listItems.map((item, index) => (
              <li key={index} className="flex items-start text-base md:text-lg font-light text-gray-300 leading-relaxed">
                <span className="w-1 h-1 rounded-full bg-gray-400 mt-3 mr-4 shrink-0"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

      </div>
    </section>
  );
}
