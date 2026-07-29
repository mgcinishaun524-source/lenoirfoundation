import React from 'react';
import { motion } from 'motion/react';
import { Heart, Cpu, Wrench, GraduationCap, RefreshCw, Layers } from 'lucide-react';
import ModelSection from './ModelSection';
import ContactSection from './ContactSection';

interface ModelPageProps {
  onDonateClick: () => void;
  onContactClick: () => void;
}

export default function ModelPage({ onDonateClick, onContactClick }: ModelPageProps) {
  return (
    <div className="bg-[#faf8f5] font-sans">
      {/* Hero Header */}
      <section className="relative min-h-[50vh] sm:min-h-[60vh] flex items-center justify-center bg-[#070f16] overflow-hidden pt-24 sm:pt-28 pb-16">
        {/* Background Image for Model */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1600&auto=format&fit=crop"
            alt="Solar powered tech hub construction"
            className="w-full h-full object-cover object-center opacity-55 brightness-70"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#070f16]/40 via-[#070f16]/10 to-[#070f16]/55" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-6">
              From Corporate Surplus to
              <span className="block text-[#f15a24]">Community E Labs</span>
            </h1>

            <p className="font-sans text-base sm:text-xl text-slate-300 font-normal max-w-3xl mx-auto leading-relaxed mb-8">
              See the 5-stage blueprint behind every solar tech hub  hardware refresh, off grid engineering, curriculum localization, teacher certification, and ongoing audits.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={onDonateClick}
                className="px-7 py-3.5 bg-[#f15a24] hover:bg-orange-600 text-white font-sans text-sm font-bold rounded-xl shadow-lg transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Sponsor a Tech Hub</span>
                <Heart size={16} className="fill-current" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Operational Model Section */}
      <ModelSection />

      {/* 5-Step Lifecycle of a Tech Hub - Editorial Two-Column Layout */}
      <section className="py-20 sm:py-28 bg-[#faf8f5] border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* Left Column: Narrative Headline + Featured Photo */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div>
                <span className="font-sans text-xs font-bold uppercase tracking-widest text-[#f15a24] block mb-4">
                  OPERATIONAL BLUEPRINT
                </span>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-[#111c24] leading-[1.15] tracking-tight max-w-lg">
                  We structure sustainable tech deployments around what rural communities actually need  clearly, reliably, and with lasting impact.
                </h2>
              </div>

              {/* Photo Card — tied visually to headline above with accent top border */}
              <div className="rounded-[1.25rem] overflow-hidden border border-slate-200 shadow-[0_18px_50px_-25px_rgba(241,90,36,0.20)] aspect-[4/3] sm:aspect-[16/10] lg:aspect-[5/4] relative group">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#f15a24] via-[#ff8348] to-[#f15a24] z-10" />
                <img
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1000&auto=format&fit=crop"
                  alt="Students learning in solar powered digital hub"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-sans font-medium bg-black/45 backdrop-blur-sm px-3 py-2 rounded-xl border border-white/10">
                  <span className="font-bold text-[#ffb88a] uppercase tracking-wider text-[10px] block mb-0.5">Blueprint in Action</span>
                  Solar Powered Community Tech Hub • Masaka District, Uganda
                </div>
              </div>
            </div>

            {/* Right Column: 5-Step Process Row List */}
            <div className="lg:col-span-7 flex flex-col">

              {/* Step 1 */}
              <div className="py-6 sm:py-8 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-6 items-start group hover:bg-white/50 hover:px-4 hover:rounded-2xl transition-all duration-300">
                <div className="sm:col-span-5">
                  <span className="text-[11px] font-sans font-bold uppercase tracking-widest text-[#f15a24] block mb-1">
                    PHASE 01 • WEEKS 1 to 2
                  </span>
                  <h3 className="font-display font-semibold text-lg sm:text-xl text-[#111c24]">
                    Needs Assessment
                  </h3>
                </div>
                <div className="sm:col-span-7">
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Vetting rural partner schools, evaluating solar power readiness, and establishing local community leadership. <span className="font-semibold text-[#111c24]">Outcome:</span> tailored deployment roadmap.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="py-6 sm:py-8 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-6 items-start group hover:bg-white/50 hover:px-4 hover:rounded-2xl transition-all duration-300">
                <div className="sm:col-span-5">
                  <span className="text-[11px] font-sans font-bold uppercase tracking-widest text-[#f15a24] block mb-1">
                    PHASE 02 • WEEKS 3 to 4
                  </span>
                  <h3 className="font-display font-semibold text-lg sm:text-xl text-[#111c24]">
                    Solar Installation
                  </h3>
                </div>
                <div className="sm:col-span-7">
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Setting up off grid solar arrays and battery storage systems to guarantee 100% clean, uninterrupted power. <span className="font-semibold text-[#111c24]">Outcome:</span> resilient power grid online.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="py-6 sm:py-8 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-6 items-start group hover:bg-white/50 hover:px-4 hover:rounded-2xl transition-all duration-300">
                <div className="sm:col-span-5">
                  <span className="text-[11px] font-sans font-bold uppercase tracking-widest text-[#f15a24] block mb-1">
                    PHASE 03 • WEEKS 5 to 6
                  </span>
                  <h3 className="font-display font-semibold text-lg sm:text-xl text-[#111c24]">
                    Hardware & Software
                  </h3>
                </div>
                <div className="sm:col-span-7">
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Deploying laptops preloaded with TypeSpark typing software and offline Wikipedia learning archives. <span className="font-semibold text-[#111c24]">Outcome:</span> fully equipped digital classroom.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="py-6 sm:py-8 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-6 items-start group hover:bg-white/50 hover:px-4 hover:rounded-2xl transition-all duration-300">
                <div className="sm:col-span-5">
                  <span className="text-[11px] font-sans font-bold uppercase tracking-widest text-[#f15a24] block mb-1">
                    PHASE 04 • WEEKS 7 to 8
                  </span>
                  <h3 className="font-display font-semibold text-lg sm:text-xl text-[#111c24]">
                    Teacher Training
                  </h3>
                </div>
                <div className="sm:col-span-7">
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Conducting intensive workshops for local educators to turn them into certified digital literacy leads. <span className="font-semibold text-[#111c24]">Outcome:</span> confident local teaching capacity.
                  </p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="py-6 sm:py-8 border-t border-b border-slate-200 grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-6 items-start group hover:bg-white/50 hover:px-4 hover:rounded-2xl transition-all duration-300">
                <div className="sm:col-span-5">
                  <span className="text-[11px] font-sans font-bold uppercase tracking-widest text-[#f15a24] block mb-1">
                    PHASE 05 • CONTINUOUS
                  </span>
                  <h3 className="font-display font-semibold text-lg sm:text-xl text-[#111c24]">
                    Continuous Audit
                  </h3>
                </div>
                <div className="sm:col-span-7">
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Quarterly hardware maintenance checks, usage analytics tracking, and long term device recycling. <span className="font-semibold text-[#111c24]">Outcome:</span> 99%+ uptime and zero e-waste.
                  </p>
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
