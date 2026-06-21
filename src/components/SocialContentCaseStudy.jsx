import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaArrowLeft, FaPlay, FaHeart, FaEye, FaTimes } from "react-icons/fa";
import CustomCursor from "./CustomCursor";

export default function SocialContentCaseStudy() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const socialVideos = [
    {
      id: 1,
      title: "Hook in 3 Seconds",
      videoSrc: "https://res.cloudinary.com/dnymbpzbx/video/upload/v1781945767/Tiktok_edit_r1ghj9.mov",
      duration: "15s",
      platform: "TikTok + Reels",
      views: "245K",
      likes: "18.4K",
      engagement: "7.8%"
    },
    {
      id: 2,
      title: "UGC Style Transformation",
      videoSrc: "https://res.cloudinary.com/dnymbpzbx/video/upload/v1781946581/Reel_ad2_1_ouyya6.mp4",
      duration: "22s",
      platform: "Instagram Reels",
      views: "189K",
      likes: "14.2K",
      engagement: "6.9%"
    },
    {
      id: 3,
      title: "Trend Jacking - Viral Sound",
      videoSrc: "https://res.cloudinary.com/dnymbpzbx/video/upload/v1781946975/Reel_ad1_1_uqvbu7.mp4",
      duration: "18s",
      platform: "Reel Ad",
      views: "412K",
      likes: "31K",
      engagement: "9.1%"
    },
    {
      id: 4,
      title: "Before → After Skincare",
      videoSrc: "https://res.cloudinary.com/dnymbpzbx/video/upload/v1781947132/Insta_feed_video_nexweh.mov",
      duration: "28s",
      platform: "TikTok + Reels",
      views: "156K",
      likes: "12.8K",
      engagement: "5.4%"
    },
    {
      id: 5,
      title: "Storytelling Hook + CTA",
      videoSrc: "https://res.cloudinary.com/dnymbpzbx/video/upload/v1781947188/Insta_video_2_bpbctz.mov",
      duration: "21s",
      platform: "TikTok",
      views: "298K",
      likes: "21.5K",
      engagement: "8.3%"
    },
  ];

  return (
    <div className="min-h-screen bg-[#050816] text-white overflow-hidden">
      <CustomCursor />

      {/* Navbar */}
      <nav className="fixed top-0 w-full glass z-50 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 text-cyan-400 hover:text-cyan-300 transition">
            <FaArrowLeft /> Back to Portfolio
          </Link>
          <h1 className="text-2xl font-bold gradient-text flex items-center gap-3">
            📱 Social Content Lab
          </h1>
        </div>
      </nav>

      <div className="pt-28 md:pt-24 pb-20">   {/* ← Increased padding for mobile */}
        <div className="max-w-6xl mx-auto px-6">
          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-black px-8 py-3 rounded-full font-bold text-lg mb-6">
              🔥 VIRAL SHORT FORM CONTENT
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mt-4 mb-6 tracking-tighter">
              TikTok & Instagram<br />Content That Converts
            </h1>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
              High-retention vertical videos that stop the scroll and drive real results
            </p>
          </motion.div>

          {/* Videos Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {socialVideos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -12, scale: 1.03 }}
                className="glass rounded-3xl overflow-hidden group cursor-pointer"
                onClick={() => setSelectedVideo(video)}
              >
                <div className="relative mx-auto max-w-[280px] mt-6">
                  <div className="aspect-[9/16] bg-black rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl relative">
                    <video
                      src={video.videoSrc}
                      className="w-full h-full object-cover"
                      preload="metadata"
                      muted
                      loop
                      autoPlay
                      playsInline
                    />
                    
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/10 transition-all">
                      <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform">
                        <FaPlay className="text-white ml-1 text-3xl" />
                      </div>
                    </div>
                  </div>

                  <div className="absolute -top-3 right-4 bg-gradient-to-r from-pink-500 to-purple-500 text-xs font-bold px-4 py-1 rounded-full">
                    {video.platform}
                  </div>
                </div>

                <div className="p-8 text-center">
                  <h3 className="text-xl font-bold mb-4">{video.title}</h3>
                  <div className="flex justify-center gap-6 text-sm">
                    <div className="flex items-center gap-1.5">
                      <FaEye className="text-cyan-400" />
                      <span>{video.views}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <FaHeart className="text-pink-500" />
                      <span>{video.likes}</span>
                    </div>
                    <div className="text-emerald-400 font-medium">
                      {video.engagement}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ===================== FULL SCREEN MODAL ===================== */}
      <AnimatePresence>
        {selectedVideo && (
          <div 
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              className="relative w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute -top-20 left-1/2 -translate-x-1/2 bg-black/70 hover:bg-red-600 text-white px-8 py-3 rounded-full flex items-center gap-3 text-lg font-medium border border-white/20 hover:border-white/40 transition-all z-20"
              >
                <FaTimes /> CLOSE FULL SCREEN
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

              <div className="text-center mt-6">
                <h3 className="text-2xl font-bold">{selectedVideo.title}</h3>
                <p className="text-cyan-400 mt-1">{selectedVideo.platform}</p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}