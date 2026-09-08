import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaClock, FaArrowRight, FaBookOpen, FaTerminal, FaCode, FaRobot, FaRocket } from 'react-icons/fa';

const blogPosts = [
  { 
    id: "open-source-growth", 
    category: "Career", 
    icon: <FaRocket className="accent" />,
    image: "https://iili.io/f677edF.md.webp", 
    title: "Why Every Developer Should Work on Open Source", 
    desc: "Open source is not just code — it's collaboration, accelerated learning, and building your global engineering reputation.", 
    date: "13 Feb, 2025", 
    readTime: "5 min read",
    tags: ["OpenSource", "Career", "Git"]
  },
  { 
    id: "ai-future", 
    category: "AI & Tech", 
    icon: <FaRobot className="text-fuchsia-400" />,
    image: "https://iili.io/f6Y3Kjs.md.webp", 
    title: "Future of AI in Web Development", 
    desc: "How generative AI, autonomous coding tools, and LLMs are reshaping full-stack web engineering workflows.", 
    date: "14 Feb, 2025", 
    readTime: "4 min read",
    tags: ["ArtificialIntelligence", "WebDev", "Future"]
  },
  { 
    id: "react-performance", 
    category: "React Architecture", 
    icon: <FaCode className="text-pink-400" />,
    image: "https://iili.io/f6YY5DG.md.webp", 
    title: "React Server Components & Performance Optimization", 
    desc: "A deep dive into RSC, zero-bundle-size components, and optimizing rendering latency in modern web apps.", 
    date: "15 Feb, 2025", 
    readTime: "6 min read",
    tags: ["React19", "Performance", "Frontend"]
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen pt-28 pb-24 px-4 md:px-8 lg:px-12 bg-transparent transition-colors duration-500 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        
        {/* 1. Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-black/5 dark:border-white/10 pb-12">
          <div className="flex flex-col gap-4">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.3em] accent">
              / TECHNICAL_INSIGHTS
            </span>
            <h1 className="text-4xl md:text-6xl font-black italic uppercase tracking-tight text-slate-900 dark:text-slate-50">
              Latest <span style={{ color: 'var(--accent)' }}>Articles & Stories</span>
            </h1>
            <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
              Thoughts, tutorials, and architectural deep-dives on full-stack development, modern web standards, and software engineering.
            </p>
          </div>

          <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white dark:bg-[#111111] border border-black/5 dark:border-white/10 shadow-md text-xs font-mono text-slate-600 dark:text-slate-300">
            <FaTerminal className="accent" />
            <span>System.logs(writing)</span>
          </div>
        </div>

        {/* 2. Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="rounded-[2.5rem] bg-white dark:bg-[#111111] border border-black/5 dark:border-white/10 shadow-xl overflow-hidden flex flex-col justify-between group hover:-translate-y-2 transition-all duration-500"
            >
              {/* Image Preview Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-[#1a1a1a]">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md text-white border border-white/20">
                  {post.icon}
                  <span>{post.category}</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-slate-300 z-10">
                  <span className="flex items-center gap-1.5"><FaClock className="accent" /> {post.readTime}</span>
                  <span>{post.date}</span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-8 flex flex-col justify-between flex-1 gap-6">
                <div className="flex flex-col gap-3">
                  <h3 className="text-2xl font-black italic uppercase leading-snug text-slate-900 dark:text-slate-50 group-hover:text-violet-600 dark:group-hover:accent transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
                    {post.desc}
                  </p>
                </div>

                {/* Footer with Tags and Read More Button */}
                <div className="flex flex-col gap-4 pt-4 border-t border-black/5 dark:border-white/10">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map(tag => (
                      <span key={tag} className="px-2.5 py-0.5 rounded-md text-[10px] font-mono bg-slate-100 dark:bg-[#1a1a1a] text-slate-600 dark:text-slate-400">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <Link 
                    to={`/blog/${post.id}`}
                    className="flex items-center justify-between py-3 px-5 rounded-xl font-bold uppercase tracking-widest text-xs bg-slate-100 dark:bg-[#1a1a1a] text-slate-900 dark:text-white border border-black/5 dark:border-white/10 group-hover:bg-gradient-to-r group-hover:from-violet-600 group-hover:via-purple-600 group-hover:to-fuchsia-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-violet-500/25 transition-all duration-300"
                  >
                    <span>Read Full Article</span>
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Blog;