import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import {
  SiReact, SiFirebase, SiMongodb,
  SiGooglecloud, SiVercel, SiTailwindcss
} from 'react-icons/si';
import { FaJs, FaNodeJs } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { getLenis } from './SmoothScroll';


// ── Floating tech icon definitions (react-icons, no emojis)
const floatingIcons = [
  { icon: SiReact,       label: 'React',        angle: 0,   color: '#61dafb' },
  { icon: FaNodeJs,      label: 'Node.js',      angle: 51,  color: '#68a063' },
  { icon: SiFirebase,    label: 'Firebase',     angle: 102, color: '#ffca28' },
  { icon: SiMongodb,     label: 'MongoDB',      angle: 154, color: '#47a248' },
  { icon: SiGooglecloud, label: 'Google Cloud', angle: 205, color: '#4285f4' },
  { icon: FaJs,          label: 'JavaScript',   angle: 257, color: '#f7df1e' },
  { icon: SiVercel,      label: 'Vercel',       angle: 308, color: '#888888' },
];

const Hero = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const heroRef = useRef(null);

  const mouseXSpring = useSpring(x, { stiffness: 120, damping: 18 });
  const mouseYSpring = useSpring(y, { stiffness: 120, damping: 18 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);
  const bgX    = useTransform(mouseXSpring, [-0.5, 0.5], ["-2%", "2%"]);
  const bgY    = useTransform(mouseYSpring, [-0.5, 0.5], ["-2%", "2%"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top)  / rect.height - 0.5);
  };
  const handleMouseLeave = () => { x.set(0); y.set(0); };

  // ── Name characters split for staggered reveal
  const firstName = "Huzaif";
  const lastName  = "Sheikh.";

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative w-full min-h-[110vh] md:min-h-screen flex flex-col items-center
                 justify-start pt-28 pb-20 px-4 overflow-hidden"
      style={{ backgroundColor: 'transparent' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* ── PARALLAX GLOW ── */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-full max-w-[800px] aspect-square
                   blur-[160px] rounded-full pointer-events-none"
        style={{
          backgroundColor: 'var(--accent)',
          opacity: 0.07,
          x: bgX, y: bgY,
          translateX: '-50%', translateY: '-50%',
        }}
      />

      {/* ── ORBIT RINGS ── */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
        className="absolute top-1/2 left-1/2 pointer-events-none"
        style={{
          width: '70vw', height: '70vw', maxWidth: 600, maxHeight: 600,
          translateX: '-50%', translateY: '-50%',
          border: '1px solid rgba(99,102,241,0.08)', borderRadius: '50%',
        }}
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 44, repeat: Infinity, ease: 'linear' }}
        className="absolute top-1/2 left-1/2 pointer-events-none"
        style={{
          width: '90vw', height: '90vw', maxWidth: 800, maxHeight: 800,
          translateX: '-50%', translateY: '-50%',
          border: '1px solid rgba(45,212,191,0.05)', borderRadius: '50%',
        }}
      />

      {/* ── 3D CARD + FLOATING ICONS ── */}
      <div className="relative z-10 mb-10 flex items-center justify-center">
        
        {/* 
          ANIMATED BACKGROUND SHAPE (Card behind the image)
          Ye wo gradient shape hai jo image ke peeche ghoomta hai.
        */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'linear' }}
          className="absolute w-56 h-56 md:w-72 md:h-72 rounded-[3rem] z-0 opacity-90"
          style={{
            background: 'linear-gradient(135deg, #2563eb 0%, #06b6d4 100%)', // Blue -> Cyan
          }}
        />

        {/* Orbit icons */}
        {floatingIcons.map((item, i) => {
          const radius = 185;
          const rad = (item.angle * Math.PI) / 180;
          const IconComp = item.icon;
          return (
            <motion.div
              key={i}
              className="absolute hidden md:flex items-center justify-center"
              style={{
                left: `calc(50% + ${Math.cos(rad) * radius}px)`,
                top:  `calc(50% + ${Math.sin(rad) * radius}px)`,
                translateX: '-50%', translateY: '-50%',
              }}
              animate={{ y: [0, -10, 0], rotate: [0, 6, -6, 0] }}
              transition={{
                duration: 3 + i * 0.5, repeat: Infinity,
                ease: 'easeInOut', delay: i * 0.35,
              }}
            >
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center
                           backdrop-blur-xl shadow-lg border border-white/10
                           transition-all duration-300 hover:scale-125"
                style={{ backgroundColor: 'var(--card-bg)' }}
                title={item.label}
              >
                <IconComp size={20} style={{ color: item.color }} />
              </div>
            </motion.div>
          );
        })}

        {/* 3D tilt card */}
        <motion.div
          style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
          className="relative group cursor-pointer z-10"
        >
          {/* Conic spinning border (dark mode) */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
            className="absolute -inset-[3px] rounded-[3.2rem] opacity-0 dark:opacity-60 pointer-events-none"
            style={{
              background: 'conic-gradient(from 0deg, #6366f1, #818cf8, #2dd4bf, #6366f1)',
            }}
          />

          {/* Pulsing aura */}
          <motion.div
            animate={{ scale: [1, 1.08, 1], opacity: [0.08, 0.22, 0.08] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-0 rounded-[2.5rem] blur-lg hidden dark:block pointer-events-none"
            style={{ backgroundColor: 'var(--accent)' }}
          />

          {/* Image container */}
          <div
            style={{
              transform: 'translateZ(80px)',
              backgroundColor: 'var(--card-bg)',
              borderColor: 'var(--card-border)',
            }}
            className="relative w-56 h-56 md:w-72 md:h-72 rounded-[3rem] overflow-hidden
                       border shadow-2xl transition-all duration-500
                       group-hover:shadow-indigo-500/20 z-10"
          >
            <img
              src="https://res.cloudinary.com/qpxxnswd/image/upload/v1786433302/techugrow/nyhu86z23ho6skxvz1rd.jpg"
              alt="Huzaif Sheikh"
              className="w-full h-full object-cover transition-transform duration-700
                         group-hover:scale-110 grayscale-[0.1] group-hover:grayscale-0"
            />
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(to top, var(--card-bg), transparent)',
                opacity: 0.4,
              }}
            />
            {/* Scan line shimmer */}
            <motion.div
              className="absolute inset-x-0 h-[2px]"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.8), transparent)',
                opacity: 0.7,
              }}
              animate={{ top: ['0%', '100%'] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
            />
          </div>
        </motion.div>
      </div>

      {/* ── TYPOGRAPHIC CONTENT ── */}
      <div className="text-center z-20 px-4 mb-14 w-full">

        {/* BIG NAME — Staggered Letter Reveal Animation */}
        <h1 className="font-black tracking-tighter uppercase leading-none py-2 text-5xl sm:text-7xl md:text-[8.5rem] lg:text-[10rem] flex flex-wrap items-center justify-center gap-x-4 md:gap-x-8 gap-y-0 md:gap-y-2">
          {/* First Name: HUZAIF */}
          <span className="inline-flex overflow-hidden py-1 sm:py-2 md:py-3 px-4 -mx-4">
            {"HUZAIF".split("").map((ch, i) => (
              <motion.span
                key={`fn-${i}`}
                initial={{ y: "110%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.04 * i, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={`inline-block italic text-slate-900 dark:text-slate-50 ${
                  i === 5 ? "pr-3" : "pr-[0.08em] -mr-[0.08em]"
                }`}
              >
                {ch}
              </motion.span>
            ))}
          </span>

          {/* Last Name: SHEIKH. */}
          <span className="inline-flex overflow-hidden py-1 sm:py-2 md:py-3 px-4 -mx-4">
            {"SHEIKH.".split("").map((ch, i) => (
              <motion.span
                key={`ln-${i}`}
                initial={{ y: "110%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.04 * (6 + i), duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={`inline-block italic bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-400 ${
                  i === 6 ? "pr-3" : "pr-[0.08em] -mr-[0.08em]"
                }`}
                style={{ fontStyle: ch === "." ? "normal" : "italic" }}
              >
                {ch}
              </motion.span>
            ))}
          </span>
        </h1>

        {/* Subtitle badge */}
        <motion.div
          className="flex flex-col items-center gap-6 mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
        >
          <motion.span
            className="px-10 py-3 rounded-full font-mono text-[10px] md:text-xs uppercase
                       tracking-[0.5em] shadow-xl backdrop-blur-xl"
            style={{
              backgroundColor: 'var(--card-bg)',
              border: '1px solid var(--card-border)',
              color: 'var(--text-primary)',
            }}
            whileHover={{
              boxShadow: '0 0 30px rgba(99,102,241,0.3)',
              borderColor: 'rgba(99,102,241,0.4)',
              scale: 1.03,
            }}
          >
            Full Stack Developer // System_v4
          </motion.span>

          {/* TypeAnimation live status */}
          <motion.div
            className="hidden md:flex items-center gap-2 justify-center rounded-2xl
                       px-6 py-3 backdrop-blur-xl border"
            style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-border)' }}
            whileHover={{ borderColor: 'rgba(99,102,241,0.35)' }}
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_8px_#22c55e]" />
            <TypeAnimation
              sequence={[
                'Building immersive web experiences',   2200,
                'React • Node.js • MongoDB • Firebase', 2200,
                'Available for freelance projects 🚀',  2200,
                'Full Stack Developer from Bihar, India',2200,
              ]}
              wrapper="span"
              className="type-text"
              repeat={Infinity}
            />
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-xl md:text-2xl font-light max-w-2xl italic leading-relaxed"
            style={{ color: 'var(--text-secondary)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
          >
            Crafting immersive digital experiences with{' '}
            <span style={{ color: 'var(--accent)', fontWeight: 800, textDecoration: 'underline', textUnderlineOffset: 8 }}>
              React
            </span>{' '}
            and{' '}
            <motion.span
              style={{ color: 'var(--accent)', fontWeight: 800 }}
              animate={{ opacity: [1, 0.65, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Motion Architecture
            </motion.span>
            .
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.6 }}
          >
            <Link
              to="/projects"
              className="px-8 py-3.5 rounded-xl font-bold text-sm uppercase tracking-widest
                         text-white flex items-center gap-2 relative overflow-hidden group bg-gradient-to-r from-blue-600 to-cyan-500 shadow-lg shadow-blue-500/25"
            >
              <span className="relative z-10">View Works</span>
              <motion.span className="relative z-10" animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>→</motion.span>
            </Link>

            <Link
              to="/contact"
              className="px-8 py-3.5 rounded-xl font-bold text-sm uppercase tracking-widest
                         flex items-center gap-2 relative overflow-hidden group backdrop-blur-xl border border-black/5 dark:border-white/10 bg-white dark:bg-[#111111] text-slate-900 dark:text-slate-50 hover:border-blue-500"
            >
              <span className="relative z-10">Get In Touch</span>
              <span className="relative z-10 text-base"><HiOutlineMail /></span>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* ── SCROLL INDICATOR ── */}
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
        className="mt-auto flex flex-col items-center gap-4 z-30"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <span
          className="text-[10px] font-mono uppercase tracking-[0.8em]"
          style={{ color: 'var(--text-secondary)', opacity: 0.6 }}
        >
          Initialize_Scroll
        </span>
        <div
          className="w-[1.5px] h-20"
          style={{ background: 'linear-gradient(to bottom, var(--accent), transparent)' }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;