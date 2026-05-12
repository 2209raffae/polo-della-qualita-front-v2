"use client";

import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section className="w-full bg-[#f4f4f4] text-polo-dark py-24 md:py-32 px-8 md:px-16 lg:px-24">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12">
        
        {/* COLONNA SINISTRA: Info Contatti */}
        <div className="lg:col-span-4 flex flex-col justify-start pt-4 lg:pr-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold uppercase tracking-wide mb-16 text-black"
          >
            Contattaci
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-10"
          >
            <h3 className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase mb-3">
              Ufficio
            </h3>
            <p className="text-sm md:text-base font-light text-gray-800 leading-relaxed">
              Via dell'Innovazione 1<br />
              20126 Milano, Italy
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase mb-3">
              Recapiti
            </h3>
            <p className="text-sm md:text-base font-light text-gray-800 leading-relaxed">
              info@polodellaqualita.com<br />
              +39 02 1234 567
            </p>
          </motion.div>
        </div>

        {/* COLONNA DESTRA: Form Bianco */}
        <div className="lg:col-span-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 md:p-14 lg:p-20 w-full shadow-sm"
          >
            <form className="flex flex-col gap-12">
              
              {/* Row 1: Email & Telefono */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
                <div className="flex flex-col">
                  <label className="text-[9px] font-bold tracking-[0.15em] uppercase text-black mb-3">Email</label>
                  <input 
                    type="email" 
                    placeholder="e.g. name@company.com" 
                    className="w-full pb-3 border-b border-gray-200 bg-transparent text-sm font-light focus:outline-none focus:border-black transition-colors placeholder:text-gray-300"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-[9px] font-bold tracking-[0.15em] uppercase text-black mb-3">Telefono</label>
                  <div className="flex border-b border-gray-200 pb-3 focus-within:border-black transition-colors">
                    <div className="relative flex items-center pr-3 border-r border-transparent">
                      <select className="bg-transparent text-sm font-light text-gray-600 focus:outline-none cursor-pointer appearance-none pr-4">
                        <option>IT +39</option>
                        <option>US +1</option>
                      </select>
                      <svg className="w-3 h-3 absolute right-0 pointer-events-none text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                    <input 
                      type="tel" 
                      placeholder="e.g. 333 123 4567" 
                      className="w-full bg-transparent text-sm font-light focus:outline-none placeholder:text-gray-300 pl-3"
                    />
                  </div>
                </div>
              </div>

              {/* Row 2: Nome & Cognome */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
                <div className="flex flex-col">
                  <label className="text-[9px] font-bold tracking-[0.15em] uppercase text-black mb-3">Nome</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Jane" 
                    className="w-full pb-3 border-b border-gray-200 bg-transparent text-sm font-light focus:outline-none focus:border-black transition-colors placeholder:text-gray-300"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-[9px] font-bold tracking-[0.15em] uppercase text-black mb-3">Cognome</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Doe" 
                    className="w-full pb-3 border-b border-gray-200 bg-transparent text-sm font-light focus:outline-none focus:border-black transition-colors placeholder:text-gray-300"
                  />
                </div>
              </div>

              {/* Row 3: Come possiamo aiutarti & Preferenze di contatto */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
                <div className="flex flex-col relative">
                  <label className="text-[9px] font-bold tracking-[0.15em] uppercase text-black mb-3">Come possiamo aiutarti</label>
                  <div className="relative border-b border-gray-200 pb-3 focus-within:border-black transition-colors">
                    <select defaultValue="" className="w-full bg-transparent text-sm font-light text-gray-800 focus:outline-none cursor-pointer appearance-none">
                      <option value="" disabled className="text-gray-300">Select an option</option>
                      <option value="manager">Diventare Manager</option>
                      <option value="store">Aprire uno Store</option>
                      <option value="info">Informazioni Generali</option>
                    </select>
                    <svg className="w-3 h-3 absolute right-0 top-1 pointer-events-none text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
                <div className="flex flex-col relative">
                  <label className="text-[9px] font-bold tracking-[0.15em] uppercase text-black mb-3">Preferenze di contatto</label>
                  <div className="relative border-b border-gray-200 pb-3 focus-within:border-black transition-colors">
                    <select defaultValue="" className="w-full bg-transparent text-sm font-light text-gray-800 focus:outline-none cursor-pointer appearance-none">
                      <option value="" disabled className="text-gray-300">Select an option</option>
                      <option value="email">Email</option>
                      <option value="telefono">Telefono</option>
                    </select>
                    <svg className="w-3 h-3 absolute right-0 top-1 pointer-events-none text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>

              {/* Row 4: Messaggio */}
              <div className="flex flex-col mt-2">
                <label className="text-[9px] font-bold tracking-[0.15em] uppercase text-black mb-3">Messaggio</label>
                <textarea 
                  placeholder="Scrivi qui il tuo messaggio" 
                  rows={4}
                  className="w-full pb-3 border-b border-gray-200 bg-transparent text-sm font-light focus:outline-none focus:border-black transition-colors placeholder:text-gray-300 resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="mt-6 flex justify-end">
                <button 
                  type="button" 
                  className="bg-black hover:bg-gray-800 text-white text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase px-12 py-5 transition-colors cursor-pointer"
                >
                  Invia Messaggio
                </button>
              </div>

            </form>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
