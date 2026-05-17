import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava,
  FaGitAlt, FaGithub, FaMarkdown, FaCode, FaNodeJs
} from "react-icons/fa";
import { SiFirebase, SiC, SiCplusplus, SiTailwindcss, SiFramer, SiGooglecloud, SiVercel, SiMongodb, SiExpress, SiSocketdotio} from "react-icons/si";
import { Layout, Server, Cloud } from "lucide-react";

const skills = [
  { name: "HTML5", icon: <FaHtml5 />, color: "#e44d26" },
  { name: "CSS3", icon: <FaCss3Alt />, color: "#1572b6" },
  { name: "React", icon: <FaReact />, color: "#61dafb" },
  { name: "Node.js", icon: <FaNodeJs />, color: "#68a063" },
  { name: "Express.js", icon: <SiExpress />, color: "#888888" },
  { name: "MongoDB", icon: <SiMongodb />, color: "#47a248" },
  { name: "Firebase", icon: <SiFirebase />, color: "#ffca28" },
  { name: "Socket.io", icon: <SiSocketdotio />, color: "#6366f1" },
  { name: "Google Cloud", icon: <SiGooglecloud />, color: "#4285f4" },
  { name: "Vercel", icon: <SiVercel />, color: "#888888" },
  { name: "JavaScript", icon: <FaJs />, color: "#f7df1e" },
  { name: "Tailwind v4", icon: <SiTailwindcss />, color: "#38bdf8" },
  { name: "Framer Motion", icon: <SiFramer />, color: "#bb4b96" },
  { name: "Java", icon: <FaJava />, color: "#f89820" },
  { name: "C++", icon: <SiCplusplus />, color: "#00589c" },
  { name: "C", icon: <SiC />, color: "#5c6bc0" },
  { name: "Git", icon: <FaGitAlt />, color: "#f1502f" },
  { name: "GitHub", icon: <FaGithub />, color: "#888888" },
  { name: "Markdown", icon: <FaMarkdown />, color: "#083fa1" },
  { name: "VS Code", icon: <FaCode />, color: "#007acc" },
];

const stackCards = [
  { title: "Frontend Engine", text: "Architecture-first React apps optimized with Vercel deployment.", accent: "#6366f1", icon: Layout },
  { title: "Real-time Backends", text: "Scalable Node.js, Express & Socket.io for live data synchronization.", accent: "#22c55e", icon: Server },
  { title: "Cloud Strategy", text: "Hybrid storage using MongoDB, PostgreSQL & Firebase on Google Cloud.", accent: "#f97316", icon: Cloud },
];

const SkillPill = ({ skill }) => (
  <div
    className="flex items-center gap-3 md:gap-4 px-6 md:px-10 py-3 md:py-5 rounded-full border shadow-sm flex-shrink-0 group relative overflow-hidden transition-all duration-300 hover:scale-[1.05]"
    style={{ 
      backgroundColor: "var(--card-bg)", 
      borderColor: "var(--card-border)",
      willChange: "transform" 
    }}
  >
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full pointer-events-none" style={{ backgroundColor: `${skill.color}10` }} />
    <span className="text-xl md:text-3xl relative z-10 transition-transform duration-300 group-hover:rotate-12" style={{ color: skill.color }}>
      {skill.icon}
    </span>
    <span className="text-sm md:text-xl font-black italic uppercase tracking-tighter relative z-10" style={{ color: "var(--text-primary)" }}>{skill.name}</span>
  </div>
);

const MarqueeRow = ({ items, direction = "left", speed = "50s" }) => (
  <div className="flex w-full overflow-hidden relative group py-1">
    <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: "linear-gradient(to right, var(--background), transparent)" }} />
    <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: "linear-gradient(to left, var(--background), transparent)" }} />
    <div className={`flex whitespace-nowrap gap-4 md:gap-6 py-2 ${direction === "left" ? "animate-marquee-left" : "animate-marquee-right"} group-hover:pause-animation`} style={{ animationDuration: speed }}>
      {[...items, ...items].map((skill, index) => (
        <SkillPill key={index} skill={skill} />
      ))}
    </div>
  </div>
);

const Skills = () => {
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true, amount: 0.2 });

  return (
    <section id="skills" style={{ backgroundColor: "var(--background)", color: "var(--text-primary)" }} className="py-20 md:py-32 overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full blur-[120px] pointer-events-none opacity-[0.04] dark:opacity-[0.07]" style={{ backgroundColor: "#6366f1" }} />

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee-left { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes marquee-right { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
        .animate-marquee-left { animation: marquee-left linear infinite; }
        .animate-marquee-right { animation: marquee-right linear infinite; }
        .pause-animation { animation-play-state: paused !important; }
        .pause-animation * { animation-play-state: paused !important; }
      `}} />

      <div ref={headingRef} className="max-w-7xl mx-auto px-6 mb-12 md:mb-20 relative z-10">
        <motion.h2 initial={{ opacity: 0, x: -30 }} animate={headingInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5 }} style={{ color: "#6366f1" }} className="text-[10px] md:text-xs uppercase tracking-[0.5em] font-mono mb-4 font-black">
          / Advanced_Stack_v4
        </motion.h2>
        <motion.h3 initial={{ opacity: 0, y: 60, skewY: 3 }} animate={headingInView ? { opacity: 1, y: 0, skewY: 0 } : {}} transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }} className="text-4xl sm:text-5xl md:text-8xl font-[1000] italic uppercase tracking-tighter leading-none">
          Digital <br className="md:hidden" /> Arsenals
        </motion.h3>
      </div>

      <div className="flex flex-col gap-4 md:gap-6 relative z-10">
        <MarqueeRow items={skills} direction="left" speed="60s" />
        <MarqueeRow items={[...skills].reverse()} direction="right" speed="60s" />
        <MarqueeRow items={skills.slice(10)} direction="left" speed="45s" />
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 md:mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        {stackCards.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: idx * 0.15, duration: 0.6 }} 
              style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--card-border)", willChange: "transform" }} 
              className="p-8 md:p-10 rounded-[2.5rem] border relative overflow-hidden group shadow-xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02]"
            >
              <div className="absolute top-0 left-0 w-1.5 h-full opacity-20 group-hover:opacity-100 transition-opacity duration-500" style={{ backgroundColor: item.accent }} />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none" style={{ backgroundColor: item.accent }} />
              <div className="absolute inset-0 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ boxShadow: `inset 0 0 0 1px ${item.accent}30, 0 0 30px ${item.accent}15` }} />
              <div className="mb-4 relative z-10" style={{ color: item.accent }}><Icon size={40} strokeWidth={1.5} /></div>
              <h4 className="text-xl md:text-2xl font-black mb-4 italic uppercase tracking-tight relative z-10">{item.title}</h4>
              <p style={{ color: "var(--text-secondary)" }} className="text-sm md:text-base leading-relaxed font-mono opacity-80 relative z-10">{item.text}</p>
            </motion.div>
          );
        })}
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 flex justify-between items-center opacity-20 font-mono text-[9px] uppercase tracking-[0.4em] relative z-10">
        <span>System_v4_Stable</span>
        <span>Nodes_Integrated: {skills.length}</span>
        <span className="hidden sm:block">Status: Optimized_For_Performance</span>
      </div>
    </section>
  );
};

export default Skills;