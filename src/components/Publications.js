import React from 'react';
import '../style.css';

const PublicationsPage = () => {
  return (
    <div className="publications-container">
      <h1>Publicações e Projetos de Pesquisa</h1>
      <p className="intro-text">
        Explore os projetos de pesquisa desenvolvidos pelos alunos da LABIC. Cada projeto 
        representa uma investigação aprofundada sobre questões ambientais relevantes, com foco 
        na região do Porto de Suape e seus arredores.
      </p>

      <div className="publication-item">
        <h3>3º ano: Bioindicadores da Qualidade da Água em Áreas de Influência do Porto de Suape: Avaliação da Saúde de Ecossistemas Costeiros.</h3>
        <p>Este projeto investiga a comunidade de zooplâncton para avaliar o impacto da atividade portuária na saúde dos ecossistemas aquáticos.</p>
      </div>

      <div className="publication-item">
        <h3>2º ano A: Rotas Alteradas? Investigando a conexão entre o porto de Suape e a ocorrência de tubarões na região metropolitana do Recife.</h3>
        <p>Uma análise sobre a relação entre a expansão portuária, alterações ambientais e o aumento de interações de tubarões na costa pernambucana.</p>
      </div>

      <div className="publication-item">
        <h3>2º ano B: Análise dos Impactos do saneamento básico na saúde na ilha de Tatuoquinha, Porto de Suape.</h3>
        <p>Focado na Ilha de Tatuoquinha, este projeto estuda como a infraestrutura de saneamento básico afeta a saúde humana e o ecossistema local.</p>
      </div>

      <div className="publication-item">
        <h3>1º ano: Biofiltração inteligente: avaliação da eficiência de diferentes espécies de macroalgas na remediação de Efluentes encontradas em áreas portuárias de suape.</h3>
        <p>Pesquisa sobre o uso de macroalgas como uma solução natural e sustentável para a limpeza de efluentes industriais.</p>
      </div>
    </div>
  );
};

export default PublicationsPage;
