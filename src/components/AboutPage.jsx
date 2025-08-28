import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// O componente principal para a página "Sobre Nós"
const App = () => {
  // Estado para controlar a visibilidade do menu de navegação em dispositivos móveis
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Define os itens do menu de navegação
  const navItems = [
    { name: 'Início', path: '/' },
    { name: 'O Projeto', path: '/projeto' },
    { name: 'Referencial', path: '/referencial' },
    { name: 'Resultados', path: '/resultados' },
    { name: 'Publicações', path: '/publicacoes' },
    { name: 'Dados', path: '/dados' },
    { name: 'Glossário', path: '/glossario' },
    { name: 'Sobre', path: '/sobre', current: true },
    { name: 'Contato', path: '/contato' },
  ];

  // Função para alternar o estado do menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    // Contêiner principal da página com estilo de fundo e fonte
    <div className="bg-gray-100 min-h-screen font-sans text-gray-800 antialiased">
      {/* Cabeçalho e barra de navegação */}
      <header className="bg-white shadow-lg sticky top-0 z-50 rounded-b-xl">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between" role="navigation" aria-label="Menu Principal">
          {/* Logo LABIC */}
          <Link to="/" className="flex items-center space-x-2 p-2 rounded-lg transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <div className="w-10 h-10 bg-blue-600 flex items-center justify-center rounded-full text-white font-bold text-sm">
              LABIC
            </div>
            <span className="ml-2 text-xl font-bold text-gray-800 hidden md:block">LABIC</span>
          </Link>

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
            className={`absolute md:static top-20 right-4 bg-white md:bg-transparent shadow-lg md:shadow-none rounded-lg md:rounded-none w-11/12 md:w-auto p-4 md:p-0 transition-transform duration-300 ease-in-out ${isMenuOpen ? 'block transform translate-y-0' : 'hidden transform -translate-y-full md:transform-none md:block'}`}
            id="main-menu"
          >
            <ul className="flex flex-col md:flex-row md:space-x-8 space-y-2 md:space-y-0 items-start md:items-center w-full">
              {navItems.map((item) => (
                <li key={item.name} className="w-full md:w-auto">
                  <Link 
                    to={item.path}
                    className={`nav-link block py-2 px-4 rounded-md transition-colors duration-200 text-center ${item.current ? 'font-bold text-blue-600 bg-blue-100' : 'text-gray-800 hover:text-blue-600 hover:bg-blue-50'}`}
                    aria-current={item.current ? 'page' : undefined}
                    onClick={() => setIsMenuOpen(false)} // Fecha o menu ao clicar em um link
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>

      {/* Conteúdo principal da página */}
      <main className="page-content py-12">
        <div className="container mx-auto px-4">
          {/* Título e subtítulo da página */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
              Sobre a LABIC
            </h1>
            <p className="subtitle text-lg text-gray-600">
              Acreditamos que a ciência transforma o mundo. E nós transformamos a ciência.
            </p>
          </div>

          {/* Seção "Nossa História e Propósito" */}
          <section className="content-section bg-white p-8 rounded-2xl shadow-xl mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nossa História e Propósito
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              A Liga Acadêmica de Biologia (LABIC) é um projeto de pesquisa fundado com a missão de ir além do ensino tradicional. Criada para ser um ambiente de imersão no universo da ciência, a LABIC oferece aos estudantes a oportunidade de se engajarem em pesquisas práticas que abordam problemas ambientais e sociais reais em nossa comunidade, com foco na área de influência do Porto de Suape.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Nossa visão é formar a próxima geração de cientistas e pensadores críticos, capazes de aplicar o conhecimento para criar soluções inovadoras. Valorizamos a colaboração, o pensamento crítico e a responsabilidade social em cada etapa de nossos projetos.
            </p>
          </section>

          {/* Seção "O Orientador" */}
          <section className="content-section bg-white p-8 rounded-2xl shadow-xl mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              O Orientador
            </h2>
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
              <img 
                src="https://placehold.co/150x150/E8E8E8/404040?text=Prof.V" 
                alt="Foto do Professor Vanbasten Rocha" 
                className="w-40 h-40 object-cover rounded-full shadow-lg" 
              />
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-gray-800">
                  Professor Vanbasten Rocha
                </h3>
                <p className="text-blue-600 font-semibold mb-2">
                  Orientador e Coordenador da LABIC
                </p>
                <p className="text-gray-700 leading-relaxed">
                  O Professor Vanbasten Rocha é a força motriz por trás da Liga Acadêmica. Com sua vasta experiência em Biologia, ecologia e gestão ambiental, ele guia os alunos em cada etapa do processo de pesquisa, desde a formulação das hipóteses e o trabalho de campo até a análise dos resultados e a elaboração de publicações científicas. Sua paixão pelo ensino e sua dedicação inspiram a todos os membros da LABIC.
                </p>
              </div>
            </div>
          </section>

          {/* Seção "Nossos Jovens Pesquisadores" */}
          <section className="content-section bg-white p-8 rounded-2xl shadow-xl mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nossos Jovens Pesquisadores
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Nossa equipe é formada por estudantes engajados, divididos em grupos, cada um dedicado a um projeto específico. Conheça a equipe que está fazendo a diferença:
            </p>
            
            {/* Grid de grupos de pesquisa */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Card do Grupo 3º Ano A */}
              <div className="bg-gray-100 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex flex-col items-center">
                  <img 
                    src="https://placehold.co/100x100/E8E8E8/404040?text=Grupo+3A" 
                    alt="Foto de um membro do Grupo 3º Ano A" 
                    className="w-24 h-24 object-cover rounded-full mx-auto mb-4" 
                  />
                  <h3 className="text-xl font-bold text-gray-800 text-center">
                    Grupo 3º Ano A
                  </h3>
                  <p className="text-blue-600 font-semibold text-sm mb-2 text-center">
                    Bioindicadores da Água
                  </p>
                  <ul className="text-sm text-gray-700 list-disc list-inside space-y-1 mt-2">
                    <li>Arthur Lemos</li>
                    <li>Marília Laura</li>
                    <li>Lyvia Beatriz</li>
                    <li>Taísa Paiva</li>
                    <li>Maria Letícia</li>
                    <li>Maria Eduarda</li>
                    <li>Pedro Martins</li>
                  </ul>
                </div>
              </div>
              
              {/* Card do Grupo 2º Ano A */}
              <div className="bg-gray-100 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex flex-col items-center">
                  <img 
                    src="https://placehold.co/100x100/E8E8E8/404040?text=Grupo+2A" 
                    alt="Foto de um membro do Grupo 2º Ano A" 
                    className="w-24 h-24 object-cover rounded-full mx-auto mb-4" 
                  />
                  <h3 className="text-xl font-bold text-gray-800 text-center">
                    Grupo 2º Ano A
                  </h3>
                  <p className="text-blue-600 font-semibold text-sm mb-2 text-center">
                    Tubarões e o Porto
                  </p>
                  <ul className="text-sm text-gray-700 list-disc list-inside space-y-1 mt-2">
                    <li>Maria Eduarda Gaspar</li>
                    <li>Mayra</li>
                    <li>Maria Clara</li>
                    <li>Ana Beatriz do Canto</li>
                    <li>Yasmin Melo</li>
                    <li>Julia Beatriz</li>
                    <li>Julie Azevedo</li>
                  </ul>
                </div>
              </div>

              {/* Card do Grupo 2º Ano B */}
              <div className="bg-gray-100 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex flex-col items-center">
                  <img 
                    src="https://placehold.co/100x100/E8E8E8/404040?text=Grupo+2B" 
                    alt="Foto de um membro do Grupo 2º Ano B" 
                    className="w-24 h-24 object-cover rounded-full mx-auto mb-4" 
                  />
                  <h3 className="text-xl font-bold text-gray-800 text-center">
                    Grupo 2º Ano B
                  </h3>
                  <p className="text-blue-600 font-semibold text-sm mb-2 text-center">
                    Saneamento em Tatuoquinha
                  </p>
                  <ul className="text-sm text-gray-700 list-disc list-inside space-y-1 mt-2">
                    <li>Giovana Silveira</li>
                    <li>Júlia Silveira</li>
                    <li>Eutália Duarte</li>
                    <li>Fernando José</li>
                    <li>Adélia Amorim</li>
                    <li>Pedro Miguel</li>
                    <li>Maria Vitória Galamba</li>
                  </ul>
                </div>
              </div>

              {/* Card do Grupo 1º Ano A */}
              <div className="bg-gray-100 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex flex-col items-center">
                  <img 
                    src="https://placehold.co/100x100/E8E8E8/404040?text=Grupo+1A" 
                    alt="Foto de um membro do Grupo 1º Ano A" 
                    className="w-24 h-24 object-cover rounded-full mx-auto mb-4" 
                  />
                  <h3 className="text-xl font-bold text-gray-800 text-center">
                    Grupo 1º Ano A
                  </h3>
                  <p className="text-blue-600 font-semibold text-sm mb-2 text-center">
                    Biofiltração com Macroalgas
                  </p>
                  <ul className="text-sm text-gray-700 list-disc list-inside space-y-1 mt-2">
                    <li>Flora Nascimento</li>
                    <li>Gabriele Machado</li>
                    <li>Gabrielly Marinho</li>
                    <li>Alícia Vitória</li>
                    <li>Heitor</li>
                    <li>Bruno</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Rodapé do site */}
      <footer className="site-footer bg-gray-900 text-gray-300 py-6 rounded-t-xl">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-center md:text-left">
          <div className="footer-info mb-4 md:mb-0">
            <p>&copy; 2025 - LABIC | Liga Acadêmica de Biologia.</p>
            <p className="mt-1">Orientação: Professor Vanbasten Rocha</p>
          </div>
          <div className="footer-social-links flex space-x-4">
            <a
              href="https://www.instagram.com/labic.imaculada/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da LABIC"
              className="p-2 rounded-full transition-transform duration-300 hover:scale-110"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400 hover:text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.013 4.85.076 3.23.16 4.675 1.499 4.832 4.832.063 1.266.076 1.646.076 4.85s-.013 3.584-.076 4.85c-.16 3.23-1.499 4.675-4.832 4.832-1.266.063-1.646.076-4.85.076s-3.584-.013-4.85-.076c-3.23-.16-4.675-1.499-4.832-4.832-.063-1.266-.076-1.646-.076-4.85s.013-3.584.076-4.85c.16-3.23 1.499-4.675 4.832-4.832 1.266-.063 1.646-.076 4.85-.076zm0-2.163c-3.259 0-3.667.014-4.947.078-4.108.204-6.195 2.327-6.398 6.398-.063 1.28-.078 1.688-.078 4.947 0 3.259.014 3.667.078 4.947.204 4.108 2.327 6.195 6.398 6.398 1.28.063 1.688.078 4.947.078s3.667-.014 4.947-.078c4.108-.204 6.195-2.327 6.398-6.398.063-1.28.078-1.688.078-4.947s-.014-3.667-.078-4.947c-.204-4.108-2.327-6.195-6.398-6.398-1.28-.063-1.688-.078-4.947-.078zm0 7.886c-2.73 0-4.947 2.217-4.947 4.947s2.217 4.947 4.947 4.947 4.947-2.217 4.947-4.947-2.217-4.947-4.947-4.947zm0 8.164c-1.776 0-3.217-1.442-3.217-3.217s1.441-3.217 3.217-3.217 3.217 1.442 3.217 3.217-1.441 3.217-3.217 3.217zm6.657-11.758c-.827 0-1.496.67-1.496 1.496s.67 1.496 1.496 1.496 1.496-.67 1.496-1.496-.67-1.496-1.496-1.496z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
