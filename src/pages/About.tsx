import React from 'react';
import PageLayout from '../components/PageLayout';
import WhyChooseUs from '../components/WhyChooseUs';
import Stats from '../components/Stats';
import { motion } from 'motion/react';

const About = () => {
  return (
    <PageLayout>
      <div className="pt-32 pb-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black mb-6"
          >
            About <span className="text-orange-500">Legend Roofer</span>
          </motion.h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            With over 45 years of experience, we are Mississauga's most trusted roofing experts, dedicated to quality, integrity, and exceptional service.
          </p>
        </div>
      </div>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-black text-slate-900 mb-8">Our Legacy of Excellence</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Founded on the principles of hard work and honest communication, Legend Roofer has grown from a small family business into a leading roofing contractor in the Greater Toronto Area.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We specialize in residential and commercial roofing solutions, using only the highest quality materials and the latest industry techniques to ensure your property is protected for a lifetime.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-orange-50 rounded-2xl border border-orange-100">
                  <h4 className="font-bold text-orange-600 mb-2 uppercase tracking-widest text-xs">Our Mission</h4>
                  <p className="text-slate-800 font-medium">To provide every customer with a legendary roofing experience built on trust.</p>
                </div>
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <h4 className="font-bold text-slate-400 mb-2 uppercase tracking-widest text-xs">Our Vision</h4>
                  <p className="text-slate-800 font-medium">To be the first choice for roofing services in Mississauga through innovation.</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1000&auto=format&fit=crop" 
                alt="Roofing Team" 
                className="rounded-[3rem] shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -left-10 bg-orange-600 text-white p-10 rounded-[2rem] shadow-xl hidden md:block">
                <div className="text-5xl font-black mb-2">45+</div>
                <div className="font-bold uppercase tracking-widest text-sm">Years of Success</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Stats />
      <WhyChooseUs />
    </PageLayout>
  );
};

export default About;
