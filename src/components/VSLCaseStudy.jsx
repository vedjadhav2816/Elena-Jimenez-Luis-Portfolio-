import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaArrowLeft, FaPlay, FaClock, FaChartBar, FaTimes } from "react-icons/fa";
import CustomCursor from "./CustomCursor";

export default function VSLCaseStudy() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const longFormVSLs = [
    {
      id: 1,
      title: "Long Form VSL 1",
      videoSrc: "https://res.cloudinary.com/dnymbpzbx/video/upload/v1781942243/H5_VSL_Nooro_NEW_L1_RLTherapy_thqh1n.mp4",
      screenshot: "/screenshots/H5 VSL, Nooro_NEW_L1_RLTherapy performance metrics.png",
      result: "22% Conversion Rate",
      duration: "8:15",
      isVertical: true,
    },
    {
      id: 2,
      title: "Long Form VSL 2",
      videoSrc: "https://res.cloudinary.com/dnymbpzbx/video/upload/v1781943945/Long_VSL_H6_4x5_VID_5Myth_NEW_lwrjuw.mp4",
      screenshot: "/screenshots/Long VSL H6_4x5_VID_5Myth_NEW performance metrics.png",
      result: "17.8% Conversion Rate",
      duration: "7:45",
      isVertical: true,
    },
    {
      id: 3,
      title: "Long Form VSL 3",
      videoSrc: "https://res.cloudinary.com/dnymbpzbx/video/upload/v1781939387/TK_H3_4x5_VID_Nooro_IT.R3_L1_Dr_Avatar_rz455s.mp4",
      screenshot: "/screenshots/TK_H3_4x5_VID_Nooro_IT.R3_L1_Dr_Avatar performance metrics.png",
      result: "19.4% Conversion Rate",
      duration: "8:13",
      isVertical: true,
    },
    {
      id: 4,
      title: "Long Form VSL 4",
      videoSrc: "https://res.cloudinary.com/dnymbpzbx/video/upload/v1781938112/UGC_VSL_PT_Laura_L1_H11_h7dchc.mp4",
      screenshot: "/screenshots/UGC_VSL PT_Laura L1 H11 performance metrics.png",
      result: "24% Conversion Rate",
      duration: "6:46",
      isVertical: true,
    },
  ];

  const shortFormVSLs = [
    {
      id: 1,
      title: "Short Form VSL 1",
      videoSrc: "https://res.cloudinary.com/dnymbpzbx/video/upload/v1781944286/3_min__Norelie__auckgi.mp4",
      screenshot: "/screenshots/3 min _Norelie_ performance metrics .png",
      result: "3.8 ROAS",
      duration: "2:54",
      isVertical: true,
    },
    {
      id: 2,
      title: "Short Form VSL 2",
      videoSrc: "https://res.cloudinary.com/dnymbpzbx/video/upload/v1781944590/H1_CPareyou60_9x16_spkww0.mp4",
      // ❌ No screenshot, no result
      duration: "1:33",
      isVertical: true,
    },
    {
      id: 3,
      title: "Short Form VSL 3",
      videoSrc: "https://res.cloudinary.com/dnymbpzbx/video/upload/v1781944774/9x16_fluxa_pdrn_video_ur35fr.mp4",
      // ❌ No screenshot, no result
      duration: "0:52",
      isVertical: true,
    },
    {
      id: 4,
      title: "Short Form VSL 4",
      videoSrc: "https://res.cloudinary.com/dnymbpzbx/video/upload/v1781945020/H1_CPingredientsbreakdown_9x16_iuiqzm.mp4",
      // ❌ No screenshot, no result
      duration: "1:54",
      isVertical: true,
    },
    {
      id: 5,
      title: "Short Form VSL 5",
      videoSrc: "https://res.cloudinary.com/dnymbpzbx/video/upload/v1781941206/H5hyaluronic_CPtophatoavoid_9x16_t6szpu.mp4",
      // ❌ No screenshot, no result
      duration: "1:54",
      isVertical: true,
    },
    {
      id: 6,
      title: "Short Form VSL 6",
      videoSrc: "https://res.cloudinary.com/dnymbpzbx/video/upload/v1781940712/Laura_UGC_IT_R2_ShortVer_H5_wz3lww.mp4",
      screenshot: "/screenshots/Laura UGC IT_R2 ShortVer H5 performance metrics.png",
      result: "22% Lower CPA",
      duration: "2:48",
      isVertical: true,
    },
    {
      id: 7,
      title: "Short Form VSL 7",
      videoSrc: "https://res.cloudinary.com/dnymbpzbx/video/upload/v1781939799/TK_H2_4x5_VID_Phil_UGC_NEW_i78ynv.mp4",
      screenshot: "/screenshots/TK_H2_4x5_VID_Phil_UGC_NEW performance metrics.png",
      result: "22% Lower CPA",
      duration: "2:22",
      isVertical: true,
    },
  ];

  const renderVideoCard = (vsl, index, accentColor) => (
    <motion.div
      key={vsl.id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className={`bg-black/60 rounded-2xl overflow-hidden border border-white/10 hover:border-${accentColor}-400/40 transition-all group`}
    >
      {/* Autoplay Vertical Video */}
      <div
        className={`relative mx-auto ${vsl.isVertical ? "max-w-[280px]" : "w-full"} cursor-pointer`}
        onClick={() => setSelectedVideo(vsl)}
      >
        <div className={vsl.isVertical ? "aspect-[9/16]" : "aspect-video"}>
          <video
            src={vsl.videoSrc}
            className="w-full h-full object-cover"
            preload="metadata"
            muted
            loop
            autoPlay
            playsInline
          />
        </div>

        {/* Hover Play Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/10 transition-all">
          <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform">
            <FaPlay className="text-white ml-1 text-3xl" />
          </div>
        </div>

        {/* Duration */}
        <div className="absolute top-4 right-4 bg-black/80 text-xs px-3 py-1 rounded-full flex items-center gap-1.5">
          <FaPlay className="text-xs" /> {vsl.duration}
        </div>
      </div>

      {/* Content */}
      <div className="p-7">
        <h3 className="text-xl font-semibold mb-4">{vsl.title}</h3>

        {/* Only show result if it exists */}
        {vsl.result && (
          <div className={`flex items-center gap-2 text-${accentColor}-400 mb-6`}>
            <FaChartBar />
            <span className="font-medium">{vsl.result}</span>
          </div>
        )}

        {/* Only show screenshot if it exists */}
        {vsl.screenshot && (
          <div>
            <p className="text-sm text-gray-400 mb-3">Campaign Result Screenshot</p>
            <img
              src={vsl.screenshot}
              alt="Result"
              className="w-full rounded-xl border border-white/10 cursor-zoom-in hover:scale-[1.02] transition-transform"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(vsl.screenshot);
              }}
            />
          </div>
        )}
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-[#050816] text-white">
      <CustomCursor />

      <nav className="fixed top-0 w-full glass z-50 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 text-cyan-400 hover:text-cyan-300 transition">
            <FaArrowLeft /> Back to Portfolio
          </Link>
          <h1 className="text-2xl font-bold gradient-text">VSL Production</h1>
        </div>
      </nav>

      <div className="pt-24 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-20">
            <span className="text-cyan-400 uppercase tracking-[4px] text-sm">VIDEO SALES LETTERS</span>
            <h1 className="text-6xl md:text-7xl font-bold mt-4 mb-6">High-Converting VSLs</h1>
            <p className="text-2xl text-gray-300">Direct Response Creative Strategy</p>
          </motion.div>

          <div className="space-y-28">
            {/* Long Form */}
            <motion.section initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} className="glass rounded-3xl p-8 md:p-16">
              <div className="flex items-center gap-4 mb-12">
                <FaClock className="text-4xl text-cyan-400" />
                <h2 className="text-4xl font-bold">Long Form VSL</h2>
              </div>
              <div className="grid lg:grid-cols-2 gap-10">
                {longFormVSLs.map((vsl, index) => renderVideoCard(vsl, index, "cyan"))}
              </div>
            </motion.section>

            {/* Short Form */}
            <motion.section initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} className="glass rounded-3xl p-8 md:p-16">
              <div className="flex items-center gap-4 mb-12">
                <FaClock className="text-4xl text-purple-400" />
                <h2 className="text-4xl font-bold">Short Form VSL</h2>
              </div>
              <div className="grid lg:grid-cols-2 gap-10">
                {shortFormVSLs.map((vsl, index) => renderVideoCard(vsl, index, "purple"))}
              </div>
            </motion.section>
          </div>
        </div>
      </div>

      {/* ========== VIDEO FULL SCREEN MODAL ========== */}
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
              {/* Video Container with Close Button Overlay */}
              <div className="relative aspect-[9/16] bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/20">
                {/* ========== CLOSE BUTTON - X ICON ON TOP-RIGHT EDGE ========== */}
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
                {selectedVideo.result && (
                  <p className="text-cyan-400 mt-1">{selectedVideo.result}</p>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ========== IMAGE FULL SCREEN MODAL ========== */}
      <AnimatePresence>
        {selectedImage && (
          <div
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button for image modal */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white text-4xl hover:text-cyan-400 transition-colors z-20"
              >
                <FaTimes />
              </button>
              <img
                src={selectedImage}
                alt="Result"
                className="w-full rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}