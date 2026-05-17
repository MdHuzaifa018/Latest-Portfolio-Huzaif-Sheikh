import React, { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { 
  FaRobot, FaBug, FaCode, FaServer, FaCheckDouble, 
  FaFileAlt, FaChartLine, FaShieldAlt, FaLightbulb, 
  FaBrain, FaArrowLeft, FaShareAlt, FaTerminal, FaQuoteLeft 
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Blog2 = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const colors = {
    bg: 'var(--background)',
    text: 'var(--text-primary)',
    subtext: 'var(--text-secondary)',
    accent: '#06b6d4',
    cardBg: 'var(--card-bg)',
    border: 'var(--card-border)',
  };

  return (
    <div
      style={{ backgroundColor: colors.bg, color: colors.text }}
      className="min-h-screen font-sans selection:bg-cyan-500 selection:text-white "
    >
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 origin-left z-[100]"
        style={{ scaleX, background: colors.accent }}
      />

      <nav className="fixed top-0 w-full p-4 sm:p-6 md:p-8 flex justify-between items-center z-50 mix-blend-difference text-white">
        <Link
          to="/"
          className="group flex items-center gap-2 font-mono text-[10px] tracking-[0.3em] transition-all"
        >
          <FaArrowLeft className="group-hover:-translate-x-2 transition-transform" /> BACK TO HOME
        </Link>
        <FaShareAlt className="cursor-pointer" />
      </nav>

      <header
        className="relative h-screen w-full flex items-center justify-center overflow-hidden border-b "
        style={{ borderColor: colors.border }}
      >
        <motion.img
          initial={{ scale: 1.3, opacity: 0 }}
          animate={{ scale: 1, opacity: 'var(--blog-hero-opacity, 0.15)' }}
          transition={{ duration: 2 }}
          src="https://iili.io/f6Y3Kjs.md.webp"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: `linear-gradient(to bottom, transparent, ${colors.bg})` }}
        />

        <div className="relative z-10 max-w-6xl px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-8 inline-block"
          >
            <span
              className="px-6 py-2 rounded-full text-[10px] font-mono uppercase tracking-[0.5em] border "
              style={{ borderColor: colors.accent, color: colors.accent }}
            >
              Intelligence // Reshaping_Reality
            </span>
          </motion.div>

          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-[11rem] font-[1000] italic uppercase tracking-tighter leading-[0.9] mb-12"
          >
            The Future <br />
            <span
              className="text-transparent stroke-current font-[system-ui]"
              style={{ WebkitTextStroke: `1.5px ${colors.text}`, color: 'transparent' }}
            >
              of AI in Dev
            </span>
          </motion.h1>

          <p className="font-mono text-[10px] uppercase tracking-[0.6em] opacity-40">
            Authored by Shivam • Entry_02 • 2026
          </p>
        </div>
      </header>

      <section className="py-24 sm:py-32 md:py-40 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-4 md:sticky md:top-40 h-fit">
            <h2
              className="font-mono text-[10px] uppercase tracking-[0.5em] border-l-4 pl-6"
              style={{ color: colors.accent, borderColor: colors.accent }}
            >
              / Abstract
            </h2>
          </div>

          <div className="md:col-span-8">
            <p className="text-2xl sm:text-3xl md:text-5xl font-light leading-[1.1] mb-12 italic tracking-tight">
              AI is not just a tool; it's a{' '}
              <span className="text-cyan-600 dark:text-cyan-400 font-bold">
                cognitive extension
              </span>.
            </p>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed opacity-60 font-light">
              As we navigate 2026, the distinction between a 'coder' and a 'system architect'
              is blurring. Every developer is now an AI orchestrator.
            </p>
          </div>
        </div>
      </section>

      <section
        className="py-24 sm:py-32 md:py-40 px-4 sm:px-6 border-y "
        style={{ backgroundColor: colors.cardBg, borderColor: colors.border }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-6 mb-20">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-white bg-cyan-600 shadow-xl shadow-cyan-500/20">
              <FaCode size={28} />
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase italic tracking-tighter">
              01. Neural Generation
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
            <div className="space-y-8">
              <p className="text-base sm:text-lg md:text-xl leading-relaxed opacity-70">
                Natural language is the new syntax. Modern Large Language Models (LLMs)
                are now writing production-ready modules with 98% accuracy.
              </p>

              <div className="space-y-4">
                {[
                  'Latency-optimized code suggestions',
                  'Zero-syntax boilerplate generation',
                  'Context-aware documentation',
                  'Real-time logic correction',
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm transition-all hover:scale-[1.02]"
                  >
                    <span className="w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_10px_#06b6d4]" />
                    <span className="text-zinc-500 font-mono text-xs uppercase tracking-widest">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[3rem] p-6 sm:p-10 md:p-12 relative overflow-hidden bg-zinc-950 text-cyan-400 shadow-2xl">
              <div className="absolute top-0 right-0 p-6 font-mono text-[9px] text-zinc-600 tracking-widest uppercase">
                system_v4 // logic_stream
              </div>
              <pre className="text-sm sm:text-base md:text-lg font-mono overflow-x-auto">
                <code>{`# AI-generated function
def transform_data(input_stream):
    """
    Orchestrating flow
    """
    return [x.optimize() 
            for x in input_stream]`}</code>
              </pre>
              <div className="mt-12 pt-8 border-t border-zinc-800 text-[10px] text-zinc-500 italic uppercase tracking-[0.2em]">
                Status: Verified_By_Kernel
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer
        className="py-24 sm:py-32 md:py-40 px-4 sm:px-6 text-center border-t "
        style={{ backgroundColor: colors.bg, borderColor: colors.border }}
      >
        <div className="max-w-4xl mx-auto">
          <FaQuoteLeft className="mx-auto text-6xl sm:text-7xl opacity-10 mb-12" style={{ color: colors.accent }} />
          <h3 className="text-sm font-mono uppercase tracking-[0.6em] text-cyan-600 mb-8">
            / Termination_Log
          </h3>

          <p className="text-3xl sm:text-5xl md:text-7xl font-black uppercase italic mb-16 tracking-tighter leading-none">
            AI is not the replacement. <br />
            <span
              className="text-transparent stroke-current"
              style={{ WebkitTextStroke: '1.5px currentColor' }}
            >
              It is the superpower.
            </span>
          </p>

          <div className="relative p-8 sm:p-16 md:p-24 rounded-[2.5rem] sm:rounded-[4rem] overflow-hidden bg-zinc-950 text-white shadow-2xl">
            <div className="absolute -top-20 -right-20 w-72 sm:w-96 h-72 sm:h-96 bg-cyan-500/10 blur-[100px]" />
            <div className="relative z-10">
              <FaBrain className="mx-auto text-5xl sm:text-6xl mb-10 text-cyan-400" />
              <h3 className="text-3xl sm:text-4xl md:text-6xl font-black uppercase italic mb-8 tracking-tighter">
                Ready to evolve?
              </h3>
              <p className="text-zinc-400 mb-14 text-base sm:text-lg md:text-xl max-w-xl mx-auto font-light leading-relaxed">
                The future of software is autonomous. Let's discuss how to integrate
                AI-driven architecture into your next project.
              </p>
              <Link
                to="/#contact"
                className="inline-block bg-white text-black px-10 sm:px-12 py-4 sm:py-5 rounded-2xl font-black uppercase text-[10px] tracking-[0.4em] hover:bg-cyan-500 hover:text-white transition-all shadow-xl active:scale-95"
              >
                INITIALIZE_COLLABORATION
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Blog2;