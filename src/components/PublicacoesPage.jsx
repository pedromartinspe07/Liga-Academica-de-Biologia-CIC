// src/components/PublicacoesPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

// Importa os ícones e imagens
import pdfIcon from '../assets/images/pdf_icon.svg';
import poster3A from '../assets/images/poster_thumbnail_3a.png';
import poster2A from '../assets/images/poster_thumbnail_2a.png';

const publications = [
    {
        title: "Avaliação da Qualidade da Água em Pontos de Coleta Próximos a Suape",
        group: "Grupo 3º Ano",
        description: "Este relatório detalhado apresenta a metodologia e os resultados da análise de bioindicadores em ecossistemas costeiros, evidenciando o impacto das atividades portuárias na saúde da água e na biodiversidade local.",
        authors: "A. Lemos, M. Laura, L. Beatriz, T. Paiva, M. Letícia, M. Eduarda, P. Martins.",
        downloadLink: "/assets/publications/artigo-bioindicadores.pdf"
    },
    {
        title: "A Relação entre o Tráfego Portuário e a Ocorrência de Tubarões",
        group: "Grupo 2º Ano A",
        description: "Um estudo exploratório sobre os fatores ambientais e as possíveis correlações entre a expansão de Suape e o aumento de incidentes com tubarões na costa do Recife. Este documento é o primeiro passo para uma pesquisa mais aprofundada.",
        authors: "M. E. Gaspar, Mayra, M. Clara, A. B. Canto, Y. Melo, J. Beatriz, J. Azevedo.",
        downloadLink: "/assets/publications/relatorio-tubaroes.pdf"
    },
    {
        title: "Biofiltração de Efluentes com Macroalgas em Suape",
        group: "Grupo 1º Ano",
        description: "Este relatório técnico descreve os experimentos e os resultados preliminares sobre a eficiência de espécies nativas de macroalgas na remoção de contaminantes de amostras de efluentes coletadas na área portuária.",
        authors: "F. Nascimento, G. Machado, G. Marinho, A. Vitória, H. Silva, B. Rodrigues.",
        downloadLink: "/assets/publications/relatorio-biofiltracao.pdf"
    }
];

const posters = [
    {
        title: "Pôster: Bioindicadores (3º Ano)",
        thumbnail: poster3A,
        fullImage: "/assets/publications/poster-3ano.png",
        ariaLabel: "Pôster do Grupo 3º Ano sobre Bioindicadores de Suape"
    },
    {
        title: "Pôster: Rotas Alteradas (2º Ano A)",
        thumbnail: poster2A,
        fullImage: "/assets/publications/poster-2a.png",
        ariaLabel: "Pôster do Grupo 2º Ano A sobre a relação entre Porto e Tubarões"
    }
];

const PublicacoesPage = () => {
    return (
        <main className="page-content">
            <div className="container">
                <nav aria-label="Breadcrumb" className="breadcrumb-nav">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Início</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Publicações</li>
                    </ol>
                </nav>

                <h1 className="page-title">Nossas Publicações</h1>
                <p className="subtitle">Compartilhando conhecimento: ciência aberta e acessível para todos.</p>

                <section className="content-section publication-intro">
                    <p>Nesta seção, você pode acessar artigos, resumos de congressos, pôsteres e relatórios produzidos pelos membros da LABIC. Nosso compromisso é compartilhar o conhecimento e os resultados de nossa pesquisa com a comunidade acadêmica e o público em geral, incentivando a colaboração e a transparência científica.</p>
                    <div className="info-box">
                        <p><strong>Dica:</strong> Para obter mais detalhes sobre a metodologia e os dados brutos de cada pesquisa, visite as páginas <Link to="/referencial">Referencial</Link> e <Link to="/dados">Dados</Link>.</p>
                    </div>
                </section>

                <section className="content-section">
                    <h2 className="section-title">Artigos e Relatórios</h2>
                    <ul className="publications-list">
                        {publications.map((pub, index) => (
                            <li className="publication-item" key={index}>
                                <img className="publication-icon" src={pdfIcon} alt="Ícone de PDF" />
                                <div className="publication-details">
                                    <h3>{pub.title}</h3>
                                    <p className="pub-description">{pub.group}: {pub.description}</p>
                                    <p className="pub-authors">Autores: {pub.authors}</p>
                                    <a href={pub.downloadLink} className="download-link" download aria-label={`Download do artigo sobre ${pub.title} em formato PDF`}>Download PDF</a>
                                </div>
                            </li>
                        ))}
                    </ul>
                </section>
                
                <section className="content-section">
                    <h2 className="section-title">Apresentações e Pôsteres de Congressos</h2>
                    <p>Nossos projetos são frequentemente apresentados em eventos e congressos científicos. Aqui você pode visualizar os pôsteres e slides que utilizamos para divulgar nossa pesquisa para a comunidade acadêmica.</p>
                    <div className="publication-gallery">
                        {posters.map((poster, index) => (
                            <a href={poster.fullImage} className="gallery-item" aria-label={poster.ariaLabel} key={index}>
                                <img src={poster.thumbnail} alt={`Miniatura do ${poster.title}`} className="gallery-thumbnail" />
                                <span>{poster.title}</span>
                            </a>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
};

export default PublicacoesPage;
