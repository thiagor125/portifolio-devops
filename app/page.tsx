import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import Impact from "@/sections/Impact";
import Projects from "@/sections/Projects";
import Skills from "@/sections/Skills";
import Testimonials from "@/sections/Testimonials"; // Adicionado
import Contact from "@/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020617] text-slate-100 selection:bg-blue-500/30">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 pt-24">
        <Hero />
        <Impact />
        <Projects />
        <Skills />
        <Testimonials /> {/* Adicionado */}
        <Contact />
      </div>
    </main>
  );
}
