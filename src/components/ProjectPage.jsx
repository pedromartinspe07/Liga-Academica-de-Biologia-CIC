// src/components/ProjectPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
// Importe as imagens diretamente para que o Webpack as processe
import project3aHero from '../assets/images/project_3a_hero.png';
import tubaraoNadando from '../assets/images/tubarao_nadando_em_aguas_costeiras.png';
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
                    <div className="project-header">
                        {/* Imagens agora são importadas e usadas como variáveis */}
                        <img src={project3aHero} alt="Foto da equipe do 3º ano em trabalho de campo" className="project-image" />
                        <div className="project-info">
                            <span className="project-year">Grupo 3º Ano</span>
                            <h2 className="project-title">Bioindicadores da Qualidade da Água</h2>
                        </div>
                    </div>
                    <div className="project-details">
                        <p className="project-description">Este grupo investiga como a poluição na área de influência do Porto de Suape afeta os ecossistemas aquáticos. O objetivo é utilizar organismos vivos (os bioindicadores) para monitorar a saúde da água, fornecendo dados concretos sobre o impacto das atividades portuárias. A pesquisa envolve a coleta e análise de amostras de água e a identificação de espécies sensíveis à poluição.</p>
                        {/* Use o componente Link para navegação interna */}
                        <Link to="/referencial" className="cta-button">Ver Referencial Teórico →</Link>
                        
                        <div className="team-section">
                            <h3>Membros da Equipe</h3>
                            <ul className="team-list">
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
                </section>

                <section className="content-section project-card" id="rotas">
                    <div className="project-header">
                        <img src={tubaraoNadando} alt="Ilustração de um tubarão nadando em águas costeiras" className="project-image" />
                        <div className="project-info">
                            <span className="project-year">Grupo 2º Ano A</span>
                            <h2 className="project-title">Rotas Alteradas? Tubarões e o Porto</h2>
                        </div>
                    </div>
                    <div className="project-details">
                        <p className="project-description">O projeto questiona a possível relação entre as atividades do Porto de Suape e o aumento da ocorrência de tubarões na costa do Recife. A equipe busca analisar dados e investigar as hipóteses que conectam a poluição, a alteração de ecossistemas e o comportamento desses animais, contribuindo para o debate sobre segurança e conservação marinha.</p>
                        <Link to="/referencial" className="cta-button">Ver Referencial Teórico →</Link>

                        <div className="team-section">
                            <h3>Membros da Equipe</h3>
                            <ul className="team-list">
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
                </section>

                <section className="content-section project-card" id="saneamento">
                    <div className="project-header">
                        <img src={project2bHero} alt="Foto de um mapa da Ilha de Tatuoquinha com dados" className="project-image" />
                        <div className="project-info">
                            <span className="project-year">Grupo 2º Ano B</span>
                            <h2 className="project-title">Impactos do Saneamento Básico em Tatuoquinha</h2>
                        </div>
                    </div>
                    <div className="project-details">
                        <p className="project-description">Focado na saúde pública e ambiental, este projeto estuda como a falta de saneamento básico na Ilha de Tatuoquinha, área próxima a Suape, afeta a saúde dos moradores e o meio ambiente local. O estudo visa propor soluções e conscientizar sobre a importância da infraestrutura sanitária para a qualidade de vida e a preservação do ecossistema.</p>
                        <Link to="/referencial" className="cta-button">Ver Referencial Teórico →</Link>

                        <div className="team-section">
                            <h3>Membros da Equipe</h3>
                            <ul className="team-list">
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
                </section>

                <section className="content-section project-card" id="biofiltracao">
                    <div className="project-header">
                        <img src={project1aHero} alt="Foto de macroalgas em um recipiente de laboratório" className="project-image" />
                        <div className="project-info">
                            <span className="project-year">Grupo 1º Ano</span>
                            <h2 className="project-title">Biofiltração com Macroalgas</h2>
                        </div>
                    </div>
                    <div className="project-details">
                        <p className="project-description">Este grupo explora uma solução biológica e sustentável para o tratamento de efluentes industriais. A pesquisa avalia a eficiência de diferentes espécies de macroalgas na filtração de substâncias poluentes encontradas em áreas portuárias, propondo uma alternativa natural para a remediação ambiental.</p>
                        <Link to="/referencial" className="cta-button">Ver Referencial Teórico →</Link>

                        <div className="team-section">
                            <h3>Membros da Equipe</h3>
                            <ul className="team-list">
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
                </section>

                <section className="content-section final-cta-section">
                    <h2>Seja Parte da Mudança</h2>
                    <p>Nossos projetos estão em constante evolução. Para ver os resultados mais recentes, dados brutos e publicações científicas, navegue pelas seções do nosso site. Junte-se a nós nesta missão de fazer a diferença!</p>
                    <div className="button-group">
                        <Link to="/publicacoes" className="cta-button primary-cta">Ver Publicações</Link>
                        <Link to="/dados" className="cta-button secondary-cta">Acessar Dados</Link>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default ProjectPage;
