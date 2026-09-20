import React from 'react';
import { Phone, MapPin, Target, ShieldCheck, HeartPulse, Dumbbell, Compass } from 'lucide-react';
import { STUDIO_CONFIG } from '../config/studioConfig';
import { PageId } from '../types';
import { RatingBadge } from '../components/RatingBadge';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenEnquiry: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenEnquiry }) => {
  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-20">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="flex justify-center">
          <RatingBadge
            size="md"
            variant="metallic"
            onClick={() => onNavigate('reviews')}
          />
        </div>
        <span className="text-xs uppercase tracking-[0.25em] font-bold text-blue-400 font-display">
          About The Studio
        </span>
        <h1 className="text-4xl sm:text-6xl font-black font-display uppercase tracking-tight text-white leading-tight">
          Dedicated To Your Fitness Progression
        </h1>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          {STUDIO_CONFIG.businessName} ({STUDIO_CONFIG.alternateName}) is rooted in the heart of London W1F 9US, committed to providing focused training guidance, movement discipline, and structured coaching.
        </p>
      </div>

      {/* Main Narrative & Philosophy */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/60 border border-blue-800/60 text-xs font-bold uppercase tracking-wider text-blue-400">
            <Compass className="w-3.5 h-3.5" /> Our Studio Purpose
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold font-display uppercase text-white tracking-tight leading-snug">
            A Focused Environment For Meaningful Training
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            At BluePeak Fitness Studio, fitness is approached as an ongoing craft. We believe in purposeful training sessions where clients are supported to challenge their current physical capabilities, refine movement mechanics, and build lasting strength.
          </p>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Situated at Third Space Soho in London W1F 9US, our studio environment is tailored for individuals seeking dedicated training without distraction. Whether your focus is personal training, functional conditioning, or targeted strength work, our mission is to support your fitness pathway.
          </p>

          <div className="pt-2 flex flex-wrap gap-4">
            <a
              href={STUDIO_CONFIG.phoneTel}
              className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm flex items-center gap-2 shadow-lg shadow-blue-900/30 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call {STUDIO_CONFIG.phone}</span>
            </a>
            <button
              onClick={onOpenEnquiry}
              className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 text-sm font-semibold transition-colors"
            >
              Enquire With Studio
            </button>
          </div>
        </div>

        <div className="lg:col-span-6 relative">
          <div className="relative rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
            <img
              src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Fitness training at BluePeak Fitness Studio London"
              className="w-full h-[420px] object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-xs text-blue-400 font-bold uppercase tracking-wider block">
                  Studio Location
                </span>
                <span className="text-sm font-bold text-white">
                  {STUDIO_CONFIG.alternateName} • {STUDIO_CONFIG.location.fullDisplay}
                </span>
              </div>
              <MapPin className="w-5 h-5 text-blue-400 shrink-0" />
            </div>
          </div>
        </div>
      </div>

      {/* Core Principles */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold font-display uppercase text-white tracking-tight">
            Our Training Focus
          </h2>
          <p className="text-slate-400 text-sm mt-1">
            Fundamental pillars guiding training and client support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-display uppercase text-white">
              Goal-Oriented Direction
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Every training session is designed around clarity of purpose, helping clients focus on tangible improvements in movement, endurance, and capability.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center">
              <Dumbbell className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-display uppercase text-white">
              Progressive Overload
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Applying sound physical training principles to safely build strength, structural resilience, and long-term athletic capacity.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center">
              <HeartPulse className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-display uppercase text-white">
              Holistic Conditioning
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Balancing muscular strength with cardiovascular stamina, joint mobility, and overall physical readiness for everyday life.
            </p>
          </div>
        </div>
      </div>

      {/* Verified Trust Banner */}
      <div className="rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-blue-950/40 border border-slate-800 p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-xl font-bold font-display uppercase text-white">
              Verified Reputation in Soho
            </h3>
            <p className="text-sm text-slate-400">
              Rated {STUDIO_CONFIG.rating.displayString} from {STUDIO_CONFIG.rating.reviewCount.toLocaleString()} client reviews in London.
            </p>
          </div>
        </div>
        <button
          onClick={() => onNavigate('contact')}
          className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm whitespace-nowrap transition-colors"
        >
          Contact Our Studio Team
        </button>
      </div>
    </div>
  );
};
