import React from 'react';
import { Calendar, Clock, MapPin, Heart, ChevronDown } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { WEDDING_DATA } from '../utils/calendar';

export const HeroSection: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden pt-12 pb-20 sm:py-24 bg-gradient-to-b from-[#FAF6F0] via-[#FDFBF7] to-[#FAF6F0] text-[#1C2D27]">
      {/* Delicate decorative background flourishes */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-40">
        <div
          className="absolute top-12 left-10 w-96 h-96 rounded-full bg-[#C5A059]/10 blur-3xl animate-pulse"
          style={{ animationDuration: '6s' }}
        />
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#0A3D2E]/5 blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        {/* Arabic Bismillah Calligraphy in Dark Emerald Green */}
        <ScrollReveal delayMs={100} direction="down">
          <div className="mb-4">
            <span className="font-arabic text-2xl sm:text-3xl md:text-4xl text-[#0A3D2E] tracking-widest block drop-shadow-xs font-semibold">
              {WEDDING_DATA.bismillahArabic}
            </span>
            <p className="text-[11px] sm:text-xs tracking-[0.25em] text-[#C5A059] uppercase font-sans mt-2 font-medium">
              {WEDDING_DATA.invitationIntro}
            </p>
          </div>
        </ScrollReveal>

        {/* Tagline Divider */}
        <ScrollReveal delayMs={200} direction="up">
          <div className="flex items-center justify-center gap-3 my-4">
            <span className="w-10 sm:w-16 h-[1px] bg-gradient-to-r from-transparent via-[#C5A059] to-transparent" />
            <span className="font-display text-xs sm:text-sm uppercase tracking-[0.3em] text-[#C5A059] font-semibold">
              Save The Dates
            </span>
            <span className="w-10 sm:w-16 h-[1px] bg-gradient-to-r from-transparent via-[#C5A059] to-transparent" />
          </div>
        </ScrollReveal>

        {/* Family Greeting */}
        <ScrollReveal delayMs={250} direction="up">
          <p className="max-w-xl text-sm sm:text-base text-[#5E7268] font-cormorant italic leading-relaxed mb-6 text-balance">
            “Together with their families, cordially invite you to celebrate the joyous union and wedding ceremonies of”
          </p>
        </ScrollReveal>

        {/* Main Couple Names in Dark Emerald with Gold Flourish */}
        <ScrollReveal delayMs={300} direction="zoom">
          <div className="my-2 sm:my-4">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-normal tracking-tight text-balance">
              <span className="text-[#0A3D2E] drop-shadow-xs block sm:inline">
                {WEDDING_DATA.groom}
              </span>
              <span className="font-script text-5xl sm:text-7xl md:text-8xl text-[#C5A059] font-normal mx-2 sm:mx-4 inline-block drop-shadow-xs">
                &amp;
              </span>
              <span className="text-[#0A3D2E] drop-shadow-xs block sm:inline">
                {WEDDING_DATA.bride}
              </span>
            </h1>
          </div>
        </ScrollReveal>

        {/* Ceremonies Highlight Badge Banner */}
        <ScrollReveal delayMs={450} direction="up">
          <div className="mt-8 mb-10 w-full max-w-3xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Event 1 Quick Banner: Barat */}
              <div className="bg-[#082E23] rounded-2xl p-6 border-2 border-[#D4AF37]/50 shadow-xl relative overflow-hidden group hover:border-[#D4AF37] transition-all duration-300 text-left">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-[#F3E5AB] font-semibold bg-[#125A44] px-2.5 py-0.5 rounded-full border border-[#D4AF37]/40">
                    Ceremony 1
                  </span>
                  <span className="text-xs font-serif text-[#DFC285]">Saturday</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-serif text-[#FFF2B2] font-semibold mb-1">
                  BARAT CEREMONY
                </h3>
                <div className="text-sm font-medium text-[#E6DEC8] flex items-center gap-1.5 mb-1">
                  <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>28th November 2026</span>
                </div>
                <div className="text-xs text-[#A89568] flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Sehra Bandi 12:00 PM · Departure 1:00 PM</span>
                </div>
              </div>

              {/* Event 2 Quick Banner: Walima */}
              <div className="bg-[#082E23] rounded-2xl p-6 border-2 border-[#D4AF37]/50 shadow-xl relative overflow-hidden group hover:border-[#D4AF37] transition-all duration-300 text-left">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-[#F3E5AB] font-semibold bg-[#125A44] px-2.5 py-0.5 rounded-full border border-[#D4AF37]/40">
                    Ceremony 2
                  </span>
                  <span className="text-xs font-serif text-[#DFC285]">Sunday</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-serif text-[#FFF2B2] font-semibold mb-1">
                  WALIMA CEREMONY
                </h3>
                <div className="text-sm font-medium text-[#E6DEC8] flex items-center gap-1.5 mb-1">
                  <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>29th November 2026</span>
                </div>
                <div className="text-xs text-[#A89568] flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Reception 12:00 PM · Lunch 1:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Action Buttons */}
        <ScrollReveal delayMs={500} direction="up">
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-10 sm:mb-14">
            <button
              onClick={() => scrollTo('events')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#0A3D2E] hover:bg-[#125A44] text-[#FAF6F0] text-sm font-semibold tracking-wider shadow-lg border border-[#C5A059]/60 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer active:scale-95 flex items-center justify-center gap-2 group"
            >
              <Calendar className="w-4 h-4 text-[#DFC285] group-hover:rotate-12 transition-transform duration-300" />
              <span>Event Details &amp; Timings</span>
            </button>

            <button
              onClick={() => scrollTo('rsvp')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white hover:bg-[#FAF6F0] text-[#0A3D2E] border-2 border-[#C5A059] text-sm font-semibold tracking-wider shadow-sm hover:border-[#0A3D2E] hover:-translate-y-0.5 hover:shadow-md transition-all duration-300 cursor-pointer active:scale-95 flex items-center justify-center gap-2 group"
            >
              <Heart className="w-4 h-4 text-[#C5A059] group-hover:scale-125 transition-transform duration-300 fill-transparent group-hover:fill-[#C5A059]" />
              <span>R.S.V.P &amp; Contacts</span>
            </button>

            <button
              onClick={() => scrollTo('venue')}
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#F4EFE6] hover:bg-[#EAE2D4] text-[#0A3D2E] border border-[#C5A059]/40 text-sm font-medium tracking-wider hover:-translate-y-0.5 transition-all duration-300 cursor-pointer active:scale-95 flex items-center justify-center gap-2"
            >
              <MapPin className="w-4 h-4 text-[#C5A059]" />
              <span>Venues &amp; Maps</span>
            </button>
          </div>
        </ScrollReveal>

        {/* Physical Invitation Card Showcase Container (Full Image Uncropped + Info Box Below) */}
        <ScrollReveal delayMs={600} direction="up">
          <div className="relative w-full max-w-md sm:max-w-lg mx-auto flex flex-col items-center">
            {/* Soft decorative glow behind showcase */}
            <div className="absolute -inset-2 bg-gradient-to-r from-[#C5A059]/20 via-[#0A3D2E]/15 to-[#C5A059]/20 rounded-3xl blur-xl opacity-70 pointer-events-none" />

            {/* Photo Container: displays 100% full vertical photo without top or bottom cropping */}
            <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-[#FAF7F2] transition-all duration-500 hover:shadow-[0_25px_50px_rgba(10,61,46,0.25)]">
              <img
                src="/assets/physical_card_invitation.jpg"
                alt="Physical wedding invitation card for Ahmad Khan & Ghazala Aslam"
                className="w-full h-auto object-contain block select-none"
                loading="eager"
              />
            </div>

            {/* Info Card Box: Positioned BELOW the image container so the entire physical card remains clearly visible */}
            <div className="w-full mt-4 sm:mt-5 p-4 sm:p-5 rounded-2xl bg-white/95 backdrop-blur-sm border-2 border-[#C5A059]/40 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left transition-all duration-300 hover:border-[#C5A059]">
              <div className="flex-1">
                <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.25em] text-[#C5A059] block font-semibold">
                  Barat &amp; Walima Ceremonies
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#0A3D2E] mt-0.5 tracking-tight">
                  Ahmad &amp; Ghazala · A &amp; G
                </h3>
                <p className="text-xs sm:text-sm text-[#5E7268] font-medium mt-1">
                  28th - 29th November 2026 • Lahore, Pakistan
                </p>
              </div>

              <button
                onClick={() => scrollTo('rsvp')}
                className="w-full sm:w-auto px-6 py-3 bg-[#0A3D2E] hover:bg-[#125A44] text-[#FAF6F0] text-xs sm:text-sm font-semibold rounded-full transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer whitespace-nowrap shadow-md border border-[#C5A059]/50 flex items-center justify-center gap-2"
              >
                <Heart className="w-4 h-4 text-[#DFC285] fill-[#DFC285]" />
                <span>Send RSVP</span>
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Scroll down indicator to countdown */}
        <button
          onClick={() => scrollTo('countdown')}
          aria-label="Scroll down to countdown"
          className="mt-12 text-[#5E7268] hover:text-[#0A3D2E] transition-colors cursor-pointer animate-bounce flex flex-col items-center gap-1 text-xs uppercase tracking-widest font-sans font-medium"
        >
          <span>Countdown</span>
          <ChevronDown className="w-4 h-4 text-[#C5A059]" />
        </button>
      </div>
    </section>
  );
};
