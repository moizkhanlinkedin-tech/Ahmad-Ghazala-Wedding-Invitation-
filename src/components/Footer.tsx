import React from 'react';
import { Heart, ArrowUp, Mail, MapPin, Calendar } from 'lucide-react';
import { WEDDING_DATA } from '../utils/calendar';

interface FooterProps {
  onReopenOverlay: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onReopenOverlay }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#EFE8DC] border-t border-[#DECDBD] py-16 text-center text-[#5E7268]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col items-center">
        {/* Monogram Seal */}
        <div className="w-14 h-14 rounded-full border-2 border-[#C5A059] flex items-center justify-center bg-[#0A3D2E] text-[#F3E5AB] font-display text-base font-bold shadow-md mb-4">
          {WEDDING_DATA.monogram}
        </div>

        {/* Couple Names */}
        <h3 className="text-2xl sm:text-3xl font-serif text-[#0A3D2E] tracking-wide mb-2 font-semibold">
          {WEDDING_DATA.groom} &amp; {WEDDING_DATA.bride}
        </h3>

        <p className="text-xs sm:text-sm font-sans uppercase tracking-[0.25em] text-[#C5A059] mb-6 font-semibold">
          Wedding Celebrations · Lahore Cantt, Pakistan
        </p>

        {/* Date, Time, Location Summary */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-[#5E7268] mb-8">
          <span className="inline-flex items-center gap-1.5 text-[#2C3E35] font-medium">
            <Calendar className="w-3.5 h-3.5 text-[#0A3D2E]" />
            Barat: Sat, 28 Nov 2026 (12:00 PM)
          </span>
          <span aria-hidden="true" className="text-[#C5A059]">•</span>
          <span className="inline-flex items-center gap-1.5 text-[#2C3E35] font-medium">
            <Calendar className="w-3.5 h-3.5 text-[#0A3D2E]" />
            Walima: Sun, 29 Nov 2026 (12:00 PM)
          </span>
          <span aria-hidden="true" className="text-[#C5A059]">•</span>
          <span className="inline-flex items-center gap-1.5 text-[#2C3E35] font-medium">
            <MapPin className="w-3.5 h-3.5 text-[#0A3D2E]" />
            Bedian Road, Lahore Cantt.
          </span>
        </div>

        {/* Re-open envelope & Back to top actions */}
        <div className="flex items-center justify-center gap-6 mb-8 text-xs font-semibold">
          <button
            onClick={onReopenOverlay}
            className="inline-flex items-center gap-2 text-[#0A3D2E] hover:text-[#125A44] transition-colors cursor-pointer py-2 px-4 rounded-full bg-white border border-[#C5A059]/60 shadow-xs hover:border-[#0A3D2E] hover:shadow-sm"
          >
            <Mail className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Re-open Invitation Envelope</span>
          </button>

          <span className="text-[#C5A059]/40">•</span>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-[#5E7268] hover:text-[#0A3D2E] transition-colors cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#C5A059]" />
          </button>
        </div>

        <div className="w-24 h-[1px] bg-[#C5A059]/40 mb-6" />

        {/* Closing Greetings */}
        <p className="text-xs text-[#5E7268] flex items-center justify-center gap-1.5">
          <span>© 2026 {WEDDING_DATA.groom} &amp; {WEDDING_DATA.bride}</span>
          <span>·</span>
          <span>With love &amp; prayers from Lahore</span>
          <Heart className="w-3.5 h-3.5 text-[#0A3D2E] fill-[#0A3D2E]" />
        </p>
      </div>
    </footer>
  );
};
