import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHome, FaUser, FaBriefcase, FaPenNib, FaEnvelope, FaSun, FaMoon, FaBars, FaTimes, FaCode } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';
import { getLenis } from './SmoothScroll';

const navLinks = [
  { name: "Home", path: "/", icon: <FaHome /> },
  { name: "About", path: "/about", icon: <FaUser /> },
  { name: "Skills", path: "/skills", icon: <FaCode /> },
  { name: "Projects", path: "/projects", icon: <FaBriefcase /> },
  { name: "Blog", path: "/blog", icon: <FaPenNib /> },
  { name: "Contact", path: "/contact", icon: <FaEnvelope /> },
];

const Navbar = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
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
    accent: 'var(--accent)',
    shadow: 'var(--nav-shadow)',
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
    const lenis = getLenis();
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.0 });
    } else {
      window.scrollTo(0, 0);
    }
  };

  const handleBrandClick = () => {
    navigate('/');
    setIsMobileMenuOpen(false);
    const lenis = getLenis();
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.0 });
    } else {
      window.scrollTo(0, 0);
    }
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 w-full z-[100] h-20 md:h-24 flex justify-between md:justify-center items-center px-4 font-sans transition-all duration-300"
        style={{ backgroundColor: scrolled ? (isDark ? 'rgba(10, 15, 28, 0.8)' : 'rgba(255, 255, 255, 0.8)') : 'transparent', backdropFilter: scrolled ? 'blur(12px)' : 'none', borderBottom: scrolled ? `1px solid ${themeColors.dockBorder}` : '1px solid transparent' }}
      >
        {/* Brand logo - visible on both */}
        <motion.div 
          onClick={handleBrandClick}
          className="flex items-center gap-3 px-3 md:px-5 py-2 md:py-3 rounded-2xl border cursor-pointer transition-all duration-500 shadow-xl relative overflow-hidden group"
          style={{ backgroundColor: themeColors.dockBg, borderColor: themeColors.dockBorder, backdropFilter: 'blur(24px)' }}
          whileHover={{ scale: 1.03, boxShadow: '0 15px 30px var(--accent-muted)' }}
          whileTap={{ scale: 0.97 }}
        >
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
            style={{ background: `radial-gradient(ellipse at center, var(--accent-muted), transparent)` }}
          />
          <motion.div
            className="w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center font-black italic shadow-lg relative z-10"
            style={{ backgroundColor: 'var(--accent)', color: 'var(--accent-fg)' }}
            whileHover={{ rotate: [0, -10, 10, 0] }}
            transition={{ duration: 0.4 }}
          >
            H
          </motion.div>
          <div className="flex flex-col relative z-10">
            <span className="font-bold text-[12px] md:text-[14px] uppercase tracking-tighter leading-none" style={{ color: themeColors.textPrimary }}>Huzaif Sheikh</span>
            <span className="font-mono text-[8px] md:text-[10px] uppercase tracking-[0.2em] mt-1 md:mt-1.5 italic" style={{ color: themeColors.textSecondary }}>System_v4</span>
          </div>
        </motion.div>

        {/* Desktop Navigation pill */}
        <div 
          className="hidden md:flex backdrop-blur-[40px] text-[12px] px-1.5 py-1.5 rounded-[2rem] items-center gap-1 border transition-all duration-500 relative overflow-hidden mx-4"
          style={{ backgroundColor: themeColors.dockBg, borderColor: themeColors.dockBorder, boxShadow: themeColors.shadow }}
        >
          {navLinks.map((link, i) => {
            const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
            return (
              <motion.button
                key={link.name}
                onClick={() => handleNavClick(link.path)}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative px-3 py-2 lg:px-5 lg:py-2.5 rounded-2xl flex items-center gap-2.5 transition-all group overflow-hidden"
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

                {isActive && (
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
                  className="relative z-10 text-[17px] lg:text-[19px] transition-transform duration-300"
                  style={{ color: isActive ? themeColors.accent : themeColors.textSecondary }}
                  animate={hoveredIndex === i ? { scale: 1.2, y: -2 } : { scale: 1, y: 0 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  {link.icon}
                </motion.span>
                <span
                  className="relative z-10 hidden xl:block font-mono text-[12px] uppercase tracking-[0.2em] font-black"
                  style={{ color: isActive ? themeColors.textPrimary : themeColors.textSecondary }}
                >
                  {link.name}
                </span>
              </motion.button>
            )
          })}
        </div>

        {/* Right side controls (Desktop + Mobile toggle) */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <motion.button
            onClick={toggleTheme}
            className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-xl border backdrop-blur-3xl transition-all relative overflow-hidden group shadow-lg"
            style={{ color: themeColors.textSecondary, backgroundColor: themeColors.dockBg, borderColor: themeColors.dockBorder }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              key={theme}
              initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              {isDark ? <FaMoon size={16} /> : <FaSun size={18} className="text-amber-500" />}
            </motion.div>
          </motion.button>

          {/* Mobile Menu Hamburger */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl border backdrop-blur-3xl transition-all relative overflow-hidden shadow-lg"
            style={{ color: themeColors.textPrimary, backgroundColor: themeColors.dockBg, borderColor: themeColors.dockBorder }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaBars size={18} />
          </motion.button>
        </div>
      </nav>

      {/* Mobile Sidebar Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[101]"
            />
            
            {/* Sidebar */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-full w-4/5 max-w-sm z-[102] flex flex-col p-6 shadow-2xl border-l"
              style={{ backgroundColor: 'var(--card-bg)', borderColor: themeColors.dockBorder }}
            >
              <div className="flex justify-between items-center mb-10">
                <div className="flex flex-col">
                  <span className="font-bold text-xl uppercase tracking-tighter" style={{ color: themeColors.textPrimary }}>Menu</span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] italic" style={{ color: themeColors.textSecondary }}>Navigation</span>
                </div>
                <motion.button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-10 h-10 flex items-center justify-center rounded-xl border bg-transparent"
                  style={{ color: themeColors.textPrimary, borderColor: themeColors.dockBorder }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaTimes size={18} />
                </motion.button>
              </div>

              <div className="flex flex-col gap-4">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
                  return (
                    <motion.button
                      key={link.name}
                      onClick={() => handleNavClick(link.path)}
                      className="flex items-center gap-4 p-4 rounded-2xl border text-left transition-all"
                      style={{ 
                        backgroundColor: isActive ? 'var(--accent-muted)' : 'transparent',
                        borderColor: isActive ? 'var(--accent-border)' : themeColors.dockBorder,
                      }}
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="text-xl" style={{ color: isActive ? themeColors.accent : themeColors.textSecondary }}>
                        {link.icon}
                      </span>
                      <span className="font-mono text-base uppercase tracking-widest font-bold" style={{ color: isActive ? themeColors.accent : themeColors.textPrimary }}>
                        {link.name}
                      </span>
                    </motion.button>
                  );
                })}
              </div>

              <div className="mt-auto pt-6 border-t" style={{ borderColor: themeColors.dockBorder }}>
                <p className="text-xs font-mono opacity-50 text-center uppercase tracking-widest" style={{ color: themeColors.textSecondary }}>
                  System Active • v4.0
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;