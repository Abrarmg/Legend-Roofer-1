import React from 'react';
import PageLayout from '../components/PageLayout';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import BeforeAfter from '../components/BeforeAfter';
import TestimonialsSection from '../components/TestimonialsSection';
import Stats from '../components/Stats';
import ServicesSection from '../components/ServicesSection';
import WhyChooseUs from '../components/WhyChooseUs';
import RoofSigns from '../components/RoofSigns';
import RoofingProcess from '../components/RoofingProcess';
import Testimonials from '../components/Testimonials';
import ServiceAreas from '../components/ServiceAreas';
import FAQ from '../components/FAQ';

const Home = () => {
  return (
    <PageLayout>
      <Hero />
      <TrustBar />
      <BeforeAfter />
      <TestimonialsSection />
      <Stats />
      <ServicesSection />
      <WhyChooseUs />
      <RoofSigns />
      <RoofingProcess />
      <ServiceAreas />
      <FAQ />
    </PageLayout>
  );
};

export default Home;
