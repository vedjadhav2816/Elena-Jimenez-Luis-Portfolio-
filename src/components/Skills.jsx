import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { 
  FaVideo, FaMagic, FaChartLine, FaPalette, 
  FaLightbulb, FaUsers, FaBullseye, FaPlay 
} from "react-icons/fa";

const skillsData = [
  {
    name: "Creative Strategy",
    icon: <FaLightbulb className="text-4xl md:text-5xl" />,
    desc: "End-to-end campaign concepts that drive massive ROI",
    color: "cyan",
    visual: "🎯"
  },
  {
    name: "Video Editing",
    icon: <FaVideo className="text-4xl md:text-5xl" />,
    desc: "Cinematic cuts, pacing & storytelling that converts",
    color: "purple",
    visual: "🎬"
  },
  {
    name: "Motion Graphics",
    icon: <FaMagic className="text-4xl md:text-5xl" />,
    desc: "Smooth animations and dynamic text that captivate",
    color: "emerald",
    visual: "✨"
  },
  {
    name: "Meta Ads Creatives",
    icon: <FaBullseye className="text-4xl md:text-5xl" />,
    desc: "High-converting hooks & visuals for cold traffic",
    color: "rose",
    visual: "📈"
  },
  {
    name: "VSL Production",
    icon: <FaPlay className="text-4xl md:text-5xl" />,
    desc: "Long-form sales videos optimized for conversions",
    color: "amber",
    visual: "📺"
  },
  {
    name: "UGC Content",
    icon: <FaUsers className="text-4xl md:text-5xl" />,
    desc: "Authentic user-generated style content at scale",
    color: "teal",
    visual: "📱"
  },
  {
    name: "Direct Response",
    icon: <FaChartLine className="text-4xl md:text-5xl" />,
    desc: "Data-backed creatives focused on immediate action",
    color: "orange",
    visual: "💰"
  },
  {
    name: "Color Grading",
    icon: <FaPalette className="text-4xl md:text-5xl" />,
    desc: "Cinematic color that enhances mood & brand feel",
    color: "violet",
    visual: "🌈"
  },
  {
    name: "Storyboarding",
    icon: <FaMagic className="text-4xl md:text-5xl" />,
    desc: "Visual planning that ensures perfect narrative flow",
    color: "sky",
    visual: "📝"
  },
  {
    name: "Market Research",
    icon: <FaChartLine className="text-4xl md:text-5xl" />,
    desc: "Deep audience insights before creative execution",
    color: "lime",
    visual: "🔍"
  },
  {
    name: "Data-Driven Creatives",
    icon: <FaBullseye className="text-4xl md:text-5xl" />,
    desc: "Creatives tested and optimized with real performance data",
    color: "cyan",
    visual: "📊"
  },
  {
    name: "Brand Storytelling",
    icon: <FaLightbulb className="text-4xl md:text-5xl" />,
    desc: "Emotional narratives that build lasting brand connection",
    color: "fuchsia",
    visual: "❤️"
  }
];

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [popupOpen, setPopupOpen] = useState(false);
  const hideTimeoutRef = useRef(null);
  const skillRefs = useRef({});

  // Clear timeout on unmount
  useEffect(() => {
    return () => {
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    };
  }, []);

  const handleMouseEnter = (skill) => {
    // Cancel any pending hide
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = null;
    }
    setSelectedSkill(skill);
    setPopupOpen(true);
  };

  const handleMouseLeave = () => {
    // Delay hiding so that click can override
    hideTimeoutRef.current = setTimeout(() => {
      // Only hide if not clicked (we'll track via a flag, but we'll check if it's still the same skill)
      // Actually we just close the popup after delay, but if a click happened, we want it to stay open.
      // We can set a flag, but simpler: we'll check if the popup is open via click.
      // We'll use a separate state for click vs hover.
      // But for simplicity, we'll close after delay unless a click happens.
      // The click will set a different state that overrides.
      setPopupOpen(false);
      // Delay the removal of selectedSkill so the animation can play
      setTimeout(() => {
        // Only clear if the same skill is still selected (no new hover)
        if (selectedSkill === skill) {
          setSelectedSkill(null);
        }
      }, 200);
    }, 300);
  };

  const handleClick = (skill) => {
    // Cancel any pending hide
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = null;
    }
    // Toggle: if same skill is already selected and popup is open, close it
    if (selectedSkill === skill && popupOpen) {
      setPopupOpen(false);
      setSelectedSkill(null);
    } else {
      setSelectedSkill(skill);
      setPopupOpen(true);
    }
  };

  // Close popup when clicking outside (on the backdrop)
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      setPopupOpen(false);
      setSelectedSkill(null);
    }
  };

  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        setPopupOpen(false);
        setSelectedSkill(null);
      }
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <section id="skills" className="py-16 md:py-24 px-4 md:px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-bold text-center mb-12 md:mb-20 gradient-text"
        >
          Expertise
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.name}
              ref={el => skillRefs.current[skill.name] = el}
              initial={{ opacity: 0, scale: 0.8, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ 
                scale: 1.06, 
                y: -8,
                transition: { duration: 0.2 }
              }}
              onMouseEnter={() => handleMouseEnter(skill)}
              onMouseLeave={() => handleMouseLeave()}
              onClick={() => handleClick(skill)}
              className={`glass p-6 md:p-8 rounded-2xl md:rounded-3xl text-center border border-white/10 hover:border-cyan-400/50 cursor-pointer relative overflow-hidden group transition-all duration-300 ${
                selectedSkill === skill && popupOpen ? 'ring-2 ring-cyan-400/60' : ''
              }`}
            >
              <div className={`text-cyan-400 mb-4 md:mb-6 transition-transform group-hover:scale-110 duration-300`}>
                {skill.icon}
              </div>
              <p className="text-sm md:text-xl font-medium text-white">{skill.name}</p>

              {/* Mobile tap hint (optional) */}
              <div className="absolute bottom-2 right-3 opacity-30 text-xs md:hidden">
                tap
              </div>

              {/* 3D shine effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-30 transition-opacity" />
            </motion.div>
          ))}
        </div>

        {/* Floating Detail Popup - appears on hover (desktop) and click (mobile) */}
        <AnimatePresence>
          {popupOpen && selectedSkill && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="fixed bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-md glass px-6 md:px-10 py-5 md:py-6 rounded-2xl md:rounded-3xl shadow-2xl border border-cyan-400/30"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-4 md:gap-6">
                <div className="text-4xl md:text-6xl text-cyan-400 flex-shrink-0">
                  {selectedSkill.icon}
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                    {selectedSkill.name}
                  </h3>
                  <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                    {selectedSkill.desc}
                  </p>
                </div>
              </div>

              <div className="text-5xl md:text-7xl text-center mt-3 md:mt-4 opacity-20 select-none">
                {selectedSkill.visual}
              </div>

              {/* Close button (for mobile) */}
              <button
                onClick={() => {
                  setPopupOpen(false);
                  setSelectedSkill(null);
                }}
                className="absolute top-2 right-3 text-gray-400 hover:text-white text-xl md:hidden"
                aria-label="Close"
              >
                ✕
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Backdrop for clicking outside to close (mobile) */}
        {popupOpen && (
          <div 
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
            onClick={handleBackdropClick}
          />
        )}
      </div>
    </section>
  );
}