// src/components/ProjectPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const ProjectPage = () => {
  // Substituindo as importações de imagem por URLs de placeholder para evitar erros de build.
  // Você pode substituir essas URLs pelas suas imagens reais quando tiver acesso a elas.
  const project3aHero = "https://placehold.co/1200x600/2a6099/fff?text=Bioindicadores+Aqu%C3%A1ticos";
  const tubaraoNadando = "https://placehold.co/1200x600/38a3a5/fff?text=Tubar%C3%B5es+e+o+Porto";
  const project2bHero = "https://placehold.co/1200x600/0077b6/fff?text=Saneamento+B%C3%A1sico";
  const project1aHero = "https://placehold.co/1200x600/d9534f/fff?text=Biofiltra%C3%A7%C3%A3o+com+Macroalgas";

  return (
    <main className="bg-gray-50 text-gray-800 font-inter py-16">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-blue-900 mb-2">Projetos de Pesquisa da LABIC</h1>
          <p className="text-lg text-gray-600">Apresentando o trabalho de nossos jovens pesquisadores em busca de soluções ambientais.</p>
        </div>

        <section className="bg-white rounded-xl shadow-lg p-8 md:p-12 mb-12">
          <p className="text-lg leading-relaxed">Na Liga Acadêmica de Biologia do Colégio Imaculada da Conceição (LABIC), nossos alunos se dedicam a investigar questões ambientais e sociais reais, com foco na área de influência do Porto de Suape. Cada projeto é uma jornada de descoberta, onde a teoria da sala de aula é aplicada para gerar conhecimento e impacto positivo na comunidade.</p>
        </section>

        {/* Card do 3º Ano: Bioindicadores */}
        <section id="bioindicadores" className="bg-white rounded-xl shadow-lg mb-12 overflow-hidden transform transition-transform duration-300 hover:scale-[1.01]">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img src={project3aHero} alt="Foto da equipe do 3º ano em trabalho de campo" className="w-full h-auto object-cover" />
            </div>
            <div className="md:w-1/2 p-8 md:p-12">
              <span className="text-sm font-semibold text-gray-500 uppercase">Grupo 3º Ano</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mt-2 mb-4">Bioindicadores da Qualidade da Água</h2>
              <p className="text-base text-gray-700 leading-relaxed mb-6">Este grupo investiga como a poluição na área de influência do Porto de Suape afeta os ecossistemas aquáticos. O objetivo é utilizar organismos vivos (os bioindicadores) para monitorar a saúde da água, fornecendo dados concretos sobre o impacto das atividades portuárias. A pesquisa envolve a coleta e análise de amostras de água e a identificação de espécies sensíveis à poluição.</p>
              <Link to="/referencial" className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-md transition duration-300 hover:bg-blue-700">
                Ver Referencial Teórico →
              </Link>
              
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-blue-800 mb-2">Membros da Equipe</h3>
                <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm text-gray-600">
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
          </div>
        </section>

        {/* Card do 2º Ano A: Tubarões e o Porto */}
        <section id="rotas" className="bg-white rounded-xl shadow-lg mb-12 overflow-hidden transform transition-transform duration-300 hover:scale-[1.01]">
          <div className="md:flex flex-row-reverse">
            <div className="md:w-1/2">
              <img src={tubaraoNadando} alt="Ilustração de um tubarão nadando em águas costeiras" className="w-full h-auto object-cover" />
            </div>
            <div className="md:w-1/2 p-8 md:p-12">
              <span className="text-sm font-semibold text-gray-500 uppercase">Grupo 2º Ano A</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mt-2 mb-4">Rotas Alteradas? Tubarões e o Porto</h2>
              <p className="text-base text-gray-700 leading-relaxed mb-6">O projeto questiona a possível relação entre as atividades do Porto de Suape e o aumento da ocorrência de tubarões na costa do Recife. A equipe busca analisar dados e investigar as hipóteses que conectam a poluição, a alteração de ecossistemas e o comportamento desses animais, contribuindo para o debate sobre segurança e conservação marinha.</p>
              <Link to="/referencial" className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-md transition duration-300 hover:bg-blue-700">
                Ver Referencial Teórico →
              </Link>
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-blue-800 mb-2">Membros da Equipe</h3>
                <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm text-gray-600">
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
          </div>
        </section>

        {/* Card do 2º Ano B: Saneamento Básico */}
        <section id="saneamento" className="bg-white rounded-xl shadow-lg mb-12 overflow-hidden transform transition-transform duration-300 hover:scale-[1.01]">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img src={project2bHero} alt="Foto de um mapa da Ilha de Tatuoquinha com dados" className="w-full h-auto object-cover" />
            </div>
            <div className="md:w-1/2 p-8 md:p-12">
              <span className="text-sm font-semibold text-gray-500 uppercase">Grupo 2º Ano B</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mt-2 mb-4">Impactos do Saneamento Básico em Tatuoquinha</h2>
              <p className="text-base text-gray-700 leading-relaxed mb-6">Focado na saúde pública e ambiental, este projeto estuda como a falta de saneamento básico na Ilha de Tatuoquinha, área próxima a Suape, afeta a saúde dos moradores e o meio ambiente local. O estudo visa propor soluções e conscientizar sobre a importância da infraestrutura sanitária para a qualidade de vida e a preservação do ecossistema.</p>
              <Link to="/referencial" className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-md transition duration-300 hover:bg-blue-700">
                Ver Referencial Teórico →
              </Link>
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-blue-800 mb-2">Membros da Equipe</h3>
                <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm text-gray-600">
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
          </div>
        </section>

        {/* Card do 1º Ano: Biofiltração */}
        <section id="biofiltracao" className="bg-white rounded-xl shadow-lg mb-12 overflow-hidden transform transition-transform duration-300 hover:scale-[1.01]">
          <div className="md:flex flex-row-reverse">
            <div className="md:w-1/2">
              <img src={project1aHero} alt="Foto de macroalgas em um recipiente de laboratório" className="w-full h-auto object-cover" />
            </div>
            <div className="md:w-1/2 p-8 md:p-12">
              <span className="text-sm font-semibold text-gray-500 uppercase">Grupo 1º Ano</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mt-2 mb-4">Biofiltração com Macroalgas</h2>
              <p className="text-base text-gray-700 leading-relaxed mb-6">Este grupo explora uma solução biológica e sustentável para o tratamento de efluentes industriais. A pesquisa avalia a eficiência de diferentes espécies de macroalgas na filtração de substâncias poluentes encontradas em áreas portuárias, propondo uma alternativa natural para a remediação ambiental.</p>
              <Link to="/referencial" className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-md transition duration-300 hover:bg-blue-700">
                Ver Referencial Teórico →
              </Link>
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-blue-800 mb-2">Membros da Equipe</h3>
                <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm text-gray-600">
                  <li>Flora Nascimento</li>
                  <li>Gabriele Machado</li>
                  <li>Gabrielly Marinho</li>
                  <li>Alícia Vitória</li>
                  <li>Heitor</li>
                  <li>Bruno</li>
                  <li>Maria Lúcia</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-blue-900 text-white rounded-xl shadow-lg text-center p-8 md:p-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Seja Parte da Mudança</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">Nossos projetos estão em constante evolução. Para ver os resultados mais recentes, dados brutos e publicações científicas, navegue pelas seções do nosso site. Junte-se a nós nesta missão de fazer a diferença!</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/publicacoes" className="px-6 py-3 border-2 border-white text-white font-semibold rounded-full transition duration-300 hover:bg-white hover:text-blue-900">
              Ver Publicações
            </Link>
            <Link to="/dados" className="px-6 py-3 bg-white text-blue-900 font-semibold rounded-full transition duration-300 hover:bg-gray-200">
              Acessar Dados
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
};

export default ProjectPage;
