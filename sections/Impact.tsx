import { Gauge, RefreshCcw, ShieldCheck } from "lucide-react";

const impacts = [
  {
    title: "Plataformas resilientes",
    description:
      "Administração, migração e evolução de clusters Kubernetes e OpenShift com validação técnica, rollback e foco em continuidade.",
    icon: ShieldCheck,
  },
  {
    title: "Automação reproduzível",
    description:
      "Terraform, Ansible, pipelines e práticas declarativas para reduzir tarefas manuais, variação e risco operacional.",
    icon: RefreshCcw,
  },
  {
    title: "Operação observável",
    description:
      "Métricas, logs, dashboards e alertas com contexto para acelerar diagnósticos e apoiar decisões de capacidade e confiabilidade.",
    icon: Gauge,
  },
];

export default function Impact() {
  return (
    <section aria-labelledby="impacto-title" className="section-block border-y border-slate-900 py-20">
      <div className="section-heading md:flex md:items-end md:justify-between">
        <div>
          <p className="section-kicker">Proposta de valor</p>
          <h2 id="impacto-title">Da infraestrutura ao resultado operacional</h2>
        </div>
        <p className="mt-5 max-w-md text-sm leading-6 text-slate-500 md:mt-0 md:text-right">
          Engenharia aplicada para tornar mudanças críticas mais seguras, repetíveis e fáceis de observar.
        </p>
      </div>

      <div className="grid gap-px overflow-hidden rounded-2xl border border-slate-800 bg-slate-800 md:grid-cols-3">
        {impacts.map(({ title, description, icon: Icon }) => (
          <article key={title} className="bg-[#080e1d] p-7 sm:p-8">
            <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400">
              <Icon size={22} aria-hidden="true" />
            </div>
            <h3 className="text-lg font-semibold text-white">{title}</h3>
            <p className="mt-3 leading-7 text-slate-400">{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
