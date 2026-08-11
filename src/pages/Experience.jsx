import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Code2, Zap } from "lucide-react";

const WorkExperience = [
  {
    id: 1,
    title: "Frontend Intern",
    company: "Edunet Foundation",
    yearsActive: "Aug 2025 - Sept 2025",
    information: [
      "Coordinated with team members, tracked tasks, and followed project timelines for real-world frontend web applications.",
      "Engineered high-performance web solutions using HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, and React.js.",
      "Collaborated with cross-functional teams to design fully responsive, mobile-first layouts.",
      "Guided startups on product strategy, tech stacks, and scalable deployment pipelines."
    ],
    tags: ["React.js", "Tailwind CSS", "Bootstrap", "REST APIs"],
    icon: Code2,
  },
  {
    id: 2,
    title: "Event Tech Lead",
    company: "Vibexperience",
    yearsActive: "Dec 2025 - Jan 2026",
    information: [
      "Directed technical operations for BCA/MCA department events.",
      "Coordinated group performances and digital staging for live audiences.",
      "Bridged the gap between creative performance and technical execution."
    ],
    tags: ["Live Staging", "Tech Ops", "Leadership"],
    icon: Zap,
  },
  {
    id: 3,
    title: "Freelance Developer",
    company: "Self-Employed",
    yearsActive: "Jan 2025 - Present",
    information: [
      "Deployed multiple production-ready websites using React, Next.js, and Firebase.",
      "Consulted for local clients to digitize business workflows with Tailwind CSS.",
      "Managed end-to-end deployment pipelines, performance tuning, and SEO optimization."
    ],
    tags: ["Freelance", "MERN Stack", "Firebase", "SEO"],
    icon: Briefcase,
  },
];

export default function Experience() {
  const [activeId, setActiveId] = useState(1);
  const activeWork = WorkExperience.find((w) => w.id === activeId);

  return (
    <section id="experience" className="py-16 md:py-24 px-4 md:px-8 lg:px-12 bg-transparent font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-12">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono font-bold uppercase tracking-[0.3em] text-blue-500"
          >
            / PROFESSIONAL_ARCHIVE
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black italic uppercase text-slate-900 dark:text-slate-50 mt-2 transition-colors duration-500"
          >
            Work History
          </motion.h2>
        </div>

        {/* Experience Layout: Sidebar Tabs + Content Card */}
        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* Tabs (Company List) */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col gap-3 overflow-x-auto pb-4 lg:pb-0">
            {WorkExperience.map((work) => {
              const isActive = work.id === activeId;
              const IconComp = work.icon;
              return (
                <button
                  key={work.id}
                  onClick={() => setActiveId(work.id)}
                  className={`flex items-center gap-4 p-5 rounded-2xl text-left font-bold transition-all duration-300 whitespace-nowrap shrink-0 border ${
                    isActive
                      ? "bg-white dark:bg-[#111111] text-blue-500 border-blue-500 shadow-lg shadow-blue-500/10"
                      : "bg-white/50 dark:bg-[#111111]/50 text-slate-600 dark:text-slate-400 border-black/5 dark:border-white/10 hover:bg-white dark:hover:bg-[#111111]"
                  }`}
                >
                  <div className={`p-2.5 rounded-xl ${isActive ? "bg-blue-500 text-white" : "bg-slate-100 dark:bg-[#1a1a1a] text-slate-500"}`}>
                    <IconComp size={18} />
                  </div>
                  <div>
                    <h4 className="text-base leading-snug">{work.company}</h4>
                    <p className="text-xs font-normal text-slate-500">{work.title}</p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Experience Details Card */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              {activeWork && (
                <motion.div
                  key={activeWork.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="p-8 md:p-10 rounded-3xl bg-white dark:bg-[#111111] border border-black/5 dark:border-white/10 shadow-xl"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-black/5 dark:border-white/10">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-slate-50">
                        {activeWork.title} <span className="text-blue-500">@ {activeWork.company}</span>
                      </h3>
                    </div>
                    <span className="px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-blue-500/10 text-blue-500 shrink-0 w-fit">
                      {activeWork.yearsActive}
                    </span>
                  </div>

                  {/* Bullet points */}
                  <ul className="flex flex-col gap-4 mb-8">
                    {activeWork.information.map((point, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed">
                        <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-black/5 dark:border-white/10">
                    {activeWork.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium rounded-lg bg-slate-100 dark:bg-[#1a1a1a] text-slate-700 dark:text-slate-300"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}