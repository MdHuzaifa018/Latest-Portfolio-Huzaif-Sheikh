import React from "react";
import { motion } from "framer-motion";
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub, FaCheckCircle, 
  FaLaptopCode, FaServer, FaDatabase, FaTools, FaPython, FaUsers, FaClock, 
  FaLightbulb, FaProjectDiagram, FaGitAlt 
} from "react-icons/fa";
import { 
  SiTailwindcss, SiBootstrap, SiExpress, SiMongodb, SiFirebase, SiRazorpay, 
  SiPostman, SiVercel, SiCplusplus, SiC, SiMarkdown, SiFramer 
} from "react-icons/si";

const Skills = () => {
  const skillCategories = [
    {
      title: "Front-end Development",
      icon: <FaLaptopCode />,
      badge: "User Interface",
      description: "Building modern, responsive web interfaces with strong foundational languages and modern frameworks.",
      skills: [
        { name: "React.js", icon: <FaReact className="text-[#61DAFB]" />, percentage: 92 },
        { name: "JavaScript", icon: <FaJs className="text-[#F7DF1E]" />, percentage: 90 },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" />, percentage: 94 },
        { name: "Bootstrap", icon: <SiBootstrap className="text-[#7952B3]" />, percentage: 85 },
        { name: "HTML5", icon: <FaHtml5 className="text-[#E34F26]" />, percentage: 95 },
        { name: "CSS3", icon: <FaCss3Alt className="text-[#1572B6]" />, percentage: 92 },
      ]
    },
    {
      title: "Back-end & Databases",
      icon: <FaDatabase />,
      badge: "Server & Data",
      description: "Architecting scalable backend logic, processing data, and optimizing queries across relational and NoSQL databases.",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" />, percentage: 88 },
        { name: "Express.js", icon: <SiExpress className="text-gray-700 dark:text-gray-300" />, percentage: 86 },
        { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" />, percentage: 88 },
        { name: "SQL", icon: <FaDatabase className="text-[#003B57]" />, percentage: 85 },
        { name: "Python", icon: <FaPython className="text-[#3776AB]" />, percentage: 80 },
      ]
    },
    {
      title: "APIs & Tools",
      icon: <FaTools />,
      badge: "Integration",
      description: "Integrating third-party services and utilizing industry-standard tools for development and deployment.",
      skills: [
        { name: "RESTful APIs", icon: <FaServer className="text-teal-500" />, percentage: 92 },
        { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" />, percentage: 85 },
        { name: "Razorpay", icon: <SiRazorpay className="text-[#02042B]" />, percentage: 80 },
        { name: "Git & GitHub", icon: <FaGithub className="text-gray-800 dark:text-white" />, percentage: 90 },
        { name: "VS Code & Postman", icon: <FaLaptopCode className="text-[#007ACC]" />, percentage: 95 },
      ]
    },
    {
      title: "Soft Skills",
      icon: <FaUsers />,
      badge: "Professional",
      description: "Effective communication, strategic thinking, and collaborative problem solving in team environments.",
      skills: [
        { name: "Problem-Solving", icon: <FaLightbulb className="text-amber-500" />, percentage: 95 },
        { name: "Leadership", icon: <FaProjectDiagram className="text-purple-500" />, percentage: 85 },
        { name: "Time Management", icon: <FaClock className="text-blue-500" />, percentage: 90 },
        { name: "Collaboration", icon: <FaUsers className="text-green-500" />, percentage: 95 },
      ]
    }
  ];

  const highlights = [
    "Full Stack Developer",
    "MERN Stack Specialist",
    "REST API Integration",
    "Database Management",
    "Problem Solving"
  ];

  const marqueeRow1 = [
    { name: "EXPRESS.JS", icon: <SiExpress className="text-[#000000] dark:text-white" /> },
    { name: "MONGODB", icon: <SiMongodb className="text-[#47A248]" /> },
    { name: "FIREBASE", icon: <SiFirebase className="text-[#FFCA28]" /> },
    { name: "VERCEL", icon: <SiVercel className="text-slate-900 dark:text-white" /> },
    { name: "JAVASCRIPT", icon: <FaJs className="text-[#F7DF1E]" /> },
    { name: "TAILWIND CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
    { name: "FRAMER MOTION", icon: <SiFramer className="text-[#0055FF]" /> },
    { name: "PYTHON", icon: <FaPython className="text-[#3776AB]" /> },
    { name: "C++", icon: <SiCplusplus className="text-[#00599C]" /> },
    { name: "C", icon: <SiC className="text-[#A8B9CC]" /> },
    { name: "GIT", icon: <FaGitAlt className="text-[#F05032]" /> },
    { name: "GITHUB", icon: <FaGithub className="text-slate-900 dark:text-white" /> },
    { name: "MARKDOWN", icon: <SiMarkdown className="text-blue-400" /> },
    { name: "VS CODE", icon: <FaLaptopCode className="text-[#007ACC]" /> },
    { name: "HTML5", icon: <FaHtml5 className="text-[#E34F26]" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-[#1572B6]" /> },
    { name: "REACT", icon: <FaReact className="text-[#61DAFB]" /> },
    { name: "NODE.JS", icon: <FaNodeJs className="text-[#339933]" /> },
  ];

  const marqueeRow2 = [
    { name: "REACT", icon: <FaReact className="text-[#61DAFB]" /> },
    { name: "NODE.JS", icon: <FaNodeJs className="text-[#339933]" /> },
    { name: "EXPRESS.JS", icon: <SiExpress className="text-[#000000] dark:text-white" /> },
    { name: "MONGODB", icon: <SiMongodb className="text-[#47A248]" /> },
    { name: "FIREBASE", icon: <SiFirebase className="text-[#FFCA28]" /> },
    { name: "REST APIS", icon: <FaServer className="text-teal-500" /> },
    { name: "TAILWIND V4", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
    { name: "POSTMAN", icon: <SiPostman className="text-[#FF6C37]" /> },
    { name: "BOOTSTRAP", icon: <SiBootstrap className="text-[#7952B3]" /> },
    { name: "RAZORPAY", icon: <SiRazorpay className="text-[#02042B]" /> },
    { name: "SQL", icon: <FaDatabase className="text-[#003B57]" /> },
    { name: "PYTHON", icon: <FaPython className="text-[#3776AB]" /> },
    { name: "C++", icon: <SiCplusplus className="text-[#00599C]" /> },
    { name: "GIT", icon: <FaGitAlt className="text-[#F05032]" /> },
    { name: "GITHUB", icon: <FaGithub className="text-slate-900 dark:text-white" /> },
    { name: "VS CODE", icon: <FaLaptopCode className="text-[#007ACC]" /> },
  ];

  const featureCards = [
    {
      title: "FRONTEND ENGINE",
      desc: "Architecture-first React & Next.js apps optimized with Vercel & Vite deployment pipelines.",
      icon: <FaLaptopCode className="text-blue-500 text-2xl" />
    },
    {
      title: "REAL-TIME BACKENDS",
      desc: "Scalable Node.js, Express & REST APIs with database modeling and authentication.",
      icon: <FaServer className="text-cyan-500 text-2xl" />
    },
    {
      title: "CLOUD STRATEGY",
      desc: "Hybrid storage using MongoDB Atlas, SQL & Firebase cloud infrastructure.",
      icon: <FaDatabase className="text-indigo-500 text-2xl" />
    }
  ];

  return (
    <section className="min-h-screen pt-28 pb-24 px-4 md:px-8 lg:px-12 transition-colors duration-500 font-sans bg-transparent">
      
      {/* 1. Main 2-Column Grid */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 mb-32">
        
        {/* Left Column: Sticky Header */}
        <div className="lg:w-1/3 flex flex-col gap-8 lg:sticky lg:top-32 h-fit">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 bg-blue-500/10 text-blue-500">
              • Tech Stack
            </span>
            <h1 className="text-5xl md:text-6xl font-black tracking-tight leading-tight mb-6 text-slate-900 dark:text-slate-50 transition-colors duration-500">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-400">Skills &</span> <br className="hidden lg:block"/> Technologies
            </h1>
            <p className="text-base md:text-lg leading-relaxed mb-10 text-slate-600 dark:text-slate-400 transition-colors duration-500">
              I am a passionate MERN Stack Web Developer with a strong foundation in modern web technologies, eager to apply my skills to real-world projects.
            </p>

            <div className="flex flex-col gap-3">
              {highlights.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-2xl border transition-all duration-500 bg-white dark:bg-[#111111] border-black/5 dark:border-white/10"
                >
                  <FaCheckCircle className="text-blue-500 text-lg" />
                  <span className="font-bold text-sm text-slate-900 dark:text-slate-50 transition-colors duration-500">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Column: Skill Categories */}
        <div className="lg:w-2/3 flex flex-col gap-8 md:gap-12">
          {skillCategories.map((category, catIdx) => (
            <motion.div 
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: catIdx * 0.1 }}
              className="p-6 md:p-10 rounded-[2rem] border shadow-xl relative overflow-hidden transition-all duration-500 bg-white dark:bg-[#111111] border-black/5 dark:border-white/10"
            >
              {/* Category Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl shadow-inner bg-blue-500/10 text-blue-500">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 dark:text-slate-50 transition-colors duration-500">{category.title}</h3>
                </div>
                <span className="inline-block px-3 py-1 text-xs font-bold rounded-full w-fit bg-blue-500/10 text-blue-500">
                  • {category.badge}
                </span>
              </div>
              <p className="text-sm mb-8 text-slate-600 dark:text-slate-400 transition-colors duration-500">{category.description}</p>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skill.name} className="flex flex-col gap-3">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <span className="text-lg p-2 rounded-lg bg-slate-50 dark:bg-[#050505] transition-colors duration-500">{skill.icon}</span>
                        <span className="font-bold text-sm text-slate-900 dark:text-slate-50 transition-colors duration-500">{skill.name}</span>
                      </div>
                      <span className="text-xs font-mono font-bold text-blue-500">{skill.percentage}%</span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="h-2 w-full rounded-full overflow-hidden bg-black/5 dark:bg-white/10 transition-colors duration-500">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.2 + (skillIdx * 0.1), ease: "easeOut" }}
                        className="h-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-400"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* 2. DIGITAL ARSENALS SECTION (Marquee Rows with Logos + Feature Cards) */}
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-12 pt-16 border-t border-black/5 dark:border-white/10">
        
        {/* Header */}
        <div className="text-center flex flex-col items-center gap-2">
          <span className="text-xs font-mono font-bold uppercase tracking-[0.4em] text-blue-500">
            / DATABASE_STACK_V2
          </span>
          <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tight text-slate-900 dark:text-slate-50">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-400">DIGITAL ARSENALS</span>
          </h2>
        </div>

        {/* Marquee Row 1 */}
        <div className="w-full overflow-hidden relative py-2">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
            className="flex gap-4 w-max"
          >
            {[...marqueeRow1, ...marqueeRow1].map((item, idx) => (
              <span key={idx} className="flex items-center gap-2.5 px-5 py-2.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-white dark:bg-[#111111] border border-black/5 dark:border-white/10 shadow-md text-slate-800 dark:text-slate-200">
                <span className="text-base">{item.icon}</span>
                <span>{item.name}</span>
              </span>
            ))}
          </motion.div>
        </div>

        {/* Marquee Row 2 (Reverse Direction) */}
        <div className="w-full overflow-hidden relative py-2">
          <motion.div 
            animate={{ x: ["-50%", "0%"] }}
            transition={{ repeat: Infinity, duration: 38, ease: "linear" }}
            className="flex gap-4 w-max"
          >
            {[...marqueeRow2, ...marqueeRow2].map((item, idx) => (
              <span key={idx} className="flex items-center gap-2.5 px-5 py-2.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-white dark:bg-[#111111] border border-black/5 dark:border-white/10 shadow-md text-slate-800 dark:text-slate-200">
                <span className="text-base">{item.icon}</span>
                <span>{item.name}</span>
              </span>
            ))}
          </motion.div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-8">
          {featureCards.map((card, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-white dark:bg-[#111111] border border-black/5 dark:border-white/10 shadow-xl flex flex-col gap-4 hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center">
                {card.icon}
              </div>
              <h3 className="font-black text-lg text-slate-900 dark:text-slate-50 uppercase tracking-wide">
                {card.title}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>

    </section>
  );
};

export default Skills;