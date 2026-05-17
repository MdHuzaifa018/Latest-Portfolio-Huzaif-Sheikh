import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

// =====================================================
// CUSTOM CURSOR — keeps default cursor visible
// Just adds a glowing ring & dot follower effect
// =====================================================
const CustomCursor = () => {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);
  const isHovering = useRef(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Ring follows with slight lag
  const ringX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const ringY = useSpring(mouseY, { stiffness: 150, damping: 20 });

  // Dot follows tightly
  const dotX = useSpring(mouseX, { stiffness: 800, damping: 50 });
  const dotY = useSpring(mouseY, { stiffness: 800, damping: 50 });



  useEffect(() => {
    let rafId;
    const handleMouseMove = (e) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      });
    };

    const handleHoverStart = (e) => {
      const el = e.target.closest('a, button, [data-cursor]');
      if (el) {
        isHovering.current = true;
        if (ringRef.current) {
          ringRef.current.style.width = '52px';
          ringRef.current.style.height = '52px';
          ringRef.current.style.borderColor = 'rgba(99,102,241,0.9)';
          ringRef.current.style.backgroundColor = 'rgba(99,102,241,0.1)';
          ringRef.current.style.boxShadow = '0 0 20px rgba(99,102,241,0.5), 0 0 40px rgba(99,102,241,0.2)';
        }
      }
    };

    const handleHoverEnd = () => {
      isHovering.current = false;
      if (ringRef.current) {
        ringRef.current.style.width = '36px';
        ringRef.current.style.height = '36px';
        ringRef.current.style.borderColor = 'rgba(99,102,241,0.55)';
        ringRef.current.style.backgroundColor = 'transparent';
        ringRef.current.style.boxShadow = '0 0 10px rgba(99,102,241,0.25)';
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    
    // Use event delegation on a single container if possible, or throttle
    // Here we use throttling/passive for performance
    document.addEventListener('mouseover', handleHoverStart, { passive: true });
    document.addEventListener('mouseout', handleHoverEnd, { passive: true });
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleHoverStart);
      document.removeEventListener('mouseout', handleHoverEnd);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    // Only render on desktop (pointer: fine) — don't touch mobile cursors
    <div className="hidden md:block">
      {/* Outer ring — lagging glow follower */}
      <motion.div
        ref={ringRef}
        className="fixed pointer-events-none z-[9995] rounded-full border transition-all duration-200"
        style={{
          x: ringX,
          y: ringY,
          width: 36,
          height: 36,
          translateX: '-50%',
          translateY: '-50%',
          borderColor: 'rgba(99,102,241,0.55)',
          boxShadow: '0 0 10px rgba(99,102,241,0.25)',
        }}
      />

      {/* Inner dot — tight follower */}
      <motion.div
        ref={cursorRef}
        className="fixed pointer-events-none z-[9996] rounded-full"
        style={{
          x: dotX,
          y: dotY,
          width: 6,
          height: 6,
          translateX: '-50%',
          translateY: '-50%',
          backgroundColor: '#818cf8',
          boxShadow: '0 0 8px rgba(129,140,248,0.9)',
        }}
      />
    </div>
  );
};

export default CustomCursor;
