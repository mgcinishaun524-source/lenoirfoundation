import React, { useState, useEffect, lazy, Suspense } from 'react';

// Critical — loaded immediately
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';

// Landing page sections — lazy loaded
const AboutSection = lazy(() => import('./components/AboutSection'));
const PromiseSection = lazy(() => import('./components/PromiseSection'));
const ProblemSection = lazy(() => import('./components/ProblemSection'));
const ModelSection = lazy(() => import('./components/ModelSection'));
const ImpactSection = lazy(() => import('./components/ImpactSection'));
const AuthoritySection = lazy(() => import('./components/AuthoritySection'));
const ContactSection = lazy(() => import('./components/ContactSection'));

// Other pages — lazy loaded on demand
const AboutUsHero = lazy(() => import('./components/AboutUsHero'));
const AboutUsStory = lazy(() => import('./components/AboutUsStory'));
const AboutUsBento = lazy(() => import('./components/AboutUsBento'));
const AboutUsImpact = lazy(() => import('./components/AboutUsImpact'));
const AboutUsTeam = lazy(() => import('./components/AboutUsTeam'));
const NewsHero = lazy(() => import('./components/NewsHero'));
const NewsGrid = lazy(() => import('./components/NewsGrid'));
const ContactHero = lazy(() => import('./components/ContactHero'));
const ContactDetails = lazy(() => import('./components/ContactDetails'));
const ContactMap = lazy(() => import('./components/ContactMap'));
const VolunteerSection = lazy(() => import('./components/VolunteerSection'));
const DonationPage = lazy(() => import('./components/DonationPage'));
const ProblemPage = lazy(() => import('./components/ProblemPage'));
const PromisePage = lazy(() => import('./components/PromisePage'));
const ModelPage = lazy(() => import('./components/ModelPage'));
const ImpactPage = lazy(() => import('./components/ImpactPage'));
const AuthorityPage = lazy(() => import('./components/AuthorityPage'));
const GetInTouchPage = lazy(() => import('./components/GetInTouchPage'));

type PageType = 'landing' | 'problem' | 'promise' | 'about' | 'model' | 'impact' | 'authority' | 'news' | 'contact' | 'donate' | 'getintouch';

// Minimal fallback — no spinner, just invisible placeholder to avoid layout shift
const PageFallback = () => <div className="min-h-screen bg-[#faf8f5]" aria-hidden="true" />;

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('landing');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handleDonateRedirect = () => setCurrentPage('donate');

  return (
    <div id="root-viewport" className="min-h-screen bg-[#faf8f5] text-slate-850 font-sans selection:bg-orange-500 selection:text-white flex flex-col justify-between">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      <main className="flex-grow pt-16 sm:pt-20">
        <Suspense fallback={<PageFallback />}>
          {currentPage === 'landing' ? (
            <>
              <HeroSection onDonateClick={handleDonateRedirect} />
              <AboutSection onReadMoreClick={() => setCurrentPage('about')} />
              <PromiseSection onDonateClick={handleDonateRedirect} />
              <ProblemSection />
              <ModelSection />
              <ImpactSection />
              <AuthoritySection onPostClick={() => setCurrentPage('news')} />
              <ContactSection onNavigateToContact={() => setCurrentPage('contact')} />
            </>
          ) : currentPage === 'problem' ? (
            <ProblemPage onDonateClick={handleDonateRedirect} onContactClick={() => setCurrentPage('contact')} />
          ) : currentPage === 'promise' ? (
            <PromisePage onDonateClick={handleDonateRedirect} onContactClick={() => setCurrentPage('contact')} />
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
            <ModelPage onDonateClick={handleDonateRedirect} onContactClick={() => setCurrentPage('contact')} />
          ) : currentPage === 'impact' ? (
            <ImpactPage onDonateClick={handleDonateRedirect} onContactClick={() => setCurrentPage('contact')} />
          ) : currentPage === 'authority' ? (
            <AuthorityPage onDonateClick={handleDonateRedirect} onContactClick={() => setCurrentPage('contact')} onNewsClick={() => setCurrentPage('news')} />
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
        </Suspense>
      </main>

      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}
