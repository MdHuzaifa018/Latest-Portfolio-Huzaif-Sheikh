import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHome, FaUser, FaBriefcase, FaPenNib, FaEnvelope, FaSun, FaMoon } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';

const navLinks = [
  { name: "Home", id: "hero", icon: <FaHome /> },
  { name: "About", id: "about", icon: <FaUser /> },
  { name: "Works", id: "projects", icon: <FaBriefcase /> },
  { name: "Insights", id: "blog", icon: <FaPenNib /> },
  { name: "Interface", id: "contact", icon: <FaEnvelope /> },
];

const Navbar = ({ theme, toggleTheme }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeSection, setActiveSection] = useState("hero");
  
  const navigate = useNavigate();
  const location = useLocation();

  const isDark = theme === 'dark';
  const themeColors = {
    dockBg: isDark ? 'rgba(0, 0, 0, 0.4)' : 'rgba(255, 255, 255, 0.7)',
    dockBorder: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.05)',
    textPrimary: isDark ? '#ffffff' : '#0f172a',
    textSecondary: isDark ? '#94a3b8' : '#64748b',
    hoverBg: isDark ? 'rgba(99, 102, 241, 0.1)' : 'rgba(79, 70, 229, 0.08)',
    accent: '#6366f1', 
    shadow: isDark ? '0 20px 50px rgba(0,0,0,0.5)' : '0 10px 30px rgba(0,0,0,0.04)',
  };

  // 1. SCROLL SPY LOGIC
  useEffect(() => {
    if (location.pathname !== '/') return;
    const handleScroll = () => {
      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 300; // Offset for detection

      sections.forEach(section => {
        if (section && scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
          setActiveSection(section.id);
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // 2. CLEAN NAVIGATION HANDLER
  const handleNavClick = (id) => {
    if (location.pathname === '/') {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        // Clean URL by replacing current state without adding to history
        window.history.replaceState(null, '', ' '); 
      }
    } else {
      // Navigate home with hash for the cross-page effect
      navigate(`/#${id}`);
    }
  };

  const handleBrandClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
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
          element.scrollIntoView({ behavior: 'smooth' });
          // After scrolling starts, remove hash from URL bar for cleanliness
          setTimeout(() => {
             window.history.replaceState(null, '', ' ');
          }, 1000); 
        }
      }, 150);
    }
  }, [location]);

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] h-24 flex justify-center items-center pointer-events-none font-sans" style={{ backgroundColor: 'var(--surface)' }}>
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex items-center gap-4 pointer-events-auto px-4"
      >
        <div 
          onClick={handleBrandClick}
          className="hidden md:flex items-center gap-3 backdrop-blur-3xl px-5 py-3 rounded-2xl border cursor-pointer transition-all duration-500 shadow-xl"
          style={{ backgroundColor: themeColors.dockBg, borderColor: themeColors.dockBorder }}
        >
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-black italic shadow-lg">H</div>
          <div className="flex flex-col">
            <span className="font-bold text-[12px] uppercase tracking-tighter leading-none" style={{ color: themeColors.textPrimary }}>Huzaif Sheikh</span>
            <span className="font-mono text-[8px] uppercase tracking-[0.2em] mt-1 italic" style={{ color: themeColors.textSecondary }}>System_v4</span>
          </div>
        </div>

        <div 
          className="backdrop-blur-3xl text-[12px] px-2 py-2 rounded-[2rem] flex items-center gap-1 border transition-all duration-500"
          style={{ backgroundColor: themeColors.dockBg, borderColor: themeColors.dockBorder, boxShadow: themeColors.shadow }}
        >
          {navLinks.map((link, i) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.id)}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative px-3 py-3 md:px-6 rounded-2xl flex items-center gap-3 transition-all group overflow-hidden"
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
                  className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full shadow-[0_0_8px_#6366f1]"
                  style={{ backgroundColor: themeColors.accent }}
                />
              )}

              <span className="relative z-10 text-[20px] transition-transform duration-300 group-hover:scale-110" 
                    style={{ color: (activeSection === link.id && location.pathname === '/') ? themeColors.accent : themeColors.textSecondary }}>
                {link.icon}
              </span>
              <span className="relative z-10 hidden md:block font-mono text-[14px] uppercase tracking-[0.3em] font-black" 
                    style={{ color: (activeSection === link.id && location.pathname === '/') ? themeColors.textPrimary : themeColors.textSecondary }}>
                {link.name}
              </span>
            </button>
          ))}

          <div className="h-6 w-[1px] mx-2 opacity-20" style={{ backgroundColor: themeColors.textSecondary }} />
          
          <button
            onClick={toggleTheme}
            className="w-12 h-12 flex items-center justify-center rounded-xl transition-all hover:bg-indigo-500/10"
            style={{ color: themeColors.textSecondary }}
          >
            <motion.div
              key={theme}
              initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              {isDark ? <FaMoon size={16} /> : <FaSun size={18} className="text-amber-500" />}
            </motion.div>
          </button>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;