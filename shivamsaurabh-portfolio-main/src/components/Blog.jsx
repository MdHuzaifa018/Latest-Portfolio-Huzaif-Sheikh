import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaTerminal } from 'react-icons/fa';

const blogPosts = [
  {
    id: "open-source-growth",
    category: "Career",
    image: "https://iili.io/f677edF.md.webp",
    title: "Why Every Developer Should Work on Open Source",
    date: "13 Feb, 2025",
    span: "md:col-span-2"
  },
  {
    id: "ai-future",
    category: "AI",
    image: "https://iili.io/f6Y3Kjs.md.webp",
    title: "Future of AI in Dev",
    date: "14 Feb, 2025",
    span: "md:col-span-1"
  },
  {
    id: "react-performance",
    category: "React",
    image: "https://iili.io/f6YY5DG.md.webp",
    title: "React Server Components Performance",
    date: "15 Feb, 2025",
    span: "md:col-span-1"
  }
];

const Blog = ({ theme }) => {
  const colors = {
    bg: theme === "dark" ? "#0a0a0f" : "#f8fafc",
    text: theme === "dark" ? "#ffffff" : "#111827",
    subtext: theme === "dark" ? "#9ca3af" : "#6b7280",
    border: theme === "dark" ? "#1f2937" : "#e5e7eb",
    overlay: theme === "dark" ? "rgba(10,10,15,0.6)" : "rgba(248,250,252,0.6)",
    highlight: "#6366f1"
  };

  return (
    <section
      id="blog"
      style={{ backgroundColor: colors.bg, color: colors.text }}
      className="py-32 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row justify-between mb-16 gap-4">
          <div>
            <h2 style={{ color: colors.highlight }} className="text-sm uppercase tracking-[0.4em] font-mono mb-2">
              / Insights
            </h2>
            <h3 style={{ color: colors.text }} className="text-6xl font-black italic uppercase tracking-tighter leading-none">
              Latest <br /> Stories
            </h3>
          </div>

          <div style={{ color: colors.subtext }} className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-widest">
            <FaTerminal style={{ color: colors.highlight }} />
            System.logs(writing)
          </div>
        </div>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`${post.span} group relative h-[420px] rounded-[2.5rem] overflow-hidden`}
              style={{ border: `1px solid ${colors.border}`, backgroundColor: theme === "dark" ? "rgba(15,15,15,0.4)" : "rgba(248,250,252,0.4)" }}
            >
              <Link to={`/blog/${post.id}`} className="block h-full w-full">

                {/* IMAGE */}
                <motion.img
                  src={post.image}
                  alt={post.title}
                  className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 
                             group-hover:grayscale-0 group-hover:scale-105 
                             group-hover:opacity-60 transition-all duration-700"
                />

                {/* GRADIENT OVERLAY */}
                <div style={{ background: `linear-gradient(to top, ${colors.bg}, ${colors.overlay}, transparent)` }}
                     className="absolute inset-0" />

                {/* CONTENT */}
                <div className="absolute inset-0 p-10 flex flex-col justify-end">
                  <span style={{ color: colors.highlight }} className="font-mono text-[10px] uppercase tracking-[0.3em] mb-4">
                    {post.category}
                  </span>

                  <h4 style={{ color: colors.text }} className="text-2xl md:text-3xl font-bold italic uppercase tracking-tighter leading-tight mb-6
                                 group-hover:text-indigo-400 transition-colors">
                    {post.title}
                  </h4>

                  <div className="flex items-center justify-between">
                    <span style={{ color: colors.subtext }} className="font-mono text-[10px] uppercase tracking-widest">
                      {post.date}
                    </span>

                    <div style={{ backgroundColor: theme === "dark" ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.05)",
                                  borderColor: theme === "dark" ? "#1f2937" : "#e5e7eb" }}
                         className="w-10 h-10 rounded-full border flex items-center justify-center text-white 
                                    group-hover:bg-indigo-500 group-hover:border-indigo-400 transition-all">
                      <FaArrowRight className="-rotate-45 group-hover:rotate-0 transition-transform" />
                    </div>
                  </div>
                </div>

              </Link>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM CTA */}
        <div className="mt-16 text-center">
          <button style={{ color: colors.subtext }} className="text-[10px] font-mono uppercase tracking-[0.5em] hover:text-white transition-colors">
            View All Archives // _
          </button>
        </div>

      </div>
    </section>
  );
};

export default Blog;