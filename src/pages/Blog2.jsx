import React, { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { FaClock, FaArrowLeft, FaRobot, FaBrain, FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Blog2 = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-24 px-4 md:px-8 lg:px-12 bg-transparent text-slate-900 dark:text-slate-50 font-sans transition-colors duration-500">
      
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 origin-left z-50" 
        style={{ scaleX }} 
      />

      <div className="max-w-4xl mx-auto flex flex-col gap-12">
        
        {/* Navigation Top Bar */}
        <div className="flex justify-between items-center py-4 border-b border-black/5 dark:border-white/10">
          <Link to="/blog" className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest font-bold text-blue-500 hover:text-cyan-400 transition-colors">
            <FaArrowLeft /> Back to Articles
          </Link>
          <span className="font-mono text-xs text-slate-500">Archive_Entry_02</span>
        </div>

        {/* Article Header */}
        <header className="flex flex-col gap-6 text-center items-center">
          <span className="px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-cyan-500/10 text-cyan-500 border border-cyan-500/20">
            • AI & Artificial Intelligence
          </span>

          <h1 className="text-4xl md:text-6xl font-black italic uppercase leading-tight tracking-tight text-slate-900 dark:text-slate-50">
            Future of AI in <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-400">Web Development</span>
          </h1>

          <div className="flex items-center gap-6 font-mono text-xs text-slate-500">
            <span className="flex items-center gap-1.5"><FaClock className="text-cyan-500" /> 4 Min Read</span>
            <span>•</span>
            <span>Published 14 Feb, 2025</span>
          </div>

          {/* Featured Cover Image */}
          <div className="w-full aspect-[16/9] rounded-[2.5rem] overflow-hidden border border-black/5 dark:border-white/10 shadow-2xl mt-4">
            <img 
              src="https://iili.io/f6Y3Kjs.md.webp" 
              alt="Future of AI" 
              className="w-full h-full object-cover" 
            />
          </div>
        </header>

        {/* Article Body Content */}
        <article className="flex flex-col gap-8 text-base md:text-lg leading-relaxed text-slate-700 dark:text-slate-300">
          
          <div className="p-8 rounded-3xl bg-cyan-500/5 border border-cyan-500/20 text-slate-900 dark:text-slate-100 font-medium italic text-xl md:text-2xl leading-snug">
            "AI is not replacing full-stack developers; it is empowering them to build 10x faster with higher precision."
          </div>

          <p>
            Generative AI and Large Language Models are transforming the web development landscape. From automated boilerplate generation to real-time AI code review, modern engineers are leveraging AI tools to accelerate delivery.
          </p>

          <h2 className="text-2xl md:text-3xl font-black italic uppercase text-slate-900 dark:text-slate-50 pt-4 border-t border-black/5 dark:border-white/10">
            Key AI Impact Areas in Web Dev
          </h2>

          <div className="grid gap-4 my-4">
            {[
              "Automated Unit Test Generation & Debugging",
              "AI-Assisted UI Layout & Component Synthesis",
              "Smart API Schema Generation & Refactoring",
              "Natural Language Database Queries & Indexing"
            ].map((point, idx) => (
              <div key={idx} className="flex items-center gap-3 p-4 rounded-2xl bg-white dark:bg-[#111111] border border-black/5 dark:border-white/10 shadow-sm">
                <FaCheckCircle className="text-cyan-500 text-lg shrink-0" />
                <span className="font-bold text-sm text-slate-800 dark:text-slate-200">{point}</span>
              </div>
            ))}
          </div>

          <p>
            The future belongs to full-stack engineers who master AI tools as co-pilots while retaining strong architectural fundamentals, clean code practices, and user experience intuition.
          </p>

        </article>

      </div>
    </div>
  );
};

export default Blog2;