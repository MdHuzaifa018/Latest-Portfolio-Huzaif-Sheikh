import React, { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { FaClock, FaArrowLeft, FaShareAlt, FaRocket, FaCodeBranch, FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Blog1 = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-24 px-4 md:px-8 lg:px-12 bg-transparent text-slate-900 dark:text-slate-50 font-sans transition-colors duration-500">
      
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r  origin-left z-50" 
        style={{ scaleX }} 
      />

      <div className="max-w-4xl mx-auto flex flex-col gap-12">
        
        {/* Navigation Top Bar */}
        <div className="flex justify-between items-center py-4 border-b border-black/5 dark:border-white/10">
          <Link to="/blog" className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest font-bold accent hover:text-fuchsia-400 transition-colors">
            <FaArrowLeft /> Back to Articles
          </Link>
          <span className="font-mono text-xs text-slate-500">Archive_Entry_01</span>
        </div>

        {/* Article Header */}
        <header className="flex flex-col gap-6 text-center items-center">
          <span className="px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-violet-500/10 accent border border-violet-500/20">
            • Career & Engineering
          </span>

          <h1 className="text-4xl md:text-6xl font-black italic uppercase leading-tight tracking-tight text-slate-900 dark:text-slate-50">
            Why Every Developer Should Work on <span style={{ color: 'var(--accent)' }}>Open Source</span>
          </h1>

          <div className="flex items-center gap-6 font-mono text-xs text-slate-500">
            <span className="flex items-center gap-1.5"><FaClock className="text-violet-500" /> 5 Min Read</span>
            <span>•</span>
            <span>Published 13 Feb, 2025</span>
          </div>

          {/* Featured Cover Image */}
          <div className="w-full aspect-[16/9] rounded-[2.5rem] overflow-hidden border border-black/5 dark:border-white/10 shadow-2xl mt-4">
            <img 
              src="https://iili.io/f677edF.md.webp" 
              alt="Open Source Growth" 
              className="w-full h-full object-cover" 
            />
          </div>
        </header>

        {/* Article Body Content */}
        <article className="flex flex-col gap-8 text-base md:text-lg leading-relaxed text-slate-700 dark:text-slate-300">
          
          <div className="p-8 rounded-3xl bg-violet-500/5 border border-violet-500/20 text-slate-900 dark:text-slate-100 font-medium italic text-xl md:text-2xl leading-snug">
            "In a world of proprietary walls, open collaboration is the ultimate accelerator for software engineering growth."
          </div>

          <p>
            Developers who actively engage in open-source contributions gain hands-on experience that classrooms cannot simulate. You aren't just writing code in a bubble; you are participating in a global engineering conversation.
          </p>

          <h2 className="text-2xl md:text-3xl font-black italic uppercase text-slate-900 dark:text-slate-50 pt-4 border-t border-black/5 dark:border-white/10">
            1. Real-World Codebase Mastery
          </h2>

          <p>
            Tutorial projects are controlled environments. Open source is production reality. Reading codebase architectures built by developers across the world teaches you how to debug production-level complexity, implement clean-code patterns, and write maintainable pull requests.
          </p>

          <div className="grid gap-4 my-4">
            {[
              "Debugging production-level codebase complexity",
              "Implementing scalable architectural patterns",
              "Git branching workflows & peer code reviews",
              "Building public proof of competence on GitHub"
            ].map((point, idx) => (
              <div key={idx} className="flex items-center gap-3 p-4 rounded-2xl bg-white dark:bg-[#111111] border border-black/5 dark:border-white/10 shadow-sm">
                <FaCheckCircle className="text-violet-500 text-lg shrink-0" />
                <span className="font-bold text-sm text-slate-800 dark:text-slate-200">{point}</span>
              </div>
            ))}
          </div>

          <h2 className="text-2xl md:text-3xl font-black italic uppercase text-slate-900 dark:text-slate-50 pt-4 border-t border-black/5 dark:border-white/10">
            2. Building Global Credibility
          </h2>

          <p>
            Your GitHub contribution green dots and merged pull requests serve as an unforgeable public resume. Engineering leaders and recruiters value active open-source contributors because it proves your initiative, adaptability, and collaboration skills.
          </p>

          {/* Article Footer CTA */}
          <div className="p-8 md:p-12 rounded-[2.5rem] accent-bg via-purple-600 to-fuchsia-600 text-white flex flex-col items-center text-center gap-6 mt-8 shadow-2xl shadow-violet-500/25">
            <h3 className="text-3xl font-black italic uppercase">Ready to start contributing?</h3>
            <p className="text-sm opacity-90 max-w-lg">
              Explore open-source repositories on GitHub and make your first pull request today.
            </p>
            <a 
              href="https://github.com/MdHuzaifa018" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-xl font-bold uppercase tracking-widest text-xs bg-white text-slate-900 hover:scale-105 transition-all shadow-lg"
            >
              Check My GitHub Repositories
            </a>
          </div>

        </article>

      </div>
    </div>
  );
};

export default Blog1;