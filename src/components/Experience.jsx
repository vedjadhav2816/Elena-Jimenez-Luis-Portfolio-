import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { FaBriefcase, FaLocationDot, FaCalendarAlt } from 'react-icons/fa6';

const jobs = [
  {
    company: "MyNumy",
    role: "Creative Strategist",
    year: "2026 - Present",
    location: "Remote",
    description: "Leading creative strategy for DTC health brand, driving 3x ROAS through data-driven content."
  },
  {
    company: "Digital Ride Agency",
    role: "Video Editor",
    year: "2026 - Present",
    location: "Remote",
    description: "Editing high-conversion video ads for multiple DTC clients across Meta and TikTok."
  },
  {
    company: "Theramure",
    role: "Creative Strategist & Video Editor",
    year: "2024 - 2026",
    location: "Remote",
    description: "Developed VSLs, UGC, and hook testing frameworks that reduced CPA by 30%."
  },
  {
    company: "MNNSK",
    role: "Creative Strategist & Video Editor",
    year: "2024 - 2025",
    location: "Remote",
    description: "Created direct-response ad scripts and edited performance-driven video content."
  }
];

export default function Experience() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Transform for the timeline line gradient
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="py-20 md:py-32 px-4 md:px-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-purple-500/5 to-cyan-500/5 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative" ref={containerRef}>
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="text-sm uppercase tracking-[0.2em] text-cyan-400 font-medium">Career Path</span>
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mt-2">Professional Experience</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">A journey of creative excellence and measurable results</p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative pl-8 md:pl-12 border-l-2 border-white/10">
          {/* Animated line – gradient that grows on scroll */}
          <motion.div
            className="absolute left-[-2px] top-0 w-[3px] bg-gradient-to-b from-cyan-400 via-purple-500 to-cyan-400 origin-top"
            style={{ scaleY: lineHeight }}
            initial={{ scaleY: 0 }}
            transition={{ duration: 1.4 }}
          />

          {/* Glow on line */}
          <div className="absolute left-[-6px] top-0 w-[11px] h-full bg-cyan-400/10 blur-xl pointer-events-none" />

          {jobs.map((job, index) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative mb-12 md:mb-16 group"
            >
              {/* Timeline Dot – animated pulse */}
              <motion.div
                className="absolute -left-[45px] md:-left-[49px] top-1 w-7 h-7 rounded-full bg-black border-2 border-cyan-400 flex items-center justify-center shadow-[0_0_20px_#00ffff40]"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", delay: index * 0.2 }}
              >
                <motion.div
                  className="w-3 h-3 bg-cyan-400 rounded-full"
                  animate={{
                    scale: [1, 1.6, 1],
                    opacity: [0.6, 1, 0.6]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3
                  }}
                />
              </motion.div>

              {/* Card – glassmorphism with hover effects */}
              <motion.div
                whileHover={{
                  scale: 1.02,
                  y: -4,
                  boxShadow: "0 20px 60px rgba(0, 255, 255, 0.15)"
                }}
                transition={{ duration: 0.3 }}
                className="glass p-6 md:p-8 rounded-2xl border border-white/10 hover:border-cyan-400/40 transition-all duration-300 relative overflow-hidden"
              >
                {/* Subtle gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 relative z-10">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {job.company}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <FaBriefcase className="text-cyan-400 text-sm" />
                      <p className="text-lg md:text-xl text-cyan-400 font-medium">{job.role}</p>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-gray-400">
                      <span className="flex items-center gap-1.5">
                        <FaCalendarAlt className="text-cyan-400/70" />
                        {job.year}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <FaLocationDot className="text-cyan-400/70" />
                        {job.location}
                      </span>
                    </div>
                    <p className="text-gray-300 mt-3 leading-relaxed max-w-lg">
                      {job.description}
                    </p>
                  </div>

                  {/* Year badge on the right (desktop) */}
                  <div className="hidden md:block text-sm font-mono text-cyan-400/60 bg-black/40 px-4 py-2 rounded-full border border-cyan-400/10 whitespace-nowrap">
                    {job.year}
                  </div>
                </div>

                {/* Decorative corner glow */}
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-cyan-400/5 rounded-full blur-2xl pointer-events-none group-hover:bg-cyan-400/10 transition-all" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Call to action / extra decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-3 text-sm text-gray-400 border border-white/10 px-6 py-3 rounded-full glass">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            <span>Open to new opportunities</span>
            <span className="text-cyan-400">•</span>
            <span>Available for freelance</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}