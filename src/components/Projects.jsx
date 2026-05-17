import React, { useState, useEffect, useRef } from "react";
import {
  FaGithub,
  FaArrowRight,
  FaTimes,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, useInView } from "framer-motion";

const projectData = [
  {
    id: 1,
    image: "https://iili.io/BLy5HyQ.webp",
    title: "Ed-tech websites",
    category: "Frontend",
    url: "https://code-crafter-web.vercel.app/",
    repo: "https://github.com/MdHuzaifa018/Code-Crafter.git",
    tags: ["Next.js", "React", "Glassmorphism", "REST API", "Node.js", "Firebase"],
    description: `A comprehensive, high-performance calculation suite engineered with React.js. This project transcends standard arithmetic by integrating multiple specialized engines into a unified, glassmorphism-inspired interface. \n\nCore Architecture Modules:\nStandard & Scientific Core: Advanced mathematical protocols including trigonometric functions and exponential power logic.\nFinancial Intelligence: Dedicated module for Simple and Compound Interest visualization.\nReal-time Currency Exchange: Integrated with external REST APIs to fetch live global exchange rates.`,
  },
  {
    id: 2,
    image: "https://iili.io/BQ90OYX.png",
    title: "Personal Brand Website",
    category: "Frontend",
    url: "https://shopstopper.vercel.app/",
    repo: "https://github.com/shivamsaurabh25/E-Commerce",
    tags: ["React", "E-Commerce", "UI/UX"],
    description: `A modern ed-thech platform built with React.js, featuring a sleek and intuitive user interface. The application offers seamless navigation through various product categories, a dynamic shopping cart, and a secure checkout process. Key functionalities include product search, filtering options, and responsive design for optimal viewing on all devices. This project demonstrates proficiency in front-end development and user experience design.`,
  },
  {
    id: 3,
    image: "https://iili.io/BQ90hEN.png",
    title: "NGO Website",
    category: "Full Stack",
    url: "https://www.foundationabhay.org/",
    repo: "",
    tags: ["Next.js", "REST API", "Firebase", "Node.js", "Tailwind CSS"],
    description: `An advanced linguistic processing interface built with Next.js that interfaces with the Free Dictionary API. This application provides a comprehensive toolkit for word analysis, including phonetics, semantic examples, and auditory feedback systems.\n\nCore Architecture Modules:\nLexical Fetcher: A high-speed API integration layer that parses complex JSON responses into a structured, readable interface for word definitions.\nAuditory Synthesis: Implements a digital audio player module to process and stream real-time pronunciation guides for requested entries.\nPersistence Matrix: Features a custom-built Search History system utilizing LocalStorage to maintain user data across sessions without a backend requirement.\nDynamic Theme Engine: A robust UI state controller allowing seamless switching between high-contrast light and dark mode protocols.`,
  },
  {
    id: 4,
    image: "https://iili.io/BQ90Mhv.png",
    title: "Atmospheric Intelligence",
    category: "Frontend",
    url: "https://age-calculator-smoky-nu.vercel.app/",
    repo: "https://github.com/MdHuzaifa018/Age-Calculator.git",
    tags: ["HTML", "CSS", "JS"],
    description: `A real-time meteorological monitoring station developed with React.js. This application combines advanced asynchronous data fetching with a high-fidelity Glassmorphism UI, providing a sophisticated visual experience for global weather tracking.`,
  },
  {
    id: 5,
    image: "https://iili.io/BQ901pa.png",
    title: "Affiliate web",
    category: "Frontend",
    url: "https://adnan-affiliate-web.vercel.app/",
    repo: "https://github.com/MdHuzaifa018/Affiliate-Marketing-web.git",
    tags: ["React.js", "Vite", "ES6+", "Glassmorphism", "String Logic"],
    description: `A specialized React-based identity generator designed for competitive gaming ecosystems. This application utilizes complex string interpolation and character mapping to transform standard user input into unique, stylized visual signatures.`,
  },
  {
    id: 6,
    image: "https://iili.io/BQ900kg.webp",
    title: "Glassmorphism HUD Extension",
    category: "Utility",
    url: "https://naj-tech-website.vercel.app/",
    repo: "",
    tags: ["Chrome API", "JavaScript", "Manifest V3", "Glassmorphism", "CSS3"],
    description: `A sophisticated Chrome browser override that transforms the standard "New Tab" experience into a high-fidelity Glassmorphism dashboard. This utility integrates multimedia processing, interactive gaming logic, and automated visual asset cycling within a single, lightweight browser extension.`,
  },
  {
    id: 7,
    image: "https://iili.io/BQ907EB.webp",
    title: "Smart Study Planner",
    category: "Frontend",
    url: "https://smart-study-planner-pink.vercel.app/",
    repo: "",
    tags: ["React (Vite)", "Local Storage", "Glassmorphism"],
    description: `A high-security, persistent task management suite engineered with React Vite. This application integrates industrial-grade authentication protocols with a dual-layer data persistence strategy, ensuring user productivity is protected and consistent across browser sessions.`,
  },
  {
    id: 8,
    image: "https://iili.io/BQ90c21.webp",
    title: "Educational Institute Web",
    category: "Frontend",
    url: "https://sri-subramanya-educational-institut.vercel.app/",
    repo: "https://github.com/shivamsaurabh25/pdf---jpg-convertor",
    tags: ["React (Vite)", "PDF.js", "jsPDF", "Framer Motion", "Data Streams"],
    description: `A high-performance document utility engineered with React Vite for bi-directional conversion between PDF and JPG formats. This application specializes in purely client-side binary data processing, ensuring user privacy and zero-latency file handling without server dependency.`,
  },
  {
    id: 9,
    image: "",
    title: "Visual Discovery Nexus",
    category: "Frontend",
    url: "",
    repo: "",
    tags: ["React (Vite)", "Pexels API", "Context API", "Axios", "Glassmorphism"],
    description: `A high-performance visual media explorer engineered with React Vite. This application interfaces with the Pexels REST API to provide a seamless gateway to millions of high-definition assets, featuring a highly refined Glassmorphism interface and advanced state management.`,
  },
  {
    id: 10,
    image: "",
    title: "Cognitive Match Matrix",
    category: "Games",
    url: "",
    repo: "",
    tags: ["React.js", "Tailwind CSS", "Canvas Confetti", "LocalStorage", "State Logic"],
    description: `A sophisticated logic-based memory processor engineered with React.js. This application challenges cognitive retention through a dynamic grid system, featuring complex state management for turn-tracking, match validation, and high-score persistence.`,
  },
  {
    id: 11,
    image: "",
    title: "Symmetrical Grid Logic",
    category: "Games",
    url: "",
    repo: "",
    tags: ["React.js", "Tailwind CSS", "Hooks", "Endless Logic", "Glassmorphism"],
    description: `A sophisticated multiplayer competitive engine built with React.js. This application moves beyond classic gameplay by implementing an "Endless" logic loop and a highly reactive state architecture, housed within a high-fidelity glowing HUD interface.`,
  },
  {
    id: 12,
    image: "",
    title: "AI Vibe Orchestrator",
    category: "AI + Full Stack",
    url: "",
    repo: "",
    tags: ["React.js", "Gemini 1.5", "Spotify API", "Node.js", "Tailwind"],
    description: `A sophisticated multimodal AI application that bridges visual recognition and auditory curation. This project leverages the Google Gemini 1.5 Flash model to perform deep semantic analysis of images, translating visual "vibes" into targeted musical queries.`,
  },
  {
    id: 13,
    image: "",
    title: "Service Management Nexus",
    category: "Java + Cloud",
    url: "",
    repo: "",
    tags: ["JavaFX", "MongoDB Atlas", "Maven", "SHA-256", "CSS3"],
    description: `A sophisticated, cloud-connected enterprise resource planning (ERP) system developed for your 3rd-year major project. This application utilizes a modern JavaFX frontend and a MongoDB Atlas backend to orchestrate real-time service requests between users and providers within a secure, role-based ecosystem.`,
  },
];

