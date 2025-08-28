// src/pages/ProjectPage.js
import React from 'react';
import ProjectCard from '../components/ProjectCard';

// Dados dos projetos
const projectsData = [
  {
    title: '3º ano: Bioindicadores da Qualidade da Água em Áreas de Influência do Porto de Suape: Avaliação da Saúde de Ecossistemas Costeiros.',
    description: 'Análise da saúde dos ecossistemas costeiros em Suape utilizando bioindicadores, buscando entender o impacto das atividades portuárias.',
    members: ['Arthur Lemos', 'Marília Laura', 'Lyvia Beatriz', 'Taísa Paiva', 'Maria Letícia', 'Maria Eduarda', 'Pedro Martins']
  },
  {
    title: '2º ano A: Rotas Alteradas? Investigando a conexão entre o porto de Suape e a ocorrência de tubarões na região metropolitana do Recife.',
    description: 'Pesquisa sobre a relação entre a movimentação de navios no Porto de Suape e a presença de tubarões, explorando as mudanças nos padrões migratórios.',
    members: ['Maria Eduarda Gaspar', 'Mayra', 'Maria Clara', 'Ana Beatriz do Canto', 'Yasmin Melo', 'Julia Beatriz', 'Julie Azevedo']
  },
  {
    title: '2º ano B: Análise dos Impactos do saneamento básico na saúde na ilha de Tatuoquinha, Porto de Suape.',
    description: 'Estudo focado nos efeitos do saneamento básico deficiente na saúde dos moradores da Ilha de Tatuoquinha, em Suape.',
    members: ['Giovana Silveira', 'Júlia Silveira', 'Eutália Duarte', 'Fernando José', 'Adélia Amorim', 'Pedro Miguel', 'Maria Vitória Galamba']
  },
  {
    title: '1º ano: Biofiltração inteligente: avaliação da eficiência de diferentes espécies de macroalgas na remediação de Efluentes encontradas em áreas portuárias de suape.',
    description: 'Avaliação do uso de macroalgas para tratar efluentes industriais, uma solução natural e eficiente para a poluição em áreas portuárias.',
    members: ['Flora Nascimento', 'Gabriele Machado', 'Gabrielly Marinho', 'Alícia Vitória', 'Heitor', 'Bruno']
  }
];

export default function ProjectPage() {
  return (
    <div className="projects-container">
      <h2>O Projeto</h2>
      {projectsData.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          members={project.members}
        />
      ))}
    </div>
  );
}