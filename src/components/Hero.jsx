import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import { HiOutlineMail } from 'react-icons/hi';
import {
  SiReact, SiFirebase, SiMongodb,
  SiGooglecloud, SiVercel, SiTailwindcss
} from 'react-icons/si';
import { FaJs, FaNodeJs } from 'react-icons/fa';

const MagneticButton = ({ children, className, style, onClick, to }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    x.set(middleX * 0.3);
    y.set(middleY * 0.3);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const Comp = to ? Link : motion.button;

  return (
    <Comp
      to={to}
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      className={`relative flex items-center justify-center ${className}`}
      style={{ ...style, x: springX, y: springY }}
      onClick={onClick}
    >
      {children}
    </Comp>
  );
};

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

  const mouseXSpring = useSpring(x, { stiffness: 100, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 100, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["14deg", "-14deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-14deg", "14deg"]);
  const bgX    = useTransform(mouseXSpring, [-0.5, 0.5], ["-3%", "3%"]);
  const bgY    = useTransform(mouseYSpring, [-0.5, 0.5], ["-3%", "3%"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top)  / rect.height - 0.5);
  };
  const handleMouseLeave = () => { x.set(0); y.set(0); };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative w-full min-h-[110vh] md:min-h-screen flex flex-col items-center justify-start pt-28 pb-20 px-4 overflow-hidden"
      style={{ backgroundColor: 'transparent' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* ── NOISE OVERLAY & PARALLAX GLOW ── */}
      <div className="noise-overlay" />
      
      <motion.div
        className="absolute top-1/2 left-1/2 w-full max-w-[900px] aspect-square blur-[180px] rounded-full pointer-events-none"
        style={{
          backgroundColor: 'var(--accent)',
          opacity: 0.12,
          x: bgX, y: bgY,
          translateX: '-50%', translateY: '-50%',
        }}
      />

      {/* ── 3D CARD + GEOMETRIC SVGS ── */}
      <div className="relative z-10 mb-10 flex items-center justify-center">
        
        {/* Animated Background Shape */}
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.05, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          className="absolute w-56 h-56 md:w-72 md:h-72 rounded-[3rem] z-0 opacity-40 blur-3xl"
          style={{ background: 'var(--accent)' }}
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

        {/* Premium 3D tilt card */}
        <motion.div
          style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
          className="relative group cursor-pointer z-10"
        >
          {/* Card Border Glow */}
          <div
            className="absolute -inset-[1px] rounded-[3.2rem] pointer-events-none opacity-50"
            style={{ backgroundColor: 'var(--card-border)' }}
          />

          {/* Image container */}
          <div
            style={{
              transform: 'translateZ(60px)',
              backgroundColor: 'var(--card-bg)',
            }}
            className="relative w-56 h-56 md:w-72 md:h-72 rounded-[3rem] overflow-hidden
                       shadow-2xl transition-all duration-700
                       group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-10"
          >
            <img
              src="https://res.cloudinary.com/qpxxnswd/image/upload/v1786433302/techugrow/nyhu86z23ho6skxvz1rd.jpg"
              alt="Huzaif Sheikh"
              className="w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]
                         group-hover:scale-110 grayscale-[0.2] group-hover:grayscale-0"
            />
            {/* Cinematic dark vignette */}
            <div
              className="absolute inset-0"
              style={{
                background: 'radial-gradient(circle at center, transparent 30%, rgba(0,0,0,0.6) 100%)',
              }}
            />
          </div>
        </motion.div>
      </div>

      {/* ── TYPOGRAPHIC CONTENT ── */}
      <div className="text-center z-20 px-4 mb-14 w-full flex flex-col items-center">

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

          {/* Last Name: SHEIKH. — single accent color, no rainbow */}
          <span className="inline-flex overflow-hidden py-1 sm:py-2 md:py-3 px-4 -mx-4">
            {"SHEIKH.".split("").map((ch, i) => (
              <motion.span
                key={`ln-${i}`}
                initial={{ y: "110%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.04 * (6 + i), duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={`inline-block ${
                  i === 6 ? "pr-3" : "pr-[0.08em] -mr-[0.08em]"
                }`}
                style={{ color: 'var(--accent)', fontStyle: ch === "." ? "normal" : "italic" }}
              >
                {ch}
              </motion.span>
            ))}
          </span>
        </h1>

        {/* Subtitle badge & Info */}
        <motion.div
          className="flex flex-col items-center gap-6 mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {/* Status Capsule */}
          <div
            className="flex items-center gap-3 rounded-full px-6 py-3 backdrop-blur-md border border-black/5 dark:border-white/10"
            style={{ backgroundColor: 'var(--surface)' }}
          >
            <div className="flex items-center justify-center w-4 h-4 rounded-full bg-green-500/20">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_#22c55e]" />
            </div>
            <TypeAnimation
              sequence={[
                'Engineering digital architectures', 2200,
                'React • Node.js • Cloud', 2200,
                'System_v4 Operational 🚀', 2200,
              ]}
              wrapper="span"
              className="text-[11px] md:text-xs font-mono font-bold uppercase tracking-[0.2em] text-slate-600 dark:text-slate-400"
              repeat={Infinity}
            />
          </div>

          <p className="text-lg md:text-2xl font-light max-w-2xl italic leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Building high-performance interfaces with{' '}
            <span style={{ color: 'var(--text-primary)', fontWeight: 800 }}>
              React
            </span>{' '}
            and next-generation{' '}
            <span style={{ color: 'var(--accent)', fontWeight: 800 }}>
              Motion Architecture
            </span>.
          </p>

          {/* MAGNETIC CTA BUTTONS */}
          <div className="flex flex-wrap gap-6 justify-center mt-4">
            <MagneticButton
              to="/projects"
              className="px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-[0.2em] overflow-hidden group"
              style={{ backgroundColor: 'var(--accent)', color: 'var(--accent-fg)' }}
            >
              <span className="relative z-10 flex items-center gap-3">
                Explore Works <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] rounded-2xl" />
            </MagneticButton>

            <MagneticButton
              to="/contact"
              className="px-8 py-4 rounded-2xl font-bold text-sm uppercase tracking-[0.2em] border group overflow-hidden"
              style={{
                backgroundColor: 'var(--surface)',
                borderColor: 'var(--card-border)',
                color: 'var(--text-primary)',
              }}
            >
              <span className="relative z-10 flex items-center gap-3 transition-colors group-hover:text-black">
                Get In Touch <HiOutlineMail className="text-xl" />
              </span>
              <div className="absolute inset-0 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] rounded-2xl accent-bg" />
            </MagneticButton>
          </div>
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
          className="text-[10px] font-mono font-bold uppercase tracking-[0.8em]"
          style={{ color: 'var(--text-secondary)' }}
        >
          Initialize
        </span>
        <div
          className="w-[2px] h-24 rounded-full"
          style={{ background: 'linear-gradient(to bottom, var(--accent), transparent)' }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;