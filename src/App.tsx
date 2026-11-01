import React from 'react';
import { TopBar } from './components/TopBar';
import { Hero } from './components/Hero';
import { ProblemSentence } from './components/ProblemSentence';
import { WhatIDo } from './components/WhatIDo';
import { BeforeAfter } from './components/BeforeAfter';
import { HowWeStart } from './components/HowWeStart';
import { AboutLetter } from './components/AboutLetter';
import { Questions } from './components/Questions';
import { FinalInvitation } from './components/FinalInvitation';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';

const BOOKING_LINK =
  'https://cal.com/sambasiva6969/20-minutes-ai-business-discovery-call-with-siva';
const WHATSAPP_NUMBER = '8978668697';
const EMAIL = 'dbsolutions369@gmail.com';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F7F1E6] text-[#22201D] font-sans selection:bg-[#B4552D] selection:text-[#F7F1E6] overflow-x-hidden">
      {/* 1. Top bar */}
      <TopBar bookingLink={BOOKING_LINK} />

      {/* Main Content Sections */}
      <main>
        {/* 2. Hero */}
        <Hero
          bookingLink={BOOKING_LINK}
          whatsappNumber={WHATSAPP_NUMBER}
        />

        {/* 3. The problem, said in one sentence */}
        <ProblemSentence />

        {/* 4. What I do */}
        <WhatIDo />

        {/* 5. Before and after */}
        <BeforeAfter />

        {/* 6. How we start */}
        <HowWeStart />

        {/* 7. About me, written as a short letter */}
        <AboutLetter bookingLink={BOOKING_LINK} />

        {/* 8. Questions */}
        <Questions />

        {/* 9. Final invitation, on ink */}
        <FinalInvitation
          bookingLink={BOOKING_LINK}
          whatsappNumber={WHATSAPP_NUMBER}
          email={EMAIL}
        />
      </main>

      {/* 10. Footer on ink */}
      <Footer
        bookingLink={BOOKING_LINK}
        whatsappNumber={WHATSAPP_NUMBER}
        email={EMAIL}
      />

      {/* Slim mobile floating sticky call CTA */}
      <MobileStickyBar bookingLink={BOOKING_LINK} />
    </div>
  );
}
