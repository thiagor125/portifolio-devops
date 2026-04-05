"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="grid md:grid-cols-2 gap-12 items-center mb-32 pt-20">

      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}>
        <p className="text-blue-400 mb-2">Olá, eu sou</p>

        <h1 className="text-6xl font-bold mb-4 leading-tight">
          Thiago Rodrigues
        </h1>

        <h2 className="text-2xl text-blue-400 mb-4">
          DevOps Engineer & SRE
        </h2>

        <p className="text-gray-400 mb-6 leading-relaxed max-w-xl">
          Especialista em Kubernetes & OpenShift com foco em ambientes críticos e setor financeiro.
          Experiência comprovada em migrações de cluster de larga escala, arquitetura de API Gateway
          e cultura SRE para garantir alta disponibilidade.
        </p>

        <div className="flex gap-4">
          <a href="#projetos" className="bg-blue-600 px-6 py-3 rounded-xl glow hover:scale-105 transition">
            Ver Cases Técnicos
          </a>

          <a href="https://www.linkedin.com/in/thiago-rodrigues2025/" target="_blank"
             className="border border-gray-600 px-6 py-3 rounded-xl hover:border-blue-400 transition">
            LinkedIn
          </a>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
        <div className="bg-black p-6 rounded-xl font-mono text-green-400 shadow-xl border border-gray-800">
          <p>$ whoami</p>
          <p className="text-white">thiago-rodrigues</p>

          <p className="mt-2">$ status --mission-critical</p>
          <p>Cluster Migration: COMPLETED (Zero Downtime)</p>

          <p className="mt-2">$ main_stack</p>
          <p>OpenShift 4.x | Kubernetes | Ansible | Kong</p>

          <p className="mt-2">$ _</p>
        </div>
      </motion.div>

    </section>
  );
}
