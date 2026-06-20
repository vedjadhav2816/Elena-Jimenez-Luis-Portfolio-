import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaLinkedin, FaExternalLinkAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 gradient-text">
            Let’s Build Something
          </h2>
          <p className="text-xl text-gray-400 max-w-md mx-auto">
            Ready to create visuals that convert?
          </p>
        </motion.div>

        <div className="glass rounded-3xl p-12 md:p-20 relative">
          <div className="grid md:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="md:col-span-3 space-y-12">
              <motion.a
                href="mailto:ejimenezluis99@gmail.com"
                whileHover={{ x: 15 }}
                className="flex items-start gap-6 group"
              >
                <div className="mt-1 w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center text-4xl text-black shadow-lg group-hover:scale-110 transition-transform">
                  ✉️
                </div>
                <div>
                  <p className="uppercase text-xs tracking-widest text-gray-500">Email</p>
                  <p className="text-2xl font-medium mt-1 group-hover:text-cyan-400 transition-colors">
                    ejimenezluis99@gmail.com
                  </p>
                </div>
              </motion.a>

              <motion.a
                href="tel:+34635224228"
                whileHover={{ x: 15 }}
                className="flex items-start gap-6 group"
              >
                <div className="mt-1 w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center text-4xl text-black shadow-lg group-hover:scale-110 transition-transform">
                  📞
                </div>
                <div>
                  <p className="uppercase text-xs tracking-widest text-gray-500">Phone / WhatsApp</p>
                  <p className="text-2xl font-medium mt-1 group-hover:text-cyan-400 transition-colors">
                    +34 635 224 228
                  </p>
                </div>
              </motion.a>
            </div>

            {/* Professional Links */}
            <div className="md:col-span-2 space-y-6">
              <h3 className="text-2xl font-bold mb-8 text-cyan-400">Find me on</h3>

              <motion.a
                href="https://www.linkedin.com/in/elenajimenezluis"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, x: 10 }}
                className="group flex items-center justify-between bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/50 p-6 rounded-2xl transition-all"
              >
                <div className="flex items-center gap-5">
                  <FaLinkedin className="text-5xl text-[#0A66C2]" />
                  <div>
                    <p className="font-semibold text-lg">LinkedIn</p>
                    <p className="text-sm text-gray-400">Professional Network</p>
                  </div>
                </div>
                <FaExternalLinkAlt className="text-xl opacity-0 group-hover:opacity-100 transition" />
              </motion.a>

              <motion.a
                href="https://www.fiverr.com/s/e6aYGGP"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, x: 10 }}
                className="group flex items-center justify-between bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/50 p-6 rounded-2xl transition-all"
              >
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center text-3xl font-bold text-black">ƒ</div>
                  <div>
                    <p className="font-semibold text-lg">Fiverr</p>
                    <p className="text-sm text-gray-400">Freelance Services</p>
                  </div>
                </div>
                <FaExternalLinkAlt className="text-xl opacity-0 group-hover:opacity-100 transition" />
              </motion.a>
            </div>
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mt-12 text-gray-500 text-sm tracking-wider"
        >
          OPEN TO FREELANCE & COLLABORATION WORLDWIDE
        </motion.p>
      </div>
    </section>
  );
}