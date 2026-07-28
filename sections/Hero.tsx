"use client";

import { ArrowDownRight, Code2, Network, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const focusAreas = [
  { label: "Plataformas", value: "Kubernetes & OpenShift" },
  { label: "Infraestrutura", value: "Terraform & Ansible" },
  { label: "Confiabilidade", value: "Observabilidade & SRE" },
  { label: "Integração", value: "Kong & CI/CD" },
];

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
          DevOps · Platform Engineering · SRE
        </div>

        <p className="mb-3 font-mono text-sm text-blue-400">Olá, eu sou Thiago Rodrigues</p>
        <h1 className="max-w-3xl text-5xl font-bold leading-[1.04] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
          Transformo infraestrutura crítica em plataformas mais previsíveis.
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
          DevOps &amp; Platform Engineer com atuação em <strong className="font-medium text-slate-200">Kubernetes,
          OpenShift, automação e observabilidade</strong>. Experiência em migrações, upgrades, API Gateway,
          troubleshooting e operação de ambientes onde disponibilidade e segurança são essenciais.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a href="#projetos" className="button-primary">
            Ver projetos em destaque <ArrowDownRight size={18} aria-hidden="true" />
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
            <div className="flex items-center gap-2 text-emerald-300">
              <ShieldCheck size={17} aria-hidden="true" />
              <span className="font-mono text-xs">recruiter.summary</span>
            </div>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-600">visão rápida</span>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {focusAreas.map((area) => (
              <div key={area.label} className="terminal-pill min-h-24 p-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-blue-400">{area.label}</p>
                <p className="mt-3 text-sm font-semibold leading-6 text-slate-100">{area.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 border-t border-slate-800 pt-5 font-mono text-xs leading-6 text-slate-400">
            <p><span className="text-blue-400">$</span> objetivo</p>
            <p className="text-emerald-300">reduzir risco · automatizar operação · aumentar visibilidade</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
