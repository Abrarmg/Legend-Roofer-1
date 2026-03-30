import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const projects = [
  {
    title: "Shingle Roof Repair",
    location: "Streetsville, Mississauga",
    before: "https://i.ibb.co/mVBfn1rT/image.png",
    after: "https://i.ibb.co/0RYnbq0z/image.png",
    description: "Replaced 20-year-old leaking shingles with premium architectural shingles and improved ventilation."
  },
  {
    title: "Emergency Roof Repair",
    location: "Port Credit, Mississauga",
    before: "https://i.ibb.co/TxFSTffp/image.png",
    after: "https://i.ibb.co/TM4qFfQ2/image.png",
    description: "Emergency repair after high winds. Restored structural integrity and matched existing shingles perfectly."
  }
];

const BeforeAfter = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-orange-600 font-bold tracking-wider uppercase text-sm mb-4 block"
          >
            Transformation Gallery
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-slate-900 mb-6"
          >
            Our Work: <span className="text-orange-600">Before & After</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600"
          >
            See the legendary difference our expert team makes. We don't just fix roofs; we restore peace of mind and enhance your home's curb appeal.
          </motion.p>
        </div>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-700 px-4 py-2 rounded-full text-sm font-bold">
                  <CheckCircle2 size={16} />
                  {project.location}
                </div>
                <h3 className="text-3xl font-bold text-slate-900">{project.title}</h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  {project.description}
                </p>
                <ul className="space-y-3">
                  {['Full Inspection', 'Premium Materials', 'Lifetime Warranty'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                      <div className="w-5 h-5 rounded-full bg-orange-600 flex items-center justify-center text-white">
                        <ArrowRight size={12} />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="relative group overflow-hidden rounded-2xl shadow-lg">
                  <img 
                    src={project.before} 
                    alt="Before" 
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-sm text-white px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-widest">
                    Before
                  </div>
                </div>
                <div className="relative group overflow-hidden rounded-2xl shadow-lg">
                  <img 
                    src={project.after} 
                    alt="After" 
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-orange-600/90 backdrop-blur-sm text-white px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-widest">
                    After
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <button className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all shadow-xl flex items-center gap-2 mx-auto group">
            Free Inspection
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default BeforeAfter;
