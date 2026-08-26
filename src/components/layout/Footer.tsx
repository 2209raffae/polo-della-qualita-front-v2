"use client";

import Image from "next/image";
import Link from "next/link";
import { districtNavLinks } from "@/data/districts";

const linkClass = "text-xs font-light text-gray-300 hover:text-white uppercase tracking-wider border-b border-gray-600 hover:border-white pb-1 transition-colors inline-block";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-24 px-8 md:px-16">
      <div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8">
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
              <a href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x133baabdffec7d55:0x4261a27b546163f5?sa=X&ved=1t:8290&ictx=111" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                Agglomerato, Zona Industriale ASI,<br />
                81025 Marcianise CE
              </a>
            </p>
          </div>
        </div>

        <div className="lg:col-span-3 flex flex-col pt-4">
          <h3 className="text-sm md:text-base font-bold tracking-widest uppercase mb-8">Distretti</h3>
          <ul className="flex flex-col gap-4">
            {districtNavLinks.map((district) => (
              <li key={district.href}>
                <Link href={district.href} className={linkClass}>
                  {district.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3 flex flex-col pt-4">
          <h3 className="text-sm md:text-base font-bold tracking-widest uppercase mb-8">Link Rapidi</h3>
          <ul className="flex flex-col gap-4">
            <li><Link href="/diventa-manager" className={linkClass}>Diventa Manager</Link></li>
            <li><Link href="/entra-nel-polo" className={linkClass}>Proponi il tuo business</Link></li>
            <li><Link href="/eventi" className={linkClass}>Events</Link></li>
          </ul>
        </div>

        <div className="lg:col-span-2 flex justify-start lg:justify-end pt-4">
          <div className="flex gap-4">
            <Link href="#" aria-label="LinkedIn" className="w-10 h-10 bg-white flex items-center justify-center hover:bg-gray-300 transition-colors">
              <svg className="w-5 h-5 text-black fill-current" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
