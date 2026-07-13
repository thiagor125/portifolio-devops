import { Network } from "lucide-react";

export default function Testimonials() {
  return (
    <aside className="mb-24 rounded-2xl border border-blue-500/20 bg-blue-500/[0.04] p-6 sm:flex sm:items-center sm:justify-between sm:gap-8 sm:p-8">
      <div>
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-blue-400">Referências profissionais</p>
        <p className="mt-2 max-w-2xl leading-7 text-slate-300">
          Recomendações de pessoas que trabalharam comigo estão disponíveis no meu perfil profissional.
        </p>
      </div>
      <a
        href="https://www.linkedin.com/in/thiago-rodrigues2025/details/recommendations/"
        target="_blank"
        rel="noreferrer"
        className="button-secondary mt-5 shrink-0 sm:mt-0"
      >
        <Network size={18} aria-hidden="true" /> Ver recomendações
      </a>
    </aside>
  );
}
