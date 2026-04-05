"use client";

import { projects } from "@/data/projects";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="projetos" className="mb-24">
      <h2 className="text-3xl font-bold mb-10 text-white flex items-center gap-2">
        <span className="text-blue-500">#</span> Projetos e Cases Técnicos
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-[#0b1120] p-8 rounded-2xl border border-slate-800 hover:border-blue-500/40 shadow-lg transition-all flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-bold mb-3 text-white">{p.title}</h3>
              <p className="text-blue-400/90 text-sm mb-5 font-medium">{p.description}</p>

              <ul className="space-y-2 mb-6">
                {p.details.map((d, index) => (
                  <li key={index} className="text-slate-400 text-sm flex gap-2">
                    <span className="text-blue-500">▹</span> {d}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="pt-4 border-t border-slate-800/50 flex gap-3 italic text-xs text-slate-500">
              <span>#DevOps</span> <span>#SRE</span> <span>#Infrastructure</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
