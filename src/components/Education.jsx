import { motion } from "framer-motion";

const educationData = [
  {
    title: "Content Creation & Creative Strategist Studies",
    institution: "The Real World University",
    period: "August 2022 - Present",
  },
  {
    title: "Creative Strategist Bootcamp",
    institution: "Motion App",
    period: "April 2026 - Present",
  },
  {
    title: "Agency Training Courses",
    institution: "99ads Agency Skool",
    period: "March 2026 - Present",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-center mb-20 gradient-text"
        >
          Education & Training
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ scale: 1.03 }}
              className="glass p-10 rounded-3xl hover:border-cyan-400/30 border border-white/10 transition-all"
            >
              <div className="h-1.5 w-12 bg-cyan-400 rounded mb-6" />
              <h3 className="text-2xl font-bold mb-4 leading-tight">
                {item.title}
              </h3>
              <p className="text-cyan-300 text-lg">{item.institution}</p>
              <p className="text-gray-400 mt-6">{item.period}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}