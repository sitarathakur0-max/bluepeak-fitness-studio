import React, { useState } from 'react';
import { Phone, MapPin, Mail, Send, CheckCircle2, AlertCircle, Clock, ShieldCheck } from 'lucide-react';
import { STUDIO_CONFIG } from '../config/studioConfig';
import { EnquiryFormData, FormErrors } from '../types';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    fullName: '',
    email: '',
    phone: '',
    serviceInterest: 'Personal Training',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide an email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide a contact phone number';
    } else if (formData.phone.trim().length < 7) {
      newErrors.phone = 'Please provide a valid phone number';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide details about your enquiry or fitness objectives';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs uppercase tracking-[0.25em] font-bold text-blue-400 font-display">
          Get In Touch
        </span>
        <h1 className="text-4xl sm:text-6xl font-black font-display uppercase tracking-tight text-white leading-tight">
          Contact BluePeak
        </h1>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          Connect with our London fitness studio team. Enquire regarding training disciplines, coaching arrangements, or studio visits in Soho.
        </p>
      </div>

      {/* Main Grid: Contact Details & Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Studio Information & Direct Channels */}
        <div className="lg:col-span-5 space-y-8">
          <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-8 space-y-6 shadow-xl">
            <h2 className="text-2xl font-bold font-display uppercase text-white tracking-tight">
              Studio Details
            </h2>

            {/* Business & Alternate Name */}
            <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-1">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-400 font-display">
                Studio Identity
              </span>
              <p className="text-lg font-bold text-white font-display uppercase">
                {STUDIO_CONFIG.businessName}
              </p>
              <p className="text-sm font-semibold text-slate-300">
                {STUDIO_CONFIG.alternateName}
              </p>
            </div>

            {/* Clickable Phone Channel */}
            <div className="p-4 rounded-2xl bg-blue-950/40 border border-blue-800/60 space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-400 font-display">
                Direct Studio Telephone
              </span>
              <p className="text-xs text-slate-400">
                Call our team for immediate responses regarding training and schedules:
              </p>
              <a
                id="contact-page-phone-link"
                href={STUDIO_CONFIG.phoneTel}
                className="inline-flex items-center gap-2 text-xl sm:text-2xl font-black text-white hover:text-blue-400 font-display tracking-tight transition-colors"
              >
                <Phone className="w-5 h-5 text-blue-400" />
                <span>{STUDIO_CONFIG.phone}</span>
              </a>
              <p className="text-[11px] text-slate-400">
                Click to call directly: <span className="font-mono text-blue-400">{STUDIO_CONFIG.phoneTel}</span>
              </p>
            </div>

            {/* Verified Location */}
            <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-400 font-display flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" /> Studio Location
              </span>
              <div className="text-sm text-slate-200">
                <p className="font-bold text-white">{STUDIO_CONFIG.alternateName}</p>
                <p className="text-slate-300">{STUDIO_CONFIG.location.fullDisplay}</p>
                <p className="text-slate-400 text-xs mt-1">Soho, Central London, United Kingdom</p>
              </div>
            </div>

            {/* Opening Hours & Visiting Notice */}
            <div className="p-4 rounded-2xl bg-slate-950/40 border border-slate-800/80 space-y-1.5 text-xs text-slate-400">
              <div className="flex items-center gap-2 font-bold text-slate-300 font-display uppercase tracking-wider">
                <Clock className="w-3.5 h-3.5 text-blue-400" />
                Visiting & Schedule Arrangements
              </div>
              <p>
                Please contact the studio via <a href={STUDIO_CONFIG.phoneTel} className="text-blue-400 font-semibold">{STUDIO_CONFIG.phone}</a> prior to your visit to confirm current access times, consultations, and coach availability.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Professional Enquiry Form */}
        <div className="lg:col-span-7">
          <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-8 sm:p-10 shadow-xl space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/80 border border-blue-800/60 text-xs font-bold uppercase tracking-wider text-blue-400">
                <Send className="w-3.5 h-3.5" /> Client Enquiry Form
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-display uppercase text-white tracking-tight">
                Send A Training Enquiry
              </h2>
              <p className="text-xs sm:text-sm text-slate-400">
                Fill out your details below and our team will review your fitness objectives.
              </p>
            </div>

            {isSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center mx-auto text-blue-400">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold font-display uppercase text-white tracking-tight">
                  Enquiry Submitted Successfully
                </h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-white">{formData.fullName}</strong>. Your enquiry regarding <strong className="text-blue-400">{formData.serviceInterest}</strong> has been logged.
                </p>
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-400 max-w-md mx-auto text-left space-y-1">
                  <p className="font-semibold text-white">Direct Phone Contact:</p>
                  <p>For urgent scheduling or immediate questions, call us directly:</p>
                  <a
                    href={STUDIO_CONFIG.phoneTel}
                    className="inline-flex items-center gap-1.5 font-bold text-blue-400 hover:text-blue-300 pt-1"
                  >
                    <Phone className="w-3.5 h-3.5" /> {STUDIO_CONFIG.phone}
                  </a>
                </div>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        fullName: '',
                        email: '',
                        phone: '',
                        serviceInterest: 'Personal Training',
                        message: '',
                      });
                    }}
                    className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold uppercase tracking-wider font-display transition-colors"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div>
                  <label htmlFor="contact-fullname" className="block text-xs font-medium text-slate-300 mb-1">
                    Full Name <span className="text-blue-400">*</span>
                  </label>
                  <input
                    id="contact-fullname"
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Jordan Miller"
                    className={`w-full px-4 py-3 rounded-xl bg-slate-900 border ${
                      errors.fullName ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-700 focus:border-blue-500'
                    } text-white placeholder-slate-500 text-sm focus:outline-none`}
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.fullName}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-medium text-slate-300 mb-1">
                      Email Address <span className="text-blue-400">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.co.uk"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-900 border ${
                        errors.email ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-700 focus:border-blue-500'
                      } text-white placeholder-slate-500 text-sm focus:outline-none`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-phone" className="block text-xs font-medium text-slate-300 mb-1">
                      Phone Number <span className="text-blue-400">*</span>
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+44 ..."
                      className={`w-full px-4 py-3 rounded-xl bg-slate-900 border ${
                        errors.phone ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-700 focus:border-blue-500'
                      } text-white placeholder-slate-500 text-sm focus:outline-none`}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-service" className="block text-xs font-medium text-slate-300 mb-1">
                    Primary Area of Interest
                  </label>
                  <select
                    id="contact-service"
                    value={formData.serviceInterest}
                    onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500"
                  >
                    <option value="Personal Training">Personal Training</option>
                    <option value="Strength Training">Strength Training</option>
                    <option value="Cardio & Conditioning">Cardio & Conditioning</option>
                    <option value="Functional Training">Functional Training</option>
                    <option value="Fitness Coaching">Fitness Coaching</option>
                    <option value="Class Timetable Enquiry">Class Timetable Enquiry</option>
                    <option value="General Studio Consultation">General Studio Consultation</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-medium text-slate-300 mb-1">
                    Your Message / Goals <span className="text-blue-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your fitness background, targets, or specific questions..."
                    className={`w-full px-4 py-3 rounded-xl bg-slate-900 border ${
                      errors.message ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-700 focus:border-blue-500'
                    } text-white placeholder-slate-500 text-sm focus:outline-none resize-none`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.message}
                    </p>
                  )}
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-4">
                  <button
                    id="contact-form-submit-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold font-display uppercase tracking-wider text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-900/30 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      'Submitting Enquiry...'
                    ) : (
                      <>
                        <Send className="w-4 h-4" /> Send Enquiry
                      </>
                    )}
                  </button>
                  <a
                    id="contact-page-direct-call-btn"
                    href={STUDIO_CONFIG.phoneTel}
                    className="py-3.5 px-6 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold font-display uppercase tracking-wider text-sm flex items-center justify-center gap-2 transition-colors whitespace-nowrap"
                  >
                    <Phone className="w-4 h-4 text-blue-400" />
                    <span>Call Direct</span>
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
