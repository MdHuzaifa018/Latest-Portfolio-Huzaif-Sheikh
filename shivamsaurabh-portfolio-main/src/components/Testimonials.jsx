import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiDoubleQuotesL } from "react-icons/ri";

const data = [
  {
    id: 1,
    image: "https://i.pravatar.cc/150?img=32",
    title: "EdgeIntern",
    subtitle: "Online Internship",
    comment:
      "Congratulations on your achievements! Wishing you all the best in your future endeavours!",
  },
  {
    id: 2,
    image: "https://i.pravatar.cc/150?img=47",
    title: "Project Mentor",
    subtitle: "Feedback",
    comment:
      "Shivam’s dedication to building clean and efficient web apps is commendable. Impressive work!",
  },
  {
    id: 3,
    image: "https://i.pravatar.cc/150?img=12",
    title: "Freelance Client",
    subtitle: "Web Design",
    comment:
      "Delivered the project on time and exceeded my expectations. Will definitely work again!",
  },
];

const Testimonials = ({ theme }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % data.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const colors = {
    bg: theme === "dark" ? "#0f0f0f" : "#f8fafc",
    text: theme === "dark" ? "#f8fafc" : "#111827",
    subtext: theme === "dark" ? "#9ca3af" : "#6b7280",
    border: theme === "dark" ? "#1f2937" : "#e5e7eb",
    highlight: "#6366f1", // indigo-500
    comment: theme === "dark" ? "#9ca3af" : "#4b5563", // zinc-400 / zinc-600
    quote: theme === "dark" ? "rgba(31,41,55,0.4)" : "rgba(229,231,235,0.4)", // quote opacity
  };

  return (
    <section
      id="testimonials"
      style={{ backgroundColor: colors.bg, color: colors.text }}
      className="relative py-32 px-6 overflow-hidden transition-colors duration-500"
    >
      {/* Decorative Quote */}
      <RiDoubleQuotesL
        style={{ color: colors.quote }}
        className="absolute top-10 left-10 text-[20rem] opacity-40 pointer-events-none"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-20">
          <h2 style={{ color: colors.highlight }} className="text-sm uppercase tracking-[0.4em] font-mono mb-2">
            / Feedback
          </h2>
          <h3 style={{ color: colors.text }} className="text-5xl font-black italic uppercase tracking-tighter">
            Testimonials
          </h3>
        </div>

        {/* Slider */}
        <div className="relative min-h-[24rem] flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50, filter: "blur(10px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, x: -50, filter: "blur(10px)" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="grid md:grid-cols-12 gap-10 items-center w-full"
            >
              {/* Image */}
              <div className="md:col-span-4 flex flex-col items-center md:items-start">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full blur-3xl" style={{ backgroundColor: `${colors.highlight}/20` }} />
                  <img
                    src={data[index].image}
                    alt={data[index].title}
                    className="w-32 h-32 md:w-48 md:h-48 rounded-2xl object-cover grayscale hover:grayscale-0 transition-all duration-700 relative z-10"
                    style={{ border: `1px solid ${colors.border}` }}
                  />
                </div>

                <div className="mt-6 text-center md:text-left">
                  <h4 style={{ color: colors.text }} className="text-2xl font-bold uppercase italic">
                    {data[index].title}
                  </h4>
                  <span style={{ color: colors.highlight }} className="font-mono text-xs uppercase tracking-widest">
                    {data[index].subtitle}
                  </span>
                </div>
              </div>

              {/* Comment */}
              <div className="md:col-span-8">
                <p style={{ color: colors.comment }} className="text-3xl md:text-5xl font-medium leading-tight tracking-tight italic">
                  “{data[index].comment}”
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress Indicators */}
        <div className="mt-20 flex gap-6">
          {data.map((_, i) => (
            <button key={i} onClick={() => setIndex(i)} className="group flex flex-col items-start gap-2">
              <span
                style={{ color: i === index ? colors.highlight : colors.subtext }}
                className="text-[10px] font-mono transition-colors"
              >
                0{i + 1}
              </span>
              <div
                style={{ backgroundColor: i === index ? colors.highlight : colors.subtext }}
                className={`h-0.5 rounded-full transition-all duration-500 ${i === index ? "w-16" : "w-8"}`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;