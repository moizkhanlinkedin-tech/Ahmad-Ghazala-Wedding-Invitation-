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
    <div className="min-h-screen bg-[#FAF6F0] text-[#1C2D27] font-sans antialiased selection:bg-[#E6D7B8] selection:text-[#0A3D2E] flex flex-col relative overflow-x-hidden">
      {/* Background audio player with NO visible overlay badges */}
      <HiddenAudioPlayer shouldPlay={startMusic} />

      {/* Floating Emerald Rose Petals & Golden Stardust Ambience */}
      <FloatingParticles />

      {/* Section 1: Interactive Opening Overlay ("Envelope Seal") */}
      <EnvelopeOverlay
        isOpen={envelopeOpened}
        onOpen={() => setEnvelopeOpened(true)}
        onSealClick={handleSealClick}
      />

      {/* Main Wedding Content Flow */}
      <main className="flex-1 relative z-10">
        {/* Section 2: Hero Section (Save the Dates) */}
        <HeroSection />

        {/* Section 3: Live Dual Countdown Timer */}
        <CountdownSection />

        {/* Section 4: Event Details ("Barat & Walima") */}
        <EventDetailsSection />

        {/* Section 5: Venues, Google Maps & Navigation */}
        <VenueSection />

        {/* Section 6: RSVP & Direct Contacts */}
        <RsvpSection />
      </main>

      {/* Section 7: Footer */}
      <Footer onReopenOverlay={() => setEnvelopeOpened(false)} />
    </div>
  );
}
