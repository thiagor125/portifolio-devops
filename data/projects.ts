export const projects = [
  {
    title: "Migração de Cluster (OpenShift Banking)",
    description: "Liderança técnica na migração de workloads críticos entre infraestruturas distintas no setor financeiro.",
    details: [
      "Migração de Deployments, Services, Routes e Secrets com foco em integridade.",
      "Gestão de volumes persistentes (PVs) e sincronização de dados crítica.",
      "Estratégia de Cutover (virada de chave) com monitoramento intensivo.",
      "Garantia de compliance e segurança rigorosa para ambiente bancário."
    ],
  },
  {
    title: "Modernização Kong API Gateway",
    description: "Desenvolvimento de interface gráfica e abstração para gestão de APIs.",
    details: [
      "Criação de interface para gestão de Services e Routes (substituindo uso exclusivo de CLI/API).",
      "Implementação de plugins de ACL e Rate Limiting via interface centralizada.",
      "Melhoria na Developer Experience (DevEx) para equipes de desenvolvimento.",
      "Automação do ciclo de vida das rotas e governança de acesso."
    ],
  },
  {
    title: "Upgrade de Infraestrutura (4.8 → 4.16)",
    description: "Atualização crítica de versão do OpenShift em ambiente de alta disponibilidade.",
    details: [
      "Planejamento de upgrade de longa distância (EUS-to-EUS) sem interrupção.",
      "Validação de operadores críticos: RHSSO, RHPAM e Node Manager.",
      "Execução de troubleshooting em Operator Lifecycle Manager durante o processo.",
      "Garantia de Zero Downtime para aplicações produtivas."
    ],
  },
  {
    title: "Ecossistema de Observabilidade",
    description: "Monitoramento proativo focado em SRE (Service Level Indicators).",
    details: [
      "Dashboards Grafana com retenção de 90 dias para análise de tendência.",
      "Alertas inteligentes via Prometheus/Zabbix reduzindo o ruído de notificações.",
      "Monitoramento de performance híbrido (Azure e On-Premise).",
      "Foco direto na redução do MTTR (Mean Time To Repair)."
    ],
  }
];
