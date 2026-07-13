const skillGroups = [
  { category: "Plataforma", items: ["Kubernetes", "OpenShift", "Docker", "Podman"] },
  { category: "Observabilidade", items: ["Prometheus", "Grafana", "Zabbix", "Dynatrace"] },
  { category: "Automação & entrega", items: ["Ansible", "Jenkins", "GitLab CI", "GitHub Actions"] },
  { category: "Cloud & sistemas", items: ["Azure", "RHEL", "CentOS", "Shell Script"] },
];

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="section-block scroll-mt-24 border-t border-slate-900 py-24">
      <div className="section-heading">
        <p className="section-kicker">Capacidades</p>
        <h2 id="skills-title">Stack tecnológica</h2>
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group) => (
          <article key={group.category} className="rounded-2xl border border-slate-800 bg-slate-950/30 p-6">
            <h3 className="mb-5 font-mono text-xs uppercase tracking-[0.18em] text-blue-400">{group.category}</h3>
            <ul className="space-y-3">
              {group.items.map((skill) => (
                <li key={skill} className="flex items-center gap-3 text-sm text-slate-300">
                  <span className="h-1 w-1 rounded-full bg-slate-600" aria-hidden="true" /> {skill}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
