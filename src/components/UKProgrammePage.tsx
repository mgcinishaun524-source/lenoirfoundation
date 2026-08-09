import React from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight, Heart, Users, Monitor,
  Wifi, BookOpen, Building2, Mail, ChevronRight
} from 'lucide-react';
import ContactSection from './ContactSection';

interface UKProgrammePageProps {
  onDonateClick: () => void;
  onContactClick: () => void;
}

const approach = [
  { icon: Users,    title: 'Free Digital Drop-Ins',   desc: 'Two-hour weekly sessions in the places people already go. Libraries, community centres, places of worship. No registration, no jargon, no cost. Bring a question; leave with an answer.', badge: 'Launching in Luton, June 2026' },
  { icon: Monitor,  title: 'Refurbished Devices',      desc: 'We collect retired laptops and tablets from businesses, refurbish them to a working standard, and place them with learners who have never owned a device. Long-term loan or permanent placement, depending on need.', badge: 'Backed by the National Device Bank' },
  { icon: Wifi,     title: 'Free Connectivity',        desc: 'A device without data is a brick. We distribute free SIM cards preloaded with mobile data to participants who cannot afford broadband. Sourced through the National Databank, redistributed at our drop-ins.', badge: 'Sourced via Good Things Foundation' },
  { icon: BookOpen, title: 'Skills That Stick',        desc: 'Structured digital skills delivered through the proven Learn My Way curriculum. Covering essentials from email and online safety to NHS, banking, and benefits. Supported one-to-one by trained Digital Champions.', badge: 'Built on the Learn My Way platform' },
];

const phases = [
  { months: 'MONTHS 1–2 · APR–MAY', title: 'Foundation',       dot: '#f15a24', items: ['Register as Good Things Foundation Digital Inclusion Hub', 'Secure two community venues in Luton', 'Submit National Lottery Awards for All application (£10,000)', 'Launch device donation drive across Luton businesses', 'Recruit Digital Champion volunteers from University of Bedfordshire'] },
  { months: 'MONTHS 3–4 · JUN–JUL', title: 'Launch & Deliver', dot: '#f15a24', items: ['Open weekly Digital Drop-Ins in two Luton venues', 'Distribute Databank SIMs and refurbished devices', 'Begin impact measurement from Session 1, Day 1', 'Secure first corporate skills-session partnership', 'Begin drafting Reaching Communities application'] },
  { months: 'MONTHS 5–6 · AUG–OCT', title: 'Evidence & Scale', dot: '#d4a017', items: ['Publish six-month impact report with case studies', 'Submit Reaching Communities application (£50–150K)', 'Open Tower Hamlets partnership conversation with community anchor', 'Board strategy session: Year 2 expansion plan', 'Begin transition to part-time Digital Inclusion Coordinator'] },
];

const getInvolved = [
  { num: '01', icon: Monitor,   title: 'Donate IT Equipment',     desc: 'A retired laptop in your office cupboard becomes a learner\'s first computer. We collect, refurbish, place.', cta: 'Donate Equipment',  orange: false },
  { num: '02', icon: Heart,     title: 'Sponsor a Session',       desc: '£500 covers a full month of weekly drop-ins at one venue. Refreshments, materials, volunteer expenses.',       cta: 'Sponsor a Session', orange: false },
  { num: '03', icon: Users,     title: 'Volunteer as a Champion', desc: 'A few hours a week, in a Luton community venue. Training provided. Reference letters offered for students.',    cta: 'Get in Touch',      orange: false },
  { num: '04', icon: Building2, title: 'Open Your Venue',         desc: 'A library, mosque, community centre, or job club with two free hours a week. That\'s all we need to run a session.', cta: 'Partner With Us', orange: false },
  { num: '05', icon: Mail,      title: 'Corporate Partnership',   desc: 'Bulk device donations, employee skills sessions, or strategic CSR funding partnerships. We\'ll send the brief.',  cta: 'Request Brief',     orange: false },
  { num: '06', icon: Mail,      title: 'Stay in the loop',        desc: 'One short update each month. What we ran, who we reached, what we learnt. No fundraising spam.',               cta: 'Subscribe',         orange: true  },
];

