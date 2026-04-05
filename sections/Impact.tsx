"use client";

export default function Impact() {
  return (
    <section className="mb-32">
      <h2 className="text-3xl mb-8">Impacto Gerado</h2>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:scale-105 transition">
          <h3 className="text-xl font-bold text-blue-400 mb-2">🏦 Resiliência Bancária</h3>
          <p className="text-gray-400">
            Migrações complexas com Zero Downtime e integridade total de dados.
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:scale-105 transition">
          <h3 className="text-xl font-bold text-blue-400 mb-2">⚙️ Eficiência Operacional</h3>
          <p className="text-gray-400">
            Automação que reduziu tempo de provisionamento e aumentou consistência.
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:scale-105 transition">
          <h3 className="text-xl font-bold text-blue-400 mb-2">📊 SRE & Observabilidade</h3>
          <p className="text-gray-400">
            Monitoramento proativo com redução de incidentes e MTTR.
          </p>
        </div>

      </div>
    </section>
  );
}
