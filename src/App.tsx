import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import PromiseSection from './components/PromiseSection';
import AboutSection from './components/AboutSection';
import ModelSection from './components/ModelSection';
import ImpactSection from './components/ImpactSection';
import AuthoritySection from './components/AuthoritySection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import AboutUsHero from './components/AboutUsHero';
import AboutUsStory from './components/AboutUsStory';
import AboutUsBento from './components/AboutUsBento';
import AboutUsImpact from './components/AboutUsImpact';
import AboutUsTeam from './components/AboutUsTeam';
import NewsHero from './components/NewsHero';
import NewsGrid from './components/NewsGrid';
import ContactHero from './components/ContactHero';
import ContactDetails from './components/ContactDetails';
import ContactMap from './components/ContactMap';
import VolunteerSection from './components/VolunteerSection';
import DonationPage from './components/DonationPage';
import ProblemPage from './components/ProblemPage';
import PromisePage from './components/PromisePage';
import ModelPage from './components/ModelPage';
import ImpactPage from './components/ImpactPage';
import AuthorityPage from './components/AuthorityPage';

import GetInTouchPage from './components/GetInTouchPage';

type PageType = 'landing' | 'problem' | 'promise' | 'about' | 'model' | 'impact' | 'authority' | 'news' | 'contact' | 'donate' | 'getintouch';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('landing');

  // Scroll to absolute top on page navigation
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handleDonateRedirect = () => {
    setCurrentPage('donate');
  };

  return (
    <div id="root-viewport" className="min-h-screen bg-[#faf8f5] text-slate-850 font-sans selection:bg-orange-500 selection:text-white flex flex-col justify-between">
      {/* Header bar navigations with routing callbacks */}
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* Main Container Sections scrollable flow */}
      <main className="flex-grow pt-16 sm:pt-20">
        {currentPage === 'landing' ? (
          <>
            <HeroSection onDonateClick={handleDonateRedirect} />
            {/* About Us section */}
            <AboutSection onReadMoreClick={() => setCurrentPage('about')} />
            {/* Promise: Inspire with your mission and impact goals */}
            <PromiseSection onDonateClick={handleDonateRedirect} />
            {/* Problem section */}
            <ProblemSection />
            {/* Model: Highlight your unique approach and operational strategies */}
            <ModelSection />
            {/* 5. Impact: Show real results and tell compelling stories */}
            <ImpactSection />
            {/* 6. Authority: Establish credibility through endorsements and expertise */}
            <AuthoritySection onPostClick={() => setCurrentPage('news')} />
            {/* 7. Footer: Provide essential information and facilitate navigation */}
            <ContactSection onNavigateToContact={() => setCurrentPage('contact')} />
          </>
        ) : currentPage === 'problem' ? (
          <ProblemPage 
            onDonateClick={handleDonateRedirect} 
            onContactClick={() => setCurrentPage('contact')} 
          />
        ) : currentPage === 'promise' ? (
          <PromisePage 
            onDonateClick={handleDonateRedirect} 
            onContactClick={() => setCurrentPage('contact')} 
          />
        ) : currentPage === 'about' ? (
          <>
            <AboutUsHero onDonateClick={handleDonateRedirect} />
            <AboutUsStory />
            <AboutUsBento />
            <AboutUsImpact />
            <AboutUsTeam />
            <ContactSection onNavigateToContact={() => setCurrentPage('contact')} />
          </>
        ) : currentPage === 'model' ? (
          <ModelPage 
            onDonateClick={handleDonateRedirect} 
            onContactClick={() => setCurrentPage('contact')} 
          />
        ) : currentPage === 'impact' ? (
          <ImpactPage 
            onDonateClick={handleDonateRedirect} 
            onContactClick={() => setCurrentPage('contact')} 
          />
        ) : currentPage === 'authority' ? (
          <AuthorityPage 
            onDonateClick={handleDonateRedirect} 
            onContactClick={() => setCurrentPage('contact')}
            onNewsClick={() => setCurrentPage('news')} 
          />
        ) : currentPage === 'news' ? (
          <>
            <NewsHero />
            <NewsGrid />
          </>
        ) : currentPage === 'getintouch' ? (
          <GetInTouchPage />
        ) : currentPage === 'contact' ? (
          <>
            <ContactHero onDonateClick={handleDonateRedirect} />
            <VolunteerSection onContactClick={() => {
              const el = document.getElementById('contact-form');
              if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }} />
            <div id="contact-form">
              <ContactSection />
            </div>
            <ContactMap />
          </>
        ) : (
          <DonationPage />
        )}
      </main>

      {/* Bottom informational footers with routing callbacks */}
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}
