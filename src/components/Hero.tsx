import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-10 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1635424710928-0544e8512eae?q=80&w=2071&auto=format&fit=crop" 
          alt="Roofing Background" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="text-5xl lg:text-7xl font-black leading-[1.1] mb-6 tracking-tight pt-10">
              <span className="text-orange-500 underline decoration-orange-600/30 underline-offset-8 text-4xl lg:text-6xl">Expert Roof Repair in Mississauga You Can Trust</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
              Whether it's storm damage, leaks, or aging shingles, our certified team delivers fast, reliable roof repair across Mississauga and the Greater Toronto Area. From flat, metal, cedar, and slate roofing fixes to emergency repairs when you need help most — we handle it all. We serve homeowners and commercial properties with same-day inspections, upfront cost estimates, and workmanship backed by warranty. With over 5 years of local experience and hundreds of 5-star reviews, Mississauga property owners choose us as the best option for lasting results, not quick fixes.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-xl shadow-orange-600/20 flex items-center gap-2 group">
                Free Inspection
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-lg transition-all">
                Our Services
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-3xl p-8 shadow-2xl shadow-black/50 max-w-md mx-auto lg:ml-auto mt-10"
          >
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-slate-900 uppercase">Claim $100 Free Roof Inspection</h3>
              <p className="text-slate-500">We have limited spots this week!</p>
            </div>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="First Name" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-orange-600 outline-none transition-all" />
                <input type="text" placeholder="Last Name" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-orange-600 outline-none transition-all" />
              </div>
              <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-orange-600 outline-none transition-all" />
              <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-orange-600 outline-none transition-all" />
              <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-orange-600 outline-none transition-all appearance-none bg-white">
                <option>Select Project Type</option>
                <option>Roof Replacement</option>
                <option>Roof Repair</option>
                <option>Commercial Roof Repair</option>
                <option>Emergency Roof Repair</option>
                <option>Metal Roofing</option>
                <option>Flat Roof Repair</option>
                <option>Slate Roofing</option>
              </select>
              <textarea placeholder="Tell us about your project" rows={3} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-orange-600 outline-none transition-all"></textarea>
              <button className="w-full bg-[#F54900] hover:opacity-90 text-white font-bold py-4 rounded-xl transition-all shadow-lg">
                Free Inspection
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
