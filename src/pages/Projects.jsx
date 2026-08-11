import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaSearch, FaCode, FaLaptopCode, FaLayerGroup, FaStar } from "react-icons/fa";

const projectData = [
  {
    id: 1,
    title: "Abhay Foundation (NGO)",
    category: "Full Stack",
    image: "https://iili.io/BQ90OYX.png",
    url: "https://www.foundationabhay.org/",
    repo: "https://github.com/MdHuzaifa018/Abhay-Foundation",
    featured: true,
    tags: ["Next.js", "Node.js", "Firebase", "SSR", "REST APIs"],
    description: "A full-stack web application built for a non-profit NGO. Features Next.js SSR for high performance and SEO, Node.js backend logic, and Firebase for real-time authentication and secure cloud database storage.",
    metrics: "100% Production Ready • NGO Live"
  },
  {
    id: 2,
    title: "Code Crafter (EdTech)",
    category: "Frontend",
    image: "https://iili.io/BLy5HyQ.webp",
    url: "https://code-crafter-web.vercel.app/",
    repo: "https://github.com/MdHuzaifa018/Code-Crafter.git",
    featured: true,
    tags: ["HTML5", "CSS3", "JavaScript", "Animations", "Vercel"],
    description: "An intuitive educational platform to discover lecture notes, curated YouTube playlists, and coding tutorials. Features instant search filtering and mobile-first responsive design.",
    metrics: "500+ Active Learners"
  },
  {
    id: 3,
    title: "NAJTECH Platform",
    category: "Full Stack",
    image: "https://iili.io/BQ90hEN.png", 
    url: "https://naj-tech-website.vercel.app/",
    repo: "https://github.com/MdHuzaifa018/NAJ-TECH",
    featured: false,
    tags: ["HTML", "CSS", "JavaScript", "MongoDB", "Express"],
    description: "Responsive web platform for educational course management. Features user registration, course enrollment dashboard, and MongoDB Atlas database integration.",
    metrics: "Course Dashboard"
  },
  {
    id: 4,
    title: "Atmospheric Intelligence",
    category: "Frontend",
    image: "https://iili.io/BQ90Mhv.png",
    url: "https://weather-tracker-app.vercel.app/",
    repo: "https://github.com/MdHuzaifa018/Weather-App",
    featured: false,
    tags: ["React.js", "OpenWeather API", "Tailwind CSS", "Glassmorphism"],
    description: "Real-time meteorological monitoring app. Combines asynchronous OpenWeather API fetching with an elegant glassmorphism UI for global weather tracking.",
    metrics: "Live Weather API"
  },
  {
    id: 5,
    title: "Interactive Portfolio v4",
    category: "Frontend",
    image: "https://iili.io/BQ901pa.png",
    url: "https://divyanshbhadauriya-portfolio.vercel.app/",
    repo: "https://github.com/MdHuzaifa018/Latest-Portfolio-Huzaif-Sheikh",
    featured: false,
    tags: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    description: "Modern developer portfolio featuring 3D tilt cards, kinetic letter-by-letter reveal animations, native dark/light mode toggle, and sticky WhatsApp chat.",
    metrics: "Kinetic UI Architecture"
  },
  {
    id: 6,
    title: "Task Master Pro (Kanban App)",
    category: "Full Stack",
    image: "https://iili.io/BQ90OYX.png",
    url: "https://task-master-pro.vercel.app/",
    repo: "https://github.com/MdHuzaifa018/Task-Master-Pro",
    featured: false,
    tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
    description: "Real-time task management system featuring drag-and-drop Kanban workflow boards, team member collaboration, and automated status notifications.",
    metrics: "Kanban Board • Full Stack"
  },
  {
    id: 7,
    title: "VibeStream (Video Player App)",
    category: "Frontend",
    image: "https://iili.io/BLy5HyQ.webp",
    url: "https://vibestream-app.vercel.app/",
    repo: "https://github.com/MdHuzaifa018/VibeStream-App",
    featured: false,
    tags: ["React.js", "Tailwind CSS", "YouTube API", "Framer Motion"],
    description: "Feature-rich video streaming web app with custom video players, category feeds, live search, and dark glassmorphism design.",
    metrics: "Streaming UI • API Powered"
  },
  {
    id: 8,
    title: "RestoServe (Backend API Suite)",
    category: "Backend",
    image: "https://iili.io/BQ90hEN.png",
    url: "https://restoserve-api.vercel.app/",
    repo: "https://github.com/MdHuzaifa018/RestoServe-Backend",
    featured: false,
    tags: ["Node.js", "Express.js", "MongoDB", "JWT Auth", "REST API"],
    description: "High-throughput backend RESTful API suite for restaurant table reservations, order tracking pipelines, and automated inventory management.",
    metrics: "RESTful API • Node/Express"
  },
  {
    id: 9,
    title: "DevConnect (Developer Network)",
    category: "Full Stack",
    image: "https://iili.io/BQ90Mhv.png",
    url: "https://devconnect-community.vercel.app/",
    repo: "https://github.com/MdHuzaifa018/DevConnect-Community",
    featured: false,
    tags: ["MERN Stack", "Redux Toolkit", "Socket.io", "Tailwind"],
    description: "Social networking platform for web developers to share code snippets, collaborate on open-source projects, and chat in real-time.",
    metrics: "Real-Time Community"
  },
];

