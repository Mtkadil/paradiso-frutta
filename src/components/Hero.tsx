import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, MapPin, Sparkles, Store, ShoppingBag, ShieldCheck, Sun } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Subtle organic background glow */}
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-[#2D5A27]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-0 -z-10 w-80 h-80 bg-[#E89234]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Location & Trust Tag */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF3E8] border border-[#2D5A27]/15 text-[#2D5A27] text-xs sm:text-sm font-semibold mb-6"
            >
              <MapPin className="w-4 h-4 text-[#2D5A27]" />
              <span>Borgosesia (VC) • Bottega & Mercati Locali</span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-2 mb-5"
            >
              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#1E2B20] leading-[1.08]">
                {BUSINESS_INFO.name}
              </h1>
              <p className="font-display italic text-2xl sm:text-3xl text-[#2D5A27] font-medium">
                {BUSINESS_INFO.subtitle}
              </p>
            </motion.div>

            {/* Natural, warm, short sentence */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl text-[#3A4D3B] leading-relaxed max-w-2xl mb-8"
            >
              La freschezza quotidiana della terra, scelta con passione ogni mattina per il nostro negozio a Borgosesia e nei mercati del territorio piemontese.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10"
            >
              <a
                href="#prodotti"
                id="hero-cta-products"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-white bg-[#2D5A27] hover:bg-[#22441D] transition-all shadow-md hover:shadow-lg text-base"
              >
                <ShoppingBag className="w-5 h-5" />
                <span>Scopri i prodotti</span>
              </a>

              <a
                href="#dove-siamo"
                id="hero-cta-location"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-[#1E2B20] bg-white border border-[#2D5A27]/20 hover:bg-[#F3EFEA] transition-all shadow-xs text-base"
              >
                <MapPin className="w-5 h-5 text-[#2D5A27]" />
                <span>Dove trovarci</span>
              </a>
            </motion.div>

            {/* Micro value-props / pillars */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-3 gap-4 pt-6 border-t border-[#2D5A27]/10 w-full"
            >
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg sm:text-xl text-[#1E2B20]">Ogni Mattina</span>
                <span className="text-xs text-[#526654]">Arrivi freschi all'alba</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg sm:text-xl text-[#1E2B20]">Stagionalità</span>
                <span className="text-xs text-[#526654]">Solo sapori autentici</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg sm:text-xl text-[#1E2B20]">Fiducia</span>
                <span className="text-xs text-[#526654]">Bottega e banco mercato</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Visual Composition */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative"
            >
              {/* Main Photo Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <img
                  src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=1000&q=85"
                  alt="Frutta e verdura fresca selezionata ogni giorno per Paradiso a Borgosesia"
                  className="w-full h-[420px] sm:h-[480px] object-cover object-center"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle gradient overlay at base of image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                {/* Floating Tag over image */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/40 shadow-lg flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#2D5A27]/10 flex items-center justify-center text-[#2D5A27]">
                      <Sun className="w-5 h-5 text-[#2D5A27]" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-[#526654]">Selezione Giornaliera</p>
                      <p className="text-sm font-bold text-[#1E2B20]">Solo raccolti al punto giusto</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-[#EBF3E8] text-[#2D5A27] text-xs font-semibold">
                    100% Genuino
                  </span>
                </div>
              </div>

              {/* Floating Accent Badge: Negozio & Mercati */}
              <div className="hidden sm:flex absolute -top-4 -left-6 bg-white rounded-2xl p-3.5 shadow-xl border border-[#2D5A27]/10 items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#E89234]/15 flex items-center justify-center text-[#C06D14]">
                  <Store className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#1E2B20]">A Borgosesia & nei Mercati</p>
                  <p className="text-[11px] text-[#6B7D6D]">Vicini alla tua tavola ogni giorno</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
