import React from "react";

const Footer: React.FC = () => (
  <footer className="bg-blue-700 text-white py-6 mt-8">
    <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
      <div>
        <span className="font-bold">GoodLife Corretora de Seguros</span>
        <br />
        CNPJ: 00.000.000/0001-00
        <br />© {new Date().getFullYear()} Todos os direitos reservados.
      </div>
      <div className="flex gap-4 items-center">
        <a
          href="https://wa.me/5511999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          WhatsApp
        </a>
        <a
          href="https://instagram.com/goodlife"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Instagram
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
