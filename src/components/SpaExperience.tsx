/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, Sparkles, Wind, Scissors, Camera, Clock, CheckCircle } from 'lucide-react';
import { TIMELINE_STEPS } from '../data';

// Map icon string names to dynamic component instances
const iconMap: Record<string, React.ComponentType<any>> = {
  ShieldCheck,
  Sparkles,
  Wind,
  Scissors,
  Camera,
};

export default function SpaExperience() {
  const [activeStepId, setActiveStepId] = useState('step-1');

  const selectedStep = TIMELINE_STEPS.find((s) => s.id === activeStepId) || TIMELINE_STEPS[0];
  const SelectedIcon = iconMap[selectedStep.iconName] || Sparkles;

  const handleBooking = () => {
    const text = encodeURIComponent('¡Hola Nachis Pupis! Me encantaría agendar un día de spa especial para mi mascota. Me llamó la atención el recorrido interactivo de 5 pasos. 🐾');
    window.open(`https://wa.me/59176756381?text=${text}`, '_blank');
  };

  return (
    <section id="recorrido" className="py-20 md:py-28 bg-brand-sand/55 relative">
      <div className="absolute inset-0 bg-[radial-gradient(#62CBB7_0.4px,transparent_0.4px)] [background-size:16px_16px] opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <p className="text-xs font-bold tracking-[0.2em] text-cyan-700 uppercase mb-3">La experiencia inolvidable</p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-[42px] leading-tight font-bold text-brand-charcoal mb-4">
            "Tu mascota no viene a cortarse el pelo.<br className="hidden sm:inline" />
            <span className="italic text-brand-mint font-medium font-serif"> Viene a disfrutar un día de spa."</span>
          </h2>
          <p className="text-slate-600 font-medium text-base sm:text-lg">
            Hemos redefinido el cuidado de tu mejor amigo. Diseñamos un recorrido sin estrés, lleno de paciencia y mimos que estimulan su relajación de principio a fin.
          </p>
        </div>

        {/* Timeline Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-6">
          
          {/* Interactive Steps Left Container (7 columns) */}
          <div className="lg:col-span-7 flex flex-col gap-3 relative">
            
            {/* Visual connector line behind cards (desktop only) */}
            <div className="absolute left-[32px] top-6 bottom-6 w-0.5 bg-slate-200/60 hidden sm:block z-0" />

            {TIMELINE_STEPS.map((step, idx) => {
              const StepIcon = iconMap[step.iconName] || Sparkles;
              const isActive = step.id === activeStepId;

              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStepId(step.id)}
                  className={`relative z-10 w-full text-left flex flex-col sm:flex-row gap-3 sm:gap-4 p-3 sm:p-3.5 rounded-xl transition-all duration-300 border cursor-pointer outline-none ${
                    isActive
                      ? 'bg-white border-brand-mint/85 shadow-lg shadow-brand-mint/5 scale-[1.005]'
                      : 'bg-white/40 border-slate-100 hover:border-slate-200 hover:bg-white/70'
                  }`}
                >
                  {/* Step Bullet bubble */}
                  <div className="flex items-center gap-3 sm:flex-col sm:justify-start">
                    <div
                      className={`h-9 w-9 rounded-lg flex items-center justify-center shrink-0 font-extrabold text-xs transition-all duration-300 ${
                        isActive
                          ? 'bg-brand-mint text-white shadow-sm ring-2 ring-brand-mint-light'
                          : 'bg-brand-sand-dark text-slate-500'
                      }`}
                    >
                      {isActive ? <StepIcon className="w-4 h-4" /> : `0${step.stepNumber}`}
                    </div>
                    
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-mono sm:hidden">
                      Paso {step.stepNumber} – {step.duration}
                    </span>
                  </div>

                  {/* Step Copy */}
                  <div className="flex-1">
                    <div className="hidden sm:flex items-center justify-between mb-0.5">
                      <span className="text-[9px] font-bold uppercase tracking-widest text-[#248DA6]">
                        PASO {step.stepNumber} DE NUESTRO PROTOCOLO
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 bg-slate-100 py-0.5 px-2 rounded-full font-mono">
                        <Clock className="w-2.5 h-2.5" />
                        {step.duration}
                      </span>
                    </div>

                    <h3 className={`text-sm sm:text-base font-bold transition-colors leading-tight ${
                      isActive ? 'text-brand-charcoal' : 'text-slate-700'
                    }`}>
                      {step.title}
                    </h3>
                    
                    <p className="text-slate-500 text-xs mt-0.5 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Dynamic details showcase right cards (5 columns) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedStep.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="bg-white border-2 border-brand-sand-dark rounded-[24px] p-5 sm:p-6 shadow-xl relative"
              >
                {/* Decorative circle bubble accent */}
                <div className="absolute top-4 right-4 h-12 w-12 bg-brand-aqua/5 rounded-full flex items-center justify-center text-brand-aqua">
                  <SelectedIcon className="w-6 h-6" />
                </div>

                <p className="text-[10px] font-bold text-cyan-600 uppercase tracking-widest mb-1 font-mono">
                  Enfoque Científico & Afectivo
                </p>

                <h4 className="font-serif text-xl font-bold text-brand-charcoal mb-3">
                  Cuidado en Detalle
                </h4>

                <p className="text-slate-600 text-xs font-semibold leading-relaxed mb-4">
                  {selectedStep.details}
                </p>

                <div className="border-t border-slate-100 pt-4">
                  <h5 className="text-xs uppercase font-extrabold text-brand-charcoal tracking-wider mb-2.5">
                    Estándares Garantizados:
                  </h5>
                  <ul className="flex flex-col gap-2">
                    <li className="flex items-start gap-2.5 text-xs text-slate-600 font-medium font-sans">
                      <CheckCircle className="w-4 h-4 text-brand-mint shrink-0 mt-0.5" />
                      Atmósfera limpia y esterilizada antes de pasar a cabina.
                    </li>
                    <li className="flex items-start gap-2.5 text-xs text-slate-600 font-medium font-sans">
                      <CheckCircle className="w-4 h-4 text-brand-mint shrink-0 mt-0.5" />
                      Toallas sanitizadas individuales para tu mascota.
                    </li>
                    <li className="flex items-start gap-2.5 text-xs text-slate-600 font-medium font-sans">
                      <CheckCircle className="w-4 h-4 text-brand-mint shrink-0 mt-0.5" />
                      Reporte de estado de piel y articulaciones incluído gratis.
                    </li>
                  </ul>
                </div>

                <div className="mt-6">
                  <button
                    onClick={handleBooking}
                    className="w-full bg-[#1F2E3D] hover:bg-brand-mint text-white font-bold text-xs uppercase tracking-wider py-3.5 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow"
                  >
                     <span>Reservar este tratamiento</span>
                  </button>
                  <p className="text-center text-[9.5px] text-slate-400 font-bold mt-1.5">
                    Te responderemos en WhatsApp en menos de 5 minutos.
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
