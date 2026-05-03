import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaEye, FaDownload, FaArrowRight, FaArrowLeft } from "react-icons/fa";

// PDFs
import certificate1Pdf from "../assets/KYP.pdf";
import certificate2Pdf from "../assets/ADCA.pdf";
import certificate3Pdf from "../assets/Internship.pdf";
import certificate4Pdf from "../assets/ReactBootcamp.pdf";
import certificate5Pdf from "../assets/AWS.pdf";
import certificate6Pdf from "../assets/Kodbud.pdf";
import certificate7Pdf from "../assets/Ethical Hacking.pdf";

const certs = [
  { id: 1, title: "KYP Program", img: "https://iili.io/3oNLIcb.md.jpg", pdf: certificate1Pdf, glow: "rgba(99,102,241,.4)" },
  { id: 2, title: "ADCA Expert", img: "https://iili.io/3oNiIse.md.jpg", pdf: certificate2Pdf, glow: "rgba(236,72,153,.4)" },
  { id: 3, title: "Industrial Internship", img: "https://iili.io/3fm0Oo7.md.jpg", pdf: certificate3Pdf, glow: "rgba(16,185,129,.4)" },
  { id: 4, title: "React Bootcamp", img: "https://iili.io/2bT9ScB.md.jpg", pdf: certificate4Pdf, glow: "rgba(6,182,212,.4)" },
  { id: 5, title: "AWS Cloud", img: "https://iili.io/FVONHZP.md.jpg", pdf: certificate5Pdf, glow: "rgba(245,158,11,.4)" },
  { id: 6, title: "Kodbud Dev", img: "https://iili.io/KoLkXu1.md.jpg", pdf: certificate6Pdf, glow: "rgba(99,102,241,.4)" },
  { id: 7, title: "Ethical Hacking", img: "https://iili.io/FvJtRlR.md.jpg", pdf: certificate7Pdf, glow: "rgba(239,68,68,.4)" },
];

