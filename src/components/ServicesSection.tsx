import React from 'react';
import { motion } from 'motion/react';
import { Hammer, BrickWall, Clock, Wrench, Maximize, Home, Wind, ShieldCheck } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      title: 'Roof Repair',
      desc: 'Expert repair for asphalt, slate, and metal roofs.',
      icon: <Hammer />,
      img: 'https://images.unsplash.com/photo-1632759145351-1d592919f522?q=80&w=2070&auto=format&fit=crop',
      badge: 'POPULAR'
    },
    {
      title: 'Commercial Roof',
      desc: 'Specialized maintenance for flat and complex commercial systems.',
      icon: <BrickWall />,
      img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop',
      badge: 'PREMIUM'
    },
    {
      title: 'Emergency Repair',
      desc: '24/7 rapid response for storm damage and urgent leaks.',
      icon: <Clock />,
      img: 'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&w=2070&auto=format&fit=crop',
      badge: 'URGENT'
    },
    {
      title: 'Metal Roofing',
      desc: 'Precision restoration for durable metal roofing systems.',
      icon: <Wrench />,
      img: 'https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?q=80&w=2070&auto=format&fit=crop'
    },
    {
      title: 'Flat Roof Repair',
      desc: 'Specialized EPDM and TPO solutions for ponding and leaks.',
      icon: <Maximize />,
      img: 'https://images.unsplash.com/photo-1605117815534-79338c928256?q=80&w=2070&auto=format&fit=crop'
    },
    {
      title: 'Marley Roofing',
      desc: 'Expert tile replacement and flashing repair for Marley roofs.',
      icon: <Home />,
      img: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop'
    },
    {
      title: 'Slate Roofing',
      desc: 'Careful restoration and replacement of fragile slate tiles.',
      icon: <ShieldCheck />,
      img: 'https://images.unsplash.com/photo-1503387762-592dec58ef4e?q=80&w=1931&auto=format&fit=crop'
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Our Roof Repair Services in Mississauga</h2>
          <p className="text-lg text-slate-600">
            Legend Roofer specializes in all types of roof repairs, ensuring your home or business stays protected against the elements with expert workmanship.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-[450px] rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="absolute inset-0">
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent"></div>
              </div>

              {service.badge && (
                <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-md border border-white/30 px-4 py-1.5 rounded-full">
                  <span className="text-white text-[10px] font-black tracking-[0.2em] uppercase">{service.badge}</span>
                </div>
              )}

              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="bg-[#F54900] w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  {React.cloneElement(service.icon as React.ReactElement, { size: 24, className: "text-white" })}
                </div>

                <h3 className="text-3xl font-black text-white mb-3 uppercase tracking-tight leading-none italic">
                  {service.title}
                </h3>
                
                <p className="text-slate-200 mb-8 leading-relaxed text-sm font-medium max-w-[90%]">
                  {service.desc}
                </p>

                <button className="bg-white text-slate-900 px-8 py-3.5 rounded-full font-black text-xs uppercase tracking-widest hover:bg-[#F54900] hover:text-white transition-all duration-300 w-fit shadow-xl">
                  Free Inspection
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
