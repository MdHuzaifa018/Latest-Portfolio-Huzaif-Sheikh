import React, { useState, useEffect } from "react";
import {
  FaGithub,
  FaArrowRight,
  FaTimes,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const projectData = [
  {
    id: 1,
    image: "https://iili.io/BLy5HyQ.webp",
    title: "Ed-tech websites",
    category: "Frontend",
    url: "https://code-crafter-web.vercel.app/",
    repo: "https://github.com/MdHuzaifa018/Code-Crafter.git",
    tags: [
      "Next.js",
      "React",
      "Glassmorphism",
      "REST API",
      "Node.js",
      "Firebase",
    ],
    description: `A comprehensive, high-performance calculation suite engineered with React.js. This project transcends standard arithmetic by integrating multiple specialized engines into a unified, glassmorphism-inspired interface. 

Core Architecture Modules:
Standard & Scientific Core: Advanced mathematical protocols including trigonometric functions and exponential power logic.
Financial Intelligence: Dedicated module for Simple and Compound Interest visualization.
Real-time Currency Exchange: Integrated with external REST APIs to fetch live global exchange rates.`,
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
    url: "https://dictionary-shivam.vercel.app/",
    repo: "https://github.com/shivamsaurabh25/Dictionary",
    tags: ["Next.js", "REST API", "Firebase", "Node.js", "Tailwind CSS"],
    description: `An advanced linguistic processing interface built with React.js that interfaces with the Free Dictionary API. This application provides a comprehensive toolkit for word analysis, including phonetics, semantic examples, and auditory feedback systems.

Core Architecture Modules:
Lexical Fetcher: A high-speed API integration layer that parses complex JSON responses into a structured, readable interface for word definitions.
Auditory Synthesis: Implements a digital audio player module to process and stream real-time pronunciation guides for requested entries.
Persistence Matrix: Features a custom-built Search History system utilizing LocalStorage to maintain user data across sessions without a backend requirement.
Dynamic Theme Engine: A robust UI state controller allowing seamless switching between high-contrast light and dark mode protocols.

Technical Implementation:
State Management: Leverages React hooks for efficient real-time data binding and synchronized UI updates during the search lifecycle.
Responsive Typography: Engineered with flexible CSS layouts to ensure readability and structural integrity across all mobile and desktop viewports.
Optimized API Handling: Implements environmental variable masking and error-boundary protocols to handle edge cases and null API responses gracefully.`,
  },
  {
    id: 4,
    image: "https://iili.io/2yG1jse.md.png",
    title: "Atmospheric Intelligence",
    category: "Frontend",
    url: "https://weatherbyshivam.vercel.app/",
    repo: "https://github.com/shivamsaurabh25/Weather",
    tags: ["React.js", "OpenWeather API", "Axios", "Glassmorphism", "Vite"],
    description: `A real-time meteorological monitoring station developed with React.js. This application combines advanced asynchronous data fetching with a high-fidelity Glassmorphism UI, providing a sophisticated visual experience for global weather tracking.

Core Architecture Modules:
Meteorological Sync: Integrated with the OpenWeather API via Axios to fetch and process live temperature, humidity, and atmospheric conditions across 200,000+ cities.
Visual Dynamics: Employs a custom CSS-driven Glassmorphism engine, utilizing backdrop-filters and semi-transparent layers to create a premium frosted-glass aesthetic.
Interaction Matrix: Features complex hover animations, including diagonal light streaks and glowing input protocols that react to user focus and cursor movement.
Reactive State Engine: Implements a fluid auto-refresh cycle and real-time UI updates, ensuring that displayed metrics are synchronized with the latest satellite data.

Technical Implementation:
Async Pipeline: Leverages Axios interceptors and environmental variable masking (Vite .env) to securely handle API handshakes and data stream processing.
Responsive Framework: Engineered for cross-platform integrity, maintaining visual consistency from ultra-wide displays to mobile viewports.
Optimized Rendering: Utilizes React's virtual DOM to perform granular updates of specific weather metrics without triggering full-page re-renders.`,
  },
  {
    id: 5,
    image: "https://iili.io/3Jq5I4a.md.png",
    title: "Identity Synthesis Lab",
    category: "Frontend",
    url: "https://name-generator-by-shivam.vercel.app/",
    repo: "https://github.com/shivamsaurabh25/Name-Generator",
    tags: ["React.js", "Vite", "ES6+", "Glassmorphism", "String Logic"],
    description: `A specialized React-based identity generator designed for competitive gaming ecosystems. This application utilizes complex string interpolation and character mapping to transform standard user input into unique, stylized visual signatures.

Core Architecture Modules:
Character Transformation Engine: Employs a library of 100+ high-fidelity templates, integrating special glyphs, mathematical symbols, and Unicode characters for stylized output.
Batch Processing Matrix: Features a custom-built pagination system that dynamically slices and renders data in 10-unit intervals, optimizing DOM performance during high-volume generation.
One-Click Buffer System: Integrated with the Navigator Clipboard API to provide seamless, single-action data transfer for immediate use across gaming platforms.
High-Contrast UI: A dark-mode specific interface engineered with Glassmorphism principles, utilizing backdrop-blur and radial gradients to achieve a futuristic aesthetic.

Technical Implementation:
State-Driven Logic: Manages randomized unique number generation and batch navigation using React hooks for synchronized UI refreshes.
Mobile-First Architecture: Developed with a fully responsive CSS framework, ensuring cross-device compatibility from smartphones to desktop stations.
Vite Optimization: Leveraging Vite's fast HMR (Hot Module Replacement) and optimized build pipeline for high-performance deployment.`,
  },
  {
    id: 6,
    image: "https://iili.io/3JzzJp4.md.png",
    title: "Glassmorphism HUD Extension",
    category: "Utility",
    url: "",
    repo: "https://github.com/shivamsaurabh25/Glassmorphism_Extension_For_Chrome",
    tags: ["Chrome API", "JavaScript", "Manifest V3", "Glassmorphism", "CSS3"],
    description: `A sophisticated Chrome browser override that transforms the standard "New Tab" experience into a high-fidelity Glassmorphism dashboard. This utility integrates multimedia processing, interactive gaming logic, and automated visual asset cycling within a single, lightweight browser extension.

Core Architecture Modules:
Visual Asset Engine: Implements an automated cycling protocol that rotates high-definition background matrices every 5000ms using asynchronous timing logic.
Media Integration Layer: Features an embedded YouTube processing module, allowing for real-time video search and playback directly within the browser's new tab interface.
Logic Game Matrix: A built-in Tic-Tac-Toe computation engine designed for zero-latency interactions during browser idle time.
Temporal Synchronizer: A real-time system clock module engineered for precise time-tracking with a stylized, translucent visual overlay.

Technical Implementation:
Manifest V3 Compliance: Engineered using the latest Chrome Extension security protocols for optimized permission handling and background service worker efficiency.
DOM Management: Utilizes high-performance JavaScript for real-time UI updates without impacting browser overhead or tab loading speed.
Advanced Glassmorphism: Leverages CSS backdrop-filter and sophisticated opacity blending to achieve a frosted-glass aesthetic across all HUD elements.`,
  },
  {
    id: 7,
    image: "https://iili.io/3B2K3xV.md.png",
    title: "Task Management Nexus",
    category: "Frontend",
    url: "https://shivam-to-do-list.vercel.app/",
    repo: "https://github.com/shivamsaurabh25/to-do-app",
    tags: ["React (Vite)", "Firebase Auth", "Local Storage", "Glassmorphism"],
    description: `A high-security, persistent task management suite engineered with React Vite. This application integrates industrial-grade authentication protocols with a dual-layer data persistence strategy, ensuring user productivity is protected and consistent across browser sessions.

Core Architecture Modules:
Identity Gateway: Implements Firebase Authentication protocols, enforcing secure user login/registration to protect personal data streams and task lists.
Hybrid Persistence Engine: Employs a sophisticated sync logic between the active application state and Browser LocalStorage, preventing data loss during unexpected system interruptions.
CRUD Logic Matrix: Features a streamlined interface for high-speed Task Creation, Modification, and Deletion, optimized for zero-latency user interactions.
Visual Interface System: A multi-layered Glassmorphism design utilizing frosted-glass textures and linear gradient typography to provide a futuristic, clutter-free workspace.

Technical Implementation:
Firebase Integration: Leverages the Google Firebase SDK for real-time authentication state handling and secure API communication.
Environmental Variable Masking: Utilizes Vite's secure .env architecture to prevent the exposure of sensitive database and authentication keys in the source code.
Responsive Component Model: Built with a modular React architecture, ensuring the TaskForm and TaskList components maintain structural integrity across all mobile and desktop viewports.`,
  },
  {
    id: 8,
    image: "https://iili.io/3BRNBX1.md.png",
    title: "Binary Transformation Engine",
    category: "Frontend",
    url: "https://pdf-jpg-convertor.vercel.app/",
    repo: "https://github.com/shivamsaurabh25/pdf---jpg-convertor",
    tags: ["React (Vite)", "PDF.js", "jsPDF", "Framer Motion", "Data Streams"],
    description: `A high-performance document utility engineered with React Vite for bi-directional conversion between PDF and JPG formats. This application specializes in purely client-side binary data processing, ensuring user privacy and zero-latency file handling without server dependency.

Core Architecture Modules:
Document Deconstruction Matrix: Leverages PDF.js (pdfjs-dist) to render high-fidelity document pages into HTML5 Canvas elements for image extraction.
JPG Compilation Engine: Utilizes jsPDF to orchestrate the conversion of multiple image buffers into a consolidated, high-resolution PDF document.
Animation Controller: Implements Framer Motion to manage spatial UI transitions and smooth-scroll navigation protocols.
Glassmorphism Framework: A visual design system utilizing backdrop-filters and semi-transparent layers to maintain a professional, tech-focused HUD interface.

Technical Implementation:
Client-Side Processing: Eliminates data transmission to external servers by performing all file manipulation directly in the browser's memory.
Async File Handling: Manages complex blob-to-data-URL transformations using asynchronous JavaScript to prevent UI thread blocking during large file renders.
Responsive Viewport Scaling: Engineered with flexible CSS layouts to ensure document upload and conversion tools are fully accessible across mobile, tablet, and desktop stations.`,
  },
  {
    id: 9,
    image: "https://iili.io/3oOw6lt.md.png",
    title: "Visual Discovery Nexus",
    category: "Frontend",
    url: "https://photo-gallery-by-shivam.vercel.app/",
    repo: "https://github.com/shivamsaurabh25/photo-gallery/",
    tags: [
      "React (Vite)",
      "Pexels API",
      "Context API",
      "Axios",
      "Glassmorphism",
    ],
    description: `A high-performance visual media explorer engineered with React Vite. This application interfaces with the Pexels REST API to provide a seamless gateway to millions of high-definition assets, featuring a highly refined Glassmorphism interface and advanced state management.

Core Architecture Modules:
API Orchestration Layer: Integrated with the Pexels SDK via Axios to manage high-speed asynchronous data fetching, search query processing, and media stream handling.
Global Theme Controller: Implements React Context API to manage a system-wide theme state, enabling instantaneous toggling between specialized Dark and Light mode protocols.
Dynamic Media Grid: A mathematically optimized 3-column grid system designed for consistent aspect-ratio integrity and fluid responsive scaling.
Asset Download Protocol: Features a single-action buffer system that triggers direct browser downloads for full-resolution high-quality images.

Technical Implementation:
Contextual State Management: Utilizes specialized React Context to maintain theme consistency and search parameters across the entire component tree.
Environmental Security: Leverages Vite's .env architecture to encrypt and protect sensitive API credentials during the build and deployment lifecycle.
Modern Design Language: A custom CSS-driven UI utilizing linear gradients and backdrop-blur effects to achieve a futuristic, professional HUD (Heads-Up Display) aesthetic.`,
  },
  {
    id: 10,
    image: "https://iili.io/3Yoe08J.md.png",
    title: "Cognitive Match Matrix",
    category: "Games",
    url: "https://memory-match-shivam.vercel.app/",
    repo: "https://github.com/shivamsaurabh25/memory-match/",
    tags: [
      "React.js",
      "Tailwind CSS",
      "Canvas Confetti",
      "LocalStorage",
      "State Logic",
    ],
    description: `A sophisticated logic-based memory processor engineered with React.js. This application challenges cognitive retention through a dynamic grid system, featuring complex state management for turn-tracking, match validation, and high-score persistence.

Core Architecture Modules:
Logic Validation Engine: Implements an algorithmic comparison matrix to evaluate card states, handling match confirmation and auto-reversion protocols with precise timing.
Dynamic Difficulty Controller: Features a scalable grid architect supporting four difficulty tiers (Easy to Expert), adjusting the data set size and visual density in real-time.
Persistence Vault: Utilizes the Browser LocalStorage API to architect an auto-save system and best-time tracking, ensuring user data integrity across sessions.
Visual Feedback System: Integrated with the Canvas-Confetti library and a custom sound controller to provide multi-sensory feedback upon objective completion.

Technical Implementation:
Reactive Game Loop: Leveraging React hooks (useState, useEffect) to synchronize the temporal timer with the turn counter and match-state transitions.
Responsive Grid Design: Engineered with Tailwind CSS to maintain structural integrity across diverse viewport orientations, optimized for touch and mouse interactions.
Optimized Asset Handling: Features a modular theme system allowing for instantaneous hot-swapping of visual assets (Emojis/Symbols) without re-initializing the core game logic.`,
  },
  {
    id: 11,
    image: "https://iili.io/3MhUafI.md.png",
    title: "Symmetrical Grid Logic",
    category: "Games",
    url: "https://tic-tac-toe-endless.vercel.app/",
    repo: "https://github.com/shivamsaurabh25/tic-tac-toe/",
    tags: [
      "React.js",
      "Tailwind CSS",
      "Hooks",
      "Endless Logic",
      "Glassmorphism",
    ],
    description: `A sophisticated multiplayer competitive engine built with React.js. This application moves beyond classic gameplay by implementing an "Endless" logic loop and a highly reactive state architecture, housed within a high-fidelity glowing HUD interface.

Core Architecture Modules:
Winning Pattern Matrix: Employs a multi-dimensional array scan algorithm to detect victory conditions and draws in real-time across the 3x3 coordinate system.
Endless Mode Protocol: A specialized game-loop modifier that manages seamless round transitions and cumulative score persistence without re-initializing the core board state.
Dynamic Identity Mapper: Features a custom form-driven logic layer to assign user-defined identities to Player X and Player O tokens, integrated into a real-time scoreboard.
Visual feedback System: Implements multicolor glow-field effects and CSS-driven tile-fade indicators to signal impending board resets and visual "Win" states.

Technical Implementation:
State Synchronization: Leverages advanced React hooks (useState, useEffect) to synchronize player turns, winning animations, and confetti triggers within the virtual DOM.
Modular Component Design: Engineered with a clean separation of concerns, utilizing specialized components for the BoardGame, PlayerForm, and Scoreboard modules.
High-Contrast UI: Built with Tailwind CSS, the interface features a dual-mode theme engine (Light/Dark) with glassmorphism overlays and hardware-accelerated transitions.`,
  },
  {
    id: 12,
    image: "https://iili.io/3yByguR.md.png",
    title: "AI Vibe Orchestrator",
    category: "AI + Full Stack",
    url: "https://ai-song-suggester.vercel.app/",
    repo: "https://github.com/shivamsaurabh25/ai-song-suggester/",
    tags: ["React.js", "Gemini 1.5", "Spotify API", "Node.js", "Tailwind"],
    description: `A sophisticated multimodal AI application that bridges visual recognition and auditory curation. This project leverages the Google Gemini 1.5 Flash model to perform deep semantic analysis of images, translating visual "vibes" into targeted musical queries.

Core Architecture Modules:
Visual Perception Layer: Integrated with the Gemini Vision API to deconstruct user-uploaded images into emotional and environmental metadata.
Linguistic Transformer: A specialized prompt-engineering module that synthesizes AI descriptions and user language preferences into optimized Spotify search parameters.
Secure API Proxy: A custom-built Node.js backend architecture that handles Spotify OAuth 2.0 and Gemini handshakes, masking sensitive credentials from the client-side.
Adaptive UI Matrix: A responsive React interface utilizing HeroIcons and Tailwind CSS, featuring high-fidelity dark/light mode protocols for optimal user immersion.

Technical Implementation:
Multimodal Data Stream: Manages complex Base64 image encoding and transmission to AI endpoints without compromising browser performance.
Identity-Free Frontend: Designed as a "Zero-Config" user experience where API complexity is entirely abstracted to the server-side logic.
Spotify Integration: Leverages the Spotify Web API Reference to fetch high-resolution album metadata and track previews based on AI-generated intent.`,
  },
  {
    id: 13,
    image: "https://iili.io/f614bYG.md.png",
    title: "Service Management Nexus",
    category: "Java + Cloud",
    url: "",
    repo: "https://github.com/shivamsaurabh25/ServiceManagementApp",
    tags: ["JavaFX", "MongoDB Atlas", "Maven", "SHA-256", "CSS3"],
    description: `A sophisticated, cloud-connected enterprise resource planning (ERP) system developed for your 3rd-year major project. This application utilizes a modern JavaFX frontend and a MongoDB Atlas backend to orchestrate real-time service requests between users and providers within a secure, role-based ecosystem.

Core Architecture Modules:
Cloud-Sync Engine: Interfaces directly with MongoDB Atlas (Global Cluster) for persistent, real-time data synchronization across distributed clients.
Security Cryptosystem: Implements a high-entropy SHA-256 hashing algorithm for credential protection, ensuring a zero-knowledge password storage protocol.
Identity Orchestrator: Features complex role-based access control (RBAC), dynamically rendering specialized dashboards for 'Users', 'Providers', and 'Administrators'.
UX Animation Layer: A high-fidelity JavaFX interface utilizing custom CSS for Glassmorphism effects, integrated with a multi-sensory (Audio + Visual) startup sequence.

Technical Implementation:
Dependency Management: Orchestrated via Apache Maven to manage the complex lifecycle of JavaFX modules and MongoDB driver integrations.
Session Persistence: Employs a dedicated Session Management logic to track active user states, preventing unauthorized access to protected dashboard views.
Enterprise Utilities: Includes specialized sub-systems for PDF automated reporting, Email dispatch protocols, and asynchronous UI thread handling (FXUtils).`,
  },
];

const Projects = () => {
  const [activeOverlay, setActiveOverlay] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");
  const filteredProjects =
    activeFilter === "All"
      ? projectData
      : projectData.filter((p) => p.category === activeFilter);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1200);
  }, []);

  const ProjectSkeleton = () => (
    <div className="h-[320px] md:h-[440px] rounded-[2.5rem] skeleton border border-card" />
  );

  return (
    <section
      id="projects"
      className="relative py-24 md:py-40 px-4 md:px-6 bg-surface text-primary transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto">
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 md:mb-32"
        >
          <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.6em] accent block mb-4 font-black">
            / Deployments
          </span>

          <h2 className="text-5xl sm:text-6xl md:text-8xl xl:text-9xl font-black italic uppercase tracking-tighter leading-[0.9]">
            Selected <br />
            <span className="text-stroke">Works</span>
          </h2>
        </motion.div>

        <div className="flex flex-wrap gap-3 mb-16">
          {[
            "All",
            "Frontend",
            "Games",
            "Utility",
            "AI + Full Stack",
            "Java + Cloud",
          ].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-full text-xs uppercase font-black tracking-widest transition
        ${
          activeFilter === cat
            ? "accent-bg text-white"
            : "border border-card hover:accent-bg hover:text-white"
        }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ================= GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => (
                <ProjectSkeleton key={i} />
              ))
            : filteredProjects.map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="group relative"
                  onClick={() =>
                    setActiveOverlay(
                      activeOverlay === project.id ? null : project.id,
                    )
                  }
                >
                  <div className="relative w-full h-[320px] md:h-[440px] rounded-[2rem] md:rounded-[2.5rem] border border-card bg-card overflow-hidden transition-all duration-500 hover:shadow-2xl">
                    {/* IMAGE */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className={`absolute inset-0 w-auto h-[300px]  transition-all duration-700 
                  group-hover:scale-110 
                  ${activeOverlay === project.id ? "scale-110 blur-sm" : ""}`}
                    />

                    {/* HOVER / TAP OVERLAY */}
                    <div
                      className={`absolute inset-0 z-20 flex items-center justify-center gap-4 bg-black/50 backdrop-blur-md transition-all duration-500
                  ${
                    activeOverlay === project.id
                      ? "opacity-100"
                      : "opacity-0 lg:group-hover:opacity-100"
                  }`}
                    >
                      {project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          onClick={(e) => e.stopPropagation()}
                          className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center shadow-xl hover:scale-110 transition"
                        >
                          <FaExternalLinkAlt />
                        </a>
                      )}
                      <a
                        href={project.repo}
                        target="_blank"
                        onClick={(e) => e.stopPropagation()}
                        className="w-12 h-12 rounded-full accent-bg text-white flex items-center justify-center shadow-xl hover:scale-110 transition"
                      >
                        <FaGithub />
                      </a>
                    </div>

                    {/* INFO */}
                    <div className="absolute bottom-0 left-0 right-0 z-10 p-6 md:p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                      <span className="font-mono text-[9px] uppercase tracking-widest accent font-black block mb-1">
                        {project.category}
                      </span>
                      <h4 className="text-lg md:text-2xl font-black italic uppercase truncate">
                        {project.title}
                      </h4>
                    </div>

                    {/* DETAILS BUTTON */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project);
                      }}
                      className="absolute top-4 right-4 z-30 w-10 h-10 md:w-12 md:h-12 rounded-full accent-bg text-white flex items-center justify-center shadow-lg hover:scale-110 transition"
                    >
                      <FaArrowRight className="-rotate-45" />
                    </button>
                  </div>
                </motion.div>
              ))}
        </div>

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
                initial={{ opacity: 0, scale: 0.95, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 40 }}
                className="relative w-full max-w-6xl max-h-[90vh] overflow-hidden rounded-[2rem] md:rounded-[3rem] bg-card border border-card shadow-2xl flex flex-col lg:flex-row"
              >
                {/* CLOSE */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full accent-bg text-white flex items-center justify-center"
                >
                  <FaTimes />
                </button>

                {/* LEFT */}
                <div className="w-full lg:w-3/5 border-b lg:border-b-0 lg:border-r border-card">
                  <img
                    src={selectedProject.image}
                    className="w-full h-60 md:h-96 object-cover"
                    alt="Preview"
                  />
                  <div className="p-6 md:p-10">
                    <span className="font-mono text-xs uppercase tracking-widest accent block mb-2">
                      {selectedProject.category}
                    </span>
                    <h2 className="text-3xl md:text-5xl font-black italic uppercase mb-6">
                      {selectedProject.title}
                    </h2>

                    <div className="flex flex-wrap gap-4">
                      {selectedProject.url && (
                        <a
                          href={selectedProject.url}
                          target="_blank"
                          className="px-6 py-3 rounded-xl accent-bg text-white text-xs uppercase font-black tracking-widest"
                        >
                          Live
                        </a>
                      )}
                      <a
                        href={selectedProject.repo}
                        target="_blank"
                        className="px-6 py-3 rounded-xl border border-card text-xs uppercase font-black tracking-widest hover:accent-bg hover:text-white transition"
                      >
                        GitHub
                      </a>
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
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-md bg-indigo-600/10 border border-indigo-600/20 text-indigo-500 font-mono text-[10px] uppercase"
                        >
                          {tag}
                        </span>
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
