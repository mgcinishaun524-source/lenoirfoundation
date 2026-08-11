import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import {
  Monitor, BookOpen, Brain, Users, GraduationCap, ArrowRight,
  Star, Award, Heart, Globe, User
} from 'lucide-react';
import ContactSection from './ContactSection';

import brandBg from '../assets/images/optimized/community_outreach_1781532828060.webp';
import websiteBg from '../assets/images/optimized/typing_hand_visual_1781532845930.webp';
import grantBg from '../assets/images/optimized/digital_literacy_1781532795243.webp';
import emailBg from '../assets/images/optimized/coding_for_kids_1781532812034.webp';

// Team images removed

import course1Bg from '../assets/images/optimized/IMG_0393.webp';
import course2Bg from '../assets/images/optimized/IMG_0436.webp';
import course3Bg from '../assets/images/optimized/IMG_0398.webp';
import course4Bg from '../assets/images/optimized/IMG_0416.webp';

interface DigitalLiteracyPageProps {
  onDonateClick: () => void;
  onContactClick: () => void;
}

function CountUp({
  end,
  suffix = '',
  prefix = '',
  durationMs = 1500,
  className,
}: {
  end: number;
  suffix?: string;
  prefix?: string;
  durationMs?: number;
  className?: string;
}) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const t0 = performance.now();
            const step = (now: number) => {
              const progress = Math.min(1, (now - t0) / durationMs);
              const eased = 1 - Math.pow(1 - progress, 3);
              setValue(Math.round(end * eased));
              if (progress < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
          }
        });
      },
      { threshold: 0.3 },
    );
    io.observe(node);
    return () => io.disconnect();
  }, [end, durationMs]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value.toLocaleString()}
      {suffix}
    </span>
  );
}

const courses = [
  {
    id: 'computer-basics',
    number: '01',
    icon: Monitor,
    tag: 'BEGINNER · REMOTE WORK',
    title: 'Computer Basics & Remote Work Readiness',
    subtitle: 'Offer your skills to UK & US clients on Remote263.com.',
    description:
      `Gain the essential computer skills needed for today's remote jobs. Learn to master Microsoft 365 tools, efficiently manage files on both Windows and macOS, and develop the confidence to work professionally online. Perfect for beginners and aspiring virtual assistants.`,
    outcomes: [
      'Microsoft 365, including Word, Excel, Outlook, Teams',
      'File management on Windows & macOS',
      'Professional online communication',
      'Virtual assistant readiness',
    ],
    highlight: 'Land remote clients in the UK & US',
    image: course1Bg,
  },
  {
    id: 'digital-skills-asylum-seekers',
    number: '02',
    icon: Globe,
    tag: 'UK · EMPLOYMENT · COMMUNITY',
    title: 'Digital Skills for Asylum Seekers: Breaking Down Barriers to Employment',
    subtitle: 'Practical UK-focused programme for employment, public services, and community connection.',
    description:
      `A UK-based programme helping asylum seekers gain the digital skills needed for employment, public services, and community connection. One of the Foundation's newest programme streams and its first substantial UK-adult beneficiary-focused offering — extending the portfolio beyond its historical child (Kids Coding Club) and international (Uganda, Zimbabwe) focus.`,
    outcomes: [
      'Device basics: using a laptop or tablet, keyboard skills, file management',
      'Internet and email: creating an email account, sending and receiving messages, staying safe online',
      'Online public services: registering with a GP, accessing the Home Office portal, using gov.uk',
      'Job searching: creating a CV digitally, using job boards, attending online interviews',
      'Communication tools: video calls, messaging platforms, and staying connected with family',
    ],
    highlight: 'UK delivery — employment & public services readiness',
    note: 'Delivered in the UK only. Recognises that digital literacy is now a prerequisite for accessing public services, employment, and community life.',
    image: course2Bg,
  },
  {
    id: 'kids-coding',
    number: '03',
    icon: Star,
    tag: 'UK & ZIMBABWE · AGES 8 TO 16',
    title: 'Kids Coding Club',
    subtitle: 'Inspiring Young Minds Through Code.',
    description:
      'Our UK coding club has seen remarkable success, offering young enthusiasts a gateway into the digital world through an engaging approach to learning. Over six weeks, eighteen students discovered the transformative potential of coding. Our focus extends beyond technical skill development to nurturing confidence and analytical thinking, capabilities essential for thriving in the 21st century.',
    outcomes: [
      '18 students per six-week cohort',
      'Hands-on coding projects and game creation',
      'Confidence and analytical thinking',
      'Expanding to Zimbabwe in 2025',
    ],
    highlight: 'Now expanding to Zimbabwe',
    note: 'We\'re excited to expand our Kids Coding Club to Zimbabwe, where young participants, many using computers for the first time, will begin their coding journey by creating their very own computer games.',
    image: course3Bg,
  },
  {
    id: 'ai-for-everyone',
    number: '04',
    icon: Brain,
    tag: 'ALL LEVELS',
    title: 'AI For Everyone',
    subtitle: 'AI training designed for real-world application.',
    description:
      'At our academy, every student has access to AI training designed for real-world application. AI technology is no longer optional, it\'s essential for career advancement in today\'s competitive landscape. Our approach is refreshingly straightforward: we empower every student to harness artificial intelligence to enhance their professional journey and personal passions.',
    outcomes: [
      'Insights from leading industry professionals',
      'Core AI principles and tools',
      'Hands-on immersive projects',
      'Shareable professional certificate',
    ],
    highlight: 'Professional certificate included',
    note: 'For those with a deeper curiosity, we go further, guiding them through the fascinating process of creating AI solutions themselves.',
    image: course4Bg,
  },
];

