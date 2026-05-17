import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Terminal, BookOpen } from 'lucide-react';

const blogPosts = [
  { id: "open-source-growth", category: "Career", image: "https://iili.io/f677edF.md.webp", title: "Why Every Developer Should Work on Open Source", desc: "Open source is not just code — it's collaboration, learning, and building your reputation in the global dev community.", date: "13 Feb, 2025", span: "md:col-span-2", readTime: "5 min read" },
  { id: "ai-future", category: "AI", image: "https://iili.io/f6Y3Kjs.md.webp", title: "Future of AI in Web Dev", desc: "How AI is reshaping the way developers write code, debug, and ship products.", date: "14 Feb, 2025", span: "md:col-span-1", readTime: "4 min read" },
  { id: "react-performance", category: "React", image: "https://iili.io/f6YY5DG.md.webp", title: "React Server Components Performance", desc: "A deep dive into RSC and how they improve initial load time and reduce JavaScript bundle size.", date: "15 Feb, 2025", span: "md:col-span-1", readTime: "6 min read" },
];

const categoryColors = { Career: "#6366f1", AI: "#2dd4bf", React: "#61dafb" };

const Blog = () => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section id="blog" ref={sectionRef} style={{ backgroundColor: "var(--background)", color: "var(--text-primary)" }} className="py-32 relative overflow-hidden">
      {/* CSS overrides for GPU-accelerated hover interactions */}
      <style dangerouslySetInnerHTML={{ __html: `
        .blog-card-lift {
          transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 0.4s ease;
          will-change: transform;
        }
        .blog-card-lift:hover {
          transform: translate3d(0, -8px, 0);
          box-shadow: 0 20px 40px rgba(99, 102, 241, 0.08);
        }
      `}} />

      {/* Section glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full blur-[150px] pointer-events-none opacity-[0.04] dark:opacity-[0.07]" style={{ background: 'radial-gradient(circle, #2dd4bf 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between mb-16 gap-4">
          <div>
            <motion.h2 initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6 }} style={{ color: "#6366f1" }} className="text-sm uppercase tracking-[0.4em] font-mono mb-2">
              / Insights
            </motion.h2>
            <motion.h3 initial={{ opacity: 0, y: 50, skewY: 3 }} animate={inView ? { opacity: 1, y: 0, skewY: 0 } : {}} transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }} className="text-6xl font-black italic uppercase tracking-tighter leading-none">
              Latest <br /> Stories
            </motion.h3>
          </div>

          <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.4 }} style={{ color: "var(--text-secondary)" }} className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-widest self-center">
            <Terminal size={14} style={{ color: "#6366f1" }} /> System.logs(writing)
          </motion.div>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => {
            const catColor = categoryColors[post.category] || "#6366f1";
            return (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + index * 0.13, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className={`${post.span} group relative h-[440px] rounded-[2.5rem] overflow-hidden blog-card-lift`}
                style={{ border: "1px solid var(--card-border)", backgroundColor: "var(--card-bg)" }}
              >
                <Link to={`/blog/${post.id}`} className="block h-full w-full">
                  {/* IMAGE - standard img tag is much lighter than motion.img */}
                  <img src={post.image} alt={post.title} className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-70 transition-all duration-700" />

                  {/* Gradient overlay */}
                  <div style={{ background: "linear-gradient(to top, var(--background) 0%, rgba(0,0,0,0.5) 40%, transparent 100%)" }} className="absolute inset-0" />

                  {/* Hover glow border */}
                  <div className="absolute inset-0 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ boxShadow: `inset 0 0 0 1px ${catColor}40`, background: `radial-gradient(ellipse at top, ${catColor}08, transparent 60%)` }} />

                  {/* CONTENT */}
                  <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="font-mono text-[10px] uppercase tracking-[0.3em] px-3 py-1 rounded-full" style={{ color: catColor, backgroundColor: `${catColor}15`, border: `1px solid ${catColor}30` }}>
                        {post.category}
                      </span>
                      <span style={{ color: "var(--text-secondary)" }} className="font-mono text-[10px] uppercase tracking-widest flex items-center gap-1">
                        <BookOpen size={10} /> {post.readTime}
                      </span>
                    </div>

                    <h4 className="text-2xl md:text-3xl font-bold italic uppercase tracking-tighter leading-tight mb-3 group-hover:text-indigo-400" style={{ color: "var(--text-primary)" }}>
                      {post.title}
                    </h4>

                    <p style={{ color: "var(--text-secondary)" }} className="text-sm leading-relaxed mb-6 line-clamp-2">{post.desc}</p>

                    <div className="flex items-center justify-between">
                      <span style={{ color: "var(--text-secondary)" }} className="font-mono text-[10px] uppercase tracking-widest">{post.date}</span>
                      <motion.div style={{ backgroundColor: "transparent", borderColor: "var(--card-border)", color: "var(--text-primary)" }} whileHover={{ backgroundColor: catColor, borderColor: catColor, scale: 1.1 }} className="w-10 h-10 rounded-full border flex items-center justify-center">
                        <ArrowUpRight size={16} />
                      </motion.div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.7 }} className="mt-16 text-center">
          <motion.button style={{ color: "var(--text-secondary)", borderColor: "var(--card-border)" }} whileHover={{ color: "#6366f1", borderColor: "#6366f1", scale: 1.03 }} className="text-[10px] font-mono uppercase tracking-[0.5em] border px-8 py-3 rounded-full">
            View All Archives // _
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;