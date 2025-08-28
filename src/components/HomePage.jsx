// src/components/HomePage.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import FadeInOnScroll from './FadeInOnScroll';
import ShipModel from './ShipModel'; // Importa o componente do modelo 3D

// Importa as imagens para que o React possa referenciá-las
import labicTeamPhoto from '../assets/images/labic_team_photo.jpg';
import profile3a from '../assets/images/profile_3a_1.png';
import profile2a from '../assets/images/profile_2a_1.png';
import profile2b from '../assets/images/profile_2b_1.png';
import profile1a from '../assets/images/profile_1a_1.png';


const HomePage = () => {
    return (
        <main className="home-page">
            <section id="inicio" className="hero-section">
                {/* Renderiza o componente ShipModel dentro do contêiner */}
                <div id="model-container">
                    <ShipModel />
                </div>
                <div className="hero-content">
                    <h1>Liga Acadêmica de Biologia</h1>
                    <p className="subtitle">LABIC: Explorando os desafios da natureza e do desenvolvimento industrial em Suape.</p>
                    {/* Link do React Router para a página de projetos */}
                    <Link to="/projeto" className="cta-button">Conheça Nossos Projetos</Link>
                </div>
            </section>

            <section id="sobre" className="intro-section content-section">
                <FadeInOnScroll>
                    <div className="container">
                        <h2 className="section-title">Bem-vindos à LABIC</h2>
                        <div className="intro-grid">
                            <div className="intro-text">
                                <p>A Liga Acadêmica de Biologia do Colégio Imaculada da Conceição (LABIC) é um projeto inovador que visa aprofundar o conhecimento de nossos alunos em pesquisas científicas relevantes. Sob a orientação do Professor Vanbasten Rocha, a LABIC se dedica a investigar questões ambientais complexas, promovendo o pensamento crítico e a formação de jovens pesquisadores.</p>
                                <p>Nossa missão é mais do que apenas estudar: é entender e propor soluções para os impactos do desenvolvimento industrial em ecossistemas vulneráveis. Com foco na região de Suape, nossos projetos buscam contribuir para a ciência local e global.</p>
                                {/* Link do React Router para a página de contato */}
                                <Link to="/sobre" className="link-more">Saiba mais sobre a nossa história →</Link>
                            </div>
                            <div className="intro-image-container">
                                <img src={labicTeamPhoto} alt="Foto dos membros da LABIC em um laboratório" className="intro-image" />
                            </div>
                        </div>
                    </div>
                </FadeInOnScroll>
            </section>

            <section id="projetos" className="groups-section content-section">
                <FadeInOnScroll>
                    <div className="container">
                        <h2 className="section-title">Nossos Projetos de Pesquisa</h2>
                        <p className="section-description">A LABIC está dividida em grupos, cada um dedicado a uma linha de pesquisa única, mas interligada pelos desafios ambientais da região de Suape. Clique para saber mais sobre cada projeto.</p>
                        <div className="highlight-cards">
                            {/* Card do 3º Ano */}
                            <div className="card">
                                <img src={profile3a} alt="Ícone de bioindicador aquático" />
                                <h3>3º Ano: Bioindicadores Aquáticos</h3>
                                <p>Bioindicadores da Qualidade da Água em Áreas de Influência do Porto de Suape: Avaliação da Saúde de Ecossistemas Costeiros.</p>
                                <Link to="/projeto#bioindicadores" className="card-link" aria-label="Saber mais sobre o projeto de bioindicadores">Saber Mais →</Link>
                            </div>

                            {/* Card do 2º Ano A */}
                            <div className="card">
                                <img src={profile2a} alt="Ícone de tubarão" />
                                <h3>2º Ano A: Tubarões e o Porto</h3>
                                <p>O projeto investiga a possível relação entre as atividades do Porto de Suape e o aumento da ocorrência de tubarões na costa do Recife.</p>
                                <Link to="/projeto#rotas" className="card-link" aria-label="Saber mais sobre o projeto de tubarões e o porto">Saber Mais →</Link>
                            </div>

                            {/* Card do 2º Ano B */}
                            <div className="card">
                                <img src={profile2b} alt="Ícone de mapa com dados" />
                                <h3>2º Ano B: Saneamento Básico</h3>
                                <p>Estudo sobre os impactos da falta de saneamento básico na Ilha de Tatuoquinha, visando soluções e conscientização ambiental.</p>
                                <Link to="/projeto#saneamento" className="card-link" aria-label="Saber mais sobre o projeto de saneamento básico">Saber Mais →</Link>
                            </div>

                            {/* Card do 1º Ano */}
                            <div className="card">
                                <img src={profile1a} alt="Ícone de macroalga em laboratório" />
                                <h3>1º Ano: Biofiltração</h3>
                                <p>Pesquisa sobre a eficiência de diferentes espécies de macroalgas na filtração de substâncias poluentes em áreas portuárias.</p>
                                <Link to="/projeto#biofiltracao" className="card-link" aria-label="Saber mais sobre o projeto de biofiltração">Saber Mais →</Link>
                            </div>
                        </div>
                    </div>
                </FadeInOnScroll>
            </section>

            <section className="call-to-action-section content-section full-width-background">
                <FadeInOnScroll>
                    <div className="container">
                        <h2>Junte-se à Nossa Missão</h2>
                        <p>Nossa jornada é sobre mais do que pesquisa: é sobre inspirar a próxima geração de cientistas e cidadãos conscientes. Conheça nossos trabalhos, publicações e descubra como você pode fazer parte desta iniciativa.</p>
                        {/* Links do React Router para outras páginas */}
                        <Link to="/contato" className="cta-button secondary-cta">Entre em Contato</Link>
                        <Link to="/publicacoes" className="cta-button tertiary-cta">Veja Nossas Publicações</Link>
                    </div>
                </FadeInOnScroll>
            </section>
        </main>
    );
};

export default HomePage;