import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom"; // 👈 added useLocation
import { useState, useEffect } from "react";
import { FaArrowLeft, FaPlay, FaTimes } from "react-icons/fa";
import CustomCursor from "./CustomCursor";

export default function UGCCaseStudy() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const location = useLocation();

  // Scroll to top whenever the route changes (including initial load)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const ugcVideos = [
    {
      id: 1,
      title: "AI UGC_VSL",
      videoSrc: "https://res.cloudinary.com/dnymbpzbx/video/upload/v1781948065/AI_UGC_VSL_ebhmhh.mp4",
      duration: "4.46 min"
    },
    {
      id: 2,
      title: "pretty person problem caryapper",
      videoSrc: "https://res.cloudinary.com/dnymbpzbx/video/upload/v1781948565/H2_head1_CPprettypersonproblemcaryapper_9x16_kwngmx.mp4",
      duration: "2.14 min"
    },
    {
      id: 3,
      title: "Medium UGC",
      videoSrc: "https://res.cloudinary.com/dnymbpzbx/video/upload/v1781950149/Medium_UGC_wiekph.mp4", // removed trailing space
      duration: "2.24 min"
    },
    {
      id: 4,
      title: "Medium VSL",
      videoSrc: "https://res.cloudinary.com/dnymbpzbx/video/upload/v1781949481/Medium_VSL_1_qxdkgd.mp4",
      duration: "4.51 min"
    },
    {
      id: 5,
      title: "Short UGC",
      videoSrc: "https://res.cloudinary.com/dnymbpzbx/video/upload/v1781964054/Short_UGC_iebaui.mp4",
      duration: "1.18 min"
    },
    {
      id: 6,
      title: "UGC Edit",
      videoSrc: "https://res.cloudinary.com/dnymbpzbx/video/upload/v1781950554/UGC_edit_y6izma.mp4",
      duration: "1.00 min"
    },
  ];

  return (
    <div className="min-h-screen bg-[#050816] text-white">
      <CustomCursor />

      {/* Navbar */}
      <nav className="fixed top-0 w-full glass z-50 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 text-cyan-400 hover:text-cyan-300 transition">
            <FaArrowLeft /> Back to Portfolio
          </Link>
          <h1 className="text-2xl font-bold gradient-text flex items-center gap-3">
            📸 UGC STUDIO
          </h1>
        </div>
      </nav>

      {/* Increase top padding on mobile to prevent heading from being cut off */}
      <div className="pt-28 sm:pt-32 md:pt-24 lg:pt-24 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-black px-8 py-3 rounded-full font-bold mb-6">
              AUTHENTIC UGC
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6">UGC Content Creation</h1>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
              Real-looking, high-converting user-generated content that builds trust and drives sales
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ugcVideos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -12, scale: 1.03 }}
                className="glass rounded-3xl overflow-hidden group cursor-pointer"
                onClick={() => setSelectedVideo(video)}
              >
                <div className="relative mx-auto max-w-[300px] mt-6">
                  <div className="aspect-[9/16] bg-black rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl relative">
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
                      <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur flex items-center justify-center group-hover:scale-110 transition">
                        <FaPlay className="text-white ml-1 text-3xl" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-8 text-center">
                  <h3 className="text-xl font-bold mb-2">{video.title}</h3>
                  <p className="text-cyan-400 text-sm">{video.duration}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ===================== FULL SCREEN VIDEO MODAL ===================== */}
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
              {/* Video Container with Close Button Overlay */}
              <div className="relative aspect-[9/16] bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/20">
                {/* ========== CLOSE BUTTON - X ICON ON TOP EDGE ========== */}
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="absolute top-3 right-3 z-30 
                             bg-black/70 hover:bg-red-600 active:bg-red-700
                             backdrop-blur-md
                             text-white 
                             w-12 h-12 rounded-full
                             flex items-center justify-center
                             text-2xl font-bold
                             border border-white/30 hover:border-red-400
                             shadow-lg shadow-black/50
                             transition-all duration-200
                             touch-action-manipulation
                             active:scale-90"
                  style={{ touchAction: "manipulation" }}
                  aria-label="Close video"
                >
                  <FaTimes />
                </button>

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
                <p className="text-cyan-400 mt-1">{selectedVideo.duration}</p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}