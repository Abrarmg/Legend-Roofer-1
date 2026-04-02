import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Send, CheckCircle2, Clock, ShieldCheck, Award, Star } from 'lucide-react';
import { useLeadModal } from '../context/LeadModalContext';

const ContactUs = () => {
  const { openModal } = useLeadModal();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Roof Inspection',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch("https://formsubmit.co/ajax/naeemseo7860@gmail.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      setIsSubmitted(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
            alt="Modern Building" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black mb-6"
          >
            Contact <span className="text-orange-500">Us</span>
          </motion.h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Ready for a legendary roof? Get in touch with Mississauga's most trusted roofing experts today for a free inspection and estimate.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Information */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-black text-slate-900 mb-8">Get in Touch</h2>
              <p className="text-lg text-slate-600 mb-12 leading-relaxed">
                Whether you have an emergency leak or are planning a full roof replacement, our team is ready to provide the honest assessments and expert craftsmanship you deserve.
              </p>

              <div className="space-y-8 mb-12">
                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600 flex-shrink-0">
                    <Mail size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">Email Us</h3>
                    <p className="text-slate-500 mb-2">We respond to all inquiries within 24 hours</p>
                    <a href="mailto:info@legendroofer.com" className="text-xl font-bold text-slate-700 hover:text-orange-600 transition-colors">
                      info@legendroofer.com
                    </a>
                  </div>
                </div>

              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
                  <Clock className="text-orange-600 mb-3" size={24} />
                  <h4 className="font-bold text-slate-900 mb-1">Business Hours</h4>
                  <p className="text-sm text-slate-500">Mon - Fri: 8am - 6pm<br />Sat: 9am - 2pm</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
                  <ShieldCheck className="text-orange-600 mb-3" size={24} />
                  <h4 className="font-bold text-slate-900 mb-1">Emergency Service</h4>
                  <p className="text-sm text-slate-500">Available 24/7 for urgent roof leaks</p>
                </div>
              </div>
            </motion.div>

            {/* Lead Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl border border-slate-100 relative overflow-hidden"
            >
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={48} />
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 mb-4">Thank You!</h3>
                  <p className="text-lg text-slate-600 mb-8">
                    Your request has been received. One of our roofing specialists will contact you shortly to schedule your free inspection.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="text-orange-600 font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-10">
                    <h3 className="text-3xl font-black text-slate-900 mb-3">Get a Free Inspection</h3>
                    <p className="text-slate-500">Fill out the form below and we'll get back to you within 24 hours.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-bold text-slate-700 uppercase tracking-wider">Full Name</label>
                        <input 
                          type="text" 
                          id="name" 
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-orange-600 transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-bold text-slate-700 uppercase tracking-wider">Phone Number</label>
                        <input 
                          type="tel" 
                          id="phone" 
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="(905) 000-0000"
                          className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-orange-600 transition-all"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-bold text-slate-700 uppercase tracking-wider">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-orange-600 transition-all"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="service" className="text-sm font-bold text-slate-700 uppercase tracking-wider">Service Needed</label>
                      <select 
                        id="service" 
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-orange-600 transition-all appearance-none"
                      >
                        <option>Roof Replacement</option>
                        <option>Roof Repair</option>
                        <option>Commercial Roof Repair</option>
                        <option>Emergency Roof Repair</option>
                        <option>Metal Roofing</option>
                        <option>Flat Roof Repair</option>
                        <option>Slate Roofing</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-bold text-slate-700 uppercase tracking-wider">Message (Optional)</label>
                      <textarea 
                        id="message" 
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your roofing needs..."
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-orange-600 transition-all resize-none"
                      ></textarea>
                    </div>

                    <button 
                      type="submit"
                      className="w-full bg-orange-600 text-white py-5 rounded-2xl font-black text-xl shadow-xl hover:bg-orange-700 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3"
                    >
                      Request Free Inspection
                      <Send size={24} />
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all">
            <div className="flex items-center gap-3">
              <Award size={32} className="text-slate-900" />
              <span className="font-bold text-slate-900 uppercase tracking-tighter">GAF Certified</span>
            </div>
            <div className="flex items-center gap-3">
              <ShieldCheck size={32} className="text-slate-900" />
              <span className="font-bold text-slate-900 uppercase tracking-tighter">Fully Insured</span>
            </div>
            <div className="flex items-center gap-3">
              <Star size={32} className="text-slate-900" />
              <span className="font-bold text-slate-900 uppercase tracking-tighter">5-Star Rated</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 size={32} className="text-slate-900" />
              <span className="font-bold text-slate-900 uppercase tracking-tighter">WSIB Compliant</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ContactUs;