const charityServices = [
  {
    number: '1',
    icon: Globe,
    title: 'Brand Development',
    description:
      'Transform your charity\'s presence with powerful branding that resonates. We collaborate closely with your organisation to create a distinctive brand identity that forges meaningful connections with supporters whilst authentically communicating your mission.',
    image: brandBg,
  },
  {
    number: '2',
    icon: Monitor,
    title: 'Website Design',
    description:
      'As your dedicated web designers and copywriters, we\'ll craft a bespoke website tailored to your needs. Your new digital presence will serve as a comprehensive information centre and seamless platform for online contributions.',
    image: websiteBg,
  },
  {
    number: '3',
    icon: BookOpen,
    title: 'Grant Applications',
    description:
      'We\'re dedicated to expanding your charity\'s financial resources through expert grant applications, handled entirely on your behalf. Our team will also refine your donation systems, creating straightforward pathways for supporters.',
    image: grantBg,
  },
  {
    number: '4',
    icon: Users,
    title: 'Email Marketing',
    description:
      'We\'ll keep your supporters engaged, informed, and inspired to contribute, fostering a loyal donor base for your charity. We\'re experienced in creating information newsletters, promotional emails, and more.',
    image: emailBg,
  },
];

type CourseFilter = 'all' | 'beginner' | 'educator' | 'kids' | 'advanced' | 'ai' | 'certificate';

const filterToCourses: Record<CourseFilter, string[]> = {
  all: ['computer-basics', 'digital-skills-asylum-seekers', 'kids-coding', 'ai-for-everyone'],
  beginner: ['computer-basics'],
  educator: [],
  kids: ['kids-coding'],
  advanced: ['ai-for-everyone'],
  ai: ['ai-for-everyone'],
  certificate: ['ai-for-everyone'],
};

const visibleCourses = (filter: CourseFilter, all: typeof courses) => {
  const ids = new Set(filterToCourses[filter] ?? filterToCourses.all);
  return all.filter((c) => ids.has(c.id));
};

