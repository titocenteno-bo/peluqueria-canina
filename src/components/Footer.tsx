/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Sparkles, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleWhatsAppClick = () => {
    const text = encodeURIComponent('¡Hola Spa Canino Miraflores! Me encantaría reservar un turno de spa premium para mi mascota. 🐾🚀');
    window.open(`https://wa.me/59177465774?text=${text}`, '_blank');
  };

  return (
    <footer id="global-app-footer" className="bg-brand-charcoal text-white pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer layout */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-slate-800">
          
          {/* Left Column Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-3">
            <div className="flex items-center gap-2">
              <div className="bg-brand-mint/15 text-brand-mint p-2 rounded-xl flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-brand-mint fill-brand-mint" />
              </div>
              <div>
                <span className="font-serif text-lg font-bold tracking-tight text-white block">
                  SPA CANINO
                </span>
                <span className="text-[10px] font-bold tracking-[0.2em] text-brand-mint -mt-1 block">
                  MIRAFLORES
                </span>
              </div>
            </div>
            <p className="text-slate-400 text-xs font-semibold leading-relaxed max-w-xs mt-1">
              Es un placer absoluto recibir a tu mejor amigo en nuestro santuario de calma y consentimiento dermo-capilar.
            </p>
          </div>

          {/* Center Column Slogan - Large Display Serif */}
          <div className="text-center max-w-sm flex flex-col items-center">
            <div className="bg-brand-mint/10 text-brand-mint p-2 rounded-full mb-3 inline-block">
              <Heart className="w-4 h-4 fill-brand-mint text-brand-mint" />
            </div>
            <p className="font-serif italic text-lg sm:text-xl text-slate-100 font-medium">
              "Porque cada mascota merece sentirse especial."
            </p>
          </div>

          {/* Right Column Links */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right gap-2.5">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Canal Directo de WhatsApp</span>
            <button
              onClick={handleWhatsAppClick}
              className="text-brand-mint hover:text-white font-mono text-lg font-extrabold transition-colors cursor-pointer block"
            >
              +591 77465774
            </button>
            <p className="text-slate-400 text-xs font-semibold">
              Miraflores, La Paz, Bolivia
            </p>
          </div>

        </div>

        {/* Minimal Copyright and Agency Credits */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-center sm:text-left">
          <p className="text-[11px] text-slate-500 font-semibold tracking-wide">
            © {currentYear} Spa Canino Miraflores. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4 text-xs font-bold text-slate-400">
            <a href="#inicio" className="hover:text-brand-mint transition-colors">Volver arriba ↑</a>
            <span className="text-slate-700">|</span>
            <span className="text-[10px] uppercase text-slate-500 tracking-wider">La Paz, Bolivia 🇧🇴</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
