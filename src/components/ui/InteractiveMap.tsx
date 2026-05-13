"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function InteractiveMap() {
  const [level, setLevel] = useState(0);

  return (
    <div className="absolute inset-0 w-full h-full bg-[#f4f4f4] flex items-center justify-center overflow-hidden">
      
      {/* MAP CONTAINER (Scalable and Draggable in a real scenario) */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative w-full max-w-4xl aspect-[4/3] drop-shadow-2xl"
      >
        <svg viewBox="0 0 800 600" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          {/* Base shape */}
          <path d="M 50 100 L 450 100 L 700 300 L 700 500 Q 700 550 650 550 L 100 550 Q 50 550 50 500 Z" fill="#e5e5e5" stroke="#d4d4d4" strokeWidth="2" />
          
          {/* Top block */}
          <path d="M 100 130 L 430 130 L 670 320 L 670 420 L 100 420 Z" fill="#ffffff" />
          <text x="350" y="120" fontSize="8" fill="#888" letterSpacing="2" fontWeight="bold">SETTORE CENTRALE</text>
          
          {/* Bottom left block */}
          <rect x="100" y="440" width="260" height="90" fill="#ffffff" />

          {/* Bottom right block */}
          <rect x="380" y="440" width="290" height="90" fill="#ffffff" />

          {/* POI Markers */}
          <circle cx="280" cy="115" r="8" fill="#333" />
          <circle cx="680" cy="400" r="6" fill="#333" />
          <circle cx="120" cy="535" r="8" fill="#333" />
          <circle cx="660" cy="530" r="8" fill="#333" />
          
          <circle cx="390" cy="485" r="12" fill="#e2ceab" /> {/* Highlighted spot */}
        </svg>
      </motion.div>

      {/* CONTROLS (Bottom Right) */}
      <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col gap-3 md:gap-4 z-40">
        
        {/* Levels */}
        <div className="flex flex-col bg-white rounded-md overflow-hidden shadow-lg border border-gray-100">
          <button 
            onClick={() => setLevel(1)}
            className={`w-10 h-10 flex items-center justify-center text-xs font-bold transition-colors ${level === 1 ? 'bg-black text-white' : 'bg-white text-gray-500 hover:bg-gray-50'}`}
          >
            1
          </button>
          <button 
            onClick={() => setLevel(0)}
            className={`w-10 h-10 flex items-center justify-center text-xs font-bold border-t border-gray-100 transition-colors ${level === 0 ? 'bg-black text-white' : 'bg-white text-gray-500 hover:bg-gray-50'}`}
          >
            0
          </button>
        </div>

        {/* Zoom & Fullscreen */}
        <div className="flex flex-col bg-white rounded-md overflow-hidden shadow-lg border border-gray-100">
          <button className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
          </button>
          <button className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors border-t border-gray-100">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4"></path></svg>
          </button>
        </div>
        
        <div className="bg-white rounded-md overflow-hidden shadow-lg border border-gray-100">
          <button className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"></path></svg>
          </button>
        </div>

      </div>
    </div>
  );
}
