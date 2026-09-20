import React, { useState } from 'react';
import { Phone, Calendar, Clock, Users, ArrowRight, Info, Filter } from 'lucide-react';
import { STUDIO_CONFIG } from '../config/studioConfig';
import { PageId } from '../types';

interface ClassesPageProps {
  onNavigate: (page: PageId) => void;
  onOpenEnquiry: (topic?: string) => void;
}

interface ClassCategoryStructure {
  id: string;
  categoryName: string;
  focus: string;
  typicalDuration: string;
  intensityGuide: string;
  suitableFor: string;
  description: string;
  imageUrl: string;
}

const CLASS_STRUCTURES: ClassCategoryStructure[] = [
  {
    id: 'strength-conditioning',
    categoryName: 'Strength & Conditioning Formats',
    focus: 'Muscular Endurance & Structural Lifting',
    typicalDuration: '45–60 Minutes [Format Placeholder]',
    intensityGuide: 'Moderate to High Intensity',
    suitableFor: 'All levels with scalable resistance options',
    description: 'Structured group conditioning emphasizing disciplined resistance techniques and progressive workload management. Class formats are subject to studio scheduling.',
    imageUrl: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'functional-athletic',
    categoryName: 'Functional Athletic Formats',
    focus: 'Agility, Dynamic Movement & Core Stability',
    typicalDuration: '45–50 Minutes [Format Placeholder]',
    intensityGuide: 'Dynamic Full-Body Intensity',
    suitableFor: 'Individuals looking to improve everyday functional readiness',
    description: 'Multi-planar movement routines incorporating bodyweight dynamics and functional equipment. Inquire with the studio for the live timetable.',
    imageUrl: 'https://images.pexels.com/photos/4164761/pexels-photo-4164761.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'cardio-intervals',
    categoryName: 'Cardiovascular Conditioning Formats',
    focus: 'Aerobic Capacity & Metabolic Stamina',
    typicalDuration: '45 Minutes [Format Placeholder]',
    intensityGuide: 'High Energy Interval Conditioning',
    suitableFor: 'Cardio endurance and stamina seekers',
    description: 'High-energy interval training designed to elevate heart rates, promote metabolic stamina, and sustain cardiovascular performance.',
    imageUrl: 'https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'mobility-recovery',
    categoryName: 'Mobility & Movement Integrity Formats',
    focus: 'Joint Health, Flexibility & Movement Quality',
    typicalDuration: '45–60 Minutes [Format Placeholder]',
    intensityGuide: 'Low Impact / Movement Focus',
    suitableFor: 'Athletes and general fitness enthusiasts seeking recovery',
    description: 'Restorative mobility flows focusing on posture, joint decompression, hip and shoulder range of motion, and active muscular release.',
    imageUrl: 'https://images.pexels.com/photos/4162451/pexels-photo-4162451.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export const ClassesPage: React.FC<ClassesPageProps> = ({ onNavigate, onOpenEnquiry }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs uppercase tracking-[0.25em] font-bold text-blue-400 font-display">
          Group & Studio Disciplines
        </span>
        <h1 className="text-4xl sm:text-6xl font-black font-display uppercase tracking-tight text-white leading-tight">
          Fitness Classes
        </h1>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          Explore our fitness class categories and training formats. Specific timetables, instructors, and session schedules are provided upon enquiry.
        </p>

        <div className="pt-2 flex flex-wrap justify-center gap-3">
          <a
            href={STUDIO_CONFIG.phoneTel}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-lg shadow-blue-900/30"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call For Timetable: {STUDIO_CONFIG.phone}</span>
          </a>
        </div>
      </div>

      {/* Accuracy & Timetable Status Notice */}
      <div className="p-6 rounded-2xl bg-blue-950/40 border border-blue-800/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <Info className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-slate-300 space-y-0.5">
            <p className="font-bold text-white uppercase font-display tracking-wide">
              Live Timetable & Booking Notice
            </p>
            <p className="text-slate-400">
              In accordance with our studio standards, current class schedules, capacities, and coach allocations are confirmed directly by contacting our studio team in Soho.
            </p>
          </div>
        </div>
        <button
          onClick={() => onOpenEnquiry('Class Schedule Enquiry')}
          className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold tracking-wide uppercase whitespace-nowrap transition-colors border border-slate-700"
        >
          Request Schedule
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center justify-center gap-2">
        <button
          onClick={() => setActiveFilter('all')}
          className={`px-4 py-2 rounded-full text-xs font-semibold font-display uppercase tracking-wider transition-colors ${
            activeFilter === 'all'
              ? 'bg-blue-600 text-white'
              : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
          }`}
        >
          All Formats
        </button>
        <button
          onClick={() => setActiveFilter('conditioning')}
          className={`px-4 py-2 rounded-full text-xs font-semibold font-display uppercase tracking-wider transition-colors ${
            activeFilter === 'conditioning'
              ? 'bg-blue-600 text-white'
              : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
          }`}
        >
          Conditioning
        </button>
        <button
          onClick={() => setActiveFilter('movement')}
          className={`px-4 py-2 rounded-full text-xs font-semibold font-display uppercase tracking-wider transition-colors ${
            activeFilter === 'movement'
              ? 'bg-blue-600 text-white'
              : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
          }`}
        >
          Movement & Mobility
        </button>
      </div>

      {/* Class Formats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {CLASS_STRUCTURES.filter((c) => {
          if (activeFilter === 'conditioning') return c.id.includes('conditioning') || c.id.includes('strength') || c.id.includes('cardio');
          if (activeFilter === 'movement') return c.id.includes('movement') || c.id.includes('functional') || c.id.includes('mobility');
          return true;
        }).map((item) => (
          <div
            key={item.id}
            className="rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all duration-300 overflow-hidden flex flex-col justify-between"
          >
            <div>
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.categoryName}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-md bg-slate-950/80 backdrop-blur-md border border-slate-700/60 text-[10px] font-bold uppercase tracking-wider text-blue-400">
                  {item.intensityGuide}
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-2xl font-bold font-display uppercase tracking-tight text-white">
                    {item.categoryName}
                  </h3>
                  <p className="text-xs font-semibold text-blue-400 tracking-wide mt-0.5">
                    Focus: {item.focus}
                  </p>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>

                <div className="pt-2 border-t border-slate-800 space-y-2 text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-blue-400" />
                    <span>Duration: <strong className="text-slate-200">{item.typicalDuration}</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-3.5 h-3.5 text-blue-400" />
                    <span>Suitability: <strong className="text-slate-200">{item.suitableFor}</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-blue-400" />
                    <span>Schedule: <strong className="text-slate-200">Confirmed via studio phone</strong></span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 pt-0 flex gap-3">
              <button
                onClick={() => onOpenEnquiry(item.categoryName)}
                className="flex-1 py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold uppercase tracking-wider font-display transition-colors flex items-center justify-center gap-2"
              >
                <span>Enquire On Classes</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <a
                href={STUDIO_CONFIG.phoneTel}
                className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 flex items-center justify-center"
                title="Call Studio"
              >
                <Phone className="w-4 h-4 text-blue-400" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Structured Timetable Placeholder Layout */}
      <div className="rounded-3xl bg-slate-900/60 border border-slate-800 p-8 sm:p-12 space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
          <div>
            <h3 className="text-2xl font-bold font-display uppercase text-white tracking-tight">
              Class Schedule & Timetable Framework
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Timetable updates occur seasonally. Call <span className="text-blue-400 font-semibold">{STUDIO_CONFIG.phone}</span> to confirm today's session slots.
            </p>
          </div>
          <a
            href={STUDIO_CONFIG.phoneTel}
            className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold uppercase tracking-wider flex items-center gap-2 transition-colors whitespace-nowrap"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call For Today's Times</span>
          </a>
        </div>

        {/* Informative Table Structure */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 font-display uppercase tracking-wider text-[11px]">
                <th className="py-3 px-4">Discipline</th>
                <th className="py-3 px-4">Format Structure</th>
                <th className="py-3 px-4">Level</th>
                <th className="py-3 px-4">Arrangement</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300">
              <tr>
                <td className="py-3.5 px-4 font-semibold text-white">Strength & Conditioning</td>
                <td className="py-3.5 px-4 text-slate-400">Progressive Resistance</td>
                <td className="py-3.5 px-4 text-blue-400">All Levels</td>
                <td className="py-3.5 px-4">Call +44 20 7439 6333</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-semibold text-white">Functional Training</td>
                <td className="py-3.5 px-4 text-slate-400">Movement Patterns & Agility</td>
                <td className="py-3.5 px-4 text-blue-400">All Levels</td>
                <td className="py-3.5 px-4">Call +44 20 7439 6333</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-semibold text-white">Cardio Conditioning</td>
                <td className="py-3.5 px-4 text-slate-400">Metabolic Stamina Intervals</td>
                <td className="py-3.5 px-4 text-blue-400">All Levels</td>
                <td className="py-3.5 px-4">Call +44 20 7439 6333</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-semibold text-white">Movement Integrity & Mobility</td>
                <td className="py-3.5 px-4 text-slate-400">Active Recovery & Range of Motion</td>
                <td className="py-3.5 px-4 text-blue-400">All Levels</td>
                <td className="py-3.5 px-4">Call +44 20 7439 6333</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
