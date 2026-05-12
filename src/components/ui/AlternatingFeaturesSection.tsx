"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface Feature {
  title: string;
  subtitle?: string;
  description: string;
  mediaUrl: string;
  mediaType: "image" | "video";
  link?: { label: string; href: string };
}

interface AlternatingFeaturesSectionProps {
  features: Feature[];
}

export default function AlternatingFeaturesSection({ features }: AlternatingFeaturesSectionProps) {
  return (
    <section className="w-full bg-[#f4f4f4] text-polo-dark py-24 md:py-32 overflow-hidden">
      <div className="w-full px-8 md:px-16 flex flex-col gap-32">
        {features.map((feature, index) => {
          // If index is even (0, 2, 4...), text is left, media is right.
          // If index is odd (1, 3, 5...), media is left, text is right.
          const isMediaLeft = index % 2 !== 0;

          return (
            <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-center">
              
              {/* MEDIA BLOCK */}
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`relative w-full aspect-[3/4] overflow-hidden group ${isMediaLeft ? 'md:order-1 order-2' : 'md:order-2 order-2'}`}
              >
                <div className="absolute inset-0 bg-gray-200"></div>
                {feature.mediaType === 'video' ? (
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover object-center z-10"
                  >
                    <source src={feature.mediaUrl} type="video/mp4" />
                  </video>
                ) : (
                  <Image 
                    src={feature.mediaUrl} 
                    alt={feature.title.replace('\n', ' ')} 
                    fill 
                    className="object-cover object-center z-10 transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                  />
                )}
              </motion.div>

              {/* TEXT BLOCK */}
              <motion.div 
                initial={{ opacity: 0, x: isMediaLeft ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col justify-center ${isMediaLeft ? 'md:order-2 order-1' : 'md:order-1 order-1'}`}
              >
                <div className="w-full xl:w-4/5">
                  {feature.subtitle && (
                    <p className="text-sm md:text-base font-light tracking-widest uppercase mb-2 text-gray-500">{feature.subtitle}</p>
                  )}
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-wide leading-tight mb-6 text-black">
                    {/* Convert \n to <br> if user passes line breaks */}
                    {feature.title.split('\n').map((line, i) => (
                      <span key={i}>
                        {line}
                        {i < feature.title.split('\n').length - 1 && <br />}
                      </span>
                    ))}
                  </h2>
                  <p className="text-base md:text-lg font-light leading-relaxed mb-8 text-gray-700 max-w-md">
                    {feature.description}
                  </p>
                  {feature.link && (
                    <Link href={feature.link.href} className="inline-flex items-center gap-2 text-[10px] md:text-xs font-bold tracking-[0.15em] uppercase border-b border-polo-dark pb-1 hover:text-gray-500 transition-colors group">
                      {feature.link.label}
                      <span className="transform transition-transform group-hover:translate-x-1">→</span>
                    </Link>
                  )}
                </div>
              </motion.div>

            </div>
          );
        })}
      </div>
    </section>
  );
}
