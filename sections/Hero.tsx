"use client";

import { ArrowDownRight, Code2, Network } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative grid min-h-[calc(100vh-5rem)] items-center gap-14 py-16 md:grid-cols-[1.08fr_.92fr] md:py-24">
      <div className="pointer-events-none absolute -left-52 top-10 h-96 w-96 rounded-full bg-blue-600/10 blur-[110px]" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        className="relative"
      >
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3 py-1.5 font-mono text-xs text-emerald-300">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
          Disponível para desafios em infraestrutura crítica
        </div>

        <p className="mb-3 font-mono text-sm text-blue-400">Olá, eu sou</p>
        <h1 className="max-w-3xl text-5xl font-bold leading-[1.04] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
          Thiago Rodrigues
        </h1>
        <h2 className="mt-4 text-xl font-medium text-blue-400 sm:text-2xl">
          DevOps &amp; Platform Engineer
        </h2>

        <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
          Especialista em <strong className="font-medium text-slate-200">OpenShift e Kubernetes</strong>,
          com base sólida em Linux/Unix e atuação na automação, sustentação e modernização de
          plataformas híbridas onde disponibilidade, segurança e continuidade não são negociáveis.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a href="#projetos" className="button-primary">
            Explorar cases <ArrowDownRight size={18} aria-hidden="true" />
          </a>
          <a
            href="https://www.linkedin.com/in/thiago-rodrigues2025/"
            target="_blank"
            rel="noreferrer"
            className="button-secondary"
          >
            <Network size={18} aria-hidden="true" /> LinkedIn
          </a>
          <a
            href="https://github.com/thiagor125"
            target="_blank"
            rel="noreferrer"
            className="button-secondary"
          >
            <Code2 size={18} aria-hidden="true" /> GitHub
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.55, delay: 0.1 }}
        className="relative"
      >
        <div className="terminal-card">
          <div className="mb-7 flex items-center justify-between border-b border-slate-800 pb-4">
            <div className="flex gap-1.5 opacity-70" aria-hidden="true">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </div>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-600">reliability.profile</span>
          </div>

          <div className="space-y-6 font-mono text-sm">
            <div>
              <p className="text-blue-400"><span className="text-slate-600">$</span> focus --primary</p>
              <p className="mt-1.5 text-slate-200">platform-engineering &amp; business-continuity</p>
            </div>
            <div>
              <p className="text-blue-400"><span className="text-slate-600">$</span> operating-principles</p>
              <div className="mt-2 grid grid-cols-2 gap-2 text-xs text-slate-300">
                <span className="terminal-pill">plan &amp; rehearse</span>
                <span className="terminal-pill">observe</span>
                <span className="terminal-pill">safe rollback</span>
                <span className="terminal-pill">automate</span>
              </div>
            </div>
            <div>
              <p className="text-blue-400"><span className="text-slate-600">$</span> core-stack</p>
              <p className="mt-1.5 leading-7 text-emerald-300">OpenShift · Kubernetes · Linux · Ansible</p>
            </div>
            <p className="text-blue-400"><span className="text-slate-600">$</span> <span className="animate-pulse">_</span></p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
