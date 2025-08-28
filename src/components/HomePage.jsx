// src/components/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

// O erro indica que o componente 'FadeInOnScroll' não foi encontrado.
// Para resolver, vamos criar uma versão simplificada dele dentro deste arquivo.
// O mesmo acontece com as importações de imagens.
// Se as imagens não existirem nos caminhos especificados, o build falha.
// Para a demonstração, vamos substituir as importações por URLs de placeholders.

// Componente simples para a animação de Fade In on Scroll
const FadeInOnScroll = ({ children }) => {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();

  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });

    if (domRef.current) {
      observer.observe(domRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`transition-opacity duration-1000 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      ref={domRef}
    >
      {children}
    </div>
  );
};


const HomePage = () => {
  // Vamos usar placeholders de imagem para evitar erros de importação
  const labicTeamPhoto = "https://placehold.co/800x600/2a6099/fff?text=LABIC+Team";
  const profile3a = "https://placehold.co/80x80/003d79/fff?text=3A";
  const profile2a = "https://placehold.co/80x80/003d79/fff?text=2A";
  const profile2b = "https://placehold.co/80x80/003d79/fff?text=2B";
  const profile1a = "https://placehold.co/80x80/003d79/fff?text=1A";

  return (
    <main className="bg-gray-50 text-gray-800 font-inter">
      {/* Seção Hero - Agora com uma imagem de destaque e texto centralizado */}
      <section id="inicio" className="relative h-screen flex flex-col items-center justify-center text-center p-4 overflow-hidden">
        {/* Adiciona uma imagem de fundo (substitua o URL) para a seção hero */}
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: "url('https://placehold.co/1920x1080/2a6099/fff?text=LABIC')" }}
        >
          <div className="absolute inset-0 bg-blue-900 opacity-70"></div>
        </div>

        {/* Conteúdo da seção hero */}
        <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-4 leading-tight drop-shadow-md">
            Liga Acadêmica de Biologia
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-200 font-light mb-8 drop-shadow-sm">
            LABIC: Explorando os desafios da natureza e do desenvolvimento industrial em Suape.
          </p>
          {/* Link para a página de projetos usando Tailwind CSS para estilização do botão */}
          <Link to="/projeto" className="px-8 py-4 bg-white text-blue-800 font-bold rounded-full shadow-lg transition duration-300 hover:bg-blue-100 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white">
            Conheça Nossos Projetos
          </Link>
        </div>
      </section>

      {/* Seção 'Sobre Nós' - Layout com imagem e texto lado a lado */}
      <section id="sobre" className="py-16 md:py-24 bg-white">
        <FadeInOnScroll>
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Bem-vindos à LABIC</h2>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="md:w-1/2 order-2 md:order-1 text-lg leading-relaxed">
                <p className="mb-4">A Liga Acadêmica de Biologia do Colégio Imaculada da Conceição (LABIC) é um projeto inovador que visa aprofundar o conhecimento de nossos alunos em pesquisas científicas relevantes. Sob a orientação do Professor Vanbasten Rocha, a LABIC se dedica a investigar questões ambientais complexas, promovendo o pensamento crítico e a formação de jovens pesquisadores.</p>
                <p className="mb-4">Nossa missão é mais do que apenas estudar: é entender e propor soluções para os impactos do desenvolvimento industrial em ecossistemas vulneráveis. Com foco na região de Suape, nossos projetos buscam contribuir para a ciência local e global.</p>
                <Link to="/sobre" className="inline-flex items-center text-blue-600 font-semibold mt-4 hover:underline">
                  Saiba mais sobre a nossa história →
                </Link>
              </div>
              <div className="md:w-1/2 order-1 md:order-2">
                <img src={labicTeamPhoto} alt="Membros da LABIC" className="w-full h-auto rounded-lg shadow-lg" />
              </div>
            </div>
          </div>
        </FadeInOnScroll>
      </section>

      {/* Seção 'Nossos Projetos' - Cards com informações dos projetos */}
      <section id="projetos" className="py-16 md:py-24 bg-gray-100">
        <FadeInOnScroll>
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Nossos Projetos de Pesquisa</h2>
            <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">A LABIC está dividida em grupos, cada um dedicado a uma linha de pesquisa única, mas interligada pelos desafios ambientais da região de Suape. Clique para saber mais sobre cada projeto.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Card do 3º Ano */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <img src={profile3a} alt="Ícone de bioindicador" className="w-20 h-20 mb-4 mx-auto rounded-full" />
                <h3 className="text-xl font-semibold mb-2 text-center">3º Ano: Bioindicadores Aquáticos</h3>
                <p className="text-sm text-gray-600 text-center mb-4">Avaliação da Qualidade da Água em Áreas de Influência do Porto de Suape.</p>
                <Link to="/projeto#bioindicadores" className="block text-center text-blue-600 font-medium hover:underline">
                  Saber Mais →
                </Link>
              </div>

              {/* Card do 2º Ano A */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <img src={profile2a} alt="Ícone de tubarão" className="w-20 h-20 mb-4 mx-auto rounded-full" />
                <h3 className="text-xl font-semibold mb-2 text-center">2º Ano A: Tubarões e o Porto</h3>
                <p className="text-sm text-gray-600 text-center mb-4">Relação entre as atividades do Porto de Suape e a ocorrência de tubarões na costa do Recife.</p>
                <Link to="/projeto#rotas" className="block text-center text-blue-600 font-medium hover:underline">
                  Saber Mais →
                </Link>
              </div>

              {/* Card do 2º Ano B */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <img src={profile2b} alt="Ícone de saneamento" className="w-20 h-20 mb-4 mx-auto rounded-full" />
                <h3 className="text-xl font-semibold mb-2 text-center">2º Ano B: Saneamento Básico</h3>
                <p className="text-sm text-gray-600 text-center mb-4">Estudo dos impactos da falta de saneamento na Ilha de Tatuoquinha.</p>
                <Link to="/projeto#saneamento" className="block text-center text-blue-600 font-medium hover:underline">
                  Saber Mais →
                </Link>
              </div>

              {/* Card do 1º Ano */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <img src={profile1a} alt="Ícone de biofiltração" className="w-20 h-20 mb-4 mx-auto rounded-full" />
                <h3 className="text-xl font-semibold mb-2 text-center">1º Ano: Biofiltração</h3>
                <p className="text-sm text-gray-600 text-center mb-4">Eficiência de macroalgas na filtração de poluentes em áreas portuárias.</p>
                <Link to="/projeto#biofiltracao" className="block text-center text-blue-600 font-medium hover:underline">
                  Saber Mais →
                </Link>
              </div>
            </div>
          </div>
        </FadeInOnScroll>
      </section>

      {/* Seção de Chamada para Ação */}
      <section className="py-16 md:py-24 bg-blue-800 text-white">
        <FadeInOnScroll>
          <div className="container mx-auto px-4 md:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Junte-se à Nossa Missão</h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto">Nossa jornada é sobre mais do que pesquisa: é sobre inspirar a próxima geração de cientistas e cidadãos conscientes. Conheça nossos trabalhos, publicações e descubra como você pode fazer parte desta iniciativa.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contato" className="px-8 py-3 bg-white text-blue-800 font-bold rounded-full shadow-lg transition duration-300 hover:bg-blue-100 hover:scale-105">
                Entre em Contato
              </Link>
              <Link to="/publicacoes" className="px-8 py-3 border-2 border-white text-white font-bold rounded-full transition duration-300 hover:bg-white hover:text-blue-800 hover:scale-105">
                Veja Nossas Publicações
              </Link>
            </div>
          </div>
        </FadeInOnScroll>
      </section>
    </main>
  );
};

export default HomePage;
