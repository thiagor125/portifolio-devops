"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full top-0 z-50 ${
      scrolled ? "bg-black/80 backdrop-blur border-b border-gray-800" : ""
    }`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4 text-white">
        <span className="font-bold text-lg">_thiago.devops</span>

        <div className="space-x-6 text-gray-400">
          <a href="#projetos" className="hover:text-white">Projetos</a>
          <a href="#skills" className="hover:text-white">Skills</a>
          <a href="#contato" className="hover:text-white">Contato</a>
        </div>
      </div>
    </nav>
  );
}
