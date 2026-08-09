import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Heart } from 'lucide-react';

import communityImg from '../assets/images/community_outreach_1781532828060.jpg';
import heroImg from '../assets/images/hero_background_1781532776444.jpg';

interface PromiseSectionProps {
  onDonateClick?: () => void;
}

export default function PromiseSection({ onDonateClick }: PromiseSectionProps) {
  return (
    <section id="promise" className="py-20 sm:py-28 bg-[#faf8f5] border-b border-slate-100 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl text-[#111c24] font-extrabold tracking-tight leading-[1.1] text-center"
          >
            Our Mission & Vision
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-sm sm:text-base md:text-lg text-slate-600 font-sans leading-relaxed max-w-2xl mx-auto font-normal text-center"
          >
            Transforming technology from a distant luxury into an everyday tool for self reliance, creative expression, and economic mobility.
          </motion.p>
        </div>

        {/* 2 Staggered Rows Matching Design in Image */}
        <div className="space-y-6 sm:space-y-8">
          
          {/* Row 1: Mission Card Left | Image Right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
            {/* Mission Cream Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group relative overflow-hidden bg-[#fef8eb] rounded-[2rem] p-8 sm:p-12 flex flex-col justify-center border border-[#f5ebd2]"
            >
              {/* LeNoir Logo watermark appearing on hover with high opacity */}
              <div className="absolute top-6 right-6 z-20 pointer-events-none opacity-0 group-hover:opacity-95 transition-opacity duration-300 bg-white/90 p-2 rounded-xl shadow-sm border border-orange-100">
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

              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#111c24] mb-4 leading-snug">
                Our Mission
              </h3>
              <p className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                LeNoir Foundation's mission is to design and power digital experiences and community e labs that make technology meaningful  combining sustainable hardware, localized TypeSpark curriculum, and community mentorship to empower students, uplift rural schools, and transform everyday interactions into lifelong opportunities.
              </p>
            </motion.div>

            {/* Photo Right */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-[2rem] overflow-hidden min-h-[260px] sm:min-h-[320px] relative shadow-2xs"
            >
              <img
                src={communityImg}
                alt="LeNoir Foundation team and community"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                width={1200}
                height={800}
              />
            </motion.div>
          </div>

          {/* Row 2: Image Left | Vision Cream Card Right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
            {/* Photo Left */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-[2rem] overflow-hidden min-h-[260px] sm:min-h-[320px] relative shadow-2xs order-2 md:order-1"
            >
              <img
                src={heroImg}
                alt="LeNoir Foundation classroom environment"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                width={1200}
                height={800}
              />
            </motion.div>

            {/* Vision Cream Card Right */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group relative overflow-hidden bg-[#fef8eb] rounded-[2rem] p-8 sm:p-12 flex flex-col justify-center border border-[#f5ebd2] order-1 md:order-2"
            >
              {/* LeNoir Logo watermark appearing on hover with high opacity */}
              <div className="absolute top-6 right-6 z-20 pointer-events-none opacity-0 group-hover:opacity-95 transition-opacity duration-300 bg-white/90 p-2 rounded-xl shadow-sm border border-orange-100">
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

              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#111c24] mb-4 leading-snug">
                Our Vision
              </h3>
              <p className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                We envision a future where millions of young learners across the continent engage, create, and connect through LeNoir-powered platforms, building an inclusive ecosystem where digital fluency drives growth, community loyalty, and sustainable economic opportunity for generations to come.
              </p>
            </motion.div>
          </div>

        </div>

        {/* Support CTA Button at bottom */}
        {onDonateClick && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <button
              onClick={onDonateClick}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#f15a24] hover:bg-[#e04f1c] text-white font-sans text-sm sm:text-base font-bold rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer active:scale-95"
            >
              <Heart size={14} className="fill-current" />
              <span>Support Our Mission</span>
            </button>
          </motion.div>
        )}

      </div>
    </section>
  );
}

