import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, BookOpen, ChevronDown } from "lucide-react";

const educationData = [
  {
    id: "bca",
    degree: "Bachelor of Computer Applications (BCA)",
    college: "Patliputra University, Patna",
    year: "2024 - 2027",
    status: "In Progress",
    details:
      "Specializing in Software Architecture, Full-stack Web Development, and Advanced Database Systems. Actively involved in building community-driven open-source projects and MERN stack applications.",
    icon: GraduationCap,
  },
  {
    id: "inter",
    degree: "Intermediate (12th)",
    college: "Nalanda College, Biharsharif",
    year: "2021 - 2022",
    status: "Completed",
    details:
      "Science Stream with focus on Mathematics and Physics, forming the core logical and analytical foundation for software programming.",
    icon: BookOpen,
  },
];

const Education = () => {
  const [expandedId, setExpandedId] = useState("bca");

  return (
    <section id="education" className="py-16 md:py-24 px-4 md:px-8 lg:px-12 bg-transparent font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-12">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono font-bold uppercase tracking-[0.3em] accent"
          >
            / ACADEMIC_TIMELINE
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black italic uppercase text-slate-900 dark:text-slate-50 mt-2 transition-colors duration-500"
          >
            Education
          </motion.h2>
        </div>

        {/* Education List */}
        <div className="flex flex-col gap-6">
          {educationData.map((edu, idx) => {
            const isExpanded = expandedId === edu.id;
            const IconComponent = edu.icon;

            return (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.5 }}
                onClick={() => setExpandedId(isExpanded ? null : edu.id)}
                className={`p-6 md:p-8 rounded-3xl border cursor-pointer transition-all duration-300 ${
                  isExpanded 
                    ? "bg-white dark:bg-[#111111] border-violet-500/50 shadow-xl shadow-violet-500/10" 
                    : "bg-white/80 dark:bg-[#111111]/80 border-black/5 dark:border-white/10 hover:border-[var(--accent)]/30"
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl bg-violet-500/10 accent border border-violet-500/20 shrink-0">
                      <IconComponent size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-black text-slate-900 dark:text-slate-50 transition-colors duration-500">
                        {edu.degree}
                      </h3>
                      <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                        {edu.college}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 self-end sm:self-center">
                    <span className="px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-slate-100 dark:bg-[#1a1a1a] accent border border-black/5 dark:border-white/10">
                      {edu.year}
                    </span>
                    <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
                      <ChevronDown className="text-slate-400" size={20} />
                    </motion.div>
                  </div>
                </div>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-6 mt-6 border-t border-black/5 dark:border-white/10 text-slate-600 dark:text-slate-400 leading-relaxed text-sm md:text-base">
                        <p>{edu.details}</p>
                        <div className="mt-4 flex items-center gap-2 text-xs font-bold accent">
                          <span>Status:</span>
                          <span className="px-2.5 py-0.5 rounded-md bg-violet-500/10 border border-violet-500/20">{edu.status}</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;