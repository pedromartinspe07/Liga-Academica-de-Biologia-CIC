import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

/**
 * @file GlossaryPage.jsx
 * @description Componente da página de glossário, com termos técnicos
 * e navegação por letras, incluindo melhorias de design e funcionalidades.
 */

// Define o componente principal GlossarioPage
const GlossaryPage = () => {
  // Estado para controlar a visibilidade do menu de navegação em dispositivos móveis
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Função para alternar o estado do menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  // Função para lidar com a rolagem suave para as seções
  const handleScrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    // Fecha o menu após clicar em um item no mobile
    setIsMenuOpen(false);
  };

  // Definição dos termos do glossário
  const glossaryTerms = {
    B: [
      {
        id: 'bioindicador',
        term: 'Bioindicador',
        definition: 'Organismos vivos que, por sua sensibilidade a alterações ambientais, fornecem informações sobre a qualidade de um ecossistema. Por exemplo, a presença ou ausência de certas espécies de peixes, insetos aquáticos ou líquens pode indicar o nível de poluição na água ou no ar.',
      },
      {
        id: 'biofiltração',
        term: 'Biofiltração Inteligente',
        definition: 'Um processo biológico que utiliza organismos vivos, como micro-organismos ou, no nosso caso, macroalgas para remover poluentes e contaminantes de efluentes líquidos. É uma alternativa sustentável a métodos químicos de tratamento de água.',
      },
    ],
    E: [
      {
        id: 'ecossistema',
        term: 'Ecossistema Costeiro',
        definition: 'Áreas de transição entre o ambiente terrestre e o marinho, como manguezais, estuários, praias e recifes de coral. Esses ecossistemas são extremamente frágeis e abrigam uma grande biodiversidade, desempenhando papéis cruciais no equilíbrio ambiental e na proteção contra erosão.',
      },
      {
        id: 'efluentes',
        term: 'Efluentes',
        definition: 'Resíduos líquidos, como esgoto doméstico, dejetos industriais ou águas pluviais contaminadas, que são descartados em corpos d\'água. O tratamento adequado de efluentes é uma das principais estratégias para evitar a poluição de rios e oceanos.',
      },
    ],
    M: [
      {
        id: 'macroalgas',
        term: 'Macroalgas',
        definition: 'Organismos fotossintetizantes grandes e multicelulares, popularmente conhecidos como "algas marinhas". Apesar de se parecerem com plantas, não possuem raízes, caules ou folhas. São de grande importância ecológica e econômica, e podem ser usadas na biofiltração.',
      },
    ],
    R: [
      {
        id: 'remediacao',
        term: 'Remediação Ambiental',
        definition: 'O processo de limpeza e restauração de um ambiente contaminado (solo, água ou ar) através de diferentes técnicas, visando devolver a ele suas condições naturais ou seguras para a vida. A biofiltração é um tipo de remediação.',
      },
    ],
    S: [
      {
        id: 'saneamento',
        term: 'Saneamento Básico',
        definition: 'Conjunto de serviços, infraestruturas e instalações operacionais de abastecimento de água potável, esgotamento sanitário, limpeza urbana, manejo de resíduos sólidos e de águas pluviais. A falta de saneamento básico é um dos principais fatores de poluição e problemas de saúde pública em áreas urbanas.',
      },
    ],
  };

  return (
    <div className="bg-gray-50 min-h-screen font-inter">
      {/* Cabeçalho e barra de navegação */}
      <header className="bg-white shadow-md rounded-b-2xl">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between" role="navigation" aria-label="Menu Principal">
          {/* Logo */}
          <a className="flex items-center" href="#">
            <span className="font-extrabold text-2xl text-blue-600">LABIC</span>
          </a>

          {/* Botão para abrir/fechar menu em mobile */}
          <button
            className="md:hidden p-2 rounded-full text-gray-600 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-colors duration-200"
            type="button"
            onClick={toggleMenu}
            aria-controls="main-menu"
            aria-expanded={isMenuOpen}
            aria-label="Abrir menu de navegação"
          >
            {isMenuOpen ?
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              :
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            }
          </button>

          {/* Conteúdo do menu de navegação */}
          <div
            className={`absolute z-50 top-20 right-4 md:static md:flex md:items-center w-full md:w-auto ${isMenuOpen ? 'block bg-white p-6 rounded-lg shadow-xl' : 'hidden'}`}
            id="main-menu"
          >
            <ul className="flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0 items-start md:items-center w-full">
              {/* Simplificado para fins de exemplo */}
              <li className="nav-item w-full md:w-auto">
                <a className="nav-link block py-2 px-4 text-gray-800 hover:text-blue-600 transition-colors duration-200" href="#">Início</a>
              </li>
              <li className="nav-item w-full md:w-auto">
                <a className="nav-link block py-2 px-4 text-gray-800 hover:text-blue-600 transition-colors duration-200" href="#">O Projeto</a>
              </li>
              <li className="nav-item w-full md:w-auto">
                <a className="nav-link block py-2 px-4 text-gray-800 hover:text-blue-600 transition-colors duration-200" href="#">Resultados</a>
              </li>
              <li className="nav-item w-full md:w-auto">
                <a className="nav-link block py-2 px-4 font-bold text-blue-600 border-b-2 border-blue-600" aria-current="page" href="#">Glossário</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/* Conteúdo principal da página */}
      <main className="page-content py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 text-center mb-2">Glossário de Termos-Chave</h1>
          <p className="subtitle text-center text-gray-600 mb-8">Desvendando a ciência por trás das nossas pesquisas.</p>

          {/* Seção de introdução do glossário */}
          <section className="content-section bg-white p-6 rounded-2xl shadow-lg mb-8">
            <p className="text-gray-700 leading-relaxed mb-4">Nesta seção, você encontrará uma lista de termos técnicos, siglas e conceitos relacionados às nossas pesquisas. Este glossário foi criado para facilitar a compreensão e aprofundar o seu conhecimento sobre os temas ambientais e biológicos abordados pela LABIC.</p>
            <p className="text-gray-700 leading-relaxed">Utilize a navegação abaixo para encontrar rapidamente o que procura.</p>
          </section>

          {/* Navegação por letras do glossário */}
          <nav className="glossary-nav flex justify-center flex-wrap space-x-2 sm:space-x-4 mb-8" aria-label="Navegação do Glossário por letras">
            {Object.keys(glossaryTerms).map((letter) => (
              <a 
                key={letter} 
                href={`#${letter}`} 
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollToSection(letter);
                }}
                className="text-lg font-bold text-blue-600 hover:text-blue-800 hover:scale-110 transition-transform duration-200 p-2"
              >
                {letter}
              </a>
            ))}
          </nav>

          {/* Lista de termos do glossário */}
          <section className="content-section glossary-list-container bg-white p-6 rounded-2xl shadow-lg">
            {Object.keys(glossaryTerms).map((letter) => (
              <div key={letter} className="glossary-group mb-12">
                <h2 id={letter} className="text-3xl font-extrabold text-gray-900 border-b-2 border-gray-300 pb-2 mb-6">{letter}</h2>
                <dl className="glossary-list space-y-8">
                  {glossaryTerms[letter].map((term) => (
                    <div key={term.id} className="bg-gray-100 p-4 rounded-lg shadow-sm">
                      <dt id={term.id} className="text-xl font-bold text-blue-800 mb-2">{term.term}</dt>
                      <dd className="mt-1 text-gray-700 leading-relaxed">{term.definition}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </section>
        </div>
      </main>

      {/* Rodapé do site */}
      <footer className="site-footer bg-gray-900 text-gray-300 py-8 mt-12 rounded-t-2xl">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-center md:text-left">
          <div className="footer-info mb-4 md:mb-0">
            <p className="text-sm">&copy; 2025 - LABIC | Liga Acadêmica de Biologia.</p>
            <p className="text-sm mt-1">Orientação: Professor Vanbasten Rocha</p>
          </div>
          <div className="footer-social-links">
            <a
              href="https://www.instagram.com/labic.imaculada/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da LABIC"
            >
              <img
                src="https://placehold.co/40x40/E8E8E8/404040?text=IG"
                alt="Ícone do Instagram"
                className="h-10 w-10 rounded-full transition-transform duration-300 hover:scale-110"
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GlossaryPage;

