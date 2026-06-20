import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-center mb-16 gradient-text"
        >
          About Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="glass p-10 md:p-16 rounded-3xl text-lg leading-relaxed text-gray-200"
        >
          Freelance Creative Strategist specialized in DTC Health & Fitness brands. 
          With over 3 years of experience, I excel at creating high-converting creatives, 
          VSLs, and UGC content that drives real results.
        </motion.div>
      </div>
    </section>
  );
}