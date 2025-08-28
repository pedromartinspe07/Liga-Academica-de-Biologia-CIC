import React from 'react';
import '../style.css';

const GlossarioPage = () => {
  return (
    <div className="glossary-container">
      <h1>Glossário de Termos</h1>
      <p className="intro-text">
        Conheça os principais termos técnicos e conceitos utilizados nos projetos da LABIC.
      </p>
      
      <div className="glossary-item">
        <h3>Bioindicadores</h3>
        <p>Organismos vivos (como zooplâncton, algas ou peixes) que refletem as condições ambientais de um ecossistema. A presença, ausência ou saúde desses organismos pode indicar a qualidade da água ou do ar.</p>
      </div>

      <div className="glossary-item">
        <h3>Biorremediação</h3>
        <p>Uma técnica que utiliza organismos vivos (como bactérias, fungos, plantas ou algas) para remover poluentes de um ambiente contaminado, como solo ou água.</p>
      </div>

      <div className="glossary-item">
        <h3>Efluentes</h3>
        <p>Resíduos líquidos (geralmente industriais ou domésticos) que são descartados em corpos d'água, como rios, lagos ou oceanos.</p>
      </div>

      <div className="glossary-item">
        <h3>Zooplâncton</h3>
        <p>Pequenos animais aquáticos que flutuam na água e servem de base para a cadeia alimentar de muitos ecossistemas marinhos e de água doce.</p>
      </div>

      <div className="glossary-item">
        <h3>Ictiofauna</h3>
        <p>O conjunto de todas as espécies de peixes que habitam uma determinada região ou ecossistema aquático.</p>
      </div>
    </div>
  );
};

export default GlossarioPage;
