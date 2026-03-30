import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Clock, 
  DollarSign, 
  ArrowRight, 
  CheckCircle2, 
  Building2, 
  Droplets, 
  Zap, 
  History,
  AlertTriangle,
  HelpCircle,
  Phone
} from 'lucide-react';
import { useLeadModal } from '../context/LeadModalContext';

const CommercialRoofRepair = () => {
  const { openModal } = useLeadModal();
  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <img 
            src="https://i.ibb.co/qYWzjLD7/image.png" 
            alt="Commercial Roofing" 
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
              Commercial Roof Repair Mississauga — <span className="text-orange-500">Professional Solutions for Every Business</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Your commercial roof protects everything underneath it — your inventory, your equipment, your employees, and your bottom line. When it starts failing, the damage adds up fast.
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

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none text-slate-600">
                <p className="mb-6">
                  At Legend Roofer, we provide the best commercial roof repair in Mississauga for business owners and property managers across the GTA. Whether you're dealing with an active leak, storm damage, or a roof that's simply showing its age, our team delivers fast, reliable repairs that keep your business running.
                </p>

                <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 flex items-center gap-3">
                  <Building2 className="text-orange-600" />
                  What Is Commercial Roof Repair?
                </h2>
                <p className="mb-4">
                  Commercial roof repair is the process of identifying and fixing damage on roofing systems installed on commercial and industrial properties. Unlike residential roofs, commercial buildings typically use flat or low-slope roofing systems — TPO, EPDM, modified bitumen, built-up roofing (BUR), or metal — and each system requires specialized knowledge, tools, and materials to repair correctly.
                </p>
                <p className="mb-4">
                  Commercial roof leak repair goes beyond patching a visible hole. It involves tracing the source of water intrusion, which can travel far from the original entry point along seams, flashing, or structural joints before showing up as a stain on your ceiling. Commercial roof waterproofing is often a critical part of the repair process, creating a sealed barrier that prevents future water penetration and extends the life of the entire system.
                </p>
                <p className="mb-6 italic border-l-4 border-orange-600 pl-4 py-2 bg-slate-50">
                  The key difference between commercial and residential repairs comes down to scale, complexity, and the roofing materials involved. A warehouse in Meadowvale and a retail plaza in Port Credit have very different roofing needs — and getting those details wrong means recurring problems and wasted money.
                </p>

                <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
                  What's Included in Professional Commercial Roof Repair?
                </h2>
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                  {[
                    { title: "Full Roof Inspection", desc: "We examine the entire roof surface, checking for membrane damage, ponding water, deteriorated flashing, and failed seams." },
                    { title: "Leak Detection & Tracing", desc: "We use systematic inspection methods to trace the actual source of water intrusion and fix it properly." },
                    { title: "Membrane & Flashing Repair", desc: "Repair or replace damaged sections using manufacturer-approved materials for TPO, EPDM, or modified bitumen." },
                    { title: "Drainage Correction", desc: "We clear blocked drains, regrade low spots, and ensure water flows off your roof as designed." },
                    { title: "Commercial Waterproofing", desc: "Applying membranes or coatings to create a seamless barrier that prevents future leaks." },
                    { title: "Cleanup & Documentation", desc: "We provide a detailed report of all work completed, including photos and maintenance recommendations." }
                  ].map((item, i) => (
                    <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                        <CheckCircle2 className="text-orange-600" size={18} />
                        {item.title}
                      </h3>
                      <p className="text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>

                <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
                  Benefits of Timely Commercial Roof Repair
                </h2>
                <ul className="space-y-4 mb-12">
                  {[
                    { title: "Save Money vs. Full Replacement", desc: "Fixing problems early keeps them small and affordable compared to a full replacement that can exceed $50,000." },
                    { title: "Extend Your Roof's Lifespan", desc: "Regular repairs and waterproofing protect materials from UV degradation, moisture, and thermal stress." },
                    { title: "Improve Energy Efficiency", desc: "Waterproofing can reduce energy costs by up to 15% by adding insulation value and keeping buildings cooler." },
                    { title: "Prevent Business Disruption", desc: "Keep your doors open and your team productive by avoiding leaks that damage inventory or work areas." },
                    { title: "Maintain Compliance", desc: "Ensure your building meets Ontario building codes and insurance requirements." }
                  ].map((benefit, i) => (
                    <li key={i} className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-600">
                        <Zap size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900">{benefit.title}</h4>
                        <p className="text-sm">{benefit.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-8">
                <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl">
                  <h3 className="text-2xl font-bold mb-6">Who Needs Commercial Repair?</h3>
                  <ul className="space-y-4">
                    {["Office Buildings", "Retail & Shopping Plazas", "Warehouses & Industrial", "Restaurants & Food Service", "Multi-Unit Residential", "Schools & Medical Clinics"].map((type, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-300">
                        <Building2 size={18} className="text-orange-500" />
                        {type}
                      </li>
                    ))}
                  </ul>
                  <button 
                    onClick={openModal}
                    className="block w-full mt-8 bg-orange-600 hover:bg-orange-700 text-white py-4 rounded-xl font-bold text-center transition-all"
                  >
                    Free Inspection
                  </button>
                </div>

                <div className="bg-orange-50 p-8 rounded-3xl border border-orange-100">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Cost Breakdown</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between font-bold text-slate-900">
                        <span>Minor Repairs</span>
                        <span>$600 – $2,800</span>
                      </div>
                      <p className="text-xs text-slate-500">Single-area damage, localized patches.</p>
                    </div>
                    <div>
                      <div className="flex justify-between font-bold text-slate-900">
                        <span>Medium Repairs</span>
                        <span>$2,800 – $8,200</span>
                      </div>
                      <p className="text-xs text-slate-500">Multiple problem areas, drainage corrections.</p>
                    </div>
                    <div>
                      <div className="flex justify-between font-bold text-slate-900">
                        <span>Major Repairs</span>
                        <span>$8,200 – $16,500+</span>
                      </div>
                      <p className="text-xs text-slate-500">Large-scale damage, structural work.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center flex items-center justify-center gap-3">
              <HelpCircle className="text-orange-600" />
              FAQs — Commercial Roof Repair Mississauga
            </h2>
            <div className="space-y-6">
              {[
                { q: "What are the signs my commercial roof needs repair?", a: "Watch for water stains on ceilings, ponding water, membrane bubbling, damaged flashing, increased energy bills, or musty smells. If your roof is over 15 years old, schedule an inspection." },
                { q: "Should I repair or replace my commercial roof?", a: "If damage is localized and the roof is under 15 years old, repair is usually smarter. If leaks are recurring or the membrane is severely deteriorated, replacement saves more money long-term." },
                { q: "How long does commercial roof repair take?", a: "Minor repairs take a few hours to a day. Medium repairs take 1-2 days. Major repairs involving large sections or structural work may take 3-5 days." },
                { q: "Do you offer emergency commercial roof repair?", a: <p>Yes. We provide fast-response <Link to="/emergency-roof-repair" className="text-orange-600 hover:underline">emergency repair services</Link> for storm damage or sudden leaks that threaten your business operations.</p> },
                { q: "What is commercial roof waterproofing?", a: "It involves applying a protective coating to create a seamless, watertight barrier. It prevents leaks, improves energy efficiency, and extends your roof's lifespan." }
              ].map((faq, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                  <h4 className="font-bold text-slate-900 mb-2">{faq.q}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-6">Protect Your Business Today</h2>
          <p className="text-xl mb-10 opacity-90">Get a professional assessment and honest quote from Mississauga's commercial roofing experts.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <button 
              onClick={openModal}
              className="bg-slate-900 text-white px-10 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform"
            >
              Free Inspection
            </button>
            <Link to="/contact-us" className="bg-white text-orange-600 px-10 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommercialRoofRepair;
