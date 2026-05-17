import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// ============================================================
// ANIMATED BACKGROUND — Aurora + Grid + Particles + Spotlight
// ============================================================
const AnimatedBackground = React.memo(() => {
  const spotlightRef = useRef(null);

  // Mouse-tracking spotlight using performant transform instead of repainting gradients
  useEffect(() => {
    // Disable spotlight tracking entirely on touch devices for major CPU/battery savings
    const isTouch = typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    let animationFrameId;
    const handleMouseMove = (e) => {
      if (spotlightRef.current) {
        // Use requestAnimationFrame to throttle updates
        cancelAnimationFrame(animationFrameId);
        animationFrameId = requestAnimationFrame(() => {
          // Center the spotlight (which is 800x800) on the cursor
          const x = e.clientX - 400;
          const y = e.clientY - 400;
          spotlightRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        });
      }
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">

      {/* ── 1. MOUSE SPOTLIGHT (GPU Accelerated) ── */}
      <div
        ref={spotlightRef}
        className="absolute top-0 left-0 w-[800px] h-[800px] rounded-full pointer-events-none spotlight-bg"
        style={{ 
          willChange: 'transform',
          transform: 'translate3d(-1000px, -1000px, 0)', // start offscreen
        }}
      />

      {/* ── 2. PREMIUM CSS GRID ── */}
      <div className="absolute inset-0" style={{ overflow: 'hidden' }}>
        <div className="absolute inset-0 w-full h-full bg-grid-pattern " />

        {/* Mask to fade out the grid at top and bottom */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, var(--background) 0%, transparent 15%, transparent 85%, var(--background) 100%)'
          }}
        />
      </div>

      {/* Animated scanline over the grid for premium feel - y transform is layout-free and GPU composited */}
      <motion.div
        className="absolute left-0 right-0 h-[1px] pointer-events-none scanline-bg top-0"
        style={{ willChange: 'transform' }}
        animate={{ y: ['0vh', '100vh'] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      />

      {/* ── 3. GRADIENT AURORA BLOBS ── */}
      {/* Added will-change and reduced blur slightly to prevent GPU composite thrashing */}
      <motion.div
        animate={{ x: [0, 30, -20, 0], y: [0, -40, 20, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[-15%] left-[-8%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full blur-[30px] md:blur-[40px] aurora-blob-1 "
        style={{ willChange: 'transform' }}
      />
      <motion.div
        animate={{ x: [0, -40, 30, 0], y: [0, 30, -20, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
        className="absolute bottom-[-8%] right-[-8%] w-[45vw] h-[45vw] max-w-[550px] max-h-[550px] rounded-full blur-[30px] md:blur-[40px] aurora-blob-2 "
        style={{ willChange: 'transform' }}
      />

      {/* ── 4. FLOATING PARTICLES (Reduced count) ── */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={`p-${i}`}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 2 + 1,
            height: Math.random() * 2 + 1,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            willChange: 'transform, opacity',
            backgroundColor:
              i % 3 === 0
                ? 'rgba(99,102,241,0.6)'
                : i % 3 === 1
                ? 'rgba(45,212,191,0.5)'
                : 'rgba(249,115,22,0.4)',
          }}
          animate={{
            y: [0, -(Math.random() * 50 + 20), 0],
            opacity: [0, 0.7, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 8,
            repeat: Infinity,
            delay: Math.random() * 10,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* ── 5. GRADIENT BACKGROUND OVERLAY ── */}
      <div
        className="absolute inset-0 pointer-events-none bg-overlay-grad "
        style={{ zIndex: -1 }}
      />
    </div>
  );
});

export default AnimatedBackground;
