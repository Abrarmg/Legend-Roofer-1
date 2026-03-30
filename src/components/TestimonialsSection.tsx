import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Quote, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    type: "Emergency Roof Repair",
    stars: 5,
    text: "Water pouring through our ceiling after an ice storm. Legend Roofer showed up within two hours, found the damaged chimney flashing, and completed the emergency roof repair same day. Honest pricing, zero surprises. Best emergency roof repair in Mississauga.",
    author: "Priya M.",
    location: "Meadowvale, Mississauga"
  },
  {
    type: "Flat Roof Repair",
    stars: 5,
    text: "Two contractors couldn't find our leak. Legend Roofer pinpointed the failed membrane in one visit and finished the flat roof repair in a single day — new TPO membrane, proper drainage. Eight months in, not a drop. Best roofing company in Mississauga.",
    author: "Daniel K.",
    location: "Cooksville, Mississauga"
  },
  {
    type: "Full Roof Replacement",
    stars: 5,
    text: "Got four quotes — Legend Roofer gave the most detailed breakdown. Entire roof stripped and re-shingled in two days with GAF Timberline HDZ. Cleanup was spotless. Best investment we've made in this house.",
    author: "Sarah & Tom L.",
    location: "Erin Mills, Mississauga"
  },
  {
    type: "Metal Roof Repair",
    stars: 5,
    text: "Two companies said replace the whole metal roof. Legend Roofer assessed it honestly — only one panel and ridge sealant needed fixing. Half a day, fraction of the cost. That honesty is rare. Already recommended them to three neighbours in Mississauga.",
    author: "Robert A.",
    location: "Streetsville, Mississauga"
  },
  {
    type: "Roof Inspection & Maintenance",
    stars: 5,
    text: "Just wanted a professional opinion on some granules in the gutter. Legend Roofer found minor flashing wear, fixed it on the spot. No upselling, no scare tactics — told me my roof had five to seven good years left. They'll be my first call for roof replacement in Mississauga when the time comes.",
    author: "James H.",
    location: "Churchill Meadows, Mississauga"
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsToShow(1);
      } else if (window.innerWidth < 1024) {
        setItemsToShow(2);
      } else {
        setItemsToShow(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % (testimonials.length - itemsToShow + 1));
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + (testimonials.length - itemsToShow + 1)) % (testimonials.length - itemsToShow + 1));
  };

  const maxIndex = testimonials.length - itemsToShow;
  const safeIndex = Math.min(currentIndex, maxIndex);

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100/50 rounded-full blur-3xl -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-200/50 rounded-full blur-3xl -ml-48 -mb-48" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-orange-600 font-bold tracking-wider uppercase text-sm mb-4 block"
          >
            Real Reviews
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight"
          >
            What Mississauga Homeowners Say About Our Roof Repair Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600"
          >
            Here's what real homeowners across Mississauga say about Legend Roofer
          </motion.p>
        </div>

        <div className="relative group">
          <div className="overflow-hidden">
            <motion.div 
              className="flex gap-6"
              animate={{ x: `calc(-${safeIndex * (100 / itemsToShow)}% - ${safeIndex * (24 / itemsToShow)}px)` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="flex-shrink-0"
                  style={{ width: `calc((100% - ${(itemsToShow - 1) * 24}px) / ${itemsToShow})` }}
                >
                  <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 h-full flex flex-col hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex gap-1">
                        {[...Array(testimonial.stars)].map((_, i) => (
                          <Star key={i} size={18} className="fill-orange-500 text-orange-500" />
                        ))}
                      </div>
                      <Quote className="text-slate-100" size={40} />
                    </div>
                    
                    <div className="mb-4">
                      <span className="text-xs font-bold uppercase tracking-widest text-orange-600 bg-orange-50 px-3 py-1 rounded-full">
                        {testimonial.type}
                      </span>
                    </div>

                    <p className="text-slate-700 leading-relaxed mb-8 flex-grow italic">
                      "{testimonial.text}"
                    </p>

                    <div className="pt-6 border-t border-slate-50">
                      <p className="font-bold text-slate-900 text-lg">{testimonial.author}</p>
                      <div className="flex items-center gap-2 text-slate-500 text-sm mt-1">
                        <MapPin size={14} />
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={prev}
            disabled={safeIndex === 0}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-slate-900 hover:bg-orange-600 hover:text-white transition-all z-20 disabled:opacity-0 disabled:pointer-events-none`}
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={next}
            disabled={safeIndex >= maxIndex}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-slate-900 hover:bg-orange-600 hover:text-white transition-all z-20 disabled:opacity-0 disabled:pointer-events-none`}
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-12">
          {[...Array(testimonials.length - itemsToShow + 1)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-2 h-2 rounded-full transition-all ${safeIndex === i ? 'w-8 bg-orange-600' : 'bg-slate-300'}`}
            />
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-20 bg-slate-900 rounded-3xl p-12 text-center text-white relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-500 via-transparent to-transparent" />
          </div>
          <h3 className="text-3xl font-bold mb-4 relative z-10">Join Hundreds of Satisfied Customers</h3>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto relative z-10">
            Experience the Legend Roofer difference today. We provide honest assessments and legendary workmanship for every roof in Mississauga.
          </p>
          <button className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all shadow-xl shadow-orange-600/20 relative z-10">
            Get Your Free Estimate
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
