import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, MapPin, Mail, Share2, Facebook, Twitter, Linkedin, Instagram, ArrowRight, CheckCircle } from 'lucide-react';
import { safeHref, safeMailto, siteContactEmail } from '../lib/security';

const WEB3FORMS_KEY = '3530d940-046d-42c5-8396-b353a26c38ce';

export default function ContactDetails() {
  const [result, setResult] = useState('');
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus('submitting');
    setResult('Sending...');

    const formData = new FormData(e.currentTarget);
    formData.append('access_key', WEB3FORMS_KEY);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        setResult('Form Submitted Successfully');
        (e.target as HTMLFormElement).reset();
        setTimeout(() => { setSubmitStatus('idle'); setResult(''); }, 6000);
      } else {
        setSubmitStatus('error');
        setResult(data.message || 'Something went wrong. Please try again.');
        setTimeout(() => { setSubmitStatus('idle'); setResult(''); }, 6000);
      }
    } catch {
      setSubmitStatus('error');
      setResult('A network error occurred. Please try again.');
      setTimeout(() => { setSubmitStatus('idle'); setResult(''); }, 6000);
    }
  };

  return (
    <section className="py-20 bg-[#faf8f5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contact Body Container Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          
          {/* Left Column - Contact Info Copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col justify-center text-[#112335]"
          >
            {/* Elegant Display Section Title mimicking mockup layout */}
            <h2 className="font-display text-3xl sm:text-4.5xl font-black mt-2 leading-[1.15] tracking-tight">
              We are always ready to help you and answer your questions
            </h2>
            
            <p className="mt-6 text-sm sm:text-base text-slate-500 font-sans leading-relaxed">
              Our team at LeNoir Foundation is dedicated to empowering communities and children through robust computer access and learning packages. Whether you're interested in donating resources, joining our volunteer team, or partnering up for educational outreach, we want to hear from you.
            </p>

            {/* Quick Informational Grid Block */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 mt-12">
              
              {/* Call Center */}
              <div className="flex flex-col">
                <span className="font-display text-xs font-bold uppercase tracking-wider text-[#f15a24] mb-2 flex items-center gap-1.5">
                  <Phone size={12} /> Call Center
                </span>
                <span className="font-sans text-base font-extrabold text-[#112335] leading-snug">
                  +44 20 7101 4110
                </span>
                <span className="font-sans text-xs sm:text-sm text-slate-400 mt-1 font-medium">
                  Mon to Fri: 9:00 AM to 5:00 PM GMT
                </span>
              </div>

              {/* Our Location */}
              <div className="flex flex-col">
                <span className="font-display text-xs font-bold uppercase tracking-wider text-[#f15a24] mb-2 flex items-center gap-1.5">
                  <MapPin size={12} /> Our Location
                </span>
                <span className="font-sans text-base font-bold text-[#112335] leading-snug">
                  London, Shoreditch (UK)
                </span>
                <span className="font-sans text-xs sm:text-sm text-slate-400 mt-1">
                  85 to 90 Paul Street, EC2A 4NE
                </span>
              </div>

              {/* Email Address */}
              <div className="flex flex-col">
                <span className="font-display text-xs font-bold uppercase tracking-wider text-[#f15a24] mb-2 flex items-center gap-1.5">
                  <Mail size={12} /> Email
                </span>
                <a
                  href={safeMailto(siteContactEmail)}
                  className="font-sans text-base font-semibold text-[#112335] hover:text-[#f15a24] transition-colors inline-block"
                >
                  info@lenoirfoundation.com
                </a>
              </div>

              {/* Social networks exactly aligned */}
              <div className="flex flex-col">
                <span className="font-display text-xs font-bold uppercase tracking-wider text-[#f15a24] mb-2 flex items-center gap-1.5">
                  <Share2 size={12} /> Social network
                </span>
                <div className="flex items-center gap-3 mt-1 text-slate-500">
                  <a href={safeHref('#')} onClick={(e) => e.preventDefault()} className="p-1 hover:text-[#f15a24] transition-colors"><Facebook size={18} /></a>
                  <a href={safeHref('#')} onClick={(e) => e.preventDefault()} className="p-1 hover:text-[#f15a24] transition-colors"><Twitter size={18} /></a>
                  <a href={safeHref('#')} onClick={(e) => e.preventDefault()} className="p-1 hover:text-[#f15a24] transition-colors"><Linkedin size={18} /></a>
                  <a href={safeHref('#')} onClick={(e) => e.preventDefault()} className="p-1 hover:text-[#f15a24] transition-colors"><Instagram size={18} /></a>
                </div>
              </div>

            </div>

          </motion.div>

          {/* Right Column - Beautiful Teal Rounded Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-6"
          >
            <div className="bg-[#3dbba6] rounded-[2.5rem] p-8 sm:p-12 text-white shadow-xl shadow-teal-900/10 relative">
              
              {/* Header inside the turquoise card */}
              <h3 className="font-display text-3xl font-black text-white tracking-tight mb-4">
                Get In Touch
              </h3>
              
              <p className="text-white/80 font-sans text-xs sm:text-sm leading-relaxed mb-8">
                We would love to hear from you and answer any questions you may have. You can contact us by filling out the form below, sending us an email or calling us on our phone number. We will get back to you as soon as possible.
              </p>

              {/* Status Banner */}
              <AnimatePresence>
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-6 p-4 bg-white/20 border border-white/30 rounded-2xl flex items-center gap-3 backdrop-blur-md"
                  >
                    <CheckCircle className="text-white shrink-0" size={20} />
                    <span className="text-xs sm:text-sm font-semibold">{result}</span>
                  </motion.div>
                )}
                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-6 p-4 bg-[#f15a24]/20 border border-[#f15a24]/30 rounded-2xl flex items-center gap-3 backdrop-blur-md text-white"
                  >
                    <span className="text-xs sm:text-sm font-semibold">{result}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Underlying styling contact form inputs */}
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Full name input */}
                <div>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Full name"
                    className="w-full bg-transparent border-b border-white/30 focus:border-white py-3 text-sm text-white placeholder-white/60 focus:outline-none font-sans font-medium transition-all"
                  />
                </div>

                {/* Email input */}
                <div>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Email"
                    className="w-full bg-transparent border-b border-white/30 focus:border-white py-3 text-sm text-white placeholder-white/60 focus:outline-none font-sans font-medium transition-all"
                  />
                </div>

                {/* Subject input */}
                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    className="w-full bg-transparent border-b border-white/30 focus:border-white py-3 text-sm text-white placeholder-white/60 focus:outline-none font-sans font-medium transition-all"
                  />
                </div>

                {/* Message text area */}
                <div>
                  <textarea
                    required
                    name="message"
                    rows={4}
                    placeholder="Message"
                    className="w-full bg-transparent border-b border-white/30 focus:border-white py-3 text-sm text-white placeholder-white/60 focus:outline-none font-sans font-medium transition-all resize-none"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={submitStatus === 'submitting'}
                    className="px-8 py-4 bg-[#f15a24] hover:bg-[#e04f1c] active:scale-95 disabled:opacity-50 text-white font-sans font-bold text-xs sm:text-sm tracking-wider rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer uppercase"
                  >
                    <span>{submitStatus === 'submitting' ? 'Sending...' : 'Send a Message'}</span>
                    <ArrowRight size={14} />
                  </button>
                </div>

              </form>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