// 3D Tilt Card Component with Spotlight - Highly optimized to run on GPU without Framer Motion springs
const ProjectCard = ({ project, index, onClick, onDetailsClick, activeOverlay, setActiveOverlay }) => {
  const cardRef = useRef(null);
  const cardInnerRef = useRef(null);
  const spotlightRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current || !cardInnerRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const xPct = x / rect.width - 0.5;
    const yPct = y / rect.height - 0.5;

    // RotateX is driven by Y coordinates (vertical tilt), RotateY by X coordinates
    const rotateX = -yPct * 12; // Max 6 degrees tilt
    const rotateY = xPct * 12;  // Max 6 degrees tilt

    cardInnerRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    if (spotlightRef.current) {
      spotlightRef.current.style.background = `radial-gradient(300px circle at ${x}px ${y}px, rgba(99,102,241,0.15), transparent 70%)`;
    }
  };

  const handleMouseLeave = () => {
    if (cardInnerRef.current) {
      cardInnerRef.current.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
    }
    if (spotlightRef.current) {
      spotlightRef.current.style.background = 'transparent';
    }
  };

  const isActive = activeOverlay === project.id;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      className="group relative animate-float-slow"
      style={{ perspective: "1000px" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => setActiveOverlay(isActive ? null : project.id)}
    >
      <div
        ref={cardInnerRef}
        style={{ 
          transformStyle: "preserve-3d", 
          transition: "transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 0.4s ease",
          willChange: "transform" 
        }}
        className="relative w-full h-[320px] md:h-[440px] rounded-[2rem] md:rounded-[2.5rem] border border-card bg-card overflow-hidden hover:shadow-2xl hover:shadow-indigo-500/10"
      >
        {/* Spotlight effect */}
        <div
          ref={spotlightRef}
          className="absolute inset-0 z-30 pointer-events-none transition-all duration-100"
          style={{ mixBlendMode: "overlay" }}
        />

        {/* Animated border glow on hover */}
        <div
          className="absolute -inset-[1px] rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
          style={{
            background: "linear-gradient(135deg, rgba(99,102,241,0.4), rgba(45,212,191,0.2), transparent 60%)",
            borderRadius: "2.5rem",
          }}
        />

        {/* IMAGE - standard img tag with pure CSS zoom is 10x faster than motion.img */}
        <img
          src={project.image}
          alt={project.title}
          className={`absolute inset-0 w-auto h-[300px] transition-all duration-700 group-hover:scale-105 z-[1] ${isActive ? "scale-105 blur-sm" : ""}`}
        />

        {/* HOVER / TAP OVERLAY */}
        <motion.div
          className={`absolute inset-0 z-20 flex items-center justify-center gap-4 bg-black/50 backdrop-blur-md transition-all duration-500 ${
            isActive ? "opacity-100" : "opacity-0 lg:group-hover:opacity-100"
          }`}
        >
          {project.url && (
            <motion.a
              href={project.url}
              target="_blank"
              onClick={(e) => e.stopPropagation()}
              className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center shadow-xl"
              whileHover={{ scale: 1.15, boxShadow: "0 0 20px rgba(255,255,255,0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              <FaExternalLinkAlt />
            </motion.a>
          )}
          <motion.a
            href={project.repo}
            target="_blank"
            onClick={(e) => e.stopPropagation()}
            className="w-12 h-12 rounded-full accent-bg text-white flex items-center justify-center shadow-xl"
            whileHover={{ scale: 1.15, boxShadow: "0 0 20px rgba(99,102,241,0.5)" }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub />
          </motion.a>
        </motion.div>

        {/* INFO */}
        <div
          className="absolute bottom-0 left-0 right-0 z-10 p-6 md:p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
          style={{ transform: "translateZ(20px)" }}
        >
          <span className="font-mono text-[9px] uppercase tracking-widest accent font-black block mb-1">
            {project.category}
          </span>
          <h4 className="text-lg md:text-2xl font-black italic uppercase truncate">
            {project.title}
          </h4>
        </div>

        {/* DETAILS BUTTON */}
        <motion.button
          onClick={(e) => {
            e.stopPropagation();
            onDetailsClick(project);
          }}
          className="absolute top-4 right-4 z-30 w-10 h-10 md:w-12 md:h-12 rounded-full accent-bg text-white flex items-center justify-center shadow-lg"
          whileHover={{ scale: 1.15, boxShadow: "0 0 20px rgba(99,102,241,0.5)" }}
          whileTap={{ scale: 0.9 }}
          style={{ transform: "translateZ(40px)" }}
        >
          <FaArrowRight className="-rotate-45" />
        </motion.button>

        {/* Floating index number */}
        <div
          className="absolute bottom-4 left-4 z-10 font-mono text-[10px] uppercase tracking-widest opacity-30"
        >
          {String(index + 1).padStart(2, '0')}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [activeOverlay, setActiveOverlay] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");
  const headerRef = useRef(null);

  const filteredProjects =
    activeFilter === "All"
      ? projectData
      : projectData.filter((p) => p.category === activeFilter);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1200);
  }, []);

  const headerInView = useInView(headerRef, { once: true, amount: 0.4 });

  const ProjectSkeleton = () => (
    <div className="h-[320px] md:h-[440px] rounded-[2.5rem] skeleton border border-card" />
  );

  const categories = ["All", "Frontend", "Games", "Utility", "AI + Full Stack", "Java + Cloud"];

  return (
    <section
      id="projects"
      className="relative py-24 md:py-40 px-4 md:px-6 bg-surface text-primary "
    >
      {/* Section glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] blur-[100px] pointer-events-none opacity-10 dark:opacity-20"
        style={{ background: "radial-gradient(ellipse, #6366f1 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* ================= HEADER ================= */}
        <div ref={headerRef} className="mb-20 md:mb-32">
          <motion.span 
            initial={{ opacity: 0, x: -30 }}
            animate={headerInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="font-mono text-[10px] md:text-xs uppercase tracking-[0.6em] accent block mb-4 font-black"
          >
            / Deployments
          </motion.span>

          <h2 className="text-5xl sm:text-6xl md:text-8xl xl:text-9xl font-black italic uppercase tracking-tighter leading-[0.9]">
            <motion.span 
              initial={{ opacity: 0, y: 60, skewY: 3 }}
              animate={headerInView ? { opacity: 1, y: 0, skewY: 0 } : {}}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
              className="block italic"
            >
              Selected
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, y: 60, skewY: 3 }}
              animate={headerInView ? { opacity: 1, y: 0, skewY: 0 } : {}}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
              className="block italic leading-none"
              style={{color: "transparent", 
                WebkitTextStroke: "2px var(--accent)",
                letterSpacing: "0px",
                fontFamily: "'system-ui', 'sans-serif'",

              }}
            >
              Works
            </motion.span>
          </h2>
        </div>

        {/* FILTER TABS */}
        <div className="flex flex-wrap gap-3 mb-16">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2.5 rounded-full text-xs uppercase font-black tracking-widest transition-all relative overflow-hidden`}
              style={{
                backgroundColor: activeFilter === cat
                  ? 'var(--accent)'
                  : 'transparent',
                color: activeFilter === cat ? '#fff' : 'var(--text-secondary)',
                border: '1px solid',
                borderColor: activeFilter === cat
                  ? 'var(--accent)'
                  : 'var(--card-border)',
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              {activeFilter === cat && (
                <motion.span
                  layoutId="active-filter"
                  className="absolute inset-0 rounded-full"
                  style={{ backgroundColor: 'var(--accent)' }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </motion.button>
          ))}
        </div>

        {/* ================= GRID ================= */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {loading
              ? Array.from({ length: 6 }).map((_, i) => (
                  <ProjectSkeleton key={i} />
                ))
              : filteredProjects.map((project, i) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={i}
                    activeOverlay={activeOverlay}
                    setActiveOverlay={setActiveOverlay}
                    onDetailsClick={setSelectedProject}
                  />
                ))}
          </motion.div>
        </AnimatePresence>

        {/* ================= MODAL ================= */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-black/90 backdrop-blur-xl"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 40 }}
                transition={{ type: "spring", stiffness: 250, damping: 25 }}
                className="relative w-full max-w-6xl max-h-[90vh] overflow-hidden rounded-[2rem] md:rounded-[3rem] bg-card border border-card shadow-2xl flex flex-col lg:flex-row"
              >
                {/* Glow effect on modal */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-30"
                  style={{
                    background: "radial-gradient(ellipse at top left, rgba(99,102,241,0.15), transparent 60%)",
                  }}
                />

                {/* CLOSE */}
                <motion.button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full accent-bg text-white flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaTimes />
                </motion.button>

                {/* LEFT */}
                <div className="w-full lg:w-3/5 border-b lg:border-b-0 lg:border-r border-card">
                  <div className="relative overflow-hidden">
                    <img
                      src={selectedProject.image}
                      className="w-full h-60 md:h-96 object-cover transition-transform duration-700 hover:scale-105"
                      alt="Preview"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--card-bg)] to-transparent opacity-50" />
                  </div>
                  <div className="p-6 md:p-10">
                    <span className="font-mono text-xs uppercase tracking-widest accent block mb-2">
                      {selectedProject.category}
                    </span>
                    <h2 className="text-3xl md:text-5xl font-black italic uppercase mb-6">
                      {selectedProject.title}
                    </h2>

                    <div className="flex flex-wrap gap-4">
                      {selectedProject.url && (
                        <motion.a
                          href={selectedProject.url}
                          target="_blank"
                          className="px-6 py-3 rounded-xl accent-bg text-white text-xs uppercase font-black tracking-widest relative overflow-hidden group"
                          whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(99,102,241,0.35)" }}
                          whileTap={{ scale: 0.97 }}
                        >
                          Live →
                        </motion.a>
                      )}
                      <motion.a
                        href={selectedProject.repo}
                        target="_blank"
                        className="px-6 py-3 rounded-xl border border-card text-xs uppercase font-black tracking-widest hover:accent-bg hover:text-white transition-all"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        GitHub
                      </motion.a>
                    </div>
                  </div>
                </div>

                {/* RIGHT */}
                <div className="w-full lg:w-2/5 p-6 md:p-10 overflow-y-auto">
                  <div className="font-mono text-[10px] uppercase tracking-[0.4em] opacity-40 mb-6">
                    / Project_Summary
                  </div>

                  <p className="text-sm md:text-base leading-relaxed italic opacity-80 whitespace-pre-line border-l-4 pl-6 accent-border">
                    {selectedProject.description}
                  </p>

                  <div className="mt-10">
                    <span className="font-mono text-[10px] uppercase tracking-widest opacity-40 block mb-4">
                      Utilized_Stack
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag) => (
                        <motion.span
                          key={tag}
                          className="px-3 py-1 rounded-md bg-indigo-600/10 border border-indigo-600/20 text-indigo-500 font-mono text-[10px] uppercase"
                          whileHover={{ scale: 1.08, backgroundColor: "rgba(99,102,241,0.2)" }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* FOOTER */}
        <div className="mt-24 pt-8 border-t border-card flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-[10px] uppercase tracking-[0.4em] opacity-40">
          <span>Terminal: Saurabh_Core</span>
          <span>Update: JAN_2026</span>
        </div>
      </div>
    </section>
  );
};

export default Projects;
