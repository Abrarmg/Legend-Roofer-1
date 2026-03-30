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
  Search
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLeadModal } from '../context/LeadModalContext';

const MetalRoofRepair = () => {
  const { openModal } = useLeadModal();
  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <img 
            src="https://i.ibb.co/8nNQvfWL/image.png" 
            alt="Metal Roof Repair" 
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
              Metal Roof Repair Mississauga — <span className="text-orange-500">Expert Metal Roofing Company You Can Trust</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Metal roofs are built to last decades — but they're not invincible. Loose fasteners, corroded panels, failed sealants, and storm damage can all compromise a metal roof's performance long before it reaches end of life.
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
                  Legend Roofer specializes in metal roof repair in Mississauga for residential and commercial properties across the GTA. Whether you're dealing with a persistent leak, rust damage, or panels lifted by high winds, our team delivers precise, lasting repairs that protect your investment.
                </p>

                <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 flex items-center gap-3">
                  <Wrench className="text-orange-600" />
                  What Is Metal Roof Repair?
                </h2>
                <p className="mb-4">
                  Metal roof repair is the process of diagnosing and fixing damage specific to metal roofing systems — standing seam, corrugated, ribbed panels, metal shingles, and architectural metal. Unlike asphalt shingle repairs, metal roof work requires specialized tools, techniques, and materials that most general roofers simply don't carry.
                </p>
                <p className="mb-4">
                  Common metal roof problems include loose or backed-out fasteners caused by thermal expansion and contraction, failed sealant around seams and penetrations, rust and corrosion on exposed or damaged coatings, panel warping or oil canning, leaks around flashing at chimneys, vents, and skylights, and storm damage from hail, fallen branches, or high winds.
                </p>
                <p className="mb-6 italic border-l-4 border-orange-600 pl-4 py-2 bg-slate-50">
                  Metal roofing is a different trade from shingle work. Repairs done incorrectly — wrong sealants, mismatched metals, overtightened fasteners — create new problems instead of solving old ones. That's why choosing a dedicated metal roofing company in Mississauga matters more than most homeowners realize.
                </p>

                <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
                  What's Included in Professional Metal Roof Repair?
                </h2>
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                  {[
                    { title: "Metal Roof Inspection", desc: "We examine every panel, fastener, seam, and flashing point across the entire roof surface.", icon: <Search className="text-orange-600" /> },
                    { title: "Fastener Replacement", desc: "We replace corroded or failed fasteners and retighten those that have worked loose.", icon: <Wrench className="text-orange-600" /> },
                    { title: "Seam Resealing", desc: "We apply high-grade silicone sealants designed specifically for metal-to-metal connections.", icon: <ShieldCheck className="text-orange-600" /> },
                    { title: "Rust Treatment", desc: "We sand, prime, and recoat affected areas to stop the spread of corrosion.", icon: <Zap className="text-orange-600" /> },
                    { title: "Panel Replacement", desc: "Damaged or corroded panels are replaced with matching metal to blend seamlessly.", icon: <Hammer className="text-orange-600" /> },
                    { title: "Flashing Repair", desc: "We repair or replace compromised flashing with materials compatible with your specific metal type.", icon: <CheckCircle2 className="text-orange-600" /> }
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
                  Benefits of Metal Roof Repair and Maintenance
                </h2>
                <ul className="space-y-4 mb-12">
                  {[
                    { title: "Exceptional Lifespan", desc: "A quality metal roof in Ontario lasts 50+ years, but that depends on catching and fixing small issues early." },
                    { title: "Superior Snow and Ice Performance", desc: "Metal roofs shed snow naturally, reducing the risk of ice dams that plague shingle roofs." },
                    { title: "Energy Efficiency", desc: "Metal roofing reflects solar heat in summer, which means lower utility bills — but only if seams are intact." },
                    { title: "Low Ongoing Maintenance", desc: "Compared to shingles, metal roofs require significantly less upkeep and fewer recurring repairs." },
                    { title: "Increased Property Value", desc: "A well-maintained metal roof is a premium feature that signals durability and long-term savings." }
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
                  <h3 className="text-2xl font-bold mb-6">Who Needs Metal Repair?</h3>
                  <ul className="space-y-4">
                    {[
                      "Homeowners with Standing Seam", 
                      "Commercial & Industrial Properties", 
                      "Agricultural Buildings & Barns", 
                      "Property Owners Considering Metal", 
                      "Anyone Planning a Replacement"
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
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Metal Repair Cost Guide</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between font-bold text-slate-900">
                        <span>Minor Repairs</span>
                        <span>$150 – $600</span>
                      </div>
                      <p className="text-xs text-slate-500">Fasteners, small sealant work.</p>
                    </div>
                    <div>
                      <div className="flex justify-between font-bold text-slate-900">
                        <span>Moderate Repairs</span>
                        <span>$600 – $1,500</span>
                      </div>
                      <p className="text-xs text-slate-500">Seam resealing, flashing, leak repair.</p>
                    </div>
                    <div>
                      <div className="flex justify-between font-bold text-slate-900">
                        <span>Major Repairs</span>
                        <span>$1,500 – $3,500+</span>
                      </div>
                      <p className="text-xs text-slate-500">Panel replacement, rust treatment.</p>
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
            <p className="text-slate-600">Legend Roofer provides expert metal roof repair throughout the Greater Toronto Area.</p>
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
              FAQs — Metal Roof Repair Mississauga
            </h2>
            <div className="space-y-6">
              {[
                { q: "How do I know if my metal roof needs repair?", a: "Look for visible rust, loose fasteners, gaps at seams, water stains on ceilings, or unusual popping noises during temperature changes." },
                { q: "Can a metal roof be repaired, or does it need full replacement?", a: "Most issues like loose fasteners or minor rust are very repairable. Replacement is only needed when corrosion is widespread or the deck is compromised." },
                { q: "How long does metal roof repair take?", a: "Minor repairs take a few hours. Moderate flashing and seam work take 1-2 days. Major panel replacements may take 2-4 days." },
                { q: "Is metal roofing installation worth the higher upfront cost?", a: "Yes. It lasts 2-3 times longer than shingles, requires less maintenance, and improves energy efficiency, saving money long-term." },
                { q: "What types of metal roofing do you work with?", a: "We work with standing seam steel, corrugated metal, ribbed panels, metal shingles, aluminum, galvanized steel, and copper." }
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
          <h2 className="text-3xl md:text-5xl font-black mb-6">Protect Your Metal Roof Investment</h2>
          <p className="text-xl mb-10 opacity-90">Get a professional assessment and honest quote from Mississauga's metal roofing experts.</p>
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

export default MetalRoofRepair;
