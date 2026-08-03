import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Heart, ChevronDown } from 'lucide-react';
import LeNoirLogo from './LeNoirLogo';

type PageType = 'landing' | 'problem' | 'promise' | 'about' | 'model' | 'impact' | 'authority' | 'news' | 'contact' | 'donate' | 'getintouch' | 'training';

interface NavbarProps {
  currentPage?: PageType;
  setCurrentPage?: (page: PageType) => void;
}

export default function Navbar({ currentPage = 'landing', setCurrentPage }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavItemClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    targetPage: PageType = 'landing'
  ) => {
    e.preventDefault();
    setIsOpen(false);

    if (setCurrentPage) {
      setCurrentPage(targetPage);
    }

    if (targetPage !== 'landing') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setTimeout(() => {
        const targetElement = document.querySelector(href);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 50);
    }
  };

  return (
    <nav id="keep-app-navbar" className="fixed top-0 left-0 right-0 bg-white border-b border-slate-100 z-50 shadow-xs">
      {/* Decorative top red accent ribbon matching screenshot */}
      <div className="h-1.5 bg-[#b21c24] w-full block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          
          {/* Brand Logo */}
          <a href="#home" onClick={(e) => handleNavItemClick(e, '#home')} className="cursor-pointer">
            <LeNoirLogo />
          </a>

          {/* Navigation Links matched to screenshot */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            <a
              href="#home"
              onClick={(e) => handleNavItemClick(e, '#home')}
              className={`font-sans text-sm font-bold transition-colors py-2 ${
                currentPage === 'landing' ? 'text-orange-600' : 'text-slate-900 hover:text-orange-600'
              }`}
            >
              Home
            </a>
            
            {/* Who We Are dropdown replica */}
            <div className="relative group cursor-pointer py-2">
              <span className={`font-sans text-sm font-bold transition-colors flex items-center gap-1 ${
                currentPage === 'about' ? 'text-orange-600' : 'text-slate-800 group-hover:text-orange-600'
              }`}>
                Who We Are <ChevronDown size={14} className="text-slate-400 group-hover:text-orange-600 transition-transform group-hover:rotate-180" />
              </span>
              <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-slate-100 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <a 
                  href="#about" 
                  onClick={(e) => handleNavItemClick(e, '#about', 'about')} 
                  className="block px-4 py-2.5 text-xs font-semibold text-slate-700 hover:bg-orange-50 hover:text-orange-600 rounded-xl"
                >
                  About Us
                </a>
              </div>
            </div>

            {/* What We Do dropdown replica */}
            <div className="relative group cursor-pointer py-2">
              <span className={`font-sans text-sm font-bold transition-colors flex items-center gap-1 ${
                ['problem', 'promise', 'model', 'impact', 'authority'].includes(currentPage) ? 'text-orange-600' : 'text-slate-800 group-hover:text-orange-600'
              }`}>
                Our Model <ChevronDown size={14} className="text-slate-400 group-hover:text-orange-600 transition-transform group-hover:rotate-180" />
              </span>
              <div className="absolute top-full left-0 mt-1 w-56 bg-white border border-slate-100 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <a 
                  href="#problem" 
                  onClick={(e) => handleNavItemClick(e, '#problem', 'problem')} 
                  className={`block px-4 py-2.5 text-xs font-semibold hover:bg-orange-50 hover:text-orange-600 rounded-t-xl ${currentPage === 'problem' ? 'text-orange-600 bg-orange-50/50' : 'text-slate-700'}`}
                >
                  1. The Problem
                </a>
                <a 
                  href="#promise" 
                  onClick={(e) => handleNavItemClick(e, '#promise', 'promise')} 
                  className={`block px-4 py-2.5 text-xs font-semibold hover:bg-orange-50 hover:text-orange-600 ${currentPage === 'promise' ? 'text-orange-600 bg-orange-50/50' : 'text-slate-700'}`}
                >
                  2. Our Promise
                </a>
                <a 
                  href="#model" 
                  onClick={(e) => handleNavItemClick(e, '#model', 'model')} 
                  className={`block px-4 py-2.5 text-xs font-semibold hover:bg-orange-50 hover:text-orange-600 ${currentPage === 'model' ? 'text-orange-600 bg-orange-50/50' : 'text-slate-700'}`}
                >
                  3. Operational Model
                </a>
                <a 
                  href="#impact" 
                  onClick={(e) => handleNavItemClick(e, '#impact', 'impact')} 
                  className={`block px-4 py-2.5 text-xs font-semibold hover:bg-orange-50 hover:text-orange-600 ${currentPage === 'impact' ? 'text-orange-600 bg-orange-50/50' : 'text-slate-700'}`}
                >
                  4. Real Impact
                </a>
                <a 
                  href="#authority" 
                  onClick={(e) => handleNavItemClick(e, '#authority', 'authority')} 
                  className={`block px-4 py-2.5 text-xs font-semibold hover:bg-orange-50 hover:text-orange-600 ${currentPage === 'authority' ? 'text-orange-600 bg-orange-50/50' : 'text-slate-700'}`}
                >
                  5. Authority & Trust
                </a>
                <a 
                  href="#training" 
                  onClick={(e) => handleNavItemClick(e, '#training', 'training')} 
                  className={`block px-4 py-2.5 text-xs font-semibold hover:bg-orange-50 hover:text-orange-600 rounded-b-xl ${currentPage === 'training' ? 'text-orange-600 bg-orange-50/50' : 'text-slate-700'}`}
                >
                  Digital Literacy Training
                </a>
              </div>
            </div>

            {/* UK Programme Link */}
            <a
              href="#training"
              onClick={(e) => handleNavItemClick(e, '#training', 'training')}
              className={`font-sans text-sm font-bold transition-colors py-2 ${
                currentPage === 'training' ? 'text-orange-600' : 'text-slate-800 hover:text-orange-600'
              }`}
            >
              UK Programme
            </a>

            {/* Volunteer Link - No dropdown */}
            <a
              href="#contact"
              onClick={(e) => handleNavItemClick(e, '#contact', 'contact')}
              className={`font-sans text-sm font-bold transition-colors py-2 ${
                currentPage === 'contact' ? 'text-orange-600' : 'text-slate-800 hover:text-orange-600'
              }`}
            >
              Volunteer
            </a>

          </div>

          {/* Action Buttons precisely matching the header elements */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Outline Beige/Orange button: Get In Touch */}
            <a
              href="#getintouch"
              onClick={(e) => handleNavItemClick(e, '#getintouch', 'getintouch')}
              className="px-5 py-2.5 text-sm font-bold text-orange-600 hover:text-white border border-orange-500/30 hover:border-orange-600 hover:bg-orange-600 rounded-xl transition-all"
            >
              Get In Touch
            </a>
            
            {/* Solid Custom Orange button with circular hand/heart icon embed */}
            <a
              href="#donate"
              onClick={(e) => handleNavItemClick(e, '#donate', 'donate')}
              className={`px-6 py-2.5 text-sm font-bold rounded-xl shadow-xs transition-all flex items-center gap-2 ${
                currentPage === 'donate' 
                  ? 'bg-orange-600 text-white shadow-orange-500/10' 
                  : 'bg-[#f15a24] hover:bg-orange-600 text-white'
              }`}
            >
              Donate Now
              <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center text-[#f15a24] shrink-0">
                <Heart size={10} className="fill-current stroke-[3]" />
              </div>
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-600 hover:text-orange-600 transition-colors cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-50 shadow-lg"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              <a href="#home" onClick={(e) => handleNavItemClick(e, '#home', 'landing')} className="block px-3 py-1.5 text-sm font-bold text-slate-800 rounded-lg">Home</a>
              <div className="pl-3 border-l-2 border-orange-500/20 space-y-1 my-1">
                <a href="#problem" onClick={(e) => handleNavItemClick(e, '#problem', 'problem')} className="block px-2 py-1 text-xs font-semibold text-slate-600 hover:text-orange-600">1. The Problem</a>
                <a href="#promise" onClick={(e) => handleNavItemClick(e, '#promise', 'promise')} className="block px-2 py-1 text-xs font-semibold text-slate-600 hover:text-orange-600">2. Our Promise</a>
                <a href="#model" onClick={(e) => handleNavItemClick(e, '#model', 'model')} className="block px-2 py-1 text-xs font-semibold text-slate-600 hover:text-orange-600">3. Operational Model</a>
                <a href="#impact" onClick={(e) => handleNavItemClick(e, '#impact', 'impact')} className="block px-2 py-1 text-xs font-semibold text-slate-600 hover:text-orange-600">4. Real Impact</a>
                <a href="#authority" onClick={(e) => handleNavItemClick(e, '#authority', 'authority')} className="block px-2 py-1 text-xs font-semibold text-slate-600 hover:text-orange-600">5. Authority & Trust</a>
                <a href="#training" onClick={(e) => handleNavItemClick(e, '#training', 'training')} className={`block px-2 py-1 text-xs font-semibold hover:text-orange-600 ${currentPage === 'training' ? 'text-orange-600' : 'text-slate-600'}`}>Digital Literacy Training</a>
              </div>
              <a href="#training" onClick={(e) => handleNavItemClick(e, '#training', 'training')} className={`block px-3 py-1.5 text-sm font-bold rounded-lg ${currentPage === 'training' ? 'text-orange-600' : 'text-slate-800'}`}>UK Programme</a>
              <a href="#blogs" onClick={(e) => handleNavItemClick(e, '#blogs', 'news')} className="block px-3 py-1.5 text-sm font-bold text-slate-800 rounded-lg">Blogs & Updates</a>
              
              <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
                <a
                  href="#getintouch"
                  onClick={(e) => handleNavItemClick(e, '#getintouch', 'getintouch')}
                  className="w-full text-center py-2.5 text-sm font-semibold text-orange-600 border border-orange-500/30 rounded-xl"
                >
                  Get In Touch
                </a>
                <a
                  href="#donate"
                  onClick={(e) => handleNavItemClick(e, '#donate', 'donate')}
                  className={`w-full text-center py-2.5 text-sm font-semibold text-white rounded-xl shadow-xs flex items-center justify-center gap-2 ${
                    currentPage === 'donate' ? 'bg-orange-600' : 'bg-[#f15a24]'
                  }`}
                >
                  <span>Donate Now</span>
                  <div className="w-4 h-4 rounded-full bg-white flex items-center justify-center text-[#f15a24] shrink-0">
                    <Heart size={8} className="fill-current stroke-[3]" />
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
