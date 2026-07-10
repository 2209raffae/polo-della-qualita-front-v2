"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface SplitFeatureSectionProps {
  title: string;
  subtitle?: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition?: "left" | "right";
  link?: { label: string; href: string };
}

export default function SplitFeatureSection({
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt,
  imagePosition = "right",
  link,
}: SplitFeatureSectionProps) {
  const isImageRight = imagePosition === "right";
  const imageClassName = `relative w-full lg:w-1/2 aspect-square lg:aspect-auto overflow-hidden ${isImageRight ? "order-1 lg:order-2" : "order-1 lg:order-1"}`;
  const imageContent = (
    <Image
      src={imageSrc}
      alt={imageAlt}
      fill
      className="object-cover object-center transition-transform duration-[2s] ease-out hover:scale-105"
    />
  );

  return (
    <section className="w-full bg-[#f4f4f4] text-polo-dark">
      <div className="w-full flex flex-col lg:flex-row min-h-screen lg:h-screen">
        <div className={`w-full lg:w-1/2 flex flex-col justify-center px-8 md:px-16 py-16 ${isImageRight ? "order-2 lg:order-1" : "order-2 lg:order-2"}`}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            {subtitle && (
              <p className="text-sm md:text-base font-light tracking-widest uppercase mb-4 text-gray-500">
                {subtitle}
              </p>
            )}
            <h2 className="text-3xl md:text-4xl lg:text-[2.5rem] font-bold uppercase tracking-wide leading-[1.2] mb-6 text-black">
              {title.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  {i < title.split("\n").length - 1 && <br />}
                </span>
              ))}
            </h2>
            <div className="text-base md:text-lg font-light leading-relaxed mb-10 text-gray-700 space-y-4">
              {description.split("\n").map((para, i) => (
                para.trim() !== "" ? <p key={i}>{para}</p> : null
              ))}
            </div>
            {link && (
              <Link href={link.href} className="inline-flex items-center gap-2 text-[10px] md:text-xs font-bold tracking-[0.15em] uppercase border-b border-polo-dark pb-1 hover:text-gray-500 transition-colors group">
                {link.label}
                <span className="transform transition-transform group-hover:translate-x-1">-&gt;</span>
              </Link>
            )}
          </motion.div>
        </div>

        {link ? (
          <Link href={link.href} aria-label={link.label} className={imageClassName}>
            {imageContent}
          </Link>
        ) : (
          <div className={imageClassName}>{imageContent}</div>
        )}
      </div>
    </section>
  );
}
