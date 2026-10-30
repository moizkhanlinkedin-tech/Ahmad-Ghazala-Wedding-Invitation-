import React, { useState } from 'react';
import { Sparkles, Heart } from 'lucide-react';
import waxSealImage from '../assets/images/wax_seal_isolated_1790243849550.jpg';

interface EnvelopeOverlayProps {
  isOpen: boolean;
  onOpen: () => void;
  onSealClick?: () => void;
}

export const EnvelopeOverlay: React.FC<EnvelopeOverlayProps> = ({ isOpen, onOpen, onSealClick }) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleSealClick = () => {
    if (isOpening) return;

    // Trigger background audio immediately on user click
    if (onSealClick) {
      onSealClick();
    }

    setIsOpening(true);

    // Smooth direct fade transition to main interface
    setTimeout(() => {
      onOpen();
      setIsOpening(false);
    }, 550);
  };

  if (isOpen) {
    return null;
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Wedding Invitation Envelope"
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-600 ease-out bg-[#180A0E]/95 backdrop-blur-md ${
        isOpening ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Ambient background soft glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#6B2D3E]/30 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: '4s' }}
        />
        <div className="absolute bottom-10 left-1/3 w-[380px] h-[380px] bg-[#C5A059]/20 rounded-full blur-3xl" />
      </div>

      <div className="relative w-full max-w-lg mx-auto flex flex-col items-center">
        {/* The Clean Luxury Envelope Graphic */}
        <div className="relative w-full aspect-[16/11] max-w-md bg-[#FAF4EF] rounded-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)] border border-[#DFC8C8] overflow-hidden flex items-center justify-center">
          {/* Paper Texture and Internal Pocket */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#FFFDFD] via-[#FDF8F7] to-[#F5ECE8]">
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 440 300"
              preserveAspectRatio="none"
            >
              <defs>
                <filter id="flapShadow" x="-10%" y="-10%" width="120%" height="130%">
                  <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#3F1420" floodOpacity="0.25" />
                </filter>
                <linearGradient id="flapBg" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#FFFDFD" />
                  <stop offset="100%" stopColor="#EDE0DC" />
                </linearGradient>
              </defs>

              {/* Bottom and side pocket folds */}
              <polygon points="0,300 220,165 440,300" fill="#EAE0DC" opacity="0.7" stroke="#DEC5C0" strokeWidth="1" />
              <polygon points="0,0 0,300 220,165" fill="#F4ECE9" opacity="0.55" stroke="#DEC5C0" strokeWidth="0.8" />
              <polygon points="440,0 440,300 220,165" fill="#F0E5E1" opacity="0.65" stroke="#DEC5C0" strokeWidth="0.8" />

              {/* Top envelope flap pointing down to center seal */}
              <polygon
                points="0,0 440,0 220,172"
                fill="url(#flapBg)"
                stroke="#D9BEB9"
                strokeWidth="1.2"
                filter="url(#flapShadow)"
              />
              <polyline points="0,0 220,172 440,0" fill="none" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.75" />
            </svg>
          </div>

          {/* Authentic Real Wax Stamp Seal Button */}
          <button
            onClick={handleSealClick}
            type="button"
            aria-label="Tap the wax seal to open wedding invitation"
            className={`group relative z-30 w-32 h-32 sm:w-36 sm:h-36 cursor-pointer transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#C5A059]/40 rounded-full flex items-center justify-center select-none ${
              isOpening ? 'scale-110 opacity-75' : 'hover:scale-105 active:scale-95 animate-seal-pulse'
            }`}
          >
            {/* Deep organic cast shadow */}
            <div className="absolute inset-2 rounded-full bg-[#2A0E15]/50 blur-md transform translate-y-3 pointer-events-none" />

            {/* Realistic wax seal disc */}
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden shadow-2xl border border-[#9A6B75]/30">
              <img
                src={waxSealImage}
                alt="Artisanal dusty rose wax seal stamped with S & T monogram"
                className="w-full h-full object-cover rounded-full filter contrast-[1.08] brightness-[0.98] transition-transform duration-300 group-hover:scale-105"
              />
              {/* Subtle tactile wax sheen */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/10 to-white/20 pointer-events-none mix-blend-overlay" />
            </div>
          </button>
        </div>

        {/* Interaction callout button underneath the envelope */}
        <div
          className={`mt-8 text-center flex flex-col items-center gap-2 transition-opacity duration-300 ${
            isOpening ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
        >
          <button
            onClick={handleSealClick}
            type="button"
            className="flex items-center gap-2.5 px-7 py-3 rounded-full bg-[#6B2D3E] hover:bg-[#83394D] text-[#FAF5F0] text-sm font-medium tracking-wide shadow-xl border border-[#DFC285]/40 transition-all duration-200 cursor-pointer active:scale-95 group"
          >
            <Sparkles className="w-4 h-4 text-[#DFC285] animate-spin" style={{ animationDuration: '6s' }} />
            <span className="group-hover:tracking-wider transition-all">Tap the seal to open</span>
            <Heart className="w-4 h-4 text-[#DFC285] fill-[#DFC285]" />
          </button>
          <span className="text-[11px] text-[#DFC285]/75 tracking-widest uppercase font-sans">
            A digital unboxing experience
          </span>
        </div>
      </div>
    </div>
  );
};
