import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Mail, CheckCircle, AlertCircle } from 'lucide-react';
import {
  getSafeFormSubmitEndpoint,
  sanitizeHeaderString,
  sanitizePlainText,
  safeMailto,
  siteContactEmail,
} from '../lib/security';

interface ContactSectionProps {
  onNavigateToContact?: () => void;
}

export default function ContactSection({ onNavigateToContact }: ContactSectionProps) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (onNavigateToContact) {
      onNavigateToContact();
      return;
    }
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      return;
    }

    const endpoint = getSafeFormSubmitEndpoint();
    if (!endpoint) {
      setStatus('error');
      return;
    }

    setLoading(true);
    setStatus('idle');

    try {
      const cleanName = sanitizeHeaderString(formData.name, 80);
      const cleanEmail = sanitizeHeaderString(formData.email, 120);
      const cleanSubject = sanitizeHeaderString(
        cleanName
          ? `New Contact Message  LeNoir Foundation · from ${cleanName}${cleanEmail ? ` (${cleanEmail})` : ''}`
          : 'New Contact Message  LeNoir Foundation',
        180,
      );
      const formPayload = new FormData(e.currentTarget);
      formPayload.set('name', cleanName);
      formPayload.set('email', cleanEmail);
      formPayload.set('message', sanitizePlainText(formData.message, 4000));
      formPayload.set('_subject', cleanSubject);
      formPayload.set('_honey', '');
      formPayload.set('_captcha', 'false');

      const response = await fetch(endpoint, {
        method: 'POST',
        body: formPayload,
      });

      const data = await response.json();
      if (data.success === 'true' || response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (status === 'error') setStatus('idle');
  };

  const handleSectionClick = (e: React.MouseEvent) => {
    if (onNavigateToContact) {
      e.preventDefault();
      onNavigateToContact();
    }
  };

  return (
    <section 
      id="contact" 
      onClick={handleSectionClick}
      className={`py-20 sm:py-28 bg-[#0f243f] text-white scroll-mt-10 overflow-hidden ${
        onNavigateToContact ? 'cursor-pointer group/contact-section hover:bg-[#132d4e] transition-colors duration-300' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {onNavigateToContact && (
          <div className="text-center mb-8 bg-[#f15a24] text-white text-xs font-bold font-sans py-2 px-4 rounded-full max-w-xs mx-auto animate-pulse">
            Click anywhere on this section to open the Contact Portal
          </div>
        )}
        
        {/* Main Side-by-Side Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch max-w-6xl mx-auto">
          
          {/* Left Column: White Info Card exactly as displayed in the screenshot */}
          <div className="lg:col-span-5 bg-white text-slate-900 rounded-[2.5rem] p-8 sm:p-12 flex flex-col justify-between shadow-2xl relative">
            <div>
              <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-[#111c24] tracking-normal mb-10">
                Contact Us
              </h3>

              {/* Items List */}
              <div className="space-y-8">
                
                {/* Item 1: Location */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#f15a24] flex items-center justify-center text-white shrink-0 shadow-sm shadow-orange-500/10">
                    <MapPin size={22} className="stroke-[2.5]" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-base text-[#111c24] tracking-tight">
                      Location
                    </h4>
                    <p className="mt-1 text-xs sm:text-sm text-slate-500 font-sans leading-relaxed font-normal">
                      85 to 90 Paul Street<br />
                      London, EC2A 4NE (UK)
                    </p>
                  </div>
                </div>

                {/* Item 2: Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#f15a24] flex items-center justify-center text-white shrink-0 shadow-sm shadow-orange-500/10">
                    <Phone size={22} className="stroke-[2.5]" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-base text-[#111c24] tracking-tight">
                      Phone support
                    </h4>
                    <p className="mt-1 text-xs sm:text-sm text-slate-500 font-sans leading-relaxed font-normal">
                      +44 20 7101 4110<br />
                      Mon to Fri: 9am to 5pm GMT
                    </p>
                  </div>
                </div>

                {/* Item 3: Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#f15a24] flex items-center justify-center text-white shrink-0 shadow-sm shadow-orange-500/10">
                    <Mail size={22} className="stroke-[2.5]" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-base text-[#111c24] tracking-tight">
                      Our email
                    </h4>
                    <p className="mt-1 text-xs sm:text-sm text-slate-500 font-sans font-normal hover:text-[#f15a24] transition-colors break-all">
                      info@lenoirfoundation.com
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Registered Charity footer text exactly as shown */}
            <div className="mt-12 pt-6 border-t border-slate-100 select-none">
              <p className="text-[10px] sm:text-xs text-slate-400 font-sans font-medium">
                Registered Charity in England & Wales (No: 1197474)
              </p>
            </div>
          </div>

          {/* Right Column: Get in Touch Form */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Header copy */}
            <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-normal">
              Get in Touch
            </h3>
            <p className="mt-4 text-sm sm:text-base text-white/80 font-sans leading-relaxed font-normal mb-8 max-w-xl">
              Get in Touch: Have questions about our programs or want to volunteer? Drop us a message.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Input for name */}
              <div>
                <input
                  id="form-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-6 py-4.5 bg-white text-slate-900 placeholder:text-slate-400 rounded-2xl text-sm sm:text-base font-sans outline-none focus:ring-2 focus:ring-[#f15a24] focus:ring-offset-2 focus:ring-offset-[#0f243f] transition-all"
                />
              </div>

              {/* Input for email */}
              <div>
                <input
                  id="form-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full px-6 py-4.5 bg-white text-slate-900 placeholder:text-slate-400 rounded-2xl text-sm sm:text-base font-sans outline-none focus:ring-2 focus:ring-[#f15a24] focus:ring-offset-2 focus:ring-offset-[#0f243f] transition-all"
                />
              </div>

              {/* Textarea for message */}
              <div>
                <textarea
                  id="form-message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  className="w-full px-6 py-4.5 bg-white text-slate-900 placeholder:text-slate-400 rounded-2xl text-sm sm:text-base font-sans outline-none focus:ring-2 focus:ring-[#f15a24] focus:ring-offset-2 focus:ring-offset-[#0f243f] resize-none transition-all"
                />
              </div>

              {/* Success/Error Alerts inside form */}
              <AnimatePresence mode="wait">
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-400 text-xs sm:text-sm flex items-center gap-2"
                  >
                    <CheckCircle size={16} /> Message sent successfully! We will contact you soon.
                  </motion.div>
                )}

                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 bg-rose-500/10 border border-rose-500/20 rounded-xl text-rose-400 text-xs sm:text-sm flex items-center gap-2"
                  >
                    <AlertCircle size={16} /> Please fill out all required fields.
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Button precisely styled under form left aligned */}
              <div className="flex">
                <button
                  type="submit"
                  disabled={loading}
                  className="px-10 py-3.5 bg-[#f15a24] hover:bg-[#e04f1c] active:scale-95 disabled:opacity-50 text-white font-bold text-sm sm:text-base uppercase tracking-wider rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer"
                >
                  {loading ? 'Sending...' : 'SEND'}
                </button>
              </div>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
