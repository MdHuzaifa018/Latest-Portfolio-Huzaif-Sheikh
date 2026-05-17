import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Briefcase, Code2, Zap, Tag } from "lucide-react";

const WorkExperience = [
  {
    id: 1,
    title: "Event Tech Lead",
    company: "Vibexperience",
    yearsActive: "Dec 2025 - Jan 2026",
    information: [
      "Directed technical operations for BCA/MCA department events.",
      "Coordinated group performances and digital staging for live audiences.",
      "Bridged the gap between creative performance and technical execution.",
    ],
    tags: ["Live Staging", "Tech Ops", "Leadership"],
    accent: "pink",
    icon: Zap,
  },
  {
    id: 2,
    title: "Frontend Intern",
    company: "Edunet Foundation",
    yearsActive: "Aug 2025 - Sept 2025",
    information: [
      "Engineered a high-performance Weather App using OpenWeatherMap API.",
      "Developed a React-based Image Gallery with advanced CRUD operations.",
      "Built responsive architectures for client-facing portfolios.",
    ],
    tags: ["React", "API Integration", "Tailwind"],
    accent: "indigo",
    icon: Code2,
  },
  {
    id: 4,
    title: "Freelance Developer",
    company: "Self-Employed",
    yearsActive: "Jan 2025 - Present",
    information: [
      "Deployed multiple production-ready websites using React and Firebase.",
      "Consulted for local clients to digitize business workflows with Tailwind CSS.",
      "Managed end-to-end deployment pipelines and SEO optimization.",
    ],
    tags: ["Freelance", "Firebase", "Strategy"],
    accent: "amber",
    icon: Briefcase,
  },
];

const accentMap = {
  pink: "#ec4899",
  indigo: "#6366f1",
  emerald: "#10b981",
  amber: "#f59e0b",
};

