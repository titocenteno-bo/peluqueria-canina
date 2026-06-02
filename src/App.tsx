/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SpaExperience from './components/SpaExperience';
import BeforeAfter from './components/BeforeAfter';
import Services from './components/Services';
import Shop from './components/Shop';
import Promotion from './components/Promotion';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Ubicacion from './components/Ubicacion';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'boutique'>('home');

  const handleNavigateToBoutique = () => {
    setCurrentPage('boutique');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToHome = () => {
    setCurrentPage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id="app-root-container" className="min-h-screen flex flex-col justify-between relative bg-[#FCFBF9] selection:bg-brand-coral/25 selection:text-brand-charcoal overflow-x-hidden antialiased">
      
      {/* Sticky Header with navigation support - Hidden on full storefront view for immersion */}
      {currentPage === 'home' && <Header />}

      {/* Main Content Sections */}
      <main className="flex-grow">
        {currentPage === 'home' ? (
          <>
            {/* Dynamic emotional Hero layout featuring the new video loop */}
            <Hero />

            {/* 5-step visual Spa journey timeline */}
            <SpaExperience />

            {/* Premium Before-After interactive touchscreen carousel */}
            <BeforeAfter />

            {/* New Product sales widget section */}
            <Shop onNavigateToBoutique={handleNavigateToBoutique} />

            {/* Interactive Services panel with glowing size selector guide and custom estimates */}
            <Services />

            {/* Promotional commercial discount banner ribbon */}
            <Promotion />

            {/* Refactored real-life WhatsApp reviews in compact grid cards */}
            <Testimonials />

            {/* Fully responsive accordion FAQ with prominent rotating '+' symbols */}
            <FAQ />

            {/* High-fidelity Contact, Map Pin and directions details */}
            <Ubicacion />
          </>
        ) : (
          /* Immersive, full-page premium Boutique shop catalogue layout ("otra página") */
          <Shop isFullView={true} onNavigateToHome={handleNavigateToHome} />
        )}
      </main>

      {/* Brand-compliant Footer details */}
      <Footer />

      {/* Continuous active floating WhatsApp contact and Scroll-To-Top controls */}
      <WhatsAppButton />
    
    </div>
  );
}