const Certifications = ({ theme }) => {
  const isDark = theme === "dark";

  const [rotation, setRotation] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [config, setConfig] = useState({ radius: 520, perspective: 2200, cardWidth: 480 });

  const sectionRef = useRef(null);
  const touch = useRef({ x: 0, time: 0 });

  /* ---------------- RESPONSIVE ---------------- */
  useEffect(() => {
    const resize = () => {
      const w = window.innerWidth;
      if (w < 640) setConfig({ radius: 220, perspective: 1200, cardWidth: 280 });
      else if (w < 1024) setConfig({ radius: 380, perspective: 1800, cardWidth: 380 });
      else setConfig({ radius: 520, perspective: 2200, cardWidth: 480 });
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  /* ---------------- ROTATION LOGIC ---------------- */
  const rotate = (dir, steps = 1) => {
    setActiveIndex((i) => (i - dir * steps + certs.length) % certs.length);
    setRotation((r) => r + dir * steps * (360 / certs.length));
  };

  /* ---------------- AUTO ROTATE ON SCROLL ---------------- */
  useEffect(() => {
    const onWheel = (e) => {
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.top > window.innerHeight || rect.bottom < 0) return;
      // Threshold to prevent over-sensitive spinning
      if (Math.abs(e.deltaY) > 10) {
        rotate(e.deltaY > 0 ? -1 : 1);
      }
    };
    window.addEventListener("wheel", onWheel, { passive: true });
    return () => window.removeEventListener("wheel", onWheel);
  }, []);

  const onTouchStart = (e) => { touch.current = { x: e.touches[0].clientX, time: Date.now() }; };
  const onTouchEnd = (e) => {
    const dx = touch.current.x - e.changedTouches[0].clientX;
    const dt = Date.now() - touch.current.time;
    const velocity = dx / dt;
    if (Math.abs(velocity) > 0.25) {
      const steps = Math.min(2, Math.max(1, Math.round(Math.abs(velocity) * 4)));
      rotate(velocity > 0 ? -1 : 1, steps);
    }
  };

  const colors = {
    bg: isDark ? "#050505" : "#f8fafc",
    card: isDark ? "rgba(20,20,20,.85)" : "#fff",
    border: isDark ? "rgba(255,255,255,.1)" : "rgba(0,0,0,.08)",
    text: isDark ? "#fff" : "#0f172a",
    accent: "#6366f1"
  };

  return (
    <section
      ref={sectionRef}
      id="certifications"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden transition-colors duration-500"
      style={{ background: colors.bg, color: colors.text }}
    >
      {/* HEADER UNIT */}
      <div className="absolute top-10 left-6 md:top-16 md:left-16 z-[100]">
        <span style={{ color: colors.accent }} className="font-mono text-[10px] md:text-[12px] uppercase tracking-[0.5em] font-black block mb-2">
          / Verification_Nodes
        </span>
        <h2 className="text-4xl md:text-7xl font-[1000] italic uppercase tracking-tighter leading-none">
          Certs<span style={{ color: colors.accent }}>.</span>
        </h2>
      </div>

      {/* GLOW */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          className="absolute w-[70vw] h-[70vw] rounded-full blur-[120px] pointer-events-none opacity-40 md:opacity-100"
          style={{ background: certs[activeIndex].glow }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence>

      {/* STAGE */}
      <div className="relative w-full h-[25rem] md:h-[45rem] mt-20 md:mt-0" style={{ perspective: config.perspective }}>
        <motion.div
          animate={{ rotateY: rotation }}
          transition={{ type: "spring", stiffness: 35, damping: 22 }}
          className="absolute inset-0 flex items-center justify-center"
          style={{ transformStyle: "preserve-3d" }}
        >
          {certs.map((c, i) => {
            const angle = i * (360 / certs.length);
            const front = i === activeIndex;
            return (
              <div
                key={c.id}
                style={{
                  width: config.cardWidth,
                  transform: `rotateY(${angle}deg) translateZ(${config.radius}px)`,
                  opacity: front ? 1 : 0.1,
                  pointerEvents: front ? "auto" : "none"
                }}
                className="absolute transition-opacity duration-700"
              >
                <motion.div
                  animate={{ scale: front ? 1 : 0.7, rotateX: front ? 0 : 5 }}
                  className="rounded-[2rem] md:rounded-[3rem] p-4 md:p-8 border-2 backdrop-blur-3xl shadow-2xl"
                  style={{ background: colors.card, borderColor: colors.border }}
                >
                  {/* IMAGE CONTAINER - Sized and constrained */}
                  <div className="w-full aspect-[1.4/1] bg-zinc-950/40 rounded-xl md:rounded-3xl overflow-hidden border border-white/5 mb-6 flex items-center justify-center">
                    <img 
                      src={c.img} 
                      alt={c.title} 
                      className="max-w-full max-h-full object-contain p-2 md:p-4" 
                    />
                  </div>

                  <div className="flex justify-between items-center px-2">
                    <div className="flex flex-col">
                      <span className="font-mono text-[9px] uppercase tracking-widest opacity-40 mb-1">{c.id}</span>
                      <span className="font-black italic uppercase text-xs md:text-xl tracking-tight leading-none">{c.title}</span>
                    </div>
                    <div className="flex gap-2 md:gap-4">
                      <motion.a 
                        whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
                        href={c.pdf} target="_blank" 
                        className="w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center bg-indigo-600 text-white shadow-lg"
                      >
                        <FaEye size={18} />
                      </motion.a>
                      <motion.a 
                        whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
                        href={c.pdf} download 
                        className="w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center bg-emerald-600 text-white shadow-lg"
                      >
                        <FaDownload size={18} />
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* CONTROLS */}
      <div className="absolute bottom-12 md:bottom-20 flex items-center gap-10 z-[110]">
        <motion.button 
          whileTap={{ scale: 0.8 }}
          onClick={() => rotate(1)} 
          className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-white/10 flex items-center justify-center bg-white/5 backdrop-blur-lg"
        >
          <FaArrowLeft />
        </motion.button>
        
        <div className="flex flex-col items-center">
          <span className="font-mono text-2xl font-black text-indigo-500 leading-none">
            {String(activeIndex + 1).padStart(2, "0")}
          </span>
          <div className="w-12 h-1 bg-indigo-500/20 rounded-full mt-2 overflow-hidden">
             <motion.div 
               className="h-full bg-indigo-500"
               animate={{ width: `${((activeIndex + 1) / certs.length) * 100}%` }}
             />
          </div>
        </div>

        <motion.button 
          whileTap={{ scale: 0.8 }}
          onClick={() => rotate(-1)} 
          className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-white/10 flex items-center justify-center bg-white/5 backdrop-blur-lg"
        >
          <FaArrowRight />
        </motion.button>
      </div>
    </section>
  );
};

export default Certifications;