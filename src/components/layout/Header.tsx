"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "ENTRA NEL POLO", href: "/entra-nel-polo", hasCaret: true },
  { label: "SCOPRI IL POLO", href: "/scopri-il-polo" },
  { label: "EVENTS", href: "/eventi", hasCaret: true },
  { label: "MAPPA", href: "/map" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-50 py-4 md:py-6 px-6 md:px-12 lg:px-16 flex items-center justify-between text-white">
      <Link href="/" className="relative block w-40 h-10 md:w-56 md:h-14 z-50">
        <Image
          src="/images/logo.png"
          alt="Polo della Qualita"
          fill
          sizes="(min-width: 768px) 224px, 160px"
          className="object-contain object-left"
          priority
        />
      </Link>

      <nav className="hidden lg:flex items-center gap-8 text-[11px] font-medium tracking-[0.2em] uppercase">
        <div className="group relative cursor-pointer hover:text-gray-300 transition-colors py-4">
          DISTRETTI <span className="ml-1 text-[8px] opacity-70">▼</span>

          <div className="absolute top-full left-0 mt-0 w-48 bg-black/90 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col pt-2 pb-4 px-4 shadow-xl">
            <Link href="/distretti/gioielleria" className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-white/70 hover:text-white transition-colors py-2">
              GIOIELLERIA
            </Link>
          </div>
        </div>

        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} className="group relative cursor-pointer hover:text-gray-300 transition-colors">
            {link.label}
            {link.hasCaret ? <span className="ml-1 text-[8px] opacity-70">▼</span> : null}
          </Link>
        ))}
      </nav>

      <button
        className="lg:hidden flex flex-col gap-1.5 z-50 p-2"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label={isMobileMenuOpen ? "Chiudi menu" : "Apri menu"}
        aria-expanded={isMobileMenuOpen}
      >
        <span className={`w-6 h-[2px] bg-white transition-transform duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-[8px]" : ""}`}></span>
        <span className={`w-6 h-[2px] bg-white transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`}></span>
        <span className={`w-6 h-[2px] bg-white transition-transform duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-[8px]" : ""}`}></span>
      </button>

      <div className={`fixed inset-0 bg-black z-40 transition-transform duration-500 ease-in-out lg:hidden flex flex-col justify-center items-center ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <nav className="flex flex-col items-center gap-8 text-lg font-medium tracking-[0.2em] uppercase">
          <Link href="/distretti/gioielleria" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-gray-300 transition-colors">
            DISTRETTI
          </Link>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="hover:text-gray-300 transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
