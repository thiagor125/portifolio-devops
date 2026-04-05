"use client";

export default function Impact() {
  const impacts = [
    {
      title: "Resiliência Bancária",
      desc: "Execução de migrações complexas cluster-to-cluster com foco em Zero Downtime e integridade de dados.",
      icon: "🏦"
    },
    {
      title: "Eficiência Operacional",
      desc: "Automação de ambientes que reduziu o tempo de provisionamento e aumentou a consistência dos deploys.",
      icon: "⚙️"
    },
    {
      title: "SRE & Observabilidade",
      desc: "Implementação de monitoramento proativo que reduziu incidentes em produção e acelerou o troubleshooting.",
      icon: "📊"
    }
  ];

  return (
    <section className="mb-24">
      <h2 className="text-3xl font-bold mb-10 text-white flex items-center gap-2">
        <span className="text-blue-500">#</span> Impacto Gerado
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {impacts.map((item, i) => (
          <div key={i} className="bg-[#0b1120] p-8 rounded-2xl border border-blue-900/20 hover:border-blue-500/50 transition-all group">
            <div className="text-4xl mb-4 opacity-80 group-hover:scale-110 transition-transform inline-block">
              {item.icon}
            </div>
            <h3 className="text-2xl text-blue-400 font-bold mb-2">{item.title}</h3>
            <p className="text-slate-400 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
