import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHome, FaUser, FaBriefcase, FaPenNib, FaEnvelope, FaSun, FaMoon } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';
import { getLenis } from './SmoothScroll';


const navLinks = [
  { name: "Home", id: "hero", icon: <FaHome /> },
  { name: "About", id: "about", icon: <FaUser /> },
  { name: "Works", id: "projects", icon: <FaBriefcase /> },
  { name: "Insights", id: "blog", icon: <FaPenNib /> },
  { name: "Interface", id: "contact", icon: <FaEnvelope /> },
];

const Navbar = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  
  const navigate = useNavigate();
  const location = useLocation();

  const isDark = theme === 'dark';

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    const root = window.document.documentElement;
    if (newTheme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", newTheme);
  };

  const themeColors = {
    dockBg: 'var(--dock-bg)',
    dockBorder: 'var(--card-border)',
    textPrimary: 'var(--text-primary)',
    textSecondary: 'var(--text-secondary)',
    hoverBg: 'var(--nav-hover-bg)',
    accent: '#6366f1', 
    shadow: 'var(--nav-shadow)',
  };

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 1. SCROLL SPY LOGIC (Throttled & Passive to prevent Layout Thrashing)
  useEffect(() => {
    if (location.pathname !== '/') return;
    let throttleTimeout = null;

    const handleScroll = () => {
      if (throttleTimeout) return;

      throttleTimeout = setTimeout(() => {
        throttleTimeout = null;
        const sections = navLinks.map(link => document.getElementById(link.id));
        const scrollPosition = window.scrollY + 300;

        sections.forEach(section => {
          if (section && scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
            setActiveSection(section.id);
          }
        });
      }, 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (throttleTimeout) clearTimeout(throttleTimeout);
    };
  }, [location.pathname]);

  // 2. CLEAN NAVIGATION HANDLER
  const handleNavClick = (id) => {
    if (location.pathname === '/') {
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
        window.history.replaceState(null, '', ' '); 
      }
    } else {
      navigate(`/#${id}`);
    }
  };

  const handleBrandClick = () => {
    if (location.pathname === '/') {
      const lenis = getLenis();
      if (lenis) {
        lenis.scrollTo(0, { 
          duration: 1.2, 
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) 
        });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      window.history.replaceState(null, '', ' ');
    } else {
      navigate('/');
    }
  };

  // 3. CROSS-PAGE HASH CLEANER
  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      const id = location.hash.replace('#', '');
      setTimeout(() => {
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
            window.scrollTo({ top: offsetTop, behavior: 'smooth' });
          }
          setTimeout(() => {
             window.history.replaceState(null, '', ' ');
          }, 1000); 
        }
      }, 150);
    }
  }, [location]);

  return (
    <nav
      className="fixed top-0 left-0 w-full z-[100] h-24 flex justify-center items-center pointer-events-none font-sans"
      style={{ backgroundColor: 'transparent' }}
    >
      {/* Bottom blur strip when scrolled */}
      <AnimatePresence>
        {scrolled && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 backdrop-blur-xl pointer-events-none"
            style={{
              borderBottom: '1px solid var(--navbar-blur-border)',
              background: 'var(--navbar-blur-bg)',
            }}
          />
        )}
      </AnimatePresence>

      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 25, delay: 0.1 }}
        className="flex items-center gap-4 pointer-events-auto px-4 relative z-10"
      >
        {/* Brand logo */}
        <motion.div 
          onClick={handleBrandClick}
          className="hidden md:flex items-center gap-3 backdrop-blur-3xl px-5 py-3 rounded-2xl border cursor-pointer transition-all duration-500 shadow-xl relative overflow-hidden group"
          style={{ backgroundColor: themeColors.dockBg, borderColor: themeColors.dockBorder }}
          whileHover={{ scale: 1.03, boxShadow: '0 15px 30px rgba(99,102,241,0.15)' }}
          whileTap={{ scale: 0.97 }}
        >
          {/* Hover glow */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
            style={{ background: `radial-gradient(ellipse at center, rgba(99,102,241,0.08), transparent)` }}
          />
          <motion.div
            className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-black italic shadow-lg relative z-10"
            whileHover={{ rotate: [0, -10, 10, 0] }}
            transition={{ duration: 0.4 }}
          >
            H
          </motion.div>
          <div className="flex flex-col relative z-10">
            <span className="font-bold text-[12px] uppercase tracking-tighter leading-none" style={{ color: themeColors.textPrimary }}>Huzaif Sheikh</span>
            <span className="font-mono text-[8px] uppercase tracking-[0.2em] mt-1 italic" style={{ color: themeColors.textSecondary }}>System_v4</span>
          </div>
        </motion.div>

        {/* Navigation pill */}
        <div 
          className="backdrop-blur-3xl text-[12px] px-2 py-2 rounded-[2rem] flex items-center gap-1 border transition-all duration-500 relative overflow-hidden"
          style={{ backgroundColor: themeColors.dockBg, borderColor: themeColors.dockBorder, boxShadow: themeColors.shadow }}
        >
          {/* Subtle top shine */}
          <div
            className="absolute top-0 left-4 right-4 h-[1px] opacity-30 pointer-events-none"
            style={{ background: `linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)` }}
          />

          {navLinks.map((link, i) => (
            <motion.button
              key={link.name}
              onClick={() => handleNavClick(link.id)}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative px-3 py-3 md:px-6 rounded-2xl flex items-center gap-3 transition-all group overflow-hidden"
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence>
                {hoveredIndex === i && (
                  <motion.div
                    layoutId="nav-hover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 z-0 rounded-2xl"
                    style={{ backgroundColor: themeColors.hoverBg }}
                  />
                )}
              </AnimatePresence>

              {activeSection === link.id && location.pathname === '/' && (
                <motion.div 
                  layoutId="active-pill"
                  className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                  style={{ 
                    backgroundColor: themeColors.accent,
                    boxShadow: `0 0 8px ${themeColors.accent}, 0 0 16px ${themeColors.accent}60`,
                  }}
                />
              )}

              <motion.span
                className="relative z-10 text-[20px] transition-transform duration-300"
                style={{ color: (activeSection === link.id && location.pathname === '/') ? themeColors.accent : themeColors.textSecondary }}
                animate={hoveredIndex === i ? { scale: 1.2, y: -2 } : { scale: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                {link.icon}
              </motion.span>
              <span
                className="relative z-10 hidden md:block font-mono text-[14px] uppercase tracking-[0.3em] font-black"
                style={{ color: (activeSection === link.id && location.pathname === '/') ? themeColors.textPrimary : themeColors.textSecondary }}
              >
                {link.name}
              </span>
            </motion.button>
          ))}

          <div className="h-6 w-[1px] mx-2 opacity-20" style={{ backgroundColor: themeColors.textSecondary }} />
          
          <motion.button
            onClick={toggleTheme}
            className="w-12 h-12 flex items-center justify-center rounded-xl transition-all hover:bg-indigo-500/10 relative overflow-hidden group"
            style={{ color: themeColors.textSecondary }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {/* Ripple on click */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
              style={{ backgroundColor: `rgba(99,102,241,0.1)` }}
            />
            <motion.div
              key={theme}
              initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="relative z-10"
            >
              {isDark ? <FaMoon size={16} /> : <FaSun size={18} className="text-amber-500" />}
            </motion.div>
          </motion.button>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;