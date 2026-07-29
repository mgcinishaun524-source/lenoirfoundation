import React from 'react';
import { motion } from 'motion/react';
import { Heart, AlertCircle, Laptop, WifiOff, School, ArrowRight, Sun, ShieldCheck, BookOpen, GraduationCap, Sparkles } from 'lucide-react';
import ProblemSection from './ProblemSection';
import ContactSection from './ContactSection';

interface ProblemPageProps {
  onDonateClick: () => void;
  onContactClick: () => void;
}

export default function ProblemPage({ onDonateClick, onContactClick }: ProblemPageProps) {
  return (
    <div className="bg-[#faf8f5] font-sans">
      {/* Hero Header */}
      <section className="relative min-h-[50vh] sm:min-h-[60vh] flex items-center justify-center bg-[#070f16] overflow-hidden pt-24 sm:pt-28 pb-16">
        {/* Background Image with context for Problem */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1600&auto=format&fit=crop"
            alt="Rural classroom without digital access"
            className="w-full h-full object-cover object-center opacity-55 brightness-70"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#070f16]/40 via-[#070f16]/15 to-[#070f16]/55" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-6">
              The Silent Crisis of
              <span className="block text-[#f15a24]">Tech Exclusion</span>
            </h1>

            <p className="font-sans text-base sm:text-xl text-slate-300 font-normal max-w-3xl mx-auto leading-relaxed mb-8">
              90% of primary school students in rural Sub-Saharan Africa have never touched a computer. Without access, entire generations are locked out of education, jobs, and the global economy.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={onDonateClick}
                className="px-7 py-3.5 bg-[#f15a24] hover:bg-orange-600 text-white font-sans text-sm font-bold rounded-xl shadow-lg transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Support Digital Inclusion</span>
                <Heart size={16} className="fill-current" />
              </button>
              <button
                onClick={onContactClick}
                className="px-5 py-2.5 text-sm font-bold text-white border border-orange-400/60 hover:border-orange-400 hover:bg-orange-500/10 rounded-xl transition-all cursor-pointer"
              >
                Get Involved
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Problem Deep Dive Section */}
      <ProblemSection />

      {/* Key Challenges Grid - Framed Luxury Cards matching user attached design */}
      <section className="py-20 sm:py-28 bg-[#faf8f5] text-[#111c24] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#111c24] mb-6 tracking-tight leading-[1.1]">
              Why Immediate Action Is Vital
            </h2>
            <p className="text-[#5b6672] text-base sm:text-lg leading-relaxed">
              Without foundational digital literacy, rural students face severe educational dropouts, reduced employability, and systemic isolation in an increasingly digital world economy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {/* Card 1 */}
            <div className="bg-[#faf8f5] p-3 sm:p-4 rounded-[1.25rem] shadow-[0_18px_50px_-25px_rgba(0,0,0,0.15)] flex flex-col justify-between text-center group hover:scale-[1.02] hover:shadow-[0_18px_50px_-25px_rgba(241,90,36,0.18)] transition-all duration-300 border border-slate-200 hover:border-orange-500/40">
              <div className="flex flex-col items-center">
                {/* Photo Frame */}
                <div className="w-full aspect-[4/3] sm:aspect-[16/11] rounded-lg overflow-hidden mb-5 border border-slate-200 shadow-sm relative">
                  <img
                    src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?q=80&w=1200&auto=format&fit=crop"
                    alt="0 Hardware Access"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <h3 className="font-display font-bold text-xl sm:text-2xl text-[#111c24] mb-1 tracking-wide">
                  0 Hardware Access
                </h3>

                <span className="text-[11px] font-sans font-bold uppercase tracking-widest text-[#f15a24] mb-3">
                  PRIMARY EDUCATION GAP
                </span>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 px-2">
                  In rural schools across Uganda & Zimbabwe, up to 92% of primary students complete their education without ever operating a computer.
                </p>

                {/* Minimalist Icon Row */}
                <div className="flex items-center justify-center gap-3 text-slate-500 mb-6">
                  <Laptop size={18} strokeWidth={1.5} />
                  <span className="text-xs">•</span>
                  <School size={18} strokeWidth={1.5} />
                  <span className="text-xs">•</span>
                  <AlertCircle size={18} strokeWidth={1.5} />
                </div>
              </div>

              <div className="pt-2 pb-3">
                <button
                  onClick={onDonateClick}
                  className="inline-block text-xs font-bold text-[#f15a24] uppercase tracking-wider border-b-2 border-orange-500/30 hover:border-orange-500 transition-all pb-1 cursor-pointer"
                >
                  Discover Impact
                </button>
              </div>
            </div>

            {/* Card 2 - Elevated Middle Card */}
            <div className="bg-[#faf8f5] p-3 sm:p-4 rounded-[1.25rem] shadow-[0_24px_60px_-25px_rgba(0,0,0,0.18)] flex flex-col justify-between text-center group hover:scale-[1.02] hover:shadow-[0_24px_60px_-25px_rgba(241,90,36,0.22)] transition-all duration-300 md:-translate-y-3 border border-slate-200 hover:border-orange-500/40">
              <div className="flex flex-col items-center">
                {/* Photo Frame */}
                <div className="w-full aspect-[4/3] sm:aspect-[16/12] rounded-lg overflow-hidden mb-5 border border-slate-200 shadow-sm relative">
                  <img
                    src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1200&auto=format&fit=crop"
                    alt="Infrastructure Barriers"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <h3 className="font-display font-bold text-xl sm:text-2xl text-[#111c24] mb-1 tracking-wide">
                  Infrastructure Barriers
                </h3>

                <span className="text-[11px] font-sans font-bold uppercase tracking-widest text-[#f15a24] mb-3">
                  GRID & POWER ISOLATION
                </span>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 px-2">
                  Frequent power outages and lack of broadband grid connections paralyze conventional tech initiatives in remote communities.
                </p>

                {/* Minimalist Icon Row */}
                <div className="flex items-center justify-center gap-3 text-slate-500 mb-6">
                  <WifiOff size={18} strokeWidth={1.5} />
                  <span className="text-xs">•</span>
                  <Sun size={18} strokeWidth={1.5} />
                  <span className="text-xs">•</span>
                  <ShieldCheck size={18} strokeWidth={1.5} />
                </div>
              </div>

              <div className="pt-2 pb-3">
                <button
                  onClick={onDonateClick}
                  className="inline-block text-xs font-bold text-[#f15a24] uppercase tracking-wider border-b-2 border-orange-500/30 hover:border-orange-500 transition-all pb-1 cursor-pointer"
                >
                  Discover Solutions
                </button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#faf8f5] p-3 sm:p-4 rounded-[1.25rem] shadow-[0_18px_50px_-25px_rgba(0,0,0,0.15)] flex flex-col justify-between text-center group hover:scale-[1.02] hover:shadow-[0_18px_50px_-25px_rgba(241,90,36,0.18)] transition-all duration-300 border border-slate-200 hover:border-orange-500/40">
              <div className="flex flex-col items-center">
                {/* Photo Frame */}
                <div className="w-full aspect-[4/3] sm:aspect-[16/11] rounded-lg overflow-hidden mb-5 border border-slate-200 shadow-sm relative">
                  <img
                    src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop"
                    alt="Resource Deficits"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <h3 className="font-display font-bold text-xl sm:text-2xl text-[#111c24] mb-1 tracking-wide">
                  Resource Deficits
                </h3>

                <span className="text-[11px] font-sans font-bold uppercase tracking-widest text-[#f15a24] mb-3">
                  TEACHER & TOOL SHORTAGE
                </span>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 px-2">
                  Local educators lack offline digital curricula, keyboard training tools, and specialized pedagogical IT support.
                </p>

                {/* Minimalist Icon Row */}
                <div className="flex items-center justify-center gap-3 text-slate-500 mb-6">
                  <BookOpen size={18} strokeWidth={1.5} />
                  <span className="text-xs">•</span>
                  <GraduationCap size={18} strokeWidth={1.5} />
                  <span className="text-xs">•</span>
                  <Sparkles size={18} strokeWidth={1.5} />
                </div>
              </div>

              <div className="pt-2 pb-3">
                <button
                  onClick={onDonateClick}
                  className="inline-block text-xs font-bold text-[#f15a24] uppercase tracking-wider border-b-2 border-orange-500/30 hover:border-orange-500 transition-all pb-1 cursor-pointer"
                >
                  Discover More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Contact Section */}
      <ContactSection onNavigateToContact={onContactClick} />
    </div>
  );
}
