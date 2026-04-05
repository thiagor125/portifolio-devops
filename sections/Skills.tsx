"use client";

export default function Skills() {
  const skillGroups = [
    { category: "Orquestração", items: ["Kubernetes", "OpenShift", "Docker", "Podman"] },
    { category: "Observabilidade", items: ["Prometheus", "Grafana", "Zabbix", "Dynatrace"] },
    { category: "Automação/IaC", items: ["Ansible", "Jenkins", "GitLab CI", "GitHub Actions"] },
    { category: "Cloud & Linux", items: ["Azure", "RHEL", "CentOS", "Shell Script"] }
  ];

  return (
    <section id="skills" className="mb-24">
      <h2 className="text-3xl font-bold mb-10 text-white">Stack Tecnológica</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillGroups.map((group) => (
          <div key={group.category}>
            <h3 className="text-blue-500 font-mono text-sm mb-4 uppercase tracking-widest">{group.category}</h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((s) => (
                <span key={s} className="bg-slate-900/80 border border-slate-800 px-3 py-1.5 rounded-lg text-slate-300 text-sm hover:border-blue-500 transition-colors">
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
