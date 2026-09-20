import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowRight, Dumbbell } from 'lucide-react';
import { STUDIO_CONFIG } from '../config/studioConfig';
import { PageId, NavItem } from '../types';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenEnquiry: () => void;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'services', label: 'Fitness Services', href: '#services' },
  { id: 'classes', label: 'Classes', href: '#classes' },
  { id: 'training', label: 'Training', href: '#training' },
  { id: 'reviews', label: 'Reviews', href: '#reviews' },
  { id: 'faq', label: 'FAQ', href: '#faq' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenEnquiry,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (pageId: PageId) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#090d16]/95 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/40 py-3'
          : 'bg-gradient-to-b from-[#090d16]/90 via-[#090d16]/60 to-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Logo & Business Identity */}
          <button
            id="brand-logo-btn"
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left focus:outline-none group"
            aria-label="BluePeak Fitness Studio Home"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center text-white shadow-md shadow-blue-900/40 border border-blue-400/30 group-hover:scale-105 transition-transform">
              <Dumbbell className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display text-xl sm:text-2xl font-bold tracking-tight uppercase text-white leading-none">
                  BluePeak
                </span>
                <span className="hidden sm:inline-block px-1.5 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider bg-blue-950/80 text-blue-400 border border-blue-800/60">
                  London
                </span>
              </div>
              <span className="text-[11px] font-medium text-slate-400 tracking-wide block">
                {STUDIO_CONFIG.alternateName} • {STUDIO_CONFIG.location.postcode}
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav
            id="desktop-navigation"
            className="hidden xl:flex items-center gap-1 bg-slate-900/60 backdrop-blur-sm px-3 py-1.5 rounded-full border border-slate-800/80"
            aria-label="Main Navigation"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-item-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-sm shadow-blue-900/50'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/70'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            {/* Direct Call CTA */}
            <a
              id="header-call-cta"
              href={STUDIO_CONFIG.phoneTel}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 transition-all metallic-border"
              title="Call studio directly"
            >
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              <span className="hidden lg:inline">{STUDIO_CONFIG.phone}</span>
              <span className="lg:hidden">Call Studio</span>
            </a>

            {/* Get Started CTA */}
            <button
              id="header-get-started-cta"
              onClick={onOpenEnquiry}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold tracking-wide uppercase font-display bg-blue-600 hover:bg-blue-500 text-white transition-all shadow-md shadow-blue-900/40 hover:shadow-blue-600/30 active:scale-95"
            >
              <span>Get Started</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-2 xl:hidden">
            <a
              id="mobile-quick-call-btn"
              href={STUDIO_CONFIG.phoneTel}
              className="p-2.5 rounded-xl bg-blue-600 text-white md:hidden hover:bg-blue-500 transition-colors"
              aria-label="Call studio"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer-menu"
          className="xl:hidden bg-[#090d16]/98 border-b border-slate-800/90 px-4 pt-3 pb-6 shadow-2xl backdrop-blur-xl animate-in slide-in-from-top-4 duration-200"
        >
          <nav className="flex flex-col space-y-1 mb-5" aria-label="Mobile Navigation">
            {NAV_ITEMS.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  id={`mobile-nav-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold tracking-wide transition-colors text-left ${
                    isActive
                      ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30'
                      : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />}
                </button>
              );
            })}
          </nav>

          {/* Mobile CTAs */}
          <div className="flex flex-col gap-2.5 pt-2 border-t border-slate-800/80">
            <button
              id="mobile-drawer-get-started-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnquiry();
              }}
              className="w-full py-3 px-4 rounded-xl font-display uppercase tracking-wider font-bold text-sm bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center gap-2 shadow-lg shadow-blue-900/40"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              id="mobile-drawer-call-btn"
              href={STUDIO_CONFIG.phoneTel}
              className="w-full py-3 px-4 rounded-xl text-sm font-medium bg-slate-900 border border-slate-700 text-slate-200 flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-blue-400" />
              <span>Call {STUDIO_CONFIG.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
