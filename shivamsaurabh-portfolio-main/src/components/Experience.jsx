import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WorkExperience = [
  {
    id: 1,
    title: "Event Tech Lead",
    company: "Vibexperience",
    yearsActive: "Dec 2025 - Jan 2026",
    information: [
      "Directed technical operations for BCA/MCA department events.",
      "Coordinated group performances and digital staging for live audiences.",
      "Bridged the gap between creative performance and technical execution."
    ],
    tags: ["Live Staging", "Tech Ops", "Leadership"],
    accent: "pink"
  },
  {
    id: 2,
    title: "Frontend Intern",
    company: "Edunet Foundation",
    yearsActive: "Aug 2025 - Sept 2025",
    information: [
      "Engineered a high-performance Weather App using OpenWeatherMap API.",
      "Developed a React-based Image Gallery with advanced CRUD operations.",
      "Built responsive architectures for client-facing portfolios."
    ],
    tags: ["React", "API Integration", "Tailwind"],
    accent: "indigo"
  },
  // {
  //   id: 3,
  //   title: "React Developer Intern",
  //   company: "EDGEINTERNS.AI",
  //   yearsActive: "Feb 2025 - March 2025",
  //   information: [
  //     "Developed a full-scale E-Commerce platform using ReactJS.",
  //     "Optimized state management for fluid user shopping experiences.",
  //     "Implemented secure checkout flows and dynamic product filtering."
  //   ],
  //   tags: ["Redux", "E-Commerce", "UI/UX"],
  //   accent: "emerald"
  // },
  {
    id: 4,
    title: "Freelance Developer",
    company: "Self-Employed",
    yearsActive: "Jan 2025 - Present",
    information: [
      "Deployed multiple production-ready websites using React and Firebase.",
      "Consulted for local clients to digitize business workflows with Tailwind CSS.",
      "Managed end-to-end deployment pipelines and SEO optimization."
    ],
    tags: ["Freelance", "Firebase", "Strategy"],
    accent: "amber"
  }
];

const accentMap = {
  pink: "#ec4899",
  indigo: "#6366f1",
  emerald: "#10b981",
  amber: "#f59e0b"
};

export default function Experience({ theme }) {
  const [activeId, setActiveId] = useState(1);
  const activeWork = WorkExperience.find(w => w.id === activeId);

  // Colors based on global theme
  const colors = {
    bg: theme === "dark" ? "#050505" : "#f9fafb",
    card: theme === "dark" ? "#111" : "#fff",
    border: theme === "dark" ? "#1f2937" : "#e5e7eb",
    text: theme === "dark" ? "#e5e7eb" : "#111827",
    subtext: theme === "dark" ? "#9ca3af" : "#6b7280",
    highlight: theme === "dark" ? "#6366f1" : "#4f46e5",
  };

  return (
    <section
      id="experience"
      style={{ backgroundColor: colors.bg, transition: "all 0.5s ease" }}
      className="py-32 px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-20">
          <h2 style={{ color: colors.highlight }} className="text-sm font-mono uppercase tracking-[0.6em] mb-4">
            / Professional_Archive
          </h2>
          <h3 style={{ color: colors.text }} className="text-6xl md:text-7xl font-black italic uppercase">
            Work History
          </h3>
          <div style={{ backgroundColor: colors.text }} className="mt-6 h-1.5 w-24 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Timeline */}
          <div className="lg:col-span-4 flex lg:flex-col gap-4 overflow-x-auto lg:overflow-visible">
            {WorkExperience.map(work => {
              const isActive = activeId === work.id;
              return (
                <button
                  key={work.id}
                  onClick={() => setActiveId(work.id)}
                  style={{
                    cursor: "pointer",
                    borderRadius: "1.5rem",
                    padding: "1.5rem",
                    textAlign: "left",
                    border: isActive ? `1px solid ${colors.border}` : "1px solid transparent",
                    backgroundColor: isActive ? colors.card : "transparent",
                    boxShadow: isActive ? "0 10px 25px rgba(0,0,0,0.2)" : "none",
                    transition: "all 0.5s ease"
                  }}
                >
                  {/* Accent bar */}
                  <div style={{
                    position: "absolute",
                    left: 0,
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: "6px",
                    height: "48px",
                    borderRadius: "0 999px 999px 0",
                    backgroundColor: isActive ? accentMap[work.accent] : "transparent",
                    transition: "all 0.5s ease"
                  }} />

                  <span style={{
                    display: "block",
                    fontSize: "10px",
                    fontFamily: "monospace",
                    textTransform: "uppercase",
                    color: isActive ? colors.highlight : colors.subtext,
                    fontWeight: 700,
                    marginBottom: "0.25rem"
                  }}>
                    {work.yearsActive}
                  </span>

                  <span style={{
                    display: "block",
                    fontSize: "1.25rem",
                    fontWeight: 900,
                    color: isActive ? colors.text : colors.subtext,
                    fontStyle: isActive ? "italic" : "normal"
                  }}>
                    {work.company}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Content Panel */}
          <div style={{
            borderRadius: "2.5rem",
            padding: "3rem",
            border: `1px solid ${colors.border}`,
            backgroundColor: colors.card,
            boxShadow: "0 25px 50px rgba(0,0,0,0.08)",
            overflow: "hidden",
            position: "relative",
            transition: "all 0.5s ease"
          }} className="lg:col-span-8">
            {/* Glow */}
            <div style={{
              position: "absolute",
              top: "-6rem",
              right: "-6rem",
              width: "16rem",
              height: "16rem",
              borderRadius: "50%",
              filter: "blur(120px)",
              opacity: 0.1,
              backgroundColor: accentMap[activeWork.accent],
              transition: "all 0.5s ease"
            }} />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                {/* Header */}
                <div style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  gap: "1.5rem",
                  marginBottom: "3rem",
                  paddingBottom: "1rem",
                  borderBottom: `1px solid ${colors.border}`
                }}>
                  <div>
                    <h4 style={{ color: colors.text, fontSize: "2.5rem", fontWeight: 900, textTransform: "uppercase" }}>
                      {activeWork.title}
                    </h4>
                    <p style={{ color: accentMap[activeWork.accent], fontFamily: "monospace" }}>
                      // {activeWork.company}
                    </p>
                  </div>

                  <span style={{
                    alignSelf: "flex-start",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    padding: "0.5rem 1rem",
                    borderRadius: "0.75rem",
                    backgroundColor: colors.muted,
                    color: colors.text
                  }}>
                    {activeWork.yearsActive}
                  </span>
                </div>

                {/* Points */}
                <ul style={{ marginTop: "2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {activeWork.information.map((info, i) => (
                    <li key={i} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                      <span style={{
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        marginTop: "0.25rem",
                        backgroundColor: accentMap[activeWork.accent]
                      }} />
                      <p style={{ color: colors.subtext, fontSize: "1rem" }}>{info}</p>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div style={{ marginTop: "2rem", display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {activeWork.tags.map(tag => (
                    <span key={tag} style={{
                      fontSize: "0.625rem",
                      fontWeight: 900,
                      textTransform: "uppercase",
                      padding: "0.25rem 0.75rem",
                      borderRadius: "1rem",
                      border: `1px solid ${colors.border}`,
                      color: colors.subtext,
                      transition: "all 0.5s ease"
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}