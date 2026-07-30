import React from 'react';
import { motion } from 'motion/react';
import { Heart, Users, MapPin, Award, TrendingUp, CheckCircle } from 'lucide-react';
import ImpactSection from './ImpactSection';
import TestimonialsSection from './TestimonialsSection';
import ContactSection from './ContactSection';
import codingImg from '../assets/images/coding_for_kids_1781532812034.jpg';

interface ImpactPageProps {
  onDonateClick: () => void;
  onContactClick: () => void;
}

export default function ImpactPage({ onDonateClick, onContactClick }: ImpactPageProps) {
  return (
    <div className="bg-[#faf8f5] font-sans">
      {/* Hero Header */}
      <section className="relative min-h-[50vh] sm:min-h-[60vh] flex items-center justify-center bg-[#070f16] overflow-hidden pt-24 sm:pt-28 pb-16">
        {/* Background Image for Impact */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <img
            src={codingImg}
            alt="Students celebrating digital skills achievement"
            className="w-full h-full object-cover object-center opacity-55 brightness-70"
           loading="lazy" decoding="async" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#070f16]/35 via-[#070f16]/10 to-[#070f16]/50" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-6">
              Lives Changed, Hubs Built
              <span className="block text-[#f15a24]">The Numbers</span>
            </h1>

            <p className="font-sans text-base sm:text-xl text-slate-300 font-normal max-w-3xl mx-auto leading-relaxed mb-8">
              Real-world evidence from 15,000+ students, 30+ partner schools, and two nations. Every metric below is audited and publicly published.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={onDonateClick}
                className="px-7 py-3.5 bg-[#f15a24] hover:bg-orange-600 text-white font-sans text-sm font-bold rounded-xl shadow-lg transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Help Expand Our Reach</span>
                <Heart size={16} className="fill-current" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Impact Metrics Section */}
      <ImpactSection />

      {/* Testimonials and Student Stories */}
      <TestimonialsSection />

      {/* Regional Focus Highlights */}
      <section className="py-20 bg-[#faf8f5] border-t border-slate-200/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#111c24] mb-4">
              Our Active Operational Regions
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              We work directly with local ministry partners and village leadership to ensure culturally integrated, long term impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden flex flex-col hover:shadow-lg transition-all duration-300 group">
              <div className="w-full aspect-[16/9] overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1400&auto=format&fit=crop"
                  alt="Uganda rural school landscape"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                 loading="lazy" decoding="async" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <div className="p-2 bg-white/90 backdrop-blur-sm rounded-lg">
                    <MapPin className="text-[#f15a24]" size={20} />
                  </div>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#111c24] leading-snug mb-4">Uganda (Eastern & Central)</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                  Serving rural schools in Jinja, Kamuli, and Mukono districts with solar tech hubs, offline digital libraries, and TypeSpark typing modules.
                </p>
                <div className="flex items-center gap-6 text-xs font-bold text-slate-700">
                  <span>• 12 Primary Tech Hubs</span>
                  <span>• 8,500+ Students</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden flex flex-col hover:shadow-lg transition-all duration-300 group">
              <div className="w-full aspect-[16/9] overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=1400&auto=format&fit=crop"
                  alt="Zimbabwe community landscape"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                 loading="lazy" decoding="async" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <div className="p-2 bg-white/90 backdrop-blur-sm rounded-lg">
                    <MapPin className="text-[#f15a24]" size={20} />
                  </div>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#111c24] leading-snug mb-4">Zimbabwe (Mashonaland & Manicaland)</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                  Providing secondary school computer labs, teacher IT bootcamps, and career pathway workshops in partnership with local community trusts.
                </p>
                <div className="flex items-center gap-6 text-xs font-bold text-slate-700">
                  <span>• 13 Active Tech Hubs</span>
                  <span>• 6,800+ Students</span>
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
