import React, { useState } from 'react';
import { Phone, ChevronDown, ChevronUp, Search, HelpCircle, ArrowRight } from 'lucide-react';
import { STUDIO_CONFIG } from '../config/studioConfig';
import { PageId } from '../types';

interface FaqPageProps {
  onNavigate: (page: PageId) => void;
  onOpenEnquiry: () => void;
}

interface FaqItem {
  question: string;
  answer: string;
  category: 'enquiries' | 'training' | 'classes' | 'memberships' | 'preparation';
}

const FAQS: FaqItem[] = [
  {
    category: 'enquiries',
    question: 'How do I enquire about starting training at BluePeak Fitness Studio?',
    answer: `You can reach our team directly by calling ${STUDIO_CONFIG.phone} or by submitting an enquiry through our online Get Started form. Our studio team at Third Space Soho will discuss your training focus and guide you through available options.`,
  },
  {
    category: 'enquiries',
    question: 'Where is BluePeak Fitness Studio located in London?',
    answer: `We are located at Third Space Soho in London W1F 9US, centrally situated for clients residing or working across Soho, Mayfair, and the West End.`,
  },
  {
    category: 'training',
    question: 'What types of fitness training are available at the studio?',
    answer: 'Our core disciplines include Personal Training, Strength Training, Cardio & Conditioning, Functional Training, and Fitness Coaching. Specific coaching structures and instructor matching are arranged directly upon consultation.',
  },
  {
    category: 'training',
    question: 'Are training sessions suitable for beginners as well as experienced athletes?',
    answer: 'Yes. Fitness coaching and training pathways can be scaled according to your existing movement proficiency, resistance experience, and personal objectives.',
  },
  {
    category: 'classes',
    question: 'How do I find out about class schedules and timetables?',
    answer: `Class formats, timetable slots, and group conditioning sessions are available by contacting our studio team on ${STUDIO_CONFIG.phone}. We will provide the most up-to-date schedule directly.`,
  },
  {
    category: 'classes',
    question: 'What is the focus of the studio class formats?',
    answer: 'Class structures generally encompass progressive strength and conditioning, high-energy cardio intervals, functional athletic movement, and mobility recovery formats.',
  },
  {
    category: 'memberships',
    question: 'How are memberships and session access arranged?',
    answer: `Membership options, session packages, and studio access arrangements are discussed directly with our staff. Please call ${STUDIO_CONFIG.phone} or submit an enquiry to receive current arrangement details.`,
  },
  {
    category: 'preparation',
    question: 'What should I bring and prepare for my first studio session?',
    answer: 'We recommend arriving in supportive athletic footwear, breathable training apparel, and a water bottle. If you have specific physical goals or medical considerations, you can share them with your coach during your initial consultation.',
  },
  {
    category: 'preparation',
    question: 'Do I need a preliminary assessment before starting personal training?',
    answer: 'Discussing your fitness history, biomechanics, and current conditioning is a standard recommendation to ensure training is effective, focused, and appropriately calibrated.',
  },
  {
    category: 'enquiries',
    question: 'How can I contact the studio for urgent enquiries?',
    answer: `For direct assistance, call our official studio phone at ${STUDIO_CONFIG.phone}. Our team will assist with scheduling, directions, or any fitness questions.`,
  },
];

export const FaqPage: React.FC<FaqPageProps> = ({ onNavigate, onOpenEnquiry }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs uppercase tracking-[0.25em] font-bold text-blue-400 font-display">
          Information & Guidance
        </span>
        <h1 className="text-4xl sm:text-6xl font-black font-display uppercase tracking-tight text-white leading-tight">
          Frequently Asked Questions
        </h1>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          Find practical answers regarding training enquiries, classes, memberships, and preparing for your sessions at BluePeak Fitness Studio.
        </p>
      </div>

      {/* Search & Category Filter */}
      <div className="space-y-4">
        <div className="relative">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search questions by keyword (e.g. personal training, schedule, location, beginner)..."
            className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
          {[
            { id: 'all', label: 'All Questions' },
            { id: 'enquiries', label: 'Enquiries & Studio' },
            { id: 'training', label: 'Training & Coaching' },
            { id: 'classes', label: 'Classes & Formats' },
            { id: 'memberships', label: 'Memberships & Access' },
            { id: 'preparation', label: 'Preparation & Gear' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold font-display uppercase tracking-wider transition-colors ${
                selectedCategory === cat.id
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-900/40'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Accordion FAQ List */}
      <div className="space-y-3">
        {filteredFaqs.length === 0 ? (
          <div className="p-12 text-center rounded-2xl bg-slate-900/60 border border-slate-800 text-slate-400 space-y-3">
            <HelpCircle className="w-8 h-8 text-blue-400 mx-auto" />
            <p className="text-sm">No matching questions found for "{searchTerm}".</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="text-xs text-blue-400 hover:underline font-semibold"
            >
              Clear filters and view all questions
            </button>
          </div>
        ) : (
          filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-colors ${
                  isOpen
                    ? 'bg-slate-900/90 border-blue-500/50 shadow-lg shadow-blue-950/20'
                    : 'bg-slate-900/50 border-slate-800/80 hover:border-slate-700'
                } overflow-hidden`}
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-bold text-base sm:text-lg text-white uppercase tracking-tight">
                    {faq.question}
                  </span>
                  <div
                    className={`p-1.5 rounded-lg shrink-0 transition-colors ${
                      isOpen ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-300 text-sm leading-relaxed border-t border-slate-800/60 animate-in fade-in-50 duration-150">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Still Have Questions Box */}
      <div className="rounded-3xl bg-gradient-to-r from-blue-950/40 via-slate-900 to-slate-900 border border-blue-500/30 p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center sm:text-left">
          <h3 className="text-xl font-bold font-display uppercase text-white">
            Have a Specific Question?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300">
            Our London fitness team is available to assist you directly by phone.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 shrink-0">
          <a
            href={STUDIO_CONFIG.phoneTel}
            className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs uppercase tracking-wider font-display flex items-center justify-center gap-2 shadow-lg shadow-blue-900/30 transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>Call {STUDIO_CONFIG.phone}</span>
          </a>
          <button
            onClick={onOpenEnquiry}
            className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-xs uppercase tracking-wider font-display transition-colors"
          >
            Submit Enquiry Form
          </button>
        </div>
      </div>
    </div>
  );
};
