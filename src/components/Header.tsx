/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Phone, MessageSquarePlus, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Logo from './Logo';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'El Recorrido', href: '#recorrido' },
    { label: 'Antes y Después', href: '#transformaciones' },
    { label: 'Boutique', href: '#boutique' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Preguntas', href: '#faq' },
    { label: 'Ubicación', href: '#ubicacion' },
  ];

  const handleWhatsAppBooking = () => {
    const text = encodeURIComponent('¡Hola Nachis Pupis! Vi su página de internet y me interesa reservar un turno para mi mascota. 🐾💖');
    window.open(`https://wa.me/59176756381?text=${text}`, '_blank');
  };

  return (
    <header
      id="main-app-header"
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-slate-100 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand identity - Nachis Pupis Logo */}
        <a id="brand-logo" href="#inicio" className="flex items-center gap-2.5 group">
          <Logo className="w-12 h-12 group-hover:scale-105 transition-transform duration-300" showText={false} />
          <div className="flex flex-col">
            <span className="font-serif text-lg font-black tracking-tight text-brand-charcoal leading-none">
              NACHIS PUPIS
            </span>
            <span className="text-[9.5px] font-extrabold tracking-[0.14em] text-brand-mint mt-0.5 uppercase">
              Estética Canina y Felina
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-slate-600 hover:text-brand-mint font-medium text-sm tracking-wide transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-brand-mint hover:after:w-full after:transition-all after:duration-250"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop Call To Actions */}
        <div className="hidden md:flex items-center gap-4">
          <a
            id="header-phone-classic"
            href="tel:+59176756381"
            className="flex items-center gap-2 text-slate-600 hover:text-brand-aqua text-sm font-semibold transition-colors"
          >
            <Phone className="w-4 h-4 text-brand-aqua" />
            <span className="font-mono text-xs">76756381</span>
          </a>
          <button
            id="header-cta-booking"
            onClick={handleWhatsAppBooking}
            className="hidden lg:flex items-center gap-2 bg-brand-mint text-white hover:bg-[#3FA18B] font-bold text-xs py-2.5 px-5 rounded-xl uppercase tracking-wider transition-all shadow-md hover:shadow-lg cursor-pointer"
          >
            <MessageSquarePlus className="w-4 h-4" />
            Reservar Turno
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-3 lg:hidden">
          <a
            href="tel:+59176756381"
            className="flex items-center justify-center h-9 w-9 bg-brand-aqua-light text-brand-aqua rounded-xl"
            title="Llamar directamente"
          >
            <Phone className="w-4 h-4" />
          </a>
          <button
            id="mobile-menu-trigger"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-slate-700 hover:text-brand-charcoal p-1"
            aria-label="Abrir Menú"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 flex flex-col gap-4">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-slate-700 hover:text-brand-mint font-semibold text-base py-2 border-b border-slate-50 transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="flex flex-col sm:flex-row gap-3 pt-3">
                <a
                  href="tel:+59176756381"
                  className="flex items-center justify-center gap-2 border border-slate-200 text-slate-700 font-bold py-3 px-4 rounded-xl text-sm"
                >
                  <Phone className="w-4 h-4 text-emerald-500" />
                  Llamar: 76756381
                </a>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    handleWhatsAppBooking();
                  }}
                  className="flex items-center justify-center gap-2 bg-emerald-500 text-white font-bold py-3 px-4 rounded-xl text-sm tracking-wide"
                >
                  <MessageSquarePlus className="w-4 h-4" />
                  Reservar en WhatsApp
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
