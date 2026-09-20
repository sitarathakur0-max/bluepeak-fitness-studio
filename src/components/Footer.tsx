import React from 'react';
import { Phone, MapPin, Dumbbell, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { STUDIO_CONFIG } from '../config/studioConfig';
import { PageId } from '../types';
import { RatingBadge } from './RatingBadge';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenEnquiry: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenEnquiry }) => {
  const handleNavClick = (pageId: PageId) => {
    onNavigate(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#070a12] border-t border-slate-800/80 pt-16 pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/60">
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center text-white border border-blue-400/30">
                <Dumbbell className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-display text-2xl font-bold tracking-tight uppercase text-white leading-none block">
                  {STUDIO_CONFIG.businessName}
                </span>
                <span className="text-xs text-blue-400 font-semibold tracking-wide">
                  {STUDIO_CONFIG.alternateName}
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              Elevate your fitness in Central London. Dedicated to strength, conditioning, functional training, and focused fitness coaching in Soho.
            </p>

            <div className="pt-2">
              <RatingBadge
                size="md"
                variant="metallic"
                onClick={() => handleNavClick('reviews')}
              />
            </div>
          </div>

          {/* Quick Links Col */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-200 font-display">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  id="footer-nav-home"
                  onClick={() => handleNavClick('home')}
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-about"
                  onClick={() => handleNavClick('about')}
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  About Studio
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-services"
                  onClick={() => handleNavClick('services')}
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  Fitness Services
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-classes"
                  onClick={() => handleNavClick('classes')}
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  Classes
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-training"
                  onClick={() => handleNavClick('training')}
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  Training
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-reviews"
                  onClick={() => handleNavClick('reviews')}
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  Reviews ({STUDIO_CONFIG.rating.displayString})
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-faq"
                  onClick={() => handleNavClick('faq')}
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Fitness Services Col */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-200 font-display">
              Fitness Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {STUDIO_CONFIG.services.map((svc) => (
                <li key={svc.id}>
                  <button
                    id={`footer-svc-${svc.id}`}
                    onClick={() => handleNavClick('services')}
                    className="hover:text-blue-400 transition-colors text-left flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-blue-400 transition-colors" />
                    <span>{svc.title}</span>
                  </button>
                </li>
              ))}
              <li className="pt-2">
                <button
                  id="footer-get-started-link"
                  onClick={onOpenEnquiry}
                  className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1"
                >
                  Enquire About Services <ArrowUpRight className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Studio Details Col */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-200 font-display">
              Studio Location & Contact
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-white">{STUDIO_CONFIG.businessName}</p>
                  <p className="text-slate-300">{STUDIO_CONFIG.alternateName}</p>
                  <p className="text-slate-300">{STUDIO_CONFIG.location.fullDisplay}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-1">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <a
                  id="footer-phone-link"
                  href={STUDIO_CONFIG.phoneTel}
                  className="text-white hover:text-blue-400 font-bold tracking-tight transition-colors"
                >
                  {STUDIO_CONFIG.phone}
                </a>
              </div>

              <div className="pt-3">
                <button
                  id="footer-contact-page-btn"
                  onClick={() => handleNavClick('contact')}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold tracking-wide uppercase transition-colors border border-slate-700 text-center block"
                >
                  Visit Contact Page
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-blue-400" />
            <span>
              &copy; {new Date().getFullYear()} {STUDIO_CONFIG.businessName} ({STUDIO_CONFIG.alternateName}). London {STUDIO_CONFIG.location.postcode}.
            </span>
          </div>

          <div className="flex items-center gap-4 text-slate-300">
            <span>Official Phone: {STUDIO_CONFIG.phone}</span>
            <span>•</span>
            <span>London W1F 9US</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
