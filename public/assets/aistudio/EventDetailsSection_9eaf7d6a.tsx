import React from 'react';
import { Calendar, Clock, MapPin, Heart, Sparkles, Utensils } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const EventDetailsSection: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const itinerary = [
    {
      time: '6:00 PM',
      title: 'Arrival & Welcome Drinks',
      desc: 'Guests arrive and enjoy refreshments, mocktails, and ambient music.',
      icon: Sparkles,
    },
    {
      time: '7:00 PM',
      title: 'Baraat Arrival',
      desc: 'Joyful arrival of the groom and family to the venue.',
      icon: Heart,
    },
    {
      time: '7:45 PM',
      title: 'Nikkah Ceremony',
      desc: 'Solemnization of the sacred Nikkah and prayers for the couple.',
      icon: Sparkles,
    },
    {
      time: '8:45 PM',
      title: 'Royal Dinner Feast',
      desc: 'A curated multi-course celebratory dinner buffet and desserts.',
      icon: Utensils,
    },
    {
      time: '10:00 PM',
      title: 'Event Concludes',
      desc: 'Conclusion of the evening with heartfelt prayers and blessings.',
      icon: Clock,
    },
  ];

  return (
    <section id="celebration" className="py-20 sm:py-24 bg-[#FCF9F7] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal delayMs={100} direction="up">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-script text-2xl sm:text-3xl text-[#C5A059] block mb-2">
              You are invited
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#2B2B2B] font-normal tracking-tight mb-4">
              The Celebration
            </h2>
            <div className="w-16 h-[1px] bg-[#C5A059] mx-auto mb-4" />
            <p className="text-sm sm:text-base text-[#7A686D] font-cormorant italic text-balance">
              Two lives, two hearts, joined together in friendship, united forever in love.
            </p>
          </div>
        </ScrollReveal>

        {/* 3-Column Feature Cards with staggered scroll reveals & lift-up hover */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {/* Card 1: The Date */}
          <ScrollReveal delayMs={150} direction="up">
            <div className="h-full bg-white rounded-2xl p-8 border border-[#F0D5D5] shadow-xs hover:shadow-xl hover:-translate-y-2 hover:border-[#6B2D3E]/30 transition-all duration-300 text-center flex flex-col items-center group">
              <div className="w-14 h-14 rounded-full bg-[#FDF6F6] border border-[#F0D5D5] flex items-center justify-center text-[#6B2D3E] mb-5 group-hover:scale-110 group-hover:bg-[#6B2D3E] group-hover:text-white transition-all duration-300">
                <Calendar className="w-6 h-6 transition-colors duration-300" />
              </div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-medium mb-1">
                When
              </span>
              <h3 className="text-2xl font-serif text-[#2B2B2B] font-medium mb-2">
                The Date
              </h3>
              <p className="text-base text-[#6B2D3E] font-medium font-serif mb-1">
                Sunday, 31st January 2027
              </p>
              <p className="text-xs text-[#7A686D]">
                Save the date on your calendar
              </p>
            </div>
          </ScrollReveal>

          {/* Card 2: The Time */}
          <ScrollReveal delayMs={300} direction="up">
            <div className="h-full bg-white rounded-2xl p-8 border border-[#F0D5D5] shadow-xs hover:shadow-xl hover:-translate-y-2 hover:border-[#6B2D3E]/30 transition-all duration-300 text-center flex flex-col items-center group">
              <div className="w-14 h-14 rounded-full bg-[#FDF6F6] border border-[#F0D5D5] flex items-center justify-center text-[#6B2D3E] mb-5 group-hover:scale-110 group-hover:bg-[#6B2D3E] group-hover:text-white transition-all duration-300">
                <Clock className="w-6 h-6 transition-colors duration-300" />
              </div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-medium mb-1">
                Schedule
              </span>
              <h3 className="text-2xl font-serif text-[#2B2B2B] font-medium mb-2">
                The Time
              </h3>
              <p className="text-base text-[#6B2D3E] font-medium font-serif mb-1">
                6:00 PM – 10:00 PM
              </p>
              <p className="text-xs text-[#7A686D]">
                Pakistan Standard Time (PKT)
              </p>
            </div>
          </ScrollReveal>

          {/* Card 3: The Venue */}
          <ScrollReveal delayMs={450} direction="up">
            <div className="h-full bg-white rounded-2xl p-8 border border-[#F0D5D5] shadow-xs hover:shadow-xl hover:-translate-y-2 hover:border-[#6B2D3E]/30 transition-all duration-300 text-center flex flex-col items-center group">
              <div className="w-14 h-14 rounded-full bg-[#FDF6F6] border border-[#F0D5D5] flex items-center justify-center text-[#6B2D3E] mb-5 group-hover:scale-110 group-hover:bg-[#6B2D3E] group-hover:text-white transition-all duration-300">
                <MapPin className="w-6 h-6 transition-colors duration-300" />
              </div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-medium mb-1">
                Location
              </span>
              <h3 className="text-2xl font-serif text-[#2B2B2B] font-medium mb-2">
                The Venue
              </h3>
              <p className="text-base text-[#6B2D3E] font-medium font-serif mb-1">
                Milano Event Complex
              </p>
              <p className="text-xs text-[#7A686D]">
                Lahore, Punjab, Pakistan
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Ceremony Card: Nikkah Ceremony */}
        <ScrollReveal delayMs={200} direction="zoom">
          <div className="bg-gradient-to-br from-[#FAF5F0] via-white to-[#FDF6F6] rounded-2xl p-8 sm:p-12 border border-[#F0D5D5] shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden text-center max-w-4xl mx-auto mb-16 group">
            {/* Decorative Corner Borders */}
            <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-[#C5A059]/40 group-hover:scale-110 transition-transform" />
            <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-[#C5A059]/40 group-hover:scale-110 transition-transform" />
            <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-[#C5A059]/40 group-hover:scale-110 transition-transform" />
            <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-[#C5A059]/40 group-hover:scale-110 transition-transform" />

            <span className="font-script text-2xl sm:text-3xl text-[#C5A059] block mb-2">
              Sacred Union
            </span>
            
            <h3 className="text-2xl sm:text-3xl font-serif text-[#6B2D3E] font-semibold mb-4 tracking-tight">
              Nikkah Ceremony
            </h3>

            <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#2B2B2B]/90 font-cormorant italic leading-relaxed mb-6">
              “An evening of prayers, dinner and celebration. We would be honoured to have you with us as we solemnize our sacred Nikkah and celebrate the beginning of our forever.”
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => scrollTo('rsvp')}
                className="px-8 py-3 rounded-full bg-[#6B2D3E] hover:bg-[#501F2D] text-white text-sm font-medium tracking-wider shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 cursor-pointer active:scale-95"
              >
                RSVP to the Nikkah
              </button>
              <button
                onClick={() => scrollTo('venue')}
                className="px-8 py-3 rounded-full bg-white hover:bg-[#FAF5F0] text-[#6B2D3E] border border-[#F0D5D5] text-sm font-medium tracking-wider hover:-translate-y-0.5 hover:shadow-xs transition-all cursor-pointer"
              >
                View Venue &amp; Map
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Evening Itinerary Timeline with Interactive Hover Highlights */}
        <div className="max-w-3xl mx-auto">
          <ScrollReveal delayMs={100} direction="up">
            <div className="text-center mb-10">
              <span className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-medium block">
                Program of Events
              </span>
              <h3 className="text-2xl font-serif text-[#2B2B2B] mt-1">
                Evening Itinerary
              </h3>
            </div>
          </ScrollReveal>

          <div className="space-y-4">
            {itinerary.map((item, idx) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={idx} delayMs={100 * (idx + 1)} direction="left">
                  <div
                    className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-5 bg-white rounded-xl border border-[#F0D5D5]/80 hover:border-[#6B2D3E] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 gap-3 group cursor-default"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#FDF6F6] text-[#6B2D3E] flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#6B2D3E] group-hover:text-white transition-all duration-300">
                        <Icon className="w-5 h-5 transition-transform group-hover:rotate-6" />
                      </div>
                      <div>
                        <h4 className="text-base font-serif font-medium text-[#2B2B2B] group-hover:text-[#6B2D3E] transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-xs text-[#7A686D]">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs sm:text-sm font-sans font-semibold text-[#6B2D3E] sm:ml-auto shrink-0 bg-[#FDF6F6] px-3.5 py-1.5 rounded-full border border-[#F0D5D5] group-hover:bg-[#6B2D3E] group-hover:text-white group-hover:border-[#6B2D3E] transition-all duration-200">
                      {item.time}
                    </span>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
