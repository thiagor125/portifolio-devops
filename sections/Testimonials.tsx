"use client";

export default function Testimonials() {
  return (
    <section id="depoimentos" className="mb-24">
      <h2 className="text-3xl font-bold mb-8 text-white">Recomendações</h2>
      
      <div className="bg-blue-600/5 border border-blue-500/20 p-10 rounded-3xl text-center">
        <h3 className="text-xl text-slate-200 mb-6">
          Trabalhou comigo em algum projeto de infraestrutura ou migração?
        </h3>
        <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
          Sua opinião sobre minha atuação técnica e colaboração em equipe é muito importante. 
          Deixe seu feedback diretamente no meu perfil profissional.
        </p>
        <a 
          href="https://www.linkedin.com/in/thiago-rodrigues2025/details/recommendations/" 
          target="_blank"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-2xl font-bold transition-all transform hover:scale-105"
        >
          Deixar Depoimento no LinkedIn
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
        </a>
      </div>
    </section>
  );
}
