import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ModulesSection } from './components/ModulesSection';
import { RealProjectSection } from './components/RealProjectSection';
import { AudienceSection } from './components/AudienceSection';
import { NoCodeConfidenceSection } from './components/NoCodeConfidenceSection';
import { OfferSection } from './components/OfferSection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { StickyMobileBar } from './components/StickyMobileBar';

export default function App() {
  return (
    <div className="min-h-screen bg-[#07090E] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Top Navbar with Full-Width Tech Visuals */}
      <Navbar />

      {/* Main Page Flow */}
      <main>
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. What You Will Learn (Modules 1 - 5) */}
        <ModulesSection />

        {/* 4. Real Project Showcase & Pipeline */}
        <RealProjectSection />

        {/* 5. Who This Course Is For (6 Audience Cards) */}
        <AudienceSection />

        {/* 6. No Code Confidence & 5-Step Checklist */}
        <NoCodeConfidenceSection />

        {/* 7. Pricing & Launch Offer */}
        <OfferSection />

        {/* 8. FAQ Accordion */}
        <FaqSection />

        {/* 9. Final Call to Action */}
        <FinalCtaSection />
      </main>

      {/* Footer & Legal Modals */}
      <Footer />

      {/* Mobile Floating Sticky CTA */}
      <StickyMobileBar />
    </div>
  );
}
