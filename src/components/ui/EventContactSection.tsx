"use client";

import { motion } from "framer-motion";
import LeadForm from "@/components/ui/LeadForm";

interface EventContactSectionProps {
  title?: string;
}

export default function EventContactSection({ title = "PROPONI\nEVENTO" }: EventContactSectionProps) {
  return (
    <section id="proponi-evento" className="w-full bg-[#f4f4f4] text-polo-dark py-16 md:py-32 px-6 md:px-16">
      <div className="max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12">
        <div className="lg:col-span-4 flex flex-col justify-start pt-4 lg:pr-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-wide mb-16 text-black leading-tight"
          >
            {title.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                {i < title.split("\n").length - 1 && <br />}
              </span>
            ))}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-10"
          >
            <h3 className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase mb-3">
              Ufficio
            </h3>
            <p className="text-sm md:text-base font-light text-gray-800 leading-relaxed">
              <a href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x133baabdffec7d55:0x4261a27b546163f5?sa=X&ved=1t:8290&ictx=111" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">
                Agglomerato, Zona Industriale ASI,<br />
                81025 Marcianise CE
              </a>
            </p>
          </motion.div>
        </div>

        <div className="lg:col-span-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-6 md:p-14 lg:p-20 w-full shadow-sm"
          >
            <LeadForm leadType="event" crmTitle="Richiesta proposta evento" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
