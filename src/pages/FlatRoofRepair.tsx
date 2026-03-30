import React from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  Clock, 
  DollarSign, 
  ArrowRight, 
  CheckCircle2, 
  Building2, 
  Zap, 
  Wrench,
  AlertTriangle,
  HelpCircle,
  MapPin,
  Hammer,
  Search,
  Maximize,
  Droplets,
  Layers
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLeadModal } from '../context/LeadModalContext';

const FlatRoofRepair = () => {
  const { openModal } = useLeadModal();
  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <img 
            src="https://i.ibb.co/v6KqJqPn/image.png" 
            alt="Flat Roof Repair" 
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
              Flat Roof Repair Mississauga — <span className="text-orange-500">Trusted Flat Roofing Contractors Near You</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Flat roofs demand specialized care that most general roofers can't provide. Ponding water, membrane failure, drainage problems, and blistering are all common — and all fixable when you have the right team.
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
                  Legend Roofer is one of the most experienced flat roofing contractors near me in Mississauga, delivering expert flat roof repair, maintenance, and installation for residential and commercial properties across the GTA. If your flat roof is leaking, aging, or showing signs of trouble, we'll fix it right the first time.
                </p>

                <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 flex items-center gap-3">
                  <Maximize className="text-orange-600" />
                  What Is Flat Roof Repair?
                </h2>
                <p className="mb-4">
                  Flat roof repair is the process of diagnosing and fixing issues specific to low-slope and flat roofing systems. These systems use materials fundamentally different from pitched roofs — EPDM rubber, TPO, PVC, modified bitumen, and built-up roofing (BUR) — and each requires its own repair methods, adhesives, and tools.
                </p>
                <p className="mb-4">
                  The biggest challenge with flat roofs is water. Unlike sloped roofs that shed rain and snow by gravity, flat roofs rely entirely on their membrane integrity and drainage systems to keep water out. When a seam fails, a drain clogs, or the membrane blisters, water has nowhere to go but into your building.
                </p>
                <p className="mb-6 italic border-l-4 border-orange-600 pl-4 py-2 bg-slate-50">
                  Common flat roof problems include ponding water that sits for more than 48 hours after rainfall, membrane blistering and bubbling caused by trapped moisture, seam separation at membrane joints and flashing transitions, cracking in modified bitumen or BUR surfaces from thermal cycling, punctures from foot traffic, dropped tools, or fallen debris, and clogged or poorly graded drainage systems.
                </p>

                <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
                  What's Included in Professional Flat Roof Repair?
                </h2>
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                  {[
                    { title: "Full Flat Roof Inspection", desc: "We examine every square foot of membrane, every seam, every flashing transition, and every drain.", icon: <Search className="text-orange-600" /> },
                    { title: "Ponding Water Assessment", desc: "We identify the cause of pooling water and correct it to prevent structural damage.", icon: <Droplets className="text-orange-600" /> },
                    { title: "Membrane Repair and Patching", desc: "We patch tears, seal punctures, and re-bond lifted sections using manufacturer-approved materials.", icon: <Layers className="text-orange-600" /> },
                    { title: "Seam and Flashing Resealing", desc: "We reseal vulnerable joints using materials designed to flex with temperature changes.", icon: <ShieldCheck className="text-orange-600" /> },
                    { title: "Drainage Correction", desc: "We clear blocked drains, scuppers, and gutters, and correct grading issues.", icon: <Wrench className="text-orange-600" /> },
                    { title: "Blister and Bubble Repair", desc: "We cut, dry, and reseal blistered areas to stop the damage from spreading.", icon: <Zap className="text-orange-600" /> }
                  ].map((item, i) => (
                    <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                        {item.icon}
                        {item.title}
                      </h3>
                      <p className="text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>

                <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
                  Benefits of Timely Flat Roof Repair
                </h2>
                <ul className="space-y-4 mb-12">
                  {[
                    { title: "Prevent Interior Damage", desc: "Repairing a membrane tear costs a fraction of what it costs to fix the water damage it causes inside." },
                    { title: "Extend Your Roof's Lifespan", desc: "Proper maintenance and timely repairs can double the lifespan of your flat roof materials." },
                    { title: "Avoid Costly Replacement", desc: "Staying on top of small repairs keeps you well below the threshold for full replacement." },
                    { title: "Improve Energy Efficiency", desc: "Properly repaired flat roofs with intact reflective membranes keep cooling and heating costs manageable." },
                    { title: "Maintain Code Compliance", desc: "Ensure your building meets Ontario building codes and maintain your insurance coverage." },
                    { title: "Protect Business Operations", desc: "For commercial properties, timely repairs keep your business running and your liability exposure low." }
                  ].map((benefit, i) => (
                    <li key={i} className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-600">
                        <CheckCircle2 size={20} />
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
                  <h3 className="text-2xl font-bold mb-6">Who Needs Flat Repair?</h3>
                  <ul className="space-y-4">
                    {[
                      "Commercial Property Owners", 
                      "Warehouse & Industrial Operators", 
                      "Homeowners with Flat Additions", 
                      "Condo Boards & Management", 
                      "Restaurant & Retail Operators",
                      "Anyone Planning Installation"
                    ].map((type, i) => (
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
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Flat Repair Cost Guide</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between font-bold text-slate-900">
                        <span>Minor Repairs</span>
                        <span>$300 – $800</span>
                      </div>
                      <p className="text-xs text-slate-500">Patches, small seam work, drain clearing.</p>
                    </div>
                    <div>
                      <div className="flex justify-between font-bold text-slate-900">
                        <span>Moderate Repairs</span>
                        <span>$800 – $2,500</span>
                      </div>
                      <p className="text-xs text-slate-500">Membrane sections, flashing, drainage issues.</p>
                    </div>
                    <div>
                      <div className="flex justify-between font-bold text-slate-900">
                        <span>Major Repairs</span>
                        <span>$2,500 – $5,000+</span>
                      </div>
                      <p className="text-xs text-slate-500">Extensive membrane replacement, structural work.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Areas We Serve in Mississauga & GTA</h2>
            <p className="text-slate-600">Legend Roofer provides expert flat roof repair throughout the Greater Toronto Area.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <MapPin className="text-orange-600" />
                Mississauga Neighbourhoods
              </h3>
              <div className="grid grid-cols-2 gap-2 text-sm text-slate-600">
                {["Port Credit", "Streetsville", "Erin Mills", "Meadowvale", "Cooksville", "Churchill Meadows", "Clarkson", "Lakeview", "Lorne Park", "Malton", "Dixie", "East Credit", "Lisgar"].map((area, i) => (
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
                Greater Toronto Area
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

      {/* FAQs Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center flex items-center justify-center gap-3">
              <HelpCircle className="text-orange-600" />
              FAQs — Flat Roof Repair Mississauga
            </h2>
            <div className="space-y-6">
              {[
                { q: "What are the signs my flat roof needs repair?", a: "Watch for water stains on interior ceilings, visible ponding water that remains more than 48 hours after rain, blisters or bubbles in the membrane surface, separated or lifted seams, musty odours inside, and any visible tears, punctures, or cracks." },
                { q: "What flat roofing materials does Legend Roofer work with?", a: "We repair and install all major flat roofing systems, including EPDM rubber membrane, TPO (thermoplastic polyolefin), PVC, modified bitumen, and built-up roofing (BUR/tar and gravel)." },
                { q: "How long does flat roof repair take?", a: "Minor repairs are typically completed in a few hours to one day. Moderate repairs involving multiple areas take one to two days. Major repairs may take three to five days." },
                { q: "Should I repair or replace my flat roof?", a: "If damage is limited to one or two areas and the overall membrane is in reasonable condition, repair is the cost-effective choice. If you're patching the same roof repeatedly or the roof is past 75% of its expected lifespan, replacement provides better value." },
                { q: "Do you offer emergency flat roof repair in Mississauga?", a: "Yes. When your flat roof is actively leaking, Legend Roofer provides emergency flat roof repair with fast response to contain the damage and protect your property." }
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
          <h2 className="text-3xl md:text-5xl font-black mb-6">Get Your Flat Roof Inspected — Free, No Obligation</h2>
          <p className="text-xl mb-10 opacity-90">Legend Roofer has the flat roofing solutions your property needs — backed by experience and workmanship you can trust.</p>
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

export default FlatRoofRepair;
