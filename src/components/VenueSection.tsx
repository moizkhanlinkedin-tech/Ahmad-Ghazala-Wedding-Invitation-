import React, { useState } from 'react';
import { MapPin, Navigation, Copy, Check, ExternalLink, Calendar, Car } from 'lucide-react';
import { WEDDING_DATA } from '../utils/calendar';
import { ScrollReveal } from './ScrollReveal';

export const VenueSection: React.FC = () => {
  const [copiedBarat, setCopiedBarat] = useState(false);
  const [copiedWalima, setCopiedWalima] = useState(false);

  const barat = WEDDING_DATA.events.barat;
  const walima = WEDDING_DATA.events.walima;

  const handleCopyBarat = async () => {
    try {
      await navigator.clipboard.writeText(barat.venueAddress);
      setCopiedBarat(true);
      setTimeout(() => setCopiedBarat(false), 2500);
    } catch {
      setCopiedBarat(true);
      setTimeout(() => setCopiedBarat(false), 2500);
    }
  };

  const handleCopyWalima = async () => {
    try {
      await navigator.clipboard.writeText(walima.venueAddress);
      setCopiedWalima(true);
      setTimeout(() => setCopiedWalima(false), 2500);
    } catch {
      setCopiedWalima(true);
      setTimeout(() => setCopiedWalima(false), 2500);
    }
  };

  return (
    <section id="venue" className="py-20 sm:py-24 bg-[#F4EFE6] border-t border-[#E4D8C5] relative overflow-hidden text-[#1C2D27]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal delayMs={100} direction="up">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-script text-3xl sm:text-4xl text-[#C5A059] block mb-2">
              Find Your Way
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#0A3D2E] font-normal tracking-tight mb-4">
              Venues &amp; Locations
            </h2>
            <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-[#C5A059] to-transparent mx-auto mb-4" />
            <p className="text-sm sm:text-base text-[#5E7268] font-cormorant italic text-balance">
              Detailed addresses, interactive maps, and navigation guides for both ceremonies in Lahore Cantt.
            </p>
          </div>
        </ScrollReveal>

        {/* Venue 1: BARAT CEREMONY */}
        <div className="mb-16">
          <ScrollReveal delayMs={200} direction="up">
            <div className="bg-[#082E23] rounded-3xl p-6 sm:p-9 border-2 border-[#D4AF37]/50 shadow-2xl relative overflow-hidden text-[#EDE7D9]">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left Information */}
                <div className="lg:col-span-5 flex flex-col justify-between">
                  <div>
                    <div className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.25em] text-[#F3E5AB] font-semibold mb-3">
                      <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                      Ceremony 1 · Barat Location
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-serif text-[#FFF2B2] font-semibold mb-2">
                      {barat.venueName}
                    </h3>

                    <div className="flex items-center gap-2 text-xs sm:text-sm text-[#DFC285] mb-4">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{barat.dateDisplay} · Sehra Bandi 12:00 PM</span>
                    </div>

                    <p className="text-sm text-[#D1C7B7] leading-relaxed mb-6">
                      {barat.venueAddress}
                    </p>

                    <div className="p-3.5 rounded-xl bg-[#031C14]/80 border border-[#D4AF37]/30 mb-6 flex items-start gap-3">
                      <Car className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                      <div>
                        <h5 className="text-xs uppercase tracking-wider font-semibold text-[#FFFDF0]">
                          Guest Arrival Guide
                        </h5>
                        <p className="text-xs text-[#A89568] mt-0.5">
                          Located via Bhata Chowk on Bedian Road. Please arrive in good time for Sehra Bandi at 12:00 PM.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={barat.mapsSearchUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-3 px-5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B89430] hover:brightness-110 text-[#062C20] text-xs sm:text-sm font-semibold tracking-wider flex items-center justify-center gap-2 transition-all shadow-md"
                    >
                      <Navigation className="w-4 h-4 text-[#062C20]" />
                      <span>Open in Google Maps</span>
                      <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                    </a>

                    <button
                      onClick={handleCopyBarat}
                      type="button"
                      className="py-2.5 px-5 rounded-full bg-[#031C14] hover:bg-[#0A3D2E] text-[#D1C7B7] hover:text-[#FFFDF0] border border-[#D4AF37]/40 text-xs sm:text-sm font-medium tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer"
                    >
                      {copiedBarat ? (
                        <>
                          <Check className="w-4 h-4 text-emerald-400" />
                          <span className="text-emerald-300 font-semibold">Address Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4 text-[#D4AF37]" />
                          <span>Copy Address</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Right Map Embedded Iframe Container */}
                <div className="lg:col-span-7">
                  <div className="w-full rounded-2xl overflow-hidden border-2 border-[#D4AF37]/40 shadow-inner bg-[#031C14] min-h-[300px]">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.0436481053484!2d74.4054311!3d31.495484049999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391905f7d319ce65%3A0x3b146f407d57c9a1!2sNadirabad%20Lahore%2C%20Pakistan!5e0!3m2!1sen!2s!4v1793362111983!5m2!1sen!2s"
                      width="100%"
                      height="300"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="strict-origin-when-cross-origin"
                      title="Barat Ceremony Location Google Maps"
                      className="w-full h-[300px] sm:h-[320px] rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Venue 2: WALIMA CEREMONY */}
        <div>
          <ScrollReveal delayMs={350} direction="up">
            <div className="bg-[#082E23] rounded-3xl p-6 sm:p-9 border-2 border-[#D4AF37]/50 shadow-2xl relative overflow-hidden text-[#EDE7D9]">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left Information */}
                <div className="lg:col-span-5 flex flex-col justify-between">
                  <div>
                    <div className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.25em] text-[#F3E5AB] font-semibold mb-3">
                      <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                      Ceremony 2 · Walima Location
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-serif text-[#FFF2B2] font-semibold mb-2">
                      {walima.venueName}
                    </h3>

                    <div className="flex items-center gap-2 text-xs sm:text-sm text-[#DFC285] mb-4">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{walima.dateDisplay} · Reception 12:00 PM</span>
                    </div>

                    <p className="text-sm text-[#D1C7B7] leading-relaxed mb-6">
                      {walima.venueAddress}
                    </p>

                    <div className="p-3.5 rounded-xl bg-[#031C14]/80 border border-[#D4AF37]/30 mb-6 flex items-start gap-3">
                      <Car className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                      <div>
                        <h5 className="text-xs uppercase tracking-wider font-semibold text-[#FFFDF0]">
                          Banquet Hall &amp; Parking
                        </h5>
                        <p className="text-xs text-[#A89568] mt-0.5">
                          Located Near Ali View Garden on Bedian Road, Lahore Cantt. Dedicated parking and valet available.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={walima.mapsSearchUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-3 px-5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B89430] hover:brightness-110 text-[#062C20] text-xs sm:text-sm font-semibold tracking-wider flex items-center justify-center gap-2 transition-all shadow-md"
                    >
                      <Navigation className="w-4 h-4 text-[#062C20]" />
                      <span>Open in Google Maps</span>
                      <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                    </a>

                    <button
                      onClick={handleCopyWalima}
                      type="button"
                      className="py-2.5 px-5 rounded-full bg-[#031C14] hover:bg-[#0A3D2E] text-[#D1C7B7] hover:text-[#FFFDF0] border border-[#D4AF37]/40 text-xs sm:text-sm font-medium tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer"
                    >
                      {copiedWalima ? (
                        <>
                          <Check className="w-4 h-4 text-emerald-400" />
                          <span className="text-emerald-300 font-semibold">Address Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4 text-[#D4AF37]" />
                          <span>Copy Address</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Right Map Embedded Iframe Container */}
                <div className="lg:col-span-7">
                  <div className="w-full rounded-2xl overflow-hidden border-2 border-[#D4AF37]/40 shadow-inner bg-[#031C14] min-h-[300px]">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54420.55363424022!2d74.36163722357568!3d31.516342371425825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391905b5612d4eb3%3A0xbb3c016881600d31!2sRoyal%20Palace%20Banquet%20Hall!5e0!3m2!1sen!2s!4v1793345829699!5m2!1sen!2s"
                      width="100%"
                      height="300"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="strict-origin-when-cross-origin"
                      title="Royal Palace Banquet Hall Google Maps Location"
                      className="w-full h-[300px] sm:h-[320px] rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
