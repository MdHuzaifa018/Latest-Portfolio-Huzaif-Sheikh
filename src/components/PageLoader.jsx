import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PageLoader = ({ onComplete }) => {
  const [counter, setCounter] = useState(0);
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 25);
          return 100;
        }
        // Increment by 2 for a snappier feel
        return prev + 3; 
      });

      if (Math.random() > 0.95) {
        setGlitch(true);
        setTimeout(() => setGlitch(false), 30);
      }
    }, 25); 

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      exit={{ 
        opacity: 0, 
        scale: 1.1,
        filter: "blur(20px)",
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
      }}
      className="fixed inset-0 z-[10000] flex items-center justify-center overflow-hidden font-mono bg-[#050505] text-white"
      style={{ perspective: '1000px' }}
    >
      {/* 1. THE ARCHITECTURAL GRID - Scaled for density */}
      <div className="absolute inset-0 opacity-20" 
           style={{ 
             backgroundImage: `radial-gradient(circle, #4f46e5 0.5px, transparent 0.5px)`, 
             backgroundSize: 'clamp(20px, 5vw, 40px) clamp(20px, 5vw, 40px)' 
           }} 
      />

      {/* 2. ROTATING SCANNERS - Responsive sizes using w/h-[vw] */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute w-[80vw] h-[80vw] max-w-[500px] max-h-[500px] border border-indigo-500/10 rounded-full"
      />
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute w-[120vw] h-[120vw] max-w-[700px] max-h-[700px] border border-indigo-500/5 rounded-full"
      />

      {/* 3. CENTRAL BRAIN CORE */}
      <div className="relative flex items-center justify-center scale-75 md:scale-100 lg:scale-110">
        {/* Pulsing Aura */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute w-48 h-48 md:w-64 md:h-64 bg-indigo-600 rounded-full blur-[60px] md:blur-[80px]"
        />

        {/* The Big Number - Fluid Typography */}
        <motion.div 
          className={`relative z-10 text-[20vw] md:text-[12vw] font-black italic tracking-tighter leading-none flex items-baseline transition-all ${glitch ? 'skew-x-12 scale-105 text-indigo-400' : ''}`}
        >
          {counter.toString().padStart(2, '0')}
          <span className="text-lg md:text-3xl lg:text-4xl not-italic ml-1 md:ml-2 text-indigo-500 font-bold">%</span>
        </motion.div>

        {/* Spinning Rings - Responsive SVG */}
        <svg className="absolute w-[260px] h-[260px] md:w-[320px] md:h-[320px] z-0 overflow-visible">
          <motion.circle
            cx="50%" cy="50%" r="45%"
            stroke="#4f46e5" strokeWidth="1" fill="transparent"
            strokeDasharray="5 15"
            animate={{ rotate: 360 }}
            style={{ originX: "50%", originY: "50%" }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
          <motion.circle
            cx="50%" cy="50%" r="38%"
            stroke="#6366f1" strokeWidth="2" fill="transparent"
            strokeDasharray="60 120"
            animate={{ rotate: -360 }}
            style={{ originX: "50%", originY: "50%" }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          />
        </svg>
      </div>

      {/* 4. DYNAMIC DATA HUD - Responsive positioning */}
      <div className="absolute top-6 left-6 md:top-10 md:left-10 text-[8px] md:text-[10px] text-zinc-500 space-y-1 md:space-y-2 uppercase tracking-tighter opacity-60 md:opacity-100">
        <p className="font-bold text-indigo-500/50">// IDENTITY_CHECK</p>
        <p>User: Shivam_S</p>
        <p>Core: System_v4</p>
      </div>

      <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 text-[8px] md:text-[10px] text-indigo-500 space-y-1 text-right uppercase tracking-widest opacity-60 md:opacity-100">
        <p>Memory_Inject: {Math.random().toString(16).slice(2, 6)}</p>
        <p className="flex items-center justify-end gap-2">
            Status: <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"/> Active
        </p>
      </div>

      {/* 5. THE SCANLINE EFFECT */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent h-4 w-full animate-scanline" />

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(1000%); }
        }
        .animate-scanline {
          animation: scanline 3s linear infinite;
        }
      `}} />
    </motion.div>
  );
};

export default PageLoader;