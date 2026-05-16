import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  RiFireLine,
  RiCupLine,
  RiGroupLine,
  RiTrophyLine,
  RiDownloadLine,
} from "react-icons/ri";
import Resume from "../assets/Resume.pdf";

const About = ({ theme }) => {
  const [repoCount, setRepoCount] = useState(0);

  useEffect(() => {
    fetch("https://api.github.com/users/MdHuzaifa018")
      .then((res) => res.json())
      .then((data) => setRepoCount(data.public_repos || 0))
      .catch(console.error);
  }, []);

  const cardVariants = {
    offscreen: { y: 30, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.3, duration: 0.8 },
    },
  };

  const colors = {
    bg: theme === "dark" ? "#0b0d12" : "#f8fafc",
    surface: theme === "dark" ? "#11131a" : "#ffffff",
    soft: theme === "dark" ? "#161922" : "#f5f5f5",
    text: theme === "dark" ? "#e5e7eb" : "#111",
    muted: theme === "dark" ? "#9ca3af" : "#6b7280",
    accent: "#f97316",
    shadowSoft:
      theme === "dark"
        ? "10px 10px 30px rgba(0,0,0,0.6)"
        : "10px 10px 20px #e0e0e0, -10px -10px 20px #ffffff",
    shadowBig:
      theme === "dark"
        ? "0 25px 60px rgba(0,0,0,0.8)"
        : "20px 20px 60px #d1d1d1, -20px -20px 60px #ffffff",
  };

  return (
    <section
      id="about"
      style={{
        backgroundColor: colors.bg,
        padding: "clamp(4rem, 10vw, 10rem) 1.5rem",
        color: colors.text,
        isolation: "isolate",
        transition: "all 0.5s ease",
        overflowX: "hidden",
      }}
    >
      {/* Injecting Media Queries for precise Grid control */}
      <style dangerouslySetInnerHTML={{ __html: `
        .about-grid {
          display: grid;
          gap: 1.5rem;
          grid-template-columns: 1fr;
        }
        @media (min-width: 640px) {
          .about-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 1024px) {
          .about-grid { grid-template-columns: repeat(4, 1fr); }
          .bio-card-span { grid-column: span 2 !important; grid-row: span 2 !important; }
        }
      `}} />

      <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
        {/* HEADER SECTION */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "2rem",
            marginBottom: "clamp(3rem, 8vw, 6rem)",
          }}
        >
          <div style={{ flex: "1 1 400px" }}>
            <h2
              style={{
                fontSize: "0.75rem",
                letterSpacing: "0.5em",
                color: colors.accent,
                fontWeight: 700,
                marginBottom: "1rem",
                fontFamily: "monospace",
              }}
            >
              / PERSONA_CORE
            </h2>
            <h1
              style={{
                fontSize: "clamp(3rem, 7vw, 6.5rem)",
                fontWeight: 900,
                fontStyle: "italic",
                letterSpacing: "-0.05em",
                lineHeight: 1,
              }}
            >
              About Me
            </h1>
          </div>

          <div
            style={{
              background: theme === "dark" ? "rgba(0,22,30,0.9)" : "rgba(0,255,255,0.9)",
              padding: "1rem 2.5rem",
              borderRadius: "2rem",
              border: `1px solid ${theme === "dark" ? "#1f2937" : "#e5e7eb"}`,
              boxShadow: colors.shadowBig,
              backdropFilter: "blur(25px)",
              width: "fit-content",
            }}
          >
            <TypeAnimation
              sequence={["Solving Problems", 2000, "Building SaaS", 2000, "Designing UI", 2000, "I'm Huzaif Sheikh, a Frontend Developer 💻", 2000, "I'm from Bihar, India 🇮🇳", 2000, "I'm pursuing BCA from Nalanda College 🎓", 2000, "I love building web apps 🚀", 2000,]}
              wrapper="span"
              className="type-text"
              repeat={Infinity}
            />
          </div>
        </div>

        {/* REFINED BENTO GRID */}
        <div className="about-grid">
          
          {/* MAIN BIO CARD */}
          <motion.div
            variants={cardVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
            className="bio-card-span"
            style={{
              padding: "clamp(2rem, 5vw, 4rem)",
              borderRadius: "3rem",
              backgroundColor: colors.surface,
              boxShadow: colors.shadowBig,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              minHeight: "400px",
            }}
          >
            <p style={{ fontSize: "clamp(1.4rem, 2.5vw, 2.8rem)", lineHeight: 1.2, maxWidth: "90%" }}>
              I'm <span style={{ color: colors.accent, fontWeight: 900, fontStyle: "italic" }}>Huzaif</span>.
              I am a passionate <strong>web developer</strong> with expertise in creating modern and responsive websites.  
               
             My goal is to build user-friendly and visually appealing web applications that solve <span style={{ 
                  textDecoration: "underline", 
                  textDecorationThickness: "max(2px, 0.3rem)", 
                  textDecorationColor: colors.accent + "66" 
                }}>real-world problems.</span>.
            </p>

            <button
              onClick={() => window.open(Resume, "_blank")}
              style={{
                marginTop: "3rem",
                padding: "1.2rem 2.5rem",
                borderRadius: "1.2rem",
                backgroundColor: theme === "dark" ? colors.accent : "#111",
                color: "#fff",
                fontWeight: 900,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "1rem",
                border: "none",
                cursor: "pointer",
                boxShadow: `0 15px 30px ${theme === 'dark' ? 'rgba(0,0,0,0.4)' : 'rgba(0,0,0,0.2)'}`,
                fontSize: "0.9rem",
                width: "fit-content",
                transition: "transform 0.3s ease"
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
              onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
            >
              Access Resume <RiDownloadLine size={20} />
            </button>
          </motion.div>

          {/* STATS CARDS */}
          {[
            {
              icon: <RiCupLine size={40} color="#fff" />,
              value: repoCount,
              label: "Repositories",
              bg: colors.accent,
              color: "#fff",
            },
            {
              icon: <RiFireLine size={40} color={colors.accent} />,
              value: "2M+",
              label: "Exp Journey",
            },
            {
              icon: <RiGroupLine size={40} color="#3b82f6" />,
              value: "12",
              label: "Projects",
            },
            {
              icon: <RiTrophyLine size={40} color="#eab308" />,
              value: "100%",
              label: "Integrity",
            },
          ].map((stat, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true }}
              style={{
                padding: "2.5rem",
                borderRadius: "2.5rem",
                backgroundColor: stat.bg || colors.surface,
                color: stat.color || colors.text,
                boxShadow: stat.bg ? `0 20px 40px ${colors.accent}44` : colors.shadowSoft,
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "space-between",
                minHeight: "220px",
              }}
            >
              <div style={{ opacity: 0.9 }}>{stat.icon}</div>
              <div>
                <h4 style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", fontWeight: 900, lineHeight: 1, margin: "0.5rem 0" }}>
                  {stat.value}
                </h4>
                <p style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.7, fontWeight: 800 }}>
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;