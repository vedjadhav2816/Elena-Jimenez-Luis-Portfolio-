import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { 
  FaVideo, FaMagic, FaChartLine, FaPalette, 
  FaLightbulb, FaUsers, FaBullseye, FaPlay 
} from "react-icons/fa";

const skillsData = [
  {
    name: "Creative Strategy",
    icon: <FaLightbulb className="text-5xl" />,
    desc: "End-to-end campaign concepts that drive massive ROI",
    color: "cyan",
    visual: "🎯"
  },
  {
    name: "Video Editing",
    icon: <FaVideo className="text-5xl" />,
    desc: "Cinematic cuts, pacing & storytelling that converts",
    color: "purple",
    visual: "🎬"
  },
  {
    name: "Motion Graphics",
    icon: <FaMagic className="text-5xl" />,
    desc: "Smooth animations and dynamic text that captivate",
    color: "emerald",
    visual: "✨"
  },
  {
    name: "Meta Ads Creatives",
    icon: <FaBullseye className="text-5xl" />,
    desc: "High-converting hooks & visuals for cold traffic",
    color: "rose",
    visual: "📈"
  },
  {
    name: "VSL Production",
    icon: <FaPlay className="text-5xl" />,
    desc: "Long-form sales videos optimized for conversions",
    color: "amber",
    visual: "📺"
  },
  {
    name: "UGC Content",
    icon: <FaUsers className="text-5xl" />,
    desc: "Authentic user-generated style content at scale",
    color: "teal",
    visual: "📱"
  },
  {
    name: "Direct Response",
    icon: <FaChartLine className="text-5xl" />,
    desc: "Data-backed creatives focused on immediate action",
    color: "orange",
    visual: "💰"
  },
  {
    name: "Color Grading",
    icon: <FaPalette className="text-5xl" />,
    desc: "Cinematic color that enhances mood & brand feel",
    color: "violet",
    visual: "🌈"
  },
  {
    name: "Storyboarding",
    icon: <FaMagic className="text-5xl" />,
    desc: "Visual planning that ensures perfect narrative flow",
    color: "sky",
    visual: "📝"
  },
  {
    name: "Market Research",
    icon: <FaChartLine className="text-5xl" />,
    desc: "Deep audience insights before creative execution",
    color: "lime",
    visual: "🔍"
  },
  {
    name: "Data-Driven Creatives",
    icon: <FaBullseye className="text-5xl" />,
    desc: "Creatives tested and optimized with real performance data",
    color: "cyan",
    visual: "📊"
  },
  {
    name: "Brand Storytelling",
    icon: <FaLightbulb className="text-5xl" />,
    desc: "Emotional narratives that build lasting brand connection",
    color: "fuchsia",
    visual: "❤️"
  }
];

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState(null);

  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-center mb-20 gradient-text"
        >
          Expertise
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ 
                scale: 1.08, 
                y: -12,
                transition: { duration: 0.3 }
              }}
              onHoverStart={() => setSelectedSkill(skill)}
              onHoverEnd={() => setSelectedSkill(null)}
              className="glass p-8 rounded-3xl text-center border border-white/10 hover:border-cyan-400/50 cursor-pointer relative overflow-hidden group"
            >
              <div className="text-cyan-400 mb-6 transition-transform group-hover:scale-110 duration-300">
                {skill.icon}
              </div>
              <p className="text-xl font-medium text-white">{skill.name}</p>

              {/* 3D shine effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-30 transition-opacity" />
            </motion.div>
          ))}
        </div>

        {/* Floating Detail Popup */}
        <AnimatePresence>
          {selectedSkill && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 glass px-10 py-6 rounded-3xl shadow-2xl border border-cyan-400/30 max-w-md pointer-events-none"
            >
              <div className="flex items-center gap-6">
                <div className="text-6xl text-cyan-400">
                  {selectedSkill.icon}
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {selectedSkill.name}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {selectedSkill.desc}
                  </p>
                </div>
              </div>

              <div className="text-7xl text-center mt-4 opacity-20">
                {selectedSkill.visual}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}