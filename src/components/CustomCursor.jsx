import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

// =====================================================
// CUSTOM CURSOR — optimized smooth follower
// =====================================================
const CustomCursor = () => {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);
  const isHovering = useRef(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Ring follows with smooth lag
  const ringX = useSpring(mouseX, { stiffness: 200, damping: 25 });
  const ringY = useSpring(mouseY, { stiffness: 200, damping: 25 });

  // Dot follows very tightly
  const dotX = useSpring(mouseX, { stiffness: 500, damping: 40 });
  const dotY = useSpring(mouseY, { stiffness: 500, damping: 40 });

  useEffect(() => {
    let ticking = false;

    const handleMouseMove = (e) => {
      if (!ticking) {
        requestAnimationFrame(() => {
          mouseX.set(e.clientX);
          mouseY.set(e.clientY);
          ticking = false;
        });
        ticking = true;
      }
    };

    const handleHoverStart = (e) => {
      const el = e.target.closest("a, button, [data-cursor]");
      if (el && !isHovering.current) {
        isHovering.current = true;
        if (ringRef.current) {
          ringRef.current.style.cssText = `
            width: 52px; 
            height: 52px; 
            border-color: rgba(99,102,241,0.9); 
            background-color: rgba(99,102,241,0.1); 
            box-shadow: 0 0 20px rgba(99,102,241,0.5), 0 0 40px rgba(99,102,241,0.2);
            transition: all 150ms ease-out;
          `;
        }
      }
    };

    const handleHoverEnd = (e) => {
      const el = e.target.closest("a, button, [data-cursor]");
      if (!el && isHovering.current) {
        isHovering.current = false;
        if (ringRef.current) {
          ringRef.current.style.cssText = `
            width: 36px; 
            height: 36px; 
            border-color: rgba(99,102,241,0.55); 
            background-color: transparent; 
            box-shadow: 0 0 10px rgba(99,102,241,0.25);
            transition: all 150ms ease-out;
          `;
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseover", handleHoverStart, { passive: true });
    document.addEventListener("mouseout", handleHoverEnd, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleHoverStart);
      document.removeEventListener("mouseout", handleHoverEnd);
    };
  }, [mouseX, mouseY]);

  return (
    <div className="hidden md:block">
      {/* Outer ring — smooth glow follower */}
      <motion.div
        ref={ringRef}
        className="fixed pointer-events-none z-[9995] rounded-full border"
        style={{
          x: ringX,
          y: ringY,
          width: 36,
          height: 36,
          translateX: "-50%",
          translateY: "-50%",
          borderColor: "rgba(99,102,241,0.55)",
          boxShadow: "0 0 10px rgba(99,102,241,0.25)",
          willChange: "transform",
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
          translateX: "-50%",
          translateY: "-50%",
          backgroundColor: "#818cf8",
          boxShadow: "0 0 8px rgba(129,140,248,0.9)",
          willChange: "transform",
        }}
      />
    </div>
  );
};

export default CustomCursor;
