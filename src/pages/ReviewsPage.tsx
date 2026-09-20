import React, { useState } from 'react';
import { Star, ShieldCheck, CheckCircle2, Phone, MessageSquare, Send, Sparkles } from 'lucide-react';
import { STUDIO_CONFIG } from '../config/studioConfig';
import { PageId } from '../types';

interface ReviewsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenEnquiry: () => void;
}

export const ReviewsPage: React.FC<ReviewsPageProps> = ({ onNavigate, onOpenEnquiry }) => {
  const [userReview, setUserReview] = useState({
    authorName: '',
    rating: 5,
    category: 'Personal Training',
    comment: '',
  });
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userReview.authorName || !userReview.comment) return;
    setReviewSubmitted(true);
  };

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/70 border border-blue-800/60 text-xs font-bold uppercase tracking-wider text-blue-400">
          <ShieldCheck className="w-3.5 h-3.5" /> Verified Public Rating
        </div>

        <h1 className="text-4xl sm:text-6xl font-black font-display uppercase tracking-tight text-white leading-tight">
          4.8/5 — 1,501 Reviews
        </h1>

        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          The official aggregate rating for {STUDIO_CONFIG.businessName} ({STUDIO_CONFIG.alternateName}) across {STUDIO_CONFIG.rating.reviewCount.toLocaleString()} client ratings in London W1F 9US.
        </p>
      </div>

      {/* Main Scorecard */}
      <div className="max-w-4xl mx-auto rounded-3xl bg-slate-900/80 border border-slate-800 p-8 sm:p-12 shadow-2xl space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Left Large Metric */}
          <div className="md:col-span-5 text-center md:text-left space-y-3 border-b md:border-b-0 md:border-r border-slate-800 pb-8 md:pb-0 md:pr-8">
            <div className="text-7xl sm:text-8xl font-black font-display text-white tracking-tight leading-none">
              4.8
            </div>
            <div className="flex items-center justify-center md:justify-start gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-sm font-bold uppercase tracking-wider text-slate-200 font-display">
              Overall Studio Rating
            </p>
            <p className="text-xs text-slate-400">
              Based on {STUDIO_CONFIG.rating.reviewCount.toLocaleString()} verified client ratings
            </p>
          </div>

          {/* Right Distribution Breakdown */}
          <div className="md:col-span-7 space-y-2.5">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 font-display mb-3">
              Rating Distribution
            </h3>

            {/* 5 Stars */}
            <div className="flex items-center gap-3 text-xs">
              <span className="w-12 text-slate-300 font-medium">5 Stars</span>
              <div className="flex-1 h-2.5 rounded-full bg-slate-800 overflow-hidden">
                <div className="h-full bg-blue-500 rounded-full w-[86%]" />
              </div>
              <span className="w-10 text-right text-slate-400 font-semibold">86%</span>
            </div>

            {/* 4 Stars */}
            <div className="flex items-center gap-3 text-xs">
              <span className="w-12 text-slate-300 font-medium">4 Stars</span>
              <div className="flex-1 h-2.5 rounded-full bg-slate-800 overflow-hidden">
                <div className="h-full bg-blue-500/80 rounded-full w-[11%]" />
              </div>
              <span className="w-10 text-right text-slate-400 font-semibold">11%</span>
            </div>

            {/* 3 Stars */}
            <div className="flex items-center gap-3 text-xs">
              <span className="w-12 text-slate-300 font-medium">3 Stars</span>
              <div className="flex-1 h-2.5 rounded-full bg-slate-800 overflow-hidden">
                <div className="h-full bg-blue-500/50 rounded-full w-[2%]" />
              </div>
              <span className="w-10 text-right text-slate-400 font-semibold">2%</span>
            </div>

            {/* 2 Stars */}
            <div className="flex items-center gap-3 text-xs">
              <span className="w-12 text-slate-300 font-medium">2 Stars</span>
              <div className="flex-1 h-2.5 rounded-full bg-slate-800 overflow-hidden">
                <div className="h-full bg-slate-600 rounded-full w-[0.7%]" />
              </div>
              <span className="w-10 text-right text-slate-400 font-semibold">&lt;1%</span>
            </div>

            {/* 1 Star */}
            <div className="flex items-center gap-3 text-xs">
              <span className="w-12 text-slate-300 font-medium">1 Star</span>
              <div className="flex-1 h-2.5 rounded-full bg-slate-800 overflow-hidden">
                <div className="h-full bg-slate-600 rounded-full w-[0.3%]" />
              </div>
              <span className="w-10 text-right text-slate-400 font-semibold">&lt;1%</span>
            </div>
          </div>
        </div>

        {/* Verification Standards Notice */}
        <div className="pt-6 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
            <CheckCircle2 className="w-5 h-5 text-blue-400 mx-auto mb-2" />
            <div className="font-bold text-white text-sm font-display uppercase">Authentic Data</div>
            <div className="text-xs text-slate-400 mt-0.5">Strictly verified score</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
            <ShieldCheck className="w-5 h-5 text-blue-400 mx-auto mb-2" />
            <div className="font-bold text-white text-sm font-display uppercase">London Soho Hub</div>
            <div className="text-xs text-slate-400 mt-0.5">{STUDIO_CONFIG.location.postcode} Studio</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
            <Sparkles className="w-5 h-5 text-blue-400 mx-auto mb-2" />
            <div className="font-bold text-white text-sm font-display uppercase">No Fake Claims</div>
            <div className="text-xs text-slate-400 mt-0.5">Zero fabricated reviews</div>
          </div>
        </div>
      </div>

      {/* Review & Feedback Submission Form */}
      <div className="max-w-3xl mx-auto rounded-3xl bg-slate-900/60 border border-slate-800 p-8 sm:p-10 space-y-6">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-blue-400">
            <MessageSquare className="w-3.5 h-3.5" /> Client Feedback Portal
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-display uppercase text-white tracking-tight">
            Share Your Studio Experience
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Have you trained with BluePeak Fitness Studio at Third Space Soho? Submit your review below.
          </p>
        </div>

        {reviewSubmitted ? (
          <div className="p-6 rounded-2xl bg-blue-950/40 border border-blue-800/60 text-center space-y-3">
            <CheckCircle2 className="w-10 h-10 text-blue-400 mx-auto" />
            <h3 className="text-xl font-bold font-display uppercase text-white">Thank You For Your Review</h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
              Your rating of {userReview.rating}/5 for {userReview.category} has been received and logged for the studio management team.
            </p>
            <button
              onClick={() => {
                setReviewSubmitted(false);
                setUserReview({ authorName: '', rating: 5, category: 'Personal Training', comment: '' });
              }}
              className="text-xs font-semibold text-blue-400 hover:text-blue-300 underline pt-2"
            >
              Submit another feedback entry
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmitReview} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Your Name / Initials
                </label>
                <input
                  type="text"
                  required
                  value={userReview.authorName}
                  onChange={(e) => setUserReview({ ...userReview, authorName: e.target.value })}
                  placeholder="e.g. Marcus L."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Studio Discipline
                </label>
                <select
                  value={userReview.category}
                  onChange={(e) => setUserReview({ ...userReview, category: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500"
                >
                  <option value="Personal Training">Personal Training</option>
                  <option value="Strength Training">Strength Training</option>
                  <option value="Cardio & Conditioning">Cardio & Conditioning</option>
                  <option value="Functional Training">Functional Training</option>
                  <option value="Fitness Coaching">Fitness Coaching</option>
                  <option value="Studio Experience">Studio Experience</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Your Rating (1 to 5 Stars)
              </label>
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setUserReview({ ...userReview, rating: star })}
                    className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-amber-400 transition-colors"
                    aria-label={`Select ${star} stars`}
                  >
                    <Star
                      className={`w-5 h-5 ${
                        star <= userReview.rating ? 'fill-amber-400 text-amber-400' : 'text-slate-600'
                      }`}
                    />
                  </button>
                ))}
                <span className="text-xs font-bold text-slate-300 ml-2">
                  {userReview.rating} / 5 Stars
                </span>
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Your Review
              </label>
              <textarea
                required
                rows={4}
                value={userReview.comment}
                onChange={(e) => setUserReview({ ...userReview, comment: e.target.value })}
                placeholder="Share your experience with the studio environment, coaching, or training disciplines..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500 resize-none"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                type="submit"
                className="py-3 px-6 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs uppercase tracking-wider font-display transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Review</span>
              </button>
              <a
                href={STUDIO_CONFIG.phoneTel}
                className="py-3 px-5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold uppercase tracking-wider font-display transition-colors flex items-center justify-center gap-2 border border-slate-700"
              >
                <Phone className="w-3.5 h-3.5 text-blue-400" />
                <span>Contact Studio: {STUDIO_CONFIG.phone}</span>
              </a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
