import React, { useState, useEffect, useRef } from "react";
import { motion, LayoutGroup, AnimatePresence, useInView } from "framer-motion";
import { GraduationCap, BookOpen, Trophy, ChevronDown } from "lucide-react";

const educationData = [
  {
    id: "bca",
    degree: "Bachelor of Computer Applications",
    college: "Patliputra University, Patna",
    year: "2024 - 2027",
    status: "In Progress",
    details:
      "Specializing in Software Architecture, Full-stack Web Development, and Advanced Database Systems. Actively involved in building community-driven open-source projects.",
    accent: "#6366f1",
    icon: GraduationCap,
  },
  {
    id: "inter",
    degree: "Intermediate (12th)",
    college: "Nalanda College, Biharsharif",
    year: "2021 - 2022",
    status: "70%",
    details:
      "Science Stream. Mastery in Mathematics and Physics which formed the logical foundation for my programming career.",
    accent: "#a855f7",
    icon: BookOpen,
  },
];

// Reusable animated section heading
const SectionHeading = ({ label, title, theme }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  return (
    <div ref={ref} className="mb-16">
      <motion.h2
        initial={{ opacity: 0, x: -30 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
        style={{ fontSize: '0.75rem', letterSpacing: '0.5em', fontFamily: 'monospace', color: '#6366f1', marginBottom: '1rem', fontWeight: 700 }}
      >
        {label}
      </motion.h2>
      <motion.h3
        initial={{ opacity: 0, y: 50, skewY: 3 }}
        animate={inView ? { opacity: 1, y: 0, skewY: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 900, fontStyle: 'italic', letterSpacing: '-0.03em', lineHeight: 1 }}
      >
        {title}
      </motion.h3>
    </div>
  );
};

const Education = ({ theme }) => {
  const [expandedId, setExpandedId] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.1 });
  const isDark = theme === "dark";

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section
      id="education"
      ref={sectionRef}
      style={{ padding: isMobile ? "5rem 1rem" : "8rem 1.5rem", backgroundColor: "var(--background)", color: "var(--text-primary)", position: 'relative', overflow: 'hidden' }}
    >
      {/* Section glow */}
      <div
        className="absolute top-0 right-0 w-[40vw] h-[40vw] max-w-96 max-h-96 rounded-full blur-[120px] pointer-events-none opacity-[0.05] dark:opacity-[0.08]"
        style={{ background: 'radial-gradient(circle, #a855f7 0%, transparent 70%)' }}
      />

      <div style={{ maxWidth: "72rem", margin: "0 auto", position: 'relative', zIndex: 1 }}>
        <SectionHeading label="/ ACADEMIC_TIMELINE" title="Education" theme={theme} />

        <LayoutGroup>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {educationData.map((edu, idx) => {
              const expanded = expandedId === edu.id;
              const IconComp = edu.icon;

              return (
                <motion.div
                  layout
                  key={edu.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.1 + idx * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  onClick={() => setExpandedId(expanded ? null : edu.id)}
                  whileHover={!expanded ? { x: 6 } : {}}
                  style={{
                    cursor: "pointer",
                    borderRadius: "2.5rem",
                    padding: expanded ? (isMobile ? "2rem" : "3.5rem") : "2rem",
                    backgroundColor: expanded ? "var(--card-bg)" : "var(--muted)",
                    boxShadow: expanded ? (isDark ? "0 35px 80px rgba(0,0,0,0.9)" : "0 25px 50px -12px rgba(0,0,0,0.08)") : "none",
                    border: `1px solid ${expanded ? edu.accent + '40' : "transparent"}`,
                    position: "relative",
                  }}
                >
                  {/* Accent bar */}
                  {!expanded && !isMobile && (
                    <motion.div
                      style={{
                        position: "absolute", left: 0, top: "50%",
                        transform: "translateY(-50%)", width: "6px", height: "48px",
                        borderRadius: "0 999px 999px 0", backgroundColor: edu.accent,
                      }}
                      initial={{ height: 0 }}
                      animate={{ height: 48 }}
                      transition={{ duration: 0.4 }}
                    />
                  )}

                  <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", justifyContent: "space-between", gap: "2rem" }}>
                    <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                      {/* Icon */}
                      <div
                        className="hidden md:flex w-12 h-12 rounded-2xl items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: edu.accent + '20', border: `1px solid ${edu.accent}40` }}
                      >
                        <IconComp size={22} style={{ color: edu.accent }} />
                      </div>

                      <div>
                        <span style={{ fontSize: "10px", fontFamily: "monospace", padding: "0.35rem 0.75rem", borderRadius: "0.5rem", backgroundColor: "var(--card-bg)", border: "1px solid var(--card-border)", color: "var(--text-secondary)", letterSpacing: "0.15em" }}>
                          {edu.year}
                        </span>
                        <motion.h4 layout style={{ fontWeight: 900, fontStyle: "italic", textTransform: "uppercase", fontSize: expanded ? "clamp(1.8rem, 4vw, 2.8rem)" : "1.4rem", marginTop: "1rem" }}>
                          {edu.degree}
                        </motion.h4>
                        <motion.p layout style={{ color: edu.accent }}>{edu.college}</motion.p>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexShrink: 0 }}>
                      <span style={{ padding: "0.6rem 1.5rem", borderRadius: "999px", backgroundColor: expanded ? edu.accent : "var(--card-bg)", color: expanded ? "#fff" : "var(--text-primary)", fontSize: "10px", letterSpacing: "0.25em", fontWeight: 900, textTransform: "uppercase", alignSelf: isMobile ? "flex-start" : "center", transition: 'all 0.4s ease' }}>
                        {edu.status}
                      </span>
                      <motion.div animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
                        <ChevronDown size={20} style={{ color: "var(--text-secondary)" }} />
                      </motion.div>
                    </div>
                  </div>

                  <AnimatePresence>
                    {expanded && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.4 }}
                        style={{ marginTop: "2.5rem", paddingTop: "2rem", borderTop: "1px solid var(--card-border)" }}
                      >
                        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "2rem" }}>
                          <p style={{ fontSize: "1rem", lineHeight: 1.8, fontStyle: "italic", color: "var(--text-secondary)" }}>
                            "{edu.details}"
                          </p>
                          <div>
                            <p style={{ fontSize: '0.75rem', color: "var(--text-secondary)", marginBottom: '0.75rem', fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '0.15em' }}>Progress</p>
                            <div style={{ height: "6px", backgroundColor: "var(--muted)", borderRadius: "999px", overflow: "hidden" }}>
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 1.2, ease: 'easeOut' }}
                                style={{ height: "100%", backgroundColor: edu.accent, borderRadius: '999px' }}
                              />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </LayoutGroup>
      </div>
    </section>
  );
};

export default Education;