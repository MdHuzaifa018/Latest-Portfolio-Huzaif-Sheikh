import React, { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { 
  FaClock, FaArrowLeft, FaShareAlt, FaTerminal, FaGithub, 
  FaRocket, FaUsers, FaCode, FaCodeBranch, FaBrain, FaDollarSign, FaLink, FaLightbulb 
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Blog1 = ({ theme }) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const colors = {
    bg: theme === 'dark' ? '#000000' : '#ffffff',
    sectionBg: theme === 'dark' ? '#0b0c10' : '#ffffff',
    cardBg: theme === 'dark' ? '#11141b' : '#f8fafc',
    text: theme === 'dark' ? '#f8fafc' : '#0f172a',
    subtext: theme === 'dark' ? '#94a3b8' : '#475569',
    highlight: theme === 'dark' ? '#818cf8' : '#4f46e5',
    border: theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.06)',
  };

  return (
    <div style={{ backgroundColor: colors.bg, color: colors.text }} className="min-h-screen font-sans selection:bg-indigo-500 selection:text-white transition-colors duration-500">
      
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 origin-left z-50" 
        style={{ scaleX, backgroundColor: colors.highlight }} 
      />

      <nav className="fixed top-0 w-full p-4 sm:p-6 md:p-8 flex justify-between items-center z-50 mix-blend-difference">
        <Link to="/" className="group flex items-center gap-2 font-mono text-[10px] tracking-[0.3em] text-white transition-all">
          <FaArrowLeft className="group-hover:-translate-x-2 transition-transform" /> BACK TO HOME
        </Link>
        <FaShareAlt className="cursor-pointer text-white" />
      </nav>

      <header className="relative h-screen w-full flex items-center justify-center overflow-hidden border-b transition-colors" style={{ borderColor: colors.border }}>
        <motion.img 
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: theme === 'dark' ? 0.3 : 0.15 }}
          transition={{ duration: 1.5 }}
          src="https://iili.io/f677edF.md.webp" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: `linear-gradient(to bottom, transparent, ${colors.bg})` }} />
        
        <div className="relative z-10 max-w-6xl px-4 sm:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <span className="font-mono text-[10px] tracking-[0.8em] uppercase opacity-50 block mb-6">Archive_Entry_01</span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[10rem] font-[1000] italic uppercase tracking-tighter leading-[0.9] mb-12">
              The Power of <br /> 
              <span className="text-indigo-600 dark:text-indigo-400 not-italic">Open Source</span>
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 font-mono text-[10px] uppercase tracking-[0.4em]" style={{ color: colors.subtext }}>
              <div className="flex items-center gap-2"><FaClock style={{ color: colors.highlight }} /> 12 Min Read</div>
              <div className="hidden md:block opacity-30">|</div>
              <div>13 Feb, 2025</div>
            </div>
          </motion.div>
        </div>
      </header>

      <section className="py-24 sm:py-32 md:py-40 px-4 sm:px-6 relative overflow-hidden" style={{ backgroundColor: colors.bg }}>
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 style={{ color: colors.highlight }} className="font-mono text-[10px] uppercase tracking-[0.5em] mb-12">/ Executive_Summary</h2>
          <p className="text-2xl sm:text-3xl md:text-5xl leading-[1.1] font-medium tracking-tight mb-12 italic">
            "In a world of proprietary walls, <span className="text-indigo-600 dark:text-indigo-400">collaboration</span> is the ultimate competitive advantage."
          </p>
          <div className="space-y-8 text-base sm:text-lg md:text-xl leading-relaxed font-light" style={{ color: colors.subtext }}>
            <p>
              Developers who actively engage in open-source contributions gain hands-on experience that classrooms cannot simulate. You aren't just writing code; you are participating in a global conversation.
            </p>
            <p>
              Whether you're a student at <span className="text-zinc-900 dark:text-zinc-100 font-bold">Nalanda College</span> or a senior engineer, the projects you build outside your 9-to-5 are the true indicators of your trajectory.
            </p>
          </div>
        </div>
        <div className="absolute top-1/2 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-indigo-500/5 blur-[120px] rounded-full" />
      </section>

      <section className="py-24 sm:py-32 md:py-40 px-4 sm:px-6 border-y transition-colors" style={{ backgroundColor: colors.bg, borderColor: colors.border }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <span className="w-12 h-[1px] bg-indigo-600" />
              <span className="font-mono text-[10px] tracking-widest uppercase text-indigo-600">Module_01</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase italic mb-8 tracking-tighter">Real-World <br/> Learning</h2>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-10 opacity-70">
              Tutorials are a controlled environment. Open source is the wild. Here is where you learn how to survive.
            </p>
            <div className="grid grid-cols-1 gap-4">
              {['Debugging production-level complexity', 'Implementing clean-code architecture', 'Version control in team environments', 'Mastering the art of Peer Review'].map((t, i) => (
                <motion.div 
                  whileHover={{ x: 10 }}
                  key={t} 
                  className="flex items-center gap-4 p-4 rounded-xl border group transition-all"
                  style={{ borderColor: colors.border, backgroundColor: colors.cardBg }}
                >
                  <span className="text-indigo-500 font-bold">0{i+1}</span>
                  <span className="font-mono text-xs uppercase tracking-widest">{t}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-indigo-500/10 rounded-[4rem] blur-2xl group-hover:bg-indigo-500/20 transition-all" />
            <div className="relative p-8 sm:p-12 rounded-[3.5rem] border shadow-2xl transition-all" style={{ backgroundColor: colors.cardBg, borderColor: colors.border }}>
              <FaCode className="text-5xl text-indigo-600 mb-8" />
              <h4 className="font-black text-3xl mb-6 uppercase italic">Unrestricted Stacks</h4>
              <p className="text-base sm:text-lg leading-relaxed opacity-60">
                Side projects let you experiment with <span className="text-indigo-600 font-bold">Tailwind v4</span>, <span className="text-indigo-600 font-bold">Framer Motion</span>, or <span className="text-indigo-600 font-bold">Rust</span> without permission from a manager. This is your R&D lab.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-24 sm:py-32 md:py-40 px-4 sm:px-6 text-center" style={{ backgroundColor: colors.bg }}>
        <div className="max-w-4xl mx-auto">
          <h3 className="text-sm font-mono uppercase tracking-[0.6em] text-indigo-600 mb-8">/ Final_Thoughts</h3>
          <p className="text-3xl sm:text-4xl md:text-6xl font-black uppercase italic mb-16 tracking-tighter leading-none">
            Your portfolio is your <br/> <span className="text-transparent stroke-current" style={{ WebkitTextStrokeWidth: '1.5px' }}>true resume.</span>
          </p>

          <div className="relative p-8 sm:p-16 md:p-24 rounded-[2.5rem] sm:rounded-[4rem] overflow-hidden bg-zinc-950 text-white shadow-2xl">
            <div className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-indigo-500/20 blur-[100px]" />
            <div className="relative z-10">
              <FaLightbulb className="mx-auto text-5xl mb-8 text-indigo-400" />
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-[1000] uppercase italic mb-6 tracking-tighter">What’s Your Next Move?</h3>
              <p className="text-zinc-400 mb-12 text-base sm:text-lg max-w-xl mx-auto font-light">
                Don't wait for a job to build. Build to get the job. The community is waiting for your pull request.
              </p>
              <Link to="/#contact" className="inline-block bg-white text-black px-10 sm:px-12 py-4 sm:py-5 rounded-2xl font-black uppercase text-[10px] tracking-[0.3em] hover:bg-indigo-400 hover:text-white transition-all shadow-xl active:scale-95">
                START COLLABORATING
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Blog1;