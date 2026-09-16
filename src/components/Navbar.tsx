import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin, Store, Calendar, Phone, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

interface NavbarProps {
  onOpenGuideModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenGuideModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Chi siamo', href: '#chi-siamo' },
    { label: 'Prodotti', href: '#prodotti' },
    { label: 'Mercati', href: '#mercati' },
    { label: 'Dove siamo', href: '#dove-siamo' },
    { label: 'Contatti', href: '#contatti' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF8F5]/90 backdrop-blur-md shadow-xs border-b border-[#2D5A27]/10 py-3'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group focus:outline-hidden"
            id="brand-logo-link"
          >
            <div className="w-10 h-10 rounded-full bg-[#2D5A27] text-white flex items-center justify-center font-display text-xl font-bold shadow-xs group-hover:scale-105 transition-transform duration-200">
              P
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl sm:text-2xl font-bold tracking-tight text-[#1E2B20] leading-tight">
                {BUSINESS_INFO.name}
              </span>
              <span className="text-xs tracking-wider uppercase text-[#2D5A27] font-semibold">
                {BUSINESS_INFO.subtitle}
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7" id="desktop-nav-menu">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#2C3E2D] hover:text-[#2D5A27] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#2D5A27] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action & Helper */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenGuideModal}
              id="guide-pill-button"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#E8EFE5] text-[#2D5A27] hover:bg-[#DCE6D7] transition-colors border border-[#2D5A27]/15"
              title="Visualizza i dati placeholder da completare"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Dati da completare</span>
            </button>

            <a
              href={BUSINESS_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="maps-quick-nav-btn"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold bg-[#2D5A27] text-white hover:bg-[#22441D] transition-colors shadow-xs hover:shadow-md"
            >
              <MapPin className="w-4 h-4" />
              <span>Apri Mappa</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onOpenGuideModal}
              className="p-2 rounded-lg text-[#2D5A27] bg-[#E8EFE5] text-xs font-semibold"
              title="Guida dati"
              id="mobile-guide-btn"
            >
              <Sparkles className="w-4 h-4" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-hamburger-btn"
              className="p-2.5 rounded-xl bg-white text-[#1E2B20] border border-[#2D5A27]/15 shadow-xs focus:outline-hidden"
              aria-label="Apri menu di navigazione"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="md:hidden bg-[#FAF8F5] border-b border-[#2D5A27]/10 px-4 pt-3 pb-6 shadow-xl transition-all"
        >
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="px-3 py-2.5 rounded-lg text-base font-medium text-[#1E2B20] hover:bg-[#EAE5DC] hover:text-[#2D5A27] transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-3 border-t border-[#2D5A27]/10 flex flex-col gap-2.5">
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold bg-[#2D5A27] text-white"
                onClick={handleLinkClick}
              >
                <MapPin className="w-4 h-4" />
                <span>Apri posizione su Google Maps</span>
              </a>

              <a
                href="#contatti"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-white border border-[#2D5A27]/20 text-[#1E2B20]"
                onClick={handleLinkClick}
              >
                <Phone className="w-4 h-4 text-[#2D5A27]" />
                <span>Vai ai Contatti</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
