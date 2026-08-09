import React from 'react';
import { motion } from 'motion/react';
import { Heart, Monitor, ArrowRight } from 'lucide-react';

interface VolunteerSectionProps {
  onContactClick?: () => void;
}

export default function VolunteerSection({ onContactClick }: VolunteerSectionProps) {
  return (
    <section className="py-20 sm:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* ── LEFT: Staggered photo collage ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="relative h-[480px] sm:h-[540px] lg:h-[580px]"
          >
            {/* Large photo — bottom-left */}
            <div className="absolute bottom-0 left-0 w-[62%] h-[75%] rounded-[1.5rem] overflow-hidden shadow-[0_20px_60px_-10px_rgba(0,0,0,0.22)]">
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=900&auto=format&fit=crop"
                alt="Young Black professionals in a workshop"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
                width={900}
                height={1200}
              />
            </div>

            {/* Tall photo — top-right, overlapping */}
            <div className="absolute top-0 right-0 w-[52%] h-[68%] rounded-[1.5rem] overflow-hidden shadow-[0_20px_60px_-10px_rgba(0,0,0,0.18)]">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=900&auto=format&fit=crop"
                alt="Young Black woman working on laptop"
                className="w-full h-full object-cover object-top"
                loading="lazy"
                decoding="async"
                width={600}
                height={900}
              />
            </div>

            {/* Small square photo — middle overlap */}
            <div className="absolute bottom-[18%] right-[6%] w-[34%] h-[32%] rounded-[1.25rem] overflow-hidden shadow-[0_14px_40px_-8px_rgba(0,0,0,0.20)] border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=600&auto=format&fit=crop"
                alt="Young Black professionals collaborating"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
                width={600}
                height={600}
              />
            </div>

            {/* Floating stat badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="absolute top-[38%] left-[4%] bg-white rounded-2xl shadow-[0_12px_40px_-8px_rgba(0,0,0,0.18)] px-5 py-4 flex flex-col items-center min-w-[110px]"
            >
              <span className="font-display text-2xl sm:text-3xl font-black text-[#f15a24] leading-none">
                15K+
              </span>
              <span className="text-[10px] font-sans font-semibold text-slate-500 mt-1 text-center leading-snug">
                Students<br />Impacted
              </span>
            </motion.div>

            {/* Orange accent dot cluster */}
            <div className="absolute top-4 left-[30%] w-8 h-8 rounded-full bg-[#f15a24]/15 pointer-events-none" />
            <div className="absolute top-8 left-[36%] w-4 h-4 rounded-full bg-[#f15a24]/25 pointer-events-none" />
          </motion.div>

          {/* ── RIGHT: Copy block ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="flex flex-col justify-center"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-5">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#f15a24]">
                About Us
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-[#111c24] leading-[1.15] tracking-tight mb-5">
              Now imagine being that person for someone else.
            </h2>

            {/* Body copy */}
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed mb-8 max-w-lg">
              We are looking for professionals willing to share their time, experience, and industry insights with our students as they prepare for careers in the digital economy. It does not take much of your time, but the impact on a young person's confidence can be life-changing.
            </p>

            {/* Feature card — styled like the "Healthcare Support" card in the reference image */}
            <div className="flex items-start gap-4 bg-[#faf8f5] border border-slate-100 rounded-2xl px-5 py-5 mb-8 shadow-sm">
              <div className="w-11 h-11 rounded-xl bg-[#f15a24] flex items-center justify-center text-white shrink-0 shadow-md shadow-orange-400/20">
                <Monitor size={20} strokeWidth={2} />
              </div>
              <div>
                <p className="font-display text-sm font-bold text-[#111c24] mb-1">Digital Skills Support</p>
                <p className="text-slate-500 text-xs leading-relaxed">
                  Provide essential digital skills sessions and mentorship to students preparing for careers in the tech-driven global economy.
                </p>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={onContactClick}
                className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-[#f15a24] hover:bg-orange-600 active:scale-95 text-white font-bold text-sm rounded-xl shadow-lg shadow-orange-500/20 transition-all cursor-pointer"
              >
                Donate Now
                <Heart size={15} className="fill-current" />
              </button>
              <button
                onClick={onContactClick}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold text-[#111c24] border border-slate-200 hover:border-orange-400 hover:text-[#f15a24] rounded-xl transition-all cursor-pointer"
              >
                Become a Volunteer
                <ArrowRight size={15} />
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
