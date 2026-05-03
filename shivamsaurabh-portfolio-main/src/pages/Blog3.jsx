import React, { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { 
  FaServer, FaMicrochip, FaCloudDownloadAlt, FaSync, FaSearch, 
  FaCode, FaCheckCircle, FaExclamationTriangle, FaArrowLeft, FaShareAlt, FaQuoteLeft, FaLightbulb
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Blog3 = ({ theme }) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const isDark = theme === 'dark';
  const colors = {
    bg: isDark ? '#050505' : '#ffffff',
    text: isDark ? '#f8fafc' : '#0f172a',
    accent: '#2563eb',
    accentGlass: 'rgba(37, 99, 235, 0.1)',
    card: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.8)',
    border: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(37, 99, 235, 0.15)'
  };

  return (
    <div style={{ backgroundColor: colors.bg, color: colors.text }} className="min-h-screen font-sans selection:bg-blue-600 selection:text-white transition-colors duration-700 overflow-x-hidden">
      
      {/* GLOBAL PROGRESS BAR */}
      <motion.div className="fixed top-0 left-0 right-0 h-1.5 origin-left z-[100] shadow-[0_0_15px_rgba(37,99,235,0.5)]" style={{ scaleX, background: colors.accent }} />

      {/* NAVIGATION */}
      <nav className="fixed top-0 w-full p-4 md:p-8 flex justify-between items-center z-50 mix-blend-difference text-white">
        <Link to="/" className="group flex items-center gap-2 font-mono text-[9px] md:text-[10px] tracking-[0.2em] md:tracking-[0.4em] transition-all">
          <FaArrowLeft className="group-hover:-translate-x-2 transition-transform" /> BACK_TO_HOME
        </Link>
        <FaShareAlt className="cursor-pointer text-sm md:text-base" />
      </nav>

      {/* HERO SECTION */}
      <header className="relative min-h-screen w-full flex items-center justify-center overflow-hidden border-b" style={{ borderColor: colors.border }}>
        <motion.img
          initial={{ scale: 1.4, opacity: 0 }}
          animate={{ scale: 1, opacity: isDark ? 0.2 : 0.1 }}
          transition={{ duration: 2 }}
          src="https://iili.io/f6YY5DG.md.webp"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: `linear-gradient(to bottom, transparent, ${colors.bg})` }} />

        <div className="relative z-10 max-w-7xl px-6 py-20 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="mb-6 md:mb-10 inline-block">
            <span className="px-4 py-1.5 md:px-6 md:py-2 rounded-full text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.6em] border-2" 
                  style={{ borderColor: colors.accent, color: colors.accent }}>
              Protocol // System_Architecture
            </span>
          </motion.div>
          <motion.h1
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl sm:text-7xl md:text-9xl lg:text-[11rem] font-[1000] italic uppercase tracking-tighter leading-[0.9] md:leading-[0.8] mb-8 md:mb-12 drop-shadow-2xl"
          >
            React Server <br />
            <span className="text-transparent stroke-current" style={{ WebkitTextStroke: `clamp(1px, 0.2vw, 2px) ${colors.text}`, color: 'transparent' }}>Components</span>
          </motion.h1>
          <p className="font-mono text-[8px] md:text-[10px] uppercase tracking-[0.4em] md:tracking-[0.8em] opacity-40">2026 Performance Manifesto // Manual_03</p>
        </div>
      </header>

      {/* ABSTRACT SECTION */}
      <section className="py-20 md:py-40 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-64 md:w-96 h-64 md:h-96 bg-blue-500/10 blur-[80px] md:blur-[120px] rounded-full" />
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.5em] mb-8 md:mb-12" style={{ color: colors.accent }}>/ Abstract_Layer</h2>
          <p className="text-3xl md:text-5xl lg:text-6xl font-light italic leading-[1.1] tracking-tight mb-10 md:mb-16 border-l-4 md:border-l-[12px] pl-6 md:pl-12 transition-all" 
             style={{ borderColor: colors.accent }}>
            The paradigm is shifting. React is moving back to the <span className="font-black underline decoration-blue-500/30" style={{ color: colors.accent }}>server</span>, rendering logic at the source.
          </p>
          <p className="text-lg md:text-2xl leading-relaxed opacity-60 font-light max-w-3xl">
            RSC allows components to run on the server, effectively deleting client-side bundle weight and optimizing data fetching in a single round trip.
          </p>
        </div>
      </section>

      {/* CORE CONCEPTS GRID */}
      <section className="py-20 md:py-40 px-4 md:px-6 border-y" style={{ backgroundColor: isDark ? '#0a0a0a' : '#f0f4ff', borderColor: colors.border }}>
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 md:gap-24 items-center">
          <div>
            <div className="flex items-center gap-4 mb-8 md:mb-12">
               <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-xl shadow-blue-500/20">
                  <FaSync className="animate-spin-slow text-sm md:text-base" />
               </div>
               <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter leading-none">The Mechanism</h2>
            </div>
            
            <div className="space-y-4 md:space-y-6">
              {[
                { t: "Smaller JS Bundles", d: "Server logic stays server-side.", i: <FaCloudDownloadAlt/> },
                { t: "Zero Waterfall", d: "Instant data access via DB directly.", i: <FaServer/> },
                { t: "Better SEO", d: "Fully indexed HTML streams.", i: <FaSearch/> }
              ].map((item, idx) => (
                <motion.div whileHover={{ scale: 1.02 }} key={idx} 
                            className="flex items-center gap-4 md:gap-6 p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border-2 backdrop-blur-xl transition-all"
                            style={{ backgroundColor: colors.card, borderColor: colors.border }}>
                  <div className="text-2xl md:text-4xl" style={{ color: colors.accent }}>{item.i}</div>
                  <div>
                    <h5 className="font-black uppercase italic text-lg md:text-xl tracking-tighter leading-none mb-1">{item.t}</h5>
                    <p className="text-xs md:text-sm opacity-60 font-medium">{item.d}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="relative group p-1 mt-10 lg:mt-0">
             <div className="absolute inset-0 bg-blue-600 rounded-[2.5rem] md:rounded-[4rem] blur-2xl md:blur-3xl opacity-20 group-hover:opacity-40 transition-opacity" />
             <div className="relative p-8 md:p-16 bg-blue-600 rounded-[2rem] md:rounded-[3.5rem] text-white shadow-2xl overflow-hidden">
                <FaMicrochip className="text-7xl md:text-9xl absolute -right-6 -bottom-6 opacity-10 rotate-12"/>
                <h4 className="text-3xl md:text-4xl font-[1000] uppercase italic mb-6 md:mb-8 leading-tight">Hydration <br/> Revolution</h4>
                <p className="text-base md:text-xl leading-relaxed text-blue-100 font-light">
                  "By delegating heavy logic to the server, we focus the browser solely on interactivity. This is the end of slow initial loads."
                </p>
                <div className="mt-8 md:mt-12 h-1 w-16 md:w-24 bg-white rounded-full" />
             </div>
          </div>
        </div>
      </section>

      {/* IMPLEMENTATION LOG */}
      <section className="py-20 md:py-40 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-3xl sm:text-4xl md:text-6xl font-black uppercase italic mb-12 md:mb-24 tracking-tighter underline decoration-blue-500/20 underline-offset-[10px] md:underline-offset-[20px]">Logic_Architecture</h2>
          <div className="grid lg:grid-cols-2 gap-6 md:gap-12">
            {[
              { file: "UserProfile.server.js", code: "export default async function Profile() {\n  const user = await db.user.first();\n  return <section>{user.bio}</section>;\n}", color: "bg-blue-600" },
              { file: "Action.client.js", code: "'use client';\nimport Profile from './Profile.server';\n\nexport default function App() {\n  return <Profile />;\n}", color: "bg-cyan-500" }
            ].map((snippet, i) => (
              <div key={i} className="rounded-[1.5rem] md:rounded-[3rem] p-6 md:p-12 border-2 transition-all hover:shadow-2xl" 
                   style={{ backgroundColor: colors.card, borderColor: colors.border }}>
                <div className="flex items-center gap-3 mb-6 md:mb-8">
                   <div className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${snippet.color}`} />
                   <span className="text-[8px] md:text-[10px] font-mono uppercase tracking-widest font-black opacity-40">{snippet.file}</span>
                </div>
                <pre className="text-xs sm:text-sm md:text-lg font-mono leading-relaxed overflow-x-auto text-blue-600 dark:text-blue-400">
                  <code>{snippet.code}</code>
                </pre>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDY MATRIX */}
      <section className="py-20 md:py-40 px-4 md:px-6 border-t" style={{ backgroundColor: isDark ? '#000' : '#f8faff' }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 md:gap-12">
          <div className="p-8 md:p-16 rounded-[2rem] md:rounded-[4rem] bg-white dark:bg-zinc-900 border-2 md:border-4 border-green-500/10 shadow-2xl">
            <h4 className="text-2xl md:text-4xl font-black italic uppercase mb-8 md:mb-12 text-green-600 tracking-tighter">Optimal_Use</h4>
            <ul className="space-y-4 md:space-y-8 text-lg md:text-xl font-medium italic">
              {['Dynamic Dashboards', 'Content Hubs', 'SEO-E-commerce', 'Static Docs'].map(i => (
                <li key={i} className="flex items-center text-slate-500 dark:text-amber-400 gap-4 md:gap-6 opacity-80 leading-tight">
                  <FaCheckCircle className="text-green-500 text-xl md:text-3xl shrink-0" /> {i}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-8 md:p-16 rounded-[2rem] md:rounded-[4rem] bg-white dark:bg-zinc-900 border-2 md:border-4 border-red-500/10 shadow-2xl">
            <h4 className="text-2xl md:text-4xl font-black italic uppercase mb-8 md:mb-12 text-red-600 tracking-tighter">Avoid_Logic</h4>
            <ul className="space-y-4 md:space-y-8 text-lg md:text-xl font-medium italic">
              {['Live Modals', 'Real-time Inputs', 'Geolocations', 'Scroll Animations'].map(i => (
                <li key={i} className="flex items-center text-slate-500 dark:text-teal-300 gap-4 md:gap-6 opacity-80 leading-tight">
                  <FaExclamationTriangle className="text-red-500 text-xl md:text-3xl shrink-0" /> {i}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA FOOTER */}
      <footer className="py-20 md:py-40 px-6 text-center border-t relative overflow-hidden" style={{ borderColor: colors.border }}>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-96 bg-blue-600/5 blur-[150px] rounded-full" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <FaQuoteLeft className="mx-auto text-5xl md:text-8xl opacity-5 mb-8 md:min-16" style={{ color: colors.accent }}/>
          <h3 className="text-[10px] font-mono uppercase tracking-[0.5em] md:tracking-[1em] text-blue-600 mb-8 md:mb-12">/ Protocol_End</h3>
          <p className="text-4xl sm:text-5xl md:text-8xl font-black uppercase italic mb-12 md:mb-20 tracking-tighter leading-[1] md:leading-[0.9]">
            Build for the <br/> 
            <span className="text-transparent stroke-current" style={{ WebkitTextStroke: `clamp(1px, 0.15vw, 2px) ${colors.text}` }}>Server Era.</span>
          </p>
          
          <div className="relative p-10 md:p-20 lg:p-32 rounded-[2.5rem] md:rounded-[5rem] overflow-hidden bg-[#0f172a] text-white shadow-3xl">
            <div className="absolute -top-24 -right-24 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-600/20 blur-[80px] md:blur-[120px]" />
            <div className="relative z-10">
                <FaLightbulb className="mx-auto text-4xl md:text-7xl mb-8 md:mb-12 text-blue-400" />
                <h3 className="text-3xl md:text-5xl lg:text-7xl font-[1000] uppercase italic mb-6 md:mb-10 tracking-tighter leading-tight">Initialize?</h3>
                <p className="text-blue-100 mb-10 md:mb-16 text-base md:text-2xl max-w-2xl mx-auto font-light leading-relaxed">
                  Is your stack ready for RSC? Let's architect a lightning-fast performance engine for your next vision.
                </p>
                <Link to="/#contact" className="inline-block bg-white text-black px-10 py-4 md:px-16 md:py-6 rounded-xl md:rounded-2xl font-[1000] uppercase text-[10px] md:text-xs tracking-[0.2em] md:tracking-[0.4em] hover:bg-blue-500 hover:text-white transition-all shadow-2xl active:scale-95">
                  START_OPTIMIZING
                </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Blog3;