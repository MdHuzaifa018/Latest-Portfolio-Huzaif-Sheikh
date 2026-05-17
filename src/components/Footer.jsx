import React from 'react';
import { motion } from 'framer-motion';
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaDev,
  FaFacebook,
  FaInstagram,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const Footer = ({ theme }) => {
  const year = new Date().getFullYear();
  const isDark = theme === 'dark';

  // 1. GLOBAL THEME MAPPING
  const colors = {
    bg: isDark ? '#050505' : '#ffffff',
    textPrimary: isDark ? '#f8fafc' : '#0f172a',
    textSecondary: isDark ? '#94a3b8' : '#64748b',
    accent: '#6366f1', // Electric Indigo
    border: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.06)',
    watermark: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(15,23,42,0.05)',
    statusBg: isDark ? 'rgba(255,255,255,0.03)' : '#f1f5f9',
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const socialLinks = [
    { icon: <HiOutlineMail />, href: "mailto:mdhuzaifsh786@gmail.com", label: "Email" },
    { icon: <FaGithub />, href: "https://github.com/MdHuzaifa018/", label: "GitHub" },
    { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/huzaif-sheikh-6443a6330/", label: "LinkedIn" },
    { icon: <FaTwitter />, href: "https://x.com/huzaif_sheikh_1", label: "Twitter" },
    { icon: <FaDev />, href: "#", label: "Dev.to" },
    { icon: <FaFacebook />, href: "#", label: "Facebook" },
    { icon: <FaInstagram />, href: "#", label: "Instagram" },
  ];

  return (
    <footer 
      className="relative pt-40 pb-10 overflow-hidden transition-colors duration-500"
      style={{ backgroundColor: colors.bg, color: colors.textPrimary }}
    >
      
      {/* 1. LARGE BACKGROUND TEXT (Dynamic Watermark) */}
      <div className="absolute bottom-[-2vw] left-1/2 -translate-x-1/2 pointer-events-none select-none w-full text-center">
        <h1 
          className="text-[22vw] font-[1000] leading-none italic uppercase tracking-tighter"
          style={{ color: colors.watermark }}
        >
          HUZAIF
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          
          {/* Column 1: Identity */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-8">
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-black italic shadow-2xl"
                style={{ backgroundColor: colors.accent, boxShadow: `0 20px 40px ${isDark ? 'rgba(0,0,0,0.4)' : 'rgba(99,102,241,0.2)'}` }}
              >
                H
              </div>
              <h2 className="text-4xl font-[1000] italic uppercase tracking-tighter">
                Sheikh<span style={{ color: colors.accent }}>.</span>
              </h2>
            </div>
            <p 
              className="text-sm max-w-sm leading-relaxed font-mono uppercase tracking-[0.1em] font-bold"
              style={{ color: colors.textSecondary }}
            >
              Engineering high-performance digital architectures. 
              Bihar_IN // Global_Ops.
            </p>
          </div>

          {/* Column 2: Navigation Map */}
          <div>
            <h4 
              className="text-[11px] font-black font-mono uppercase tracking-[0.5em] mb-8"
              style={{ color: colors.accent }}
            >
              / Navigation
            </h4>
            <ul className="space-y-4 font-mono text-[11px] uppercase tracking-widest">
              {['about', 'projects', 'blog', 'contact'].map((item) => (
                <li key={item}>
                  <button 
                    onClick={() => scrollToSection(item === 'projects' ? 'projects' : item)} 
                    className="flex items-center gap-2 group font-bold transition-all duration-300 hover:translate-x-2"
                    style={{ color: colors.textSecondary }}
                  >
                    <span 
                      className="w-0 group-hover:w-4 h-[2px] transition-all" 
                      style={{ backgroundColor: colors.accent }}
                    />
                    {item === 'blog' ? 'Insights' : item === 'contact' ? 'Interface' : item === 'projects' ? 'Works' : 'About'}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Social Bridge */}
          <div>
            <h4 
              className="text-[11px] font-black font-mono uppercase tracking-[0.5em] mb-8"
              style={{ color: colors.accent }}
            >
              / Social_Bridge
            </h4>
            <div className="grid grid-cols-4 gap-y-6 gap-x-2">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.2, color: colors.accent }}
                  className="text-2xl transition-all"
                  style={{ color: colors.textSecondary }}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* 2. BOTTOM BAR */}
        <div 
          className="pt-12 border-t flex flex-col md:flex-row justify-between items-center gap-8"
          style={{ borderColor: colors.border }}
        >
          <div 
            className="flex flex-col md:flex-row items-center gap-4 md:gap-10 text-[10px] font-bold font-mono uppercase tracking-[0.3em]"
            style={{ color: colors.textSecondary }}
          >
            <span>© {year} [HUZAIF_SHEIKH]</span>
            <span 
              className="hidden md:block w-1 h-1 rounded-full" 
              style={{ backgroundColor: colors.border }}
            />
            <span>Deployment: v4.0.2_Stable</span>
          </div>

          {/* Enhanced Status Well */}
          <div 
            className="px-6 py-3 rounded-full border backdrop-blur-xl flex items-center gap-3"
            style={{ backgroundColor: colors.statusBg, borderColor: colors.border }}
          >
             <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]" />
             <span 
              className="text-[10px] font-bold font-mono uppercase tracking-[0.2em]"
              style={{ color: colors.textSecondary }}
             >
               Live_Node: {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })} IST
             </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;