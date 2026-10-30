import React from 'react';
import { MessageCircle, Phone, MapPin } from 'lucide-react';
import { EVENT_DETAILS } from '../utils/calendar';
import { ScrollReveal } from './ScrollReveal';

export const RsvpSection: React.FC = () => {
  const jumpToVenue = () => {
    const el = document.getElementById('venue');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="rsvp" className="py-20 sm:py-24 bg-[#FCF9F7] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal delayMs={100} direction="up">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-script text-2xl sm:text-3xl text-[#C5A059] block mb-2">
              Kindly respond
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#2B2B2B] font-normal tracking-tight mb-4">
              Will you join us?
            </h2>
            <div className="w-16 h-[1px] bg-[#C5A059] mx-auto mb-4" />
            <p className="text-sm sm:text-base text-[#7A686D] font-cormorant italic text-balance">
              “Your presence would mean the world to us. Please let us know if you will be joining us on our special day.”
            </p>
          </div>
        </ScrollReveal>

        {/* Quick Contact Action Cards with Staggered Scroll Reveals & Luxury Hover */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Card 1: WhatsApp */}
          <ScrollReveal delayMs={150} direction="up">
            <a
              href={`https://wa.me/${EVENT_DETAILS.whatsappNumber}?text=${encodeURIComponent(
                "Salam Soban & Tasmiya! Wishing you immense happiness and blessings. I'm reaching out to confirm our attendance for your wedding celebration on Sunday, 31 January 2027!"
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="h-full p-8 bg-white rounded-2xl border border-[#F0D5D5] shadow-xs hover:shadow-xl hover:border-[#25D366] hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center group cursor-pointer"
            >
              <div className="w-14 h-14 rounded-full bg-[#E8F8F0] text-[#128C7E] flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#128C7E] group-hover:text-white transition-all duration-300 shadow-sm">
                <MessageCircle className="w-7 h-7" />
              </div>
              <span className="text-xs uppercase tracking-widest text-[#7A686D] font-medium">
                Direct Message
              </span>
              <span className="text-lg font-serif font-semibold text-[#2B2B2B] mt-1 mb-1 group-hover:text-[#128C7E] transition-colors">
                WhatsApp RSVP
              </span>
              <span className="text-xs text-[#128C7E] font-medium bg-[#E8F8F0] px-3 py-1 rounded-full mt-2 border border-[#C6EEDB]">
                +92 300 8444966
              </span>
              <p className="text-xs text-[#7A686D] mt-3">
                Tap to send instant confirmation via WhatsApp
              </p>
            </a>
          </ScrollReveal>

          {/* Card 2: Phone Call */}
          <ScrollReveal delayMs={300} direction="up">
            <a
              href={`tel:${EVENT_DETAILS.phoneNumber}`}
              className="h-full p-8 bg-white rounded-2xl border border-[#F0D5D5] shadow-xs hover:shadow-xl hover:border-[#6B2D3E] hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center group cursor-pointer"
            >
              <div className="w-14 h-14 rounded-full bg-[#FDF6F6] text-[#6B2D3E] flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#6B2D3E] group-hover:text-white transition-all duration-300 shadow-sm">
                <Phone className="w-7 h-7" />
              </div>
              <span className="text-xs uppercase tracking-widest text-[#7A686D] font-medium">
                Phone Inquiries
              </span>
              <span className="text-lg font-serif font-semibold text-[#2B2B2B] mt-1 mb-1 group-hover:text-[#6B2D3E] transition-colors">
                Direct Call
              </span>
              <span className="text-xs text-[#6B2D3E] font-medium bg-[#FDF6F6] px-3 py-1 rounded-full mt-2 border border-[#F0D5D5]">
                0300 8444966
              </span>
              <p className="text-xs text-[#7A686D] mt-3">
                Tap for direct voice call assistance
              </p>
            </a>
          </ScrollReveal>

          {/* Card 3: Location Jump */}
          <ScrollReveal delayMs={450} direction="up">
            <button
              onClick={jumpToVenue}
              type="button"
              className="w-full h-full p-8 bg-white rounded-2xl border border-[#F0D5D5] shadow-xs hover:shadow-xl hover:border-[#C5A059] hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center cursor-pointer group"
            >
              <div className="w-14 h-14 rounded-full bg-[#FAF5F0] text-[#C5A059] flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#C5A059] group-hover:text-white transition-all duration-300 shadow-sm">
                <MapPin className="w-7 h-7" />
              </div>
              <span className="text-xs uppercase tracking-widest text-[#7A686D] font-medium">
                Event Location
              </span>
              <span className="text-lg font-serif font-semibold text-[#2B2B2B] mt-1 mb-1 group-hover:text-[#C5A059] transition-colors">
                Venue Details
              </span>
              <span className="text-xs text-[#7A686D] font-medium bg-[#FAF5F0] px-3 py-1 rounded-full mt-2 border border-[#F0D5D5]">
                Milano Complex, Lahore
              </span>
              <p className="text-xs text-[#7A686D] mt-3">
                View address, valet info &amp; Google Map
              </p>
            </button>
          </ScrollReveal>
        </div>

        {/* Footer Monogram: Elegant S & T motif divider with hover pulse */}
        <ScrollReveal delayMs={500} direction="zoom">
          <div className="mt-20 flex items-center justify-center gap-4">
            <div className="w-20 sm:w-32 h-[1px] bg-[#C5A059]/60" />
            <div className="w-12 h-12 rounded-full border border-[#C5A059] flex items-center justify-center bg-[#FAF5F0] text-[#6B2D3E] font-display text-sm font-bold shadow-xs hover:scale-110 transition-transform">
              S &amp; T
            </div>
            <div className="w-20 sm:w-32 h-[1px] bg-[#C5A059]/60" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
