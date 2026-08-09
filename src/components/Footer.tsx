import React, { useState } from 'react';
import { SendHorizontal, Check } from 'lucide-react';
import LeNoirLogo from './LeNoirLogo';
import { getSafeFormSubmitEndpoint, sanitizeHeaderString, safeHref, siteContactEmail, sitePrimaryDomain } from '../lib/security';

type PageType = 'landing' | 'problem' | 'promise' | 'about' | 'model' | 'impact' | 'authority' | 'news' | 'contact' | 'donate' | 'getintouch' | 'training' | 'ukprogramme';

interface FooterProps {
  setCurrentPage?: (page: PageType) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedEmail = email.trim();
    const simpleEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!trimmedEmail || !trimmedEmail.includes('@') || !simpleEmail.test(trimmedEmail)) {
      return;
    }
    const endpoint = getSafeFormSubmitEndpoint();
    if (endpoint) {
      try {
        const cleanEmail = sanitizeHeaderString(trimmedEmail, 120);
        await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            _subject: sanitizeHeaderString(`New Newsletter Subscriber from LeNoir Foundation  ${cleanEmail}`, 160),
            email: cleanEmail,
            _honey: '',
            _captcha: 'false',
          }),
        });
      } catch (err) {
        // Quiet fallback
      }
    }
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 4500);
  };

  const handleNavItemClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    targetPage: PageType = 'landing'
  ) => {
    e.preventDefault();
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
    <footer id="footer" className="bg-[#f3f6f9] text-[#1c2e42] font-sans scroll-mt-20 border-t border-slate-200">
      
      {/* Upper Main Footer section with light background matching screenshot */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
          
          {/* Column 1: Centered Badge Logo */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center lg:items-start select-none">
            {/* Click logo to return home */}
            <a href="#home" onClick={(e) => handleNavItemClick(e, '#home')} className="cursor-pointer">
              <LeNoirLogo variant="badge" className="scale-105" />
            </a>
          </div>

          {/* Column 2: EXPLORE Section */}
          <div className="lg:col-span-3 text-center md:text-left">
            <h5 className="font-display font-extrabold text-sm sm:text-base text-[#112335] uppercase tracking-wider mb-6">
              EXPLORE
            </h5>
            <div className="flex flex-col gap-3 text-xs sm:text-sm font-semibold text-[#5a6a7c]">
              <a href="#about" onClick={(e) => handleNavItemClick(e, '#about', 'about')} className="hover:text-[#f15a24] transition-colors">Our Story</a>
              <a href="#impact" onClick={(e) => handleNavItemClick(e, '#impact')} className="hover:text-[#f15a24] transition-colors">Our Impact</a>
              <a href="#about" onClick={(e) => handleNavItemClick(e, '#about', 'about')} className="hover:text-[#f15a24] transition-colors">How We Work</a>
              <a href="#contact" onClick={(e) => handleNavItemClick(e, '#contact', 'contact')} className="hover:text-[#f15a24] transition-colors">Where We Work</a>
              <a href="#flagship" onClick={(e) => handleNavItemClick(e, '#flagship')} className="hover:text-[#f15a24] transition-colors">TypeSpark Africa</a>
              <a href="#ukprogramme" onClick={(e) => handleNavItemClick(e, '#ukprogramme', 'ukprogramme')} className="hover:text-[#f15a24] transition-colors">UK Programme</a>
              <a href="#training" onClick={(e) => handleNavItemClick(e, '#training', 'training')} className="hover:text-[#f15a24] transition-colors">Digital Literacy Training</a>
            </div>
          </div>

          {/* Column 3: Get Involved Section */}
          <div className="lg:col-span-3 text-center md:text-left">
            <h5 className="font-display font-extrabold text-sm sm:text-base text-[#112335] uppercase tracking-wider mb-6">
              Get Involved
            </h5>
            <div className="flex flex-col gap-3 text-xs sm:text-sm font-semibold text-[#5a6a7c]">
              <a href="#donate" onClick={(e) => handleNavItemClick(e, '#donate', 'donate')} className="hover:text-[#f15a24] transition-colors zoom-in-50 font-extrabold text-[#f15a24]">Donate Now</a>
              <a href="#contact" onClick={(e) => handleNavItemClick(e, '#contact', 'contact')} className="hover:text-[#f15a24] transition-colors">Give a Laptop</a>
              <a href="#contact" onClick={(e) => handleNavItemClick(e, '#contact', 'contact')} className="hover:text-[#f15a24] transition-colors">Corporate Partnerships</a>
              <a href="#contact" onClick={(e) => handleNavItemClick(e, '#contact', 'contact')} className="hover:text-[#f15a24] transition-colors">Volunteer</a>
              <a href="#contact" onClick={(e) => handleNavItemClick(e, '#contact', 'contact')} className="hover:text-[#f15a24] transition-colors">Sponsor a School</a>
            </div>
          </div>

          {/* Column 4: Contact Stay Connected Newsletter Form Section */}
          <div className="lg:col-span-2 text-center md:text-left flex flex-col justify-between">
            <div>
              <h5 className="font-display font-extrabold text-[#112335] text-sm sm:text-base uppercase tracking-wider mb-4">
                Contact
              </h5>
              
              <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">
                STAY CONNECTED
              </span>

              {/* Connected Input subscription box precisely matching screenshot layout and shades */}
              <form onSubmit={handleSubscribe} className="flex items-center overflow-hidden rounded-md border border-slate-200 shadow-xs max-w-sm mx-auto md:mx-0">
                <input
                  type="email"
                  value={email}
                  disabled={subscribed}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full px-4 py-3 bg-[#e2ecf5]/65 text-slate-800 placeholder:text-slate-400 text-xs sm:text-sm outline-none font-sans"
                  required
                />
                
                {/* Rectangular Deep Crimson Crimson Button */}
                <button
                  type="submit"
                  disabled={subscribed}
                  className="bg-[#b21c24] hover:bg-[#92141a] text-white p-3.5 transition-colors cursor-pointer shrink-0 h-[42px] w-[42px] flex items-center justify-center"
                  aria-label="Subscribe To Newsletter"
                >
                  {subscribed ? <Check size={14} className="stroke-[3]" /> : <SendHorizontal size={14} className="stroke-[3]" />}
                </button>
              </form>

              {/* Optional sub status feedback */}
              {subscribed && (
                <span className="block text-left mt-2 text-[10px] font-semibold text-emerald-600 font-mono">
                  ✓ Successfully subscribed!
                </span>
              )}
            </div>
          </div>

        </div>
      </div>

      {/* Aligned copyright credits baseline band in dark block precisely as shown */}
      <div className="bg-[#181d24] py-8 text-center text-[10px] sm:text-xs text-slate-300/90 font-normal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="tracking-wide">
            Copyright 2026, All Rights Reserved LeNoirFoundation. Website Designed & Developed by ShaunMoyo
          </p>
        </div>
      </div>

    </footer>
  );
}