export default function UKProgrammePage({ onDonateClick, onContactClick }: UKProgrammePageProps) {
  return (
    <div className="bg-[#faf8f5] font-sans">

      {/* HERO full bleed bg image, centred text, matches site pattern */}
      <section className="relative min-h-[75vh] md:min-h-[85vh] flex items-center justify-center bg-[#070f16] overflow-hidden pt-24 sm:pt-28">
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1600&auto=format&fit=crop"
            alt="Community member learning digital skills"
            className="w-full h-full object-cover object-center opacity-60 brightness-75"
            loading="eager"
            fetchpriority="high"
            decoding="async"
            width={1600}
            height={900}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/10 to-black/45" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-16 md:py-24">
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block mb-5 text-xs font-bold uppercase tracking-widest text-[#f15a24]">
              UK Programme · Launching June 2026
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-tight max-w-5xl mx-auto drop-shadow-xs"
          >
            Bridging the digital divide
            <span className="block text-[#f15a24]">closer to home.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-sm sm:text-base md:text-lg text-white/90 max-w-3xl mx-auto font-sans leading-relaxed font-normal drop-shadow-xs"
          >
            The same model that has reached over 4,800 students across Africa is now coming to communities in Luton and Tower Hamlets. Starting where the need is greatest.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <button onClick={onContactClick} className="px-8 py-3.5 bg-[#f15a24] hover:bg-[#e04f1c] active:scale-95 text-white font-bold text-sm sm:text-base rounded-xl shadow-xl shadow-orange-500/10 transition-all cursor-pointer">
              Partner With Us
            </button>
            <button onClick={onDonateClick} className="px-8 py-3.5 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold text-sm sm:text-base rounded-xl transition-all cursor-pointer backdrop-blur-sm">
              Donate Equipment
            </button>
          </motion.div>
        </div>
      </section>

      {/* STATS yellow/gold bg */}
      <section className="bg-orange-50 py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-4">
            {[
              { stat: '1.52M', label: 'UK adults completely offline in 2024' },
              { stat: '8.5M',  label: 'UK adults lacking essential digital skills' },
              { stat: '16%',   label: 'of food bank users have no internet access at all' },
            ].map((s) => (
              <div key={s.stat}>
                <span className="font-display text-4xl sm:text-5xl font-black text-[#1a1f2e] block mb-1">{s.stat}</span>
                <span className="text-[#1a1f2e]/80 text-sm font-semibold">{s.label}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-[#1a1f2e]/60 text-xs">Source: Digital Poverty Alliance, Good Things Foundation &amp; Trussell Trust, 2023–2024</p>
        </div>
      </section>

      {/* WHY THE UK asymmetric 2-col image + text layout */}
      <section className="bg-[#faf8f5] py-16 sm:py-20 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">

            {/* LEFT COLUMN large image top, text bottom */}
            <div className="flex flex-col gap-6">
              {/* Large image */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="rounded-2xl overflow-hidden h-72 sm:h-96 lg:h-[420px] shadow-lg"
              >
                <img
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop"
                  alt="Digital skills session in the community"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  decoding="async"
                  width={800}
                  height={450}
                />
              </motion.div>

              {/* Text block bottom-left */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="bg-white rounded-2xl p-7 sm:p-8 shadow-sm border border-slate-100 flex flex-col gap-4"
              >
                <span className="text-xs font-bold uppercase tracking-widest text-[#f15a24]">Why the UK, why now</span>
                <h2 className="font-display text-2xl sm:text-3xl font-black text-[#1a1f2e] tracking-tight leading-tight">
                  The library that gave us shelter is where this work begins.
                </h2>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Our founder James grew up between Zimbabwe and Luton. The first time he had a quiet place to think, to read, and to log on to a computer that wasn't shared between six siblings, it was a public library in Luton.
                </p>
          <button
                    onClick={onContactClick}
                    className="self-start px-6 py-3 bg-[#f15a24] hover:bg-[#e04f1c] active:scale-95 text-white font-bold text-sm rounded-xl shadow-md transition-all cursor-pointer flex items-center gap-2"
                  >
                    Read Our Story <ArrowRight size={13} />
                  </button>
              </motion.div>
            </div>

            {/* RIGHT COLUMN text top, large image bottom */}
            <div className="flex flex-col gap-6">
              {/* Text block top-right */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white rounded-2xl p-7 sm:p-8 shadow-sm border border-slate-100 flex flex-col gap-4"
              >
                <span className="text-xs font-bold uppercase tracking-widest text-[#f15a24]">The Digital Divide Is Here</span>
                <h3 className="font-display text-2xl sm:text-3xl font-black text-[#1a1f2e] tracking-tight leading-tight">
                  Five minutes from the high street.
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Today, that same town has thousands of residents who can't afford home internet, can't apply for jobs online, can't access NHS services digitally. The digital divide isn't only an African problem. It's here, right now.
                </p>
                <button
                  onClick={onDonateClick}
                  className="self-start px-6 py-3 bg-[#f15a24] hover:bg-[#e04f1c] active:scale-95 text-white font-bold text-sm rounded-xl shadow-md transition-all cursor-pointer flex items-center gap-2"
                >
                  Support Us <ArrowRight size={13} />
                </button>
              </motion.div>

              {/* Large image bottom */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="rounded-2xl overflow-hidden h-72 sm:h-96 lg:h-[420px] shadow-lg"
              >
                <img
                  src="https://images.unsplash.com/photo-1603354350317-6f7aaa5911c5?q=80&w=800&auto=format&fit=crop"
                  alt="Young people learning technology"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  decoding="async"
                  width={800}
                  height={450}
                />
              </motion.div>
            </div>

          </div>

          {/* Arrow infographic cards */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
            {[
              { num: '01', stat: '4,800+', label: 'Students supported globally',  color: '#1a1f2e', textColor: 'white' },
              { num: '02', stat: '10 yrs', label: 'Of programme delivery',         color: '#f5a623', textColor: 'white' },
              { num: '03', stat: '3',      label: 'Countries actively served',     color: '#1a1f2e', textColor: 'white' },
              { num: '04', stat: '2026',   label: 'UK programme launching',        color: '#26c6c6', textColor: 'white' },
            ].map((item, idx) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                className="relative flex items-stretch"
              >
                {/* Card body */}
                <div
                  className="relative flex-1 flex flex-col justify-between p-8 sm:p-10 shadow-lg min-h-[200px] sm:min-h-[220px]"
                  style={{ backgroundColor: idx % 2 === 1 ? '#ffffff' : '#ffffff', borderLeft: `5px solid ${item.color}` }}
                >
                  {/* Number badge top left, coloured */}
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center font-display font-black text-xl text-white shadow-md mb-4"
                    style={{ backgroundColor: item.color }}
                  >
                    {item.num}
                  </div>

                  <div>
                    {/* Stat */}
                    <span
                      className="block font-display text-3xl sm:text-4xl font-black mb-1"
                      style={{ color: item.color }}
                    >
                      {item.stat}
                    </span>
                    {/* Label */}
                    <span className="block text-slate-500 text-sm font-semibold leading-snug uppercase tracking-wide">
                      {item.label}
                    </span>
                  </div>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 rounded-b" style={{ backgroundColor: item.color }} />
                </div>

                {/* Arrow chevron pointing right hidden on last card and mobile */}
                {idx < 3 && (
                  <div className="hidden lg:flex items-center justify-center z-10 -mr-4">
                    <svg width="28" height="60" viewBox="0 0 28 60" fill="none" className="drop-shadow-sm">
                      <path d="M0 0 L24 30 L0 60 Z" fill="white" />
                      <path d="M4 0 L28 30 L4 60 Z" fill={item.color} opacity="0.15" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Quote below */}
          <div className="mt-6 bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
            <p className="text-[#1a1f2e] text-base sm:text-lg font-semibold leading-relaxed pl-6 relative">
              <span className="text-[#f15a24] text-5xl font-black leading-none absolute -top-2 left-0">"</span>
              We've spent ten years proving this model works in Africa. We're not starting from scratch. We're bringing it home.
            </p>
          </div>

        </div>
      </section>

      {/* APPROACH light grey bg, 2×2 white cards, orange circular icons */}
      <section className="bg-[#faf8f5] py-20 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="block text-xs font-bold uppercase tracking-widest text-[#f15a24] mb-3">Our UK Approach</span>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-[#1a1f2e] tracking-tight mb-4">Four things, done well.</h2>
            <p className="text-[#1a1f2e]/60 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              We're not building a platform. We're putting people, devices, connectivity, and skills into the same room every week, in places people already trust.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {approach.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="bg-white rounded-2xl p-7 shadow-sm flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#f15a24] flex items-center justify-center text-white shrink-0">
                    <Icon size={20} strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-[#1a1f2e] mb-2">{item.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                  <span className="text-[#f15a24] text-xs font-bold">{item.badge}</span>
                </motion.div>
              );
            })}
          </div>
          <p className="mt-10 text-center text-slate-500 text-xs sm:text-sm leading-relaxed max-w-3xl mx-auto pt-8 border-t border-slate-300">
            The LeNoir Foundation is a registered Digital Inclusion Hub within the National Digital Inclusion Network. This means every participant we support has access to free SIMs, free devices, and a national-quality skills curriculum, delivered locally.
          </p>
        </div>
      </section>

      {/* WHERE WE WORK bento grid */}
      <section className="bg-[#faf8f5] py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center mb-12">
            <span className="block text-xs font-bold uppercase tracking-widest text-[#f15a24] mb-3">Where We Work</span>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-[#112335] tracking-tight mb-4">Luton first. Tower Hamlets next.</h2>
            <p className="text-slate-500 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">Two communities, both within easy reach of our base and both with some of the highest digital exclusion rates in the country.</p>
          </div>

          {/* Bento grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 grid-rows-2 gap-4 h-auto lg:h-[680px]">

            {/* TOP-LEFT wide image card (Luton photo) */}
            <motion.div
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="lg:col-span-7 row-span-1 relative rounded-3xl overflow-hidden min-h-[320px] group"
            >
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop"
                alt="Luton community digital session"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                decoding="async"
                width={1200}
                height={675}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="inline-block px-3 py-1 rounded-full bg-[#f15a24] text-white text-[10px] font-black uppercase tracking-widest mb-3">Phase 1 Live · From June 2026</span>
                <h3 className="font-display text-3xl sm:text-4xl font-black text-white mb-2">Luton</h3>
                <p className="text-white/80 text-sm leading-relaxed max-w-lg">One of the most income-deprived local authority areas in the East of England. We're targeting wards where digital exclusion overlaps with cost-of-living pressure.</p>
              </div>
            </motion.div>

            {/* TOP-RIGHT tall text card (Luton stats) */}
            <motion.div
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-5 row-span-1 bg-[#1a1f2e] rounded-3xl p-8 flex flex-col justify-between min-h-[280px]"
            >
              <div>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  You can view more information about our Luton programme and all its details on our page.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-4 text-center border-t border-white/10 pt-6 mt-6">
                {[{ stat: '2', label: 'venues by Month 2' }, { stat: '150+', label: 'people by Month 6' }, { stat: '4×', label: 'weekly sessions' }].map((s) => (
                  <div key={s.label}>
                    <span className="font-display text-2xl font-black text-[#f15a24] block">{s.stat}</span>
                    <span className="text-slate-400 text-[11px] leading-snug">{s.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* BOTTOM-LEFT tall text card (Tower Hamlets info) */}
            <motion.div
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-5 row-span-1 bg-[#1a1f2e] rounded-3xl p-8 flex flex-col justify-between min-h-[280px]"
            >
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-slate-600 text-slate-300 text-[10px] font-black uppercase tracking-widest mb-4">Phase 2 Planned · Late 2026</span>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  You can book a trip to Tower Hamlets on the website or at our office. One borough, done properly, from our Shoreditch base.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-4 text-center border-t border-white/10 pt-6 mt-6">
                {[{ stat: '1', label: 'borough partnership' }, { stat: '£0', label: 'overhead' }, { stat: 'Q4', label: '2026 launch' }].map((s) => (
                  <div key={s.label}>
                    <span className="font-display text-2xl font-black text-[#f15a24] block">{s.stat}</span>
                    <span className="text-slate-400 text-[11px] leading-snug">{s.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* BOTTOM-RIGHT wide image card (Tower Hamlets photo) */}
            <motion.div
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-7 row-span-1 relative rounded-3xl overflow-hidden min-h-[320px] group"
            >
              <img
                src="https://images.unsplash.com/photo-1603354350317-6f7aaa5911c5?q=80&w=1200&auto=format&fit=crop"
                alt="Tower Hamlets community"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                decoding="async"
                width={1200}
                height={675}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="font-display text-3xl sm:text-4xl font-black text-white mb-2">London · Tower Hamlets</h3>
                <p className="text-white/80 text-sm leading-relaxed max-w-lg mb-5">With proven Luton impact data, we'll partner with a community anchor in Tower Hamlets. Fifteen minutes from our Shoreditch office.</p>
                <div className="flex flex-wrap gap-3">
                  <button onClick={onDonateClick} className="px-5 py-2 bg-[#f15a24] hover:bg-orange-600 text-white font-bold text-xs rounded-xl transition-all cursor-pointer">Donate</button>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* THE PLAN 3 circles with icons + connected text boxes */}
      <section className="bg-[#faf8f5] py-20 sm:py-28 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16 sm:mb-20">
            <span className="block text-xs font-bold uppercase tracking-widest text-[#f15a24] mb-3">The Plan</span>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-[#1a1f2e] tracking-tight mb-4">Six months. Three phases.</h2>
            <p className="text-slate-500 text-sm sm:text-base max-w-xl mx-auto">No vague timelines. Here's exactly what we're doing and when.</p>
          </div>

          {/* ── Desktop layout: circles row with floating text boxes ── */}
          <div className="hidden lg:block relative">

            {/* Top text boxes phases 1 and 3 float above */}
            <div className="grid grid-cols-3 gap-8 mb-0">
              {/* Phase 1 top box */}
              <motion.div
                initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 relative"
              >
                <span className="block text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: phases[0].dot }}>{phases[0].months}</span>
                <h3 className="font-display text-base font-bold text-[#1a1f2e] mb-3">{phases[0].title}</h3>
                <ul className="space-y-1.5">
                  {phases[0].items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <ChevronRight size={11} className="text-[#f15a24] shrink-0 mt-0.5" />
                      <span className="text-slate-500 text-xs leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                {/* Dotted line down to circle */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-px h-10 border-l-2 border-dashed border-slate-300" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[calc(100%+38px)] w-2.5 h-2.5 rounded-full bg-slate-300" />
              </motion.div>

              {/* Phase 2 empty top (box is below) */}
              <div className="relative">
                {/* Dotted line down from nothing visual spacing */}
              </div>

              {/* Phase 3 top box */}
              <motion.div
                initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 relative"
              >
                <span className="block text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: phases[2].dot }}>{phases[2].months}</span>
                <h3 className="font-display text-base font-bold text-[#1a1f2e] mb-3">{phases[2].title}</h3>
                <ul className="space-y-1.5">
                  {phases[2].items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <ChevronRight size={11} className="text-[#f15a24] shrink-0 mt-0.5" />
                      <span className="text-slate-500 text-xs leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                {/* Dotted line down to circle */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-px h-10 border-l-2 border-dashed border-slate-300" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[calc(100%+38px)] w-2.5 h-2.5 rounded-full bg-slate-300" />
              </motion.div>
            </div>

            {/* Circles row */}
            <div className="grid grid-cols-3 gap-8 items-center my-6">
              {phases.map((phase, idx) => {
                const icons = [Users, Monitor, BookOpen];
                const Icon = icons[idx];
                const colors = ['#7c4dbd', '#26c6c6', '#e91e8c'];
                return (
                  <motion.div
                    key={phase.title}
                    initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.15 }}
                    className="flex justify-center relative"
                  >
                    {/* Horizontal dotted connector lines */}
                    {idx < 2 && (
                      <div className="absolute top-1/2 left-full -translate-y-1/2 w-full border-t-2 border-dashed z-0" style={{ borderColor: `${colors[idx]}60` }} />
                    )}
                    {/* Circle */}
                    <div
                      className="w-36 h-36 rounded-full flex flex-col items-center justify-center shadow-xl z-10 relative border-4 border-white"
                      style={{ backgroundColor: colors[idx] }}
                    >
                      <Icon size={40} strokeWidth={1.5} className="text-white" />
                      <span className="text-white text-[10px] font-bold uppercase tracking-widest mt-2 opacity-80">
                        {idx === 0 ? 'Foundation' : idx === 1 ? 'Launch' : 'Scale'}
                      </span>
                    </div>
                    {/* Dot connector at top (for phase 1 & 3 boxes above) */}
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom text box phase 2 only */}
            <div className="grid grid-cols-3 gap-8">
              <div />
              <motion.div
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 relative"
              >
                {/* Dotted line up to circle */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full w-px h-10 border-l-2 border-dashed border-slate-300" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[calc(100%+38px)] w-2.5 h-2.5 rounded-full bg-slate-300" />
                <span className="block text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: phases[1].dot }}>{phases[1].months}</span>
                <h3 className="font-display text-base font-bold text-[#1a1f2e] mb-3">{phases[1].title}</h3>
                <ul className="space-y-1.5">
                  {phases[1].items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <ChevronRight size={11} className="text-[#f15a24] shrink-0 mt-0.5" />
                      <span className="text-slate-500 text-xs leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <div />
            </div>

          </div>

          {/* ── Mobile layout: simple stacked cards ── */}
          <div className="lg:hidden space-y-5">
            {phases.map((phase, idx) => {
              const icons = [Users, Monitor, BookOpen];
              const Icon = icons[idx];
              const colors = ['#7c4dbd', '#26c6c6', '#e91e8c'];
              return (
                <motion.div key={phase.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex gap-0">
                  <div className="w-2 shrink-0 rounded-l-2xl" style={{ backgroundColor: colors[idx] }} />
                  <div className="p-6 flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center text-white shrink-0" style={{ backgroundColor: colors[idx] }}>
                        <Icon size={18} strokeWidth={1.8} />
                      </div>
                      <div>
                        <span className="block text-[10px] font-bold uppercase tracking-widest" style={{ color: colors[idx] }}>{phase.months}</span>
                        <span className="font-display text-base font-black text-[#1a1f2e]">{phase.title}</span>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {phase.items.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <ChevronRight size={12} className="text-[#f15a24] shrink-0 mt-0.5" />
                          <span className="text-slate-500 text-xs leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* GET INVOLVED portfolio card grid with filter tabs */}
      <section className="bg-[#faf8f5] py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header row title left, description right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10 items-end">
            <div>
              <span className="block text-xs font-bold uppercase tracking-widest text-[#f15a24] mb-2">Get Involved</span>
              <h2 className="font-display text-3xl sm:text-4xl font-black text-[#1a1f2e] tracking-tight">Five ways to back this work.</h2>
            </div>
            <div className="lg:text-right">
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-md lg:ml-auto">Every drop-in we run depends on partners and people. Here's how to be one of them.</p>
            </div>
          </div>

          {/* 3-column card grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {getInvolved.map((item, idx) => {
              const Icon = item.icon;
              const photos = [
                'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=600&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=600&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1603354350317-6f7aaa5911c5?q=80&w=600&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?q=80&w=600&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop',
              ];
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.07 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-300 group flex flex-col"
                >
                  {/* Photo */}
                  <div className="relative h-48 overflow-hidden shrink-0">
                    <img
                      src={photos[idx]}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                      decoding="async"
                      width={600}
                      height={450}
                    />
                    {/* Category badge top-left */}
                    <span className={`absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${item.orange ? 'bg-[#f15a24] text-white' : 'bg-white text-[#1a1f2e]'}`}>
                      {item.num}
                    </span>
                    {/* Heart icon top-right */}
                    <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-[#f15a24] hover:text-white text-slate-400 transition-colors cursor-pointer shadow-sm">
                      <Heart size={14} />
                    </button>
                  </div>

                  {/* Card body */}
                  <div className="p-5 flex flex-col flex-1 gap-3">
                    {/* Icon + title */}
                    <div className="flex items-start gap-3">
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${item.orange ? 'bg-[#f15a24]' : 'bg-[#1a1f2e]'} text-white`}>
                        <Icon size={16} strokeWidth={2} />
                      </div>
                      <h3 className="font-display text-base font-bold text-[#1a1f2e] leading-snug pt-1">{item.title}</h3>
                    </div>

                    {/* Description */}
                    <p className="text-slate-500 text-xs leading-relaxed flex-1">{item.desc}</p>

                    {/* Two CTA buttons */}
                    <div className="flex gap-2 pt-2 border-t border-slate-100">
                      <button
                        onClick={onContactClick}
                        className="flex-1 py-2.5 border border-slate-200 hover:border-[#1a1f2e] text-slate-600 hover:text-[#1a1f2e] text-xs font-bold rounded-xl transition-all cursor-pointer"
                      >
                        Quick View
                      </button>
                      <button
                        onClick={idx === 1 ? onDonateClick : onContactClick}
                        className={`flex-1 py-2.5 text-xs font-bold rounded-xl transition-all cursor-pointer ${item.orange ? 'bg-[#f15a24] hover:bg-orange-600 text-white' : 'bg-[#1a1f2e] hover:bg-[#0f1420] text-white'}`}
                      >
                        {item.cta}
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* FOUNDER'S NOTE split: dark left panel + portrait right */}
      <section className="bg-[#faf8f5] py-0 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">

            {/* LEFT dark panel */}
            <motion.div
              initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="bg-[#1a1f2e] p-10 sm:p-14 lg:p-16 flex flex-col justify-between relative overflow-hidden"
            >
              {/* Subtle background texture */}
              <div className="absolute inset-0 opacity-5 pointer-events-none select-none"
                style={{ backgroundImage: 'radial-gradient(circle at 20% 80%, #f15a24 0%, transparent 50%), radial-gradient(circle at 80% 20%, #ffffff 0%, transparent 50%)' }} />

              <div className="relative z-10">
                {/* Eyebrow */}
                <span className="block text-xs font-bold uppercase tracking-widest text-[#f15a24] mb-8">
                  About the Founder
                </span>

                {/* Big heading */}
                <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.0] tracking-tight mb-6">
                  People first.<br />
                  <span className="text-[#f15a24]">Always.</span>
                </h2>

                {/* Quote */}
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 max-w-md">
                  "I had one computer to share between six siblings. The library is what gave me a quiet place to actually use it. We're building more of those places wherever they're needed."
                </p>

                {/* Two pill buttons */}
                <div className="flex flex-wrap gap-3">
                  <button onClick={onContactClick}
                    className="px-6 py-2.5 bg-[#f15a24] hover:bg-orange-600 text-white font-bold text-sm rounded-xl transition-all cursor-pointer flex items-center gap-2">
                    Read Our Story <ArrowRight size={13} />
                  </button>
                  <button onClick={onContactClick}
                    className="px-6 py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm rounded-xl transition-all cursor-pointer flex items-center gap-2">
                    Get In Touch <ArrowRight size={13} />
                  </button>
                </div>
              </div>

              {/* Bottom stat card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
                className="relative z-10 mt-12 bg-white/10 border border-white/15 backdrop-blur-sm rounded-2xl p-5 flex items-center gap-4 max-w-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-[#f15a24]/20 border border-[#f15a24]/30 flex items-center justify-center shrink-0">
                  <Users size={20} className="text-[#f15a24]" />
                </div>
                <div>
                  <span className="block text-white font-display font-black text-lg leading-none mb-0.5">4,800+ students</span>
                  <span className="block text-slate-400 text-xs font-semibold">supported across Africa</span>
                  <span className="block text-[#f15a24] text-[11px] font-bold mt-1">↑ Expanding to the UK in 2026</span>
                </div>
              </motion.div>

              {/* Name attribution */}
              <div className="relative z-10 mt-6">
                <p className="text-white font-bold text-sm">James Mawaka</p>
                <p className="text-slate-400 text-xs">Founder, The LeNoir Foundation</p>
              </div>

            </motion.div>

            {/* RIGHT portrait photo with floating stat cards */}
            <motion.div
              initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
              className="relative min-h-[400px] lg:min-h-0"
            >
              <img
                src="https://www.lenoirfoundation.com/tedx-falling.jpg"
                alt="James Mawaka, Founder of LeNoir Foundation"
                className="absolute inset-0 w-full h-full object-cover object-center"
                loading="lazy"
                decoding="async"
                width={900}
                height={1200}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

              {/* Floating stat card 1 bottom left */}
              <motion.div
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute bottom-10 left-6 bg-white rounded-2xl shadow-xl p-5 min-w-[160px]"
              >
                <span className="block font-display text-3xl font-black text-[#1a1f2e] mb-0.5">10 yrs</span>
                <span className="block text-slate-500 text-xs font-semibold">of programme delivery</span>
                <span className="block text-[#f15a24] text-[11px] font-bold mt-1.5">↑ Across 3 countries</span>
              </motion.div>

              {/* Floating stat card 2 bottom right */}
              <motion.div
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute bottom-10 right-6 bg-white rounded-2xl shadow-xl p-5 min-w-[160px]"
              >
                <span className="block font-display text-3xl font-black text-[#1a1f2e] mb-0.5">2026</span>
                <span className="block text-slate-500 text-xs font-semibold">UK programme launching</span>
                <span className="block text-[#f15a24] text-[11px] font-bold mt-1.5">↑ Luton, then Tower Hamlets</span>
              </motion.div>

            </motion.div>

          </div>
        </div>
      </section>

      {/* FINAL CTA yellow/gold bg */}
      <section className="bg-white py-20 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-[#1a1f2e] tracking-tight leading-tight mb-4">
              The next person to be left behind by the digital world lives within walking distance.
            </h2>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed mb-10 max-w-lg mx-auto">
              You can change that. Donate equipment, sponsor a session, open a venue, or simply share this page with someone who can.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button onClick={onDonateClick} className="px-7 py-3.5 bg-[#f15a24] hover:bg-[#e04f1c] text-white font-bold text-sm rounded-xl transition-all cursor-pointer">
                Make a Donation
              </button>
              <button onClick={onContactClick} className="px-7 py-3.5 bg-white hover:bg-gray-50 border border-gray-200 text-[#f15a24] font-bold text-sm rounded-xl transition-all cursor-pointer">
                Donate Equipment
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <ContactSection onNavigateToContact={onContactClick} />

    </div>
  );
}
