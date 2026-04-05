"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="grid md:grid-cols-2 gap-12 items-center mb-24 pt-20">

      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}>
        <p className="text-blue-400 font-mono mb-2">Olá, eu sou</p>

        <h1 className="text-6xl font-bold mb-4 leading-tight text-white">
          Thiago Rodrigues
        </h1>

        <h2 className="text-2xl text-blue-400 font-medium mb-4">
          DevOps Engineer & SRE
        </h2>

        <p className="text-slate-400 mb-8 leading-relaxed max-w-xl text-lg">
          Engenheiro DevOps com atuação em ambientes críticos, especializado em 
          <span className="text-blue-300"> Kubernetes</span> e <span className="text-blue-300"> OpenShift</span>. 
          Experiência sólida em migrações de cluster em larga escala, arquitetura de API Gateway e continuidade de negócios em produção.
        </p>

        <div className="flex gap-4">
          <a href="#projetos" className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-xl glow hover:bg-blue-500 hover:scale-105 transition-all">
            Ver Cases Técnicos
          </a>

          <a href="https://www.linkedin.com/in/thiago-rodrigues2025/" target="_blank" className="border border-slate-700 text-slate-300 px-8 py-3 rounded-xl hover:border-blue-400 hover:text-blue-400 transition-all">
            LinkedIn
          </a>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
        <div className="bg-[#0b1120] p-7 rounded-2xl font-mono text-sm shadow-2xl border border-blue-900/30 relative">
          <div className="flex gap-1.5 mb-4 opacity-50">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          
          <p className="text-blue-400">$ whoami</p>
          <p className="text-white mb-3">thiago-rodrigues</p>
          
          <p className="text-blue-400">$ uptime --env</p>
          <p className="text-emerald-400 mb-3">99.9% | Mission Critical | High Availability</p>
          
          <p className="text-blue-400">$ main_stack --version</p>
          <p className="text-slate-300">OpenShift 4.16 | K8s 1.30+ | Ansible 2.15 | Kong 3.x</p>
          
          <p className="text-blue-400 mt-3">$ <span className="animate-pulse">_</span></p>
        </div>
      </motion.div>

    </section>
  );
}
