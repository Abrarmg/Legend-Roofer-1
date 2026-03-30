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
  History,
  Leaf,
  TrendingUp
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLeadModal } from '../context/LeadModalContext';

const SlateRoofRepair = () => {
  const { openModal } = useLeadModal();
  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <img 
            src="https://i.ibb.co/60T8xMQr/image.png" 
            alt="Slate Roof Repair" 
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
              Slate Roof Repair Mississauga
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              A slate roof isn't just a roof — it's a legacy. Natural slate can last over a century, but only if it gets the specialized care it demands. We provide the expertise, tools, and respect that natural stone deserves.
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
                  Legend Roofer provides the best slate roof repair in Mississauga for homeowners who value craftsmanship and want their slate roof protected for generations. Whether you need a single tile replaced or a full section restored, our team brings the expertise, tools, and respect that natural slate deserves.
                </p>

                <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 flex items-center gap-3">
                  <History className="text-orange-600" />
                  What Is Slate Roof Repair?
                </h2>
                <p className="mb-4">
                  Slate roof repair is the specialized process of restoring and maintaining roofing systems made from natural or synthetic slate tiles. Unlike asphalt shingles or metal panels, slate is a natural stone product — heavy, brittle if handled incorrectly, and installed using traditional techniques that most modern roofers have never learned.
                </p>
                <p className="mb-4">
                  Common slate roof issues include cracked or broken tiles from impact, thermal stress, or age, slipped or displaced slates where the fastening nails have corroded, deteriorated flashing around chimneys, valleys, and dormers, failing underlayment beneath otherwise sound slate tiles, damaged or corroded copper or galvanized fasteners, and ice dam-related damage along eaves in Mississauga's harsh winters.
                </p>
                <p className="mb-6 italic border-l-4 border-orange-600 pl-4 py-2 bg-slate-50">
                  The critical difference between slate repair and other roofing repairs is precision. You can't nail a slate tile the way you'd nail a shingle. Every tile must be carefully removed and replaced using a slate ripper tool, proper headlap alignment, and compatible fasteners — typically copper nails that match the lifespan of the slate itself.
                </p>

                <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
                  What's Included in Professional Slate Roof Repair?
                </h2>
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                  {[
                    { title: "Comprehensive Inspection", desc: "We examine every tile, flashing point, valley, ridge, and hip across your entire roof.", icon: <Search className="text-orange-600" /> },
                    { title: "Individual Tile Replacement", desc: "Damaged tiles are removed with a slate ripper and replaced with matching natural slate.", icon: <Layers className="text-orange-600" /> },
                    { title: "Flashing Repair", desc: "We repair or replace failed copper flashing in valleys, chimneys, and dormers.", icon: <Wrench className="text-orange-600" /> },
                    { title: "Fastener Replacement", desc: "Corroded nails are replaced with copper fasteners that won't rust for another century.", icon: <ShieldCheck className="text-orange-600" /> },
                    { title: "Underlayment Repair", desc: "We repair or replace sections of deteriorated underlayment without disturbing surrounding tiles.", icon: <Zap className="text-orange-600" /> },
                    { title: "Ridge & Hip Restoration", desc: "We reset loose ridge tiles and replace damaged cap pieces for a watertight seal.", icon: <Hammer className="text-orange-600" /> }
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
                  Slate Roof Benefits — Why Slate Is Worth Protecting
                </h2>
                <ul className="space-y-4 mb-12">
                  {[
                    { title: "Unmatched Lifespan", desc: "Slate tiles can surpass 100 years, outliving every other roofing material.", icon: <Clock /> },
                    { title: "Exceptional Durability", desc: "Resistant to fire, rot, and insects, and built to handle Mississauga's freeze-thaw cycles.", icon: <ShieldCheck /> },
                    { title: "Timeless Aesthetic", desc: "Gives homes an elegance that no other material can replicate, improving with age.", icon: <Award /> },
                    { title: "Significant Property Value", desc: "A premium feature that adds substantial value and curb appeal to your home.", icon: <TrendingUp /> },
                    { title: "Environmentally Friendly", desc: "Natural quarried stone with minimal processing, fully recyclable and long-lasting.", icon: <Leaf /> },
                    { title: "Low Ongoing Maintenance", desc: "Once properly installed, it requires very little upkeep beyond annual inspections.", icon: <CheckCircle2 /> }
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
                  <h3 className="text-2xl font-bold mb-6">Who Needs Slate Repair?</h3>
                  <ul className="space-y-4">
                    {[
                      "Heritage & Character Homeowners", 
                      "Custom & Luxury Home Owners", 
                      "Institutional & Religious Buildings", 
                      "Property Investors & Estate Owners", 
                      "New Build Homeowners"
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
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Slate Repair Cost Guide</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between font-bold text-slate-900">
                        <span>Tile Replacement</span>
                        <span>$50 – $200/tile</span>
                      </div>
                      <p className="text-xs text-slate-500">Per tile, depending on type and matching.</p>
                    </div>
                    <div>
                      <div className="flex justify-between font-bold text-slate-900">
                        <span>Flashing Repair</span>
                        <span>$600 – $2,000</span>
                      </div>
                      <p className="text-xs text-slate-500">Copper flashing around chimneys and valleys.</p>
                    </div>
                    <div>
                      <div className="flex justify-between font-bold text-slate-900">
                        <span>Moderate Repairs</span>
                        <span>$800 – $3,200</span>
                      </div>
                      <p className="text-xs text-slate-500">Multiple tiles, sealing, and underlayment.</p>
                    </div>
                    <div>
                      <div className="flex justify-between font-bold text-slate-900">
                        <span>Major Restoration</span>
                        <span>$3,200 – $8,000+</span>
                      </div>
                      <p className="text-xs text-slate-500">Extensive replacement and structural work.</p>
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
            <p className="text-slate-600">Legend Roofer provides expert slate roof repair and installation throughout the Greater Toronto Area.</p>
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
              FAQs — Slate Roof Repair Mississauga
            </h2>
            <div className="space-y-6">
              {[
                { q: "How do I know if my slate roof needs repair?", a: "Look for cracked, chipped, or missing tiles, slates that have slipped out of alignment, water stains on interior ceilings, and deteriorating mortar at ridges and hips." },
                { q: "Can a damaged slate roof be repaired, or does it need full replacement?", a: "In most cases, slate roofs can and should be repaired. Individual broken tiles and failed flashing are fixable without disturbing the rest of the roof." },
                { q: "How long does slate roof repair take?", a: "Minor repairs take a few hours to one day. Moderate repairs take one to three days. Major restoration projects can take a week or more." },
                { q: "Why can't a regular roofer fix my slate roof?", a: "Slate repair requires specialized tools and knowledge of traditional techniques. A general roofer can easily crack adjacent tiles or use incompatible nails." },
                { q: "Does Legend Roofer install new slate roofs?", a: "Yes. We provide full slate roofing installation for new builds, additions, and complete replacements, including structural assessment." }
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
          <h2 className="text-3xl md:text-5xl font-black mb-6">Protect Your Slate Roof — Get a Free Inspection Today</h2>
          <p className="text-xl mb-10 opacity-90">Legend Roofer provides the best slate roof repair in Mississauga — with the craftsmanship and care your roof deserves.</p>
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

export default SlateRoofRepair;
