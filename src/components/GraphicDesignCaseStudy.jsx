import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaArrowLeft, FaCrown } from "react-icons/fa";
import CustomCursor from "./CustomCursor";

export default function GraphicDesignCaseStudy() {
  const [selectedImage, setSelectedImage] = useState(null);

  const graphics = [
    { 
      id: 1, 
      title: "Copia de TK_4_1x1_IMG_NEW_50%OFF_SOCIALPROOF", 
      src: "/screenshots/gp1.png", 
      resultSrc: "/screenshots/gp1 result.png",
      best: true 
    },
    { id: 2, title: "BlackFriday_Batch", src: "/screenshots/gp2.png", best: false },
    { id: 3, title: "BlackFriday_Batch", src: "/screenshots/gp3.png" },
    { id: 4, title: "Facts&Stats", src: "/screenshots/gp4(1).png" },
    { id: 5, title: "BlackFriday_Batch", src: "/screenshots/gp5.png" },
    { id: 6, title: "Retargeting", src: "/screenshots/gp6.png" },
    { id: 7, title: "Testimonial", src: "/screenshots/gp7.png" },
    { id: 8, title: "Retargeting", src: "/screenshots/gp8.png" },
    { id: 9, title: "BlackFriday_Batch", src: "/screenshots/gp9.png" },
  ];

  // Close with ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div className="min-h-screen bg-[#050816] text-white">
      <CustomCursor />   {/* ← Custom Cursor Added */}

      {/* Navbar */}
      <nav className="fixed top-0 w-full glass z-50 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 text-cyan-400 hover:text-cyan-300 transition">
            <FaArrowLeft /> Back to Portfolio
          </Link>
          <h1 className="text-2xl font-bold gradient-text">Graphic Design Lab</h1>
        </div>
      </nav>

      <div className="pt-24 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-6xl md:text-7xl font-bold mb-6">Graphic Design</h1>
            <p className="text-2xl text-gray-300">High-Converting Creatives & Brand Visuals</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {graphics.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ scale: 1.05 }}
                className="group relative rounded-3xl overflow-hidden glass cursor-pointer"
                onClick={() => setSelectedImage(item)}
              >
                <div className="relative">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full aspect-[4/3] object-cover"
                  />

                  {item.best && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-amber-500 text-black text-xs font-bold px-4 py-1 rounded-full flex items-center gap-1 shadow-lg">
                      <FaCrown /> BEST PERFORMING
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all flex items-end p-6">
                    <p className="text-lg font-medium">{item.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ===================== FULL SCREEN IMAGE MODAL ===================== */}
      <AnimatePresence>
        {selectedImage && (
          <div
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 cursor-pointer"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              className="relative max-w-[95vw] max-h-[95vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col items-center justify-center min-h-[85vh] gap-8">
                {/* Main Image */}
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="max-h-[75vh] max-w-full object-contain rounded-2xl shadow-2xl"
                />

                {/* Result Screenshot (only for best performing) */}
                {selectedImage.best && selectedImage.resultSrc && (
                  <div className="w-full max-w-2xl">
                    <p className="text-amber-400 text-center mb-3 font-medium">PERFORMANCE RESULT</p>
                    <img
                      src={selectedImage.resultSrc}
                      alt="Performance Result"
                      className="w-full rounded-2xl shadow-2xl border border-white/10"
                    />
                  </div>
                )}
              </div>

              {/* Image Info */}
              <div className="text-center mt-6">
                <h3 className="text-3xl font-bold">{selectedImage.title}</h3>
                {selectedImage.best && (
                  <p className="text-amber-400 text-xl mt-2">★ Best Performing Creative ★</p>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}