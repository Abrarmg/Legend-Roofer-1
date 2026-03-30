import React from 'react';
import PageLayout from '../components/PageLayout';
import ServiceAreas from '../components/ServiceAreas';
import { motion } from 'motion/react';
import { MapPin, Phone, Clock } from 'lucide-react';

const Areas = () => {
  return (
    <PageLayout>
      <div className="pt-32 pb-20 bg-slate-100 text-slate-900">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black mb-6"
          >
            Service <span className="text-orange-600">Areas</span>
          </motion.h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We are proud to provide legendary roofing services across Mississauga and the surrounding Greater Toronto Area.
          </p>
        </div>
      </div>

      <ServiceAreas />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="p-10 bg-slate-50 rounded-[2rem] border border-slate-100 text-center">
              <div className="bg-orange-100 text-orange-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <MapPin size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Mississauga HQ</h3>
              <p className="text-slate-600 mb-6">1475 Sandhill Drive, Mississauga Unit 1 - L9G 0H7</p>
              <a href="#" className="text-orange-600 font-bold hover:underline">Get Directions</a>
            </div>

            <div className="p-10 bg-slate-50 rounded-[2rem] border border-slate-100 text-center">
              <div className="bg-orange-100 text-orange-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <Phone size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Local Support</h3>
              <p className="text-slate-600 mb-6">Available 24/7 for emergency repairs in all service areas.</p>
              <a href="tel:+19053873000" className="text-orange-600 font-bold hover:underline">(905) 387 3000</a>
            </div>

            <div className="p-10 bg-slate-50 rounded-[2rem] border border-slate-100 text-center">
              <div className="bg-orange-100 text-orange-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <Clock size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Fast Response</h3>
              <p className="text-slate-600 mb-6">We typically respond to inspection requests within 24 hours.</p>
              <span className="text-orange-600 font-bold">Reliable Service</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-black mb-8">Don't See Your Area?</h2>
          <p className="text-xl text-orange-100 mb-10 max-w-2xl mx-auto">
            We are constantly expanding our service reach. Give us a call to see if we can help with your roofing project.
          </p>
          <a href="tel:+19053873000" className="inline-block bg-white text-orange-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-slate-100 transition-all shadow-xl">
            Check Availability
          </a>
        </div>
      </section>
    </PageLayout>
  );
};

export default Areas;
