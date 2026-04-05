"use client";

import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="projetos" className="mb-32">
      <h2 className="text-3xl mb-8">Projetos e Cases Técnicos</h2>

      <div className="grid md:grid-cols-2 gap-6">

        {/* PROJETO 1 */}
        <motion.div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
          <h3 className="text-xl font-bold mb-2">
            Migração de Cluster (OpenShift Banking)
          </h3>

          <ul className="text-gray-400 text-sm space-y-2">
            <li>▹ Migração de Deployments, Services e Secrets</li>
            <li>▹ Gestão de volumes persistentes (PVs)</li>
            <li>▹ Estratégia de Cutover com monitoramento</li>
            <li>▹ Compliance e segurança bancária</li>
          </ul>

          <div className="mt-4 text-xs text-blue-400">
            #DevOps #SRE #Infrastructure
          </div>
        </motion.div>

        {/* PROJETO 2 */}
        <motion.div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
          <h3 className="text-xl font-bold mb-2">
            Modernização Kong API Gateway
          </h3>

          <ul className="text-gray-400 text-sm space-y-2">
            <li>▹ Interface para Services e Routes</li>
            <li>▹ ACL e Rate Limiting</li>
            <li>▹ Melhoria de DevEx</li>
            <li>▹ Automação de governança</li>
          </ul>

          <div className="mt-4 text-xs text-blue-400">
            #DevOps #SRE #Infrastructure
          </div>
        </motion.div>

        {/* PROJETO 3 */}
        <motion.div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
          <h3 className="text-xl font-bold mb-2">
            Upgrade OpenShift (4.8 → 4.16)
          </h3>

          <ul className="text-gray-400 text-sm space-y-2">
            <li>▹ Upgrade EUS sem downtime</li>
            <li>▹ Validação RHSSO e RHPAM</li>
            <li>▹ Troubleshooting OLM</li>
            <li>▹ Garantia de disponibilidade</li>
          </ul>

          <div className="mt-4 text-xs text-blue-400">
            #DevOps #SRE #Infrastructure
          </div>
        </motion.div>

        {/* PROJETO 4 */}
        <motion.div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
          <h3 className="text-xl font-bold mb-2">
            Ecossistema de Observabilidade
          </h3>

          <ul className="text-gray-400 text-sm space-y-2">
            <li>▹ Dashboards Grafana (90 dias)</li>
            <li>▹ Alertas inteligentes</li>
            <li>▹ Monitoramento híbrido</li>
            <li>▹ Redução de MTTR</li>
          </ul>

          <div className="mt-4 text-xs text-blue-400">
            #DevOps #SRE #Infrastructure
          </div>
        </motion.div>

      </div>
    </section>
  );
}
