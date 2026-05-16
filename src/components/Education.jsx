import React, { useState, useEffect } from "react";
import { motion, LayoutGroup, AnimatePresence } from "framer-motion";

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
  },
  // {
  //   id: "matric",
  //   degree: "Secondary (10th)",
  //   college: "R.P.S School, Biharsharif",
  //   year: "2020 - 2021",
  //   status: "80%",
  //   details:
  //     "Foundational academic training with a distinction in Information Technology and Mathematics.",
  //   accent: "#3b82f6",
  // },
];

const Education = ({ theme }) => {
  const [expandedId, setExpandedId] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const colors = {
    bg: theme === "dark" ? "#0b0d12" : "#f8fafc",
    card: theme === "dark" ? "#11131a" : "#ffffff",
    muted: theme === "dark" ? "#161922" : "#f1f5f9",
    text: theme === "dark" ? "#e5e7eb" : "#111827",
    subtext: theme === "dark" ? "#9ca3af" : "#6b7280",
    border: theme === "dark" ? "#1f2937" : "#e5e7eb",
    shadowSoft:
      theme === "dark"
        ? "0 20px 40px rgba(0,0,0,0.7)"
        : "10px 10px 20px #e2e8f0, -10px -10px 20px #ffffff",
    shadowBig:
      theme === "dark"
        ? "0 35px 80px rgba(0,0,0,0.9)"
        : "0 25px 50px -12px rgba(0,0,0,0.08)",
  };

  return (
    <section
      id="education"
      style={{
        padding: isMobile ? "5rem 1rem" : "8rem 1.5rem",
        backgroundColor: colors.bg,
        color: colors.text,
        transition: "all 0.5s ease",
      }}
    >
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
        {/* HEADER */}
        <div
          style={{
            marginBottom: "4rem",
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "space-between",
            alignItems: isMobile ? "flex-start" : "flex-end",
            gap: "2rem",
          }}
        >
          <div>
            <h2
              style={{
                fontSize: "0.75rem",
                letterSpacing: "0.5em",
                fontFamily: "monospace",
                color: "#6366f1",
                marginBottom: "1rem",
                fontWeight: 700,
              }}
            >
              / ACADEMIC_TIMELINE
            </h2>

            <h3
              style={{
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                fontWeight: 900,
                fontStyle: "italic",
                letterSpacing: "-0.03em",
              }}
            >
              Education
            </h3>
          </div>

          <div
            style={{
              padding: "0.6rem 1.2rem",
              borderRadius: "0.75rem",
              fontSize: "0.65rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              fontFamily: "monospace",
              backgroundColor: colors.muted,
              color: colors.subtext,
            }}
          >
            Status: Active_Student
          </div>
        </div>

        <LayoutGroup>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {educationData.map((edu) => {
              const expanded = expandedId === edu.id;

              return (
                <motion.div
                  layout
                  key={edu.id}
                  onClick={() => setExpandedId(expanded ? null : edu.id)}
                  style={{
                    cursor: "pointer",
                    borderRadius: "2.5rem",
                    padding: expanded
                      ? isMobile
                        ? "2rem"
                        : "3.5rem"
                      : "2rem",
                    backgroundColor: expanded ? colors.card : colors.muted,
                    boxShadow: expanded ? colors.shadowBig : colors.shadowSoft,
                    border: `1px solid ${expanded ? colors.border : "transparent"}`,
                    position: "relative",
                  }}
                >
                  {!expanded && !isMobile && (
                    <div
                      style={{
                        position: "absolute",
                        left: 0,
                        top: "50%",
                        transform: "translateY(-50%)",
                        width: "6px",
                        height: "48px",
                        borderRadius: "0 999px 999px 0",
                        backgroundColor: edu.accent,
                      }}
                    />
                  )}

                  <div
                    style={{
                      display: "flex",
                      flexDirection: isMobile ? "column" : "row",
                      justifyContent: "space-between",
                      gap: "2rem",
                    }}
                  >
                    <div>
                      <span
                        style={{
                          fontSize: "10px",
                          fontFamily: "monospace",
                          padding: "0.35rem 0.75rem",
                          borderRadius: "0.5rem",
                          backgroundColor: colors.card,
                          border: `1px solid ${colors.border}`,
                          color: colors.subtext,
                          letterSpacing: "0.15em",
                        }}
                      >
                        {edu.year}
                      </span>

                      <motion.h4
                        layout
                        style={{
                          fontWeight: 900,
                          fontStyle: "italic",
                          textTransform: "uppercase",
                          fontSize: expanded
                            ? "clamp(1.8rem, 4vw, 2.8rem)"
                            : "1.4rem",
                          marginTop: "1rem",
                        }}
                      >
                        {edu.degree}
                      </motion.h4>

                      <motion.p layout style={{ color: edu.accent }}>
                        {edu.college}
                      </motion.p>
                    </div>

                    <span
                      style={{
                        padding: "0.6rem 1.5rem",
                        borderRadius: "999px",
                        backgroundColor: expanded ? edu.accent : colors.card,
                        color: expanded ? "#fff" : colors.text,
                        fontSize: "10px",
                        letterSpacing: "0.25em",
                        fontWeight: 900,
                        textTransform: "uppercase",
                        alignSelf: isMobile ? "flex-start" : "center",
                      }}
                    >
                      {edu.status}
                    </span>
                  </div>

                  <AnimatePresence>
                    {expanded && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        style={{
                          marginTop: "2.5rem",
                          paddingTop: "2rem",
                          borderTop: `1px solid ${colors.border}`,
                        }}
                      >
                        <div
                          style={{
                            display: "grid",
                            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                            gap: "2rem",
                          }}
                        >
                          <p
                            style={{
                              fontSize: "1rem",
                              lineHeight: 1.8,
                              fontStyle: "italic",
                              color: colors.subtext,
                            }}
                          >
                            “{edu.details}”
                          </p>

                          <div>
                            <div
                              style={{
                                height: "6px",
                                backgroundColor: colors.muted,
                                borderRadius: "999px",
                                overflow: "hidden",
                              }}
                            >
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 1 }}
                                style={{
                                  height: "100%",
                                  backgroundColor: edu.accent,
                                }}
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