import React, { useState } from 'react';
import { X, Phone, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { STUDIO_CONFIG } from '../config/studioConfig';
import { EnquiryFormData, FormErrors } from '../types';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  preselectedService,
}) => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    fullName: '',
    email: '',
    phone: '',
    serviceInterest: preselectedService || 'Personal Training',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sync preselected service if changed
  React.useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, serviceInterest: preselectedService }));
    }
  }, [preselectedService]);

  if (!isOpen) return null;

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide a contact number';
    } else if (formData.phone.trim().length < 7) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide details about your fitness goals or enquiry';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate instantaneous clean local submission response
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      serviceInterest: 'Personal Training',
      message: '',
    });
    setErrors({});
    onClose();
  };

  return (
    <div
      id="enquiry-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        id="enquiry-modal-container"
        className="relative w-full max-w-lg rounded-2xl bg-[#0f172a] border border-slate-700/80 shadow-2xl p-6 sm:p-8 text-left my-8"
      >
        <button
          id="close-enquiry-modal-btn"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="py-6 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center mx-auto text-blue-400">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold font-display tracking-tight text-white uppercase">
              Enquiry Received
            </h3>
            <p className="text-sm text-slate-300 max-w-sm mx-auto leading-relaxed">
              Thank you, <span className="text-white font-medium">{formData.fullName}</span>. Your enquiry for <span className="text-blue-400 font-medium">{formData.serviceInterest}</span> at {STUDIO_CONFIG.businessName} has been logged.
            </p>
            <div className="bg-slate-800/60 rounded-xl p-4 border border-slate-700/60 text-xs text-slate-300 text-left space-y-1">
              <p className="font-semibold text-white">Need an immediate answer?</p>
              <p>You can reach our team directly at the studio in Soho:</p>
              <a
                href={STUDIO_CONFIG.phoneTel}
                className="inline-flex items-center gap-1.5 font-bold text-blue-400 hover:text-blue-300 mt-1"
              >
                <Phone className="w-3.5 h-3.5" /> {STUDIO_CONFIG.phone}
              </a>
            </div>
            <div className="pt-2">
              <button
                id="modal-done-btn"
                onClick={handleReset}
                className="w-full py-3 px-6 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-colors shadow-lg shadow-blue-900/30"
              >
                Close & Return
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="space-y-1.5 mb-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                London W1F 9US Studio
              </div>
              <h2 id="modal-title" className="text-2xl sm:text-3xl font-bold font-display uppercase tracking-tight text-white">
                Get Started With BluePeak
              </h2>
              <p className="text-xs sm:text-sm text-slate-400">
                Speak directly with our fitness team about training, coaching, and services.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div>
                <label htmlFor="modal-full-name" className="block text-xs font-medium text-slate-300 mb-1">
                  Full Name <span className="text-blue-400">*</span>
                </label>
                <input
                  id="modal-full-name"
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Alexander Clark"
                  className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border ${
                    errors.fullName ? 'border-red-500 focus:ring-red-500' : 'border-slate-700 focus:border-blue-500'
                  } text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-1`}
                />
                {errors.fullName && (
                  <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.fullName}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="modal-email" className="block text-xs font-medium text-slate-300 mb-1">
                    Email Address <span className="text-blue-400">*</span>
                  </label>
                  <input
                    id="modal-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border ${
                      errors.email ? 'border-red-500 focus:ring-red-500' : 'border-slate-700 focus:border-blue-500'
                    } text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-1`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="modal-phone" className="block text-xs font-medium text-slate-300 mb-1">
                    Phone Number <span className="text-blue-400">*</span>
                  </label>
                  <input
                    id="modal-phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+44 20 ..."
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border ${
                      errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-slate-700 focus:border-blue-500'
                    } text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-1`}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="modal-service" className="block text-xs font-medium text-slate-300 mb-1">
                  Area of Interest
                </label>
                <select
                  id="modal-service"
                  value={formData.serviceInterest}
                  onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500"
                >
                  <option value="Personal Training">Personal Training</option>
                  <option value="Strength Training">Strength Training</option>
                  <option value="Cardio & Conditioning">Cardio & Conditioning</option>
                  <option value="Functional Training">Functional Training</option>
                  <option value="Fitness Coaching">Fitness Coaching</option>
                  <option value="General Studio Enquiry">General Studio Enquiry</option>
                </select>
              </div>

              <div>
                <label htmlFor="modal-message" className="block text-xs font-medium text-slate-300 mb-1">
                  Enquiry Details <span className="text-blue-400">*</span>
                </label>
                <textarea
                  id="modal-message"
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us what you would like to achieve or enquire about..."
                  className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border ${
                    errors.message ? 'border-red-500 focus:ring-red-500' : 'border-slate-700 focus:border-blue-500'
                  } text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-1 resize-none`}
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.message}
                  </p>
                )}
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  id="submit-enquiry-btn"
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 py-3 px-6 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-900/30 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    'Sending Enquiry...'
                  ) : (
                    <>
                      <Send className="w-4 h-4" /> Submit Enquiry
                    </>
                  )}
                </button>
                <a
                  id="modal-call-direct-btn"
                  href={STUDIO_CONFIG.phoneTel}
                  className="py-3 px-5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 hover:border-slate-600 font-medium text-sm flex items-center justify-center gap-2 transition-colors whitespace-nowrap"
                >
                  <Phone className="w-4 h-4 text-blue-400" /> Call Direct
                </a>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
