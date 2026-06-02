/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Gift, Zap, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function Promotion() {
  const handlePromoClaim = () => {
    const text = encodeURIComponent('¡Hola Spa Canino Miraflores! Quiero reclamar mi descuento de primera visita para mi mascota. ¿Tienen disponibilidad de turnos? 🐾🎁');
    window.open(`https://wa.me/59177465774?text=${text}`, '_blank');
  };

  return (
    <section className="py-12 bg-gradient-to-r from-[#248DA6] via-brand-aqua to-[#42BFD8] text-white overflow-hidden relative shadow-inner">
      {/* Decorative moving light circles */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-mint/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12">
          
          {/* Main discount badge & copy */}
          <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            <motion.div
              animate={{
                rotate: [0, -5, 5, -5, 0],
                scale: [1, 1.05, 1, 1.05, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="bg-brand-mint h-20 w-20 rounded-2xl flex flex-col items-center justify-center border-2 border-white/50 shadow-xl shrink-0"
            >
              <Gift className="w-8 h-8 text-white mb-0.5" />
              <span className="text-[10px] font-extrabold uppercase text-white tracking-widest font-mono">
                REGALO
              </span>
            </motion.div>

            <div className="flex flex-col">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-1.5">
                <span className="bg-brand-mint/25 text-brand-mint-light text-[9px] font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded-full">
                  BIENVENIDA BOUTIQUE
                </span>
                <span className="inline-flex items-center gap-1 text-[10px] text-amber-300 font-bold font-mono">
                  <Zap className="w-3 h-3 fill-amber-300" />
                  MIRAFLORES EXCLUSIVO
                </span>
              </div>
              
              <h2 className="font-serif text-2xl sm:text-3xl font-extrabold tracking-tight">
                Primera visita con descuento especial
              </h2>
              
              <p className="text-cyan-50/90 text-sm md:text-base font-semibold max-w-xl mt-1">
                Reserva hoy el spa de tu consentido y obtén un beneficio especial de bienvenida para nuevos clientes.
              </p>
            </div>
          </div>

          {/* Claim promo action trigger block */}
          <div className="shrink-0 w-full lg:w-auto flex flex-col items-center">
            <button
              id="promo-cta-claim"
              onClick={handlePromoClaim}
              className="w-full sm:w-auto bg-white text-brand-charcoal hover:bg-brand-sand font-bold text-xs uppercase tracking-wider py-4 px-8 rounded-2xl transition-all shadow-xl hover:shadow-2xl active:scale-95 cursor-pointer flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5 text-emerald-500 fill-emerald-500" />
              <span>Quiero mi descuento</span>
            </button>
            <span className="text-cyan-100 text-[10px] font-mono font-bold mt-2.5 tracking-wider uppercase">
              ¡Cupos limitados por semana!
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