export default function DigitalLiteracyPage({ onDonateClick, onContactClick }: DigitalLiteracyPageProps) {
  const [activeFilter, setActiveFilter] = React.useState<CourseFilter>('all');
  const shown = visibleCourses(activeFilter, courses);

  return (
    <div className="bg-[#faf8f5] font-sans">

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative min-h-[60vh] sm:min-h-[65vh] flex items-center justify-center bg-[#070f16] overflow-hidden pt-24 sm:pt-28 pb-16">
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop"
            alt="Digital literacy training session"
            className="w-full h-full object-cover object-center opacity-40 brightness-75"
            loading="eager"
            fetchpriority="high"
            decoding="async"
            width={1600}
            height={900}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#070f16]/50 via-[#070f16]/20 to-[#070f16]/70" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
              Empowering Zimbabwe's Future
              <span className="block text-[#f15a24] mt-1">One Skill at a Time</span>
            </h1>
            <p className="font-sans text-base sm:text-xl text-slate-300 font-normal max-w-3xl mx-auto leading-relaxed mb-10">
              Our mission is to deliver premium, accessible digital education to 1,000 learners by 2030, empowering unemployed young adults, youth, and educators with the skills to thrive in today's world.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={onDonateClick}
                className="px-7 py-3.5 bg-[#f15a24] hover:bg-orange-600 text-white font-sans text-sm font-bold rounded-xl shadow-lg transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Support Our Academy</span>
                <Heart size={16} className="fill-current" />
              </button>
              <button
                onClick={onContactClick}
                className="px-7 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-sans text-sm font-bold rounded-xl transition-all cursor-pointer backdrop-blur-sm"
              >
                Enrol Now
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Mission banner ────────────────────────────────────── */}
      <section className="bg-[#112335] py-12 sm:py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { end: 1000, suffix: '+', label: 'Learners by 2030', sub: 'Our academy target' },
              { end: 4, label: 'Course tracks', sub: 'Beginner to advanced' },
              { end: 3, label: 'Partner schools', sub: 'Harare government schools' },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-1">
                <span className="font-display text-4xl sm:text-5xl font-extrabold text-[#f15a24]">
                  <CountUp end={item.end} suffix={item.suffix} />
                </span>
                <span className="font-sans text-base font-bold text-white">{item.label}</span>
                <span className="font-sans text-xs text-slate-400">{item.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Courses — editorial magazine bento grid, cream palette ─── */}
      <section className="py-20 sm:py-28 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ───── Top row: Tab navigation (matches the ref pill tabs) ───── */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-10 sm:mb-14 justify-start sm:justify-end">
            {([
              { label: 'All Courses', key: 'all' as CourseFilter },
              { label: 'Beginner', key: 'beginner' as CourseFilter },
              { label: 'Educator', key: 'educator' as CourseFilter },
              { label: 'Kids', key: 'kids' as CourseFilter },
              { label: 'Advanced', key: 'advanced' as CourseFilter },
              { label: 'AI', key: 'ai' as CourseFilter },
              { label: 'Certificate', key: 'certificate' as CourseFilter },
            ]).map((t) => {
              const isActive = activeFilter === t.key;
              return (
                <button
                  key={t.label}
                  onClick={() => setActiveFilter(t.key)}
                  type="button"
                  className={`px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer border active:scale-[0.97] ${
                    isActive
                      ? 'bg-[#112335] text-white shadow-md hover:bg-[#0c1823] border-[#112335]'
                      : 'text-slate-600 hover:bg-white hover:text-[#112335] hover:shadow-sm bg-white/40 border-slate-200'
                  }`}
                >
                  {t.label}
                </button>
              );
            })}
          </div>

          {/* ───── BENTO GRID — asymmetrical magazine layout ───── */}
          <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-7 auto-rows-auto">

            {/* ╔══════════════════════════════════════════════╗
                ║  TILE 1 — Left hero text block (6 cols)       ║
                ║  "THE LATEST" / Chenietue-Milfey + Bismouly   ║
                ╚══════════════════════════════════════════════╝ */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="md:col-span-6 lg:col-span-5 xl:col-span-5 flex flex-col justify-center bg-transparent py-2 lg:pr-4"
            >
              <span className="inline-block mb-4 text-[#f15a24] text-sm sm:text-base font-black tracking-[0.2em] uppercase self-start">
                Short Courses
              </span>

              <h2 className="font-display text-[44px] sm:text-6xl lg:text-7xl xl:text-[84px] font-black leading-[0.95] tracking-tight text-[#112335] mb-5 sm:mb-6">
                Remote263
                <span className="block text-[#f15a24]">
                  Academy<sup className="align-super text-[#f15a24] text-[0.4em] ml-1 font-black">+</sup>
                </span>
                <span className="block">Courses</span>
              </h2>

              <p className="text-slate-500 font-sans text-sm sm:text-[15px] leading-relaxed max-w-md mb-7 sm:mb-9">
                Remote263 Academy was born from our desire to create a ripple effect of positivity, transforming lives one kind gesture at a time. Whether it's landing a job, launching a business, or building a freelance career, we equip our students with the tools to shape their futures.
              </p>

              <button
                onClick={onContactClick}
                className="self-start px-7 sm:px-8 py-3.5 sm:py-4 bg-[#f15a24] hover:bg-orange-600 text-white text-sm font-bold rounded-xl shadow-md transition-all cursor-pointer inline-flex items-center gap-2 shadow-orange-500/20"
              >
                Enrol Now
                <ArrowRight size={14} />
              </button>
            </motion.div>

            {shown.map((course, idx) => {
              const Icon = course.icon;
              const isTextCreamCard = course.id === 'kids-coding';
              const isWidePhoto = course.id === 'ai-for-everyone';
              const isFirstPhoto = idx === 0 && !isTextCreamCard && !isWidePhoto;

              const layoutCol = isTextCreamCard
                ? 'md:col-span-3 lg:col-span-5 xl:col-span-6'
                : isWidePhoto
                ? 'md:col-span-3 lg:col-span-7 xl:col-span-6'
                : isFirstPhoto
                ? 'md:col-span-3 lg:col-span-4 xl:col-span-4'
                : 'md:col-span-3 lg:col-span-3 xl:col-span-3';

              return (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.06 }}
                  className={`${layoutCol} relative group overflow-hidden rounded-[28px] shadow-lg ${
                    isTextCreamCard
                      ? 'bg-gradient-to-br from-[#fff5ec] via-[#faf1e6] to-[#f8e9d9] p-7 sm:p-9 lg:p-10 flex flex-col min-h-[340px] shadow-md'
                      : isWidePhoto
                      ? 'min-h-[340px]'
                      : 'aspect-[4/5] sm:aspect-[5/6]'
                  }`}
                >
                  {/* ───── TEXT+IMAGE CREAM CARD (Kids Coding) ───── */}
                  {isTextCreamCard ? (
                    <>
                      <div
                        className="absolute inset-0 opacity-20 pointer-events-none select-none"
                        style={{
                          backgroundImage: 'radial-gradient(#f15a24 1px, transparent 1px)',
                          backgroundSize: '22px 22px',
                        }}
                      />
                      <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 h-full flex-1">
                        <div className="md:w-1/2 text-left">
                          <div className="mb-3 flex items-center gap-2">
                            <span className="px-3 py-1.5 rounded-full bg-[#112335] text-white text-[10px] font-extrabold uppercase tracking-widest">
                              {course.tag.split(' · ')[0]}
                            </span>
                          </div>
                          <h3 className="font-display text-3xl sm:text-4xl xl:text-5xl font-black leading-[1] tracking-tight text-[#112335] mb-4">
                            <span className="block">Coding</span>
                            <span className="block">for Young</span>
                            <span className="block text-[#f15a24]">Minds.</span>
                          </h3>
                          <p className="text-[#112335]/65 font-sans text-[13px] sm:text-sm leading-relaxed mb-5 max-w-xs">
                            {course.subtitle} Inspiring confidence, creativity and analytical thinking for the 21st century.
                          </p>
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-[#112335]/90 flex items-center justify-center text-white shadow">
                              <Icon size={16} strokeWidth={1.8} />
                            </div>
                            <div>
                              <span className="block text-[11px] font-extrabold uppercase tracking-widest text-[#f15a24]">
                                Ages 8 to 16
                              </span>
                              <span className="block text-[10px] font-semibold text-[#112335]/60">
                                UK &amp; Zimbabwe
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="md:w-1/2 flex justify-center md:justify-end">
                          <div className="relative w-full max-w-[260px]">
                            <div className="absolute -bottom-3 -right-3 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#f15a24]/40 blur-2xl" />
                            <div className="absolute -top-4 -left-3 w-16 h-16 rounded-full bg-[#f15a24]/10 blur-xl" />
                            <img
                              src={course.image}
                              alt={course.title}
                              className="relative w-full aspect-square rounded-[22px] object-cover shadow-xl transition-transform duration-700 group-hover:scale-[1.03]"
                              loading="lazy"
                              decoding="async"
                              width={800}
                              height={800}
                            />
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* ───── PHOTO CARD BASE (Beginner / Educator / AI) ───── */}
                      <img
                        src={course.image}
                        alt={course.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[900ms] group-hover:scale-105"
                        loading="lazy"
                        decoding="async"
                        width={isWidePhoto ? 1600 : 900}
                        height={isWidePhoto ? 900 : 1125}
                      />
                      <div
                        className={`absolute inset-0 ${
                          isWidePhoto
                            ? 'bg-gradient-to-tr from-black/75 via-black/30 to-black/10'
                            : 'bg-gradient-to-b from-black/10 via-black/0 to-black/60'
                        }`}
                      />
                      {isWidePhoto ? (
                        <>
                          <div className="absolute top-5 left-5 flex flex-wrap gap-2 z-10">
                            <span className="px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-[10px] sm:text-[11px] font-extrabold uppercase tracking-widest text-[#112335]">
                              {course.tag.split(' · ')[0]}
                            </span>
                            <span className="px-3 py-1.5 rounded-full bg-[#f15a24] text-white text-[10px] font-extrabold uppercase tracking-widest">
                              + Certificate
                            </span>
                          </div>
                          <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 right-6 sm:right-8 text-left max-w-md z-10">
                            <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1] mb-3">
                              {course.title}
                            </h3>
                            <p className="text-white/85 text-sm sm:text-[15px] leading-relaxed mb-4 max-w-md line-clamp-2">
                              {course.description}
                            </p>
                            <div className="flex flex-wrap items-center gap-3">
                              <button
                                onClick={onContactClick}
                                type="button"
                                className="px-5 py-2.5 rounded-xl bg-[#f15a24] hover:bg-orange-600 text-white text-xs sm:text-sm font-bold transition-colors cursor-pointer inline-flex items-center gap-2 shadow-lg shadow-orange-500/20"
                              >
                                Learn More
                                <ArrowRight size={13} />
                              </button>
                              <span className="inline-flex items-center gap-1.5 text-white/85 text-xs sm:text-[13px] font-semibold">
                                <Award size={14} className="text-[#f15a24]" />
                                {course.highlight}
                              </span>
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="absolute top-4 left-4 z-10">
                            <span className="px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-[10px] sm:text-[11px] font-extrabold uppercase tracking-widest text-[#112335]">
                              {course.tag.split(' · ')[0]}
                            </span>
                          </div>
                          <div className="absolute bottom-5 left-5 right-5 text-left z-10">
                            <h3 className={`font-display ${isFirstPhoto ? 'text-xl sm:text-2xl' : 'text-lg sm:text-xl'} font-black text-white tracking-tight leading-tight mb-1.5`}>
                              {course.title}
                            </h3>
                            <p className={`text-white/80 ${isFirstPhoto ? 'text-xs sm:text-[13px]' : 'text-xs sm:text-[12px]'} font-medium mb-3 line-clamp-1`}>
                              {course.subtitle}
                            </p>
                            <span className="inline-block px-3 py-1 rounded-full bg-white/15 border border-white/30 text-white text-[11px] font-bold backdrop-blur-sm">
                              {course.highlight}
                            </span>
                          </div>
                        </>
                      )}
                    </>
                  )}
                </motion.div>
              );
            })}

          </div>

        </div>
      </section>

      {/* ── UK Kids Coding Club spotlight ─────────────────────── */}
      <section className="py-20 sm:py-28 bg-[#112335] overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="block text-xs font-bold uppercase tracking-widest text-[#f15a24] mb-4">
                UK Programme
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                Kids Coding Club<br />
                <span className="text-[#f15a24]">Inspiring Young Minds</span>
              </h2>
              <p className="mt-6 text-slate-300 text-sm sm:text-base leading-relaxed">
                Our UK coding club has seen remarkable success, offering young enthusiasts a gateway into the digital world through an engaging approach to learning. Over a six-week period, eighteen students discovered the transformative potential of coding.
              </p>
              <p className="mt-4 text-slate-400 text-sm leading-relaxed">
                Our focus extends beyond technical skill development to nurturing confidence and analytical thinking, capabilities essential for thriving in the 21st century. Through hands-on projects, participants learn to code whilst developing creative approaches to real-world challenges.
              </p>
              <p className="mt-4 text-slate-400 text-sm leading-relaxed">
                We're now excited to expand our Kids Coding Club to Zimbabwe, where young participants, many using computers for the first time, will begin their coding journey by creating their very own computer games.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  onClick={onContactClick}
                  className="px-6 py-3 bg-[#f15a24] hover:bg-orange-600 text-white font-bold text-sm rounded-xl transition-all cursor-pointer flex items-center gap-2 shadow-lg"
                >
                  Enrol Your Child
                  <ArrowRight size={14} />
                </button>
                <button
                  onClick={onDonateClick}
                  className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm rounded-xl transition-all cursor-pointer backdrop-blur-sm"
                >
                  Sponsor a Place
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { end: 18, label: 'Students per cohort', sub: 'Six-week programme' },
                { end: 6, label: 'Week programme', sub: 'Intensive learning' },
                { end: 100, suffix: '%', label: 'Hands-on projects', sub: 'No passive learning' },
                { end: 2025, label: 'Zimbabwe expansion', sub: 'Coming soon' },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/8 border border-white/10 rounded-2xl p-5 flex flex-col gap-1">
                  <span className="font-display text-3xl font-extrabold text-[#f15a24]">
                    <CountUp end={stat.end} suffix={stat.suffix} />
                  </span>
                  <span className="text-white font-bold text-sm">{stat.label}</span>
                  <span className="text-slate-400 text-xs">{stat.sub}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Charity services — left copy block + 2×2 image cards ──── */}
      <section className="py-20 sm:py-28 bg-[#faf8f5] border-t border-slate-100">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-10">

          {/* Centred header */}
          <div className="text-center mb-12">
            <span className="block text-xs sm:text-sm font-sans font-extrabold uppercase tracking-widest text-[#f15a24] mb-3">
              For Charities &amp; Non-Profits
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-[#112335] tracking-tight leading-[1.05] mb-4">
              What We Offer Non-Profit Organisations
            </h2>
            <p className="text-slate-500 font-sans text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              Our collective brings together a richly diverse team of skilled professionals committed to increasing the visibility of non-profit organisations and making meaningful contributions towards a more positive world.
            </p>
          </div>

          {/* Full-width 4-column card row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {charityServices.map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.08 }}
                  className="relative group overflow-hidden rounded-3xl shadow-lg border border-slate-100 min-h-[480px] sm:min-h-[520px]"
                >
                  {/* Background image */}
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                    width={900}
                    height={1200}
                  />

                  {/* Dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a141e]/95 via-[#0a141e]/60 to-[#0a141e]/20" />

                  {/* Content — bottom anchored */}
                  <div className="relative z-10 h-full flex flex-col justify-end p-5 sm:p-6 text-left">
                    <div className="w-10 h-10 rounded-md bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center text-white shrink-0 mb-4">
                      <Icon size={18} strokeWidth={1.8} />
                    </div>
                    <h3 className="font-display text-lg sm:text-xl font-black text-white leading-tight tracking-tight mb-2">
                      {service.title}
                    </h3>
                    <p className="text-slate-200/85 text-xs leading-relaxed mb-4 line-clamp-3">
                      {service.description}
                    </p>
                    <button
                      onClick={onContactClick}
                      className="self-start px-4 py-2 border border-white/70 text-white text-xs font-bold hover:bg-[#f15a24] hover:border-[#f15a24] transition-all cursor-pointer rounded-xl"
                    >
                      View Detail
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Team section removed per request */}

      {/* ── CTA / Contact ─────────────────────────────────────── */}
      <ContactSection onNavigateToContact={onContactClick} />

    </div>
  );
}
