import React, { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

// Core Components (Loaded immediately for instant paint & perfect scroll triggers)
import PageLoader from './components/PageLoader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './pages/About';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Certificates from './pages/Certificates';
import Testimonials from './pages/Testimonials';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Footer from './components/Footer';

// Enhancement Components
import SmoothScroll, { getLenis } from './components/SmoothScroll';
import AnimatedBackground from './components/AnimatedBackground';
import LazySection from './components/LazySection';
import WhatsAppButton from './components/WhatsAppButton';
import BackToTop from './components/BackToTop';

// Lazy Loaded Pages
const Blog1 = lazy(() => import('./pages/Blog1'));
const Blog2 = lazy(() => import('./pages/Blog2'));
const Blog3 = lazy(() => import('./pages/Blog3'));

// Smooth Route Change Scroll Reset
const ScrollToTopOnNav = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    const lenis = getLenis();
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    }
  }, [pathname]);
  return null;
};

const PageLayout = ({ children }) => (
  <main className="bg-transparent text-black dark:text-white pt-24 min-h-screen flex flex-col">
    <div className="flex-grow">
      {children}
    </div>
    <Footer />
  </main>
);

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
      <ScrollToTopOnNav />
      <SmoothScroll>
        {/* Global animated background - always present */}
        <AnimatedBackground />

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
              <WhatsAppButton />
              <BackToTop />

                <Routes>
                  <Route path="/" element={<PageLayout><Home /></PageLayout>} />
                  <Route path="/about" element={<PageLayout><About /></PageLayout>} />
                  <Route path="/skills" element={<PageLayout><Skills /></PageLayout>} />
                  <Route path="/projects" element={<PageLayout><Projects /></PageLayout>} />
                  <Route path="/experience" element={<PageLayout><Experience /></PageLayout>} />
                  <Route path="/contact" element={<PageLayout><Contact /></PageLayout>} />
                  <Route path="/education" element={<PageLayout><Education /></PageLayout>} />
                  <Route path="/certifications" element={<PageLayout><Certificates /></PageLayout>} />
                  <Route path="/testimonials" element={<PageLayout><Testimonials /></PageLayout>} />
                  <Route path="/blog" element={<PageLayout><Blog /></PageLayout>} />
                  
                  <Route path="/blog/open-source-growth" element={<Suspense fallback={null}><PageLayout><Blog1 /></PageLayout></Suspense>} />
                  <Route path="/blog/ai-future" element={<Suspense fallback={null}><PageLayout><Blog2 /></PageLayout></Suspense>} />
                  <Route path="/blog/react-performance" element={<Suspense fallback={null}><PageLayout><Blog3 /></PageLayout></Suspense>} />
                  
                  {/* Fallback route */}
                  <Route path="*" element={<PageLayout><Home /></PageLayout>} />
                </Routes>
            </motion.div>
          )}
        </AnimatePresence>
      </SmoothScroll>
    </Router>
  );
}

export default App;