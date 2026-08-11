import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import { 
  FaArrowRight, FaCode, FaLaptopCode, FaServer, FaDatabase, FaExternalLinkAlt, 
  FaGithub, FaDownload, FaEnvelope, FaLayerGroup, FaCheckCircle, FaGraduationCap, 
  FaBriefcase, FaReact, FaNodeJs, FaJs, FaPython, FaGitAlt
} from 'react-icons/fa';
import { 
  SiExpress, SiMongodb, SiTailwindcss, SiFirebase, SiPostman, SiVercel, SiGooglecloud 
} from 'react-icons/si';
import AnimatedCounter from '../components/AnimatedCounter';
import Resume from '../assets/Resume.pdf';

const primaryTechStack = [
  { name: "React 19", icon: <FaReact className="text-[#61DAFB]" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
  { name: "Express.js", icon: <SiExpress className="text-slate-800 dark:text-white" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
  { name: "JavaScript ES6+", icon: <FaJs className="text-[#F7DF1E]" /> },
  { name: "Tailwind CSS v4", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
  { name: "Python", icon: <FaPython className="text-[#3776AB]" /> },
  { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" /> },
  { name: "REST APIs", icon: <FaServer className="text-teal-500" /> },
  { name: "Git & GitHub", icon: <FaGitAlt className="text-[#F05032]" /> },
];

const featuredCaseStudies = [
  {
    id: 1,
    title: "Abhay Foundation (NGO)",
    url: "https://www.foundationabhay.org/",
    repo: "https://github.com/MdHuzaifa018/Abhay-Foundation",
    desc: "A full-stack NGO platform engineered using Next.js (SSR), Node.js, and Firebase featuring secure donor workflows, real-time database updates, and admin control panels.",
    tags: ["Next.js", "Node.js", "Firebase", "SSR", "REST APIs"]
  },
  {
    id: 2,
    title: "Code Crafter Platform",
    url: "https://code-crafter-web.vercel.app/",
    repo: "https://github.com/MdHuzaifa018/Code-Crafter.git",
    desc: "An intuitive educational notes and curated video lecture platform with instant search filtering, responsive mobile design, and Framer Motion animations.",
    tags: ["HTML5", "CSS3", "JavaScript", "Vercel", "Animations"]
  },
  {
    id: 3,
    title: "Atmospheric Intelligence",
    url: "https://weather-tracker-app.vercel.app/",
    repo: "https://github.com/MdHuzaifa018/Weather-App",
    desc: "Real-time meteorological tracking pipeline built with React, OpenWeatherMap API, and glassmorphism UI for live global weather visualization.",
    tags: ["React", "OpenWeather API", "Tailwind CSS", "Glassmorphism"]
  }
];

const Home = () => {
  const [repoCount, setRepoCount] = useState(25);

  useEffect(() => {
    fetch("https://api.github.com/users/MdHuzaifa018")
      .then((res) => res.json())
      .then((data) => {
        if (data.public_repos) setRepoCount(data.public_repos);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="flex flex-col w-full bg-transparent transition-colors duration-500 font-sans">
      
      {/* 1. HERO SECTION */}
      <Hero />

      {/* 2. KEY METRICS BANNER */}
      <section className="py-12 border-y border-black/5 dark:border-white/10 bg-white/50 dark:bg-[#111111]/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-black/5 dark:divide-white/10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col items-center gap-1">
            <h3 className="text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-400">
              <AnimatedCounter to={15} suffix="+" />
            </h3>
            <p className="text-xs font-mono font-bold uppercase tracking-widest text-slate-500">Projects Built</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="flex flex-col items-center gap-1">
            <h3 className="text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
              <AnimatedCounter to={1} suffix="+" />
            </h3>
            <p className="text-xs font-mono font-bold uppercase tracking-widest text-slate-500">Years Experience</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="flex flex-col items-center gap-1">
            <h3 className="text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500">
              <AnimatedCounter to={repoCount} suffix="+" />
            </h3>
            <p className="text-xs font-mono font-bold uppercase tracking-widest text-slate-500">Public Repositories</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="flex flex-col items-center gap-1">
            <h3 className="text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500">
              <AnimatedCounter to={3} suffix="+" />
            </h3>
            <p className="text-xs font-mono font-bold uppercase tracking-widest text-slate-500">Certifications</p>
          </motion.div>
        </div>
      </section>

      {/* 3. TARGET ENGINEERING STANDARDS BANNER */}
      <section className="py-16 px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto p-8 md:p-12 rounded-[2.5rem] bg-white dark:bg-[#111111] border border-black/5 dark:border-white/10 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex flex-col gap-2 max-w-xl">
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.3em] text-blue-500">
              TARGET ENGINEERING STANDARDS
            </span>
            <h3 className="text-xl md:text-2xl font-black text-slate-900 dark:text-slate-50 leading-snug">
              Prepared for high-impact software roles at leading tech organizations.
            </h3>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-500 font-mono text-sm font-bold text-slate-600 dark:text-slate-400">
            <span>Google</span>
            <span>Microsoft</span>
            <span>Meta</span>
            <span>Apple</span>
            <span>OpenAI</span>
            <span>Stripe</span>
            <span>Vercel</span>
            <span>Linear</span>
            <span>Framer</span>
          </div>
        </div>
      </section>

      {/* 4. PRIMARY TECHNOLOGIES SECTION */}
      <section className="py-16 px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-black italic uppercase text-slate-900 dark:text-slate-50">
                Primary <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-400">Technologies</span>
              </h2>
              <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 mt-1">
                Production-grade languages, backend frameworks, and relational/NoSQL databases.
              </p>
            </div>

            <Link 
              to="/skills" 
              className="text-xs font-mono font-bold uppercase tracking-wider text-blue-500 hover:text-cyan-400 flex items-center gap-1.5 transition-colors shrink-0"
            >
              See All 20+ Skills <FaArrowRight size={10} />
            </Link>
          </div>

          {/* Tech Pills */}
          <div className="flex flex-wrap gap-3">
            {primaryTechStack.map((tech) => (
              <span 
                key={tech.name} 
                className="flex items-center gap-2.5 px-5 py-3 rounded-2xl text-xs font-mono font-bold bg-white dark:bg-[#111111] border border-black/5 dark:border-white/10 shadow-md text-slate-800 dark:text-slate-200 hover:border-blue-500/40 transition-colors"
              >
                <span className="text-base">{tech.icon}</span>
                <span>{tech.name}</span>
              </span>
            ))}
          </div>

        </div>
      </section>

      {/* 5. ENGINEERING VALUE ADDED (3 Cards) */}
      <section className="py-16 px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          
          <div>
            <h2 className="text-3xl md:text-4xl font-black italic uppercase text-slate-900 dark:text-slate-50">
              Engineering <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-400">Value Added</span>
            </h2>
            <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 mt-1">
              Combining robust backend fundamentals with product-oriented frontend delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-[2rem] bg-white dark:bg-[#111111] border border-black/5 dark:border-white/10 shadow-xl flex flex-col gap-5 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-500 flex items-center justify-center text-xl">
                <FaServer />
              </div>
              <h3 className="text-xl font-black italic uppercase text-slate-900 dark:text-slate-50">
                Scalable Backend Systems
              </h3>
              <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Expertise architecting modular Node.js & Express REST backends optimized for clean data flow, low query latency, and high resilience.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 rounded-[2rem] bg-white dark:bg-[#111111] border border-black/5 dark:border-white/10 shadow-xl flex flex-col gap-5 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center text-xl">
                <FaCode />
              </div>
              <h3 className="text-xl font-black italic uppercase text-slate-900 dark:text-slate-50">
                Modern Frontend Delivery
              </h3>
              <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Crafting responsive, zero-layout-shift single-page applications utilizing React 19, Tailwind CSS v4, and buttery Framer Motion animations.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-8 rounded-[2rem] bg-white dark:bg-[#111111] border border-black/5 dark:border-white/10 shadow-xl flex flex-col gap-5 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center text-xl">
                <FaDatabase />
              </div>
              <h3 className="text-xl font-black italic uppercase text-slate-900 dark:text-slate-50">
                Database Modeling & Security
              </h3>
              <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Proficient in MongoDB schema modeling, indexing, query optimization, and secure industry authentication standards (JWT, Firebase Auth).
              </p>
            </motion.div>
          </div>

        </div>
      </section>

      {/* 6. FEATURED CASE STUDIES (Projects Preview Grid) */}
      <section className="py-16 px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-black italic uppercase text-slate-900 dark:text-slate-50">
                Featured <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-400">Case Studies</span>
              </h2>
              <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 mt-1">
                Select technical implementations architected from ground up.
              </p>
            </div>

            <Link 
              to="/projects" 
              className="text-xs font-mono font-bold uppercase tracking-wider text-blue-500 hover:text-cyan-400 flex items-center gap-1.5 transition-colors shrink-0"
            >
              All Repositories ({repoCount}+) <FaArrowRight size={10} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredCaseStudies.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-[2rem] bg-white dark:bg-[#111111] border border-black/5 dark:border-white/10 shadow-xl flex flex-col justify-between gap-6 group hover:-translate-y-2 transition-all duration-300"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-black italic uppercase text-slate-900 dark:text-slate-50 flex items-center gap-2">
                      {project.title}
                    </h3>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-blue-500 transition-colors"
                      title="Open Live App"
                    >
                      <FaExternalLinkAlt size={14} />
                    </a>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {project.desc}
                  </p>
                </div>

                <div className="flex flex-col gap-4 pt-4 border-t border-black/5 dark:border-white/10">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-0.5 rounded-md text-[10px] font-mono bg-slate-100 dark:bg-[#1a1a1a] text-slate-600 dark:text-slate-400">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center py-2.5 rounded-xl font-bold uppercase tracking-wider text-[11px] bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-sm hover:scale-[1.02] transition-transform"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-slate-100 dark:bg-[#1a1a1a] text-slate-900 dark:text-white border border-black/5 dark:border-white/10 hover:border-blue-500 hover:scale-105 transition-transform"
                      title="View GitHub Code"
                    >
                      <FaGithub size={14} />
                    </a>
                  </div>
                </div>

              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. BACKGROUND HIGHLIGHTS SECTION (2 Cards) */}
      <section className="py-16 px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-black italic uppercase text-slate-900 dark:text-slate-50">
                Background <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-400">Highlights</span>
              </h2>
              <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 mt-1">
                Academic grounding coupled with hands-on commercial web platform delivery.
              </p>
            </div>

            <Link 
              to="/about" 
              className="text-xs font-mono font-bold uppercase tracking-wider text-blue-500 hover:text-cyan-400 flex items-center gap-1.5 transition-colors shrink-0"
            >
              See Full Timeline <FaArrowRight size={10} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Education Highlight Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-[2rem] bg-white dark:bg-[#111111] border border-black/5 dark:border-white/10 shadow-xl flex flex-col justify-between gap-6"
            >
              <div className="flex flex-col gap-3">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-blue-500">
                  EDUCATION • 2024 - PRESENT
                </span>
                <h3 className="text-2xl font-black text-slate-900 dark:text-slate-50">
                  Bachelor of Computer Applications (BCA)
                </h3>
                <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Patliputra University, Patna. Focused on core computer science concepts, RDBMS database management, object-oriented programming paradigms in C/C++/Python, and networking principles.
                </p>
              </div>
            </motion.div>

            {/* Commercial Delivery Highlight Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 rounded-[2rem] bg-white dark:bg-[#111111] border border-black/5 dark:border-white/10 shadow-xl flex flex-col justify-between gap-6"
            >
              <div className="flex flex-col gap-3">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-green-500">
                  COMMERCIAL DELIVERY • 2025 - PRESENT
                </span>
                <h3 className="text-2xl font-black text-slate-900 dark:text-slate-50">
                  Full Stack & MERN Stack Engineer
                </h3>
                <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Architected and deployed full-stack systems including Abhay Foundation (NGO) & Code Crafter using React.js, Node.js, Express, MongoDB, and responsive Tailwind CSS interfaces.
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* 8. READY TO BUILD IMPACTFUL SOFTWARE CTA BANNER */}
      <section className="py-20 px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full rounded-[3rem] p-10 md:p-20 text-center flex flex-col items-center gap-8 border shadow-2xl relative overflow-hidden transition-all duration-500 bg-gradient-to-r from-blue-600 to-cyan-500 text-white"
          >
            {/* Background Glow Overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent pointer-events-none" />

            <h2 className="text-4xl md:text-6xl font-black italic uppercase leading-tight relative z-10">
              Ready to Build <br /> Impactful Software?
            </h2>
            <p className="text-sm md:text-base max-w-2xl mx-auto relative z-10 opacity-90 leading-relaxed font-medium">
              Looking for a dedicated MERN Stack developer or Full Stack engineer for your core team? Let's discuss how my expertise in React and Node.js can accelerate your delivery.
            </p>

            <div className="flex flex-wrap justify-center gap-4 relative z-10 pt-2">
              <Link 
                to="/contact" 
                className="px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-xs bg-white text-slate-900 shadow-xl hover:scale-105 transition-all flex items-center gap-2"
              >
                Get In Touch Today <FaEnvelope />
              </Link>
              <a 
                href={Resume} 
                download="Huzaif_Sheikh_Resume"
                className="px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-xs bg-slate-900/80 backdrop-blur-md text-white border border-white/20 shadow-xl hover:scale-105 transition-all flex items-center gap-2"
              >
                Download Resume <FaDownload />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Home;
