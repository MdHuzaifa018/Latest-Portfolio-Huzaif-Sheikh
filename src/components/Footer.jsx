import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaDev, FaFacebook, FaInstagram } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { getLenis } from './SmoothScroll';


const socialLinks = [
  { icon: <HiOutlineMail />, href: "mailto:mdhuzaifsh786@gmail.com", label: "Email", color: "#ea4335" },
  { icon: <FaGithub />, href: "https://github.com/MdHuzaifa018/", label: "GitHub", color: "#888888" },
  { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/huzaif-sheikh-6443a6330/", label: "LinkedIn", color: "#0077b5" },
  { icon: <FaTwitter />, href: "https://x.com/huzaif_sheikh_1", label: "Twitter", color: "#1da1f2" },
  { icon: <FaDev />, href: "#", label: "Dev.to", color: "#888888" },
  { icon: <FaFacebook />, href: "#", label: "Facebook", color: "#1877f2" },
  { icon: <FaInstagram />, href: "#", label: "Instagram", color: "#e4405f" },
];

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Works' },
  { id: 'blog', label: 'Insights' },
  { id: 'skills', label: 'Interface' },
];

const Footer = () => {
  const year = new Date().getFullYear();
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, amount: 0.1 });

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const lenis = getLenis();
      if (lenis) {
        lenis.scrollTo(element, { 
          offset: -80, 
          duration: 1.2, 
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) 
        });
      } else {
        const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({ top: offsetTop, behavior: "smooth" });
      }
    }
  };

  return (
    <footer ref={footerRef} className="relative pt-40 pb-10 overflow-hidden" style={{ backgroundColor: "var(--background)", color: "var(--text-primary)" }}>
      {/* Animated background glow */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.03, 0.06, 0.03] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] max-w-[800px] max-h-[800px] rounded-full blur-[150px] pointer-events-none"
        style={{ backgroundColor: "var(--accent)", opacity: 0.04 }}
      />

      {/* Top accent divider — single color hairline */}
      <div className="absolute top-0 left-0 right-0 h-[1px] pointer-events-none" style={{ background: "linear-gradient(90deg, transparent, var(--accent), transparent)", opacity: 0.4 }} />

      {/* Large Background Watermark */}
      <div className="absolute bottom-[-2vw] left-1/2 -translate-x-1/2 pointer-events-none select-none w-full text-center">
        <h1 className="text-[22vw] font-[1000] leading-none italic uppercase tracking-tighter" style={{ color: "var(--muted)", opacity: 0.4 }}>HUZAIF</h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">

          {/* Column 1: Identity */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-8">
              <motion.div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-black italic shadow-2xl"
                style={{ background: "linear-gradient(135deg, #8b5cf6, #d946ef)" }}
                animate={{ boxShadow: ["0 20px 40px rgba(0,0,0,0.4), 0 0 20px rgba(139,92,246,0.35)", "0 20px 40px rgba(0,0,0,0.4), 0 0 35px rgba(217,70,239,0.5)", "0 20px 40px rgba(0,0,0,0.4), 0 0 20px rgba(139,92,246,0.35)"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.1, rotate: 10 }}
              >
                H
              </motion.div>
              <h2 className="text-4xl font-[1000] italic uppercase tracking-tighter">Sheikh<span style={{ color: "#8b5cf6" }}>.</span></h2>
            </div>
            <p className="text-sm max-w-sm leading-relaxed font-mono uppercase tracking-[0.1em] font-bold" style={{ color: "var(--text-secondary)" }}>
              Engineering high-performance digital architectures. Bihar_IN // Global_Ops.
            </p>
          </motion.div>

          {/* Column 2: Navigation Map */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 }}>
            <h4 className="text-[11px] font-black font-mono uppercase tracking-[0.5em] mb-8" style={{ color: "#8b5cf6" }}>/ Navigation</h4>
            <ul className="space-y-4 font-mono text-[11px] uppercase tracking-widest">
              {navItems.map((item) => (
                <li key={item.id}>
                  <motion.button onClick={() => scrollToSection(item.id)} className="flex items-center gap-2 group font-bold" style={{ color: "var(--text-secondary)" }} whileHover={{ x: 8, color: "#8b5cf6" }} transition={{ type: "spring", stiffness: 400 }}>
                    <motion.span className="h-[2px]" style={{ backgroundColor: "#8b5cf6" }} initial={{ width: 0 }} whileHover={{ width: 16 }} transition={{ duration: 0.2 }} />
                    {item.label}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Social Bridge */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.2 }}>
            <h4 className="text-[11px] font-black font-mono uppercase tracking-[0.5em] mb-8" style={{ color: "#8b5cf6" }}>/ Social_Bridge</h4>
            <div className="grid grid-cols-4 gap-y-6 gap-x-2">
              {socialLinks.map((social, i) => (
                <motion.a key={i} href={social.href} target="_blank" rel="noopener noreferrer" className="text-2xl relative group" style={{ color: "var(--text-secondary)" }} whileHover={{ y: -6, scale: 1.25, color: social.color, filter: `drop-shadow(0 0 8px ${social.color}60)` }} whileTap={{ scale: 0.9 }} aria-label={social.label} title={social.label}>
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.3 }} className="pt-12 border-t flex flex-col md:flex-row justify-between items-center gap-8" style={{ borderColor: "var(--card-border)" }}>
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10 text-[10px] font-bold font-mono uppercase tracking-[0.3em]" style={{ color: "var(--text-secondary)" }}>
            <span>© {year} [HUZAIF_SHEIKH]</span>
            <span className="hidden md:block w-1 h-1 rounded-full" style={{ backgroundColor: "var(--card-border)" }} />
            <span>Deployment: v4.0.2_Stable</span>
          </div>

          {/* Status Well */}
          <motion.div className="px-6 py-3 rounded-full border backdrop-blur-xl flex items-center gap-3" style={{ backgroundColor: "var(--muted)", borderColor: "var(--card-border)" }} whileHover={{ borderColor: 'rgba(139,92,246,0.4)', boxShadow: '0 0 20px rgba(139,92,246,0.15)' }}>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]" />
            <span className="text-[10px] font-bold font-mono uppercase tracking-[0.2em]" style={{ color: "var(--text-secondary)" }}>
              Live_Node: {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })} IST
            </span>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;