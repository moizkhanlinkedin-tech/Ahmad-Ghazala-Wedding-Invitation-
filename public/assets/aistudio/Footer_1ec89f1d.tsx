import React from 'react';
import { Heart, ArrowUp, Mail, MapPin, Calendar, Clock } from 'lucide-react';

interface FooterProps {
  onReopenOverlay: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onReopenOverlay }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#FAF5F0] border-t border-[#F0D5D5] py-16 text-center text-[#7A686D]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col items-center">
        {/* Monogram Seal */}
        <div className="w-14 h-14 rounded-full border border-[#C5A059] flex items-center justify-center bg-white text-[#6B2D3E] font-display text-base font-bold shadow-xs mb-4">
          S &amp; T
        </div>

        {/* Couple Names */}
        <h3 className="text-2xl sm:text-3xl font-serif text-[#2B2B2B] tracking-wide mb-2">
          Soban &amp; Tasmiya
        </h3>

        {/* Date, Time, Location */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm text-[#7A686D] mb-6">
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-[#6B2D3E]" />
            Sunday, 31 January 2027
          </span>
          <span aria-hidden="true" className="text-[#C5A059]">·</span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#6B2D3E]" />
            6:00 PM – 10:00 PM PKT
          </span>
          <span aria-hidden="true" className="text-[#C5A059]">·</span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#6B2D3E]" />
            Milano Event Complex, Lahore
          </span>
        </div>

        {/* Re-open envelope unboxing & back to top */}
        <div className="flex items-center justify-center gap-4 mb-8 text-xs font-medium">
          <button
            onClick={onReopenOverlay}
            className="inline-flex items-center gap-1.5 text-[#6B2D3E] hover:text-[#501F2D] transition-colors cursor-pointer"
          >
            <Mail className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Re-open Invitation Envelope</span>
          </button>
          <span className="text-[#F0D5D5]">•</span>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-[#7A686D] hover:text-[#2B2B2B] transition-colors cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="w-24 h-[1px] bg-[#F0D5D5] mb-6" />

        {/* Copyright */}
        <p className="text-xs text-[#7A686D]/90 flex items-center justify-center gap-1.5">
          <span>© 2027 Soban &amp; Tasmiya</span>
          <span>·</span>
          <span>With love from Lahore</span>
          <Heart className="w-3.5 h-3.5 text-[#6B2D3E] fill-[#6B2D3E]" />
        </p>
      </div>
    </footer>
  );
};
