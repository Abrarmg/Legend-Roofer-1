import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const RoofSigns = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1632759145351-1d592919f522?q=80&w=1000&auto=format&fit=crop" 
                alt="House with roof signs" 
                className="w-full h-[400px] lg:h-[500px] object-cover rounded-[2.5rem] shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-8 left-8 bg-[#F54900] backdrop-blur-sm p-6 rounded-2xl border border-white/10 hidden md:block">
                <p className="text-white font-bold text-lg">Expert Inspection</p>
                <p className="text-white text-sm">Mississauga, ON</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">
              What Are the Signs That My Roof Needs Repair in Mississauga?
            </h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              If you notice roof leaks, missing or damaged shingles, dark spots, sagging areas, or water stains on ceilings or walls, your roof may need repair in Mississauga. Older roofs, especially those over 20 years old, should also be checked by roofing contractors. Quick action and emergency roof repair can help prevent water damage, mold, and structural problems.
            </p>
            <Link 
              to="/contact-us"
              className="inline-block bg-[#F54900] text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-[#e04300] transition-colors shadow-lg shadow-orange-900/20"
            >
              Free Inspection
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RoofSigns;
