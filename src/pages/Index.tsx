import { useState } from 'react';
import Preloader from '@/components/Preloader';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServiceToggle from '@/components/ServiceToggle';
import ProcessSection from '@/components/ProcessSection';
import CoverageSection from '@/components/CoverageSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <>
      <Preloader />
      <Header />
      <main>
        <HeroSection />
        <ServiceToggle />
        <ProcessSection />
        <CoverageSection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Index;
