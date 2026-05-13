"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const FILTERS = ["TUTTI", "GIOIELLI", "SPOSI", "FOOD", "SUPERCAR", "YACHT", "RETAIL"];

const FEATURED_BRANDS = [
  { name: "GRUPPO PICCIRILLO", level: "Livello 1", logo: "/images/logo.png" }, // Using placeholder logo since I don't have the exact ones
  { name: "MARINELLA", level: "Livello 0", logo: "/images/logo-footer.png" }
];

export default function MapSidebar() {
  const [activeFilter, setActiveFilter] = useState("TUTTI");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <motion.div 
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="absolute top-28 left-8 md:left-16 z-40 w-full max-w-[320px] bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-6 flex flex-col max-h-[calc(100vh-160px)] overflow-y-auto"
    >
      {/* SEARCH BAR */}
      <div className="relative w-full mb-6">
        <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input 
          type="text" 
          placeholder="Ricerca..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-[#f8f8f8] border border-gray-200 rounded-md py-3 pl-10 pr-4 text-sm focus:outline-none focus:border-black transition-colors placeholder:text-gray-400"
        />
      </div>

      {/* FILTERS */}
      <div className="flex flex-wrap gap-2 mb-8">
        {FILTERS.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-3 py-1.5 rounded-full text-[10px] font-bold tracking-wider uppercase transition-colors border ${
              activeFilter === filter 
                ? "bg-black text-white border-black" 
                : "bg-white text-gray-600 border-gray-200 hover:border-gray-400"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* FEATURED BRANDS */}
      <div>
        <h3 className="font-serif italic text-gray-500 mb-4 text-sm">Brand in evidenza</h3>
        <div className="grid grid-cols-2 gap-4">
          {FEATURED_BRANDS.map((brand, i) => (
            <div key={i} className="flex flex-col cursor-pointer group">
              <div className="bg-[#f4f4f4] aspect-square rounded-md mb-3 flex items-center justify-center p-4 relative overflow-hidden group-hover:bg-gray-200 transition-colors">
                {/* Fallback to something if image fails */}
                <div className="relative w-full h-full opacity-60 mix-blend-multiply">
                   <Image src={brand.logo} alt={brand.name} fill className="object-contain" />
                </div>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-black">{brand.name}</span>
              <span className="text-[10px] text-gray-400">{brand.level}</span>
            </div>
          ))}
        </div>
      </div>

    </motion.div>
  );
}
