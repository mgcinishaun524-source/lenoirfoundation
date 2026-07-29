import React from 'react';
import { motion } from 'motion/react';
import { Heart, ShieldCheck, Sun, BookOpen, Sparkles, CheckCircle2 } from 'lucide-react';
import PromiseSection from './PromiseSection';
import ContactSection from './ContactSection';

interface PromisePageProps {
  onDonateClick: () => void;
  onContactClick: () => void;
}

export default function PromisePage({ onDonateClick, onContactClick }: PromisePageProps) {
  return (
    <div className="bg-[#faf8f5] font-sans">
      {/* Hero Header */}
      <section className="relative min-h-[50vh] sm:min-h-[60vh] flex items-center justify-center bg-[#070f16] overflow-hidden pt-24 sm:pt-28 pb-16">
        {/* Background Image for Promise */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <img
            src="https://lenoirfoundation.vercel.app/assets/digital_literacy_1781532795243-Dsex_HqF.jpg"
            alt="Students thriving in solar powered digital classroom"
            className="w-full h-full object-cover object-center opacity-55 brightness-70"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#070f16]/35 via-[#070f16]/10 to-[#070f16]/50" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-6">
              Guarantees, Not Headlines
              <span className="block text-[#f15a24]">Our Commitments</span>
            </h1>

            <p className="font-sans text-base sm:text-xl text-slate-300 font-normal max-w-3xl mx-auto leading-relaxed mb-8">
              Every donation comes with open accounts, 5 year hardware warranties, solar uptime SLAs, and audited student progress reports. We win when you can prove it.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={onDonateClick}
                className="px-7 py-3.5 bg-[#f15a24] hover:bg-orange-600 text-white font-sans text-sm font-bold rounded-xl shadow-lg transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Make a Lasting Impact</span>
                <Heart size={16} className="fill-current" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Promise Content */}
      <PromiseSection onDonateClick={onDonateClick} />

      {/* 4 Pillars of Guarantee */}
      <section className="py-20 sm:py-28 bg-[#faf8f5] border-t border-slate-200/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#111c24] mb-6 tracking-tight leading-[1.1]">
              The LeNoir Commitment Framework
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Every pound donated directly powers hardware acquisition, solar installation, and local teacher training with zero bureaucratic waste.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Pillar 01 */}
            <div className="bg-[#faf8f5] rounded-[1.25rem] overflow-hidden border border-slate-200 hover:border-orange-500/40 flex flex-col justify-between hover:shadow-[0_18px_50px_-25px_rgba(241,90,36,0.22)] transition-all duration-300 group">
              <div className="w-full aspect-[16/10] overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop"
                  alt="Financial auditing and transparency"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#faf8f5]/92 via-transparent to-transparent" />
              </div>
              <div className="p-6 sm:p-7">
                <div>
                  <span className="font-sans text-[11px] font-bold uppercase tracking-widest text-[#f15a24] block mb-3">
                    01 / Stewardship
                  </span>
                  <h3 className="font-display font-extrabold text-xl sm:text-2xl text-[#111c24] mb-3 leading-snug">
                    100% Transparency
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Full financial auditing and public impact reporting for every funded tech hub, guaranteeing direct allocation to schools.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-[11px] font-semibold text-slate-600">
                  <span className="uppercase tracking-wider text-[#f15a24]">Verification</span>
                  <span className="text-[#111c24]">Audited Annually</span>
                </div>
              </div>
            </div>

            {/* Pillar 02 */}
            <div className="bg-[#faf8f5] rounded-[1.25rem] overflow-hidden border border-slate-200 hover:border-orange-500/40 flex flex-col justify-between hover:shadow-[0_18px_50px_-25px_rgba(241,90,36,0.22)] transition-all duration-300 group">
              <div className="w-full aspect-[16/10] overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1200&auto=format&fit=crop"
                  alt="Off grid solar panels"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#faf8f5]/92 via-transparent to-transparent" />
              </div>
              <div className="p-6 sm:p-7">
                <div>
                  <span className="font-sans text-[11px] font-bold uppercase tracking-widest text-[#f15a24] block mb-3">
                    02 / Infrastructure
                  </span>
                  <h3 className="font-display font-extrabold text-xl sm:text-2xl text-[#111c24] mb-3 leading-snug">
                    Off Grid Solar
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Clean, resilient solar battery arrays guarantee uninterrupted daily learning hours regardless of local power grid instability.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-[11px] font-semibold text-slate-600">
                  <span className="uppercase tracking-wider text-[#f15a24]">Resilience</span>
                  <span className="text-[#111c24]">100% Clean Energy</span>
                </div>
              </div>
            </div>

            {/* Pillar 03 */}
            <div className="bg-[#faf8f5] rounded-[1.25rem] overflow-hidden border border-slate-200 hover:border-orange-500/40 flex flex-col justify-between hover:shadow-[0_18px_50px_-25px_rgba(241,90,36,0.22)] transition-all duration-300 group">
              <div className="w-full aspect-[16/10] overflow-hidden relative">
                <img
                  src="https://lenoirfoundation.vercel.app/assets/typing_hand_visual_1781532845930-B3knwWEJ.jpg"
                  alt="Offline learning tools"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#faf8f5]/92 via-transparent to-transparent" />
              </div>
              <div className="p-6 sm:p-7">
                <div>
                  <span className="font-sans text-[11px] font-bold uppercase tracking-widest text-[#f15a24] block mb-3">
                    03 / Curriculum
                  </span>
                  <h3 className="font-display font-extrabold text-xl sm:text-2xl text-[#111c24] mb-3 leading-snug">
                    Free Offline Tools
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Preloaded offline digital encyclopedias, STEM tools, and TypeSpark typing tutors available without internet connectivity.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-[11px] font-semibold text-slate-600">
                  <span className="uppercase tracking-wider text-[#f15a24]">Access</span>
                  <span className="text-[#111c24]">Zero Bandwidth</span>
                </div>
              </div>
            </div>

            {/* Pillar 04 */}
            <div className="bg-[#faf8f5] rounded-[1.25rem] overflow-hidden border border-slate-200 hover:border-orange-500/40 flex flex-col justify-between hover:shadow-[0_18px_50px_-25px_rgba(241,90,36,0.22)] transition-all duration-300 group">
              <div className="w-full aspect-[16/10] overflow-hidden relative">
                <img
                  src="https://lenoirfoundation.vercel.app/assets/community_outreach_1781532828060-Bw5rYBl3.jpg"
                  alt="Long term teacher support"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#faf8f5]/92 via-transparent to-transparent" />
              </div>
              <div className="p-6 sm:p-7">
                <div>
                  <span className="font-sans text-[11px] font-bold uppercase tracking-widest text-[#f15a24] block mb-3">
                    04 / Sustainability
                  </span>
                  <h3 className="font-display font-extrabold text-xl sm:text-2xl text-[#111c24] mb-3 leading-snug">
                    5 Year Support
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Ongoing technical maintenance, local teacher upskilling, and scheduled hardware upgrades provided for every partner school.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-[11px] font-semibold text-slate-600">
                  <span className="uppercase tracking-wider text-[#f15a24]">Continuity</span>
                  <span className="text-[#111c24]">5-Year Commitment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Contact */}
      <ContactSection onNavigateToContact={onContactClick} />
    </div>
  );
}
