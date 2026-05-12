"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-24 px-8 md:px-16">
      <div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8">
        
        {/* COLONNA 1: Logo e Info (4 colonne su 12) */}
        <div className="lg:col-span-4 flex flex-col">
          <div className="relative w-48 h-24 mb-12">
            <Image 
              src="/images/logo-footer.png" 
              alt="Polo della Qualità" 
              fill 
              className="object-contain object-left"
            />
          </div>

          <div className="mb-10">
            <h4 className="text-[9px] font-bold tracking-[0.2em] text-gray-500 uppercase mb-3">Ufficio</h4>
            <p className="text-xs md:text-sm font-light text-gray-300 leading-relaxed">
              Via dell'Innovazione 1<br />
              20126 Milano, Italy
            </p>
          </div>

          <div>
            <h4 className="text-[9px] font-bold tracking-[0.2em] text-gray-500 uppercase mb-3">Recapiti</h4>
            <p className="text-xs md:text-sm font-light text-gray-300 leading-relaxed">
              info@polodellaqualita.com<br />
              +39 02 1234 567
            </p>
          </div>
        </div>

        {/* COLONNA 2: Distretti (3 colonne su 12) */}
        <div className="lg:col-span-3 flex flex-col pt-4">
          <h3 className="text-sm md:text-base font-bold tracking-widest uppercase mb-8">Distretti</h3>
          <ul className="flex flex-col gap-4">
            <li><Link href="/distretti/gioielleria" className="text-xs font-light text-gray-300 hover:text-white uppercase tracking-wider border-b border-gray-600 hover:border-white pb-1 transition-colors inline-block">Gioielleria</Link></li>
            <li><Link href="#sposi" className="text-xs font-light text-gray-300 hover:text-white uppercase tracking-wider border-b border-gray-600 hover:border-white pb-1 transition-colors inline-block">Sposi</Link></li>
            <li><Link href="#food" className="text-xs font-light text-gray-300 hover:text-white uppercase tracking-wider border-b border-gray-600 hover:border-white pb-1 transition-colors inline-block">Food & Beverage</Link></li>
            <li><Link href="#automotive" className="text-xs font-light text-gray-300 hover:text-white uppercase tracking-wider border-b border-gray-600 hover:border-white pb-1 transition-colors inline-block">Automotive</Link></li>
            <li><Link href="#nautica" className="text-xs font-light text-gray-300 hover:text-white uppercase tracking-wider border-b border-gray-600 hover:border-white pb-1 transition-colors inline-block">Nautica & Yatching</Link></li>
            <li><Link href="#retail-qualita" className="text-xs font-light text-gray-300 hover:text-white uppercase tracking-wider border-b border-gray-600 hover:border-white pb-1 transition-colors inline-block">Retail</Link></li>
          </ul>
        </div>

        {/* COLONNA 3: Link Rapidi (3 colonne su 12) */}
        <div className="lg:col-span-3 flex flex-col pt-4">
          <h3 className="text-sm md:text-base font-bold tracking-widest uppercase mb-8">Link Rapidi</h3>
          <ul className="flex flex-col gap-4">
            <li><Link href="/diventa-manager" className="text-xs font-light text-gray-300 hover:text-white uppercase tracking-wider border-b border-gray-600 hover:border-white pb-1 transition-colors inline-block">Diventa Manager</Link></li>
            <li><Link href="#" className="text-xs font-light text-gray-300 hover:text-white uppercase tracking-wider border-b border-gray-600 hover:border-white pb-1 transition-colors inline-block">Proponi il tuo Brand</Link></li>
            <li><Link href="#" className="text-xs font-light text-gray-300 hover:text-white uppercase tracking-wider border-b border-gray-600 hover:border-white pb-1 transition-colors inline-block">Events</Link></li>
          </ul>
        </div>

        {/* COLONNA 4: Social (2 colonne su 12) */}
        <div className="lg:col-span-2 flex justify-start lg:justify-end pt-4">
          <div className="flex gap-4">
            <Link href="#" className="w-10 h-10 bg-white flex items-center justify-center hover:bg-gray-300 transition-colors">
              {/* Facebook Icon */}
              <svg className="w-5 h-5 text-black fill-current" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </Link>
            <Link href="#" className="w-10 h-10 bg-white flex items-center justify-center hover:bg-gray-300 transition-colors">
              {/* Instagram Icon */}
              <svg className="w-5 h-5 text-black fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </Link>
            <Link href="#" className="w-10 h-10 bg-white flex items-center justify-center hover:bg-gray-300 transition-colors">
              {/* LinkedIn Icon */}
              <svg className="w-5 h-5 text-black fill-current" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
