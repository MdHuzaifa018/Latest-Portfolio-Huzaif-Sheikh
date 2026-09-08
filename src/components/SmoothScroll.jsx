import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Lenis from 'lenis';

let lenisInstance = null;

export const getLenis = () => lenisInstance;

const SmoothScroll = ({ children }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    lenisInstance = new Lenis({
      lerp: 0.075,
      wheelMultiplier: 0.85,
      touchMultiplier: 1.0,
      smoothWheel: true,
      smoothTouch: false,
      syncTouch: false,
      autoResize: true,
    });

    let rafId;
    function raf(time) {
      if (lenisInstance) {
        lenisInstance.raf(time);
      }
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      if (lenisInstance) {
        lenisInstance.destroy();
        lenisInstance = null;
      }
    };
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] z-[9997] origin-left"
        style={{
          scaleX,
          backgroundColor: 'var(--accent)',
          boxShadow: '0 0 8px var(--accent)',
        }}
      />
      {children}
    </>
  );
};

export default SmoothScroll;
