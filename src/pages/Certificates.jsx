import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { FaEye, FaDownload, FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Award } from "lucide-react";

// PDFs
import certificate1Pdf from "../assets/KYP.pdf";
import certificate2Pdf from "../assets/ADCA.pdf";
import certificate3Pdf from "../assets/Internship.pdf";
import certificate4Pdf from "../assets/ReactBootcamp.pdf";
import certificate5Pdf from "../assets/AWS.pdf";
import certificate6Pdf from "../assets/Kodbud.pdf";
import certificate7Pdf from "../assets/Ethical Hacking.pdf";

const certs = [
  { id: 1, title: "Web Development", img: "https://iili.io/BpN1eae.png", pdf: certificate1Pdf, glow: "rgba(99,102,241,.4)" },
  { id: 2, title: "C & C++", img: "https://iili.io/BpNanOQ.png", pdf: certificate2Pdf, glow: "rgba(236,72,153,.4)" },
  { id: 3, title: "Industrial Internship", img: "https://iili.io/BpN1OF9.png", pdf: certificate3Pdf, glow: "rgba(16,185,129,.4)" },
  { id: 4, title: "Sheri Bootcamp", img: "https://iili.io/BpNaC5x.png", pdf: certificate4Pdf, glow: "rgba(6,182,212,.4)" },
  { id: 5, title: "IBM", img: "https://iili.io/BpN1jGS.pngg", pdf: certificate5Pdf, glow: "rgba(245,158,11,.4)" },
  { id: 6, title: "Profe-ex Dev", img: "https://iili.io/BpN1w67.png", pdf: certificate6Pdf, glow: "rgba(99,102,241,.4)" },
  { id: 7, title: "Wed Dev", img: "https://iili.io/BpNkLLF.png", pdf: certificate7Pdf, glow: "rgba(239,68,68,.4)" },
];

