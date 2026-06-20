import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaArrowLeft, FaPlay, FaTimes, FaHeadphones } from "react-icons/fa";
import CustomCursor from "./CustomCursor";

export default function PodcastCaseStudy() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const podcast = {
    title: "Health & Fitness Brand Podcast",
    episode: "Episode 12 - Scaling DTC Brands in 2026",
    videoSrc: "/videos/Podcast Reel edit.mov",
    duration: "34 sec",
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <CustomCursor />   {/* ← Added Custom Cursor */}

      {/* Navbar */}
      <nav className="fixed top-0 w-full glass z-50 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 text-cyan-400 hover:text-cyan-300 transition">
            <FaArrowLeft /> Back to Portfolio
          </Link>
          <h1 className="text-2xl font-bold gradient-text flex items-center gap-3">
            🎙️ Podcast Studio
          </h1>
        </div>
      </nav>

      <div className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-3 text-amber-400 mb-6">
              <FaHeadphones className="text-3xl" />
              <span className="uppercase tracking-widest text-sm font-bold">PODCAST VISUALS</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-4">{podcast.title}</h1>
            <p className="text-2xl text-gray-400">{podcast.episode}</p>
          </motion.div>

          {/* Podcast Video Card with Autoplay */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass rounded-3xl p-8 md:p-12"
          >
            <div className="max-w-[320px] mx-auto">
              <div 
                className="relative cursor-pointer group"
                onClick={() => setSelectedVideo(podcast)}
              >
                <div className="aspect-[9/16] bg-black rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl relative">
                  <video
                    src={podcast.videoSrc}
                    className="w-full h-full object-cover"
                    preload="metadata"
                    muted
                    loop
                    autoPlay
                    playsInline
                  />

                  {/* Hover Play Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-all">
                    <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform">
                      <FaPlay className="text-white text-4xl ml-1" />
                    </div>
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute top-4 right-4 bg-black/80 text-xs px-3 py-1 rounded-full">
                  {podcast.duration}
                </div>
              </div>

              <div className="text-center mt-8">
                <h3 className="text-2xl font-bold mb-2">{podcast.episode}</h3>
                <p className="text-gray-400">Professional Podcast Reel Edit</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ===================== FULL SCREEN VERTICAL MODAL ===================== */}
      <AnimatePresence>
        {selectedVideo && (
          <div 
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-[380px]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute -top-20 left-1/2 -translate-x-1/2 bg-black/80 hover:bg-red-600 text-white px-8 py-3 rounded-full flex items-center gap-3 text-lg font-medium z-20 transition-all"
              >
                <FaTimes /> CLOSE PLAYER
              </button>

              <div className="aspect-[9/16] bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/20">
                <video
                  src={selectedVideo.videoSrc}
                  controls
                  autoPlay
                  className="w-full h-full"
                  playsInline
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}