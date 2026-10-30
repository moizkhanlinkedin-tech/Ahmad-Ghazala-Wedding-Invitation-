import React from 'react';
import { Calendar, Sparkles, Utensils, Heart, Crown, Music, MapPin } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { WEDDING_DATA } from '../utils/calendar';

export const EventDetailsSection: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const barat = WEDDING_DATA.events.barat;
  const walima = WEDDING_DATA.events.walima;

  return (
    <section id="events" className="py-20 sm:py-24 bg-[#FAF6F0] relative text-[#1C2D27]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal delayMs={100} direction="up">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-script text-3xl sm:text-4xl text-[#C5A059] block mb-2">
              Two Blessed Ceremonies
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#0A3D2E] font-normal tracking-tight mb-4">
              Wedding Celebrations
            </h2>
            <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-[#C5A059] to-transparent mx-auto mb-4" />
            <p className="text-sm sm:text-base text-[#5E7268] font-cormorant italic text-balance">
              “We invite you to grace the auspicious occasions of Barat and Walima with your warm presence and prayers.”
            </p>
          </div>
        </ScrollReveal>

        {/* The Two Main Ceremonies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Ceremony 1: BARAT CEREMONY */}
          <ScrollReveal delayMs={200} direction="up">
            <div className="h-full bg-[#082E23] rounded-3xl p-6 sm:p-9 border-2 border-[#D4AF37]/50 shadow-2xl flex flex-col justify-between relative group hover:border-[#D4AF37] transition-all duration-300">
              {/* Decorative Corner Ornaments */}
              <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-[#D4AF37]/70 group-hover:scale-110 transition-transform" />
              <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-[#D4AF37]/70 group-hover:scale-110 transition-transform" />
              <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-[#D4AF37]/70 group-hover:scale-110 transition-transform" />
              <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-[#D4AF37]/70 group-hover:scale-110 transition-transform" />

              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#125A44] border border-[#D4AF37]/40 text-[#F3E5AB] text-xs font-sans uppercase tracking-widest font-semibold">
                    <Crown className="w-3.5 h-3.5 text-[#D4AF37]" />
                    Event 1
                  </span>
                  <span className="text-xs uppercase tracking-widest text-[#DFC285] font-sans font-medium">
                    Saturday
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif text-[#FFF2B2] font-semibold mb-2 tracking-wide">
                  BARAT CEREMONY
                </h3>

                <div className="flex items-center gap-2 text-sm text-[#E6DEC8] font-serif mb-6">
                  <Calendar className="w-4 h-4 text-[#D4AF37]" />
                  <span className="font-medium text-[#F3E5AB]">{barat.dateDisplay}</span>
                </div>

                <div className="w-full h-[1px] bg-gradient-to-r from-[#D4AF37]/40 via-[#D4AF37]/10 to-transparent mb-6" />

                {/* Key Timings Schedule */}
                <div className="space-y-3.5 mb-6">
                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#031C14]/80 border border-[#D4AF37]/30">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-[#125A44] text-[#D4AF37] flex items-center justify-center shrink-0">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-serif font-medium text-white">
                          Sehra Bandi
                        </h4>
                        <p className="text-[11px] text-[#A89568]">Traditional groom turban &amp; blessings</p>
                      </div>
                    </div>
                    <span className="text-xs sm:text-sm font-sans font-bold text-[#F3E5AB] bg-[#0A3D2E] px-3 py-1 rounded-md border border-[#D4AF37]/40">
                      12:00 PM
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#031C14]/80 border border-[#D4AF37]/30">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-[#125A44] text-[#D4AF37] flex items-center justify-center shrink-0">
                        <Heart className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-serif font-medium text-white">
                          Departure of Barat
                        </h4>
                        <p className="text-[11px] text-[#A89568]">Procession departs for the bride's venue</p>
                      </div>
                    </div>
                    <span className="text-xs sm:text-sm font-sans font-bold text-[#F3E5AB] bg-[#0A3D2E] px-3 py-1 rounded-md border border-[#D4AF37]/40">
                      1:00 PM
                    </span>
                  </div>
                </div>

                {/* Venue Details */}
                <div className="p-4 rounded-xl bg-[#031C14]/60 border border-[#D4AF37]/25 mb-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-[#DFC285] font-semibold block">
                        Assembly Venue
                      </span>
                      <h4 className="text-sm sm:text-base font-serif font-medium text-white mt-0.5">
                        {barat.venueName}
                      </h4>
                      <p className="text-xs text-[#D1C7B7] mt-1 leading-relaxed">
                        {barat.venueAddress}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="pt-2">
                <button
                  onClick={() => scrollTo('venue')}
                  className="w-full py-3 px-5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B89430] hover:brightness-110 text-[#062C20] text-xs sm:text-sm font-semibold tracking-wider transition-all duration-200 cursor-pointer shadow-md flex items-center justify-center gap-2"
                >
                  <MapPin className="w-4 h-4" />
                  <span>View Barat Location &amp; Directions</span>
                </button>
              </div>
            </div>
          </ScrollReveal>

          {/* Ceremony 2: WALIMA CEREMONY */}
          <ScrollReveal delayMs={350} direction="up">
            <div className="h-full bg-[#082E23] rounded-3xl p-6 sm:p-9 border-2 border-[#D4AF37]/50 shadow-2xl flex flex-col justify-between relative group hover:border-[#D4AF37] transition-all duration-300">
              {/* Decorative Corner Ornaments */}
              <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-[#D4AF37]/70 group-hover:scale-110 transition-transform" />
              <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-[#D4AF37]/70 group-hover:scale-110 transition-transform" />
              <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-[#D4AF37]/70 group-hover:scale-110 transition-transform" />
              <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-[#D4AF37]/70 group-hover:scale-110 transition-transform" />

              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#125A44] border border-[#D4AF37]/40 text-[#F3E5AB] text-xs font-sans uppercase tracking-widest font-semibold">
                    <Crown className="w-3.5 h-3.5 text-[#D4AF37]" />
                    Event 2
                  </span>
                  <span className="text-xs uppercase tracking-widest text-[#DFC285] font-sans font-medium">
                    Sunday
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif text-[#FFF2B2] font-semibold mb-2 tracking-wide">
                  WALIMA CEREMONY
                </h3>

                <div className="flex items-center gap-2 text-sm text-[#E6DEC8] font-serif mb-6">
                  <Calendar className="w-4 h-4 text-[#D4AF37]" />
                  <span className="font-medium text-[#F3E5AB]">{walima.dateDisplay}</span>
                </div>

                <div className="w-full h-[1px] bg-gradient-to-r from-[#D4AF37]/40 via-[#D4AF37]/10 to-transparent mb-6" />

                {/* Key Timings Schedule */}
                <div className="space-y-3.5 mb-6">
                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#031C14]/80 border border-[#D4AF37]/30">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-[#125A44] text-[#D4AF37] flex items-center justify-center shrink-0">
                        <Music className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-serif font-medium text-white">
                          Guest Reception
                        </h4>
                        <p className="text-[11px] text-[#A89568]">Welcoming guests with refreshments</p>
                      </div>
                    </div>
                    <span className="text-xs sm:text-sm font-sans font-bold text-[#F3E5AB] bg-[#0A3D2E] px-3 py-1 rounded-md border border-[#D4AF37]/40">
                      12:00 PM
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#031C14]/80 border border-[#D4AF37]/30">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-[#125A44] text-[#D4AF37] flex items-center justify-center shrink-0">
                        <Utensils className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-serif font-medium text-white">
                          Celebratory Lunch
                        </h4>
                        <p className="text-[11px] text-[#A89568]">Grand multi-course feast &amp; desserts</p>
                      </div>
                    </div>
                    <span className="text-xs sm:text-sm font-sans font-bold text-[#F3E5AB] bg-[#0A3D2E] px-3 py-1 rounded-md border border-[#D4AF37]/40">
                      1:00 PM
                    </span>
                  </div>
                </div>

                {/* Venue Details */}
                <div className="p-4 rounded-xl bg-[#031C14]/60 border border-[#D4AF37]/25 mb-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-[#DFC285] font-semibold block">
                        Banquet Hall Venue
                      </span>
                      <h4 className="text-sm sm:text-base font-serif font-medium text-white mt-0.5">
                        {walima.venueName}
                      </h4>
                      <p className="text-xs text-[#D1C7B7] mt-1 leading-relaxed">
                        {walima.venueAddress}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="pt-2">
                <button
                  onClick={() => scrollTo('venue')}
                  className="w-full py-3 px-5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B89430] hover:brightness-110 text-[#062C20] text-xs sm:text-sm font-semibold tracking-wider transition-all duration-200 cursor-pointer shadow-md flex items-center justify-center gap-2"
                >
                  <MapPin className="w-4 h-4" />
                  <span>View Walima Map &amp; Navigation</span>
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Traditional Blessing Note */}
        <ScrollReveal delayMs={500} direction="zoom">
          <div className="max-w-3xl mx-auto text-center p-8 rounded-2xl bg-white border-2 border-[#C5A059]/40 shadow-md">
            <span className="font-script text-2xl sm:text-3xl text-[#C5A059] block mb-2">
              Barakallahu lakuma wa baraka alaykuma
            </span>
            <p className="text-sm sm:text-base text-[#5E7268] font-cormorant italic">
              “May Allah bless you and shower His blessings upon you and bring you together in goodness.”
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
