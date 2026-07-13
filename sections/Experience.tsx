import { Building2, ServerCog } from "lucide-react";

const experiences = [
  {
    company: "TREND",
    role: "DevOps Engineer",
    description:
      "Administração e sustentação de clusters Kubernetes/OpenShift, pipelines CI/CD, observabilidade e segurança de acesso em ambientes produtivos.",
    highlights: [
      "Aplicações containerizadas com Docker e Podman",
      "Dashboards, métricas, logs e health checks",
      "RBAC, credenciais e políticas de acesso",
      "Troubleshooting distribuído e análise de causa raiz",
    ],
  },
  {
    company: "ServiceIt",
    role: "Analista de Suporte Unix / Middleware",
    description:
      "Sustentação de ambientes Linux/Unix críticos, plataformas cloud-native, middleware corporativo e aplicações orientadas a SLA.",
    highlights: [
      "Kubernetes, OpenShift, Docker e Podman",
      "Kong Gateway, WSO2 API Manager e WebLogic",
      "Prometheus, Grafana e Zabbix",
      "Azure, PostgreSQL, Shell Script e Python",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experiencia" aria-labelledby="experiencia-title" className="section-block scroll-mt-24 border-t border-slate-900 py-24">
      <div className="section-heading md:flex md:items-end md:justify-between">
        <div>
          <p className="section-kicker">Trajetória</p>
          <h2 id="experiencia-title">Experiência profissional</h2>
        </div>
        <p className="mt-5 max-w-md text-sm leading-6 text-slate-500 md:mt-0 md:text-right">
          Experiência construída entre sustentação de sistemas críticos e evolução de plataformas cloud-native.
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        {experiences.map((experience, index) => (
          <article key={experience.company} className="experience-card">
            <div className="flex items-start justify-between gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400">
                {index === 0 ? <ServerCog size={22} aria-hidden="true" /> : <Building2 size={22} aria-hidden="true" />}
              </div>
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-slate-600">experiência</span>
            </div>
            <p className="mt-7 font-mono text-xs uppercase tracking-[0.18em] text-blue-400">{experience.company}</p>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white">{experience.role}</h3>
            <p className="mt-4 leading-7 text-slate-400">{experience.description}</p>
            <ul className="mt-6 space-y-3 border-t border-slate-800 pt-6">
              {experience.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3 text-sm leading-6 text-slate-300">
                  <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-blue-400" aria-hidden="true" />
                  {highlight}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
