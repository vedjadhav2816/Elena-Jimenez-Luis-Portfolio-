import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaLinkedin, FaExternalLinkAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
            Let’s Create Together
          </h2>
          <p className="text-xl text-gray-400 max-w-md mx-auto">
            Ready to scale your brand with high-converting creatives?
          </p>
        </motion.div>

        <div className="glass rounded-3xl p-10 md:p-16">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Left Side - Contact Info */}
            <div className="space-y-10">
              <motion.a
                href="mailto:ejimenezluis99@gmail.com"
                whileHover={{ x: 10 }}
                className="flex items-center gap-5 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-3xl text-cyan-400 group-hover:bg-cyan-500/20 transition">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-lg font-medium">ejimenezluis99@gmail.com</p>
                </div>
              </motion.a>

              <motion.a
                href="tel:+34635224228"
                whileHover={{ x: 10 }}
                className="flex items-center gap-5 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-3xl text-cyan-400 group-hover:bg-cyan-500/20 transition">
                  <FaPhone />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone / WhatsApp</p>
                  <p className="text-lg font-medium">+34 635 224 228</p>
                </div>
              </motion.a>
            </div>

            {/* Right Side - Professional Links */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold mb-6 text-cyan-400">Connect With Me</h3>

              <motion.a
                href="https://www.linkedin.com/in/elenajimenezluis"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                className="flex items-center justify-between glass p-6 rounded-2xl hover:border-cyan-400/50 transition group"
              >
                <div className="flex items-center gap-4">
                  <FaLinkedin className="text-4xl text-[#0A66C2]" />
                  <div>
                    <p className="font-medium">LinkedIn</p>
                    <p className="text-sm text-gray-400">Professional Profile</p>
                  </div>
                </div>
                <FaExternalLinkAlt className="opacity-0 group-hover:opacity-100 transition" />
              </motion.a>

              <motion.a
                href="https://www.fiverr.com/s/e6aYGGP"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                className="flex items-center justify-between glass p-6 rounded-2xl hover:border-cyan-400/50 transition group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center text-2xl font-bold">f</div>
                  <div>
                    <p className="font-medium">Fiverr</p>
                    <p className="text-sm text-gray-400">Hire Me</p>
                  </div>
                </div>
                <FaExternalLinkAlt className="opacity-0 group-hover:opacity-100 transition" />
              </motion.a>
            </div>
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center text-gray-500 mt-12 text-sm"
        >
          Available for freelance projects worldwide
        </motion.p>
      </div>
    </section>
  );
}