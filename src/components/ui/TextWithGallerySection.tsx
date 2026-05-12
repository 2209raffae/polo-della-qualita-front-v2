"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface TextWithGallerySectionProps {
  title: string;
  description: string;
  images: [string, string];
}

export default function TextWithGallerySection({ title, description, images }: TextWithGallerySectionProps) {
  return (
    <section className="w-full bg-[#f4f4f4] text-polo-dark py-24 md:py-32 overflow-hidden">
      <div className="w-full px-8 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
        
        {/* COLONNA SINISTRA: Testo */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full xl:w-4/5 pr-0 md:pr-8"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-wide leading-tight mb-8 text-black">
              {title}
            </h2>
            <p className="text-base md:text-lg lg:text-xl font-light leading-relaxed text-gray-700">
              {description}
            </p>
          </motion.div>
        </div>

        {/* COLONNA DESTRA: 2 Immagini */}
        <div className="lg:col-span-7">
          <div className="grid grid-cols-2 gap-4 md:gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative w-full aspect-[4/5] overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gray-200"></div>
              <Image 
                src={images[0]} 
                alt="Gallery preview 1" 
                fill 
                className="object-cover object-center transition-transform duration-[1.5s] ease-out group-hover:scale-105"
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full aspect-[4/5] overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gray-200"></div>
              <Image 
                src={images[1]} 
                alt="Gallery preview 2" 
                fill 
                className="object-cover object-center transition-transform duration-[1.5s] ease-out group-hover:scale-105"
              />
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