const filters = ["All", "Full Stack", "Frontend", "Backend"];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const featuredProject = projectData.find(p => p.featured) || projectData[0];

  const filteredProjects = projectData.filter((project) => {
    const matchesFilter = activeFilter === "All" || project.category === activeFilter;
    const matchesSearch = 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen pt-28 pb-24 px-4 md:px-8 lg:px-12 bg-transparent transition-colors duration-500 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        
        {/* 1. Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="flex flex-col gap-4">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.3em] text-blue-500">
              / SELECTED_WORKS
            </span>
            <h1 className="text-4xl md:text-6xl font-black italic uppercase text-slate-900 dark:text-slate-50 transition-colors duration-500">
              Selected <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-400">Projects</span>
            </h1>
            <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-xl transition-colors duration-500">
              Production-ready web applications built with modern frontend frameworks, backend architecture, and clean UI engineering.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
            <input
              type="text"
              placeholder="Search projects or tech..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white dark:bg-[#111111] border border-black/5 dark:border-white/10 text-sm font-medium outline-none focus:border-blue-500 text-slate-900 dark:text-slate-100 transition-all shadow-md"
            />
          </div>
        </div>

        {/* 2. Featured Project Spotlight Card */}
        {featuredProject && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 rounded-[2.5rem] bg-white dark:bg-[#111111] border border-black/5 dark:border-white/10 shadow-2xl relative overflow-hidden group grid lg:grid-cols-12 gap-8 items-center"
          >
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

            {/* Left Image Preview */}
            <div className="lg:col-span-7 relative rounded-2xl overflow-hidden border border-black/5 dark:border-white/10 shadow-xl group">
              {/* Browser Window Header */}
              <div className="h-8 bg-slate-100 dark:bg-[#1a1a1a] px-4 flex items-center gap-2 border-b border-black/5 dark:border-white/10">
                <span className="w-3 h-3 rounded-full bg-red-400" />
                <span className="w-3 h-3 rounded-full bg-yellow-400" />
                <span className="w-3 h-3 rounded-full bg-green-400" />
                <span className="text-[10px] font-mono text-slate-400 ml-2">{featuredProject.url || "https://github.com/MdHuzaifa018"}</span>
              </div>
              <img
                src={featuredProject.image}
                alt={featuredProject.title}
                className="w-full aspect-[16/10] object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Right Details */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-6 relative z-10">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-blue-500/10 text-blue-500 border border-blue-500/20">
                    ★ Featured Project
                  </span>
                  <span className="text-xs font-mono text-slate-400">• {featuredProject.category}</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-black italic uppercase text-slate-900 dark:text-slate-50">
                  {featuredProject.title}
                </h2>

                <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                  {featuredProject.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {featuredProject.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-lg text-xs font-mono font-bold bg-slate-100 dark:bg-[#1a1a1a] text-slate-700 dark:text-slate-300">
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Both Buttons: Live Demo + GitHub */}
              <div className="flex flex-wrap gap-4 pt-4 border-t border-black/5 dark:border-white/10">
                {featuredProject.url && (
                  <a
                    href={featuredProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold uppercase tracking-widest text-xs bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/20 hover:scale-105 transition-transform"
                  >
                    Live Demo <FaExternalLinkAlt />
                  </a>
                )}
                <a
                  href={featuredProject.repo || "https://github.com/MdHuzaifa018"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold uppercase tracking-widest text-xs bg-slate-100 dark:bg-[#1a1a1a] text-slate-900 dark:text-white border border-black/5 dark:border-white/10 hover:border-blue-500 hover:scale-105 transition-transform"
                >
                  GitHub Code <FaGithub />
                </a>
              </div>
            </div>
          </motion.div>
        )}

        {/* 3. Category Filter Tabs */}
        <div className="flex flex-wrap justify-between items-center gap-4 pt-8 border-t border-black/5 dark:border-white/10">
          <h3 className="text-xl font-black italic uppercase text-slate-900 dark:text-slate-50">
            All Repositories ({filteredProjects.length})
          </h3>
          <div className="flex flex-wrap gap-2">
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/30"
                    : "bg-white dark:bg-[#111111] text-slate-600 dark:text-slate-400 border border-black/5 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-[#1a1a1a]"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* 4. Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 rounded-[2rem] bg-white dark:bg-[#111111] border border-black/5 dark:border-white/10 shadow-xl flex flex-col justify-between gap-6 group hover:-translate-y-2 transition-all duration-300"
              >
                {/* Browser Frame Window */}
                <div className="rounded-xl overflow-hidden border border-black/5 dark:border-white/10 shadow-md">
                  {/* Browser Bar */}
                  <div className="h-7 bg-slate-100 dark:bg-[#1a1a1a] px-3 flex items-center justify-between border-b border-black/5 dark:border-white/10">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                      <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                    </div>
                    <span className="text-[10px] font-mono text-slate-400 truncate max-w-[200px]">
                      {project.url || "github.com/MdHuzaifa018"}
                    </span>
                  </div>
                  
                  {/* Project Image */}
                  <div className="relative aspect-[16/9] overflow-hidden bg-slate-100 dark:bg-[#1a1a1a]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-blue-500/10 text-blue-500">
                      • {project.category}
                    </span>
                    <span className="text-xs font-mono text-slate-400">{project.metrics}</span>
                  </div>

                  <h3 className="text-2xl font-black italic uppercase text-slate-900 dark:text-slate-50">
                    {project.title}
                  </h3>

                  <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-slate-100 dark:bg-[#1a1a1a] text-slate-600 dark:text-slate-400">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* BOTH BUTTONS: Live Demo + GitHub */}
                <div className="flex items-center gap-3 pt-4 border-t border-black/5 dark:border-white/10">
                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold uppercase tracking-widest text-xs bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md hover:scale-[1.02] transition-transform"
                    >
                      Live Demo <FaExternalLinkAlt size={12} />
                    </a>
                  ) : (
                    <span className="flex-1 text-center text-xs font-mono text-slate-400 py-3 bg-slate-100 dark:bg-[#1a1a1a] rounded-xl">
                      Live Preview N/A
                    </span>
                  )}

                  <a
                    href={project.repo || "https://github.com/MdHuzaifa018"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold uppercase tracking-widest text-xs bg-slate-100 dark:bg-[#1a1a1a] text-slate-900 dark:text-white border border-black/5 dark:border-white/10 hover:border-blue-500 hover:scale-[1.02] transition-transform"
                  >
                    GitHub <FaGithub size={14} />
                  </a>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* 5. GitHub Open Source Banner */}
        <div className="p-8 md:p-12 rounded-[2.5rem] bg-white dark:bg-[#111111] border border-black/5 dark:border-white/10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl md:text-3xl font-black italic uppercase text-slate-900 dark:text-slate-50">
              Want to see more <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-400">Open Source Code?</span>
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Check out my GitHub profile for open-source contributions, repositories, and experimental projects.
            </p>
          </div>
          <a
            href="https://github.com/MdHuzaifa018"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-xs bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-xl hover:scale-105 transition-transform shrink-0 flex items-center gap-2"
          >
            Visit GitHub <FaGithub size={16} />
          </a>
        </div>

      </div>
    </div>
  );
};

export default Projects;
