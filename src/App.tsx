import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ProductsSection } from './components/ProductsSection';
import { MarketSection } from './components/MarketSection';
import { StoreLocationSection } from './components/StoreLocationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PlaceholderGuideModal } from './components/PlaceholderGuideModal';
import { Sparkles } from 'lucide-react';

export default function App() {
  const [guideModalOpen, setGuideModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1E2B20] selection:bg-[#2D5A27] selection:text-white">
      {/* Top sticky navbar */}
      <Navbar onOpenGuideModal={() => setGuideModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Chi Siamo */}
        <AboutSection />

        {/* 3. I Nostri Prodotti */}
        <ProductsSection />

        {/* 4. Dal Negozio al Mercato */}
        <MarketSection />

        {/* 5. Dove Trovarci */}
        <StoreLocationSection />

        {/* 6. Contatti */}
        <ContactSection />
      </main>

      {/* 7. Footer */}
      <Footer />

      {/* Floating Helper Button for Owner Guidance */}
      <button
        onClick={() => setGuideModalOpen(true)}
        id="floating-guide-btn"
        className="fixed bottom-6 right-6 z-40 hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#1E2B20] text-white shadow-xl hover:bg-[#2D5A27] transition-all duration-200 border border-white/20 text-xs font-semibold group cursor-pointer hover:scale-105"
        title="Visualizza i dati aziendali da completare"
      >
        <Sparkles className="w-3.5 h-3.5 text-amber-400 group-hover:rotate-12 transition-transform" />
        <span>Dati da completare</span>
      </button>

      {/* Interactive Guide Modal */}
      <PlaceholderGuideModal
        isOpen={guideModalOpen}
        onClose={() => setGuideModalOpen(false)}
      />
    </div>
  );
}