export default function Experience() {
  const [activeId, setActiveId] = useState(1);
  const activeWork = WorkExperience.find((w) => w.id === activeId);
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.15 });

  return (
    <section
      id="experience"
      ref={sectionRef}
      style={{ backgroundColor: "var(--background)", position: 'relative', overflow: 'hidden' }}
      className="py-32 px-6"
    >
      {/* Background accent */}
      <div
        className="absolute bottom-0 left-0 w-[40vw] h-[40vw] max-w-96 max-h-96 rounded-full blur-[120px] pointer-events-none opacity-[0.04] dark:opacity-[0.07]"
        style={{ background: 'radial-gradient(circle, #6366f1 0%, transparent 70%)' }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{ color: "var(--accent)" }}
            className="text-sm font-mono uppercase tracking-[0.6em] mb-4"
          >
            / Professional_Archive
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 50, skewY: 3 }}
            animate={inView ? { opacity: 1, y: 0, skewY: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            style={{ color: "var(--text-primary)" }}
            className="text-6xl md:text-7xl font-black italic uppercase"
          >
            Work History
          </motion.h3>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
            style={{ backgroundColor: "var(--text-primary)", transformOrigin: 'left' }}
            className="mt-6 h-1.5 w-24 rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Timeline tabs */}
          <div className="lg:col-span-4 flex lg:flex-col gap-4 overflow-x-auto lg:overflow-visible">
            {WorkExperience.map((work, idx) => {
              const isActive = activeId === work.id;
              const IconComp = work.icon;
              return (
                <motion.button
                  key={work.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + idx * 0.12, duration: 0.6 }}
                  onClick={() => setActiveId(work.id)}
                  whileHover={{ x: isActive ? 0 : 8 }}
                  style={{
                    cursor: "pointer",
                    borderRadius: "1.5rem",
                    padding: "1.5rem",
                    textAlign: "left",
                    border: isActive ? "1px solid var(--card-border)" : "1px solid transparent",
                    backgroundColor: isActive ? "var(--card-bg)" : "transparent",
                    boxShadow: isActive ? `0 10px 25px rgba(0,0,0,0.2), 0 0 0 1px ${accentMap[work.accent]}20` : "none",
                    position: 'relative',
                  }}
                >
                  {/* Active accent bar */}
                  <motion.div
                    style={{
                      position: "absolute", left: 0, top: "50%", transform: "translateY(-50%)",
                      width: "6px", height: isActive ? 48 : 0, borderRadius: "0 999px 999px 0",
                      backgroundColor: accentMap[work.accent], transition: "all 0.4s ease",
                    }}
                  />

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                    <div
                      className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${accentMap[work.accent]}20` }}
                    >
                      <IconComp size={16} style={{ color: accentMap[work.accent] }} />
                    </div>
                    <span style={{ fontSize: "10px", fontFamily: "monospace", textTransform: "uppercase", color: isActive ? "var(--accent)" : "var(--text-secondary)", fontWeight: 700 }}>
                      {work.yearsActive}
                    </span>
                  </div>
                  <span style={{ display: "block", fontSize: "1.25rem", fontWeight: 900, color: isActive ? "var(--text-primary)" : "var(--text-secondary)", fontStyle: isActive ? "italic" : "normal" }}>
                    {work.company}
                  </span>
                </motion.button>
              );
            })}
          </div>

          {/* Content panel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7 }}
            style={{
              borderRadius: "2.5rem",
              padding: "3rem",
              border: "1px solid var(--card-border)",
              backgroundColor: "var(--card-bg)",
              boxShadow: "0 25px 50px rgba(0,0,0,0.08)",
              overflow: "hidden",
              position: "relative",
            }}
            className="lg:col-span-8"
          >
            {/* Glow */}
            <motion.div
              animate={{ opacity: [0.08, 0.15, 0.08] }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{
                position: "absolute", top: "-6rem", right: "-6rem",
                width: "16rem", height: "16rem", borderRadius: "50%",
                filter: "blur(120px)", backgroundColor: accentMap[activeWork.accent],
                transition: "background-color 0.5s ease",
              }}
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <div style={{ marginBottom: "3rem", paddingBottom: "1rem", borderBottom: "1px solid var(--card-border)" }}>
                  <h4 style={{ color: "var(--text-primary)", fontSize: "2.5rem", fontWeight: 900, textTransform: "uppercase", marginBottom: '0.5rem' }}>
                    {activeWork.title}
                  </h4>
                  <p style={{ color: accentMap[activeWork.accent], fontFamily: "monospace", fontSize: '0.9rem' }}>
                    // {activeWork.company}
                  </p>
                  <span style={{ display: 'inline-block', marginTop: '0.75rem', fontSize: "0.75rem", fontWeight: 700, padding: "0.5rem 1rem", borderRadius: "0.75rem", backgroundColor: `${accentMap[activeWork.accent]}15`, color: accentMap[activeWork.accent], border: `1px solid ${accentMap[activeWork.accent]}30` }}>
                    {activeWork.yearsActive}
                  </span>
                </div>

                {/* Bullet points */}
                <ul style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {activeWork.information.map((info, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1, duration: 0.4 }}
                      style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}
                    >
                      <motion.span
                        style={{ width: "8px", height: "8px", borderRadius: "50%", marginTop: "0.45rem", flexShrink: 0, backgroundColor: accentMap[activeWork.accent] }}
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                      />
                      <p style={{ color: "var(--text-secondary)", fontSize: "1rem" }}>{info}</p>
                    </motion.li>
                  ))}
                </ul>

                {/* Tags */}
                <div style={{ marginTop: "2rem", display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {activeWork.tags.map((tag, i) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + i * 0.08 }}
                      whileHover={{ scale: 1.08, backgroundColor: `${accentMap[activeWork.accent]}20`, borderColor: accentMap[activeWork.accent] }}
                      style={{
                        fontSize: "0.625rem", fontWeight: 900, textTransform: "uppercase",
                        padding: "0.35rem 0.9rem", borderRadius: "1rem",
                        border: `1px solid var(--card-border)`, color: "var(--text-secondary)",
                        display: 'flex', alignItems: 'center', gap: '0.4rem',
                        cursor: 'default', transition: 'all 0.3s ease',
                      }}
                    >
                      <Tag size={9} />
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}