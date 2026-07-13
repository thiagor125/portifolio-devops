import { Award, BookOpenCheck, GraduationCap, Languages, MapPin } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const redHatTraining = [
  "OpenShift Administration II (DO280)",
  "OpenShift Virtualization (DO316 / DO346)",
  "Red Hat System Administration I & II (RH124 / RH134)",
];

export default function Credentials() {
  return (
    <section id="credenciais" aria-labelledby="credenciais-title" className="section-block scroll-mt-24 border-t border-slate-900 py-24">
      <div className="section-heading">
        <p className="section-kicker">Credenciais</p>
        <h2 id="credenciais-title">Certificação e formação</h2>
      </div>

      <div className="grid gap-5 lg:grid-cols-[1.15fr_.85fr]">
        <article className="credential-feature">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500 text-white">
            <Award size={24} aria-hidden="true" />
          </div>
          <p className="mt-8 font-mono text-xs uppercase tracking-[0.18em] text-blue-300">Certificação profissional</p>
          <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white">Certified Kubernetes Administrator</h3>
          <p className="mt-2 text-lg text-blue-300">CKA</p>
          <p className="mt-5 max-w-xl leading-7 text-slate-400">
            Validação prática de competências em administração, troubleshooting e operação de clusters Kubernetes.
          </p>
        </article>

        <article className="credential-card">
          <BookOpenCheck className="text-blue-400" size={24} aria-hidden="true" />
          <h3 className="mt-5 text-xl font-semibold text-white">Formação técnica Red Hat</h3>
          <ul className="mt-5 space-y-3">
            {redHatTraining.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-6 text-slate-300">
                <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-blue-400" aria-hidden="true" /> {item}
              </li>
            ))}
          </ul>
        </article>
      </div>

      <div className="mt-5 grid gap-5 md:grid-cols-3">
        <CredentialSummary icon={GraduationCap} title="Formação acadêmica">
          Pós-graduação em Cloud Computing e Tecnólogo em Análise e Desenvolvimento de Sistemas.
        </CredentialSummary>
        <CredentialSummary icon={Languages} title="Inglês intermediário">
          Leitura de documentação técnica, troubleshooting e comunicação operacional.
        </CredentialSummary>
        <CredentialSummary icon={MapPin} title="Brasília · DF">
          Atuação em ambientes híbridos e colaboração entre equipes de desenvolvimento e infraestrutura.
        </CredentialSummary>
      </div>
    </section>
  );
}

function CredentialSummary({
  icon: Icon,
  title,
  children,
}: {
  icon: LucideIcon;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <article className="credential-card">
      <Icon className="text-blue-400" size={22} aria-hidden="true" />
      <h3 className="mt-5 text-lg font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-400">{children}</p>
    </article>
  );
}
