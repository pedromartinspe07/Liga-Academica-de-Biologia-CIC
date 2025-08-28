import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Define o componente principal para a página "Sobre Nós"
const App = () => {
  // Estado para controlar a visibilidade do menu de navegação em dispositivos móveis
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Função para alternar o estado do menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-gray-50 min-h-screen font-[Roboto]">
      {/* Cabeçalho e barra de navegação */}
      <header className="bg-white shadow-md">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between" role="navigation" aria-label="Menu Principal">
          {/* Logo */}
          <a className="flex items-center" href="index.html">
            <img src="https://placehold.co/40x40/E8E8E8/404040?text=LABIC" alt="Ícone da Logo" className="h-10" />
            <span className="ml-2 text-xl font-bold text-gray-800 hidden md:block">LABIC</span>
          </a>

          {/* Botão para abrir/fechar menu em mobile */}
          <button
            className="md:hidden p-2 rounded-full text-gray-600 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
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
            className={`md:flex md:items-center w-full md:w-auto ${isMenuOpen ? 'block' : 'hidden'}`}
            id="main-menu"
          >
            <ul className="flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0 items-center w-full">
              <li className="nav-item w-full md:w-auto">
                <a className="nav-link block py-2 px-4 text-gray-800 hover:text-blue-600 transition-colors duration-200" href="index.html">Início</a>
              </li>
              <li className="nav-item w-full md:w-auto">
                <a className="nav-link block py-2 px-4 text-gray-800 hover:text-blue-600 transition-colors duration-200" href="projeto.html">O Projeto</a>
              </li>
              <li className="nav-item w-full md:w-auto">
                <a className="nav-link block py-2 px-4 text-gray-800 hover:text-blue-600 transition-colors duration-200" href="referencial.html">Referencial</a>
              </li>
              <li className="nav-item w-full md:w-auto">
                <a className="nav-link block py-2 px-4 text-gray-800 hover:text-blue-600 transition-colors duration-200" href="resultados.html">Resultados</a>
              </li>
              <li className="nav-item w-full md:w-auto">
                <a className="nav-link block py-2 px-4 text-gray-800 hover:text-blue-600 transition-colors duration-200" href="publicacoes.html">Publicações</a>
              </li>
              <li className="nav-item w-full md:w-auto">
                <a className="nav-link block py-2 px-4 text-gray-800 hover:text-blue-600 transition-colors duration-200" href="dados.html">Dados</a>
              </li>
              <li className="nav-item w-full md:w-auto">
                <a className="nav-link block py-2 px-4 text-gray-800 hover:text-blue-600 transition-colors duration-200" href="glossario.html">Glossário</a>
              </li>
              <li className="nav-item w-full md:w-auto">
                <a className="nav-link block py-2 px-4 font-bold text-blue-600 border-b-2 border-blue-600" aria-current="page" href="sobre.html">Sobre</a>
              </li>
              <li className="nav-item w-full md:w-auto">
                <a className="nav-link block py-2 px-4 text-gray-800 hover:text-blue-600 transition-colors duration-200" href="contato.html">Contato</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/* Conteúdo principal da página */}
      <main className="page-content py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl lg:text-5xl font-[Playfair+Display] font-bold text-gray-900 text-center mb-2">Sobre a LABIC</h1>
          <p className="subtitle text-center text-gray-600 mb-8">Acreditamos que a ciência transforma o mundo. E nós transformamos a ciência.</p>

          <section className="content-section bg-white p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-3xl font-[Playfair+Display] font-bold text-gray-900 mb-4">Nossa História e Propósito</h2>
            <p className="text-gray-700 leading-relaxed mb-4">A Liga Acadêmica de Biologia (LABIC) é um projeto de pesquisa fundado com a missão de ir além do ensino tradicional. Criada para ser um ambiente de imersão no universo da ciência, a LABIC oferece aos estudantes a oportunidade de se engajarem em pesquisas práticas que abordam problemas ambientais e sociais reais em nossa comunidade, com foco na área de influência do Porto de Suape.</p>
            <p className="text-gray-700 leading-relaxed">Nossa visão é formar a próxima geração de cientistas e pensadores críticos, capazes de aplicar o conhecimento para criar soluções inovadoras. Valorizamos a colaboração, o pensamento crítico e a responsabilidade social em cada etapa de nossos projetos.</p>
          </section>
          
          <section className="content-section bg-white p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-3xl font-[Playfair+Display] font-bold text-gray-900 mb-4">O Orientador</h2>
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
              <img src="https://placehold.co/150x150/E8E8E8/404040?text=Prof.V" alt="Foto do Professor Vanbasten Rocha" className="w-40 h-40 object-cover rounded-full" />
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-gray-800">Professor Vanbasten Rocha</h3>
                <p className="text-blue-600 font-semibold mb-2">Orientador e Coordenador da LABIC</p>
                <p className="text-gray-700 leading-relaxed">O Professor Vanbasten Rocha é a força motriz por trás da Liga Acadêmica. Com sua vasta experiência em Biologia, ecologia e gestão ambiental, ele guia os alunos em cada etapa do processo de pesquisa, desde a formulação das hipóteses e o trabalho de campo até a análise dos resultados e a elaboração de publicações científicas. Sua paixão pelo ensino e sua dedicação inspiram a todos os membros da LABIC.</p>
              </div>
            </div>
          </section>
          
          <section className="content-section bg-white p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-3xl font-[Playfair+Display] font-bold text-gray-900 mb-4">Nossos Jovens Pesquisadores</h2>
            <p className="text-gray-700 leading-relaxed mb-4">Nossa equipe é formada por estudantes engajados, divididos em grupos, cada um dedicado a um projeto específico. Conheça a equipe que está fazendo a diferença:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Grupo 3º Ano A */}
              <div className="bg-gray-100 p-4 rounded-lg shadow-sm text-center">
                <img src="https://placehold.co/100x100/E8E8E8/404040?text=Grupo+3A" alt="Foto de um membro do Grupo 3º Ano A" className="w-24 h-24 object-cover rounded-full mx-auto mb-2" />
                <h3 className="text-xl font-bold text-gray-800">Grupo 3º Ano A</h3>
                <p className="text-blue-600 font-semibold text-sm mb-2">Bioindicadores da Água</p>
                <ul className="text-sm text-gray-700 list-disc list-inside">
                  <li>Arthur Lemos</li>
                  <li>Marília Laura</li>
                  <li>Lyvia Beatriz</li>
                  <li>Taísa Paiva</li>
                  <li>Maria Letícia</li>
                  <li>Maria Eduarda</li>
                  <li>Pedro Martins</li>
                </ul>
              </div>
              
              {/* Grupo 2º Ano A */}
              <div className="bg-gray-100 p-4 rounded-lg shadow-sm text-center">
                <img src="https://placehold.co/100x100/E8E8E8/404040?text=Grupo+2A" alt="Foto de um membro do Grupo 2º Ano A" className="w-24 h-24 object-cover rounded-full mx-auto mb-2" />
                <h3 className="text-xl font-bold text-gray-800">Grupo 2º Ano A</h3>
                <p className="text-blue-600 font-semibold text-sm mb-2">Tubarões e o Porto</p>
                <ul className="text-sm text-gray-700 list-disc list-inside">
                  <li>Maria Eduarda Gaspar</li>
                  <li>Mayra</li>
                  <li>Maria Clara</li>
                  <li>Ana Beatriz do Canto</li>
                  <li>Yasmin Melo</li>
                  <li>Julia Beatriz</li>
                  <li>Julie Azevedo</li>
                </ul>
              </div>

              {/* Grupo 2º Ano B */}
              <div className="bg-gray-100 p-4 rounded-lg shadow-sm text-center">
                <img src="https://placehold.co/100x100/E8E8E8/404040?text=Grupo+2B" alt="Foto de um membro do Grupo 2º Ano B" className="w-24 h-24 object-cover rounded-full mx-auto mb-2" />
                <h3 className="text-xl font-bold text-gray-800">Grupo 2º Ano B</h3>
                <p className="text-blue-600 font-semibold text-sm mb-2">Saneamento em Tatuoquinha</p>
                <ul className="text-sm text-gray-700 list-disc list-inside">
                  <li>Giovana Silveira</li>
                  <li>Júlia Silveira</li>
                  <li>Eutália Duarte</li>
                  <li>Fernando José</li>
                  <li>Adélia Amorim</li>
                  <li>Pedro Miguel</li>
                  <li>Maria Vitória Galamba</li>
                </ul>
              </div>

              {/* Grupo 1º Ano A */}
              <div className="bg-gray-100 p-4 rounded-lg shadow-sm text-center">
                <img src="https://placehold.co/100x100/E8E8E8/404040?text=Grupo+1A" alt="Foto de um membro do Grupo 1º Ano A" className="w-24 h-24 object-cover rounded-full mx-auto mb-2" />
                <h3 className="text-xl font-bold text-gray-800">Grupo 1º Ano A</h3>
                <p className="text-blue-600 font-semibold text-sm mb-2">Biofiltração com Macroalgas</p>
                <ul className="text-sm text-gray-700 list-disc list-inside">
                  <li>Flora Nascimento</li>
                  <li>Gabriele Machado</li>
                  <li>Gabrielly Marinho</li>
                  <li>Alícia Vitória</li>
                  <li>Heitor</li>
                  <li>Bruno</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Rodapé do site */}
      <footer className="site-footer bg-gray-900 text-gray-300 py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-center md:text-left">
          <div className="footer-info mb-4 md:mb-0">
            <p>&copy; 2025 - LABIC | Liga Acadêmica de Biologia.</p>
            <p className="mt-1">Orientação: Professor Vanbasten Rocha</p>
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
                className="h-10 w-10 transition-transform duration-300 hover:scale-110"
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
