import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full z-50 py-6 px-8 md:px-16 flex items-center justify-between text-white">
      {/* LOGO UFFICIALE */}
      <Link href="/" className="relative block w-48 h-12 md:w-56 md:h-14">
        <Image 
          src="/images/logo.png" 
          alt="Polo della Qualità" 
          fill
          className="object-contain object-left"
          priority
        />
      </Link>

      {/* NAV LINKS */}
      <nav className="hidden md:flex items-center gap-8 text-[11px] font-medium tracking-[0.2em] uppercase">
        <div className="group relative cursor-pointer hover:text-gray-300 transition-colors">
          DISTRETTI <span className="ml-1 text-[8px] opacity-70">▼</span>
        </div>
        <div className="group relative cursor-pointer hover:text-gray-300 transition-colors">
          ENTRA NEL POLO <span className="ml-1 text-[8px] opacity-70">▼</span>
        </div>
        <div className="group relative cursor-pointer hover:text-gray-300 transition-colors">
          EVENTS <span className="ml-1 text-[8px] opacity-70">▼</span>
        </div>
        <Link href="/map" className="hover:text-gray-300 transition-colors">
          MAPPA
        </Link>
      </nav>

      {/* Mobile Menu Button (Hamburger) */}
      <button className="md:hidden flex flex-col gap-1.5 z-50">
        <span className="w-6 h-[2px] bg-white"></span>
        <span className="w-6 h-[2px] bg-white"></span>
        <span className="w-6 h-[2px] bg-white"></span>
      </button>
    </header>
  );
}
