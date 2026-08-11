import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { RiFireLine, RiCupLine, RiTrophyLine, RiDownloadLine, RiGithubFill } from "react-icons/ri";
import AnimatedCounter from "../components/AnimatedCounter";
import Resume from "../assets/Resume.pdf";
import Education from "./Education";
import Experience from "./Experience";
import Certifications from "./Certificates";

const About = () => {
  const [repoCount, setRepoCount] = useState(25);

  useEffect(() => {
    fetch("https://api.github.com/users/MdHuzaifa018")
      .then((res) => res.json())
      .then((data) => {
        if (data.public_repos) setRepoCount(data.public_repos);
      })
      .catch(console.error);
  }, []);

  const stats = [
    { label: "Projects Built", value: 15, icon: <RiFireLine />, color: "text-blue-500", bg: "bg-blue-500/10" },
    { label: "Years Exp.", value: 1, icon: <RiCupLine />, color: "text-cyan-500", bg: "bg-cyan-500/10" },
    { label: "GitHub Repos", value: repoCount, icon: <RiGithubFill />, color: "text-indigo-500", bg: "bg-indigo-500/10" },
    { label: "Certifications", value: 3, icon: <RiTrophyLine />, color: "text-purple-500", bg: "bg-purple-500/10" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen pt-28 pb-20 px-4 md:px-8 lg:px-12 transition-colors duration-500 font-sans bg-transparent relative overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto flex flex-col gap-16 md:gap-24">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="flex flex-col gap-4">
            <motion.h2 
              initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}
              className="text-5xl md:text-[clamp(3rem,6vw,5rem)] font-black leading-tight tracking-tighter text-slate-900 dark:text-slate-50 transition-colors duration-500"
            >
              Who is <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-400">Huzaif Sheikh?</span>
            </motion.h2>
          </div>
          
          <motion.a
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.2 }}
            href={Resume}
            download="Huzaif_Sheikh_Resume"
            className="flex items-center gap-3 px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-sm transition-all hover:scale-105 bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-xl hover:shadow-[0_10px_30px_rgba(6,182,212,0.4)]"
          >
            <RiDownloadLine className="text-xl" /> Download Resume
          </motion.a>
        </div>

        {/* Bio, Image & Quick Facts Grid */}
        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* Profile Photo Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="lg:col-span-4 rounded-[2.5rem] p-3 border shadow-2xl bg-white dark:bg-[#111111] border-black/5 dark:border-white/10 relative overflow-hidden group flex flex-col justify-between"
          >
            <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden bg-slate-100 dark:bg-[#1a1a1a]">
              <img 
                src="https://res.cloudinary.com/qpxxnswd/image/upload/v1786433302/techugrow/nyhu86z23ho6skxvz1rd.jpg" 
                alt="Huzaif Sheikh" 
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-90" />
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-white z-10">
                <div>
                  <h4 className="font-black text-xl">Huzaif Sheikh</h4>
                  <p className="text-xs text-cyan-300 font-medium">MERN Stack Developer</p>
                </div>
                <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse shadow-[0_0_12px_#22c55e]" title="Available for hire" />
              </div>
            </div>
          </motion.div>

          {/* Bio Card */}
          <motion.div 
            variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="lg:col-span-8 p-8 md:p-12 rounded-[2.5rem] border shadow-2xl bg-white dark:bg-[#111111] border-black/5 dark:border-white/10 transition-colors duration-500 relative overflow-hidden group flex flex-col justify-between"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            <div>
              <h3 className="text-3xl font-black mb-6 text-slate-900 dark:text-slate-50">
                Transforming ideas into <span className="italic bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-400">digital reality.</span>
              </h3>
              
              <div className="flex flex-col gap-5 text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed relative z-10 mb-8">
                <motion.p variants={itemVariants}>
                  Hello! I'm <strong>Huzaif Sheikh</strong>, a passionate Full Stack / MERN Stack Web Developer currently pursuing my Bachelor in Computer Application (BCA) at Patliputra University, Patna.
                </motion.p>
                <motion.p variants={itemVariants}>
                  I specialize in building high-performance web applications with <strong>MongoDB, Express.js, React.js, and Node.js</strong>. I focus on clean UI design, intuitive navigation, and scalable backend logic.
                </motion.p>
                <motion.p variants={itemVariants}>
                  Recently, I completed a Frontend Development Internship at Edunet Foundation (in collaboration with AICTE and IBM SkillsBuild) where I worked on real-world projects and guided startups on product strategy and scalable deployment pipelines.
                </motion.p>
              </div>
            </div>

            {/* Quick Info Bar at the bottom of Bio Card */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-black/5 dark:border-white/10 text-xs font-mono">
              <div>
                <span className="text-slate-400 block uppercase tracking-wider">Degree</span>
                <span className="font-bold text-slate-900 dark:text-slate-100">BCA (2024-27)</span>
              </div>
              <div>
                <span className="text-slate-400 block uppercase tracking-wider">Location</span>
                <span className="font-bold text-slate-900 dark:text-slate-100">Patna, India</span>
              </div>
              <div>
                <span className="text-slate-400 block uppercase tracking-wider">Role</span>
                <span className="font-bold text-slate-900 dark:text-slate-100">Full Stack Dev</span>
              </div>
              <div>
                <span className="text-slate-400 block uppercase tracking-wider">Status</span>
                <span className="font-bold text-green-500">Available</span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-3xl border shadow-lg bg-white dark:bg-[#111111] border-black/5 dark:border-white/10 flex flex-col items-center text-center gap-4 hover:-translate-y-2 transition-transform duration-300"
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl ${stat.bg} ${stat.color}`}>
                {stat.icon}
              </div>
              <div>
                <h4 className="text-4xl font-black text-slate-900 dark:text-slate-50 mb-1">
                  <AnimatedCounter to={stat.value} suffix="+" />
                </h4>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education Timeline Section */}
        <Education />

        {/* Work History Section */}
        <Experience />

        {/* Certificates & Honors Section */}
        <Certifications />

      </div>
    </div>
  );
};

export default About;