const Certifications = () => {
  const [rotation, setRotation] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [config, setConfig] = useState({ radius: 520, perspective: 2200, cardWidth: 480 });

  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const touch = useRef({ x: 0, time: 0 });
  const headerInView = useInView(headerRef, { once: true, amount: 0.4 });

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

  return (
    <section
      ref={sectionRef}
      id="certifications"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      className="relative w-full py-12 md:py-20 flex flex-col items-center justify-start overflow-hidden rounded-[2.5rem]"
      style={{ backgroundColor: "transparent", color: "var(--text-primary)" }}
    >
      {/* GLOW BACKGROUND AURA */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[75vw] max-w-[600px] h-[75vw] max-h-[600px] rounded-full blur-[140px] pointer-events-none opacity-30 dark:opacity-60"
          style={{ background: certs[activeIndex].glow }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.5, scale: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8 }}
        />
      </AnimatePresence>

      {/* HEADER UNIT - Clean flow in normal document flow (NO OVERLAP) */}
      <div ref={headerRef} className="w-full max-w-7xl px-4 md:px-8 mb-8 md:mb-12 flex flex-col items-center text-center z-20">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="font-mono text-[10px] md:text-[12px] uppercase tracking-[0.4em] font-black flex items-center justify-center gap-2 mb-3 text-indigo-500"
        >
          <Award size={14} /> / VERIFICATION_NODES
        </motion.span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black italic uppercase tracking-tight text-slate-900 dark:text-slate-50">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-400">Certifications</span> & Honors
        </h2>
        <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 mt-2 max-w-lg">
          Accredited credentials and verified diplomas in software engineering and cloud fundamentals.
        </p>
      </div>

      {/* 3D CAROUSEL STAGE - Clean spacing with zero collision */}
      <div 
        className="relative w-full h-[24rem] sm:h-[28rem] md:h-[34rem] flex items-center justify-center my-4" 
        style={{ perspective: config.perspective }}
      >
        <motion.div
          animate={{ rotateY: rotation }}
          transition={{ type: "spring", stiffness: 40, damping: 24 }}
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
                  transform: `rotateY(${angle}deg) translateZ(${config.radius}px) scale(${front ? 1 : 0.75}) rotateX(${front ? 0 : 6}deg)`,
                  opacity: front ? 1 : 0.15,
                  pointerEvents: front ? "auto" : "none",
                  transition: "transform 0.7s cubic-bezier(0.25, 0.8, 0.25, 1), opacity 0.7s ease",
                  willChange: "transform, opacity"
                }}
                className="absolute"
              >
                <div
                  className="rounded-[2rem] md:rounded-[2.5rem] p-4 md:p-6 border shadow-2xl gradient-card-hover backdrop-blur-md"
                  style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--card-border)" }}
                >
                  {/* IMAGE CONTAINER - Sized and constrained */}
                  <div className="w-full aspect-[1.4/1] bg-zinc-950/20 dark:bg-zinc-950/60 rounded-xl md:rounded-2xl overflow-hidden border border-black/5 dark:border-white/10 mb-4 flex items-center justify-center p-2">
                    <img 
                      src={c.img} 
                      alt={c.title} 
                      className="max-w-full max-h-full object-contain drop-shadow-md transition-transform duration-500 group-hover:scale-105" 
                    />
                  </div>

                  <div className="flex justify-between items-center px-2 pt-1">
                    <div className="flex flex-col">
                      <span className="font-mono text-[9px] uppercase tracking-widest text-indigo-500 font-bold mb-0.5">CERTIFICATE 0{c.id}</span>
                      <span className="font-black italic uppercase text-sm md:text-lg tracking-tight text-slate-900 dark:text-slate-100">{c.title}</span>
                    </div>
                    <div className="flex gap-2 md:gap-3">
                      <motion.a 
                        whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
                        href={c.pdf} target="_blank" rel="noopener noreferrer"
                        className="w-9 h-9 md:w-11 md:h-11 rounded-xl flex items-center justify-center bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/30 transition-colors"
                        title="View Certificate"
                      >
                        <FaEye size={14} />
                      </motion.a>
                      <motion.a 
                        whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
                        href={c.pdf} download 
                        className="w-9 h-9 md:w-11 md:h-11 rounded-xl flex items-center justify-center bg-cyan-600 hover:bg-cyan-500 text-white shadow-lg shadow-cyan-600/30 transition-colors"
                        title="Download PDF"
                      >
                        <FaDownload size={14} />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* CONTROLS - Clean flow placement */}
      <div className="flex items-center gap-6 md:gap-10 mt-6 z-20">
        <motion.button 
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          onClick={() => rotate(1)} 
          className="w-12 h-12 md:w-14 md:h-14 rounded-2xl border border-black/10 dark:border-white/10 flex items-center justify-center bg-white/70 dark:bg-[#111111]/70 backdrop-blur-xl shadow-md text-slate-900 dark:text-slate-100 hover:border-indigo-500/40 transition-colors"
          aria-label="Previous Certificate"
        >
          <FaArrowLeft size={14} />
        </motion.button>
        
        <div className="flex flex-col items-center">
          <span className="font-mono text-xl md:text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-400 leading-none">
            {String(activeIndex + 1).padStart(2, "0")} <span className="text-xs text-slate-400 font-normal">/ {String(certs.length).padStart(2, "0")}</span>
          </span>
          <div className="w-16 h-1.5 bg-slate-200 dark:bg-zinc-800 rounded-full mt-2.5 overflow-hidden">
             <motion.div 
               className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full"
               animate={{ width: `${((activeIndex + 1) / certs.length) * 100}%` }}
               transition={{ ease: "easeOut", duration: 0.3 }}
             />
          </div>
        </div>

        <motion.button 
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          onClick={() => rotate(-1)} 
          className="w-12 h-12 md:w-14 md:h-14 rounded-2xl border border-black/10 dark:border-white/10 flex items-center justify-center bg-white/70 dark:bg-[#111111]/70 backdrop-blur-xl shadow-md text-slate-900 dark:text-slate-100 hover:border-indigo-500/40 transition-colors"
          aria-label="Next Certificate"
        >
          <FaArrowRight size={14} />
        </motion.button>
      </div>
    </section>
  );
};

export default Certifications;