// src/components/Footer.jsx

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Logo ou Nome do Projeto */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold">LABIC</h3>
            <p className="mt-2 text-sm text-gray-600">Liga Acadêmica de Biologia do Colégio Imaculada da Conceição</p>
          </div>

          {/* Links e Navegação */}
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <a href="/sobre" className="text-sm font-medium hover:text-white transition-colors duration-300">Sobre Nós</a>
            <a href="/projeto" className="text-sm font-medium hover:text-white transition-colors duration-300">Projetos</a>
            <a href="/publicacoes" className="text-sm font-medium hover:text-white transition-colors duration-300">Publicações</a>
            <a href="/contato" className="text-sm font-medium hover:text-white transition-colors duration-300">Contato</a>
          </div>

          {/* Redes Sociais */}
          <div className="flex space-x-4">
            {/* Ícones de redes sociais (substituir por ícones SVG reais) */}
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-300">
              <i className="fab fa-instagram text-xl"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-300">
              <i className="fab fa-linkedin text-xl"></i>
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} LABIC - Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

