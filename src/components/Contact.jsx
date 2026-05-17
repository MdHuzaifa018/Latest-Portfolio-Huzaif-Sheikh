import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { toast, ToastContainer } from "react-toastify";
import emailjs from "@emailjs/browser";
import "react-toastify/dist/ReactToastify.css";
import { FaTerminal, FaPaperPlane, FaEnvelope, FaCircle } from "react-icons/fa";

const Contact = ({ theme }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) controls.start({ opacity: 1, y: 0 });
  }, [controls, inView]);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!name || !email || !subject || !message) {
      toast.error("Process aborted: Missing required parameters.");
      return;
    }

    setLoading(true);
    const templateParams = { name, email, subject, message };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          toast.success("Packet sent successfully to Huzaif.");
          setName(""); setEmail(""); setSubject(""); setMessage("");
        },
        (error) => {
          console.error(error);
          setLoading(false);
          toast.error("Transmission failed. Check connection.");
        }
      );
  };

  // Color palette based on theme
  const colors = {
    bg: theme === "dark" ? "#111827" : "#f8fafc",
    cardBg: theme === "dark" ? "#1f2937" : "#ffffff",
    border: theme === "dark" ? "#374151" : "#d1d5db",
    text: theme === "dark" ? "#f9fafb" : "#111827",
    subtext: theme === "dark" ? "#9ca3af" : "#6b7280",
    placeholder: theme === "dark" ? "#6b7280" : "#9ca3af",
    highlight: "#6366f1",
  };

  return (
    <section
      id="contact"
      className="py-32 px-6 relative overflow-hidden transition-colors duration-500"
      style={{ backgroundColor: colors.bg, color: colors.text }}
    >
      {/* Background Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full blur-[120px] pointer-events-none"
        style={{ backgroundColor: theme === "dark" ? "rgba(99,102,241,0.05)" : "rgba(99,102,241,0.05)" }}
      />

      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          className="mb-16"
        >
          <h2 style={{ color: colors.highlight }} className="text-sm font-mono tracking-[0.5em] uppercase mb-4">
            / Communication
          </h2>
          <h3 style={{ color: colors.text }} className="text-6xl font-black italic uppercase tracking-tighter leading-none">
            Let's <br /> Interface
          </h3>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Information Column */}
          <div className="lg:col-span-4 space-y-8">
            <div
              className="p-8 rounded-3xl border"
              style={{ backgroundColor: colors.cardBg, borderColor: colors.border }}
            >
              <h4 style={{ color: colors.text }} className="font-bold uppercase italic mb-4">
                Direct Channel
              </h4>
              <p style={{ color: colors.subtext }} className="text-sm leading-relaxed mb-6">
                Prefer traditional protocols? Bypass the terminal and send an encrypted packet via email.
              </p>
              <a
                href="mailto:mdhuzaifsh786@gmail.com"
                className="flex items-center gap-3 transition-colors font-mono text-xs uppercase"
                style={{ color: colors.highlight }}
              >
                <FaEnvelope /> mdhuzaifsh786@gmail.com
              </a>
            </div>

            <div style={{ color: colors.subtext }} className="flex items-center gap-4 font-mono text-[10px] uppercase tracking-widest">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              System Status: Ready to receive
            </div>
          </div>

          {/* Terminal Form Column */}
          <div className="lg:col-span-8">
            <div
              className="rounded-3xl shadow-2xl overflow-hidden border"
              style={{ backgroundColor: colors.cardBg, borderColor: colors.border }}
            >
              {/* Terminal Header */}
              <div
                className="px-6 py-4 flex items-center justify-between border-b"
                style={{ backgroundColor: colors.bg, borderColor: colors.border }}
              >
                <div className="flex gap-2">
                  <FaCircle className="text-red-500/50 text-[10px]" />
                  <FaCircle className="text-yellow-500/50 text-[10px]" />
                  <FaCircle className="text-green-500/50 text-[10px]" />
                </div>
                <div style={{ color: colors.subtext }} className="text-[10px] font-mono uppercase tracking-widest flex items-center gap-2">
                  <FaTerminal style={{ color: colors.highlight }} /> Huzaif — mail_sender.exe
                </div>
              </div>

              {/* Terminal Body */}
              <form onSubmit={submitHandler} className="p-8 md:p-12 space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label style={{ color: colors.subtext }} className="text-xs font-mono uppercase tracking-widest">
                      01. Identity
                    </label>
                    <input
                      type="text"
                      value={name}
                      placeholder="Enter your name..."
                      onChange={(e) => setName(e.target.value)}
                      style={{ color: colors.text, borderBottomColor: colors.border, placeholderColor: colors.placeholder }}
                      className="w-full bg-transparent py-3 outline-none text-sm font-mono"
                    />
                  </div>
                  <div className="space-y-2">
                    <label style={{ color: colors.subtext }} className="text-xs font-mono uppercase tracking-widest">
                      02. Return_Path
                    </label>
                    <input
                      type="email"
                      value={email}
                      placeholder="your_email@domain.com"
                      onChange={(e) => setEmail(e.target.value)}
                      style={{ color: colors.text, borderBottomColor: colors.border, placeholderColor: colors.placeholder }}
                      className="w-full bg-transparent py-3 outline-none text-sm font-mono"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label style={{ color: colors.subtext }} className="text-xs font-mono uppercase tracking-widest">
                    03. Subject_Header
                  </label>
                  <input
                    type="text"
                    value={subject}
                    placeholder="Brief objective..."
                    onChange={(e) => setSubject(e.target.value)}
                    style={{ color: colors.text, borderBottomColor: colors.border, placeholderColor: colors.placeholder }}
                    className="w-full bg-transparent py-3 outline-none text-sm font-mono"
                  />
                </div>

                <div className="space-y-2">
                  <label style={{ color: colors.subtext }} className="text-xs font-mono uppercase tracking-widest">
                    04. Message_Payload
                  </label>
                  <textarea
                    rows="4"
                    value={message}
                    placeholder="Write your transmission here..."
                    onChange={(e) => setMessage(e.target.value)}
                    style={{ color: colors.text, borderColor: colors.border, backgroundColor: colors.cardBg, placeholderColor: colors.placeholder }}
                    className="w-full rounded-xl p-4 outline-none font-mono text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="group relative flex items-center justify-center gap-3 w-full md:w-auto px-10 py-4 rounded-xl font-bold uppercase text-xs tracking-[0.2em] overflow-hidden transition-all active:scale-95"
                  style={{ backgroundColor: colors.cardBg, borderColor: colors.border, color: colors.text, opacity: loading ? 0.5 : 1 }}
                >
                  {loading ? "Transmitting..." : (
                    <>
                      Execute Send <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                  <div
                    className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0 rounded-xl"
                    style={{ backgroundColor: colors.highlight }}
                  />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="bottom-right" theme={theme === "dark" ? "dark" : "light"} />
    </section>
  );
};

export default Contact;