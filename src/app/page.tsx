"use client";

import { HeroSection } from '@/app/components/HeroSection'
import { ServicesSection } from '@/app/components/ServicesSection'
import { ProcessSection } from '@/app/components/ProcessSection'
import { PortfolioSection } from '@/app/components/PortfolioSection'
import { SignificanceSection } from '@/app/components/SignificanceSection'
import { WhyChooseUsSection } from '@/app/components/WhyChooseUsSection'
import { UIUXSection } from '@/app/components/UIUXSection'
import { ClientsSection } from '@/app/components/ClientsSection'
import { FAQSection } from '@/app/components/FAQSection'
import { FinalCTASection } from '@/app/components/FinalCTASection'

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <PortfolioSection />
      <SignificanceSection />
      <WhyChooseUsSection />
      <UIUXSection />
      <ClientsSection />
      <FAQSection />
      <FinalCTASection />
    </main>
  )
}