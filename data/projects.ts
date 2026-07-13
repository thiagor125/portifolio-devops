export type Project = {
  title: string;
  eyebrow: string;
  summary: string;
  challenge: string;
  approach: string;
  outcome: string;
  technologies: string[];
};

export const projects: Project[] = [
  {
    title: "Migração de workloads críticos",
    eyebrow: "OpenShift · Ambiente bancário",
    summary:
      "Transição cluster-to-cluster de serviços produtivos com foco em continuidade, segurança e integridade operacional.",
    challenge:
      "Mover aplicações, configurações e dados persistentes dentro de uma janela controlada, preservando dependências e requisitos de conformidade.",
    approach:
      "Mapeamento de Deployments, Services, Routes, Secrets e volumes; ensaios de migração; plano de cutover; critérios de rollback e acompanhamento em tempo real.",
    outcome:
      "Execução previsível, com validação técnica ponta a ponta e redução do risco durante a mudança de ambiente.",
    technologies: ["OpenShift", "Kubernetes", "PVs", "Network Policies"],
  },
  {
    title: "Modernização do Kong API Gateway",
    eyebrow: "Governança de APIs · Developer Experience",
    summary:
      "Camada de gestão para tornar a configuração de serviços, rotas e políticas mais segura, rastreável e acessível aos times.",
    challenge:
      "Reduzir operações manuais e padronizar controles de tráfego sem retirar a autonomia das equipes de desenvolvimento.",
    approach:
      "Centralização de Services e Routes, aplicação de ACL e Rate Limiting e automação do ciclo de vida das configurações por pipelines declarativos.",
    outcome:
      "Governança consistente, menor dependência de intervenções via CLI e uma experiência operacional mais simples para os times consumidores.",
    technologies: ["Kong Gateway", "ACL", "Rate Limiting", "CI/CD"],
  },
  {
    title: "Upgrade OpenShift 4.8 → 4.16",
    eyebrow: "Lifecycle · Alta disponibilidade",
    summary:
      "Evolução de plataforma em múltiplas etapas, mantendo workloads e componentes críticos disponíveis durante o ciclo de atualização.",
    challenge:
      "Atualizar uma base defasada, tratar incompatibilidades entre versões e preservar integrações essenciais ao negócio.",
    approach:
      "Planejamento da trilha EUS, validações por etapa, troubleshooting de OLM e certificação pós-upgrade de RHSSO, RHPAM e workloads.",
    outcome:
      "Plataforma modernizada com processo auditável, validações progressivas e continuidade operacional durante a manutenção.",
    technologies: ["OpenShift", "EUS", "OLM", "RHSSO", "RHPAM"],
  },
  {
    title: "Ecossistema de observabilidade",
    eyebrow: "SRE · Detecção e resposta",
    summary:
      "Visibilidade unificada de ambientes híbridos para apoiar diagnóstico, capacidade e resposta proativa a incidentes.",
    challenge:
      "Transformar sinais dispersos em informações acionáveis para operação e acompanhamento de disponibilidade.",
    approach:
      "Dashboards orientados a SLIs/SLOs, retenção histórica, alertas com contexto e integração entre monitoração on-premises e Azure.",
    outcome:
      "Diagnóstico mais objetivo, melhor contexto para incidentes e base operacional para evolução contínua de confiabilidade.",
    technologies: ["Grafana", "Prometheus", "Zabbix", "Dynatrace", "Azure"],
  },
];
