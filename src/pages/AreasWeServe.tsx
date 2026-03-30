import React from 'react';
import { motion } from 'motion/react';
import { 
  MapPin, 
  ArrowRight, 
  ShieldCheck, 
  Wind, 
  History, 
  Home, 
  Building2, 
  Waves,
  Snowflake,
  Sun,
  CheckCircle2
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLeadModal } from '../context/LeadModalContext';

const AreasWeServe = () => {
  const { openModal } = useLeadModal();
  const mississaugaAreas = [
    {
      title: "Port Credit & Lakeview",
      desc: "Mississauga's lakefront communities face higher humidity, stronger winds off Lake Ontario, and more aggressive freeze-thaw cycles. We use materials rated for high wind uplift and extended ice protection.",
      icon: <Waves className="text-orange-600" />
    },
    {
      title: "Streetsville & Meadowvale",
      desc: "A mix of heritage character homes and modern builds. We handle repairs and replacements on both, matching materials to maintain each home's unique architectural character.",
      icon: <History className="text-orange-600" />
    },
    {
      title: "Erin Mills & Churchill Meadows",
      desc: "Established residential neighbourhoods with many homes built in the 80s and 90s. Many roofs here are now due for professional inspection or full replacement.",
      icon: <Home className="text-orange-600" />
    },
    {
      title: "Cooksville & Dixie",
      desc: "Cooksville's older stock requires specialized repair, while Dixie's industrial corridor demands experienced flat roofing contractors for complex commercial systems.",
      icon: <Building2 className="text-orange-600" />
    },
    {
      title: "Clarkson & Lorne Park",
      desc: "Premium areas with custom and luxury homes. We specialize in the slate, cedar, and metal roofing systems often found in these exclusive neighbourhoods.",
      icon: <ShieldCheck className="text-orange-600" />
    },
    {
      title: "Malton & East Credit",
      desc: "A diverse mix of residential and commercial properties. We provide proactive maintenance and inspections to catch builder-grade issues early.",
      icon: <MapPin className="text-orange-600" />
    },
    {
      title: "Lisgar, Square One, Applewood & Rathwood",
      desc: "From high-density residential zones to established family neighbourhoods, we serve properties of every size and roof type across central and east Mississauga.",
      icon: <CheckCircle2 className="text-orange-600" />
    }
  ];

  const gtaAreas = [
    {
      name: "Brampton",
      desc: "Rapidly growing housing stock ranging from new subdivisions to established communities with aging roofs."
    },
    {
      name: "Oakville & Burlington",
      desc: "Premium lakeside communities with custom homes featuring architectural shingles, metal, and slate systems."
    },
    {
      name: "Milton",
      desc: "One of Ontario's fastest-growing communities, requiring proactive maintenance to catch builder-grade issues."
    },
    {
      name: "Etobicoke",
      desc: "Shares Mississauga's Lake Ontario exposure, bringing unique wind and humidity challenges to residential roofs."
    },
    {
      name: "Toronto, Vaughan & Richmond Hill",
      desc: "Full residential and commercial roofing services across the broader GTA with honest, local assessments."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <img 
            src="https://i.ibb.co/Q7VfQnjZ/image.png" 
            alt="Mississauga Skyline" 
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
              Areas We Serve
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Trusted Roofing Services Across Mississauga and the Greater Toronto Area. From lakefront homes to industrial warehouses, we've got you covered.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact-us" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center gap-2 shadow-xl shadow-orange-600/20">
                Free Inspection
                <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Trusted Roofing Services Across Mississauga and the GTA</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Legend Roofer provides professional roof repair, replacement, and emergency roofing services to homeowners and commercial property owners throughout Mississauga and the Greater Toronto Area. From lakefront homes in Port Credit to industrial warehouses near Pearson Airport, our team delivers honest assessments, quality workmanship, and lasting results — no matter what neighbourhood you call home.
            </p>
          </div>
        </div>
      </section>

      {/* Mississauga Neighbourhoods */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Mississauga Neighbourhoods We Serve</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Local experience means we understand the specific demands of every community in Mississauga.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mississaugaAreas.map((area, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="mb-4 w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center">
                  {React.cloneElement(area.icon as React.ReactElement, { size: 24 })}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{area.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Greater Toronto Area — Beyond Mississauga</h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Legend Roofer's service area extends well beyond Mississauga's borders. We provide the same quality roofing services to homeowners and businesses across the wider GTA.
              </p>
              <div className="space-y-6">
                {gtaAreas.map((area, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center mt-1">
                      <CheckCircle2 size={14} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{area.name}</h4>
                      <p className="text-sm text-slate-600">{area.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://i.ibb.co/cKDBg75N/image.png" 
                  alt="GTA Area" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-orange-600 text-white p-8 rounded-3xl shadow-xl hidden md:block max-w-xs">
                <p className="font-bold text-lg mb-2">10+ Years Local</p>
                <p className="text-sm opacity-90">Serving the GTA with honest assessments and expert craftsmanship.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Local Matters */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Why Local Experience Matters</h2>
            <p className="text-lg text-slate-300 mb-12 leading-relaxed">
              Mississauga's climate isn't gentle on roofs. Over 100 annual freeze-thaw cycles, heavy snow loads, lake-effect wind, and intense summer UV all put unique demands on your roofing system. A contractor who understands these local conditions delivers results that last years longer.
            </p>
            <div className="grid sm:grid-cols-3 gap-8">
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                <Snowflake className="text-orange-500 mx-auto mb-4" size={32} />
                <h4 className="font-bold mb-2">Freeze-Thaw</h4>
                <p className="text-sm text-slate-400">Expertise in handling 100+ cycles annually.</p>
              </div>
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                <Wind className="text-orange-500 mx-auto mb-4" size={32} />
                <h4 className="font-bold mb-2">Lake Winds</h4>
                <p className="text-sm text-slate-400">High wind uplift rated materials and techniques.</p>
              </div>
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                <Sun className="text-orange-500 mx-auto mb-4" size={32} />
                <h4 className="font-bold mb-2">UV Resistance</h4>
                <p className="text-sm text-slate-400">Materials designed for intense summer exposure.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-6">Get a Free Inspection — Wherever You Are in the GTA</h2>
          <p className="text-xl mb-10 opacity-90">Whether you're in Port Credit or Brampton, Oakville or Etobicoke, Legend Roofer is just a call away.</p>
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

export default AreasWeServe;
