import React from 'react';
import { motion } from 'motion/react';
import { 
  Phone, 
  Clock, 
  ShieldCheck, 
  AlertTriangle, 
  Zap, 
  CheckCircle2, 
  ArrowRight,
  HelpCircle,
  MapPin,
  Building2,
  Home,
  Truck,
  ClipboardCheck,
  Hammer
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLeadModal } from '../context/LeadModalContext';

const EmergencyRoofRepair = () => {
  const { openModal } = useLeadModal();
  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <img 
            src="https://i.ibb.co/fVhmS3t5/image.png" 
            alt="Emergency Roof Repair" 
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
            <div className="inline-flex items-center gap-2 bg-orange-600 px-4 py-2 rounded-full text-sm font-bold mb-6 animate-pulse">
              <Clock size={18} />
              24/7 EMERGENCY RESPONSE
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              Emergency Roof Repair Mississauga
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              A tree branch crashes through your shingles at 2 AM. You wake up to water pouring through your ceiling during a January ice storm. Roof emergencies don't follow business hours, and neither do we.
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
                <p className="text-xl font-medium text-slate-900 mb-8">
                  Legend Roofer provides the best emergency roof repair in Mississauga with 24-hour availability, rapid response times, and experienced crews ready to protect your home or business when every minute counts. If you need emergency roof repair in Mississauga right now, call us — we'll be there.
                </p>

                <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 flex items-center gap-3">
                  <AlertTriangle className="text-orange-600" />
                  What Is Emergency Roof Repair?
                </h2>
                <p className="mb-4">
                  Emergency roof repair is an urgent roofing service designed to address sudden, unexpected damage that threatens the safety and integrity of your property. Unlike scheduled repairs or routine maintenance, emergency roofing solutions deal with situations that can't wait — active leaks, structural damage from fallen trees, wind-lifted shingles, ice dam failures, or fire-related roof damage.
                </p>
                <p className="mb-4">
                  The goal of emergency roof repair is twofold. First, contain the immediate threat — stop water from entering your home, secure loose materials, and prevent the damage from spreading. Second, assess the full scope of the problem and either complete a permanent repair on the spot or stabilize the roof until a comprehensive fix can be scheduled.
                </p>
                <p className="mb-6 italic border-l-4 border-orange-600 pl-4 py-2 bg-slate-50">
                  In Mississauga, weather is the number one cause of roofing emergencies. Heavy snowfall, freezing rain, rapid freeze-thaw cycles, high winds off Lake Ontario, and summer storms with hail all put enormous stress on both residential and commercial roofs.
                </p>

                <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
                  What's Included in Our 24-Hour Emergency Roof Repair?
                </h2>
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                  {[
                    { title: "Rapid Response & Arrival", desc: "We dispatch our emergency crew as quickly as possible, day or night, weekends and holidays included.", icon: <Truck className="text-orange-600" /> },
                    { title: "Damage Assessment", desc: "We assess the full extent of the damage and document everything for your insurance claim.", icon: <ClipboardCheck className="text-orange-600" /> },
                    { title: "Emergency Tarping", desc: "We install heavy-duty tarps and water barriers to stop further water intrusion immediately.", icon: <ShieldCheck className="text-orange-600" /> },
                    { title: "Debris Removal", desc: "Fallen branches, broken shingles, or any debris on or around your roof gets cleared safely.", icon: <Hammer className="text-orange-600" /> },
                    { title: "Immediate Repairs", desc: "We either complete a full permanent repair or perform a durable temporary fix that holds.", icon: <Zap className="text-orange-600" /> },
                    { title: "Insurance Support", desc: "We provide detailed photos and reports that make your insurance claim process smoother.", icon: <CheckCircle2 className="text-orange-600" /> }
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
                  Benefits of Professional Emergency Services
                </h2>
                <ul className="space-y-4 mb-12">
                  {[
                    { title: "Prevent Escalating Damage", desc: "A small breach can turn into soaked insulation, ruined drywall, and mould growth within hours." },
                    { title: "Protect Your Belongings", desc: "Fast emergency repairs keep your furniture, electronics, and inventory dry and your losses minimal." },
                    { title: "Maintain Structural Integrity", desc: "Water weakens the structural bones of your building. Tarping prevents structural rot." },
                    { title: "Reduce Long-Term Costs", desc: "Waiting even 24 hours can turn a $1,500 repair into a $6,000 problem. The math always favours acting now." },
                    { title: "Peace of Mind", desc: "Knowing a professional team is handling your roof emergency lets you focus on keeping your family safe." }
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
                  <h3 className="text-2xl font-bold mb-6">Who Needs Emergency Repair?</h3>
                  <ul className="space-y-4">
                    {[
                      "Homeowners After Storms", 
                      "Commercial Property Managers", 
                      "Landlords & Rental Owners", 
                      "Industrial & Warehouse Operators", 
                      "Condo Boards", 
                      "Anyone with an Aging Roof"
                    ].map((type, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-300">
                        <Building2 size={18} className="text-orange-500" />
                        {type}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-orange-50 p-8 rounded-3xl border border-orange-100">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Emergency Cost Guide</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between font-bold text-slate-900">
                        <span>Emergency Tarping</span>
                        <span>$300 – $800</span>
                      </div>
                      <p className="text-xs text-slate-500">Rapid deployment to stop leaks fast.</p>
                    </div>
                    <div>
                      <div className="flex justify-between font-bold text-slate-900">
                        <span>Minor Emergency</span>
                        <span>$500 – $1,500</span>
                      </div>
                      <p className="text-xs text-slate-500">Localized damage, shingle replacement.</p>
                    </div>
                    <div>
                      <div className="flex justify-between font-bold text-slate-900">
                        <span>Major Emergency</span>
                        <span>$2,000 – $6,000+</span>
                      </div>
                      <p className="text-xs text-slate-500">Significant storm damage, structural work.</p>
                    </div>
                  </div>
                  <p className="mt-6 text-xs text-slate-500 italic">
                    *Emergency service typically adds 30-50% to regular rates.
                  </p>
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
            <p className="text-slate-600">Legend Roofer provides 24 hours emergency roof repair throughout the Greater Toronto Area.</p>
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
              FAQs — Emergency Roof Repair Mississauga
            </h2>
            <div className="space-y-6">
              {[
                { q: "What qualifies as a roofing emergency?", a: "Any situation where your roof's integrity is compromised and delay would cause further damage. This includes active leaks, missing shingles, fallen tree limbs, or structural sagging." },
                { q: "Do you really offer 24-hour emergency roof repair?", a: "Yes. Legend Roofer operates a true 24/7 emergency roofing service. Our crews are available nights, weekends, and holidays." },
                { q: "What should I do while waiting for emergency repair?", a: "Place buckets under leaks, move valuables away from water, and take photos for insurance. Do not climb onto a wet or damaged roof yourself." },
                { q: "Will my insurance cover emergency roof repair?", a: "Most policies cover sudden damage from storms, hail, and fallen trees. We provide complete documentation to support your claim." },
                { q: "How is emergency repair different from regular repair?", a: "The main difference is urgency. Emergency repairs are performed immediately to stop active damage, often outside normal business hours." },
                { q: "When is emergency replacement necessary instead of repair?", a: "If more than 30% of your roof is compromised or the structural deck is severely damaged, replacement becomes the better investment." }
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
          <h2 className="text-3xl md:text-5xl font-black mb-6">Need Emergency Help Now?</h2>
          <p className="text-xl mb-10 opacity-90">Don't wait for the damage to spread. Get a professional assessment immediately.</p>
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

export default EmergencyRoofRepair;
