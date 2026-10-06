import React, { useState } from 'react';
import { SendHorizontal, Check } from 'lucide-react';
import LeNoirLogo from './LeNoirLogo';
import { sendFoundationEmail, siteContactEmail } from '../lib/security';

type PageType = 'landing' | 'problem' | 'promise' | 'about' | 'model' | 'impact' | 'authority' | 'news' | 'contact' | 'donate' | 'getintouch' | 'training' | 'ukprogramme' | 'privacy' | 'terms';

interface FooterProps {
  setCurrentPage?: (page: PageType) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  const [email, setEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [subscribeMessage, setSubscribeMessage] = useState('');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedEmail = email.trim();
    const simpleEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!trimmedEmail || !trimmedEmail.includes('@') || !simpleEmail.test(trimmedEmail)) {
      setSubscribeStatus('error');
      setSubscribeMessage('Please enter a valid email address.');
      return;
    }
    setSubscribeStatus('submitting');
    setSubscribeMessage('');
    try {
      await sendFoundationEmail({
        email: trimmedEmail,
        subject: `New newsletter subscription from ${trimmedEmail}`,
      });
      setSubscribeStatus('success');
      setSubscribeMessage('Thanks for subscribing!');
      setEmail('');
      setTimeout(() => {
        setSubscribeStatus('idle');
        setSubscribeMessage('');
      }, 4500);
    } catch (error) {
      console.error('Newsletter subscription failed:', error);
      setSubscribeStatus('error');
      setSubscribeMessage(error instanceof Error ? error.message : 'Your subscription could not be sent. Please email us directly.');
    }
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
      
      {/* Partners Section - Added above main footer */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
          <div className="text-center mb-8">
            <h4 className="font-display font-extrabold text-lg text-[#112335] uppercase tracking-wider mb-2">
              Our Partners
            </h4>
            <p className="text-sm text-slate-500">
              Proudly supported by innovative technology partners
            </p>
          </div>
          
          <div className="flex justify-center items-center">
            <a 
              href="https://elevenlabs.io" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-4 px-8 py-5 bg-white border border-slate-200 rounded-xl hover:border-slate-300 hover:shadow-sm transition-all duration-200"
            >
              {/* ElevenLabs Official Logo */}
              <div className="flex items-center justify-center">
                <img 
                  src="https://eleven-public-cdn.elevenlabs.io/payloadcms/elevenlabs-official-logo.svg"
                  alt="ElevenLabs"
                  className="h-20 w-auto group-hover:scale-105 transition-transform duration-200"
                  loading="lazy"
                />
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Upper Main Footer section with light background matching screenshot */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
          
          {/* Column 1: Logo and charity contact details */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center lg:items-start">
            {/* Click logo to return home */}
            <a href="#home" onClick={(e) => handleNavItemClick(e, '#home')} className="cursor-pointer">
              <LeNoirLogo variant="badge" className="scale-105" />
            </a>
            <address className="mt-6 space-y-1 text-center md:text-left text-xs sm:text-sm font-semibold not-italic leading-relaxed text-[#5a6a7c]">
              <p>86-90 Paul Street</p>
              <p>London, EC2A 4NE</p>
              <p>UNITED KINGDOM</p>
              <a href={`mailto:${siteContactEmail}`} className="inline-block hover:text-[#f15a24] transition-colors">
                {siteContactEmail}
              </a>
              <p className="pt-2 text-xs">Registered Charity in England and Wales (No: 1197474)</p>
            </address>
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
                  disabled={subscribeStatus === 'submitting' || subscribeStatus === 'success'}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (subscribeStatus === 'error') {
                      setSubscribeStatus('idle');
                      setSubscribeMessage('');
                    }
                  }}
                  placeholder="Your email address"
                  className="w-full px-4 py-3 bg-[#e2ecf5]/65 text-slate-800 placeholder:text-slate-400 text-xs sm:text-sm outline-none font-sans"
                  required
                />
                
                {/* Rectangular Deep Crimson Crimson Button */}
                <button
                  type="submit"
                  disabled={subscribeStatus === 'submitting' || subscribeStatus === 'success'}
                  className="bg-[#b21c24] hover:bg-[#92141a] text-white p-3.5 transition-colors cursor-pointer shrink-0 h-[42px] w-[42px] flex items-center justify-center"
                  aria-label="Subscribe To Newsletter"
                >
                  {subscribeStatus === 'success' ? <Check size={14} className="stroke-[3]" /> : <SendHorizontal size={14} className="stroke-[3]" />}
                </button>
              </form>

              {subscribeMessage && (
                <span
                  role={subscribeStatus === 'error' ? 'alert' : 'status'}
                  aria-live="polite"
                  className={`block text-left mt-2 text-[10px] font-semibold ${subscribeStatus === 'error' ? 'text-rose-600' : 'text-emerald-600'}`}
                >
                  {subscribeMessage}
                </span>
              )}
            </div>
          </div>

        </div>
      </div>

      {/* Aligned copyright credits baseline band in dark block precisely as shown */}
      <div className="bg-[#181d24] py-8 text-center text-[10px] sm:text-xs text-slate-300/90 font-normal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="tracking-wide mb-2">
            Copyright 2026, All Rights Reserved LeNoirFoundation. Website Designed &amp; Developed by{' '}
            <a
              href="http://mgcinishaunportfolio.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white underline underline-offset-2 transition-colors"
            >
              ShaunMoyo
            </a>
          </p>
          <p className="text-slate-400 text-[9px] sm:text-[10px]">
            UK Registered Learning Provider UKPRN Number 10102049
          </p>
          <nav aria-label="Legal information" className="mt-4 flex justify-center gap-6 text-[10px] sm:text-xs">
            <a
              href="#privacy"
              onClick={(e) => handleNavItemClick(e, '#privacy', 'privacy')}
              className="text-slate-300 hover:text-white transition-colors underline underline-offset-4"
            >
              Privacy Policy
            </a>
            <a
              href="#terms"
              onClick={(e) => handleNavItemClick(e, '#terms', 'terms')}
              className="text-slate-300 hover:text-white transition-colors underline underline-offset-4"
            >
              Terms and Conditions
            </a>
          </nav>
        </div>
      </div>

    </footer>
  );
}
