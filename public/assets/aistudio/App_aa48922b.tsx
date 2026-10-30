/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { EnvelopeOverlay } from './components/EnvelopeOverlay';
import { HeroSection } from './components/HeroSection';
import { CountdownSection } from './components/CountdownSection';
import { EventDetailsSection } from './components/EventDetailsSection';
import { VenueSection } from './components/VenueSection';
import { RsvpSection } from './components/RsvpSection';
import { Footer } from './components/Footer';
import { FloatingParticles } from './components/FloatingParticles';
import { HiddenAudioPlayer } from './components/HiddenAudioPlayer';

export default function App() {
  const [envelopeOpened, setEnvelopeOpened] = useState(false);
  const [startMusic, setStartMusic] = useState(false);

  const handleSealClick = () => {
    // Immediately trigger music on user interaction
    setStartMusic(true);
  };

  return (
    <div className="min-h-screen bg-[#FCF9F7] text-[#2B2B2B] font-sans antialiased selection:bg-[#F8E7E7] selection:text-[#6B2D3E] flex flex-col relative overflow-x-hidden">
      {/* Hidden background music player */}
      <HiddenAudioPlayer shouldPlay={startMusic} />

      {/* Floating Rose Petals & Golden Sparkle Ambience */}
      <FloatingParticles />

      {/* Section 1: The Interactive Opening Overlay ("Envelope Seal") */}
      <EnvelopeOverlay
        isOpen={envelopeOpened}
        onOpen={() => setEnvelopeOpened(true)}
        onSealClick={handleSealClick}
      />

      {/* Main Wedding Content Flow */}
      <main className="flex-1 relative z-10">
        {/* Section 2: Hero Section (Save the Date) */}
        <HeroSection />

        {/* Section 3: Live Countdown Timer */}
        <CountdownSection />

        {/* Section 4: Event Details ("The Celebration") */}
        <EventDetailsSection />

        {/* Section 5: Venue & Navigation */}
        <VenueSection />

        {/* Section 6: RSVP & Direct Contact */}
        <RsvpSection />
      </main>

      {/* Section 7: Footer */}
      <Footer onReopenOverlay={() => setEnvelopeOpened(false)} />
    </div>
  );
}
