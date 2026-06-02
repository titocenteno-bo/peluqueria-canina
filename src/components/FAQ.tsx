/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQ_ITEMS } from '../data';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const handleBooking = () => {
    const text = encodeURIComponent('¡Hola Spa Canino Miraflores! Tengo unas dudas adicionales sobre las sesiones de spa. ¿Podrían resolverlas? 🐾');
    window.open(`https://wa.me/59177465774?text=${text}`, '_blank');
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#FCFBF9] relative overflow-hidden boarder-t border-brand-sand-dark/20">
      
      {/* Decorative vertical patterns */}
      <div className="absolute top-0 right-0 w-1/4 h-1/4 bg-brand-aqua/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-brand-mint/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-bold tracking-[0.2em] text-[#248DA6] uppercase mb-3">Respuestas inmediatas</p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-charcoal mb-4">
            Preguntas frecuentes de las familias.
          </h2>
          <p className="text-slate-600 font-medium text-sm md:text-base leading-relaxed">
            Todo lo que necesitas saber antes de traer a tu mascota a consentirse con nosotros. Tu tranquilidad es nuestra absoluta prioridad.
          </p>
        </div>

        {/* Elegant accordion system featuring highly highlighted "+" symbol */}
        <div className="flex flex-col gap-4">
          {FAQ_ITEMS.map((item) => {
            const isOpen = item.id === openId;

            return (
              <div
                key={item.id}
                className={`bg-white rounded-[26px] border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'border-brand-coral/40 shadow-xl scale-[1.01]'
                    : 'border-slate-100 shadow hover:border-slate-200'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full text-left py-5 px-6 flex items-center justify-between gap-4 outline-none cursor-pointer group"
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-2.5 rounded-xl shrink-0 transition-colors ${
                      isOpen ? 'bg-brand-coral-light text-brand-coral' : 'bg-brand-sand-dark text-[#2F9AB6]'
                    }`}>
                      <HelpCircle className="w-4 h-4" />
                    </div>
                    <span className="font-bold text-sm sm:text-base text-brand-charcoal group-hover:text-brand-coral transition-colors leading-tight">
                      {item.question}
                    </span>
                  </div>

                  {/* HIGHLY INTERACTIVE AND PROMINENT '+' TRIGGER SYMBOL */}
                  <div className="shrink-0">
                    <motion.div
                      animate={{ 
                        rotate: isOpen ? 135 : 0, 
                        scale: isOpen ? 1.05 : 1,
                        backgroundColor: isOpen ? '#FF6B53' : '#F1EFEA',
                        color: isOpen ? '#FFFFFF' : '#1E2D3D'
                      }}
                      className="h-8 w-8 rounded-full flex items-center justify-center font-black text-base shadow-sm border border-slate-200/50 group-hover:scale-110 transition-all cursor-pointer select-none font-mono"
                    >
                      +
                    </motion.div>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="border-t border-slate-50 py-5 px-11 text-xs sm:text-sm leading-relaxed text-slate-600 font-semibold bg-brand-sand/20">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Additional support trigger */}
        <div className="text-center mt-12">
          <p className="text-xs text-slate-500 font-bold mb-3 uppercase tracking-wider">¿Tienes alguna otra duda o consulta?</p>
          <button
            onClick={handleBooking}
            className="inline-flex items-center gap-2 bg-brand-charcoal hover:bg-brand-coral text-white font-extrabold text-xs uppercase tracking-widest py-3.5 px-6 rounded-xl transition-colors cursor-pointer shadow-md hover:shadow-lg"
          >
            Preguntar por WhatsApp
          </button>
        </div>

      </div>
    </section>
  );
}
