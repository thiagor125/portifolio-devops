import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import Impact from "@/sections/Impact";
import Projects from "@/sections/Projects";
import Skills from "@/sections/Skills";
import Testimonials from "@/sections/Testimonials";
import Contact from "@/sections/Contact";

export default function Home() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Thiago Rodrigues",
    jobTitle: "DevOps Engineer & SRE",
    url: "https://portifolio-devops-phi.vercel.app",
    sameAs: [
      "https://www.linkedin.com/in/thiago-rodrigues2025/",
      "https://github.com/thiagor125",
    ],
    knowsAbout: [
      "OpenShift",
      "Kubernetes",
      "Site Reliability Engineering",
      "Kong Gateway",
      "Observabilidade",
    ],
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#020617] text-slate-100 selection:bg-blue-500/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <a href="#conteudo" className="skip-link">
        Ir para o conteúdo
      </a>
      <Navbar />

      <div id="conteudo" className="mx-auto max-w-7xl px-5 pt-20 sm:px-8 lg:px-10">
        <Hero />
        <Impact />
        <Projects />
        <Skills />
        <Testimonials />
        <Contact />
      </div>
    </main>
  );
}
