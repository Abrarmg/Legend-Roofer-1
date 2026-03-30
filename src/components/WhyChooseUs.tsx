import React from 'react';
import { motion } from 'motion/react';
import { Users, DollarSign, Wrench, Award, Search } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      title: "Experienced Team",
      description: "Our roof repair experts are fully trained, licensed, and insured. We handle every job with the utmost professionalism.",
      icon: <Users size={32} />
    },
    {
      title: "Affordable Prices",
      description: "We offer competitive pricing and transparent quotes. Our services cater to both residential and commercial needs.",
      icon: <DollarSign size={32} />
    },
    {
      title: "Comprehensive Services",
      description: "From emergency roof repairs to flat roof repairs, we handle it all.",
      icon: <Wrench size={32} />
    },
    {
      title: "Lifetime Guarantee",
      description: "We believe in our work. That's why we provide a lifetime guarantee on our services.",
      icon: <Award size={32} />
    },
    {
      title: "Free Inspection",
      description: "Not sure if you need roof repair? Contact us for a free inspection to evaluate your roof’s condition.",
      icon: <Search size={32} />
    }
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 font-display">Why Choose Legend Roofer?</h2>
          <p className="text-lg text-slate-600">
            When it comes to roof repair in Mississauga, you want a company that is reliable, trustworthy, and experienced. Legend Roofer stands out because of our:
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group ${i >= 3 ? 'lg:col-span-1' : ''}`}
            >
              <div className="bg-orange-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-600 transition-colors duration-300">
                {React.cloneElement(feature.icon as React.ReactElement, { 
                  className: "text-orange-600 group-hover:text-white transition-colors duration-300" 
                })}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
