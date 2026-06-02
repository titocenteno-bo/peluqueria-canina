/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Sparkles, ArrowRight, Shield, Award, Heart, Smile } from 'lucide-react';
import { motion } from 'motion/react';
import { ASSETS } from '../data';

export default function Hero() {
  const trustIndicators = [
    { label: 'Atención personalizada', icon: Heart, desc: 'Un solo estilista por perrito', color: 'text-rose-500 bg-rose-50' },
    { label: 'Productos de calidad', icon: Award, desc: 'Línea orgánica dermo-cosmética', color: 'text-amber-500 bg-amber-50' },
    { label: 'Ambiente libre de estrés', icon: Shield, desc: 'Cero jaulas, música de relax', color: 'text-brand-mint bg-brand-mint-light' },
    { label: 'Más de 100 mascotas felices', icon: Smile, desc: 'En Miraflores, La Paz', color: 'text-brand-aqua bg-brand-aqua-light' },
  ];

  const handleBooking = () => {
    const text = encodeURIComponent('¡Hola! Me encantaría reservar un día de spa para mi perrito. Quisiera saber horarios y precios. 🐾');
    window.open(`https://wa.me/59177465774?text=${text}`, '_blank');
  };

  const handleScrollToTransformations = (e: React.MouseEvent) => {
    e.preventDefault();
    const section = document.querySelector('#transformaciones');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen pt-24 pb-16 md:pt-32 md:pb-24 flex items-center overflow-hidden bg-gradient-to-b from-brand-aqua-light via-white to-transparent"
    >
      {/* Decorative accent bubbles for spa atmosphere */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-brand-aqua/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-20 w-96 h-96 bg-brand-mint/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text and Copy Panel (6 columns on large screen) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-brand-mint-light border border-brand-mint/20 text-teal-800 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6"
            >
              <Sparkles className="w-3.5 h-3.5 text-brand-mint fill-brand-mint" />
              <span>EL PRIMER SPA CANINO CONCEPTUAL DE LA PAZ</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[52px] leading-[1.1] font-bold text-brand-charcoal mb-5 tracking-tight"
            >
              Más que una peluquería.<br />
              <span className="text-brand-aqua relative inline-block">
                Un día especial
                <span className="absolute bottom-1 left-0 w-full h-[6px] bg-brand-mint/30 -z-10 rounded" />
              </span>{' '}
              para tu mejor amigo.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-600 font-medium mb-8 leading-relaxed max-w-2xl"
            >
              Nuestra filosofía gira en torno al absoluto cariño. Baños relajantes, cortes de raza y deslanados profesionales diseñados con aromaterapia para que tu mascota se sienta feliz, tranquila y verdaderamente amada.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10"
            >
              <button
                id="hero-cta-whatsapp"
                onClick={handleBooking}
                className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-2xl flex items-center justify-center gap-3 shadow-lg hover:shadow-emerald-500/20 active:scale-95 transition-all text-center cursor-pointer"
              >
                <span>Reservar por WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <button
                id="hero-cta-transformations"
                onClick={handleScrollToTransformations}
                className="bg-white hover:bg-brand-sand text-brand-charcoal border-2 border-slate-200 hover:border-brand-mint font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-2xl transition-all active:scale-95 text-center cursor-pointer"
              >
                Ver Transformaciones
              </button>
            </motion.div>

            {/* Micro indicators of confidence under buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 gap-x-6 gap-y-4 w-full border-t border-slate-100 pt-8"
            >
              {trustIndicators.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex gap-3 items-start">
                    <div className={`p-2 rounded-xl shrink-0 ${item.color}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-brand-charcoal">{item.label}</h3>
                      <p className="text-[11px] text-slate-500 font-medium leading-tight">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Graphic and Image panel (5 columns on large screen) */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, rotate: 1 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-[440px] aspect-[4/5] sm:aspect-[1/1] lg:aspect-[4/5]"
            >
              {/* Main premium video container with organic rounded borders */}
              <div className="absolute inset-0 bg-brand-sand border-4 border-white shadow-2xl rounded-[40px] overflow-hidden group">
                <video
                  src="https://assets.mixkit.co/videos/preview/mixkit-dog-running-in-the-park-44062-large.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                  poster={ASSETS.hero}
                />
                
                {/* Visual gradient overlay on image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating physical informational badge card - Top Left */}
              <div className="absolute -top-4 -left-4 bg-white/95 backdrop-blur shadow-xl rounded-2xl p-3 border border-slate-100 flex items-center gap-3 animate-bounce-slow">
                <div className="bg-brand-mint text-white h-8 w-8 rounded-full flex items-center justify-center font-bold text-xs">
                  ★
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Puntuación</p>
                  <p className="text-xs font-extrabold text-brand-charcoal">4.9/5 Familias Felices</p>
                </div>
              </div>

              {/* Floating physical informational badge card - Bottom Right */}
              <div className="absolute -bottom-6 -right-4 bg-brand-charcoal text-white shadow-2xl rounded-2xl p-4 max-w-[200px] border border-slate-800">
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="h-2 w-2 rounded-full bg-brand-mint animate-pulse" />
                  <p className="text-[9px] uppercase font-bold text-brand-mint tracking-wider">Estado de cupos</p>
                </div>
                <p className="text-xs font-semibold leading-relaxed text-slate-200">
                  Reserva hoy para asegurar tu lugar esta semana 🐾
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
