import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import BlogsSection from './BlogsSection';

import typingImg from '../assets/images/typing_hand_visual_1781532845930.jpg';
import digitalLiteracyImg from '../assets/images/digital_literacy_1781532795243.jpg';
import communityImg from '../assets/images/community_outreach_1781532828060.jpg';

interface AuthoritySectionProps {
  onPostClick?: (postId: string) => void;
}

export default function AuthoritySection({ onPostClick }: AuthoritySectionProps) {
  return (
    <section id="authority" className="py-20 sm:py-28 bg-[#faf8f5] border-b border-slate-100 scroll-mt-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl text-[#111c24] font-extrabold tracking-tight leading-[1.1] text-center"
          >
            Certified Governance & Strategic Expertise
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-sm sm:text-base md:text-lg text-slate-600 font-sans leading-relaxed max-w-2xl mx-auto font-normal text-center"
          >
            Trust is earned through rigorous governance, verified charity standards, certified military grade data wiping, and sustainable partner programs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8 flex items-center justify-center gap-3"
          >
            <a
              href="#contact"
              className="px-6 py-2.5 text-sm font-bold rounded-xl shadow-xs transition-all flex items-center gap-2 bg-[#f15a24] hover:bg-orange-600 text-white cursor-pointer"
            >
              Partner With Us
            </a>
            <a
              href="#about"
              className="px-5 py-2.5 text-sm font-bold text-orange-600 hover:text-white border border-orange-500/30 hover:border-orange-600 hover:bg-orange-600 rounded-xl transition-all cursor-pointer"
            >
              View Governance
            </a>
          </motion.div>
        </div>

        {/* 3 Cards Grid Matching Attached Image */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch mb-20">
          
          {/* Card 1: Left Photo Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="rounded-[2rem] overflow-hidden bg-slate-100 min-h-[360px] sm:min-h-[400px] shadow-2xs relative border border-[#dedbc8] group"
          >
            <img
            src={typingImg}
              alt="Hands on computer training"
              className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          {/* Card 2: Middle Photo Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.12 }}
            className="rounded-[2rem] overflow-hidden bg-slate-100 min-h-[360px] sm:min-h-[400px] shadow-2xs relative border border-[#dedbc8] group"
          >
            <img
            src={digitalLiteracyImg}
              alt="Digital literacy classroom"
              className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          {/* Card 3: Vivid Lime Green Card with Flower Graphic and background image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.24 }}
            className="group text-[#1c1c1a] rounded-[2rem] p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden shadow-xs border border-[#c6e625] min-h-[360px] sm:min-h-[400px]"
          >
            {/* Background image with lime green overlay */}
            <img
              src={communityImg}
              alt="Personalized mentorship session"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-[#d8f831]/92 backdrop-blur-[1px]" />

            {/* LeNoir Logo watermark appearing on hover with high opacity */}
            <div className="absolute top-6 right-6 z-20 pointer-events-none opacity-0 group-hover:opacity-95 transition-opacity duration-300 bg-white/90 p-2 rounded-xl shadow-sm border border-slate-100">
              <img
                src="https://www.lenoirfoundation.com/lenoir-logo.png"
                alt="LeNoir Foundation Logo"
                className="h-8 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="relative z-10">
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold leading-snug text-[#111c24] mb-4">
                Personalized Mentorship
              </h3>
              <p className="font-sans text-sm text-[#2b2b26] leading-relaxed font-normal">
                One on one sessions with our IT mentors and educational experts. Get certified guidance, military grade data wiping reports, and sustained long term hub support.
              </p>
            </div>

            <div className="pt-6 relative z-10">
              <a
                href="#contact"
                className="px-5 py-2.5 text-sm font-bold text-orange-600 hover:text-white border border-orange-500/30 hover:border-orange-600 hover:bg-orange-600 rounded-xl transition-all inline-flex items-center gap-1.5 cursor-pointer"
              >
                <span>Explore more</span>
                <ArrowRight size={12} />
              </a>
            </div>

            {/* White Flower Graphic at bottom right corner */}
            <svg
              viewBox="0 0 100 100"
              className="absolute -bottom-4 -right-4 w-40 h-40 text-white fill-current opacity-95 pointer-events-none z-10"
            >
              <path d="M50 50 C32 15 68 15 50 50 C85 32 85 68 50 50 C68 85 32 85 50 50 C15 68 15 32 50 50 Z" />
            </svg>
          </motion.div>

        </div>

        {/* TypeSpark Flagship Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 relative overflow-hidden rounded-[2rem] bg-[#111c24] p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-8 shadow-xl"
        >
          {/* Subtle background texture */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(241,90,36,0.18)_0%,_transparent_60%)] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(241,90,36,0.10)_0%,_transparent_60%)] pointer-events-none" />

          {/* Left: Text */}
          <div className="relative z-10 flex-1">
            <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-[#f15a24] mb-3">
              Our Flagship Initiative
            </span>
            <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-3">
              TypeSpark: Where Digital Skills Begin
            </h3>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl font-normal">
              TypeSpark is our free, offline-first typing and digital literacy platform built specifically for students in low-connectivity environments. It powers every LeNoir tech hub across Uganda and Zimbabwe.
            </p>
          </div>

          {/* Right: CTA */}
          <div className="relative z-10 shrink-0">
            <a
              href="https://typespark.fun/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#f15a24] hover:bg-orange-500 active:scale-95 text-white font-bold text-sm rounded-2xl shadow-lg shadow-orange-500/20 transition-all"
            >
              Visit TypeSpark
              <ArrowRight size={16} strokeWidth={2.5} />
            </a>
          </div>
        </motion.div>

        {/* Embedded Blogs Section */}
        <div className="pt-12 border-t border-[#e5e3d7]">
          <BlogsSection onPostClick={onPostClick} />
        </div>

      </div>
    </section>
  );
}

