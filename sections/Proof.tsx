import { Award, Boxes, GitBranch, RadioTower } from "lucide-react";

const proofPoints = [
  {
    value: "+100",
    label: "APIs publicadas e sustentadas",
    context: "Kong Gateway, segurança, OpenID Connect e troubleshooting",
    icon: GitBranch,
  },
  {
    value: "2022",
    label: "Atuação em ambientes críticos",
    context: "Linux, middleware, Kubernetes, OpenShift e produção",
    icon: Boxes,
  },
  {
    value: "CKA",
    label: "Certificação Kubernetes",
    context: "Administração e troubleshooting prático de clusters",
    icon: Award,
  },
  {
    value: "SRE",
    label: "Operação orientada por sinais",
    context: "Prometheus, Grafana, Zabbix, incidentes e RCA",
    icon: RadioTower,
  },
];

export default function Proof() {
  return (
    <section aria-labelledby="evidencias-title" className="section-block pb-20">
      <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="section-kicker">Evidências rápidas</p>
          <h2 id="evidencias-title" className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            O que um recrutador precisa identificar em poucos segundos
          </h2>
        </div>
        <p className="max-w-md text-sm leading-6 text-slate-500 sm:text-right">
          Experiência prática, certificação e entregas conectadas à operação real.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {proofPoints.map(({ value, label, context, icon: Icon }) => (
          <article key={label} className="proof-card">
            <div className="flex items-start justify-between gap-4">
              <span className="text-3xl font-bold tracking-tight text-white">{value}</span>
              <Icon size={20} className="text-blue-400" aria-hidden="true" />
            </div>
            <h3 className="mt-5 text-sm font-semibold text-slate-100">{label}</h3>
            <p className="mt-2 text-xs leading-5 text-slate-500">{context}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
