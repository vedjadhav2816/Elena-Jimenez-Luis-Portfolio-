import { motion } from 'framer-motion';

const jobs = [
  { company: "MyNumy", role: "Creative Strategist", year: "2026 - Present" },
  { company: "Digital Ride Agency", role: "Video Editor", year: "2026 - Present" },
  { company: "Theramure", role: "Creative Strategist & Video Editor", year: "2024 - 2026" },
  { company: "MNNSK", role: "Creative Strategist & Video Editor", year: "2024 - 2025" }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <h2 className="text-center text-5xl font-bold mb-20 gradient-text">Experience</h2>

      <div className="max-w-4xl mx-auto relative pl-10 border-l-2 border-cyan-500/30">
        <motion.div
          className="absolute left-[-1px] top-0 w-[3px] bg-gradient-to-b from-cyan-400 via-purple-500 to-cyan-600 origin-top"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 1.4 }}
          style={{ height: "100%" }}
        />

        {jobs.map((job, index) => (
          <motion.div
            key={job.company}
            className="relative mb-16"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.15 }}
          >
            <motion.div
              className="absolute -left-[53px] w-6 h-6 rounded-full border-4 border-cyan-500 bg-black flex items-center justify-center"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", delay: index * 0.2 }}
            >
              <motion.div
                className="w-3 h-3 bg-cyan-400 rounded-full"
                animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>

            <div className="space-y-2">
              <h3 className="text-3xl font-bold">{job.company}</h3>
              <p className="text-2xl text-cyan-400">{job.role}</p>
              <p className="text-gray-400">{job.year}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}