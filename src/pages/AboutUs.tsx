import React from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  Clock, 
  Users, 
  Award, 
  CheckCircle2, 
  Heart, 
  MapPin, 
  History, 
  Star,
  Quote,
  ArrowRight,
  Shield,
  Briefcase,
  ThumbsUp,
  Home
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLeadModal } from '../context/LeadModalContext';

const AboutUs = () => {
  const { openModal } = useLeadModal();
  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1635424710928-0544e8512eae?q=80&w=2071&auto=format&fit=crop" 
            alt="About Legend Roofer" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              About Legend Roofer
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              The Roofing Company Mississauga Homeowners Call First. Locally owned, operated, and dedicated to honest craftsmanship across the GTA.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={openModal}
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center gap-2 shadow-xl shadow-orange-600/20"
              >
                Free Inspection
                <ArrowRight size={20} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">The Roofing Company Mississauga Homeowners Call First</h2>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                Legend Roofer is a locally owned and operated roofing company serving Mississauga and the Greater Toronto Area. We specialize in roof repair, roof replacement, emergency roofing services, and new installations for residential and commercial properties — delivering honest assessments, transparent pricing, and workmanship that lasts.
              </p>
              <p>
                We started this company with a simple idea: homeowners and business owners in Mississauga deserve a roofer who tells the truth, shows up on time, and does the job right the first time. No upselling. No scare tactics. No cutting corners. Just quality roofing from people who take pride in every project we complete.
              </p>
              <p>
                With over a decade of hands-on experience, hundreds of completed projects across the GTA, and a growing list of five-star reviews from real Mississauga homeowners, Legend Roofer has earned its reputation as one of the best roofing companies in Mississauga — one roof at a time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Grid Layout */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Mississauga Chooses Us</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">We've built our reputation on honesty, local expertise, and uncompromising quality.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Honesty You Can Trust",
                desc: "We fix what needs fixing and never push work that isn't necessary. If your roof has years left, we'll tell you.",
                icon: <ShieldCheck className="text-orange-600" />
              },
              {
                title: "Local Knowledge",
                desc: "We live here. We know how Lake Ontario's humidity and GTA winters punish different roofing systems.",
                icon: <MapPin className="text-orange-600" />
              },
              {
                title: "In-House Craftsmanship",
                desc: "We never subcontract. Our team of certified specialists handles every project from start to finish.",
                icon: <Users className="text-orange-600" />
              },
              {
                title: "Transparent Pricing",
                desc: "Our quotes are all-inclusive. No surprise line items, no hidden fees, no invoice-day shocks.",
                icon: <Award className="text-orange-600" />
              },
              {
                title: "Real Warranties",
                desc: "We back our work with comprehensive workmanship warranties and premium manufacturer backing.",
                icon: <Shield className="text-orange-600" />
              },
              {
                title: "Safety & Accountability",
                desc: "Fully insured with WSIB coverage. We protect your property and our crew on every single job.",
                icon: <ShieldCheck className="text-orange-600" />
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story & Values - Split Layout */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <History className="text-orange-600" />
                  Our Story
                </h2>
                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p>Legend Roofer didn't start in a boardroom. It started on rooftops.</p>
                  <p>Our founder spent years working in the roofing trade across the GTA — learning every system, every material, and every technique. He saw too many companies treating homeowners like transactions.</p>
                  <p>Legend Roofer was built to be different. We set out to create the kind of roofing company we'd want to hire for our own homes — one that communicates clearly, prices honestly, and shows up when promised.</p>
                </div>
                <Link to="/contact-us" className="inline-flex items-center gap-2 mt-8 text-orange-600 font-bold hover:gap-3 transition-all">
                  Free Inspection <ArrowRight size={20} />
                </Link>
              </div>
            </div>
            <div className="bg-slate-900 p-10 rounded-[3rem] text-white relative">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <Shield className="text-orange-500" />
                Our Values
              </h2>
              <div className="grid gap-6">
                {[
                  { title: "Do the Right Thing", desc: "Even when it costs us a sale. Honesty is our foundation.", icon: <Heart size={20} /> },
                  { title: "Respect Every Home", desc: "We protect your landscaping and leave your property spotless.", icon: <Home size={20} /> },
                  { title: "Communicate Clearly", desc: "No jargon. No vague timelines. You're always in the loop.", icon: <Users size={20} /> },
                  { title: "Stand Behind Work", desc: "If something isn't right, we make it right. No excuses.", icon: <ShieldCheck size={20} /> }
                ].map((value, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="text-orange-500 mt-1">{value.icon}</div>
                    <div>
                      <h4 className="font-bold mb-1">{value.title}</h4>
                      <p className="text-slate-400 text-sm">{value.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Serving Mississauga and the GTA</h2>
            <p className="text-slate-600">Legend Roofer proudly serves homeowners and commercial property owners across all Mississauga neighbourhoods and the wider GTA.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <MapPin className="text-orange-600" />
                Mississauga
              </h3>
              <div className="grid grid-cols-2 gap-2 text-sm text-slate-600">
                {["Port Credit", "Streetsville", "Erin Mills", "Meadowvale", "Cooksville", "Churchill Meadows", "Clarkson", "Lakeview", "Lorne Park", "Malton", "Dixie", "East Credit", "Lisgar", "Square One", "Applewood", "Rathwood"].map((area, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-orange-600 rounded-full" />
                    {area}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <MapPin className="text-orange-600" />
                GTA
              </h3>
              <div className="grid grid-cols-2 gap-2 text-sm text-slate-600">
                {["Brampton", "Oakville", "Burlington", "Milton", "Etobicoke", "Toronto", "Vaughan", "Richmond Hill"].map((area, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-orange-600 rounded-full" />
                    {area}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-6">Ready to Work with a Roofing Company That Puts You First?</h2>
          <p className="text-xl mb-10 opacity-90">Whether you need a quick repair, a full replacement, or just want a professional opinion, we're here to help.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <button 
              onClick={openModal}
              className="bg-slate-900 text-white px-10 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform"
            >
              Free Inspection
            </button>
            <Link to="/contact-us" className="bg-white text-orange-600 px-10 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform flex items-center gap-2">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
