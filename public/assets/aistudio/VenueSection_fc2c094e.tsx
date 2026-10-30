import React, { useState } from 'react';
import { MapPin, Navigation, Car, Copy, Check, ExternalLink } from 'lucide-react';
import venuePhoto from '../assets/images/wedding_venue_milano_1790241989491.jpg';
import { EVENT_DETAILS } from '../utils/calendar';
import { ScrollReveal } from './ScrollReveal';

export const VenueSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(EVENT_DETAILS.location);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section id="venue" className="py-20 sm:py-24 bg-[#FAF5F0] border-t border-[#F0D5D5]/80 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal delayMs={100} direction="up">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-script text-2xl sm:text-3xl text-[#C5A059] block mb-2">
              Find your way
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#2B2B2B] font-normal tracking-tight mb-4">
              The Venue
            </h2>
            <div className="w-16 h-[1px] bg-[#C5A059] mx-auto mb-4" />
            <p className="text-sm sm:text-base text-[#7A686D] font-cormorant italic">
              Milano Event Complex — an exquisite setting for an unforgettable evening in Lahore.
            </p>
          </div>
        </ScrollReveal>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Venue Image Showcase */}
          <div className="lg:col-span-7">
            <ScrollReveal delayMs={200} direction="left">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-white group hover:shadow-2xl transition-all duration-500">
                <img
                  src={venuePhoto}
                  alt="Milano Event Complex banquet hall in Lahore with crystal chandeliers and wedding decor"
                  referrerPolicy="no-referrer"
                  className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none group-hover:from-black/80 transition-all duration-300" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="text-[11px] uppercase tracking-widest text-[#DFC285] font-sans font-medium block mb-1">
                    Grand Reception Hall
                  </span>
                  <h4 className="text-xl sm:text-2xl font-serif font-semibold">
                    Milano Event Complex
                  </h4>
                  <p className="text-xs text-white/80 font-light mt-0.5">
                    Lahore, Punjab, Pakistan
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Venue Info Box */}
          <div className="lg:col-span-5">
            <ScrollReveal delayMs={350} direction="right">
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#F0D5D5] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.2em] text-[#C5A059] font-medium mb-3">
                    <MapPin className="w-3.5 h-3.5 text-[#6B2D3E]" />
                    Destination &amp; Parking
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-serif text-[#2B2B2B] font-semibold mb-2">
                    Milano Event Complex
                  </h3>

                  <p className="text-sm sm:text-base text-[#6B2D3E] font-medium mb-4">
                    Lahore, Punjab, Pakistan
                  </p>

                  <div className="p-4 rounded-xl bg-[#FDF6F6] border border-[#F0D5D5] mb-6 flex items-start gap-3 hover:border-[#6B2D3E]/30 transition-colors">
                    <Car className="w-5 h-5 text-[#6B2D3E] shrink-0 mt-0.5 animate-pulse" />
                    <div>
                      <h5 className="text-xs uppercase tracking-wider font-semibold text-[#2B2B2B]">
                        Key Guest Info
                      </h5>
                      <p className="text-xs text-[#7A686D] mt-0.5">
                        Ample parking available on site with complimentary dedicated valet service for wedding guests.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2 mb-8 text-xs text-[#7A686D]">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                      <span>Air-conditioned luxury banquet halls</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                      <span>Wheelchair and elderly accessibility provided</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                      <span>Dress Code: Formal Evening / Traditional Festive</span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-3">
                  <a
                    href={EVENT_DETAILS.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-6 rounded-full bg-[#6B2D3E] hover:bg-[#501F2D] text-white text-xs sm:text-sm font-medium tracking-wider shadow-sm hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2 transition-all duration-200 active:scale-95 group"
                  >
                    <Navigation className="w-4 h-4 text-[#DFC285] group-hover:rotate-12 transition-transform duration-300" />
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                  </a>

                  <button
                    onClick={handleCopyAddress}
                    type="button"
                    className="w-full py-2.5 px-6 rounded-full bg-[#FAF5F0] hover:bg-white text-[#2B2B2B] border border-[#F0D5D5] text-xs sm:text-sm font-medium tracking-wider flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5 cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-600 animate-scale" />
                        <span className="text-emerald-700 font-semibold">Address Copied to Clipboard!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-[#7A686D]" />
                        <span>Copy Full Address</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
