const skillGroups = [
  {
    category: "Containers & plataforma",
    items: ["Kubernetes", "OpenShift", "OpenShift Virtualization", "Docker", "Podman"],
  },
  {
    category: "Infraestrutura & automação",
    items: ["Terraform", "Ansible", "Python", "Shell Script", "Infrastructure as Code"],
  },
  {
    category: "CI/CD & qualidade",
    items: ["Jenkins", "Azure DevOps", "GitLab CI", "Git", "Nexus", "SonarQube"],
  },
  {
    category: "Observabilidade & SRE",
    items: ["Prometheus", "Grafana", "Zabbix", "Dynatrace", "Logs", "SLIs & SLOs"],
  },
  {
    category: "Middleware & APIs",
    items: ["Kong Gateway", "WSO2 API Manager", "WebLogic", "ACL", "Rate Limiting"],
  },
  {
    category: "Linux, cloud & segurança",
    items: ["Linux/Unix", "RHEL", "Azure", "AWS", "RBAC", "Network Policies"],
  },
];

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="section-block scroll-mt-24 border-t border-slate-900 py-24">
      <div className="section-heading md:flex md:items-end md:justify-between">
        <div>
          <p className="section-kicker">Competências técnicas</p>
          <h2 id="skills-title">Stack organizada por capacidade</h2>
        </div>
        <p className="mt-5 max-w-md text-sm leading-6 text-slate-500 md:mt-0 md:text-right">
          Tecnologias conectadas a problemas reais de plataforma, entrega, segurança e confiabilidade.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <article key={group.category} className="rounded-2xl border border-slate-800 bg-slate-950/30 p-6 transition hover:-translate-y-0.5 hover:border-blue-500/40">
            <h3 className="mb-5 font-mono text-xs uppercase tracking-[0.18em] text-blue-400">{group.category}</h3>
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {group.items.map((skill) => (
                <li key={skill} className="flex items-center gap-3 text-sm text-slate-300">
                  <span className="h-1 w-1 shrink-0 rounded-full bg-blue-400" aria-hidden="true" /> {skill}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
