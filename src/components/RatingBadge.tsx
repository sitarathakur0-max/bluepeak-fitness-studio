import React from 'react';
import { Star, ShieldCheck } from 'lucide-react';
import { STUDIO_CONFIG } from '../config/studioConfig';

interface RatingBadgeProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'subtle' | 'metallic' | 'pill';
  onClick?: () => void;
  className?: string;
}

export const RatingBadge: React.FC<RatingBadgeProps> = ({
  size = 'md',
  variant = 'metallic',
  onClick,
  className = '',
}) => {
  const isClickable = Boolean(onClick);

  return (
    <div
      id="studio-rating-badge"
      onClick={onClick}
      role={isClickable ? 'button' : undefined}
      tabIndex={isClickable ? 0 : undefined}
      onKeyDown={(e) => {
        if (isClickable && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          onClick?.();
        }
      }}
      className={`inline-flex items-center gap-2.5 rounded-full transition-all duration-300 ${
        isClickable ? 'cursor-pointer hover:border-blue-500/50 hover:bg-slate-800/80' : ''
      } ${
        variant === 'metallic'
          ? 'metallic-badge px-3.5 py-1.5 backdrop-blur-md'
          : variant === 'pill'
          ? 'bg-blue-950/60 border border-blue-500/30 px-4 py-2'
          : 'bg-slate-900/60 border border-slate-800 px-3 py-1 text-slate-300'
      } ${className}`}
    >
      <div className="flex items-center gap-1 text-amber-400">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`${size === 'sm' ? 'w-3 h-3' : size === 'lg' ? 'w-4 h-4' : 'w-3.5 h-3.5'} fill-amber-400 text-amber-400`}
          />
        ))}
      </div>
      <div className="flex items-center gap-1.5 text-xs sm:text-sm font-medium tracking-wide">
        <span className="font-bold text-white tracking-tight">
          {STUDIO_CONFIG.rating.displayString}
        </span>
        <span className="text-slate-400 hidden sm:inline">|</span>
        <span className="text-slate-300">
          {STUDIO_CONFIG.rating.reviewCount.toLocaleString()} Reviews
        </span>
      </div>
      <ShieldCheck className="w-3.5 h-3.5 text-blue-400 opacity-80" aria-label="Verified rating" />
    </div>
  );
};
