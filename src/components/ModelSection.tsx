import React from 'react';
import { motion } from 'motion/react';
import { RefreshCw, ArrowUpRight, CheckCircle2 } from 'lucide-react';

import typingImg from '../assets/images/typing_hand_visual_1781532845930.jpg';

export default function ModelSection() {
  const steps = [
    { num: '01', title: 'IT Salvage & Upcycling', status: '100% GDPR WIPED', highlight: false },
    { num: '02', title: 'Solar E Lab Construction', status: 'OFF GRID POWERED', highlight: false },
    { num: '03', title: 'TypeSpark Software', status: 'ZERO INTERNET', highlight: true },
    { num: '04', title: 'Digital Champions', status: 'LOCAL MENTORSHIP', highlight: false },
  ];

  return (
    <section id="model" className="py-20 sm:py-28 bg-[#faf8f5] border-b border-slate-100 scroll-mt-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl text-[#111c24] font-extrabold tracking-tight leading-[1.1] text-center"
          >
            Our Operational Model
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-sm sm:text-base md:text-lg text-slate-600 font-sans leading-relaxed max-w-2xl mx-auto font-normal text-center"
          >
            Transforming surplus corporate hardware into self sustaining, solar powered, offline digital learning centers.
          </motion.p>
        </div>

        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-6xl mx-auto items-stretch">
          
          {/* Left Column: Tall Vertical Image Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group lg:col-span-5 bg-white rounded-[2rem] overflow-hidden relative shadow-xs border border-[#d2d0c4] min-h-[420px] lg:min-h-[480px] flex flex-col justify-end p-8"
          >
            {/* LeNoir Logo watermark appearing on hover with high opacity */}
            <div className="absolute top-6 right-6 z-20 pointer-events-none opacity-0 group-hover:opacity-95 transition-opacity duration-300 bg-white/90 p-2 rounded-xl shadow-sm border border-slate-100">
              <img
                src="https://www.lenoirfoundation.com/lenoir-logo.png"
                alt="LeNoir Foundation Logo"
                className="h-8 w-auto object-contain"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                width={300}
                height={80}
              />
            </div>

            <img
              src={typingImg}
              alt="Hands on learning with TypeSpark keyboard visual"
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
              loading="lazy"
              decoding="async"
              width={900}
              height={1200}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />
            
            <div className="relative z-10 text-white">
              <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white font-sans text-[10px] font-bold uppercase tracking-wider mb-2">
                Hands on E Lab
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white leading-[1.15]">
                Sustainable Infrastructure & Local Empowerment
              </h3>
              <p className="mt-3 font-sans text-sm text-slate-200 font-normal leading-relaxed">
                We combine circular hardware upcycling with off grid solar infrastructure to build labs that thrive for decades.
              </p>
            </div>
          </motion.div>

          {/* Right Column: 2x2 Stacked Bento Cards */}
          <div className="lg:col-span-7 flex flex-col gap-6 justify-between">
            
            {/* Top Row: 2 Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6">
              
              {/* Top Left: Warm Orange Gradient Workflow Card with Floating Pills */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="sm:col-span-7 bg-gradient-to-br from-[#fbe3cb] via-[#f7d6b8] to-[#f2c198] rounded-[2rem] p-6 border border-[#eabfa0] flex flex-col justify-center space-y-3 shadow-2xs"
              >
                <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#222220]/70 mb-1 block text-center">
                  4 Stage Execution Loop
                </span>

                {steps.map((s) => (
                  <div
                    key={s.num}
                    className={`px-4 py-2.5 rounded-full flex items-center justify-between shadow-2xs transition-all ${
                      s.highlight
                        ? 'bg-[#1c1c1a] text-white'
                        : 'bg-white/85 text-[#111c24]'
                    }`}
                  >
                    <span className="font-sans text-xs font-bold">
                      {s.num}. {s.title}
                    </span>
                    <span className={`text-[9px] font-sans font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                      s.highlight
                        ? 'bg-orange-500 text-white'
                        : 'bg-[#3a3935]/10 text-[#3a3935]'
                    }`}>
                      {s.status}
                    </span>
                  </div>
                ))}
              </motion.div>

              {/* Top Right: Clean Geometric Brand Graphic Card with background image */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="sm:col-span-5 rounded-[2rem] overflow-hidden border border-[#dcd9cc] flex flex-col items-center justify-center text-center shadow-2xs relative group min-h-[200px]"
              >
                <img
                  src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1200&auto=format&fit=crop"
                  alt="Off grid solar infrastructure"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                  width={1200}
                  height={800}
                />
                <div className="absolute inset-0 bg-[#f6f5ef]/90 backdrop-blur-[2px]" />
                <div className="relative z-10 p-6 flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-2xl bg-[#222220] text-white flex items-center justify-center mb-4 shadow-sm">
                    {/* Geometric custom icon matching design */}
                    <div className="grid grid-cols-3 gap-1 w-8 h-8">
                      <div className="bg-orange-400 rounded-xs" />
                      <div className="bg-white rounded-xs" />
                      <div className="bg-orange-400 rounded-xs" />
                      <div className="bg-white rounded-xs" />
                      <div className="bg-orange-400 rounded-xs" />
                      <div className="bg-white rounded-xs" />
                      <div className="bg-orange-400 rounded-xs" />
                      <div className="bg-white rounded-xs" />
                      <div className="bg-orange-400 rounded-xs" />
                    </div>
                  </div>

                  <span className="font-display text-lg sm:text-xl font-extrabold text-[#111c24]">
                    100% Off Grid
                  </span>
                  <span className="font-sans text-sm text-slate-600 mt-1 font-normal">
                    Zero Running Costs
                  </span>
                </div>
              </motion.div>

            </div>

            {/* Bottom Row: Wide Dark Charcoal Card with Floating Message Box and background image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-white rounded-[2rem] p-6 sm:p-8 border border-[#2e2e2a] shadow-md flex flex-col justify-center relative overflow-hidden group"
            >
              <img
                src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?q=80&w=1600&auto=format&fit=crop"
                alt="Solar powered classroom infrastructure"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                loading="lazy"
                decoding="async"
                width={1600}
                height={900}
              />
              <div className="absolute inset-0 bg-[#1c1c1a]/92 backdrop-blur-[1px]" />
              <div className="relative z-10 bg-[#fef8eb] text-[#222220] rounded-2xl p-5 sm:p-6 shadow-lg border border-[#f3e6c8]">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 size={16} className="text-[#f15a24]" />
                  <span className="font-sans text-[10px] font-extrabold uppercase tracking-widest text-[#f15a24]">
                    Operational Guarantee
                  </span>
                </div>

                <p className="font-sans text-sm text-slate-700 leading-relaxed font-normal">
                  "Our model doesn't just deliver hardware it establishes a complete, solar powered learning hub with certified local teacher mentors. Technology stays functional and relevant for years."
                </p>

                <div className="mt-4 pt-3 border-t border-[#e2d8bd] flex items-center justify-between text-[10px] font-sans font-semibold text-[#666560]">
                  <span>OPERATIONAL MODEL • LENOIR FOUNDATION</span>
                  <a
                    href="#impact"
                    className="px-3 py-1 bg-[#1c1c1a] text-white rounded-full font-bold hover:bg-orange-600 transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <span>View Results</span>
                    <ArrowUpRight size={10} />
                  </a>
                </div>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}

