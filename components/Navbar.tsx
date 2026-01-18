
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Menu, X, ChevronRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Regional Access', href: '#launch' },
    { name: 'Mission', href: '#mission' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-xl shadow-sm py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center space-x-2 cursor-pointer group"
        >
          <div className="bg-blue-600 p-2 rounded-xl relative overflow-hidden">
            <Activity className="text-white w-6 h-6 relative z-10" />
            <motion.div 
              animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute inset-0 bg-white z-0"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-black tracking-tighter text-blue-900 leading-none">VitalPoint</span>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mt-1">Healthcare x Nexaforge</span>
          </div>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              whileHover={{ y: -1 }}
              className="text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-slate-900 text-white px-8 py-3 rounded-2xl text-sm font-bold shadow-xl shadow-slate-200 flex items-center group overflow-hidden relative"
          >
            <span className="relative z-10">Get Early Access</span>
            <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform relative z-10" />
            <motion.div 
              className="absolute inset-0 bg-blue-600"
              initial={{ x: '-100%' }}
              whileHover={{ x: '0%' }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-slate-900">
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-100 px-6 py-8 shadow-2xl"
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xl font-bold text-slate-900"
                >
                  {link.name}
                </a>
              ))}
              <button className="bg-blue-600 text-white px-6 py-5 rounded-2xl font-black text-center shadow-xl shadow-blue-200">
                Join Waitlist
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
