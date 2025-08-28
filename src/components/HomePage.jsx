// src/components/HomePage.jsx
import React from 'react';
import FadeInOnScroll from './FadeInOnScroll';

// Importe as imagens para que o React possa referenciá-las
import logoLabic from '../assets/images/logo_labic.png';
import labicTeamPhoto from '../assets/images/labic_team_photo.jpg';
import profile3a from '../assets/images/profile_3a_1.png';
import profile2a from '../assets/images/profile_2a_1.png';
import profile2b from '../assets/images/profile_2b_1.png';
import profile1a from '../assets/images/profile_1a_1.png';
import instagramIcon from '../assets/images/icon_instagram.gif';

const HomePage = () => {
    return (
        <main className="home-page">
            <section id="inicio" className="hero-section">
                <div id="model-container"></div>
                <div className="hero-content">
                    <h1>Liga Acadêmica de Biologia</h1>
                    <p className="subtitle">LABIC: Explorando os desafios da natureza e do desenvolvimento industrial em Suape.</p>
                    <a href="#projeto" className="cta-button">Conheça Nossos Projetos</a>
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
                                <a href="#sobre" className="link-more">Saiba mais sobre a nossa história →</a>
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
                            <div className="card">
                                <img src={profile3a} alt="Ícone de bioindicador aquático" />
                                <h3>3º Ano: Bioindicadores Aquáticos</h3>
                                <p>Bioindicadores da Qualidade da Água em Áreas de Influência do Porto de Suape: Avaliação da Saúde de Ecossistemas Costeiros.</p>
                                <a href="#bioindicadores" className="card-link" aria-label="Saber mais sobre o projeto de bioindicadores">Saber Mais →</a>
                            </div>
                            {/* ... (Adicionar os outros cards aqui, convertidos para JSX) */}
                        </div>
                    </div>
                </FadeInOnScroll>
            </section>

            <section className="call-to-action-section content-section full-width-background">
                <FadeInOnScroll>
                    <div className="container">
                        <h2>Junte-se à Nossa Missão</h2>
                        <p>Nossa jornada é sobre mais do que pesquisa: é sobre inspirar a próxima geração de cientistas e cidadãos conscientes. Conheça nossos trabalhos, publicações e descubra como você pode fazer parte desta iniciativa.</p>
                        <a href="#contato" className="cta-button secondary-cta">Entre em Contato</a>
                        <a href="#publicacoes" className="cta-button tertiary-cta">Veja Nossas Publicações</a>
                    </div>
                </FadeInOnScroll>
            </section>
            
            <footer className="site-footer">
                <div className="container footer-content">
                    <div className="footer-info">
                        <p>&copy; 2025 - LABIC | Liga Acadêmica de Biologia.</p>
                        <p>Orientação: Professor Vanbasten Rocha</p>
                    </div>
                    <div className="footer-social-links">
                        <a href="https://www.instagram.com/labic.imaculada/" target="_blank" rel="noopener noreferrer" aria-label="Instagram da LABIC">
                            <img src={instagramIcon} alt="Instagram" />
                        </a>
                    </div>
                </div>
            </footer>
        </main>
    );
};

export default HomePage;