import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava,
  FaGitAlt, FaGithub, FaMarkdown, FaCode, FaNodeJs
} from "react-icons/fa";
import { SiFirebase, SiC, SiCplusplus, SiTailwindcss, SiFramer, SiGooglecloud, SiVercel, SiMongodb, SiExpress, SiSocketdotio} from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS3", icon: <FaCss3Alt /> },
  { name: "React", icon: <FaReact /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Firebase", icon: <SiFirebase /> },
  { name: "Socket.io", icon: <SiSocketdotio /> },
  { name: "Google Cloud", icon: <SiGooglecloud /> },
  { name: "Vercel", icon: <SiVercel /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "Tailwind v4", icon: <SiTailwindcss /> },
  { name: "Framer Motion", icon: <SiFramer /> },
  { name: "Java", icon: <FaJava /> },
  { name: "C++", icon: <SiCplusplus /> },
  { name: "C", icon: <SiC /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "GitHub", icon: <FaGithub /> },
  { name: "Markdown", icon: <FaMarkdown /> },
  { name: "VS Code", icon: <FaCode /> },
];

const Skills = ({ theme }) => {
  const isDark = theme === "dark";
  const colors = {
    bg: isDark ? "#050505" : "#f8fafc",
    text: isDark ? "#f8fafc" : "#0f172a",
    subtext: isDark ? "#94a3b8" : "#64748b",
    border: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)",
    highlight: "#6366f1",
    card: isDark ? "#111111" : "#ffffff",
  };

  const MarqueeRow = ({ items, direction = "left", speed = "50s" }) => (
    <div className="flex w-full overflow-hidden relative group">
      <div 
        className={`flex whitespace-nowrap gap-4 md:gap-8 py-2 ${direction === "left" ? "animate-marquee-left" : "animate-marquee-right"} group-hover:pause-animation`}
        style={{ animationDuration: speed }}
      >
        {/* Render 4 sets to prevent gaps and ensure a smooth loop on all resolutions */}
        {[...items, ...items, ...items, ...items].map((skill, index) => (
          <div
            key={index}
            style={{ backgroundColor: colors.card, borderColor: colors.border }}
            className="flex items-center gap-3 md:gap-4 px-6 md:px-10 py-3 md:py-5 rounded-full border shadow-sm backdrop-blur-md transition-all hover:scale-105 hover:border-indigo-500/50"
          >
            <span className="text-xl md:text-3xl text-indigo-500">{skill.icon}</span>
            <span className="text-sm md:text-xl font-black italic uppercase tracking-tighter">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" style={{ backgroundColor: colors.bg, color: colors.text }} className="py-20 md:py-32 overflow-hidden transition-colors duration-500">
      
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left { animation: marquee-left linear infinite; }
        .animate-marquee-right { animation: marquee-right linear infinite; }
        .pause-animation { animation-play-state: paused !important; }
      `}} />

      <div className="max-w-7xl mx-auto px-6 mb-12 md:mb-20">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 style={{ color: colors.highlight }} className="text-[10px] md:text-xs uppercase tracking-[0.5em] font-mono mb-4 font-black">
            / Advanced_Stack_v4
          </h2>
          <h3 className="text-4xl sm:text-5xl md:text-8xl font-[1000] italic uppercase tracking-tighter leading-none">
            Digital <br className="md:hidden" /> Arsenals
          </h3>
        </motion.div>
      </div>

      <div className="flex flex-col gap-4 md:gap-8">
        <MarqueeRow items={skills} direction="left" speed="60s" />
        <MarqueeRow items={[...skills].reverse()} direction="right" speed="60s" />
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 md:mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { title: "Frontend Engine", text: "Architecture-first React apps optimized with Vercel deployment.", accent: "bg-blue-500" },
          { title: "Real-time Backends", text: "Scalable Node.js, Express & Socket.io for live data synchronization.", accent: "bg-green-500" },
          { title: "Cloud Strategy", text: "Hybrid storage using MongoDB, PostgreSQL & Firebase on Google Cloud.", accent: "bg-orange-500" }
        ].map((item, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -8 }}
            style={{ backgroundColor: colors.card, borderColor: colors.border }}
            className="p-8 md:p-10 rounded-[2.5rem] border transition-all duration-500 relative overflow-hidden group shadow-xl"
          >
            <div className={`absolute top-0 left-0 w-1.5 h-full ${item.accent} opacity-20 group-hover:opacity-100 transition-opacity`} />
            <h4 className="text-xl md:text-2xl font-black mb-4 italic uppercase tracking-tight">{item.title}</h4>
            <p style={{ color: colors.subtext }} className="text-sm md:text-base leading-relaxed font-mono opacity-80">{item.text}</p>
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 flex justify-between items-center opacity-20 font-mono text-[9px] uppercase tracking-[0.4em]">
         <span>System_v4_Stable</span>
         <span>Nodes_Integrated: {skills.length}</span>
         <span className="hidden sm:block">Status: Optimized_For_Performance</span>
      </div>
    </section>
  );
};

export default Skills;