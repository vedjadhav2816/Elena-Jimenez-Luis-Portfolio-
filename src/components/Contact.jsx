import { motion } from "framer-motion";
import { FaLinkedin, FaExternalLinkAlt } from "react-icons/fa";

export default function Contact() {
return (
<section id="contact" className="py-20 px-6 relative overflow-hidden">
<div className="max-w-5xl mx-auto">
<motion.div
initial={{ opacity: 0, y: 40 }}
whileInView={{ opacity: 1, y: 0 }}
className="text-center mb-16"
>
<h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-6 gradient-text">
Let’s Build Something
</h2>
<p className="text-lg md:text-xl text-gray-400 max-w-md mx-auto">
Ready to create visuals that convert?
</p>
</motion.div>

    <div className="glass rounded-3xl p-8 md:p-16">
      <div className="flex flex-col md:grid md:grid-cols-5 gap-10 md:gap-12">

        {/* Contact Info */}
        <div className="md:col-span-3">
          <motion.a
            href="mailto:ejimenezluis99@gmail.com"
            whileHover={{ x: 10 }}
            className="flex items-start gap-5 group active:scale-95 transition-transform"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center text-4xl text-black shadow-lg group-hover:scale-110 transition-transform flex-shrink-0">
              ✉️
            </div>
            <div className="pt-1">
              <p className="uppercase text-xs tracking-widest text-gray-500">
                Email
              </p>
              <p className="text-lg md:text-xl font-medium mt-1 break-all group-hover:text-cyan-400 transition-colors">
                ejimenezluis99@gmail.com
              </p>
            </div>
          </motion.a>
        </div>

        {/* Professional Links */}
        <div className="md:col-span-2 space-y-5">
          <h3 className="text-2xl font-bold mb-6 text-cyan-400 text-center md:text-left">
            Connect With Me
          </h3>

          <motion.a
            href="https://www.linkedin.com/in/elenajimenezluis"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            className="group flex items-center justify-between bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/50 p-6 rounded-2xl transition-all active:scale-95"
          >
            <div className="flex items-center gap-4">
              <FaLinkedin className="text-4xl text-[#0A66C2]" />
              <div>
                <p className="font-semibold">LinkedIn</p>
                <p className="text-sm text-gray-400">
                  Professional Profile
                </p>
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
      className="text-center mt-12 text-gray-500 text-sm tracking-wider"
    >
      OPEN TO FREELANCE & COLLABORATION WORLDWIDE
    </motion.p>
  </div>
</section>

);
}