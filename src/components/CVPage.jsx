import { FaDownload, FaBriefcase, FaFileAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import CustomCursor from "./CustomCursor";

export default function CVPage() {
  return (
    <>
      <div className="min-h-screen bg-dark-bg text-white pt-28 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header with Dual Download Buttons */}
          <div className="flex flex-col items-center mb-12">
            <motion.h1
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-5xl font-bold gradient-text mb-2"
            >
              Resume & Portfolio
            </motion.h1>
            <p className="text-gray-400 text-center">
              Download my professional documents
            </p>
          </div>

          {/* Download Buttons Row */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
            {/* CV Download Button */}
            <motion.a
              href="/screenshots/CS CV Elena English (2).pdf"
              download="Elena_Jimenez_CV.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full font-semibold text-white shadow-lg shadow-cyan-500/30 w-full sm:w-auto justify-center"
            >
              <FaFileAlt className="text-xl" />
              Download CV
              <FaDownload className="text-sm opacity-70" />
            </motion.a>

            {/* Portfolio Download Button */}
            <motion.a
              href="/screenshots/CS Portfolio Elena Jiménez Luis.pdf"
              download="Elena_Jimenez_Portfolio.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold text-white shadow-lg shadow-purple-500/30 w-full sm:w-auto justify-center"
            >
              <FaBriefcase className="text-xl" />
              View Portfolio
              <FaDownload className="text-sm opacity-70" />
            </motion.a>
          </div>

          {/* Resume Content */}
          <div className="glass p-8 rounded-2xl border border-white/10 space-y-6">
            <div className="text-center border-b border-white/10 pb-6">
              <h2 className="text-3xl font-bold">Elena Jimenez Luis</h2>
              <p className="text-cyan-400 text-lg">DIRECT-RESPONSE CREATIVE STRATEGIST</p>
            </div>

            <section>
              <h3 className="text-xl font-semibold text-cyan-400 mb-2">About Me</h3>
              <p className="text-gray-300 leading-relaxed">
                Freelance Creative Strategist specialized in DTC health and fitness brands, with three years of experience managing paid media strategy across Meta Ads and other social platforms. I have worked developing creative assets (videos, images, scripts, etc.), conducting market research, and optimizing ads based on real conversion data. I combine strategic thinking, commercial analysis, and creative execution to improve performance and scale campaigns profitably.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-cyan-400 mb-2">Skills</h3>
              <div className="flex flex-wrap gap-3">
                {["Team Leadership", "Creative Direction", "Strategic Planning", "Problem Solving", "Project Management", "Clear Communication", "Analytical Thinking"].map(skill => (
                  <span key={skill} className="px-4 py-1 bg-white/5 rounded-full text-sm border border-white/10">{skill}</span>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-cyan-400 mb-2">Professional Experience</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-medium">Creative Strategist (in-house) – MyNumpy (Health & Wellness DTC)</p>
                  <p className="text-sm text-gray-400">March 2026 – present</p>
                  <ul className="list-disc list-inside text-gray-300 text-sm ml-4">
                    <li>Data Analysis</li>
                    <li>Brief writing for VEs and Creators</li>
                    <li>Market research</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium">Video Editor – Digital Ride Agency</p>
                  <p className="text-sm text-gray-400">April 2026 – present</p>
                </div>
                <div>
                  <p className="font-medium">Creative Strategist & Video Editor (in-house) – Theramure LTD (Health & Wellness DTC)</p>
                  <p className="text-sm text-gray-400">January 2024 – February 2026</p>
                  <ul className="list-disc list-inside text-gray-300 text-sm ml-4">
                    <li>Developed VSLs and conversion focused ad scripts</li>
                    <li>Conducted market research and analyzed customer feedback</li>
                    <li>Created and optimized hooks for Meta Ads campaigns</li>
                    <li>Edited performance driven video content (UGC, authority, testimonial)</li>
                    <li>Analyzed key metrics (CPA, ROAS, CTR) to guide creative iteration</li>
                    <li>Designed ad creatives and funnel assets</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium">Creative Strategist & Video Editor – THRIVIN FITNESS BV (Fitness Clothing DTC)</p>
                  <p className="text-sm text-gray-400">February 2025 – August 2025</p>
                  <ul className="list-disc list-inside text-gray-300 text-sm ml-4">
                    <li>Led full creative strategy for product launches</li>
                    <li>Developed VSLs and ad scripts for paid media campaigns</li>
                    <li>Conducted in-depth buyer persona research</li>
                    <li>Structured hook and angle testing for performance optimization</li>
                    <li>Directed UGC content production</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium">Video Editor – Obfity LLC (DTC Health & Wellness)</p>
                  <p className="text-sm text-gray-400">March 2025 – August 2025</p>
                </div>
                <div>
                  <p className="font-medium">Creative Strategist & Video Editor (in-house) – MNNSK LLC (Health & Wellness DTC)</p>
                  <p className="text-sm text-gray-400">November 2024 – April 2025</p>
                  <ul className="list-disc list-inside text-gray-300 text-sm ml-4">
                    <li>Wrote direct-response ad scripts</li>
                    <li>Researched customer objections and product positioning</li>
                    <li>Edited paid traffic-focused advertising videos</li>
                    <li>Developed structured creative variations for testing</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-cyan-400 mb-2">Languages</h3>
              <p className="text-gray-300">🇬🇧 English – Fluent &nbsp;|&nbsp; 🇪🇸 Spanish – Native</p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-cyan-400 mb-2">Academic Background</h3>
              <ul className="list-disc list-inside text-gray-300 text-sm ml-4">
                <li>The Real World University – Content Creation and Creative Strategist Studies (Aug 2022 – Ongoing)</li>
                <li>Motion app's Creative Strategist Bootcamp (Apr 2026 – Ongoing)</li>
                <li>ggads Agency Skool courses (Mar 2026 – Ongoing)</li>
              </ul>
            </section>

            <div className="pt-4 text-center text-gray-400 text-sm border-t border-white/10">
              Remote working (WEST time zone)
            </div>
          </div>
        </motion.div>
      </div>
      <CustomCursor />
    </>
  );
}