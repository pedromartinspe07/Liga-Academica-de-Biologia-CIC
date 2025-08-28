import React from 'react';

// Use um mock de Link para que o componente funcione de forma autônoma.
// Em um aplicativo real, você usaria o `Link` do 'react-router-dom'.
const Link = ({ to, children }) => <a href={to} className="hover:underline transition-colors duration-200">{children}</a>;

// Dados mockados para as publicações e pôsteres.
// Em um aplicativo real, esses dados viriam de uma API.
const publications = [
    {
        title: "Avaliação da Qualidade da Água em Pontos de Coleta Próximos a Suape",
        group: "Grupo 3º Ano",
        description: "Este relatório detalhado apresenta a metodologia e os resultados da análise de bioindicadores em ecossistemas costeiros, evidenciando o impacto das atividades portuárias na saúde da água e na biodiversidade local.",
        authors: "A. Lemos, M. Laura, L. Beatriz, T. Paiva, M. Letícia, M. Eduarda, P. Martins.",
        downloadLink: "https://placehold.co/600x400/FFF/000?text=Download+PDF"
    },
    {
        title: "A Relação entre o Tráfego Portuário e a Ocorrência de Tubarões",
        group: "Grupo 2º Ano A",
        description: "Um estudo exploratório sobre os fatores ambientais e as possíveis correlações entre a expansão de Suape e o aumento de incidentes com tubarões na costa do Recife. Este documento é o primeiro passo para uma pesquisa mais aprofundada.",
        authors: "M. E. Gaspar, Mayra, M. Clara, A. B. Canto, Y. Melo, J. Beatriz, J. Azevedo.",
        downloadLink: "https://placehold.co/600x400/FFF/000?text=Download+PDF"
    },
    {
        title: "Biofiltração de Efluentes com Macroalgas em Suape",
        group: "Grupo 1º Ano",
        description: "Este relatório técnico descreve os experimentos e os resultados preliminares sobre a eficiência de espécies nativas de macroalgas na remoção de contaminantes de amostras de efluentes coletadas na área portuária.",
        authors: "F. Nascimento, G. Machado, G. Marinho, A. Vitória, H. Silva, B. Rodrigues.",
        downloadLink: "https://placehold.co/600x400/FFF/000?text=Download+PDF"
    }
];

const posters = [
    {
        title: "Pôster: Bioindicadores (3º Ano)",
        thumbnail: "https://placehold.co/600x400/FFF/000?text=Pôster+3A",
        fullImage: "https://placehold.co/1200x800/FFF/000?text=Pôster+3A+Detalhado",
        ariaLabel: "Pôster do Grupo 3º Ano sobre Bioindicadores de Suape"
    },
    {
        title: "Pôster: Rotas Alteradas (2º Ano A)",
        thumbnail: "https://placehold.co/600x400/FFF/000?text=Pôster+2A",
        fullImage: "https://placehold.co/1200x800/FFF/000?text=Pôster+2A+Detalhado",
        ariaLabel: "Pôster do Grupo 2º Ano A sobre a relação entre Porto e Tubarões"
    }
];

// Componente principal PublicacoesPage
const PublicacoesPage = () => {
    return (
        <div className="bg-gray-100 min-h-screen font-sans text-gray-800">
            {/* Main content container with padding */}
            <main className="p-6 md:p-12">
                <div className="max-w-6xl mx-auto">
                    {/* Breadcrumb Navigation */}
                    <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-500">
                        <ol className="flex space-x-2">
                            <li><Link to="/">Início</Link></li>
                            <li>/</li>
                            <li className="font-medium text-gray-700" aria-current="page">Publicações</li>
                        </ol>
                    </nav>

                    {/* Page Title and Subtitle */}
                    <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-2">
                        Nossas Publicações
                    </h1>
                    <p className="text-lg text-gray-600 mb-8">
                        Compartilhando conhecimento: ciência aberta e acessível para todos.
                    </p>

                    {/* Section: Publication Introduction */}
                    <section className="bg-white p-6 md:p-8 rounded-2xl shadow-lg mb-8">
                        <p className="text-gray-700 mb-4">
                            Nesta seção, você pode acessar artigos, resumos de congressos, pôsteres e relatórios produzidos pelos membros da LABIC. Nosso compromisso é compartilhar o conhecimento e os resultados de nossa pesquisa com a comunidade acadêmica e o público em geral, incentivando a colaboração e a transparência científica.
                        </p>
                        <div className="bg-blue-50 border-l-4 border-blue-500 text-blue-700 p-4 rounded-lg">
                            <p className="font-semibold">Dica:</p>
                            <p>Para obter mais detalhes sobre a metodologia e os dados brutos de cada pesquisa, visite as páginas <Link to="/referencial">Referencial</Link> e <Link to="/dados">Dados</Link>.</p>
                        </div>
                    </section>

                    {/* Section: Articles and Reports */}
                    <section className="bg-white p-6 md:p-8 rounded-2xl shadow-lg mb-8">
                        <h2 className="text-3xl font-bold text-blue-800 mb-6">
                            Artigos e Relatórios
                        </h2>
                        <ul className="space-y-6">
                            {publications.map((pub, index) => (
                                <li key={index} className="flex flex-col sm:flex-row items-start sm:items-center p-4 bg-gray-50 rounded-xl transition-all duration-300 hover:bg-gray-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-blue-600 flex-shrink-0 mb-4 sm:mb-0 sm:mr-6" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6z"/>
                                    </svg>
                                    <div className="flex-grow">
                                        <h3 className="text-xl font-bold text-gray-900 mb-1">{pub.title}</h3>
                                        <p className="text-sm font-medium text-gray-500 mb-2">
                                            <span className="font-semibold text-blue-700">{pub.group}</span>: {pub.description}
                                        </p>
                                        <p className="text-sm text-gray-500 mb-3">
                                            Autores: <span className="text-gray-600">{pub.authors}</span>
                                        </p>
                                        <a
                                            href={pub.downloadLink}
                                            className="inline-block bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                                            download
                                            aria-label={`Download do artigo sobre ${pub.title} em formato PDF`}
                                        >
                                            Download PDF
                                        </a>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </section>
                    
                    {/* Section: Posters and Congress Presentations */}
                    <section className="bg-white p-6 md:p-8 rounded-2xl shadow-lg">
                        <h2 className="text-3xl font-bold text-blue-800 mb-6">
                            Apresentações e Pôsteres
                        </h2>
                        <p className="text-gray-700 mb-6">
                            Nossos projetos são frequentemente apresentados em eventos e congressos científicos. Aqui você pode visualizar os pôsteres e slides que utilizamos para divulgar nossa pesquisa para a comunidade acadêmica.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {posters.map((poster, index) => (
                                <a href={poster.fullImage} key={index} className="group overflow-hidden rounded-xl shadow-md transition-transform duration-300 hover:scale-105" aria-label={poster.ariaLabel}>
                                    <img src={poster.thumbnail} alt={`Miniatura do ${poster.title}`} className="w-full h-48 object-cover object-center" />
                                    <span className="block p-4 text-center font-medium text-blue-800 bg-blue-50 transition-colors duration-300 group-hover:bg-blue-100">
                                        {poster.title}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
};

// Componente App para renderizar a página
const App = () => {
    return (
        <PublicacoesPage />
    );
};

export default App;
