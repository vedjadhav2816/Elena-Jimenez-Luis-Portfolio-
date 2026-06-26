import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const greetings = [
  { text: "Hello", lang: "English" },
  { text: "Hola", lang: "Español" },
  { text: "Bonjour", lang: "Français" },
  { text: "Ciao", lang: "Italiano" },
  { text: "Olá", lang: "Português" },
  { text: "Hallo", lang: "Deutsch" },
];

export default function Hero() {
  const [currentGreeting, setCurrentGreeting] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Greeting Animation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreeting((prev) => (prev + 1) % greetings.length);
    }, 2600);
    return () => clearInterval(interval);
  }, []);

  // Music Control
  const toggleMusic = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(err => console.log("Music play prevented:", err));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-950 via-black to-cyan-950" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#06b6d420_0%,transparent_70%)]" />

      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full blur-[120px] opacity-20" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-[150px] opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Mobile First: Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="md:hidden flex justify-center mb-10"
          >
            <div className="relative max-w-[260px]">
              <motion.div
                whileHover={{ rotateY: 12, rotateX: 12, scale: 1.06 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative rounded-[3rem] overflow-hidden border-8 border-white/10 shadow-2xl perspective-1000"
              >
                <img
                  src="/screenshots/elena.png"
                  alt="Elena Jiménez"
                  className="w-full h-auto object-cover aspect-[9/16] rounded-[2.4rem]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-400/30 via-transparent to-purple-500/20" />
              </motion.div>

              {/* Greeting attached to image (Mobile) */}
              <motion.div
                key={currentGreeting}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.6 }}
                className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-black/90 backdrop-blur-md px-6 py-2.5 rounded-2xl border border-cyan-400/40 text-base font-medium flex items-center gap-2 shadow-xl whitespace-nowrap z-20"
              >
                <span className="text-cyan-400">✦</span>
                <span className="text-white">{greetings[currentGreeting].text}</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Left Content */}
          <div className="text-center md:text-left order-2 md:order-1">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-6xl md:text-7xl font-black tracking-tighter mb-6"
            >
              ELENA JIMÉNEZ
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-3xl md:text-4xl text-cyan-400 font-light mb-8"
            >
              Creative Strategist & Video Editor
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="max-w-lg mx-auto md:mx-0 text-lg text-gray-300 mb-12"
            >
              Crafting high-converting visual stories for DTC Health & Fitness brands
            </motion.p>

            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-10 py-4 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-bold text-lg neon-cyan transition-all"
            >
              See My Work
            </motion.a>
          </div>

          {/* Desktop Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, rotateY: -20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.3, ease: "easeOut" }}
            whileHover={{ rotateY: 15, rotateX: 12, scale: 1.08 }}
            className="hidden md:flex justify-center md:justify-end relative max-w-[340px] mx-auto perspective-1000"
          >
            <div className="relative rounded-[3.2rem] overflow-hidden border-8 border-white/10 shadow-2xl">
              <img
                src="/screenshots/elena.png"
                alt="Elena Jiménez"
                className="w-full h-auto object-cover aspect-[9/16] rounded-[2.6rem]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-400/25 via-transparent to-purple-500/25" />
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />
            </div>

            {/* Greeting attached to image (Desktop) */}
            <motion.div
              key={currentGreeting}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6 }}
              className="absolute -bottom-6 -right-6 bg-black/90 backdrop-blur-md px-6 py-3 rounded-2xl border border-cyan-400/30 text-lg font-medium flex items-center gap-3 shadow-xl z-20"
            >
              <span className="text-cyan-400">✦</span>
              <span className="text-white">{greetings[currentGreeting].text}</span>
              <span className="text-xs text-gray-400">({greetings[currentGreeting].lang})</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ===================== MUSIC PLAYER ===================== */}
      <div className="absolute bottom-8 md:bottom-12 right-6 md:right-8 z-30">
        <motion.button
          onClick={toggleMusic}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          className="relative flex items-center justify-center w-16 h-16 bg-black/80 backdrop-blur-xl border border-cyan-400/40 hover:border-cyan-400 rounded-full shadow-2xl transition-all overflow-hidden group"
        >
          {/* Rotating Music Note */}
          <motion.div
            animate={{ rotate: isPlaying ? 360 : 0 }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
            className="text-3xl"
          >
            ♫
          </motion.div>

          {/* Pause Icon when playing */}
          {isPlaying && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 flex items-center justify-center text-2xl"
            >
              ‖
            </motion.div>
          )}

          {/* "Enjoy the music" text - appears on hover when NOT playing */}
          {!isPlaying && (
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              whileHover={{ opacity: 1, y: 0 }}
              className="absolute -bottom-9 text-xs text-cyan-400 whitespace-nowrap pointer-events-none transition-all duration-300"
            >
              Enjoy the music
            </motion.span>
          )}
        </motion.button>
      </div>

      {/* Hidden Audio */}
      <audio ref={audioRef} loop>
        <source src="/screenshots/music.mp3" type="audio/mpeg" />
      </audio>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-cyan-400 text-3xl"
      >
        ↓
      </motion.div>
    </section>
  );
}