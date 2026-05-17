import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import emailjs from "@emailjs/browser";
import "react-toastify/dist/ReactToastify.css";
import { FaTerminal, FaPaperPlane, FaEnvelope, FaCircle, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

// Floating label input component
const FloatInput = ({ label, type = "text", value, onChange, placeholder, prefix }) => {
  const [focused, setFocused] = useState(false);
  const hasValue = value.length > 0;

  return (
    <div className="relative group">
      <label
        style={{
          color: focused || hasValue ? "#6366f1" : "var(--text-secondary)",
          transition: "color 0.3s ease",
        }}
        className="text-xs font-mono uppercase tracking-widest"
      >
        {prefix}. {label}
      </label>
      <div className="relative">
        <input
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            color: "var(--text-primary)",
            borderBottomColor: focused ? "#6366f1" : "var(--card-border)",
            transition: "border-color 0.3s ease",
          }}
          className="w-full bg-transparent py-3 outline-none text-sm font-mono border-b"
        />
        {/* Bottom line glow */}
        <motion.div
          className="absolute bottom-0 left-0 h-[2px] rounded-full"
          style={{ backgroundColor: "#6366f1" }}
          animate={{ width: focused ? "100%" : "0%" }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

const FloatTextarea = ({ label, value, onChange, prefix }) => {
  const [focused, setFocused] = useState(false);
  const hasValue = value.length > 0;

  return (
    <div className="relative group space-y-2">
      <label
        style={{
          color: focused || hasValue ? "#6366f1" : "var(--text-secondary)",
          transition: "color 0.3s ease",
        }}
        className="text-xs font-mono uppercase tracking-widest block"
      >
        {prefix}. Message_Payload
      </label>
      <div className="relative">
        <textarea
          rows="4"
          value={value}
          placeholder="Write your transmission here..."
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            color: "var(--text-primary)",
            borderColor: focused ? "#6366f1" : "var(--card-border)",
            backgroundColor: "var(--card-bg)",
            transition: "border-color 0.3s ease, box-shadow 0.3s ease",
            boxShadow: focused ? `0 0 0 1px #6366f140, 0 0 15px #6366f110` : "none",
          }}
          className="w-full rounded-xl p-4 outline-none font-mono text-sm resize-none border"
        />
      </div>
    </div>
  );
};

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const headerRef = useRef(null);

  const controls = useAnimation();
  const headerInView = useInView(headerRef, { once: true, amount: 0.4 });

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

  const isDarkTheme = typeof document !== "undefined" && document.documentElement.classList.contains("dark");

  return (
    <section
      id="contact"
      className="py-32 px-6 relative overflow-hidden"
      style={{ backgroundColor: "var(--background)", color: "var(--text-primary)" }}
    >
      {/* Animated background glow */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.04, 0.07, 0.04] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] rounded-full blur-[120px] pointer-events-none"
        style={{ backgroundColor: "#6366f1" }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <div ref={headerRef} className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            animate={headerInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            style={{ color: "#6366f1" }} 
            className="text-sm font-mono tracking-[0.5em] uppercase mb-4"
          >
            / Communication
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 50, skewY: 3 }}
            animate={headerInView ? { opacity: 1, y: 0, skewY: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-6xl font-black italic uppercase tracking-tighter leading-none"
          >
            Let's <br /> Interface
          </motion.h3>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Information Column */}
          <div className="lg:col-span-4 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="p-8 rounded-3xl border relative overflow-hidden group"
              style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--card-border)" }}
              whileHover={{
                boxShadow: `0 20px 40px rgba(0,0,0,0.15), 0 0 30px rgba(99,102,241,0.1)`,
                borderColor: `rgba(99,102,241,0.3)`,
              }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: "radial-gradient(ellipse at top left, rgba(99,102,241,0.08), transparent 60%)" }}
              />

              <h4 className="font-bold uppercase italic mb-4 relative z-10">
                Direct Channel
              </h4>
              <p style={{ color: "var(--text-secondary)" }} className="text-sm leading-relaxed mb-6 relative z-10">
                Prefer traditional protocols? Bypass the terminal and send an encrypted packet via email.
              </p>
              <motion.a
                href="mailto:mdhuzaifsh786@gmail.com"
                className="flex items-center gap-3 font-mono text-xs uppercase relative z-10"
                style={{ color: "#6366f1" }}
                whileHover={{ x: 5, gap: "0.75rem" }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <FaEnvelope /> mdhuzaifsh786@gmail.com
              </motion.a>
            </motion.div>

            {/* Status indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-4 font-mono text-[10px] uppercase tracking-widest p-4 rounded-2xl border"
              style={{
                color: "var(--text-secondary)",
                borderColor: "var(--card-border)",
                backgroundColor: "rgba(var(--card-bg), 0.5)",
              }}
            >
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_#22c55e]" />
              System Status: Ready to receive
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col gap-3"
            >
              {[
                { label: "GitHub", url: "https://github.com/MdHuzaifa018/", icon: FaGithub },
                { label: "LinkedIn", url: "https://www.linkedin.com/in/huzaif-sheikh-6443a6330/", icon: FaLinkedin },
                { label: "Twitter/X", url: "https://x.com/huzaif_sheikh_1", icon: FaTwitter },
              ].map((link, i) => {
                const Icon = link.icon;
                return (
                <motion.a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl border font-mono text-xs uppercase tracking-wider transition-all group"
                  style={{ borderColor: "var(--card-border)", color: "var(--text-secondary)", backgroundColor: "var(--card-bg)" }}
                  whileHover={{
                    x: 6,
                    color: "#6366f1",
                    borderColor: `rgba(99,102,241,0.4)`,
                    backgroundColor: `rgba(99,102,241,0.05)`,
                  }}
                >
                  <Icon size={16} />
                  <span>{link.label}</span>
                  <motion.span
                    className="ml-auto opacity-0 group-hover:opacity-100"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </motion.a>
              )})}
            </motion.div>
          </div>

          {/* Terminal Form Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-8"
          >
            <div
              className="rounded-3xl shadow-2xl overflow-hidden border relative"
              style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--card-border)" }}
            >
              {/* Glow top border */}
              <div
                className="absolute top-0 left-0 right-0 h-[1px] opacity-60"
                style={{ background: "linear-gradient(90deg, transparent, #6366f1, transparent)" }}
              />

              {/* Terminal Header */}
              <div
                className="px-6 py-4 flex items-center justify-between border-b"
                style={{ backgroundColor: "var(--background)", borderColor: "var(--card-border)" }}
              >
                <div className="flex gap-2">
                  <motion.div
                    className="w-3 h-3 rounded-full bg-red-500/60 cursor-pointer"
                    whileHover={{ scale: 1.2, backgroundColor: "rgba(239,68,68,1)" }}
                  />
                  <motion.div
                    className="w-3 h-3 rounded-full bg-yellow-500/60 cursor-pointer"
                    whileHover={{ scale: 1.2, backgroundColor: "rgba(234,179,8,1)" }}
                  />
                  <motion.div
                    className="w-3 h-3 rounded-full bg-green-500/60 cursor-pointer"
                    whileHover={{ scale: 1.2, backgroundColor: "rgba(34,197,94,1)" }}
                  />
                </div>
                <div style={{ color: "var(--text-secondary)" }} className="text-[10px] font-mono uppercase tracking-widest flex items-center gap-2">
                  <FaTerminal style={{ color: "#6366f1" }} /> Huzaif — mail_sender.exe
                </div>
              </div>

              {/* Terminal Body */}
              <form onSubmit={submitHandler} className="p-8 md:p-12 space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <FloatInput
                    label="Identity"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name..."
                    prefix="01"
                  />
                  <FloatInput
                    label="Return_Path"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your_email@domain.com"
                    prefix="02"
                  />
                </div>

                <FloatInput
                  label="Subject_Header"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Brief objective..."
                  prefix="03"
                />

                <FloatTextarea
                  label="Message_Payload"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  prefix="04"
                />

                <motion.button
                  type="submit"
                  disabled={loading}
                  className="group relative flex items-center justify-center gap-3 w-full md:w-auto px-10 py-4 rounded-xl font-bold uppercase text-xs tracking-[0.2em] overflow-hidden transition-all"
                  style={{
                    backgroundColor: "var(--card-bg)",
                    borderColor: "var(--card-border)",
                    border: "1px solid var(--card-border)",
                    color: "var(--text-primary)",
                    opacity: loading ? 0.6 : 1,
                  }}
                  whileHover={{ scale: 1.03, boxShadow: "0 10px 25px rgba(99,102,241,0.3)" }}
                  whileTap={{ scale: 0.97 }}
                >
                  {/* Hover fill */}
                  <motion.div
                    className="absolute inset-0 rounded-xl z-0"
                    style={{ backgroundColor: "#6366f1" }}
                    initial={{ y: "100%" }}
                    whileHover={{ y: "0%" }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />

                  <span className="relative z-10 flex items-center gap-3">
                    {loading ? (
                      <>
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                        />
                        Transmitting...
                      </>
                    ) : (
                      <>
                        Execute Send{" "}
                        <motion.span
                          className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform inline-block"
                        >
                          <FaPaperPlane />
                        </motion.span>
                      </>
                    )}
                  </span>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
      <ToastContainer position="bottom-right" theme={isDarkTheme ? "dark" : "light"} />
    </section>
  );
};

export default Contact;