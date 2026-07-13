const skillGroups = [
  {
    category: "Plataforma",
    items: ["Kubernetes", "OpenShift", "OpenShift Virtualization", "Docker", "Podman"],
  },
  {
    category: "Linux & dados",
    items: ["Linux/Unix", "RHEL", "CentOS", "PostgreSQL"],
  },
  {
    category: "Automação & entrega",
    items: ["Ansible", "Python", "Shell Script", "Jenkins", "Azure DevOps", "GitLab CI"],
  },
  {
    category: "Observabilidade",
    items: ["Prometheus", "Grafana", "Zabbix", "Dynatrace", "Logs & Health Checks"],
  },
  {
    category: "Middleware & APIs",
    items: ["Kong Gateway", "WSO2 API Manager", "WebLogic", "Nexus", "SonarQube"],
  },
  {
    category: "Cloud & segurança",
    items: ["Microsoft Azure", "AWS", "RBAC", "Secrets", "Network Policies", "Hardening"],
  },
];

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="section-block scroll-mt-24 border-t border-slate-900 py-24">
      <div className="section-heading md:flex md:items-end md:justify-between">
        <div>
          <p className="section-kicker">Capacidades</p>
          <h2 id="skills-title">Stack tecnológica</h2>
        </div>
        <p className="mt-5 max-w-md text-sm leading-6 text-slate-500 md:mt-0 md:text-right">
          Da base Linux à plataforma cloud-native, com automação, segurança e observabilidade integradas.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <article key={group.category} className="rounded-2xl border border-slate-800 bg-slate-950/30 p-6">
            <h3 className="mb-5 font-mono text-xs uppercase tracking-[0.18em] text-blue-400">{group.category}</h3>
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {group.items.map((skill) => (
                <li key={skill} className="flex items-center gap-3 text-sm text-slate-300">
                  <span className="h-1 w-1 shrink-0 rounded-full bg-slate-600" aria-hidden="true" /> {skill}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
