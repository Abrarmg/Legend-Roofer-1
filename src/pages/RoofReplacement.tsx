import React from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  Building2, 
  Zap, 
  Wrench,
  HelpCircle,
  MapPin,
  Hammer,
  Search,
  Layers,
  Award,
  TrendingUp,
  DollarSign,
  Truck,
  ClipboardCheck,
  Home
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLeadModal } from '../context/LeadModalContext';

const RoofReplacement = () => {
  const { openModal } = useLeadModal();
  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1632759145351-1d592919f522?q=80&w=2070&auto=format&fit=crop" 
            alt="Roof Replacement" 
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
              Roof Replacement Mississauga
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Every roof has a lifespan. When yours has reached the end of it — recurring leaks, widespread shingle damage, or sagging decking — patching it again is just throwing money at a losing battle. A full roof replacement is the smarter, more cost-effective decision.
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
                  Legend Roofer provides the best roof replacement in Mississauga for homeowners and commercial property owners across the GTA. We handle everything — from asphalt shingles to metal roof replacement in Mississauga — with transparent pricing, quality materials, and workmanship backed by manufacturer warranties.
                </p>

                <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 flex items-center gap-3">
                  <Home className="text-orange-600" />
                  What Is Roof Replacement?
                </h2>
                <p className="mb-4">
                  Roof replacement is the complete removal of your existing roofing system — shingles or membrane, underlayment, damaged flashing, and deteriorated decking — followed by the installation of an entirely new roof from the deck up. It's not a repair. It's not an overlay. It's a full tear-off and rebuild that gives your home a fresh, structurally sound roofing system designed to perform for decades.
                </p>
                <p className="mb-4">
                  A proper roof replacement in Mississauga includes stripping all existing roofing materials down to the deck, inspecting and repairing the plywood or OSB decking for rot, soft spots, and water damage, installing new ice and water shield along eaves, valleys, and around penetrations, laying high-quality synthetic underlayment across the entire roof surface, installing new drip edge, flashing, and ventilation components, and applying your chosen roofing material — asphalt shingles, metal panels, flat roof membrane, or premium options like slate or cedar.
                </p>
                <p className="mb-6 italic border-l-4 border-orange-600 pl-4 py-2 bg-slate-50">
                  The key difference between replacement and repair is scope. Repairs fix localized problems. Replacement addresses the entire system — ensuring every layer from the deck to the ridge cap is performing at its best.
                </p>

                <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
                  What's Included in a Professional Roof Replacement?
                </h2>
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                  {[
                    { title: "Full Tear-Off & Disposal", desc: "We strip every layer of existing material down to the deck. No overlays. All debris is disposed of properly.", icon: <Truck className="text-orange-600" /> },
                    { title: "Deck Inspection & Repair", desc: "We inspect the decking for rot or damage and replace plywood sheets as needed for a solid foundation.", icon: <ClipboardCheck className="text-orange-600" /> },
                    { title: "Ice & Water Shield", desc: "Installation of protective membrane along eaves, valleys, and penetrations against water intrusion.", icon: <ShieldCheck className="text-orange-600" /> },
                    { title: "Premium Underlayment", desc: "High-quality synthetic underlayment covers the entire deck for a secondary waterproof barrier.", icon: <Layers className="text-orange-600" /> },
                    { title: "New Flashing & Ventilation", desc: "New flashing for chimneys and vents, plus upgraded attic ventilation for better airflow and longevity.", icon: <Zap className="text-orange-600" /> },
                    { title: "Expert Installation", desc: "Precise installation of your chosen material according to manufacturer specifications for full warranty.", icon: <Hammer className="text-orange-600" /> }
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
                  Benefits of Roof Replacement
                </h2>
                <ul className="space-y-4 mb-12">
                  {[
                    { title: "Decades of Worry-Free Protection", desc: "New roofs last 20 to 70+ years depending on material, ending the cycle of recurring leaks.", icon: <Clock /> },
                    { title: "End Recurring Repair Costs", desc: "Replacing a past-its-prime roof is more economical than throwing money at repeated patches.", icon: <DollarSign /> },
                    { title: "Improved Energy Efficiency", desc: "Modern materials and proper ventilation significantly reduce heating and cooling costs.", icon: <Zap /> },
                    { title: "Increased Property Value", desc: "A new roof is a high-ROI improvement that buyers value and pay more for.", icon: <TrendingUp /> },
                    { title: "Full Manufacturer Warranty", desc: "Qualify for 25 to 50-year material warranties that repairs simply can't offer.", icon: <Award /> },
                    { title: "Peace of Mind", desc: "Confidence that your home is protected against Mississauga's worst ice storms and downpours.", icon: <ShieldCheck /> }
                  ].map((benefit, i) => (
                    <li key={i} className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-600">
                        {React.cloneElement(benefit.icon as React.ReactElement, { size: 20 })}
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
                  <h3 className="text-2xl font-bold mb-6">Who Needs Replacement?</h3>
                  <ul className="space-y-4">
                    {[
                      "Roofs Over 20 Years Old", 
                      "Recurring Leak Problems", 
                      "Widespread Shingle Damage", 
                      "Homeowners Planning to Sell", 
                      "Commercial Property Owners",
                      "Upgrading to Metal Roofing"
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
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Replacement Cost Guide</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between font-bold text-slate-900">
                        <span>Asphalt Shingles</span>
                        <span>$8,500 – $20,000</span>
                      </div>
                      <p className="text-xs text-slate-500">Typical Mississauga home (1,500-2,500 sq ft).</p>
                    </div>
                    <div>
                      <div className="flex justify-between font-bold text-slate-900">
                        <span>Metal Roofing</span>
                        <span>$10,500 – $22,500</span>
                      </div>
                      <p className="text-xs text-slate-500">Durable standing seam or metal shingles.</p>
                    </div>
                    <div>
                      <div className="flex justify-between font-bold text-slate-900">
                        <span>Flat Roof (TPO/EPDM)</span>
                        <span>$5 – $17 / sq ft</span>
                      </div>
                      <p className="text-xs text-slate-500">Commercial and low-slope residential.</p>
                    </div>
                    <div>
                      <div className="flex justify-between font-bold text-slate-900">
                        <span>Premium (Slate/Cedar)</span>
                        <span>$15 – $35 / sq ft</span>
                      </div>
                      <p className="text-xs text-slate-500">Lifetime investment for heritage homes.</p>
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
            <p className="text-slate-600">Legend Roofer provides expert roof replacement throughout the Greater Toronto Area.</p>
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
              FAQs — Roof Replacement Mississauga
            </h2>
            <div className="space-y-6">
              {[
                { q: "How do I know if I need a roof replacement vs. a repair?", a: "Single-area damage typically calls for repair. If your roof is over 20 years old, has multiple active leaks, or widespread shingle deterioration, replacement is almost always the better investment." },
                { q: "How long does a roof replacement take in Mississauga?", a: "Most residential replacements are completed in 1 to 3 days. Simple bungalows can be done in a single day, while larger homes take two to three days." },
                { q: "What's the best roofing material for Mississauga?", a: "Architectural asphalt shingles offer the best balance of cost and performance. Metal roofing excels in our climate by shedding snow naturally and lasting 40-50+ years." },
                { q: "Will my old roof be overlaid or fully torn off?", a: "Legend Roofer always performs a full tear-off. Overlays trap moisture, hide deck damage, add unnecessary weight, and void manufacturer warranties." },
                { q: "Do I need a permit for roof replacement in Mississauga?", a: "Most like-for-like replacements don't require permits. However, structural changes or adding skylights might. We handle all permitting requirements for you." }
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
          <h2 className="text-3xl md:text-5xl font-black mb-6">Ready for a New Roof? Get Your Free Estimate Today</h2>
          <p className="text-xl mb-10 opacity-90">Legend Roofer provides the best roof replacement in Mississauga with honest assessments and quality workmanship.</p>
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

export default RoofReplacement;
