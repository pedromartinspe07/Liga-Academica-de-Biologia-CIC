// src/pages/AboutPage.js
import React from 'react';
import AdvisorCard from '../components/AdvisorCard';

export default function AboutPage() {
  const advisorBio = "Vanbasten Rocha é o orientador de todos os grupos..." // Adicione mais detalhes se houver

  return (
    <div className="about-container">
      <h2>Sobre a Liga</h2>
      <p>
        A Liga Acadêmica de Biologia Imaculada Conceição (LABIC) foi fundada
        com o objetivo de promover a pesquisa, a educação e a conscientização...
      </p>

      <h3>Orientador</h3>
      <AdvisorCard name="Vanbasten Rocha" bio={advisorBio} />
    </div>
  );
}