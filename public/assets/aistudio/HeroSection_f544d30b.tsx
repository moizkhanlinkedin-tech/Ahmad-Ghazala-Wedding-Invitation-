import React from 'react';
import { Calendar, Clock, MapPin, Heart, ChevronDown } from 'lucide-react';
import heroEnvelopeImage from '../assets/images/hero_blush_envelope_1790241971067.jpg';
import { ScrollReveal } from './ScrollReveal';

export const HeroSection: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-16 sm:py-20 bg-gradient-to-b from-[#FCF9F7] via-[#FAF5F0] to-[#FCF9F7]">
      {/* Delicate decorative background flourishes */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-40">
        <div className="absolute top-12 left-10 w-72 h-72 rounded-full bg-[#F8E7E7]/60 blur-3xl animate-pulse" style={{ animationDuration: '6s' }} />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#DFC285]/20 blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        {/* Tagline */}
        <ScrollReveal delayMs={100} direction="down">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 sm:w-12 h-[1px] bg-[#C5A059]" />
            <p className="text-xs sm:text-sm uppercase tracking-[0.3em] font-medium text-[#7A686D]">
              Together with their families
            </p>
            <span className="w-8 sm:w-12 h-[1px] bg-[#C5A059]" />
          </div>
        </ScrollReveal>

        <ScrollReveal delayMs={200} direction="up">
          <span className="font-script text-2xl sm:text-3xl text-[#C5A059] mb-1 inline-block">
            Save the Date
          </span>
        </ScrollReveal>

        {/* Main Headline */}
        <ScrollReveal delayMs={300} direction="zoom">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-normal text-[#2B2B2B] tracking-tight mb-4 text-balance">
            Soban <span className="font-script text-5xl sm:text-7xl text-[#6B2D3E] font-normal">&amp;</span> Tasmiya
          </h1>
        </ScrollReveal>

        {/* Invitation Copy */}
        <ScrollReveal delayMs={400} direction="up">
          <p className="max-w-xl text-base sm:text-lg text-[#7A686D] font-cormorant italic leading-relaxed mb-6 sm:mb-8 text-balance">
            “request the pleasure of your company as they exchange vows and begin their life together.”
          </p>
        </ScrollReveal>

        {/* Date Display */}
        <ScrollReveal delayMs={500} direction="up">
          <div className="inline-flex flex-col items-center mb-8 sm:mb-10">
            <div className="text-xl sm:text-2xl md:text-3xl font-serif text-[#6B2D3E] tracking-wide font-medium">
              Sunday, 31 January 2027
            </div>
            <div className="w-24 h-[1px] bg-[#C5A059] my-2" />
            
            {/* Quick detail metadata row with clean unboxed typographic separators */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm text-[#7A686D] font-sans">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#6B2D3E]" />
                Milano Event Complex, Lahore
              </span>
              <span aria-hidden="true" className="text-[#C5A059]">·</span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#6B2D3E]" />
                6:00 PM – 10:00 PM PKT
              </span>
            </div>
          </div>
        </ScrollReveal>

        {/* CTA Buttons */}
        <ScrollReveal delayMs={600} direction="up">
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-12 sm:mb-16">
            <button
              onClick={() => scrollTo('countdown')}
              className="w-full sm:w-auto px-7 py-3 rounded-full bg-[#6B2D3E] hover:bg-[#501F2D] text-[#FAF5F0] text-sm font-medium tracking-wider shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 cursor-pointer active:scale-95 flex items-center justify-center gap-2 group"
            >
              <Calendar className="w-4 h-4 text-[#DFC285] group-hover:rotate-12 transition-transform duration-300" />
              <span>Countdown to the Day</span>
            </button>
            
            <button
              onClick={() => scrollTo('rsvp')}
              className="w-full sm:w-auto px-7 py-3 rounded-full bg-white hover:bg-[#F8E7E7] text-[#6B2D3E] border border-[#F0D5D5] text-sm font-medium tracking-wider shadow-sm hover:border-[#6B2D3E]/40 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300 cursor-pointer active:scale-95 flex items-center justify-center gap-2 group"
            >
              <Heart className="w-4 h-4 text-[#6B2D3E] group-hover:scale-125 transition-transform duration-300 fill-transparent group-hover:fill-[#6B2D3E]" />
              <span>RSVP to Celebrate</span>
            </button>
          </div>
        </ScrollReveal>

        {/* Hero Visual: Floating preview image of blush pink envelope */}
        <ScrollReveal delayMs={700} direction="zoom">
          <div className="relative w-full max-w-2xl group cursor-pointer">
            {/* Soft decorative floating glow on hover */}
            <div className="absolute -inset-2 bg-gradient-to-r from-[#DFC285]/20 via-[#6B2D3E]/15 to-[#DFC285]/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_30px_60px_-15px_rgba(107,45,62,0.3)]">
              <img
                src={heroEnvelopeImage}
                alt="Blush pink luxury wedding invitation envelope featuring monogram S & T for Soban and Tasmiya"
                referrerPolicy="no-referrer"
                className="w-full aspect-[4/3] object-cover object-center filter saturate-[1.05] transition-transform duration-700 group-hover:scale-105"
              />
              {/* Elegant glass overlay badge with monogram */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 backdrop-blur-md bg-white/90 p-4 rounded-xl border border-white/60 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-3 text-left transition-all duration-300 group-hover:bg-white/95">
                <div>
                  <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-[#C5A059] block">
                    Nikkah Ceremony
                  </span>
                  <span className="text-lg font-serif font-semibold text-[#6B2D3E]">
                    Soban &amp; Tasmiya · S &amp; T
                  </span>
                  <p className="text-xs text-[#7A686D]">
                    Sunday, 31 . 01 . 2027 · Lahore, Pakistan
                  </p>
                </div>
                <button
                  onClick={() => scrollTo('rsvp')}
                  className="w-full sm:w-auto px-4 py-2 bg-[#6B2D3E] text-white text-xs font-medium rounded-lg hover:bg-[#501F2D] transition-all hover:scale-105 cursor-pointer whitespace-nowrap shadow-sm"
                >
                  Send RSVP
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Subtle scroll down indicator */}
        <button
          onClick={() => scrollTo('countdown')}
          aria-label="Scroll down to countdown"
          className="mt-12 text-[#7A686D] hover:text-[#6B2D3E] transition-colors cursor-pointer animate-bounce flex flex-col items-center gap-1 text-xs uppercase tracking-widest"
        >
          <span>Discover</span>
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
