import React, { useState, useEffect } from 'react';
import { Calendar, Download, ExternalLink } from 'lucide-react';
import { WEDDING_DATA, getGoogleCalendarUrl, downloadIcsFile, EventDetail } from '../utils/calendar';
import { ScrollReveal } from './ScrollReveal';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const CountdownSection: React.FC = () => {
  const [selectedEventKey, setSelectedEventKey] = useState<'barat' | 'walima'>('barat');
  const currentEvent: EventDetail = WEDDING_DATA.events[selectedEventKey];

  const calculateTimeLeft = (targetIso: string): TimeLeft => {
    const targetTimestamp = new Date(targetIso).getTime();
    const difference = targetTimestamp - Date.now();
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() =>
    calculateTimeLeft(currentEvent.targetDateIso)
  );

  useEffect(() => {
    setTimeLeft(calculateTimeLeft(currentEvent.targetDateIso));
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(currentEvent.targetDateIso));
    }, 1000);
    return () => clearInterval(timer);
  }, [currentEvent.targetDateIso]);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <section id="countdown" className="py-20 sm:py-24 bg-[#F4EFE6] border-y border-[#E4D8C5] relative overflow-hidden text-[#1C2D27]">
      {/* Subtle background ornamentation */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-[#0A3D2E]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <ScrollReveal delayMs={100} direction="up">
          <span className="font-script text-3xl sm:text-4xl text-[#C5A059] block mb-2 drop-shadow-xs">
            Counting Every Precious Moment
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#0A3D2E] font-normal tracking-tight mb-4">
            The Auspicious Celebrations Begin In
          </h2>

          <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-[#C5A059] mb-8 font-semibold">
            Lahore, Pakistan · November 2026
          </p>

          {/* Event Switcher Tabs: Barat vs Walima */}
          <div className="inline-flex p-1.5 rounded-full bg-white border border-[#C5A059]/40 shadow-sm mb-10">
            <button
              onClick={() => setSelectedEventKey('barat')}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-sans font-medium transition-all duration-300 cursor-pointer ${
                selectedEventKey === 'barat'
                  ? 'bg-[#0A3D2E] text-[#FAF6F0] font-semibold shadow-md'
                  : 'text-[#5E7268] hover:text-[#0A3D2E]'
              }`}
            >
              Barat Ceremony (28 Nov)
            </button>
            <button
              onClick={() => setSelectedEventKey('walima')}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-sans font-medium transition-all duration-300 cursor-pointer ${
                selectedEventKey === 'walima'
                  ? 'bg-[#0A3D2E] text-[#FAF6F0] font-semibold shadow-md'
                  : 'text-[#5E7268] hover:text-[#0A3D2E]'
              }`}
            >
              Walima Ceremony (29 Nov)
            </button>
          </div>

          <div className="mb-6">
            <span className="text-sm sm:text-base font-serif text-[#0A3D2E] font-medium">
              Countdown to {currentEvent.ceremonyName}: {currentEvent.dateDisplay} at {currentEvent.timings.highlight1.time}
            </span>
          </div>
        </ScrollReveal>

        {/* Dynamic 4-Card Live Countdown in Deep Emerald & Gold Foil */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {timeUnits.map((unit, index) => (
            <ScrollReveal key={unit.label} delayMs={120 * (index + 1)} direction="zoom">
              <div
                className="bg-[#082E23] rounded-2xl p-6 sm:p-8 border-2 border-[#D4AF37]/50 shadow-xl hover:shadow-2xl hover:border-[#D4AF37] hover:-translate-y-2 transition-all duration-300 flex flex-col items-center justify-center relative overflow-hidden group cursor-default"
              >
                {/* Gold header accent hairline */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D4AF37] via-[#FFF3B8] to-[#D4AF37] group-hover:h-1.5 transition-all duration-300" />

                <span className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#FFF2B2] tabular-nums tracking-tight mb-2 group-hover:scale-105 transition-transform duration-300 drop-shadow-md">
                  {String(unit.value).padStart(2, '0')}
                </span>

                <span className="text-xs sm:text-sm uppercase tracking-[0.2em] font-medium text-[#DFC285] font-sans group-hover:text-[#FFFDF0] transition-colors">
                  {unit.label}
                </span>

                {/* Animated seconds indicator */}
                {unit.label === 'Seconds' && (
                  <span className="absolute bottom-2.5 right-2.5 flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4AF37]" />
                  </span>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Add to Calendar Actions */}
        <ScrollReveal delayMs={600} direction="up">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={getGoogleCalendarUrl(currentEvent)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#0A3D2E] hover:bg-[#125A44] text-[#FAF6F0] text-xs sm:text-sm font-semibold border border-[#C5A059]/60 shadow-md hover:-translate-y-0.5 hover:shadow-xl transition-all duration-200"
            >
              <Calendar className="w-4 h-4 text-[#DFC285]" />
              <span>Add {currentEvent.ceremonyName} to Google Calendar</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-70" />
            </a>

            <button
              onClick={() => downloadIcsFile(currentEvent)}
              type="button"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-[#FAF6F0] text-[#0A3D2E] text-xs sm:text-sm font-semibold border border-[#C5A059]/60 shadow-sm hover:border-[#0A3D2E] hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 cursor-pointer"
            >
              <Download className="w-4 h-4 text-[#C5A059]" />
              <span>Download Apple / Outlook .ics</span>
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
