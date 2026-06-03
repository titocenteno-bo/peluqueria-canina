/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Star, MessageCircle, Heart, Quote } from 'lucide-react';
import { motion } from 'motion/react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  const handleBooking = () => {
    const text = encodeURIComponent('¡Hola Nachis Pupis! Vi las opiniones de las familias en la Boutique/Spa. Quisiera agendar un turno para mi mascota. 🐾💖');
    window.open(`https://wa.me/59176756381?text=${text}`, '_blank');
  };

  return (
    <section id="testimonios" className="py-20 md:py-28 bg-[#FCFBF9] relative overflow-hidden border-t border-brand-sand-dark/20">
      
      {/* Soft dynamic background glow balls */}
      <div className="absolute top-1/4 right-[5%] w-72 h-72 bg-brand-lavender/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-[5%] w-72 h-72 bg-brand-coral/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="bg-brand-lavender-light text-brand-lavender font-bold text-[10px] uppercase tracking-[0.2em] py-1 px-3 rounded-full inline-flex items-center gap-1.5 mb-4">
            <MessageCircle className="w-3.5 h-3.5" />
            Amados por las Familias de La Paz
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-[42px] leading-tight font-extrabold text-brand-charcoal mb-4">
            Mascotas felices, Familias felices.
          </h2>
          <p className="text-slate-500 font-semibold text-sm md:text-base">
            No somos nosotros quienes lo decimos, lo confirman las mamás y papás de Miraflores. ¡Opiniones reales y verificadas!
          </p>
        </div>

        {/* Card Grid Layout replacing long chat bubble, saves massive vertical space, clean and dense */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, index) => {
            // Assign custom soft colors to card borders/badges to make it playful
            const borderColors = [
              'hover:border-brand-coral/40',
              'hover:border-brand-honey/40',
              'hover:border-brand-lavender/40'
            ];
            const badgeClasses = [
              'bg-brand-coral-light text-brand-coral',
              'bg-brand-honey-light text-brand-honey',
              'bg-brand-lavender-light text-brand-lavender'
            ];

            return (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -6 }}
                className={`bg-white rounded-[32px] p-6 shadow-md border-2 border-slate-100 transition-all duration-300 ${borderColors[index % borderColors.length]} flex flex-col justify-between`}
              >
                <div>
                  
                  {/* Rating Stars and Date Indicator row */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-brand-gold gap-0.5">
                      {Array.from({ length: t.rating }).map((_, rIdx) => (
                        <Star key={rIdx} className="w-4 h-4 fill-brand-gold text-brand-gold" />
                      ))}
                    </div>
                    <span className="text-[10px] font-mono font-black text-slate-400 bg-slate-100/90 py-0.5 px-2.5 rounded-full">
                      ✓ WhatsApp • {t.date}
                    </span>
                  </div>

                  {/* Quote icon & text */}
                  <div className="relative mb-6">
                    <Quote className="absolute -top-3 -left-2 w-8 h-8 text-slate-100 -z-5 rotate-180" />
                    <p className="text-slate-600 text-xs sm:text-xs leading-relaxed font-semibold relative z-10 italic">
                      "{t.message}"
                    </p>
                  </div>

                </div>

                {/* Author profile detail section */}
                <div className="border-t border-slate-50 pt-4 mt-6">
                  <div className="flex items-center gap-3.5">
                    <img
                      src={t.avatarUrl}
                      alt={t.author}
                      className="w-10 h-10 rounded-full object-cover shrink-0 border-2 border-white shadow-md"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h4 className="font-extrabold text-sm text-brand-charcoal">{t.author}</h4>
                      <div className="flex flex-wrap items-center gap-1.5 mt-0.5">
                        <span className={`text-[9.5px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md ${badgeClasses[index % badgeClasses.length]}`}>
                          {t.dogName} 🐾
                        </span>
                        <span className="text-[10px] text-slate-400 font-bold">({t.breed})</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Global organic call to action banner under grid */}
        <div className="text-center mt-12 bg-white border border-slate-150 rounded-3xl p-6 shadow-md max-w-xl mx-auto">
          <div className="flex justify-center mb-3.5">
            <div className="bg-brand-coral-light text-brand-coral p-3 rounded-full">
              <Heart className="w-5 h-5 fill-brand-coral text-brand-coral" />
            </div>
          </div>
          <h3 className="font-serif text-lg font-bold text-brand-charcoal mb-1">
            ¿Quieres vivir la mejor experiencia para tu mascota?
          </h3>
          <p className="text-slate-500 text-xs font-semibold mb-4 leading-relaxed">
            Escríbenos para una evaluación cariñosa complementaria de piel y pelaje totalmente gratis.
          </p>
          <button
            onClick={handleBooking}
            className="w-full sm:w-auto bg-[#1E2D3D] hover:bg-brand-coral text-white font-extrabold text-xs uppercase tracking-wider py-3.5 px-6 rounded-2xl transition-all cursor-pointer shadow-md"
          >
            Quiero reservar cita por WhatsApp
          </button>
        </div>

      </div>
    </section>
  );
}
