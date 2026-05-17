import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  RiFireLine,
  RiCupLine,
  RiGroupLine,
  RiTrophyLine,
  RiDownloadLine,
} from "react-icons/ri";
import Resume from "../assets/Resume.pdf";

const About = () => {
  const [repoCount, setRepoCount] = useState(0);
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  useEffect(() => {
    fetch("https://api.github.com/users/MdHuzaifa018")
      .then((res) => res.json())
      .then((data) => setRepoCount(data.public_repos || 0))
      .catch(console.error);
  }, []);

  const headingInView = useInView(headingRef, { once: true, amount: 0.1 });

  const cardVariants = {
    offscreen: { y: 40, opacity: 0, scale: 0.97 },
    onscreen: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { type: "spring", bounce: 0.25, duration: 0.9 },
    },
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{
        backgroundColor: "var(--background)",
        padding: "clamp(4rem, 10vw, 10rem) 1.5rem",
        color: "var(--text-primary)",
        isolation: "isolate",
        overflowX: "hidden",
        position: "relative",
      }}
    >
      {/* Subtle section glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 80% 50%, rgba(249,115,22,0.035) 0%, transparent 60%)",
        }}
      />

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
        .about-stat-card {
          transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 0.3s ease;
          will-change: transform;
        }
        .about-stat-card:hover {
          transform: translate3d(0, -8px, 0) scale(1.02);
        }
        .glow-border-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 2.5rem;
          padding: 1px;
          background: linear-gradient(135deg, rgba(99,102,241,0.3), rgba(45,212,191,0.15), transparent);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
          will-change: opacity;
        }
        .glow-border-card:hover::before {
          opacity: 1;
        }
        .about-type-container {
          background: var(--card-bg);
          border: 1px solid var(--card-border);
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }
        .dark .about-type-container {
          background: rgba(0, 22, 30, 0.9);
          box-shadow: 0 25px 60px rgba(0,0,0,0.8);
        }
        .about-bio-card {
          background-color: var(--card-bg);
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
        }
        .dark .about-bio-card {
          box-shadow: 0 25px 60px rgba(0,0,0,0.8);
        }
        .about-resume-btn {
          background-color: #111;
        }
        .dark .about-resume-btn {
          background-color: #f97316;
        }
        .about-normal-card {
          background-color: var(--card-bg);
          color: var(--text-primary);
          box-shadow: 0 10px 20px rgba(0,0,0,0.05);
        }
        .dark .about-normal-card {
          box-shadow: 10px 10px 30px rgba(0,0,0,0.6);
        }
      `}} />

      <div style={{ maxWidth: "80rem", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* HEADER SECTION */}
        <div
          ref={headingRef}
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
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              animate={headingInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              style={{
                fontSize: "0.75rem",
                letterSpacing: "0.5em",
                color: "#f97316",
                fontWeight: 700,
                marginBottom: "1rem",
                fontFamily: "monospace",
              }}
            >
              / PERSONA_CORE
            </motion.h2>
            <motion.h1
              initial={{ opacity: 0, y: 60, skewY: 4 }}
              animate={headingInView ? { opacity: 1, y: 0, skewY: 0 } : {}}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
              style={{
                fontSize: "clamp(3rem, 7vw, 6.5rem)",
                fontWeight: 900,
                fontStyle: "italic",
                letterSpacing: "-0.05em",
                lineHeight: 1,
              }}
            >
              About Me
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="about-type-container"
            style={{
              padding: "1rem 2.5rem",
              borderRadius: "2rem",
              width: "fit-content",
              position: "relative",
              overflow: "hidden",
            }}
            whileHover={{
              borderColor: "rgba(249,115,22,0.3)",
            }}
          >
            {/* Shimmer on hover */}
            <div
              className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background: "linear-gradient(135deg, transparent 30%, rgba(255,255,255,0.05) 50%, transparent 70%)",
              }}
            />
            <TypeAnimation
              sequence={["Solving Problems", 2000, "Building SaaS", 2000, "Designing UI", 2000, "I'm Huzaif Sheikh, a Frontend Developer 💻", 2000, "I'm from Bihar, India 🇮🇳", 2000, "I'm pursuing BCA from Nalanda College 🎓", 2000, "I love building web apps 🚀", 2000,]}
              wrapper="span"
              className="type-text font-bold"
              repeat={Infinity}
            />
          </motion.div>
        </div>

        {/* REFINED BENTO GRID */}
        <div className="about-grid">
          
          {/* MAIN BIO CARD */}
          <motion.div
            variants={cardVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.1 }}
            className="bio-card-span glow-border-card about-stat-card about-bio-card"
            style={{
              padding: "clamp(2rem, 5vw, 4rem)",
              borderRadius: "3rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              minHeight: "400px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Background accent */}
            <div
              className="absolute bottom-0 right-0 w-64 h-64 opacity-5 blur-3xl rounded-full pointer-events-none"
              style={{ backgroundColor: "#f97316" }}
            />

            <p style={{ fontSize: "clamp(1.4rem, 2.5vw, 2.8rem)", lineHeight: 1.2, maxWidth: "90%", position: "relative", zIndex: 1 }}>
              I'm{" "}
              <span style={{ color: "#f97316", fontWeight: 900, fontStyle: "italic" }}>Huzaif</span>.
              I am a passionate <strong>web developer</strong> with expertise in creating modern and responsive websites.{" "}
              My goal is to build user-friendly and visually appealing web applications that solve{" "}
              <span style={{ 
                textDecoration: "underline", 
                textDecorationThickness: "max(2px, 0.3rem)", 
                textDecorationColor: "#f9731666" 
              }}>
                real-world problems.
              </span>
            </p>

            <motion.button
              onClick={() => window.open(Resume, "_blank")}
              className="about-resume-btn font-bold"
              style={{
                marginTop: "3rem",
                padding: "1.2rem 2.5rem",
                borderRadius: "1.2rem",
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
                fontSize: "0.9rem",
                width: "fit-content",
                position: "relative",
                overflow: "hidden",
                zIndex: 1,
              }}
              whileHover={{ 
                scale: 1.05, 
                y: -4,
              }}
              whileTap={{ scale: 0.97 }}
            >
              Access Resume <RiDownloadLine size={20} />
              {/* Ripple */}
              <span
                className="absolute inset-0 bg-white/10 translate-y-full hover:translate-y-0 transition-transform duration-300"
                style={{ borderRadius: "1.2rem" }}
              />
            </motion.button>
          </motion.div>

          {/* STATS CARDS */}
          {[
            {
              icon: <RiCupLine size={40} color="#fff" />,
              value: repoCount,
              label: "Repositories",
              bg: "#f97316",
              color: "#fff",
            },
            {
              icon: <RiFireLine size={40} color="#f97316" />,
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
              viewport={{ once: true, amount: 0.1 }}
              className={`about-stat-card ${stat.bg ? '' : 'glow-border-card about-normal-card'}`}
              style={{
                padding: "2.5rem",
                borderRadius: "2.5rem",
                backgroundColor: stat.bg || undefined,
                color: stat.color || undefined,
                boxShadow: stat.bg ? "0 20px 40px rgba(249,115,22,0.3)" : undefined,
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "space-between",
                minHeight: "220px",
                position: "relative",
                overflow: "hidden",
                cursor: "default",
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
                boxShadow: stat.bg
                  ? "0 30px 60px rgba(249,115,22,0.4)"
                  : "0 20px 40px rgba(0,0,0,0.15), 0 0 30px rgba(99,102,241,0.1)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Background glow for non-accent cards */}
              {!stat.bg && (
                <div
                  className="absolute bottom-0 right-0 w-24 h-24 rounded-full blur-2xl opacity-20 pointer-events-none"
                  style={{ backgroundColor: i === 1 ? "#f97316" : i === 2 ? '#3b82f6' : '#eab308' }}
                />
              )}

              <div style={{ opacity: 0.9, position: "relative", zIndex: 1 }}>{stat.icon}</div>
              <div style={{ position: "relative", zIndex: 1 }}>
                <motion.h4
                  style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", fontWeight: 900, lineHeight: 1, margin: "0.5rem 0" }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  {stat.value}
                </motion.h4>
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