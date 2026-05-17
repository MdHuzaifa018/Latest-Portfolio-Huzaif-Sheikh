import React, { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

// Core Components (Loaded immediately for instant paint & perfect scroll triggers)
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

// Enhancement Components
import CustomCursor from './components/CustomCursor';
import SmoothScroll from './components/SmoothScroll';
import AnimatedBackground from './components/AnimatedBackground';
import LazySection from './components/LazySection';


// Lazy Loaded Pages
const Blog1 = lazy(() => import('./pages/Blog1'));
const Blog2 = lazy(() => import('./pages/Blog2'));
const Blog3 = lazy(() => import('./pages/Blog3'));

const MainPortfolio = () => {
  return (
    <main className="bg-transparent text-black dark:text-white pt-20 md:pt-24">
      <div className="flex flex-col">
        <Hero />
        
        <LazySection id="about" height="600px">
          <About />
        </LazySection>

        <LazySection id="education" height="500px">
          <Education />
        </LazySection>

        <LazySection id="experience" height="600px">
          <Experience />
        </LazySection>

        <LazySection id="projects" height="900px">
          <Projects />
        </LazySection>

        <LazySection id="skills" height="500px">
          <Skills />
        </LazySection>

        <LazySection id="certifications" height="800px">
          <Certificates />
        </LazySection>

        <LazySection id="testimonials" height="500px">
          <Testimonials />
        </LazySection>

        <LazySection id="blog" height="600px">
          <Blog />
        </LazySection>

        <LazySection id="contact" height="700px">
          <Contact />
        </LazySection>
      </div>
      
      <LazySection height="300px">
        <Footer />
      </LazySection>
    </main>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Detect if it's a touch device to disable custom cursor
  const isTouchDevice = typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches;

  useEffect(() => {
    const initialTheme = localStorage.getItem("theme") || "dark";
    const root = window.document.documentElement;
    if (initialTheme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, []);

  return (
    <Router>
      <SmoothScroll>
        {/* Global animated background - always present */}
        <AnimatedBackground />

        {/* Custom cursor - only on non-touch devices */}
        {!isTouchDevice && <CustomCursor />}

        <AnimatePresence mode="wait">
          {isLoading ? (
            <PageLoader
              key="loader"
              onComplete={() => setIsLoading(false)}
            />
          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative z-10"
            >
              <Navbar />

              <Routes>
                <Route path="/" element={<MainPortfolio />} />
                <Route path="/blog/open-source-growth" element={
                  <Suspense fallback={null}>
                    <Blog1 />
                  </Suspense>
                } />
                <Route path="/blog/ai-future" element={
                  <Suspense fallback={null}>
                    <Blog2 />
                  </Suspense>
                } />
                <Route path="/blog/react-performance" element={
                  <Suspense fallback={null}>
                    <Blog3 />
                  </Suspense>
                } />
                {/* Ensure catch-all also uses the MainPortfolio layout */}
                <Route path="*" element={<MainPortfolio />} />
              </Routes>
            </motion.div>
          )}
        </AnimatePresence>
      </SmoothScroll>
    </Router>
  );
}

export default App;