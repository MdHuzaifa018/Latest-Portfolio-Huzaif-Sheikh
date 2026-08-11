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
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ backgroundColor: "var(--background)", color: "var(--text-primary)" }}
    >
      {/* HEADER UNIT */}
      <div ref={headerRef} className="absolute top-10 left-6 md:top-16 md:left-16 z-[100]">
        <motion.span
          initial={{ opacity: 0, x: -30 }}
          animate={headerInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ color: "#6366f1" }}
          className="font-mono text-[10px] md:text-[12px] uppercase tracking-[0.5em] font-black flex items-center gap-2 mb-2"
        >
          <Award size={12} /> / Verification_Nodes
        </motion.span>
        <div ref={headerRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tight text-slate-900 dark:text-slate-50">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-400">Certifications</span> & Honors
          </h2>
        </div>
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
                  transform: `rotateY(${angle}deg) translateZ(${config.radius}px) scale(${front ? 1 : 0.75}) rotateX(${front ? 0 : 6}deg)`,
                  opacity: front ? 1 : 0.15,
                  pointerEvents: front ? "auto" : "none",
                  transition: "transform 0.8s cubic-bezier(0.25, 0.8, 0.25, 1), opacity 0.8s ease",
                  willChange: "transform, opacity"
                }}
                className="absolute"
              >
                <div
                  className="rounded-[2rem] md:rounded-[3rem] p-4 md:p-8 border-2 shadow-2xl"
                  style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--card-border)" }}
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
                </div>
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