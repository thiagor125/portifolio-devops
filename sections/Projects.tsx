import { projects } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";

export default function Projects() {
  return (
    <section id="projetos" aria-labelledby="projetos-title" className="section-block scroll-mt-24 py-24">
      <div className="section-heading md:flex md:items-end md:justify-between">
        <div>
          <p className="section-kicker">Experiência aplicada</p>
          <h2 id="projetos-title">Cases técnicos selecionados</h2>
        </div>
        <p className="mt-5 max-w-md text-sm leading-6 text-slate-500 md:mt-0 md:text-right">
          Contextos corporativos apresentados de forma anonimizada para preservar informações sensíveis.
        </p>
      </div>

      <div className="space-y-5">
        {projects.map((project, index) => (
          <article key={project.title} className="case-card group">
            <div className="flex flex-col gap-8 lg:grid lg:grid-cols-[.75fr_1.25fr]">
              <div>
                <div className="mb-5 flex items-center justify-between">
                  <span className="font-mono text-xs text-blue-400">CASE 0{index + 1}</span>
                  <ArrowUpRight className="text-slate-700 transition group-hover:text-blue-400" size={20} aria-hidden="true" />
                </div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {project.eyebrow}
                </p>
                <h3 className="text-2xl font-semibold tracking-tight text-white">{project.title}</h3>
                <p className="mt-4 leading-7 text-slate-400">{project.summary}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span key={technology} className="tech-tag">{technology}</span>
                  ))}
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-3">
                <CaseDetail label="Desafio" text={project.challenge} />
                <CaseDetail label="Atuação" text={project.approach} />
                <CaseDetail label="Resultado" text={project.outcome} />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function CaseDetail({ label, text }: { label: string; text: string }) {
  return (
    <div className="border-l border-slate-800 pl-4">
      <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.16em] text-blue-400">{label}</p>
      <p className="text-sm leading-6 text-slate-400">{text}</p>
    </div>
  );
}
