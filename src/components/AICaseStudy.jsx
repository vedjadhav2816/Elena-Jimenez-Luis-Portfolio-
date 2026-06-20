import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaArrowLeft, FaPlay, FaRobot, FaTimes, FaStar, FaMagic } from "react-icons/fa";
import CustomCursor from "./CustomCursor";

export default function AICaseStudy() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const aiVideos = [
    {
      id: 1,
      title: "AI Avatar Spokesperson",
      videoSrc: "https://res.cloudinary.com/dnymbpzbx/video/upload/v1781889855/H1_CPamanstory_9x16_gv5aqu.mov",
      duration: "59 sec",
      tools: "HeyGen + ElevenLabs",
      description: "Hyper-realistic AI avatar delivering brand message with perfect lip-sync and natural expressions.",
      benefit: "Reduced production cost by 85%"
    },
    {
      id: 2,
      title: "AI Character Spokesperson",
      videoSrc: "https://res.cloudinary.com/dnymbpzbx/video/upload/v1781889574/H1_CPiterankingHA_9x16_jhmh4m.mov",
      duration: "55 sec",
      tools: "Runway Gen-3 + Kling AI",
      description: "Fully AI-generated product showcase videos with dynamic camera movements and cinematic lighting.",
      benefit: "Created 12 variations in under 2 hours"
    },
    {
      id: 3,
      title: "AI UGC Style Video",
      videoSrc: "https://res.cloudinary.com/dnymbpzbx/video/upload/v1781888763/H4_CPitebrainrotnewstart_9x16_zzlyd6.mov",
      duration: "46 sec",
      tools: "Luma Dream Machine + CapCut AI",
      description: "Authentic-looking UGC videos generated with AI that feel human-made and highly engaging.",
      benefit: "3.2x higher engagement than traditional UGC"
    },
  ];

  return (
    <div className="min-h-screen bg-[#050816] text-white">
      <CustomCursor />   {/* ← Added Custom Cursor */}

      {/* Navbar */}
      <nav className="fixed top-0 w-full glass z-50 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 text-cyan-400 hover:text-cyan-300 transition">
            <FaArrowLeft /> Back to Portfolio
          </Link>
          <h1 className="text-2xl font-bold gradient-text flex items-center gap-3">
            <FaRobot /> AI Creative Lab
          </h1>
        </div>
      </nav>

      <div className="pt-24 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-violet-500 to-cyan-500 text-black px-6 py-2 rounded-full font-bold mb-6">
              <FaStar /> NEXT-GEN CREATIVE
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mt-4 mb-6">
              AI-Powered Video Creation
            </h1>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
              Using cutting-edge AI tools to create high-converting videos faster and cheaper than ever before
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {aiVideos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -12, scale: 1.03 }}
                className="glass rounded-3xl overflow-hidden group cursor-pointer"
                onClick={() => setSelectedVideo(video)}
              >
                {/* Autoplay Vertical Video */}
                <div className="relative mx-auto max-w-[300px] mt-6">
                  <div className="aspect-[9/16] bg-black rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative">
                    <video
                      src={video.videoSrc}
                      className="w-full h-full object-cover"
                      preload="metadata"
                      muted
                      loop
                      autoPlay
                      playsInline
                    />

                    {/* Hover Play Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-all">
                      <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform">
                        <FaPlay className="text-white ml-1 text-3xl" />
                      </div>
                    </div>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute top-4 right-4 bg-black/80 text-xs px-3 py-1 rounded-full flex items-center gap-1">
                    <FaPlay className="text-xs" /> {video.duration}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">{video.title}</h3>
                  
                  <div className="space-y-4 text-sm">
                    <div>
                      <p className="text-gray-400">Tools Used</p>
                      <p className="text-cyan-400 font-medium">{video.tools}</p>
                    </div>
                    
                    <div>
                      <p className="text-gray-400">Description</p>
                      <p className="text-gray-300 leading-relaxed">{video.description}</p>
                    </div>

                    <div className="pt-3 border-t border-white/10">
                      <p className="text-emerald-400 font-medium flex items-center gap-2">
                        <FaMagic /> {video.benefit}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Full Screen Video Modal */}
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
              className="relative w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute -top-20 left-1/2 -translate-x-1/2 bg-black/80 hover:bg-red-600 text-white px-8 py-3 rounded-full flex items-center gap-3 text-lg z-20"
              >
                <FaTimes /> CLOSE
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