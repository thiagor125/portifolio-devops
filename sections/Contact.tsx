import { ArrowUpRight, Code2, Mail, Network } from "lucide-react";

const contacts = [
  {
    label: "Email",
    value: "techsolutions.tag@gmail.com",
    href: "mailto:techsolutions.tag@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/thiago-rodrigues2025",
    href: "https://www.linkedin.com/in/thiago-rodrigues2025/",
    icon: Network,
  },
  {
    label: "GitHub",
    value: "github.com/thiagor125",
    href: "https://github.com/thiagor125",
    icon: Code2,
  },
];

export default function Contact() {
  return (
    <section id="contato" aria-labelledby="contato-title" className="scroll-mt-24 pb-10">
      <div className="contact-panel">
        <div className="max-w-2xl">
          <p className="section-kicker">Próximo desafio</p>
          <h2 id="contato-title" className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Vamos tornar a próxima mudança crítica mais previsível.
          </h2>
          <p className="mt-5 max-w-xl leading-7 text-slate-400">
            Estou aberto a conversas sobre DevOps, Platform Engineering, OpenShift, Kubernetes e modernização de plataformas.
          </p>
        </div>

        <div className="mt-10 grid gap-3 lg:grid-cols-3">
          {contacts.map(({ label, value, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              className="contact-link group"
            >
              <Icon size={20} className="text-blue-400" aria-hidden="true" />
              <span className="min-w-0 flex-1">
                <span className="block text-xs uppercase tracking-wider text-slate-500">{label}</span>
                <span className="mt-1 block truncate text-sm text-slate-200">{value}</span>
              </span>
              <ArrowUpRight size={17} className="text-slate-600 transition group-hover:text-blue-400" aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>

      <footer className="flex flex-col gap-2 py-8 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} Thiago Rodrigues</span>
        <span className="font-mono">built for reliability</span>
      </footer>
    </section>
  );
}
