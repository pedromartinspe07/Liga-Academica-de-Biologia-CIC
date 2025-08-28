// src/components/ProjectPage.jsx

import React from 'react';
import FadeInOnScroll from './FadeInOnScroll';

// Importa as imagens usadas nos cards de projeto
import project3aHero from '../assets/images/project_3a_hero.png';
import tubarao from '../assets/images/tubarao_nadando_em_aguas_costeiras.png';
import project2bHero from '../assets/images/project_2b_hero.png';
import project1aHero from '../assets/images/project_1a_hero.png';

const ProjectPage = () => {
    return (
        <main className="page-content">
            <div className="container">
                <h1 className="page-title">Projetos de Pesquisa da LABIC</h1>
                <p className="subtitle">Apresentando o trabalho de nossos jovens pesquisadores em busca de soluções ambientais.</p>

                <section className="content-section">
                    <p>Na Liga Acadêmica de Biologia do Colégio Imaculada da Conceição (LABIC), nossos alunos se dedicam a investigar questões ambientais e sociais reais, com foco na área de influência do Porto de Suape. Cada projeto é uma jornada de descoberta, onde a teoria da sala de aula é aplicada para gerar conhecimento e impacto positivo na comunidade.</p>
                </section>

                <section className="content-section project-card" id="bioindicadores">
                    <FadeInOnScroll>
                        <div className="project-header">
                            <img src={project3aHero} alt="Foto da equipe do 3º ano em trabalho de campo" className="project-image" />
                            <div className="project-info">
                                <span className="project-year">Grupo 3º Ano</span>
                                <h2 className="project-title">Bioindicadores da Qualidade da Água</h2>
                            </div>
                        </div>
                        <div className="project-details">
                            <p className="project-description">Este grupo investiga como a poluição na área de influência do Porto de Suape afeta os ecossistemas aquáticos. O objetivo é utilizar organismos vivos (os bioindicadores) para monitorar a saúde da água, fornecendo dados concretos sobre o impacto das atividades portuárias. A pesquisa envolve a coleta e análise de amostras de água e a identificação de espécies sensíveis à poluição.</p>
                            <a href="#referencial" className="cta-button">Ver Referencial Teórico →</a>
                            
                            <div className="team-section">
                                <h3>Membros da Equipe</h3>
                                <ul className="team-list">
                                    <li>Arthur Lemos</li>
                                    <li>Marília Laura</li>
                                    <li>Lyvia Beatriz</li>
                                    {/* ... outros membros */}
                                </ul>
                            </div>
                        </div>
                    </FadeInOnScroll>
                </section>

                <section className="content-section project-card" id="rotas">
                    <FadeInOnScroll>
                        <div className="project-header">
                            <img src={tubarao} alt="Ilustração de um tubarão nadando em águas costeiras" className="project-image" />
                            <div className="project-info">
                                <span className="project-year">Grupo 2º Ano A</span>
                                <h2 className="project-title">Rotas Alteradas? Tubarões e o Porto</h2>
                            </div>
                        </div>
                        <div className="project-details">
                            <p className="project-description">O projeto questiona a possível relação entre as atividades do Porto de Suape e o aumento da ocorrência de tubarões na costa do Recife. A equipe busca analisar dados e investigar as hipóteses que conectam a poluição, a alteração de ecossistemas e o comportamento desses animais, contribuindo para o debate sobre segurança e conservação marinha.</p>
                            <a href="#referencial" className="cta-button">Ver Referencial Teórico →</a>
                            <div className="team-section">
                                <h3>Membros da Equipe</h3>
                                <ul className="team-list">
                                    <li>Maria Eduarda Gaspar</li>
                                    <li>Mayra</li>
                                    {/* ... outros membros */}
                                </ul>
                            </div>
                        </div>
                    </FadeInOnScroll>
                </section>

                {/* Adicione aqui as outras seções do seu projeto, seguindo o mesmo padrão */}

                <section className="content-section final-cta-section">
                    <FadeInOnScroll>
                        <h2>Seja Parte da Mudança</h2>
                        <p>Nossos projetos estão em constante evolução. Para ver os resultados mais recentes, dados brutos e publicações científicas, navegue pelas seções do nosso site. Junte-se a nós nesta missão de fazer a diferença!</p>
                        <div className="button-group">
                            <a href="#publicacoes" className="cta-button primary-cta">Ver Publicações</a>
                            <a href="#dados" className="cta-button secondary-cta">Acessar Dados</a>
                        </div>
                    </FadeInOnScroll>
                </section>
            </div>
        </main>
    );
};

export default ProjectPage;