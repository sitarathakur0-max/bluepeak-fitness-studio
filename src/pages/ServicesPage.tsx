import React, { useState } from 'react';
import { Phone, ArrowRight, CheckCircle2, ShieldAlert, Sparkles } from 'lucide-react';
import { STUDIO_CONFIG, ServiceCategory } from '../config/studioConfig';
import { PageId } from '../types';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
  onOpenEnquiry: (serviceTitle?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate, onOpenEnquiry }) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(STUDIO_CONFIG.services[0].id);

  const currentService = STUDIO_CONFIG.services.find((s) => s.id === selectedServiceId) || STUDIO_CONFIG.services[0];

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs uppercase tracking-[0.25em] font-bold text-blue-400 font-display">
          Training Disciplines
        </span>
        <h1 className="text-4xl sm:text-6xl font-black font-display uppercase tracking-tight text-white leading-tight">
          Fitness Services & Coaching
        </h1>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          Structured fitness disciplines designed to develop your physical foundation. Contact the studio to discuss current program arrangements and availability in London W1F 9US.
        </p>

        <div className="pt-2">
          <a
            href={STUDIO_CONFIG.phoneTel}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 border border-slate-700 text-slate-200 hover:text-white hover:border-blue-500 text-xs font-semibold uppercase tracking-wider transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-blue-400" />
            <span>Enquire By Phone: {STUDIO_CONFIG.phone}</span>
          </a>
        </div>
      </div>

      {/* Category Selection Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        {STUDIO_CONFIG.services.map((svc) => {
          const isSelected = svc.id === selectedServiceId;
          return (
            <button
              key={svc.id}
              id={`service-tab-${svc.id}`}
              onClick={() => setSelectedServiceId(svc.id)}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 font-display uppercase tracking-wider ${
                isSelected
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/40 border border-blue-400/40 scale-105'
                  : 'bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800'
              }`}
            >
              {svc.title}
            </button>
          );
        })}
      </div>

      {/* Featured Service Detailed Spotlight */}
      <div className="rounded-3xl bg-slate-900/80 border border-slate-800 overflow-hidden shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          <div className="lg:col-span-7 p-8 sm:p-12 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/80 border border-blue-800/60 text-xs font-bold uppercase tracking-wider text-blue-400">
                <Sparkles className="w-3.5 h-3.5" /> Featured Service Category
              </div>
              <h2 className="text-3xl sm:text-5xl font-black font-display uppercase tracking-tight text-white">
                {currentService.title}
              </h2>
              <p className="text-slate-300 text-base leading-relaxed">
                {currentService.fullDesc}
              </p>

              <div className="pt-4 space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 font-display">
                  Core Focus Areas
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentService.focusAreas.map((focus, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs sm:text-sm text-slate-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                      <span>{focus}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row gap-3">
              <button
                id={`enquire-active-service-btn`}
                onClick={() => onOpenEnquiry(currentService.title)}
                className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-900/30 transition-all"
              >
                <span>Enquire About {currentService.title}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href={STUDIO_CONFIG.phoneTel}
                className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-semibold flex items-center justify-center gap-2 border border-slate-700 transition-colors"
              >
                <Phone className="w-4 h-4 text-blue-400" />
                <span>Call Studio</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative min-h-[320px] lg:min-h-full">
            <img
              src={currentService.imageUrl}
              alt={`${currentService.title} at BluePeak Fitness Studio`}
              className="w-full h-full object-cover object-center absolute inset-0"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent lg:bg-gradient-to-r lg:from-slate-900 lg:via-transparent lg:to-transparent" />
          </div>
        </div>
      </div>

      {/* Grid of All 5 Configurable Categories */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold font-display uppercase tracking-tight text-white">
            All Service Disciplines
          </h3>
          <span className="text-xs text-slate-400">
            {STUDIO_CONFIG.services.length} Core Categories
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {STUDIO_CONFIG.services.map((svc) => (
            <div
              key={svc.id}
              className={`rounded-2xl bg-slate-900/60 border ${
                svc.id === selectedServiceId ? 'border-blue-500/80 bg-slate-900' : 'border-slate-800'
              } p-6 flex flex-col justify-between space-y-4 hover:border-slate-700 transition-colors`}
            >
              <div className="space-y-3">
                <h4 className="text-xl font-bold font-display uppercase text-white">
                  {svc.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {svc.shortDesc}
                </p>
                <ul className="space-y-1.5 pt-1 text-xs text-slate-300">
                  {svc.focusAreas.map((f, i) => (
                    <li key={i} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-3 border-t border-slate-800 flex items-center justify-between gap-2">
                <button
                  onClick={() => {
                    setSelectedServiceId(svc.id);
                    window.scrollTo({ top: 350, behavior: 'smooth' });
                  }}
                  className="text-xs font-semibold text-blue-400 hover:text-blue-300"
                >
                  View Details
                </button>
                <button
                  onClick={() => onOpenEnquiry(svc.title)}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-blue-600 text-slate-200 hover:text-white text-xs font-semibold transition-colors"
                >
                  Enquire
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Editable Notice / Transparency Box */}
      <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 text-xs text-slate-400 space-y-1.5">
        <div className="flex items-center gap-2 text-slate-300 font-semibold uppercase font-display tracking-wider">
          <ShieldAlert className="w-4 h-4 text-blue-400" /> Information & Service Notice
        </div>
        <p>
          Specific session schedules, bespoke coaching arrangements, and instructor matching are confirmed directly upon enquiry. Please contact BluePeak Fitness Studio at Third Space Soho on <a href={STUDIO_CONFIG.phoneTel} className="text-blue-400 underline">{STUDIO_CONFIG.phone}</a>.
        </p>
      </div>
    </div>
  );
};
