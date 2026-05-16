import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const Hero = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section 
      id="hero" 
      className="relative w-full min-h-[110vh] md:min-h-screen flex flex-col items-center justify-start pt-32 pb-20 px-4 overflow-hidden transition-colors duration-700"
      style={{ backgroundColor: 'var(--surface)' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* 1. DYNAMIC BACKGROUND GLOW */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-200 aspect-square blur-[140px] rounded-full transition-all duration-1000 pointer-events-none" 
        style={{ backgroundColor: 'var(--accent)', opacity: 0.08 }} 
      />
      
      {/* 2. BACKGROUND GRID */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.08] dark:opacity-[0.12] transition-opacity duration-500" 
           style={{ 
             backgroundImage: `radial-gradient(var(--accent, #4f46e5) 1px, transparent 0px)`, 
             backgroundSize: '48px 48px' 
           }} 
      />

      {/* 3. THE 3D INTERACTIVE CARD */}
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative group cursor-pointer z-10 mb-12"
      >
        <div className="absolute inset-0 rounded-[2.5rem] scale-110 animate-pulse hidden dark:block" 
             style={{ border: '2px solid var(--accent)', opacity: 0.15 }} />

        <div 
          style={{ 
            transform: "translateZ(80px)", 
            backgroundColor: 'var(--card-bg)', 
            borderColor: 'var(--card-border)' 
          }}
          className="relative w-56 h-56 md:w-80 md:h-80 rounded-[3rem] overflow-hidden border shadow-2xl transition-all duration-500 group-hover:shadow-indigo-500/10"
        >
          <img
            src="https://iili.io/BPezpDl.jpg"
            alt="Shivam Saurabh"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[0.1] group-hover:grayscale-0"
          />
          <div className="absolute inset-0 transition-all duration-500" 
               style={{ background: 'linear-gradient(to top, var(--card-bg), transparent)', opacity: 0.4 }} />
        </div>
      </motion.div>

      {/* 4. TYPOGRAPHIC CONTENT */}
      <div className="text-center z-20 px-4 mb-20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-7xl md:text-[11rem] font-[1000] tracking-tighter uppercase italic leading-[0.8] transition-colors duration-500"
          style={{ color: 'var(--text-primary)' }}
        >
          Huzaif <br className="md:hidden" />
          <span className="not-italic" style={{ color: 'var(--accent)' }}>Sheikh.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col items-center gap-8 mt-14"
        >
          <span className="px-10 py-3 rounded-full font-mono text-[10px] md:text-xs uppercase tracking-[0.5em] shadow-xl backdrop-blur-xl transition-all duration-500" 
                style={{ 
                  backgroundColor: 'var(--card-bg)', 
                  border: '1px solid var(--card-border)', 
                  color: 'var(--text-primary)' 
                }}>
            Full Stack Developer // System_v4
          </span>
          
          <p className="text-xl md:text-2xl font-light max-w-2xl italic leading-relaxed transition-colors duration-500" 
             style={{ color: 'var(--text-secondary)' }}>
            Crafting immersive digital experiences with <span style={{ color: 'var(--accent)', fontWeight: 800, textDecoration: 'underline', textDecorationColor: 'var(--accent)', textUnderlineOffset: '8px' }}>React</span> and 
            <span style={{ color: 'var(--accent)', fontWeight: 800}}> Motion Architecture</span>.
          </p>
        </motion.div>
      </div>

      {/* 5. SCROLL INDICATOR */}
      <motion.div 
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        className="mt-auto flex flex-col items-center gap-4 transition-all duration-500 z-30"
      >
        <span className="text-[10px] font-mono uppercase tracking-[0.8em]" style={{ color: 'var(--text-secondary)', opacity: 0.6 }}>Initialize_Scroll</span>
        <div className="w-[1.5px] h-20" style={{ background: 'linear-gradient(to bottom, var(--accent), transparent)' }} />
      </motion.div>
    </section>
  );
};

export default Hero;