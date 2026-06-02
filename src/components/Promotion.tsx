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
    <section className="py-12 bg-gradient-to-r from-[#175E70] via-[#20839C] to-[#2BA9C7] text-white overflow-hidden relative shadow-[0_25px_60px_-15px_rgba(23,94,112,0.4)] my-6">
      {/* Neon Glow Bars on Top and Bottom borders */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-cyan-300 via-emerald-300 to-transparent opacity-90 shadow-[0_2px_20px_rgba(34,211,238,0.8),0_1px_8px_rgba(52,211,153,0.5)]" />
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-emerald-300 via-cyan-300 to-transparent opacity-90 shadow-[0_-2px_20px_rgba(52,211,153,0.8),0_-1px_8px_rgba(34,211,238,0.5)]" />

      {/* Decorative premium radial glowing lights */}
      <div className="absolute -top-12 -left-12 w-96 h-96 bg-cyan-400/20 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute -bottom-12 -right-12 w-96 h-96 bg-emerald-400/20 rounded-full blur-[80px] pointer-events-none" />
      
      {/* Geometric subtle grid pattern overlay for premium modern styling */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />

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
            <motion.button
              id="promo-cta-claim"
              onClick={handlePromoClaim}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 25px rgba(34, 211, 238, 0.8), 0 0 50px rgba(52, 211, 153, 0.4)"
              }}
              whileTap={{ scale: 0.98 }}
              animate={{
                scale: [1, 1.02, 1],
                boxShadow: [
                  "0 10px 30px -10px rgba(0, 0, 0, 0.3)",
                  "0 0 20px 4px rgba(34, 211, 238, 0.6), 0 0 30px 2px rgba(52, 211, 153, 0.3)",
                  "0 10px 30px -10px rgba(0, 0, 0, 0.3)"
                ]
              }}
              transition={{
                repeat: Infinity,
                duration: 2.2,
                ease: "easeInOut"
              }}
              className="w-full sm:w-auto bg-gradient-to-b from-white to-slate-50 text-brand-charcoal hover:from-white hover:to-white font-extrabold text-xs uppercase tracking-wider py-4.5 px-9 rounded-2xl cursor-pointer flex items-center justify-center gap-2.5 border-2 border-emerald-400 relative overflow-hidden shadow-xl"
            >
              <MessageCircle className="w-5 h-5 text-emerald-500 fill-emerald-500 shrink-0" />
              <span className="font-extrabold font-sans text-brand-charcoal text-xs [text-shadow:0_1px_1px_rgba(255,255,255,0.8)]">
                Quiero mi descuento
              </span>
            </motion.button>
            <span className="text-cyan-100 text-[10px] font-mono font-bold mt-2.5 tracking-wider uppercase">
              ¡Cupos limitados por semana!
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
