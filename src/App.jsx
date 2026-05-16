import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

// Components
import PageLoader from './components/PageLoader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Pages
import Blog1 from './pages/Blog1';
import Blog2 from './pages/Blog2';
import Blog3 from './pages/Blog3';

const MainPortfolio = ({ theme }) => (
  <main className="bg-white dark:bg-[#050505] text-black dark:text-white transition-colors duration-500 pt-20 md:pt-24">
    <div className="flex flex-col">
      <Hero theme={theme}/>
      <About theme={theme} />
      <Education theme={theme} />
      <Experience theme={theme} />
      <Projects theme={theme} />
      <Skills theme={theme} />
      <section className="h-screen overflow-hidden">
        <Certificates theme={theme} />
      </section>
      <Testimonials theme={theme} />
      <Blog theme={theme} />
      <Contact theme={theme} />
    </div>
    <Footer theme={theme} />
  </main>
);

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <Router>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <PageLoader
            key="loader"
            onComplete={() => setIsLoading(false)}
            theme={theme}
          />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Navbar theme={theme} toggleTheme={toggleTheme} />

            <Routes>
              <Route path="/" element={<MainPortfolio theme={theme} />} />
              <Route path="/blog/open-source-growth" element={<Blog1 theme={theme} />} />
              <Route path="/blog/ai-future" element={<Blog2 theme={theme} />} />
              <Route path="/blog/react-performance" element={<Blog3 theme={theme} />} />
              {/* Ensure catch-all also uses the MainPortfolio layout */}
              <Route path="*" element={<MainPortfolio theme={theme} />} />
            </Routes>
          </motion.div>
        )}
      </AnimatePresence>
    </Router>
  );
}

export default App;