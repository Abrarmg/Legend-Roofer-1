import React from 'react';
import { Phone, Mail, Instagram, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white pt-24 pb-12 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-600 via-orange-400 to-orange-600"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <Link to="/" className="block h-20 mb-8">
              <img 
                src="https://i.ibb.co/7D1kpZT/1477810a-0ccc-4005-b374-973786980fda.png" 
                alt="Legend Roofer Logo" 
                className="h-full w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </Link>
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
            <h4 className="text-lg font-bold mb-8 uppercase tracking-widest text-orange-500">Quick Links</h4>
            <ul className="space-y-4 text-slate-400">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about-us" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/#services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/areas-we-serve" className="hover:text-white transition-colors">Service Areas</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 uppercase tracking-widest text-orange-500">Services</h4>
            <ul className="space-y-4 text-slate-400">
              {['Roofing', 'Eavestrough', 'Siding', 'Window / Door', 'Snow Removal', 'Flat Roof'].map(item => (
                <li key={item}><Link to="/contact-us" className="hover:text-white transition-colors">{item}</Link></li>
              ))}
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

export default Footer;
