import React from 'react';
import { motion } from 'motion/react';
import ContactDetails from './ContactDetails';
import ContactMap from './ContactMap';

export default function GetInTouchPage() {
  return (
    <div className="bg-[#faf8f5] font-sans">

      {/* Hero Header */}
      <section className="relative min-h-[40vh] sm:min-h-[50vh] flex items-center justify-center bg-[#070f16] overflow-hidden pt-24 sm:pt-28 pb-14">
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop"
            alt="Team working together"
            className="w-full h-full object-cover object-center opacity-50 brightness-75"
           loading="lazy" decoding="async" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#070f16]/40 via-[#070f16]/15 to-[#070f16]/55" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-[#f15a24] mb-4">
              We'd Love to Hear From You
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
              We are always ready to help
              <span className="block text-[#f15a24]">and answer your questions.</span>
            </h1>
            <p className="mt-6 text-sm sm:text-lg text-slate-300 font-normal max-w-2xl mx-auto leading-relaxed">
              Whether you want to volunteer, donate hardware, partner with us, or simply learn more — drop us a message and we'll get back to you within 48 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Details + Form */}
      <ContactDetails />

      {/* Map */}
      <ContactMap />

    </div>
  );
}
