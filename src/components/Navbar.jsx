import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Experience", id: "experience" },
    { name: "Education", id: "education" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <a href="/#home" className="text-3xl font-bold gradient-text tracking-tight">
          ELENA
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 text-sm font-medium">
          {links.map((link) => (
            <a
              key={link.id}
              href={`/#${link.id}`}
              className="hover:text-cyan-400 transition-all duration-300 relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all" />
            </a>
          ))}
          {/* New: Reviews */}
          <Link
            to="/reviews"
            className="hover:text-cyan-400 transition-all duration-300 relative group"
          >
            Reviews
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all" />
          </Link>
          {/* CV */}
          <Link
            to="/cv"
            className="hover:text-cyan-400 transition-all duration-300 relative group"
          >
            CV
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-2xl text-cyan-400"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass border-t border-white/10 px-6 py-8"
        >
          <div className="flex flex-col gap-6 text-lg">
            {links.map((link) => (
              <a
                key={link.id}
                href={`/#${link.id}`}
                onClick={() => setMenuOpen(false)}
                className="hover:text-cyan-400 transition"
              >
                {link.name}
              </a>
            ))}
            <Link
              to="/reviews"
              onClick={() => setMenuOpen(false)}
              className="hover:text-cyan-400 transition"
            >
              Reviews
            </Link>
            <Link
              to="/cv"
              onClick={() => setMenuOpen(false)}
              className="hover:text-cyan-400 transition"
            >
              CV
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
}