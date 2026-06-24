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
        I'm Elena, a creative strategist who helps DTC brands turn customer insight into ads that actually sell. I work across the whole funnel: finding the angle, writing the script, then digging into what's working and multiplying one winning asset into multiple winning assets. Rinse and repeat.
        Everything starts with what your customer really thinks and feels, so the creative doesn't just look good, it brings your CPA down and scales.

        </motion.div>
      </div>
    </section>
  );
}