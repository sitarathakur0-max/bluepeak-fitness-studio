import React from 'react';
import { Phone, ArrowRight, CheckCircle, ShieldCheck, Dumbbell, Target, Zap, Activity, ChevronRight, HelpCircle } from 'lucide-react';
import { STUDIO_CONFIG } from '../config/studioConfig';
import { PageId } from '../types';
import { RatingBadge } from '../components/RatingBadge';
import heroStudioImg from '../assets/images/fitness_studio_hero_1789800562912.jpg';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenEnquiry: (serviceId?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenEnquiry }) => {
  return (
    <div className="space-y-24 md:space-y-32">
      {/* 1. HERO SECTION */}
      <section
        id="hero-section"
        className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        {/* Background Image with Deep Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroStudioImg}
            alt="BluePeak Fitness Studio Interior London Soho"
            className="w-full h-full object-cover object-center scale-105 filter brightness-40 contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-[#0b0f19]/75 to-[#0b0f19]/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b0f19] via-transparent to-[#0b0f19]/90" />
          {/* Subtle Electric Blue Ambient Glow */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-blue-600/15 blur-[120px] pointer-events-none rounded-full" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
          {/* Verified Rating Pill */}
          <div className="flex justify-center">
            <RatingBadge
              size="lg"
              variant="metallic"
              onClick={() => onNavigate('reviews')}
              className="hover:scale-105"
            />
          </div>

          {/* Core Verified Headline */}
          <div className="space-y-4">
            <span className="inline-block text-xs sm:text-sm uppercase font-bold tracking-[0.25em] text-blue-400 font-display">
              {STUDIO_CONFIG.businessName} • {STUDIO_CONFIG.alternateName}
            </span>
            <h1
              id="hero-main-heading"
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-display uppercase tracking-tight text-white leading-[0.95]"
            >
              Elevate Your Fitness <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-white">
                In London
              </span>
            </h1>
          </div>

          {/* Motivating Supporting Message (No invented facilities or training claims) */}
          <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed">
            Commit to your physical potential with purposeful training, focused coaching, and an environment designed to push your personal standards in Central London.
          </p>

          {/* Primary CTA & Secondary Action */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            {/* Primary CTA: Call phone */}
            <a
              id="hero-primary-call-cta"
              href={STUDIO_CONFIG.phoneTel}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-display uppercase tracking-wider font-bold text-lg flex items-center justify-center gap-3 transition-all shadow-xl shadow-blue-900/40 hover:shadow-blue-600/40 active:scale-95"
            >
              <Phone className="w-5 h-5 text-white" />
              <span>Call {STUDIO_CONFIG.phone}</span>
            </a>

            {/* Secondary CTA: Get Started */}
            <button
              id="hero-secondary-enquiry-cta"
              onClick={() => onOpenEnquiry()}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-100 hover:text-white border border-slate-700/80 font-display uppercase tracking-wider font-bold text-lg flex items-center justify-center gap-2 transition-all metallic-border"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5 text-blue-400" />
            </button>
          </div>

          {/* Key Location & Trust Indicators */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-slate-400 font-medium">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              <span>Location: <strong className="text-slate-200">{STUDIO_CONFIG.location.fullDisplay}</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              <span>Rating: <strong className="text-slate-200">{STUDIO_CONFIG.rating.displayString} Verified</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              <span>Direct Studio Enquiries</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. VERIFIED REPUTATION HIGHLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-blue-950/40 border border-slate-800 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-400">
              <ShieldCheck className="w-4 h-4" /> Client Satisfaction & Trust
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display uppercase text-white tracking-tight">
              Rated {STUDIO_CONFIG.rating.displayString} Across London
            </h2>
            <p className="text-slate-400 text-sm max-w-xl">
              Backed by {STUDIO_CONFIG.rating.reviewCount.toLocaleString()} client reviews for training dedication, studio standards, and coaching focus in Soho.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <button
              id="view-all-reviews-btn"
              onClick={() => onNavigate('reviews')}
              className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm border border-slate-700 transition-colors flex items-center gap-2"
            >
              <span>View Review Details</span>
              <ChevronRight className="w-4 h-4 text-blue-400" />
            </button>
            <a
              id="reputation-call-btn"
              href={STUDIO_CONFIG.phoneTel}
              className="px-6 py-3 rounded-xl bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 font-semibold text-sm border border-blue-500/40 transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>{STUDIO_CONFIG.phone}</span>
            </a>
          </div>
        </div>
      </section>

      {/* 3. FITNESS SERVICES OVERVIEW */}
      <section id="services-overview" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-blue-400 font-display">
            Fitness Disciplines
          </span>
          <h2 className="text-3xl sm:text-5xl font-black font-display uppercase tracking-tight text-white">
            Core Fitness Services
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Our editable fitness categories cover essential strength, movement, conditioning, and coaching disciplines. Speak with our team to explore options suited to your routine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {STUDIO_CONFIG.services.map((service, index) => (
            <div
              key={service.id}
              id={`home-service-card-${service.id}`}
              className="group rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-blue-500/50 transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Image Container */}
                <div className="relative h-48 sm:h-52 overflow-hidden">
                  <img
                    src={service.imageUrl}
                    alt={`${service.title} at BluePeak Fitness Studio`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-md border border-slate-700/60 text-[10px] font-bold uppercase tracking-wider text-blue-400">
                    Category 0{index + 1}
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold font-display uppercase tracking-tight text-white group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  <div className="pt-2 space-y-1.5 border-t border-slate-800/80">
                    {service.focusAreas.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="p-6 pt-0">
                <button
                  id={`enquire-svc-${service.id}-btn`}
                  onClick={() => onOpenEnquiry(service.title)}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-800/90 group-hover:bg-blue-600 text-slate-200 group-hover:text-white text-xs font-semibold uppercase tracking-wider font-display transition-all flex items-center justify-center gap-2"
                >
                  <span>Enquire Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}

          {/* Quick Consultation Highlight Card */}
          <div className="rounded-2xl bg-gradient-to-br from-blue-900/40 via-slate-900 to-slate-900 border border-blue-500/30 p-8 flex flex-col justify-between text-left space-y-6">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-900/50">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold font-display uppercase text-white tracking-tight">
                Direct Studio Discussion
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Unsure which training path aligns with your current conditioning? Speak with our team directly in Soho.
              </p>
            </div>

            <div className="space-y-3">
              <a
                href={STUDIO_CONFIG.phoneTel}
                className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm flex items-center justify-center gap-2 transition-colors shadow-lg shadow-blue-900/40"
              >
                <Phone className="w-4 h-4" />
                <span>Call {STUDIO_CONFIG.phone}</span>
              </a>
              <button
                onClick={() => onNavigate('services')}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 text-xs font-medium transition-colors text-center block"
              >
                Explore All Services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TRAINING & VALUE PILLARS (BENEFITS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-900/50 border border-slate-800 p-8 sm:p-12 lg:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-blue-400 font-display">
                Training Philosophy
              </span>
              <h2 className="text-3xl sm:text-5xl font-black font-display uppercase tracking-tight text-white leading-tight">
                Focus, Precision & Results In Soho
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Whether you are refining specific movement mechanics, building structural strength, or cultivating cardiovascular capacity, our studio framework supports your fitness development.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  id="pillars-training-btn"
                  onClick={() => onNavigate('training')}
                  className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-colors flex items-center justify-center gap-2"
                >
                  <span>Explore Training</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  id="pillars-classes-btn"
                  onClick={() => onNavigate('classes')}
                  className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm border border-slate-700 transition-colors flex items-center justify-center gap-2"
                >
                  <span>Class Information</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3">
                <div className="w-10 h-10 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold font-display uppercase text-white">
                  Targeted Direction
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Every training discipline focuses on deliberate execution and structured objectives suited to your personal baseline.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3">
                <div className="w-10 h-10 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center">
                  <Dumbbell className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold font-display uppercase text-white">
                  Strength & Conditioning
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Balanced training that respects both heavy resistance stimulus and cardiovascular conditioning capacity.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3">
                <div className="w-10 h-10 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center">
                  <Activity className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold font-display uppercase text-white">
                  Movement Integrity
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Functional training protocols designed to reinforce joints, improve range of motion, and protect long-term mobility.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3">
                <div className="w-10 h-10 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold font-display uppercase text-white">
                  Central London Location
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Located in London W1F 9US, providing convenient access for residents and professionals in Soho and the West End.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. REVIEWS & RATINGS SUMMARY (ACCURACY COMPLIANT - NO FAKE REVIEWS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-12">
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-blue-400 font-display">
            Verified Feedback
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-display uppercase tracking-tight text-white">
            Client Rating & Reviews
          </h2>
          <p className="text-slate-400 text-sm">
            Strict transparency: we display our authentic aggregate rating without fabricating fake testimonials or transformation stories.
          </p>
        </div>

        <div className="max-w-3xl mx-auto rounded-3xl bg-slate-900/70 border border-slate-800 p-8 sm:p-12 text-center space-y-8">
          <div className="space-y-3">
            <div className="text-6xl sm:text-7xl font-black font-display text-white tracking-tight">
              {STUDIO_CONFIG.rating.displayString}
            </div>
            <div className="flex justify-center">
              <RatingBadge size="lg" variant="pill" />
            </div>
            <p className="text-base text-slate-300 font-medium">
              Based on {STUDIO_CONFIG.rating.reviewCount.toLocaleString()} verified client ratings
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-800">
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
              <div className="text-xl font-bold text-white font-display">4.8 / 5.0</div>
              <div className="text-xs text-slate-400 mt-0.5">Aggregate Score</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
              <div className="text-xl font-bold text-white font-display">1,501</div>
              <div className="text-xs text-slate-400 mt-0.5">Total Reviews</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
              <div className="text-xl font-bold text-blue-400 font-display">London W1F 9US</div>
              <div className="text-xs text-slate-400 mt-0.5">Verified Location</div>
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={() => onNavigate('reviews')}
              className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-sm font-semibold transition-colors inline-flex items-center gap-2"
            >
              <span>Explore Review Details & Submission</span>
              <ArrowRight className="w-4 h-4 text-blue-400" />
            </button>
          </div>
        </div>
      </section>

      {/* 6. FAQ HIGHLIGHT SECTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-10">
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-blue-400 font-display">
            Common Questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-display uppercase tracking-tight text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-400 text-sm">
            Helpful answers to guide your initial enquiry with BluePeak Fitness Studio.
          </p>
        </div>

        <div className="space-y-3">
          <div className="rounded-xl bg-slate-900/60 border border-slate-800 p-5 space-y-2">
            <h3 className="text-base font-bold text-white flex items-center gap-2 font-display">
              <HelpCircle className="w-4 h-4 text-blue-400 shrink-0" />
              How do I enquire about personal training and fitness services?
            </h3>
            <p className="text-sm text-slate-300 pl-6 leading-relaxed">
              You can call our studio team directly at <a href={STUDIO_CONFIG.phoneTel} className="text-blue-400 underline font-semibold">{STUDIO_CONFIG.phone}</a> or submit an enquiry via our Get Started form with your training preferences.
            </p>
          </div>

          <div className="rounded-xl bg-slate-900/60 border border-slate-800 p-5 space-y-2">
            <h3 className="text-base font-bold text-white flex items-center gap-2 font-display">
              <HelpCircle className="w-4 h-4 text-blue-400 shrink-0" />
              Where is the studio located?
            </h3>
            <p className="text-sm text-slate-300 pl-6 leading-relaxed">
              We are located at Third Space Soho in London W1F 9US, easily accessible across Central London.
            </p>
          </div>

          <div className="rounded-xl bg-slate-900/60 border border-slate-800 p-5 space-y-2">
            <h3 className="text-base font-bold text-white flex items-center gap-2 font-display">
              <HelpCircle className="w-4 h-4 text-blue-400 shrink-0" />
              Are fitness services suitable for beginners as well as experienced individuals?
            </h3>
            <p className="text-sm text-slate-300 pl-6 leading-relaxed">
              Yes. Training and coaching can be tailored to individual experience levels, goals, and movement foundations.
            </p>
          </div>
        </div>

        <div className="text-center pt-6">
          <button
            onClick={() => onNavigate('faq')}
            className="text-xs font-bold uppercase tracking-wider text-blue-400 hover:text-blue-300 inline-flex items-center gap-1.5"
          >
            <span>View All Frequently Asked Questions</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

      {/* 7. STRONG FINAL CTA SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="relative rounded-3xl bg-gradient-to-br from-blue-900 via-slate-900 to-[#0b0f19] border border-blue-500/40 p-8 sm:p-14 lg:p-16 text-center space-y-8 overflow-hidden shadow-2xl blue-glow">
          <div className="relative z-10 max-w-3xl mx-auto space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-blue-400 font-display">
              Begin Your Progression
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black font-display uppercase tracking-tight text-white">
              Ready To Elevate Your Fitness?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Contact BluePeak Fitness Studio today. Speak directly with our team in London W1F 9US to discuss your training objectives.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                id="final-cta-call-btn"
                href={STUDIO_CONFIG.phoneTel}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-display uppercase tracking-wider font-bold text-lg flex items-center justify-center gap-3 transition-all shadow-xl shadow-blue-950/60"
              >
                <Phone className="w-5 h-5" />
                <span>Call {STUDIO_CONFIG.phone}</span>
              </a>
              <button
                id="final-cta-get-started-btn"
                onClick={() => onOpenEnquiry()}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 font-display uppercase tracking-wider font-bold text-lg flex items-center justify-center gap-2 transition-all"
              >
                <span>Submit Enquiry</span>
                <ArrowRight className="w-5 h-5 text-blue-400" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
