import React from 'react';
import { MapPin, ExternalLink, Heart, Sparkles, ArrowUp } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#18231A] text-[#DCE6D7] pt-16 pb-12 border-t border-[#2D5A27]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#2D5A27] text-white flex items-center justify-center font-display text-xl font-bold shadow-xs">
                P
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-white tracking-tight leading-none">
                  {BUSINESS_INFO.name}
                </h3>
                <span className="text-xs text-[#8BA48D] tracking-wider uppercase font-semibold">
                  {BUSINESS_INFO.subtitle}
                </span>
              </div>
            </div>

            <p className="text-sm text-[#A8BEAA] leading-relaxed max-w-sm">
              La tua bottega di ortofrutta a Borgosesia e nei mercati locali piemontesi. Freschezza selezionata all'alba, rispetto per le stagioni e rapporto umano autentico.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#8BA48D]">
              <MapPin className="w-4 h-4 text-[#8BA48D]" />
              <span>{BUSINESS_INFO.city} ({BUSINESS_INFO.province}), {BUSINESS_INFO.region}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-display text-base font-bold text-white tracking-wide">
              Link Rapidi
            </h4>
            <ul className="space-y-2 text-sm text-[#A8BEAA]">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#chi-siamo" className="hover:text-white transition-colors">
                  Chi Siamo
                </a>
              </li>
              <li>
                <a href="#prodotti" className="hover:text-white transition-colors">
                  I Nostri Prodotti
                </a>
              </li>
              <li>
                <a href="#mercati" className="hover:text-white transition-colors">
                  Dal Negozio al Mercato
                </a>
              </li>
              <li>
                <a href="#dove-siamo" className="hover:text-white transition-colors">
                  Dove Trovarci
                </a>
              </li>
              <li>
                <a href="#contatti" className="hover:text-white transition-colors">
                  Contatti
                </a>
              </li>
            </ul>
          </div>

          {/* Contacts Overview */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display text-base font-bold text-white tracking-wide">
              Contatti
            </h4>
            <div className="space-y-2 text-sm text-[#A8BEAA]">
              <p>
                <span className="text-white block font-medium text-xs">Telefono:</span>
                <span className="font-mono text-xs">{BUSINESS_INFO.phonePlaceholder}</span>
              </p>
              <p>
                <span className="text-white block font-medium text-xs">WhatsApp:</span>
                <span className="font-mono text-xs">{BUSINESS_INFO.whatsappPlaceholder}</span>
              </p>
              <p>
                <span className="text-white block font-medium text-xs">Social:</span>
                <span className="text-xs">{BUSINESS_INFO.instagramPlaceholder}</span>
              </p>
              <p className="text-xs text-[#8BA48D] italic pt-1">
                [Tutti i recapiti sono facilmente aggiornabili dal titolare]
              </p>
            </div>
          </div>

          {/* Google Maps Link & Map Navigation */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display text-base font-bold text-white tracking-wide">
              Google Maps
            </h4>
            <p className="text-xs text-[#A8BEAA] leading-relaxed">
              Trova le indicazioni stradali per raggiungerci direttamente in negozio a Borgosesia.
            </p>
            <a
              href={BUSINESS_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-[#2D5A27] hover:bg-[#386F31] transition-colors border border-white/10 shadow-xs"
            >
              <MapPin className="w-4 h-4" />
              <span>Apri su Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-70" />
            </a>
          </div>
        </div>

        {/* Bottom Bar: Privacy & Prototipo Notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8BA48D]">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-center sm:text-left">
            <span>© {new Date().getFullYear()} {BUSINESS_INFO.name} – {BUSINESS_INFO.subtitle}. Tutti i diritti riservati.</span>
            <a href="#privacy" className="hover:text-white transition-colors underline underline-offset-4">
              Informativa sulla Privacy (Placeholder)
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 hover:text-white transition-colors p-1"
            aria-label="Torna in cima alla pagina"
          >
            <span>Torna su</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
