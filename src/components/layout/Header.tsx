"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { districtNavLinks } from "@/data/districts";

const navLinks = [
  { label: "ENTRA NEL POLO", href: "/entra-nel-polo" },
  { label: "SCOPRI IL POLO", href: "/scopri-il-polo" },
  { label: "MAPPA", href: "/map" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileDistrictsOpen, setIsMobileDistrictsOpen] = useState(false);

  function closeMobileMenu() {
    setIsMobileMenuOpen(false);
    setIsMobileDistrictsOpen(false);
  }

  function toggleMobileMenu() {
    setIsMobileMenuOpen((isOpen) => {
      if (isOpen) {
        setIsMobileDistrictsOpen(false);
      }

      return !isOpen;
    });
  }

  return (
    <header className="absolute top-0 left-0 w-full z-50 py-4 md:py-6 px-6 md:px-12 lg:px-16 flex items-center justify-between text-white">
      <Link href="/" className="relative block w-40 h-10 md:w-56 md:h-14 z-50">
        <Image
          src="/images/logo.png"
          alt={"Polo della Qualit\u00e0"}
          fill
          sizes="(min-width: 768px) 224px, 160px"
          className="object-contain object-left"
          priority
        />
      </Link>

      <nav className="hidden lg:flex items-center gap-8 text-[11px] font-medium tracking-[0.2em] uppercase">
        <div className="group relative cursor-pointer hover:text-gray-300 transition-colors py-4">
          DISTRETTI <span className="ml-1 text-[8px] opacity-70">v</span>

          <div className="absolute top-full left-0 mt-0 w-80 bg-black/90 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col pt-2 pb-4 px-4 shadow-xl">
            {districtNavLinks.map((district) => (
              <Link
                key={district.href}
                href={district.href}
                className="grid grid-cols-[2.5rem_1fr] gap-3 text-[10px] md:text-xs font-bold uppercase tracking-[0.14em] text-white/70 hover:text-white transition-colors py-2"
              >
                <span className="text-[#c8a45d]">{district.num}</span>
                <span>{district.label}</span>
              </Link>
            ))}
          </div>
        </div>

        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} className="group relative cursor-pointer hover:text-gray-300 transition-colors">
            {link.label}
          </Link>
        ))}
      </nav>

      <button
        className="lg:hidden flex flex-col gap-1.5 z-50 p-2"
        onClick={toggleMobileMenu}
        aria-label={isMobileMenuOpen ? "Chiudi menu" : "Apri menu"}
        aria-expanded={isMobileMenuOpen}
      >
        <span className={`w-6 h-[2px] bg-white transition-transform duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-[8px]" : ""}`}></span>
        <span className={`w-6 h-[2px] bg-white transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`}></span>
        <span className={`w-6 h-[2px] bg-white transition-transform duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-[8px]" : ""}`}></span>
      </button>

      <div className={`fixed inset-0 bg-black z-40 transition-transform duration-500 ease-in-out lg:hidden overflow-y-auto ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <nav className="mx-auto flex min-h-screen w-full max-w-md flex-col gap-4 px-6 pb-10 pt-28 text-sm font-bold uppercase tracking-[0.16em]">
          <div className="border-y border-white/15 py-2">
            <button
              type="button"
              onClick={() => setIsMobileDistrictsOpen((isOpen) => !isOpen)}
              className="flex min-h-12 w-full items-center justify-between gap-4 text-left text-white transition-colors hover:text-gray-300"
              aria-expanded={isMobileDistrictsOpen}
            >
              <span>Distretti</span>
              <span className="text-lg leading-none text-[#c8a45d]">{isMobileDistrictsOpen ? "-" : "+"}</span>
            </button>

            <div className={`grid transition-[grid-template-rows,opacity] duration-300 ${isMobileDistrictsOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
              <div className="overflow-hidden">
                <div className="flex flex-col gap-1 pb-4 pt-2">
                  {districtNavLinks.map((district) => (
                    <Link
                      key={district.href}
                      href={district.href}
                      onClick={closeMobileMenu}
                      className="grid min-h-12 grid-cols-[2.25rem_1fr] items-center gap-3 rounded-sm border border-white/10 px-3 py-3 text-[12px] leading-snug tracking-[0.12em] text-white/80 transition-colors hover:border-[#c8a45d]/50 hover:text-white"
                    >
                      <span className="text-[#c8a45d]">{district.num}</span>
                      <span>{district.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMobileMenu}
              className="flex min-h-12 items-center border-b border-white/15 text-white transition-colors hover:text-gray-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
