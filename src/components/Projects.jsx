import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "VSL Production",
    description: "Full video sales letter from script to final edit — 18% conversion rate.",
    category: "Video Editing",
    color: "from-purple-500 to-pink-500",
    link: "/case-study/vsl",
    buttonText: "View Full Case Study"
  },
  {
    title: "AI Video & Creative",
    description: "Advanced AI-powered video generation, avatar videos, and creative automation.",
    category: "AI Innovation",
    color: "from-violet-500 to-cyan-500",
    link: "/case-study/ai",
    buttonText: "Explore AI Projects"
  },
  {
    title: "TikTok & Instagram Content",
    description: "High-performing short-form vertical content for TikTok, Reels & Instagram.",
    category: "Social Media Content",
    color: "from-pink-500 to-rose-500",
    link: "/case-study/social",
    buttonText: "View Content Library"
  },
  {
    title: "UGC Content Creation",
    description: "Authentic user-generated style videos that convert cold audiences.",
    category: "UGC Marketing",
    color: "from-emerald-400 to-teal-500",
    link: "/case-study/ugc",           // ← Now Linked
    buttonText: "View UGC Projects"
  },
  {
    title: "Podcast Editing",
    description: "Professional podcast editing with 21€ ad spend generating over 3x ROAS.",
    category: "Audio & Podcast",
    color: "from-amber-500 to-orange-500",
    link: "/case-study/podcast",
    buttonText: "View Podcast Project"
  },
  {
    title: "Graphic Design",
    description: "High-converting thumbnails, ad creatives, and brand visuals.",
    category: "Graphic Design",
    color: "from-blue-500 to-cyan-500",
    link: "/case-study/graphics",
    buttonText: "Browse Design Work"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-center mb-20 gradient-text"
        >
          Selected Work
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -12, scale: 1.02, boxShadow: "0 0 40px rgba(6, 182, 212, 0.3)" }}
              className="group glass rounded-3xl overflow-hidden border border-white/10 hover:border-cyan-400/50 transition-all duration-500 relative"
            >
              <div className={`h-2 bg-gradient-to-r ${project.color}`} />

              <div className="p-9">
                <span className="uppercase text-xs tracking-widest text-cyan-400 font-medium">
                  {project.category}
                </span>
                
                <h3 className="text-3xl font-bold mt-4 mb-4 group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-300 leading-relaxed">
                  {project.description}
                </p>

                {project.link !== "#" ? (
                  <Link to={project.link}>
                    <button className="mt-8 text-sm font-medium flex items-center gap-2 text-cyan-400 hover:text-white transition group-hover:gap-3 group-hover:tracking-wider">
                      {project.buttonText} →
                    </button>
                  </Link>
                ) : (
                  <button className="mt-8 text-sm font-medium flex items-center gap-2 text-cyan-400 hover:text-white transition group-hover:gap-3 group-hover:tracking-wider">
                    {project.buttonText} →
                  </button>
                )}
              </div>

              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}