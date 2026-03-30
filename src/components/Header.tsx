import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about-us' },
    { name: 'Services', path: '/services' },
    { name: 'Areas', path: '/areas-we-serve' },
  ];

  const isHome = location.pathname === '/';

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled || !isHome ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="block h-16">
            <img 
              src="https://i.ibb.co/7D1kpZT/1477810a-0ccc-4005-b374-973786980fda.png" 
              alt="Legend Roofer Logo" 
              className="h-full w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                to={item.path} 
                className={`text-sm font-medium hover:text-orange-600 transition-colors ${isScrolled || !isHome ? 'text-slate-600' : 'text-white'}`}
              >
                {item.name}
              </Link>
            ))}
            <Link 
              to="/contact-us" 
              className="flex items-center gap-2 bg-orange-600 text-white px-5 py-2.5 rounded-full font-semibold hover:bg-orange-700 transition-all shadow-lg hover:shadow-orange-600/20"
            >
              Contact Us
            </Link>
          </nav>

          <button 
            className={`lg:hidden p-2 rounded-md ${isScrolled || !isHome ? 'text-slate-900' : 'text-white bg-orange-600'}`}
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
            className="fixed inset-0 bg-white z-[60] flex flex-col p-6"
          >
            <div className="flex justify-between items-center mb-12">
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="h-14">
                <img 
                  src="https://i.ibb.co/7D1kpZT/1477810a-0ccc-4005-b374-973786980fda.png" 
                  alt="Legend Roofer Logo" 
                  className="h-full w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </Link>
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-slate-900">
                <X size={32} />
              </button>
            </div>
            <div className="flex flex-col gap-6 text-xl font-semibold text-slate-800">
              {navItems.map((item) => (
                <Link 
                  key={item.name} 
                  to={item.path} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="hover:text-orange-600 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <Link 
                to="/contact-us" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 flex items-center justify-center gap-2 bg-orange-600 text-white px-8 py-4 rounded-xl font-bold shadow-xl"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
