import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const data = [
  { id: 1, image: "https://i.pravatar.cc/150?img=32", title: "EdgeIntern", subtitle: "Online Internship", comment: "Congratulations on your achievements! Wishing you all the best in your future endeavours!", rating: 5 },
  { id: 2, image: "https://i.pravatar.cc/150?img=47", title: "Project Mentor", subtitle: "Feedback", comment: "Huzaif's dedication to building clean and efficient web apps is commendable. Impressive work!", rating: 5 },
  { id: 3, image: "https://i.pravatar.cc/150?img=12", title: "Freelance Client", subtitle: "Web Design", comment: "Delivered the project on time and exceeded my expectations. Will definitely work again!", rating: 5 },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });

  useEffect(() => {
    const interval = setInterval(() => setIndex((prev) => (prev + 1) % data.length), 6000);
    return () => clearInterval(interval);
  }, []);

  const prev = () => setIndex((p) => (p - 1 + data.length) % data.length);
  const next = () => setIndex((p) => (p + 1) % data.length);

  return (
    <section id="testimonials" ref={sectionRef} style={{ backgroundColor: "var(--background)", color: "var(--text-primary)" }} className="relative py-32 px-6 overflow-hidden">
      {/* Decorative background quote icon */}
      <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={inView ? { opacity: 0.04, scale: 1 } : {}} transition={{ duration: 1 }} className="absolute top-10 left-10 pointer-events-none">
        <Quote size={280} style={{ color: "#6366f1" }} />
      </motion.div>

      {/* Glow accent */}
      <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full blur-[140px] pointer-events-none opacity-[0.05] dark:opacity-[0.08]" style={{ background: 'radial-gradient(circle, #6366f1 0%, transparent 70%)', transform: 'translateY(-50%)' }} />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-20">
          <motion.h2 initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6 }} style={{ color: "#6366f1" }} className="text-sm uppercase tracking-[0.4em] font-mono mb-2">
            / Feedback
          </motion.h2>
          <motion.h3 initial={{ opacity: 0, y: 50, skewY: 3 }} animate={inView ? { opacity: 1, y: 0, skewY: 0 } : {}} transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }} className="text-5xl font-black italic uppercase tracking-tighter">
            Testimonials
          </motion.h3>
        </div>

        {/* Slider */}
        <div className="relative min-h-[22rem] flex items-center">
          <AnimatePresence mode="wait">
            <motion.div key={index} initial={{ opacity: 0, x: 60, filter: "blur(12px)" }} animate={{ opacity: 1, x: 0, filter: "blur(0px)" }} exit={{ opacity: 0, x: -60, filter: "blur(12px)" }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }} className="grid md:grid-cols-12 gap-10 items-center w-full">
              {/* Image & identity */}
              <div className="md:col-span-4 flex flex-col items-center md:items-start">
                <motion.div className="relative" whileHover={{ scale: 1.05 }}>
                  <div className="absolute inset-0 rounded-2xl blur-2xl" style={{ backgroundColor: "#6366f1", opacity: 0.15 }} />
                  <img src={data[index].image} alt={data[index].title} className="w-32 h-32 md:w-44 md:h-44 rounded-2xl object-cover grayscale hover:grayscale-0 transition-all duration-700 relative z-10" style={{ border: "1px solid var(--card-border)" }} />
                  <div className="absolute -bottom-2 -right-2 w-5 h-5 rounded-full z-20 flex items-center justify-center" style={{ backgroundColor: "#6366f1" }}>
                    <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  </div>
                </motion.div>

                <div className="mt-6 text-center md:text-left">
                  <h4 className="text-2xl font-bold uppercase italic">{data[index].title}</h4>
                  <span style={{ color: "#6366f1" }} className="font-mono text-xs uppercase tracking-widest">{data[index].subtitle}</span>
                  <div className="flex gap-1 mt-3">
                    {Array.from({ length: data[index].rating }).map((_, i) => (
                      <motion.div key={i} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.08 }}>
                        <Star size={14} style={{ color: '#f59e0b', fill: '#f59e0b' }} />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Comment */}
              <div className="md:col-span-8">
                <motion.p style={{ color: "var(--text-secondary)" }} className="text-2xl md:text-4xl font-medium leading-tight tracking-tight italic" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                  "{data[index].comment}"
                </motion.p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls row */}
        <div className="mt-16 flex items-center justify-between">
          <div className="flex gap-6">
            {data.map((_, i) => (
              <button key={i} onClick={() => setIndex(i)} className="group flex flex-col items-start gap-2">
                <span style={{ color: i === index ? "#6366f1" : "var(--text-secondary)" }} className="text-[10px] font-mono">0{i + 1}</span>
                <motion.div style={{ backgroundColor: i === index ? "#6366f1" : "var(--text-secondary)" }} animate={{ width: i === index ? 64 : 24 }} transition={{ duration: 0.4 }} className="h-0.5 rounded-full" />
              </button>
            ))}
          </div>

          <div className="flex gap-3">
            <motion.button onClick={prev} whileHover={{ scale: 1.1, backgroundColor: "#6366f1", color: '#fff' }} whileTap={{ scale: 0.95 }} className="w-10 h-10 rounded-full border flex items-center justify-center" style={{ borderColor: "var(--card-border)", color: "var(--text-secondary)" }}>
              <ChevronLeft size={18} />
            </motion.button>
            <motion.button onClick={next} whileHover={{ scale: 1.1, backgroundColor: "#6366f1", color: '#fff' }} whileTap={{ scale: 0.95 }} className="w-10 h-10 rounded-full border flex items-center justify-center" style={{ borderColor: "var(--card-border)", color: "var(--text-secondary)" }}>
              <ChevronRight size={18} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;