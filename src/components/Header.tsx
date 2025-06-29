import React, { useState } from "react";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="/" className="text-xl font-bold text-blue-700">
          GoodLife Seguros
        </a>
        <nav className="hidden md:flex gap-6">
          <a href="/" className="hover:text-blue-600">
            Início
          </a>
          <a href="/seguro-de-vida" className="hover:text-blue-600">
            Seguro de Vida
          </a>
          <a href="/seguro-viagem" className="hover:text-blue-600">
            Seguro Viagem
          </a>
          <a href="/plano-odontologico" className="hover:text-blue-600">
            Plano Odontológico
          </a>
          <a href="/ajuda" className="hover:text-blue-600">
            Ajuda
          </a>
          <a href="/contato" className="hover:text-blue-600">
            Contato
          </a>
        </nav>
        <button
          className="md:hidden flex flex-col gap-1"
          aria-label="Abrir menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="w-6 h-0.5 bg-blue-700"></span>
          <span className="w-6 h-0.5 bg-blue-700"></span>
          <span className="w-6 h-0.5 bg-blue-700"></span>
        </button>
      </div>
      {/* Menu mobile */}
      {menuOpen && (
        <nav className="md:hidden bg-white px-4 pb-4 flex flex-col gap-3 border-b">
          <a href="/" className="hover:text-blue-600">
            Início
          </a>
          <a href="/seguro-de-vida" className="hover:text-blue-600">
            Seguro de Vida
          </a>
          <a href="/seguro-viagem" className="hover:text-blue-600">
            Seguro Viagem
          </a>
          <a href="/plano-odontologico" className="hover:text-blue-600">
            Plano Odontológico
          </a>
          <a href="/ajuda" className="hover:text-blue-600">
            Ajuda
          </a>
          <a href="/contato" className="hover:text-blue-600">
            Contato
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
