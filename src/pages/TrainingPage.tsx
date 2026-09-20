import React from 'react';
import { Phone, ArrowRight, ShieldCheck, Dumbbell, Target, Award, Zap, Compass, CheckCircle } from 'lucide-react';
import { STUDIO_CONFIG } from '../config/studioConfig';
import { PageId } from '../types';

interface TrainingPageProps {
  onNavigate: (page: PageId) => void;
  onOpenEnquiry: (topic?: string) => void;
}

export const TrainingPage: React.FC<TrainingPageProps> = ({ onNavigate, onOpenEnquiry }) => {
  const trainingPathways = [
    {
      title: 'Individual 1-on-1 Training Framework',
      subtitle: 'Focused Personal Coaching',
      description: 'Individual coaching centered completely on your mechanics, biomechanics, and progression milestones. Ideal for individuals seeking dedicated attention and rapid movement mastery.',
      components: ['Personalized biomechanical review', 'Targeted technique coaching', 'Custom workload calibration', 'Ongoing accountability'],
      suitable: 'Beginner to advanced athletes',
    },
    {
      title: 'Structural Strength Framework',
      subtitle: 'Foundational Resistance & Power',
      description: 'A disciplined approach to resistance training that builds foundational muscular density, core rigidity, and athletic posture using barbells, dumbbells, and functional tools.',
      components: ['Compound movement mechanics', 'Progressive loading principles', 'Core stability reinforcement', 'Postural alignment'],
      suitable: 'Anyone seeking strength & joint stability',
    },
    {
      title: 'Dynamic Conditioning Framework',
      subtitle: 'Cardiovascular Stamina & Work Capacity',
      description: 'Systematic conditioning sequences designed to elevate VO2 capacity, metabolic recovery, and sustained stamina under athletic work intervals.',
      components: ['Energy system pacing', 'High-density circuits', 'Metabolic conditioning', 'Recovery tracking'],
      suitable: 'Endurance & stamina enhancement',
    },
    {
      title: 'Functional Movement & Resilience',
      subtitle: 'Mobility, Balance & Daily Performance',
      description: 'Integrates rotational movements, kettlebell exercises, multi-planar agility drills, and mobility patterns to keep your body resilient for daily demands.',
      components: ['Multi-planar movement efficiency', 'Hip & shoulder mobility', 'Dynamic balance drills', 'Joint decompression'],
      suitable: 'Longevity and functional agility',
    },
  ];

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-20">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs uppercase tracking-[0.25em] font-bold text-blue-400 font-display">
          Training Frameworks
        </span>
        <h1 className="text-4xl sm:text-6xl font-black font-display uppercase tracking-tight text-white leading-tight">
          Structured Training Pathways
        </h1>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          Explore our foundational training frameworks. Every pathway can be customized based on your current physical capabilities and athletic goals at Third Space Soho.
        </p>

        <div className="pt-2 flex flex-wrap justify-center gap-3">
          <a
            href={STUDIO_CONFIG.phoneTel}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-lg shadow-blue-900/30 font-display"
          >
            <Phone className="w-4 h-4" />
            <span>Call Training Team: {STUDIO_CONFIG.phone}</span>
          </a>
        </div>
      </div>

      {/* 4 Steps to Progression */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold font-display uppercase text-white tracking-tight">
            How You Begin Your Training
          </h2>
          <p className="text-slate-400 text-sm mt-1">
            A straightforward process to initiate your fitness pathway at BluePeak.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-3 relative">
            <div className="text-3xl font-black font-display text-blue-500/40">01</div>
            <h3 className="text-lg font-bold font-display uppercase text-white">Direct Enquiry</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Connect with our team via phone or the online enquiry form to share your current fitness goals.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-3 relative">
            <div className="text-3xl font-black font-display text-blue-500/40">02</div>
            <h3 className="text-lg font-bold font-display uppercase text-white">Initial Consultation</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Discuss your baseline movement, fitness history, and availability with our studio staff.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-3 relative">
            <div className="text-3xl font-black font-display text-blue-500/40">03</div>
            <h3 className="text-lg font-bold font-display uppercase text-white">Framework Selection</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Select the appropriate training pathway, whether focused on personal training, strength, or conditioning.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-3 relative">
            <div className="text-3xl font-black font-display text-blue-500/40">04</div>
            <h3 className="text-lg font-bold font-display uppercase text-white">Active Progression</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Begin purposeful sessions in Soho and maintain consistent accountability and momentum.
            </p>
          </div>
        </div>
      </div>

      {/* Pathways Grid */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold font-display uppercase text-white tracking-tight">
            Training Framework Categories
          </h2>
          <p className="text-slate-400 text-sm mt-1">
            General and editable frameworks configured for clear customization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {trainingPathways.map((pathway, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-slate-900/80 border border-slate-800 p-8 space-y-6 flex flex-col justify-between hover:border-blue-500/40 transition-colors"
            >
              <div className="space-y-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-400 font-display px-2 py-0.5 rounded bg-blue-950/80 border border-blue-800/60">
                    Pathway 0{idx + 1}
                  </span>
                  <h3 className="text-2xl font-bold font-display uppercase text-white tracking-tight mt-2">
                    {pathway.title}
                  </h3>
                  <p className="text-xs font-semibold text-slate-400 mt-0.5">
                    {pathway.subtitle}
                  </p>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {pathway.description}
                </p>

                <div className="pt-2 border-t border-slate-800 space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 font-display">
                    Framework Components:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {pathway.components.map((comp, cIdx) => (
                      <div key={cIdx} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                        <span>{comp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-3">
                <span className="text-xs text-slate-400">
                  Suitability: <strong className="text-slate-200">{pathway.suitable}</strong>
                </span>
                <button
                  onClick={() => onOpenEnquiry(pathway.title)}
                  className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold uppercase tracking-wider font-display transition-colors"
                >
                  Enquire Pathway
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Callout */}
      <div className="rounded-3xl bg-slate-900/60 border border-slate-800 p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        <div className="space-y-1">
          <h3 className="text-xl font-bold font-display uppercase text-white">
            Discuss Your Program Directly
          </h3>
          <p className="text-sm text-slate-400 max-w-xl">
            Our team will advise on coach scheduling, availability, and session structures in London W1F 9US.
          </p>
        </div>
        <a
          href={STUDIO_CONFIG.phoneTel}
          className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold flex items-center gap-2 transition-colors whitespace-nowrap"
        >
          <Phone className="w-4 h-4" />
          <span>Call {STUDIO_CONFIG.phone}</span>
        </a>
      </div>
    </div>
  );
};
