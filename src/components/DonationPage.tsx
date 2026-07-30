import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Heart, 
  DollarSign, 
  Gift, 
  ShieldCheck, 
  Check, 
  Loader2, 
  CreditCard, 
  Lock, 
  ArrowRight,
  Info
} from 'lucide-react';
import { sanitizeHeaderString, sanitizePlainText, safeMailto, siteContactEmail } from '../lib/security';

export default function DonationPage() {
  const [frequency, setFrequency] = useState<'once' | 'monthly'>('monthly');
  const [selectedAmount, setSelectedAmount] = useState<number | 'custom'>(50);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    paymentMethod: 'card'
  });
  const [donateState, setDonateState] = useState<'idle' | 'processing' | 'success'>('idle');

  const presetAmounts = [15, 30, 50, 100, 250];

  const getActiveAmount = (): number => {
    if (selectedAmount === 'custom') {
      const parsed = parseFloat(customAmount);
      return isNaN(parsed) || parsed <= 0 ? 0 : parsed;
    }
    return selectedAmount;
  };

  const currentAmount = getActiveAmount();

  const handlePresetSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/[^0-9.]/g, '');
    setCustomAmount(val);
    setSelectedAmount('custom');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanName = sanitizeHeaderString(formData.name, 80);
    const cleanEmail = sanitizeHeaderString(formData.email, 120);
    const cleanPhone = sanitizeHeaderString(formData.phone, 30);
    if (cleanName && cleanEmail && currentAmount > 0) {
      setFormData((prev) => ({
        ...prev,
        name: cleanName,
        email: cleanEmail,
        phone: cleanPhone,
      }));
      setDonateState('processing');
      setTimeout(() => {
        setDonateState('success');
      }, 2000);
    }
  };

  const currentPageIsValid = () => {
    return sanitizeHeaderString(formData.name, 80).trim() && sanitizeHeaderString(formData.email, 120).trim() && currentAmount > 0;
  };

  const getImpactMessage = (amount: number) => {
    if (amount <= 20) {
      return "Provides educational computer textbooks for 5 students in rural hubs.";
    } else if (amount <= 50) {
      return "Covers basic digital skills curriculum resources and mentoring sessions.";
    } else if (amount <= 100) {
      return "Powers our off grid server hubs connecting 15 marginilized children online.";
    } else if (amount <= 250) {
      return "Funds high performance laptop parts for collaborative E Labs classrooms.";
    } else {
      return "Enables full community digital center installation and localized maintenance of tools.";
    }
  };

  return (
    <div className="bg-[#faf8f5] min-h-screen font-sans">
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[50vh] sm:min-h-[60vh] flex items-center justify-center bg-[#070f16] overflow-hidden pt-24 sm:pt-28 pb-16">
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <img
            src="https://lenoirfoundation.vercel.app/assets/hero_background_1781532776444-BODnaYja.jpg"
            alt="Donate to empower digital futures"
            className="w-full h-full object-cover object-center opacity-55 brightness-70"
           loading="lazy" decoding="async" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#070f16]/35 via-[#070f16]/10 to-[#070f16]/55" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight mb-6 leading-[1.1]">
              Donate Hardware, Solar, or <span className="text-[#f15a24]">Fund a Hub</span>
            </h1>

            <p className="font-sans text-base sm:text-xl text-slate-300 font-normal max-w-3xl mx-auto leading-relaxed">
              Every £18 buys a year of digital skills for one child. Laptop donations, solar panel bundles, and corporate sponsorships get a full UK Gift Aid + audit report within 90 days.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Donation Form Section */}
      <div className="py-10 sm:py-16 bg-[#faf8f5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Success State Screen */}
        <AnimatePresence mode="wait">
          {donateState === 'success' ? (
            <motion.div 
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-[2rem] border border-slate-200 shadow-xl p-8 sm:p-12 text-center max-w-xl mx-auto"
            >
              <div className="w-20 h-20 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check size={40} className="stroke-[3]" />
              </div>
              
              <h2 className="font-display text-2xl sm:text-3xl font-black text-[#112335] tracking-tight">
                Thank You, {formData.name}!
              </h2>
              
              <p className="mt-4 text-slate-500 text-sm sm:text-base leading-relaxed leading-normal px-2">
                Your generous gift of <span className="font-bold text-[#112335]">£{currentAmount} {frequency === 'monthly' ? '/ month' : ''}</span> has been processed successfully. You are officially bridging the digital divide!
              </p>

              {/* Gift Receipt Card */}
              <div className="my-8 p-6 bg-slate-50 rounded-2xl text-left border border-slate-100 text-xs sm:text-sm font-sans space-y-3">
                <div className="flex justify-between border-b border-slate-200/60 pb-2">
                  <span className="text-slate-400">Transaction Status</span>
                  <span className="font-bold text-emerald-600">Approved & Security Verified</span>
                </div>
                <div className="flex justify-between font-mono">
                  <span className="text-slate-400">Order/Receipt ID</span>
                  <span className="text-[#112335] font-semibold">LN-{Math.floor(100000 + Math.random() * 900000)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Charity Registry No.</span>
                  <span className="text-[#112335] font-semibold">1197474 (England & Wales)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Contribution Segment</span>
                  <span className="text-[#112335] font-semibold">Rural E Lab Equipment Funding</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Email Recipient</span>
                  <span className="text-[#112335] font-semibold break-all">{formData.email}</span>
                </div>
              </div>

              <button
                onClick={() => {
                  setDonateState('idle');
                  setFormData({ name: '', email: '', phone: '', paymentMethod: 'card' });
                  setSelectedAmount(50);
                }}
                className="w-full sm:w-auto px-8 py-3 bg-[#f15a24] hover:bg-orange-600 text-white font-bold rounded-xl transition-all shadow-md shadow-orange-500/10 hover:shadow-orange-500/20"
              >
                Make Another Gift
              </button>
            </motion.div>
          ) : (
            /* Main Form UI Container Grid */
            <motion.div 
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              
              {/* Left Column: Interactive Widget */}
              <div className="lg:col-span-7 bg-white rounded-[2rem] border border-slate-200/80 shadow-xs p-6 sm:p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Frequency Toggle Button */}
                  <div>
                    <label className="block text-xs font-bold text-[#112335] uppercase tracking-wider mb-3">
                      Gift Frequency
                    </label>
                    <div className="grid grid-cols-2 gap-2 bg-slate-100 p-1.5 rounded-2xl">
                      <button
                        type="button"
                        onClick={() => setFrequency('once')}
                        className={`py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center justify-center ${
                          frequency === 'once' 
                            ? 'bg-white text-orange-600 shadow-sm' 
                            : 'text-slate-500 hover:text-slate-800'
                        }`}
                      >
                        Give Once
                      </button>
                      <button
                        type="button"
                        onClick={() => setFrequency('monthly')}
                        className={`py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                          frequency === 'monthly' 
                            ? 'bg-white text-orange-600 shadow-sm' 
                            : 'text-slate-500 hover:text-slate-800'
                        }`}
                      >
                        <span>Give Monthly</span>
                        <Heart size={14} className="fill-current text-[#f15a24] shrink-0" />
                      </button>
                    </div>
                  </div>

                  {/* Amount Grid Selection */}
                  <div>
                    <label className="block text-xs font-bold text-[#112335] uppercase tracking-wider mb-3">
                      Select Amount (GBP)
                    </label>
                    <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                      {presetAmounts.map((amount) => (
                        <button
                          key={amount}
                          type="button"
                          onClick={() => handlePresetSelect(amount)}
                          className={`py-3 px-1 rounded-xl text-sm font-extrabold transition-all border cursor-pointer ${
                            selectedAmount === amount
                              ? 'bg-orange-600 border-orange-600 text-white shadow-xs'
                              : 'bg-white border-slate-200 hover:border-slate-400 text-slate-800'
                          }`}
                        >
                          £{amount}
                        </button>
                      ))}
                      
                      {/* Other Amount indicator selection */}
                      <button
                        type="button"
                        onClick={() => setSelectedAmount('custom')}
                        className={`py-3 px-1 rounded-xl text-xs sm:text-sm font-bold transition-all border cursor-pointer col-span-3 sm:col-span-1 ${
                          selectedAmount === 'custom'
                            ? 'bg-orange-600 border-orange-600 text-white'
                            : 'bg-white border-slate-200 hover:border-slate-400 text-slate-800'
                        }`}
                      >
                        Custom
                      </button>
                    </div>

                    {/* Custom Input drawer animate */}
                    <AnimatePresence>
                      {selectedAmount === 'custom' && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-3 overflow-hidden"
                        >
                          <div className="relative rounded-xl border border-slate-200/90 shadow-2xs overflow-hidden">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-extrabold text-sm sm:text-base">
                              £
                            </span>
                            <input
                              type="text"
                              value={customAmount}
                              onChange={handleCustomChange}
                              placeholder="Enter customized amount"
                              className="w-full pl-8 pr-4 py-3 bg-[#f8fafc]/50 text-slate-800 text-sm sm:text-base font-bold focus:outline-none"
                              required
                            />
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
                              <span className="text-[10px] font-bold text-slate-400">GBP</span>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Realtime Impact Preview Box */}
                  <motion.div 
                    layout
                    className="p-4 rounded-xl bg-orange-50 border border-orange-100/60 text-xs sm:text-sm text-orange-800 flex items-start gap-3"
                  >
                    <Gift size={18} className="text-[#f15a24] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-extrabold text-[#f15a24] block">Impact of Your Gift:</span>
                      <p className="mt-0.5 text-slate-600 leading-relaxed font-normal">
                        {getImpactMessage(currentAmount)}
                      </p>
                    </div>
                  </motion.div>

                  {/* Donor personal details segment */}
                  <div className="space-y-4">
                    <h3 className="text-xs font-bold text-[#112335] uppercase tracking-wider block border-b border-slate-100 pb-2">
                      Donor Information
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs text-slate-500 font-bold mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-800 text-sm font-semibold focus:outline-none focus:ring-1 focus:ring-[#f15a24] focus:border-[#f15a24]"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-xs text-slate-500 font-bold mb-1.5">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-800 text-sm font-semibold focus:outline-none focus:ring-1 focus:ring-[#f15a24] focus:border-[#f15a24]"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs text-slate-500 font-bold mb-1.5">
                        Phone Number <span className="text-slate-400 font-normal">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+44 7123 456789"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-800 text-sm font-semibold focus:outline-none focus:ring-1 focus:ring-[#f15a24] focus:border-[#f15a24]"
                      />
                    </div>
                  </div>

                  {/* Payment Method Selector */}
                  <div className="space-y-3">
                    <label className="block text-xs font-bold text-[#112335] uppercase tracking-wider mb-2">
                      Payment Method
                    </label>

                    <div className="grid grid-cols-2 gap-3">
                      <label className="border border-slate-200 rounded-xl p-3 flex items-center justify-between cursor-pointer hover:bg-slate-50/60 py-2.5">
                        <div className="flex items-center gap-2">
                          <input
                            type="radio"
                            name="payment"
                            value="card"
                            checked={formData.paymentMethod === 'card'}
                            onChange={() => setFormData({ ...formData, paymentMethod: 'card' })}
                            className="accent-orange-600 scale-110"
                          />
                          <span className="text-xs sm:text-sm font-bold text-slate-700 flex items-center gap-1.5">
                            <CreditCard size={15} /> Card
                          </span>
                        </div>
                        <div className="flex gap-1 text-[10px] text-slate-300 font-bold font-mono">
                          <span>VISA</span>
                          <span>MC</span>
                        </div>
                      </label>

                      <label className="border border-slate-200 rounded-xl p-3 flex items-center justify-between cursor-pointer hover:bg-slate-50/60 py-2.5">
                        <div className="flex items-center gap-2">
                          <input
                            type="radio"
                            name="payment"
                            value="paypal"
                            checked={formData.paymentMethod === 'paypal'}
                            onChange={() => setFormData({ ...formData, paymentMethod: 'paypal' })}
                            className="accent-orange-600 scale-110"
                          />
                          <span className="text-xs sm:text-sm font-bold text-slate-700">
                            PayPal
                          </span>
                        </div>
                        <span className="text-[10px] text-sky-600 font-bold italic">PP</span>
                      </label>
                    </div>
                  </div>

                  {/* Final Submit Action Trigger */}
                  <button
                    type="submit"
                    disabled={donateState === 'processing' || !currentPageIsValid()}
                    className="w-full block py-3.5 bg-[#f15a24] hover:bg-orange-600 disabled:bg-slate-300 text-white font-extrabold text-sm sm:text-base tracking-tight rounded-xl transition-all shadow-md shadow-orange-500/10 cursor-pointer text-center"
                  >
                    {donateState === 'processing' ? (
                      <span className="flex items-center justify-center gap-1.5">
                        <Loader2 className="animate-spin" size={18} />
                        Securing connection...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-1.5">
                        <Lock size={15} /> Confirm Gift of £{currentAmount} {frequency === 'monthly' ? '/ month' : ''}
                      </span>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[10px] sm:text-xs text-slate-400 font-medium">
                    <ShieldCheck size={14} className="text-emerald-500" />
                    <span>256 bit SSL Card Encryption • Secure Transaction SSL • PCI Compliant</span>
                  </div>

                </form>
              </div>

              {/* Right Column: Key details, trust builders, and FAQs */}
              <div className="lg:col-span-5 space-y-6">
                
                {/* Board Trust Card */}
                <div className="bg-[#112335] rounded-[2rem] text-white p-6 sm:p-8 relative overflow-hidden shadow-lg">
                  {/* Floating transparent gradient accent */}
                  <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-orange-500/15 blur-xl pointer-events-none" />
                  
                  <h3 className="font-display text-xl sm:text-2xl font-black tracking-tight mb-4">
                    Our Stewardship Guarantee
                  </h3>
                  
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                    LeNoir Foundation operates with absolute overhead transparency. By maintaining low administrative expenses and leveraging a passionate coordinate of global volunteers, we maximize local lab support.
                  </p>

                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-700/60 font-sans text-xs">
                    <div>
                      <span className="text-slate-400 font-bold block">Commission Registered</span>
                      <span className="text-white font-extrabold mt-1 block">Reg No. 1197474</span>
                    </div>
                    <div>
                      <span className="text-slate-400 font-bold block">100% Secure</span>
                      <span className="text-white font-extrabold mt-1 block">Stripe Gateway</span>
                    </div>
                  </div>
                </div>

                {/* Frequently Asked Questions Mini Section */}
                <div className="bg-white rounded-[2rem] border border-slate-200/80 shadow-3xs p-6 sm:p-8">
                  <h3 className="font-display text-lg font-extrabold text-[#112335] mb-4">
                    Donation FAQs
                  </h3>

                  <div className="space-y-4">
                    <div className="text-xs sm:text-sm">
                      <span className="font-extrabold text-[#112335] block">Is my donation tax deductible?</span>
                      <p className="text-slate-500 mt-1 font-normal leading-relaxed">
                        Yes, LeNoir Foundation is a fully registered charity with the UK Charity Commission (ID: 1197474). Gift Aid can be claimed on eligible donations.
                      </p>
                    </div>

                    <div className="text-xs sm:text-sm border-t border-slate-100 pt-3">
                      <span className="font-extrabold text-[#112335] block">Can I change or cancel my recurring gift?</span>
                      <p className="text-slate-500 mt-1 font-normal leading-relaxed">
                        Absolutely. Any regular monthly contribution can be easily stopped or updated at any point by emailing our support team at <a href={safeMailto(siteContactEmail)} className="text-orange-600 font-bold">{siteContactEmail}</a>.
                      </p>
                    </div>

                    <div className="text-xs sm:text-sm border-t border-slate-100 pt-3">
                      <span className="font-extrabold text-[#112335] block">How is my financial payment safe?</span>
                      <p className="text-slate-500 mt-1 font-normal leading-relaxed">
                        We process payments strictly via standard secure channels. We never store or log your raw card numbers or private credentials ourselves.
                      </p>
                    </div>
                  </div>
                </div>

              </div>

            </motion.div>
          )}
        </AnimatePresence>
        
        </div>
      </div>
    </div>
  );
}
