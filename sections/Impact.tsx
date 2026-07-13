import { Gauge, RefreshCcw, ShieldCheck } from "lucide-react";

const impacts = [
  {
    title: "Mudanças com risco controlado",
    description:
      "Planejamento, ensaios, critérios de validação e rollback para migrações e upgrades em produção.",
    icon: ShieldCheck,
  },
  {
    title: "Confiabilidade observável",
    description:
      "Sinais técnicos transformados em contexto acionável para detectar, diagnosticar e responder melhor.",
    icon: Gauge,
  },
  {
    title: "Operação reproduzível",
    description:
      "Automação e práticas declarativas para reduzir tarefas manuais, variação e dependência de conhecimento tácito.",
    icon: RefreshCcw,
  },
];

export default function Impact() {
  return (
    <section aria-labelledby="impacto-title" className="section-block border-y border-slate-900 py-20">
      <div className="section-heading">
        <p className="section-kicker">Como eu trabalho</p>
        <h2 id="impacto-title">Engenharia orientada a continuidade</h2>
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
