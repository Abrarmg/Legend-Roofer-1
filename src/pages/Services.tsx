import React from 'react';
import PageLayout from '../components/PageLayout';
import ServicesSection from '../components/ServicesSection';
import RoofingProcess from '../components/RoofingProcess';
import FAQ from '../components/FAQ';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <PageLayout>
      <div className="pt-32 pb-20 bg-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black mb-6"
          >
            Our <span className="text-slate-900">Roofing Services</span>
          </motion.h1>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto leading-relaxed">
            From minor repairs to complete replacements, we offer a full range of professional roofing solutions tailored to your needs.
          </p>
        </div>
      </div>

      <ServicesSection />
      <RoofingProcess />
      
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-8">Need a Custom Solution?</h2>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
            Our experts are ready to help you with any roofing challenge. Contact us today for a free, no-obligation consultation.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/contact-us" className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all shadow-xl shadow-orange-600/20">
              Free Inspection
            </Link>
          </div>
        </div>
      </section>

      <FAQ />
    </PageLayout>
  );
};

export default Services;
