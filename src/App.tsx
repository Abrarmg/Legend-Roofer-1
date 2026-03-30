/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Star, 
  ShieldCheck, 
  Clock, 
  Users, 
  ChevronRight, 
  ChevronLeft,
  ChevronDown,
  Menu, 
  X, 
  ArrowRight,
  CheckCircle2,
  Hammer,
  Home,
  Droplets,
  Wind,
  Lightbulb,
  Snowflake,
  BrickWall,
  Maximize,
  Award,
  DollarSign,
  Wrench,
  Search,
  Quote,
  Truck,
  ClipboardCheck,
  Calendar,
  Instagram,
  Facebook
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

import CommercialRoofRepair from './pages/CommercialRoofRepair';
import EmergencyRoofRepair from './pages/EmergencyRoofRepair';
import MetalRoofRepair from './pages/MetalRoofRepair';
import FlatRoofRepair from './pages/FlatRoofRepair';
import SlateRoofRepair from './pages/SlateRoofRepair';
import RoofReplacement from './pages/RoofReplacement';
import AboutUs from './pages/AboutUs';
import AreasWeServe from './pages/AreasWeServe';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import ContactUs from './pages/ContactUs';

// --- Components ---

import { LeadModalProvider, useLeadModal } from './context/LeadModalContext';
import LeadModal from './components/LeadModal';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about-us' },
    { 
      name: 'Services', 
      path: '/#services',
      subItems: [
        { name: 'Roof Replacement', path: '/roof-replacement' },
        { name: 'Commercial Roof Repair', path: '/commercial-roof-repair' },
        { name: 'Emergency Roof Repair', path: '/emergency-roof-repair' },
        { name: 'Metal Roofing', path: '/metal-roof-repair' },
        { name: 'Flat Roof Repair', path: '/flat-roof-repair' },
        { name: 'Slate Roofing', path: '/slate-roof-repair' },
      ]
    },
    { name: 'Service Areas', path: '/areas-we-serve' },
    { name: 'Contact Us', path: '/contact-us' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/80 backdrop-blur-md border-b border-white/10 shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className={`block transition-all duration-300 ${isScrolled ? 'h-16' : 'h-24'}`}>
            <img 
              src="https://i.ibb.co/7D1kpZT/1477810a-0ccc-4005-b374-973786980fda.png" 
              alt="Legend Roofer Logo" 
              className="h-full w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <div 
                key={item.name} 
                className="relative group"
                onMouseEnter={() => item.subItems && setActiveSubMenu(item.name)}
                onMouseLeave={() => setActiveSubMenu(null)}
              >
                <Link 
                  to={item.path} 
                  className="flex items-center gap-1 text-sm font-medium text-white hover:text-orange-600 transition-colors py-4"
                >
                  {item.name}
                  {item.subItems && <ChevronDown size={14} className={`transition-transform duration-300 ${activeSubMenu === item.name ? 'rotate-180' : ''}`} />}
                </Link>

                {item.subItems && (
                  <AnimatePresence>
                    {activeSubMenu === item.name && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 w-64 bg-slate-900 border border-white/10 rounded-2xl shadow-2xl p-4 z-50"
                      >
                        <div className="flex flex-col gap-2">
                          {item.subItems.map((sub) => (
                            <Link 
                              key={sub.name} 
                              to={sub.path}
                              className="text-sm text-slate-300 hover:text-orange-500 hover:bg-white/5 px-4 py-2 rounded-xl transition-all"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          <button 
            className="lg:hidden text-white bg-orange-600 p-2 rounded-md"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-[60] flex flex-col p-6 overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-12">
              <a href="/" className="h-20">
                <img 
                  src="https://i.ibb.co/7D1kpZT/1477810a-0ccc-4005-b374-973786980fda.png" 
                  alt="Legend Roofer Logo" 
                  className="h-full w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </a>
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-slate-900">
                <X size={32} />
              </button>
            </div>
            <div className="flex flex-col gap-4 text-xl font-semibold text-slate-800">
              {navItems.map((item) => (
                <div key={item.name} className="flex flex-col">
                  {item.subItems ? (
                    <>
                      <button 
                        onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                        className="flex items-center justify-between hover:text-orange-600 transition-colors py-2"
                      >
                        {item.name}
                        <ChevronDown size={24} className={`transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {isMobileServicesOpen && (
                          <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden flex flex-col gap-3 pl-4 mt-2 border-l-2 border-orange-100"
                          >
                            {item.subItems.map((sub) => (
                              <Link 
                                key={sub.name} 
                                to={sub.path}
                                className="text-lg font-medium text-slate-500 hover:text-orange-600"
                              >
                                {sub.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link 
                      to={item.path} 
                      className="hover:text-orange-600 transition-colors py-2"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Hero = () => {
  const { openModal } = useLeadModal();
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-10 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1635424710928-0544e8512eae?q=80&w=2071&auto=format&fit=crop" 
          alt="Roofing Background" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="text-5xl lg:text-7xl font-black leading-[1.1] mb-6 tracking-tight pt-10">
              <span className="text-orange-500 underline decoration-orange-600/30 underline-offset-8 text-4xl lg:text-6xl">Expert Roof Repair in Mississauga You Can Trust</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
              Whether it's storm damage, leaks, or aging shingles, our certified team delivers fast, reliable roof repair across Mississauga and the Greater Toronto Area. From flat, metal, and slate roofing fixes to emergency repairs when you need help most — we handle it all. We serve homeowners and commercial properties with same-day inspections, upfront cost estimates, and workmanship backed by warranty. With over 5 years of local experience and hundreds of 5-star reviews, Mississauga property owners choose us as the best option for lasting results, not quick fixes.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={openModal}
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-xl shadow-orange-600/20 flex items-center gap-2 group"
              >
                Book Free Inspection
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <Link to="/#services" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-lg transition-all">
                Our Services
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-3xl p-8 shadow-2xl shadow-black/50 max-w-md mx-auto lg:ml-auto mt-10"
          >
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-slate-900 uppercase">Claim $100 Free Roof Inspection</h3>
              <p className="text-slate-500">We have limited spots this week!</p>
            </div>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="First Name" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-orange-600 outline-none transition-all" />
                <input type="text" placeholder="Last Name" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-orange-600 outline-none transition-all" />
              </div>
              <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-orange-600 outline-none transition-all" />
              <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-orange-600 outline-none transition-all" />
              <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-orange-600 outline-none transition-all appearance-none bg-white">
                <option>Select Project Type</option>
                <option>Roofing Replacement</option>
                <option>Roof Repair</option>
                <option>Eavestrough</option>
                <option>Siding</option>
              </select>
              <textarea placeholder="Tell us about your project" rows={3} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-orange-600 outline-none transition-all"></textarea>
              <button className="w-full bg-[#F54900] hover:opacity-90 text-white font-bold py-4 rounded-xl transition-all shadow-lg">
                Request Free Inspection
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Stats = () => {
  const stats = [
    { label: 'Years in Business', value: '45+', icon: <Clock /> },
    { label: 'Projects Completed', value: '50K+', icon: <ShieldCheck /> },
    { label: 'Expert Installers', value: '500+', icon: <Users /> },
  ];

  return (
    <section className="py-12 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex items-center gap-6 group hover:shadow-xl transition-all duration-500">
              <div className="bg-orange-100 text-orange-600 p-4 rounded-2xl group-hover:bg-orange-600 group-hover:text-white transition-colors duration-500">
                {React.cloneElement(stat.icon as React.ReactElement, { size: 32 })}
              </div>
              <div>
                <div className="text-4xl font-black text-slate-900 mb-1">{stat.value}</div>
                <div className="text-slate-500 font-medium uppercase tracking-wider text-xs">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: 'Roof Replacement',
      desc: 'Complete removal and installation of new roofing systems.',
      icon: <Home />,
      img: 'https://images.unsplash.com/photo-1632759145351-1d592919f522?q=80&w=2070&auto=format&fit=crop',
      badge: 'POPULAR',
      path: '/roof-replacement'
    },
    {
      title: 'Roof repair Mississauga',
      desc: 'Expert repair for asphalt, slate, and metal roofs.',
      icon: <Hammer />,
      img: 'https://images.unsplash.com/photo-1635424710928-0544e8512eae?q=80&w=2071&auto=format&fit=crop',
      badge: 'EXPERT'
    },
    {
      title: 'Commercial Roof Repair',
      desc: 'Specialized maintenance for flat and complex commercial systems.',
      icon: <BrickWall />,
      img: 'https://i.ibb.co/N66FDJnT/image.png',
      badge: 'PREMIUM',
      path: '/commercial-roof-repair'
    },
    {
      title: 'Emergency Roof Repair',
      desc: '24/7 rapid response for storm damage and urgent leaks.',
      icon: <Clock />,
      img: 'https://i.ibb.co/fVhmS3t5/image.png',
      badge: 'URGENT',
      path: '/emergency-roof-repair'
    },
    {
      title: 'Metal Roofing',
      desc: 'Precision restoration for durable metal roofing systems.',
      icon: <Wrench />,
      img: 'https://i.ibb.co/8nNQvfWL/image.png',
      path: '/metal-roof-repair'
    },
    {
      title: 'Flat Roof Repair',
      desc: 'Specialized EPDM and TPO solutions for ponding and leaks.',
      icon: <Maximize />,
      img: 'https://i.ibb.co/v6KqJqPn/image.png',
      path: '/flat-roof-repair'
    },
    {
      title: 'Slate Roofing',
      desc: 'Careful restoration and replacement of fragile slate tiles.',
      icon: <ShieldCheck />,
      img: 'https://i.ibb.co/60T8xMQr/image.png',
      path: '/slate-roof-repair'
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Our Roof Repair Services in Mississauga</h2>
          <p className="text-lg text-slate-600">
            Legend Roofer specializes in all types of roof repairs, ensuring your home or business stays protected against the elements with expert workmanship.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-[450px] rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0">
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent"></div>
              </div>

              {/* Badge */}
              {service.badge && (
                <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-md border border-white/30 px-4 py-1.5 rounded-full">
                  <span className="text-white text-[10px] font-black tracking-[0.2em] uppercase">{service.badge}</span>
                </div>
              )}

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                {/* Icon Box */}
                <div className="bg-[#F54900] w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  {React.cloneElement(service.icon as React.ReactElement, { size: 24, className: "text-white" })}
                </div>

                <h3 className="text-3xl font-black text-white mb-3 uppercase tracking-tight leading-none italic">
                  {service.title}
                </h3>
                
                <p className="text-slate-200 mb-8 leading-relaxed text-sm font-medium max-w-[90%]">
                  {service.desc}
                </p>

                <Link 
                  to={service.path || "/contact-us"}
                  className="bg-white text-slate-900 px-8 py-3.5 rounded-full font-black text-xs uppercase tracking-widest hover:bg-[#F54900] hover:text-white transition-all duration-300 w-fit shadow-xl text-center"
                >
                  {service.path ? "Learn More" : "Book Free Estimate"}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    { 
      name: 'Sarah M.', 
      location: 'Mississauga', 
      text: 'Legend Roofer did an amazing job fixing our roof leak in Mississauga. Their team was professional, arrived on time, and explained everything clearly. The repair was completed quickly, and the quality of work was excellent. I highly recommend them to anyone looking for reliable roof repair services.', 
      stars: 5,
      img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&auto=format&fit=crop'
    },
    { 
      name: 'James R.', 
      location: 'Port Credit', 
      text: 'We needed emergency roof repair after a storm, and Legend Roofer responded fast. They inspected the damage, gave us an honest quote, and repaired everything the same day. Their service was friendly, efficient, and stress-free. We are very happy with the results.', 
      stars: 5,
      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&h=150&auto=format&fit=crop'
    },
    { 
      name: 'Michael T.', 
      location: 'Streetsville', 
      text: 'Legend Roofer helped us with flat roof repair for our commercial property in Mississauga. From start to finish, they were knowledgeable, professional, and easy to work with. The team paid attention to detail and made sure the job was done properly. Excellent service and great workmanship.', 
      stars: 5,
      img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&h=150&auto=format&fit=crop'
    },
  ];

  return (
    <section id="reviews" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Hear It From Our Customers</h2>
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => <Star key={i} className="text-orange-500 fill-orange-500" size={24} />)}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-500 flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                  <img 
                    src={review.img} 
                    alt={review.name} 
                    className="w-12 h-12 rounded-full object-cover border-2 border-orange-500"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg leading-tight">{review.name}</h4>
                    <span className="text-slate-400 text-sm">{review.location}</span>
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(review.stars)].map((_, i) => <Star key={i} size={14} className="text-orange-500 fill-orange-500" />)}
                </div>
              </div>
              <p className="text-slate-600 italic leading-relaxed flex-grow">"{review.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "How much does roof installation or replacement cost in Mississauga?",
      answer: "Costs depend on your home's size, roof slope, material selection, and whether full removal is needed. Homes near Lake Ontario may require stronger weather-resistant materials. Most full roof replacements across the GTA range between CAD 5,000 and CAD 15,000. We provide a free inspection and detailed written estimate tailored to your property."
    },
    {
      question: "What roofing materials perform best in Mississauga's climate?",
      answer: "Architectural asphalt shingles are the most popular choice for their affordability, curb appeal, and performance. Metal roofing offers 40 to 70 years of durability, superior snow-shedding capability, and strong resistance to ice buildup. Slate and tile can last over 50 years. The right underlayment, flashing, and ventilation system are equally critical for long-term protection in Mississauga's freeze-thaw climate."
    },
    {
      question: "How long will my new roof last?",
      answer: "Asphalt shingles generally last 20 to 30 years, metal roofing 40 to 70 years, and slate or tile over 50 years. Proper attic ventilation, insulation, and routine maintenance are essential in Mississauga and across the GTA to maximize durability against seasonal storms, snow loads, and ice buildup."
    },
    {
      question: "How often should I schedule roof inspections in Mississauga?",
      answer: "Twice annually — spring and fall — plus after severe wind or hailstorms common across the GTA. Inspections cover your roof deck, flashing, gutters, attic ventilation, and insulation to catch moisture damage early. Routine maintenance and gutter cleaning during these visits significantly extend your roof's lifespan."
    },
    {
      question: "What are common signs my roof needs repair?",
      answer: "Warning signs include missing or curling shingles, granules in gutters, interior water stains, sagging areas, and damaged flashing. Mississauga's seasonal storms, snow loads, and freeze-thaw cycles accelerate wear, making early professional evaluation essential."
    },
    {
      question: "Should I repair or fully replace my roof?",
      answer: "Isolated shingle damage or minor flashing issues may only need repair. However, aging systems, widespread wear, or recurring leaks usually make full roof replacement more cost-effective long term. A detailed inspection of your roof deck, ventilation, and underlayment determines the best solution for your Mississauga home."
    },
    {
      question: "What is included in a professional roof installation?",
      answer: "The process includes removing old materials, inspecting and repairing the roof deck, installing protective underlayment, applying new shingles or panels, and ensuring proper flashing and ventilation — all code-compliant. Clear timelines and regular updates keep you informed throughout the project."
    },
    {
      question: "Can I repair my roof myself?",
      answer: "DIY roof repairs are not recommended due to safety risks and potential warranty voidance. Professional roofing contractors provide fully insured service, code-compliant installation, and certified workmanship that meets Ontario building standards."
    },
    {
      question: "Do you offer financing for roofing projects?",
      answer: "Yes. Flexible financing options are available for homeowners in Mississauga, including low monthly payments and deferred payment programs to manage larger roofing investments comfortably."
    },
    {
      question: "What warranty coverage do you provide?",
      answer: "We offer strong workmanship warranties along with manufacturer-backed material warranties on all shingles, metal panels, and roofing components — ensuring long-term protection and peace of mind for your Mississauga home."
    },
    {
      question: "How can I extend my roof's lifespan in Mississauga?",
      answer: "Regular gutter cleaning, trimming overhanging branches, ensuring proper attic airflow and insulation, and addressing small issues quickly are the most effective steps. Ontario's freeze-thaw cycles, seasonal storms, and heavy snow loads make proactive maintenance far more cost-effective than reactive repairs."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Frequently Asked Questions — Roofing Services in Mississauga</h2>
          <p className="text-lg text-slate-600">Everything you need to know about our roofing services.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-slate-200 rounded-2xl overflow-hidden">
              <details className="group">
                <summary className="flex justify-between items-center p-6 cursor-pointer list-none bg-slate-50 hover:bg-slate-100 transition-colors">
                  <span className="text-lg font-bold text-slate-900">{faq.question}</span>
                  <ChevronDown className="text-orange-600 group-open:rotate-180 transition-transform" size={24} />
                </summary>
                <div className="p-6 bg-white border-t border-slate-200">
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white pt-24 pb-12 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-600 via-orange-400 to-orange-600"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <a href="https://ibb.co/kTSmDwr" className="block h-20 mb-8">
              <img 
                src="https://i.ibb.co/7D1kpZT/1477810a-0ccc-4005-b374-973786980fda.png" 
                alt="Legend Roofer Logo" 
                className="h-full w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </a>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Legend Roofer Roofing & Exteriors | Expert Roof Repair, Eavestrough & Siding in Mississauga & GTA.
            </p>
            <div className="space-y-4">
              <a href="mailto:info@legendroofer.com" className="flex items-center gap-3 text-slate-300 hover:text-orange-500 transition-colors">
                <Mail size={20} className="text-orange-600" />
                info@legendroofer.com
              </a>
              <div className="flex gap-4 pt-4">
                <a 
                  href="https://www.facebook.com/profile.php?id=61576434872614" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-300 hover:bg-orange-600 hover:text-white transition-all"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a 
                  href="https://www.instagram.com/legendroofer1/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-300 hover:bg-orange-600 hover:text-white transition-all"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 uppercase tracking-widest text-orange-500">About Us</h4>
            <ul className="space-y-4 text-slate-400">
              <li><Link to="/#gallery" className="hover:text-white transition-colors">Our Staff</Link></li>
              <li><Link to="/#workflow" className="hover:text-white transition-colors">Our Process</Link></li>
              <li><Link to="/#testimonials" className="hover:text-white transition-colors">Our Guarantee</Link></li>
              <li><Link to="/contact-us" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/#faq" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 uppercase tracking-widest text-orange-500">Services</h4>
            <ul className="space-y-4 text-slate-400">
              <li><Link to="/commercial-roof-repair" className="hover:text-white transition-colors">Commercial Roof Repair</Link></li>
              <li><Link to="/emergency-roof-repair" className="hover:text-white transition-colors">Emergency Roof Repair</Link></li>
              <li><Link to="/metal-roof-repair" className="hover:text-white transition-colors">Metal Roofing</Link></li>
              <li><Link to="/flat-roof-repair" className="hover:text-white transition-colors">Flat Roof Repair</Link></li>
              <li><Link to="/#services" className="hover:text-white transition-colors">Slate Roofing</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-sm">
          <p>© 2026 Legend Roofer Roofing & Exteriors. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Trust Bar ---

const TrustBar = () => {
  const items = [
    "11+ Years In Business",
    "250+ Projects Completed",
    "10+ Expert Installers",
    "Licensed & Experienced"
  ];

  return (
    <div className="bg-black py-4 overflow-hidden border-y border-white/10">
      <div className="flex whitespace-nowrap animate-marquee">
        {/* First set */}
        <div className="flex gap-12 px-6">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-2 h-2 bg-orange-500 rounded-full" />
              <span className="text-white font-bold uppercase tracking-widest text-sm">{item}</span>
            </div>
          ))}
        </div>
        {/* Duplicate set for seamless loop */}
        <div className="flex gap-12 px-6">
          {items.map((item, i) => (
            <div key={`dup-${i}`} className="flex items-center gap-3">
              <div className="w-2 h-2 bg-orange-500 rounded-full" />
              <span className="text-white font-bold uppercase tracking-widest text-sm">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const BeforeAfter = () => {
  const projects = [
    {
      title: "Shingle Roof Repair",
      location: "Streetsville, Mississauga",
      before: "https://i.ibb.co/mVBfn1rT/image.png",
      after: "https://i.ibb.co/0RYnbq0z/image.png",
      description: "Replaced 20-year-old leaking shingles with premium architectural shingles and improved ventilation."
    },
    {
      title: "Emergency Roof Repair",
      location: "Port Credit, Mississauga",
      before: "https://i.ibb.co/TxFSTffp/image.png",
      after: "https://i.ibb.co/TM4qFfQ2/image.png",
      description: "Emergency repair after high winds. Restored structural integrity and matched existing shingles perfectly."
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-orange-600 font-bold tracking-wider uppercase text-sm mb-4 block"
          >
            Transformation Gallery
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-slate-900 mb-6"
          >
            Our Work: <span className="text-orange-600">Before & After</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600"
          >
            See the legendary difference our expert team makes. We don't just fix roofs; we restore peace of mind and enhance your home's curb appeal.
          </motion.p>
        </div>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-700 px-4 py-2 rounded-full text-sm font-bold">
                  <CheckCircle2 size={16} />
                  {project.location}
                </div>
                <h3 className="text-3xl font-bold text-slate-900">{project.title}</h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  {project.description}
                </p>
                <ul className="space-y-3">
                  {['Full Inspection', 'Premium Materials', 'Lifetime Warranty'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                      <div className="w-5 h-5 rounded-full bg-orange-600 flex items-center justify-center text-white">
                        <ArrowRight size={12} />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="relative group overflow-hidden rounded-2xl shadow-lg">
                  <img 
                    src={project.before} 
                    alt="Before" 
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-sm text-white px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-widest">
                    Before
                  </div>
                </div>
                <div className="relative group overflow-hidden rounded-2xl shadow-lg">
                  <img 
                    src={project.after} 
                    alt="After" 
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-orange-600/90 backdrop-blur-sm text-white px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-widest">
                    After
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <button className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all shadow-xl flex items-center gap-2 mx-auto group">
            Book Free Inspection
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      type: "Emergency Roof Repair",
      stars: 5,
      text: "Water pouring through our ceiling after an ice storm. Legend Roofer showed up within two hours, found the damaged chimney flashing, and completed the emergency roof repair same day. Honest pricing, zero surprises. Best emergency roof repair in Mississauga.",
      author: "Priya M.",
      location: "Meadowvale, Mississauga"
    },
    {
      type: "Flat Roof Repair",
      stars: 5,
      text: "Two contractors couldn't find our leak. Legend Roofer pinpointed the failed membrane in one visit and finished the flat roof repair in a single day — new TPO membrane, proper drainage. Eight months in, not a drop. Best roofing company in Mississauga.",
      author: "Daniel K.",
      location: "Cooksville, Mississauga"
    },
    {
      type: "Full Roof Replacement",
      stars: 5,
      text: "Got four quotes — Legend Roofer gave the most detailed breakdown. Entire roof stripped and re-shingled in two days with GAF Timberline HDZ. Cleanup was spotless. Best investment we've made in this house.",
      author: "Sarah & Tom L.",
      location: "Erin Mills, Mississauga"
    },
    {
      type: "Metal Roof Repair",
      stars: 5,
      text: "Two companies said replace the whole metal roof. Legend Roofer assessed it honestly — only one panel and ridge sealant needed fixing. Half a day, fraction of the cost. That honesty is rare. Already recommended them to three neighbours in Mississauga.",
      author: "Robert A.",
      location: "Streetsville, Mississauga"
    },
    {
      type: "Roof Inspection & Maintenance",
      stars: 5,
      text: "Just wanted a professional opinion on some granules in the gutter. Legend Roofer found minor flashing wear, fixed it on the spot. No upselling, no scare tactics — told me my roof had five to seven good years left. They'll be my first call for roof replacement in Mississauga when the time comes.",
      author: "James H.",
      location: "Churchill Meadows, Mississauga"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsToShow(1);
      } else if (window.innerWidth < 1024) {
        setItemsToShow(2);
      } else {
        setItemsToShow(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % (testimonials.length - itemsToShow + 1));
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + (testimonials.length - itemsToShow + 1)) % (testimonials.length - itemsToShow + 1));
  };

  const maxIndex = testimonials.length - itemsToShow;
  const safeIndex = Math.min(currentIndex, maxIndex);

  return (
    <section id="testimonials" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100/50 rounded-full blur-3xl -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-200/50 rounded-full blur-3xl -ml-48 -mb-48" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-orange-600 font-bold tracking-wider uppercase text-sm mb-4 block"
          >
            Real Reviews
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight"
          >
            What Mississauga Homeowners Say About Our Roof Repair Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600"
          >
            Here's what real homeowners across Mississauga say about Legend Roofer
          </motion.p>
        </div>

        <div className="relative group">
          <div className="overflow-hidden">
            <motion.div 
              className="flex gap-6"
              animate={{ x: `calc(-${safeIndex * (100 / itemsToShow)}% - ${safeIndex * (24 / itemsToShow)}px)` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="flex-shrink-0"
                  style={{ width: `calc((100% - ${(itemsToShow - 1) * 24}px) / ${itemsToShow})` }}
                >
                  <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 h-full flex flex-col hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex gap-1">
                        {[...Array(testimonial.stars)].map((_, i) => (
                          <Star key={i} size={18} className="fill-orange-500 text-orange-500" />
                        ))}
                      </div>
                      <Quote className="text-slate-100" size={40} />
                    </div>
                    
                    <div className="mb-4">
                      <span className="text-xs font-bold uppercase tracking-widest text-orange-600 bg-orange-50 px-3 py-1 rounded-full">
                        {testimonial.type}
                      </span>
                    </div>

                    <p className="text-slate-700 leading-relaxed mb-8 flex-grow italic">
                      "{testimonial.text}"
                    </p>

                    <div className="pt-6 border-t border-slate-50">
                      <p className="font-bold text-slate-900 text-lg">{testimonial.author}</p>
                      <div className="flex items-center gap-2 text-slate-500 text-sm mt-1">
                        <MapPin size={14} />
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={prev}
            disabled={safeIndex === 0}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-slate-900 hover:bg-orange-600 hover:text-white transition-all z-20 disabled:opacity-0 disabled:pointer-events-none`}
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={next}
            disabled={safeIndex >= maxIndex}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-slate-900 hover:bg-orange-600 hover:text-white transition-all z-20 disabled:opacity-0 disabled:pointer-events-none`}
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-12">
          {[...Array(testimonials.length - itemsToShow + 1)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-2 h-2 rounded-full transition-all ${safeIndex === i ? 'w-8 bg-orange-600' : 'bg-slate-300'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const RoofSigns = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1632759145351-1d592919f522?q=80&w=1000&auto=format&fit=crop" 
                alt="House with roof signs" 
                className="w-full h-[400px] lg:h-[500px] object-cover rounded-[2.5rem] shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-8 left-8 bg-[#F54900] backdrop-blur-sm p-6 rounded-2xl border border-white/10 hidden md:block">
                <p className="text-white font-bold text-lg">Expert Inspection</p>
                <p className="text-white text-sm">Mississauga, ON</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">
              What Are the Signs That My Roof Needs Repair in Mississauga?
            </h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              If you notice roof leaks, missing or damaged shingles, dark spots, sagging areas, or water stains on ceilings or walls, your roof may need repair in Mississauga. Older roofs, especially those over 20 years old, should also be checked by roofing contractors. Quick action and emergency roof repair can help prevent water damage, mold, and structural problems.
            </p>
            <Link 
              to="/contact-us"
              className="inline-block bg-[#F54900] text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-[#e04300] transition-colors shadow-lg shadow-orange-900/20"
            >
              Contact Now
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const RoofingProcess = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const steps = [
    {
      number: "01",
      title: "Inspection",
      icon: <Search size={24} />,
      description: "We start with a careful inspection to check for leaks, damaged shingles, and flashing issues to understand your roof's condition."
    },
    {
      number: "02",
      title: "Estimate",
      icon: <DollarSign size={24} />,
      description: "After the inspection, we provide a straightforward quote with honest recommendations for your home or business."
    },
    {
      number: "03",
      title: "Planning",
      icon: <CheckCircle2 size={24} />,
      description: "Once approved, we schedule the work and prepare the area to protect your property and ensure everything is organized."
    },
    {
      number: "04",
      title: "Execution",
      icon: <Hammer size={24} />,
      description: "Our skilled roofers complete the job using durable materials and trusted methods for long-lasting roofing solutions."
    },
    {
      number: "05",
      title: "Verification",
      icon: <ClipboardCheck size={24} />,
      description: "When finished, we inspect everything again and clean the site properly to ensure your roof is secure and property is neat."
    },
    {
      number: "06",
      title: "Support",
      icon: <CheckCircle2 size={24} />,
      description: "We stand behind our work and deliver dependable roofing services that Mississauga property owners can trust."
    }
  ];

  const next = () => {
    if (currentIndex < steps.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section id="workflow" className="py-24 bg-[#F9F9F9] overflow-hidden font-poppins">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-[#FF6900] font-bold tracking-[0.3em] uppercase text-xs mb-4 block">OUR WORKFLOW</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1B2A4A] mb-6">Our Roofing Process</h2>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Arrows (Desktop) */}
          <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 -left-12 -right-12 justify-between pointer-events-none z-20">
            <button 
              onClick={prev}
              disabled={currentIndex === 0}
              className={`w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-[#1B2A4A] pointer-events-auto transition-all ${currentIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-[#FF6900] hover:text-white'}`}
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={next}
              disabled={currentIndex >= steps.length - 3}
              className={`w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-[#1B2A4A] pointer-events-auto transition-all ${currentIndex >= steps.length - 3 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-[#FF6900] hover:text-white'}`}
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Cards Container */}
          <div className="md:overflow-hidden">
            <motion.div 
              className="flex flex-col md:flex-row gap-6"
              initial={false}
              animate={isMobile ? { x: 0 } : { x: `calc(-${currentIndex * (100 / 3)}% - ${currentIndex * (24 / 3)}px)` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {steps.map((step, i) => (
                <div 
                  key={i} 
                  className="w-full md:w-[calc((100%-48px)/3)] flex-shrink-0"
                >
                  <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-t-4 hover:border-t-[#FF6900] h-full flex flex-col">
                    <div className="flex justify-between items-start mb-8">
                      <span className="text-3xl font-bold text-[#FF6900]">{step.number}</span>
                      <div className="w-12 h-12 rounded-xl bg-[#1B2A4A] flex items-center justify-center text-white">
                        {step.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-[#1B2A4A] mb-4">{step.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServiceAreas = () => {
  const neighborhoods = [
    "Streetsville",
    "Erin Mills",
    "Cooksville",
    "Port Credit",
    "Square One",
    "Applewood",
    "Rathwood"
  ];

  return (
    <section id="service-areas" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Our Service Areas in Mississauga</h2>
          <p className="text-lg text-slate-600">
            Legend Roofer is proud to serve the entire Mississauga area, including neighborhoods such as:
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {neighborhoods.map((area, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="bg-white border border-slate-200 p-6 rounded-2xl text-center font-bold text-slate-800 shadow-sm hover:border-orange-600 hover:text-orange-600 transition-all cursor-default"
            >
              <MapPin size={20} className="mx-auto mb-3 text-orange-600" />
              {area}
            </motion.div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg text-slate-700 leading-relaxed font-medium">
            We also extend our services to nearby areas including <span className="text-orange-600 font-bold">Brampton, Oakville, and Toronto</span>. No matter where you are, we are just a click away!
          </p>
          <div className="mt-8">
            <Link to="/contact-us" className="inline-flex items-center gap-2 text-orange-600 font-black text-xl hover:underline">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const ImageGallery = () => {
  const galleryItems = [
    {
      id: 1,
      title: "Our Expert Team",
      description: "Highly trained and certified roofing specialists committed to excellence.",
      image: "https://i.ibb.co/LhhdZxGM/e7161751-3a91-4e6e-8a10-a2001bcb70c6.png",
      category: "Team",
      icon: <Users size={20} />,
      span: "md:col-span-2 md:row-span-2"
    },
    {
      id: 2,
      title: "Modern Equipment",
      description: "Using the latest tools for precision and safety.",
      image: "https://i.ibb.co/VczTKTcZ/5de59a4a-155c-44af-83a5-522d017bc082.png",
      category: "Equipment",
      icon: <Wrench size={20} />,
      span: "md:col-span-1 md:row-span-1"
    },
    {
      id: 3,
      title: "Our Fleet",
      description: "Fully equipped vans ready for any job in Mississauga.",
      image: "https://i.ibb.co/GrGLS9v/9983d000-58a0-4734-a4e9-619ceb230530.png",
      category: "Fleet",
      icon: <Truck size={20} />,
      span: "md:col-span-1 md:row-span-1"
    }
  ];

  return (
    <section id="gallery" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6"
          >
            Legend Roofer in Action
          </motion.h2>
          <p className="text-lg text-slate-600">
            Take a look at our dedicated team, state-of-the-art equipment, and the professional standards we bring to every roofing project in Mississauga.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`group relative rounded-3xl overflow-hidden shadow-lg ${item.span}`}
            >
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
              
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-orange-600 text-white p-2 rounded-lg">
                    {item.icon}
                  </span>
                  <span className="text-white/80 text-sm font-bold uppercase tracking-wider">
                    {item.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/70 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const RecentBlogPosts = () => {
  const posts = [
    {
      id: 1,
      title: "5 Signs Your Roof Needs Immediate Attention",
      excerpt: "Don't wait for a leak to become a flood. Learn the early warning signs of roof damage.",
      date: "March 10, 2026",
      image: "https://images.unsplash.com/photo-1632759145351-1d592919f522?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "The Benefits of Metal Roofing in Mississauga",
      excerpt: "Discover why more Mississauga residents are choosing metal roofing for its durability.",
      date: "March 5, 2026",
      image: "https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section id="blog" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-orange-600 font-bold tracking-wider uppercase text-sm mb-4 block">Latest News</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">Roofing Insights & Tips</h2>
          </div>
          <Link to="/blog" className="text-orange-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
            View All Posts
            <ArrowRight size={20} />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post, i) => (
            <motion.article 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group flex flex-col md:flex-row bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-500"
            >
              <div className="md:w-2/5 h-64 md:h-auto overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="md:w-3/5 p-8 flex flex-col justify-center">
                <div className="flex items-center gap-2 text-slate-400 text-sm mb-3">
                  <Calendar size={14} />
                  {post.date}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                  {post.excerpt}
                </p>
                <Link to={`/blog/${post.id}`} className="text-orange-600 font-bold flex items-center gap-2 text-sm">
                  Read More
                  <ArrowRight size={16} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

const HomePage = () => {
  const { openModal } = useLeadModal();
  return (
    <>
      <Hero />
      <RoofSigns />
      <TrustBar />
      <BeforeAfter />
      <TestimonialsSection />
      <ImageGallery />
      
      <Services />
      <RoofingProcess />
      <ServiceAreas />
      <FAQ />

      <section className="py-24 bg-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-8">Ready for a Legendary Roof?</h2>
          <p className="text-2xl mb-12 opacity-90">Get your free inspection and estimate today.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/contact-us" className="bg-white text-orange-600 px-12 py-5 rounded-2xl font-black text-xl shadow-2xl hover:scale-105 transition-transform flex items-center gap-3">
              Contact Us
            </Link>
            <button 
              onClick={openModal}
              className="bg-slate-900 text-white px-12 py-5 rounded-2xl font-black text-xl shadow-2xl hover:scale-105 transition-transform"
            >
              Free Inspection
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

export default function App() {
  return (
    <BrowserRouter>
      <LeadModalProvider>
        <AppContent />
      </LeadModalProvider>
    </BrowserRouter>
  );
}

const AppContent = () => {
  const { isOpen, closeModal } = useLeadModal();
  
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-orange-600 selection:text-white">
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/commercial-roof-repair" element={<CommercialRoofRepair />} />
          <Route path="/emergency-roof-repair" element={<EmergencyRoofRepair />} />
          <Route path="/metal-roof-repair" element={<MetalRoofRepair />} />
          <Route path="/flat-roof-repair" element={<FlatRoofRepair />} />
          <Route path="/slate-roof-repair" element={<SlateRoofRepair />} />
          <Route path="/roof-replacement" element={<RoofReplacement />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/areas-we-serve" element={<AreasWeServe />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </main>
      <Footer />
      <LeadModal isOpen={isOpen} onClose={closeModal} />
    </div>
  );
}
