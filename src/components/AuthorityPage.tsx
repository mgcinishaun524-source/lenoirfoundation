import React from 'react';
import { motion } from 'motion/react';
import { Heart, Scale, FileCheck, Shield } from 'lucide-react';
import AuthoritySection from './AuthoritySection';
import AboutUsTeam from './AboutUsTeam';
import ContactSection from './ContactSection';

interface AuthorityPageProps {
  onDonateClick: () => void;
  onContactClick: () => void;
  onNewsClick: () => void;
}

export default function AuthorityPage({ onDonateClick, onContactClick, onNewsClick }: AuthorityPageProps) {
  return (
    <div className="bg-[#faf8f5] font-sans">
      {/* Hero Header */}
      <section className="relative min-h-[50vh] sm:min-h-[60vh] flex items-center justify-center bg-[#070f16] overflow-hidden pt-24 sm:pt-28 pb-16">
        {/* Background Image for Authority & Governance */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <img
            src="https://lenoirfoundation.vercel.app/assets/community_outreach_1781532828060-Bw5rYBl3.jpg"
            alt="Governance and board meeting"
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
              Charity Registration, Audits &
              <span className="block text-[#f15a24]">Board Oversight</span>
            </h1>

            <p className="font-sans text-base sm:text-xl text-slate-300 font-normal max-w-3xl mx-auto leading-relaxed mb-8">
              UK Charity Commission registered. Independently audited accounts. Child safeguarding policies. Military grade data wiping certificates. See every document.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={onDonateClick}
                className="px-7 py-3.5 bg-[#f15a24] hover:bg-orange-600 text-white font-sans text-sm font-bold rounded-xl shadow-lg transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Partner With Us</span>
                <Heart size={16} className="fill-current" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Governance and Authority Cards */}
      <AuthoritySection onPostClick={onNewsClick} />

      {/* Leadership Board */}
      <AboutUsTeam />

      {/* Governance & Compliance Grid */}
      <section className="py-20 bg-[#faf8f5] border-t border-slate-200/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#111c24] mb-4">
              Rigorous Governance Standards
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              We operate under the highest standards of charity compliance, safeguarding, and financial stewardship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] overflow-hidden flex flex-col hover:-translate-y-1 transition-transform duration-300">
              <div className="relative h-56 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=1400&auto=format&fit=crop"
                  alt="UK Registered Charity"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#111c24] mb-3 leading-snug">UK Registered Charity</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-2">
                  Charitable Status Verified
                </p>
                <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">
                  Registered Charity No. 1195821. Bound by the UK Charity Commission guidelines and full public financial disclosures to ensure complete transparency.
                </p>
                <div>
                  <button
                    onClick={onContactClick}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-50 hover:bg-slate-100 text-[#1e3a8a] font-sans text-sm font-semibold rounded-full border border-slate-200 transition-colors cursor-pointer"
                  >
                    <Scale size={18} className="stroke-[2.5px]" />
                    <span>Contact</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] overflow-hidden flex flex-col hover:-translate-y-1 transition-transform duration-300">
              <div className="relative h-56 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1400&auto=format&fit=crop"
                  alt="Audited Accounts"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#111c24] mb-3 leading-snug">Audited Accounts</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-2">
                  Full Financial Oversight
                </p>
                <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">
                  Independent annual financial audits ensuring 100% of public donations are allocated to direct program execution and measurable community outcomes.
                </p>
                <div>
                  <button
                    onClick={onContactClick}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-50 hover:bg-slate-100 text-[#1e3a8a] font-sans text-sm font-semibold rounded-full border border-slate-200 transition-colors cursor-pointer"
                  >
                    <FileCheck size={18} className="stroke-[2.5px]" />
                    <span>Contact</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] overflow-hidden flex flex-col hover:-translate-y-1 transition-transform duration-300">
              <div className="relative h-56 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1400&auto=format&fit=crop"
                  alt="Child Safeguarding"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#111c24] mb-3 leading-snug">Child Safeguarding</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-2">
                  Protection First
                </p>
                <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">
                  Strict child protection and digital privacy protocols integrated into all tech hub software, volunteer vetting, and comprehensive school staff training.
                </p>
                <div>
                  <button
                    onClick={onContactClick}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-50 hover:bg-slate-100 text-[#1e3a8a] font-sans text-sm font-semibold rounded-full border border-slate-200 transition-colors cursor-pointer"
                  >
                    <Shield size={18} className="stroke-[2.5px]" />
                    <span>Contact</span>
                  </button>
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
