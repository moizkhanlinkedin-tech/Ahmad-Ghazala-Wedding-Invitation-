import React, { useState, useEffect } from 'react';
import { Calendar, Download, ExternalLink } from 'lucide-react';
import { getGoogleCalendarUrl, downloadIcsFile } from '../utils/calendar';
import { ScrollReveal } from './ScrollReveal';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const CountdownSection: React.FC = () => {
  // Target: Sunday, 31st January 2027 at 18:00:00 Pakistan Standard Time (UTC+5)
  // Which is equivalent to 2027-01-31T13:00:00Z
  const targetTimestamp = new Date('2027-01-31T18:00:00+05:00').getTime();

  const calculateTimeLeft = (): TimeLeft => {
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

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <section id="countdown" className="py-20 bg-[#FDF6F6] border-y border-[#F0D5D5]/80 relative overflow-hidden">
      {/* Subtle background ornamentation */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-56 h-56 bg-[#DFC285]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-56 h-56 bg-[#6B2D3E]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <ScrollReveal delayMs={100} direction="up">
          <span className="font-script text-2xl sm:text-3xl text-[#C5A059] block mb-2">
            Counting every moment
          </span>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#2B2B2B] font-normal tracking-tight mb-4">
            The celebration begins in
          </h2>

          <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-[#7A686D] mb-10 font-medium">
            Sunday, 31st January 2027 · 6:00 PM PKT
          </p>
        </ScrollReveal>

        {/* Dynamic 4-Card Live Countdown with Pulses & Hovers */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {timeUnits.map((unit, index) => (
            <ScrollReveal key={unit.label} delayMs={150 * (index + 1)} direction="zoom">
              <div
                className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-[#F0D5D5] shadow-xs hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center justify-center relative overflow-hidden group cursor-default countdown-card-pulse"
              >
                {/* Subtle top accent hairline */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#DFC285] via-[#6B2D3E] to-[#DFC285] group-hover:h-1.5 transition-all duration-300" />

                <span className="text-4xl sm:text-5xl md:text-6xl font-serif font-semibold text-[#6B2D3E] tabular-nums tracking-tight mb-2 group-hover:scale-110 transition-transform duration-300">
                  {String(unit.value).padStart(2, '0')}
                </span>
                
                <span className="text-xs sm:text-sm uppercase tracking-[0.2em] font-medium text-[#7A686D] font-sans group-hover:text-[#6B2D3E] transition-colors">
                  {unit.label}
                </span>

                {/* Heartbeat pulse glow on seconds */}
                {unit.label === 'Seconds' && (
                  <span className="absolute bottom-2.5 right-2.5 flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6B2D3E] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#6B2D3E]" />
                  </span>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Add to Calendar Actions with Smooth Hovers */}
        <ScrollReveal delayMs={600} direction="up">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={getGoogleCalendarUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#FAF5F0] hover:bg-white text-[#6B2D3E] text-xs sm:text-sm font-medium border border-[#F0D5D5] shadow-xs hover:border-[#6B2D3E]/40 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200"
            >
              <Calendar className="w-4 h-4 text-[#C5A059]" />
              <span>Add to Google Calendar</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-60" />
            </a>

            <button
              onClick={downloadIcsFile}
              type="button"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#FAF5F0] hover:bg-white text-[#2B2B2B] text-xs sm:text-sm font-medium border border-[#F0D5D5] shadow-xs hover:border-[#6B2D3E]/40 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 cursor-pointer"
            >
              <Download className="w-4 h-4 text-[#7A686D]" />
              <span>Download Apple / Outlook .ics</span>
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
