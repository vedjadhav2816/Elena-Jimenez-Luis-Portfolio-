import { motion, AnimatePresence } from "framer-motion";
import { FaStar, FaQuoteLeft, FaTimes, FaExpand } from "react-icons/fa";
import { useState, useEffect } from "react";   // <-- Added useEffect here
import CustomCursor from "./CustomCursor";

const reviews = [
  {
    id: 1,
    name: "Nasser Kamal review",
    role: "Founder MNSSK",
    quote: "Elena's creative strategies skyrocketed our ROAS by 3x in just 2 months. Her video content is next level.",
    image: "/screenshots/review(1).png", // Make sure these are .png (convert from PDF)
    rating: 5,
  },
  {
    id: 2,
    name: "Bogaczek",
   
    quote: "Great as Always!",
    image: "/screenshots/review2.png",
    rating: 5,
  },
  {
    id: 3,
    name: "Apiero",
    
    quote: "She is Best!.",
    image: "/screenshots/review3.png",
    rating: 5,
  },
  {
    id: 4,
    name: "Arelmsosa",
   
    quote: "excelente trabajo",
    image: "/screenshots/review4.png",
    rating: 5,
  },
  {
    id: 5,
    name: "Alvaronvv",
   
    quote: "I'm Very happy with Elena's work!",
    image: "/screenshots/review5.png",
    rating: 5,
  },
];

// --- Full-Screen Modal Component with 3D Animation ---
function ImageModal({ image, name, onClose }) {
  // Block scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-xl"
        onClick={onClose} // Click backdrop to close
      >
        <motion.div
          initial={{ scale: 0.6, rotateY: 90, opacity: 0 }}
          animate={{ scale: 1, rotateY: 0, opacity: 1 }}
          exit={{ scale: 0.4, rotateY: -90, opacity: 0 }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
          className="relative max-w-[90vw] max-h-[90vh] w-auto h-auto"
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
        >
          <motion.div
            className="relative rounded-2xl overflow-hidden shadow-2xl shadow-cyan-500/30"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={image}
              alt={name}
              className="max-w-[90vw] max-h-[85vh] object-contain rounded-2xl"
              onError={(e) => {
                e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='400' height='300' fill='%231a1a2e'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%236b7280' font-family='sans-serif' font-size='20'%3EImage not found%3C/text%3E%3C/svg%3E";
              }}
            />
          </motion.div>

          {/* Close button */}
          <motion.button
            whileHover={{ scale: 1.2, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            className="absolute -top-4 -right-4 bg-cyan-500 text-white p-3 rounded-full shadow-lg hover:bg-cyan-600 transition-colors"
            onClick={onClose}
          >
            <FaTimes size={20} />
          </motion.button>

          {/* Name badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 backdrop-blur-sm px-6 py-3 rounded-full border border-white/10"
          >
            <p className="text-white font-medium text-sm">{name}</p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 text-gray-400 text-xs"
          >
            Click anywhere outside to close
          </motion.p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// --- Main Reviews Component ---
export default function Reviews() {
  const [selectedReview, setSelectedReview] = useState(null);

  const openModal = (review) => setSelectedReview(review);
  const closeModal = () => setSelectedReview(null);

  return (
    <>
      <div className="min-h-screen bg-dark-bg text-white pt-28 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-16">
            <motion.h1
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-5xl font-bold gradient-text"
            >
              Social Proof
            </motion.h1>
            <p className="text-gray-400 mt-4 text-lg">
              Real results from real clients – see what they have to say.
            </p>
            <div className="flex justify-center gap-2 mt-6">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400 text-2xl" />
              ))}
            </div>
          </div>

          {/* Screenshot Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20 cursor-pointer"
                onClick={() => openModal(review)}
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='400' height='300' fill='%231a1a2e'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%236b7280' font-family='sans-serif' font-size='18'%3EConvert to PNG%3C/text%3E%3C/svg%3E";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent opacity-60" />
                  <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 text-yellow-400 text-sm">
                    <FaStar /> {review.rating}.0
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-black/60 backdrop-blur-sm p-3 rounded-full">
                      <FaExpand className="text-white text-xl" />
                    </div>
                  </div>
                </div>

                <div className="p-6 relative">
                  <FaQuoteLeft className="text-cyan-400/30 text-3xl absolute -top-3 right-6" />
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    "{review.quote}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{review.name}</h4>
                      <p className="text-gray-400 text-xs">{review.role}</p>
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-xl" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
          >
            {[
              { label: "Projects Completed", value: "50+" },
              { label: "Happy Clients", value: "40+" },
              { label: "Average ROAS Increase", value: "2.8x" },
              { label: "CTR Improvement", value: "45%" },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
              >
                <div className="text-3xl font-bold text-cyan-400">{stat.value}</div>
                <div className="text-gray-400 text-sm mt-2">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* CTA */}
          <div className="text-center mt-16">
            <a
              href="/#contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full font-semibold text-white hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/30"
            >
              Ready to boost your results? Let's talk
            </a>
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      {selectedReview && (
        <ImageModal
          image={selectedReview.image}
          name={selectedReview.name}
          onClose={closeModal}
        />
      )}

      <CustomCursor />
    </>
  );
}