import React from 'react';
import { MessageCircle, Phone, Users } from 'lucide-react';
import { WEDDING_DATA } from '../utils/calendar';
import { ScrollReveal } from './ScrollReveal';

export const RsvpSection: React.FC = () => {
  return (
    <section id="rsvp" className="py-20 sm:py-24 bg-[#FAF6F0] relative text-[#1C2D27]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal delayMs={100} direction="up">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-script text-3xl sm:text-4xl text-[#C5A059] block mb-2">
              Kindly Honour Us
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#0A3D2E] font-normal tracking-tight mb-4">
              R.S.V.P &amp; Inquiries
            </h2>
            <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-[#C5A059] to-transparent mx-auto mb-4" />
            <p className="text-sm sm:text-base text-[#5E7268] font-cormorant italic text-balance">
              “Your presence and gracious prayers will be our greatest gift as we embark on this sacred journey.”
            </p>
          </div>
        </ScrollReveal>

        {/* Grand R.S.V.P Honorees Announcement Card */}
        <ScrollReveal delayMs={200} direction="zoom">
          <div className="bg-white rounded-3xl p-8 sm:p-10 border-2 border-[#C5A059]/50 shadow-xl text-center max-w-3xl mx-auto mb-12 relative overflow-hidden group">
            {/* Corner Filigrees */}
            <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-[#C5A059] group-hover:scale-110 transition-transform" />
            <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-[#C5A059] group-hover:scale-110 transition-transform" />
            <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-[#C5A059] group-hover:scale-110 transition-transform" />
            <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-[#C5A059] group-hover:scale-110 transition-transform" />

            <div className="w-14 h-14 rounded-full bg-[#FAF6F0] border-2 border-[#C5A059] flex items-center justify-center text-[#0A3D2E] mx-auto mb-4 shadow-sm">
              <Users className="w-7 h-7 text-[#0A3D2E]" />
            </div>

            <span className="text-xs uppercase tracking-[0.3em] text-[#C5A059] font-sans font-semibold block mb-2">
              With Best Compliments &amp; Warm Welcomes
            </span>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#0A3D2E] font-semibold mb-3 tracking-wide">
              R.S.V.P
            </h3>

            <p className="text-lg sm:text-xl md:text-2xl font-serif text-[#1C2D27] font-semibold leading-relaxed max-w-2xl mx-auto">
              {WEDDING_DATA.rsvpTitle}
            </p>

            <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#C5A059] to-transparent mx-auto my-5" />

            <p className="text-xs sm:text-sm text-[#5E7268] font-cormorant italic">
              Ahmad Khan &amp; Ghazala Aslam Wedding · Lahore Cantt
            </p>
          </div>
        </ScrollReveal>

        {/* Contact Numbers Direct Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-16">
          {/* Contact 1: 0300-4738429 */}
          <ScrollReveal delayMs={300} direction="up">
            <div className="h-full p-6 sm:p-8 bg-white rounded-2xl border-2 border-[#C5A059]/40 shadow-lg hover:border-[#0A3D2E] hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center group">
              <div className="w-14 h-14 rounded-full bg-[#FAF6F0] text-[#0A3D2E] border-2 border-[#C5A059]/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-all shadow-sm">
                <Phone className="w-6 h-6 text-[#0A3D2E]" />
              </div>

              <span className="text-xs uppercase tracking-widest text-[#C5A059] font-sans font-semibold">
                Contact &amp; RSVP 1
              </span>

              <span className="text-2xl font-serif font-bold text-[#0A3D2E] mt-1 mb-2 tracking-wide">
                0300-4738429
              </span>

              <p className="text-xs text-[#5E7268] mb-6">
                Direct phone inquiries &amp; instant WhatsApp confirmation
              </p>

              <div className="w-full grid grid-cols-2 gap-3 mt-auto">
                <a
                  href="tel:03004738429"
                  className="py-2.5 px-3 rounded-full bg-[#0A3D2E] hover:bg-[#125A44] text-[#FAF6F0] text-xs font-semibold tracking-wider flex items-center justify-center gap-1.5 transition-all shadow-sm"
                >
                  <Phone className="w-3.5 h-3.5 text-[#DFC285]" />
                  <span>Call Now</span>
                </a>

                <a
                  href={`https://wa.me/923004738429?text=${encodeURIComponent(
                    "Salam! Wishing immense happiness and blessings to Ahmad Khan & Ghazala Aslam. I am reaching out to confirm attendance for the wedding celebrations on 28th & 29th November 2026."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-full bg-[#1B8061] hover:bg-[#209A75] text-white text-xs font-semibold tracking-wider flex items-center justify-center gap-1.5 transition-all shadow-sm"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Contact 2: 0307-8866645 */}
          <ScrollReveal delayMs={450} direction="up">
            <div className="h-full p-6 sm:p-8 bg-white rounded-2xl border-2 border-[#C5A059]/40 shadow-lg hover:border-[#0A3D2E] hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center group">
              <div className="w-14 h-14 rounded-full bg-[#FAF6F0] text-[#0A3D2E] border-2 border-[#C5A059]/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-all shadow-sm">
                <Phone className="w-6 h-6 text-[#0A3D2E]" />
              </div>

              <span className="text-xs uppercase tracking-widest text-[#C5A059] font-sans font-semibold">
                Contact &amp; RSVP 2
              </span>

              <span className="text-2xl font-serif font-bold text-[#0A3D2E] mt-1 mb-2 tracking-wide">
                0307-8866645
              </span>

              <p className="text-xs text-[#5E7268] mb-6">
                Direct phone inquiries &amp; instant WhatsApp confirmation
              </p>

              <div className="w-full grid grid-cols-2 gap-3 mt-auto">
                <a
                  href="tel:03078866645"
                  className="py-2.5 px-3 rounded-full bg-[#0A3D2E] hover:bg-[#125A44] text-[#FAF6F0] text-xs font-semibold tracking-wider flex items-center justify-center gap-1.5 transition-all shadow-sm"
                >
                  <Phone className="w-3.5 h-3.5 text-[#DFC285]" />
                  <span>Call Now</span>
                </a>

                <a
                  href={`https://wa.me/923078866645?text=${encodeURIComponent(
                    "Salam! Wishing immense happiness and blessings to Ahmad Khan & Ghazala Aslam. I am reaching out to confirm attendance for the wedding celebrations on 28th & 29th November 2026."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-full bg-[#1B8061] hover:bg-[#209A75] text-white text-xs font-semibold tracking-wider flex items-center justify-center gap-1.5 transition-all shadow-sm"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Monogram Seal Divider */}
        <ScrollReveal delayMs={550} direction="zoom">
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 sm:w-28 h-[1px] bg-[#C5A059]/50" />
            <div className="w-12 h-12 rounded-full border-2 border-[#C5A059] flex items-center justify-center bg-[#0A3D2E] text-[#F3E5AB] font-display text-sm font-bold shadow-md hover:scale-110 transition-transform">
              {WEDDING_DATA.monogram}
            </div>
            <div className="w-16 sm:w-28 h-[1px] bg-[#C5A059]/50" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
