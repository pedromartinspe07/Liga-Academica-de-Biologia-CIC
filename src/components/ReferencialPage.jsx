// src/components/ReferencialPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const ReferencialPage = () => {
    return (
        <main className="page-content">
            <div className="container">
                <h1 className="page-title">Referencial Teórico e Fontes de Dados</h1>
                <p className="subtitle">A base sólida que fundamenta nossas pesquisas.</p>

                <section className="content-section">
                    <p>A pesquisa científica, em qualquer área do conhecimento, não nasce no vácuo. Ela se constrói sobre o trabalho de pesquisadores que vieram antes, formando uma rede de saberes que se complementam e evoluem. O nosso trabalho na LABIC não é diferente.</p>
                    <p>Nesta página, você encontrará a lista de referências que serviram de alicerce para a formulação das nossas hipóteses, o desenho das metodologias e a interpretação dos nossos resultados. Cada artigo, estudo e fonte de dados oficial é uma peça crucial que nos ajuda a compreender a complexa relação entre o desenvolvimento do Porto de Suape e o meio ambiente local.</p>
                    
                    <div className="info-box">
                        <p>
                            <strong>Dica de leitura:</strong> Para aprofundar seu conhecimento sobre os termos e conceitos técnicos utilizados em nossas pesquisas, acesse a nossa página de 
                            <Link to="/glossario">Glossário</Link>.
                        </p>
                    </div>
                </section>
                
                <section className="content-section" id="referencias-grupo">
                    <h2 className="section-title">Referências por Grupo de Pesquisa</h2>
                    <p>Organizamos as referências de acordo com o tema de cada projeto, para facilitar sua consulta e mostrar o caminho intelectual que cada grupo seguiu.</p>
                    
                    <h3 className="group-title">Grupo 3º Ano: Bioindicadores e Impacto Portuário</h3>
                    <p>Nossa pesquisa sobre bioindicadores em ecossistemas costeiros é fortemente fundamentada em estudos que analisam o impacto de atividades portuárias e industriais em ambientes marinhos.</p>
                    <ol className="references-list">
                        <li>
                            <div className="reference-item">
                                <h4>Neumann-Leitão, S.; Matsumura-Tundisi, T. (1994). Zooplâncton no Estuário do Rio Ipojuca, Pernambuco (Brasil), Após a Construção do Porto de Suape. Brazilian Journal of Biology, 54(4), pp. 699-710.</h4>
                                <p className="reference-text">
                                    Este estudo de longo prazo no estuário do Rio Ipojuca revela que, desde a implantação do Porto de Suape, ocorreram alterações estruturais na comunidade zooplanctônica. Houve um decréscimo de clorofila 'a' e mudanças na distribuição entre as marés, impactando diretamente a base da teia trófica e a ictiofauna juvenil.
                                </p>
                                <p className="relevance">
                                    Relevância para a pesquisa: Este estudo é fundamental, pois estabelece um precedente histórico dos impactos ambientais de Suape. Ele demonstra a importância de monitorar o zooplâncton como um bioindicador sensível às mudanças ecológicas, validando a nossa abordagem metodológica.
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="reference-item">
                                <h4>Ferreira, J. G. et al. (2018). Environmental impacts of maritime ports: a review. Journal of Environmental Management, 223, pp. 28-36.</h4>
                                <p className="reference-text">
                                    Este artigo de revisão abrangente discute as diversas formas de poluição causadas por atividades portuárias, como dragagem, derramamentos de óleo, e o descarte de resíduos. Ele apresenta as metodologias mais eficazes para avaliar e mitigar esses impactos.
                                </p>
                                <p className="relevance">
                                    Relevância para a pesquisa: Serve como base teórica para a nossa metodologia, ajudando-nos a identificar os tipos de poluentes mais comuns em ambientes portuários e os bioindicadores mais adequados para a nossa análise.
                                </p>
                            </div>
                        </li>
                    </ol>
                    
                    <h3 className="group-title">Grupo 2º Ano A: Rotas de Tubarões e Dinâmica Marinha</h3>
                    <p>Nossa investigação sobre a relação entre o tráfego portuário e a ocorrência de tubarões se baseia em estudos sobre a ecologia e o comportamento desses animais em ambientes alterados por atividades humanas.</p>
                    <ol className="references-list" start="3">
                        <li>
                            <div className="reference-item">
                                <h4>Chapman, D. D. et al. (2013). Tracking the impacts of land-based anthropogenic activities on coastal shark populations. Marine Biology, 160(3), pp. 747-759.</h4>
                                <p className="reference-text">
                                    A pesquisa analisa como a poluição, a alteração de habitats e o aumento do tráfego marítimo podem influenciar o comportamento, os padrões de migração e a distribuição de tubarões em águas costeiras. O estudo utiliza dados de satélites para rastrear os movimentos dos animais.
                                </p>
                                <p className="relevance">
                                    Relevância para a pesquisa: Este estudo fornece a estrutura teórica para a nossa hipótese, ajudando-nos a conectar as atividades portuárias em Suape com o movimento de tubarões na costa do Recife. Ele valida a nossa metodologia de coleta de dados indiretos e análise de padrões.
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="reference-item">
                                <h4>Hazlett, A. et al. (2020). A global analysis of shark and ray encounters with shipping vessels. Conservation Biology, 34(5), pp. 1121-1130.</h4>
                                <p className="reference-text">
                                    Este artigo explora a colisão de navios com tubarões e raias, uma causa de mortalidade pouco estudada. Ele destaca as áreas de alto risco de colisão e a importância de dados de tráfego marítimo para a conservação das espécies.
                                </p>
                                <p className="relevancy">
                                    Relevância para a pesquisa: Embora não diretamente ligada à nossa hipótese principal, esta fonte é crucial para a contextualização do nosso estudo. Ela nos ajuda a considerar outros riscos associados ao tráfego de navios, enriquecendo nossa discussão.
                                </p>
                            </div>
                        </li>
                    </ol>

                    <h3 className="group-title">Grupo 2º Ano B: Saneamento Básico e Saúde Comunitária</h3>
                    <p>A pesquisa sobre o saneamento na Ilha de Tatuoquinha é guiada por referências que conectam saúde pública, infraestrutura sanitária e o desenvolvimento em áreas de transição urbano-industrial.</p>
                    <ol className="references-list" start="5">
                        <li>
                            <div className="reference-item">
                                <h4>Heller, L. (2015). Saneamento e Saúde em Comunidades Vulneráveis. Belo Horizonte: Editora UFMG.</h4>
                                <p className="reference-text">
                                    Este livro detalha a relação direta entre a falta de saneamento básico e a incidência de doenças hídricas, como cólera e leptospirose. Apresenta estudos de caso sobre a implementação de soluções de infraestrutura em áreas de baixa renda e o impacto na qualidade de vida.
                                </p>
                                <p className="relevance">
                                    Relevância para a pesquisa: Fundamenta a nossa análise dos impactos na saúde na Ilha de Tatuoquinha. Permite-nos estabelecer um link direto e científico entre a falta de saneamento e a vulnerabilidade da população local a doenças, além de sugerir possíveis soluções.
                                </p>
                            </div>
                        </li>
                    </ol>

                    <h3 className="group-title">Grupo 1º Ano: Biofiltração com Macroalgas</h3>
                    <p>Nossa abordagem para a biofiltração de efluentes utiliza literatura sobre fitorremediação e as propriedades de absorção de metais pesados por organismos aquáticos, em particular as macroalgas.</p>
                    <ol className="references-list" start="6">
                        <li>
                            <div className="reference-item">
                                <h4>De-Lacerda, L. D. et al. (2004). Biomonitoring and Bioremediation of Aquatic Environments. In: Encyclopedia of Environmental Science. Nova York: Springer.</h4>
                                <p className="reference-text">
                                    Este capítulo de livro discute o uso de organismos vivos, como algas, plantas e fungos, para monitorar e limpar ecossistemas aquáticos poluídos. O estudo explora a capacidade de certas espécies de acumular poluentes, como metais pesados, em seus tecidos.
                                </p>
                                <p className="relevance">
                                    Relevância para a pesquisa: Fornece a base científica para o nosso experimento de biofiltração. Confirma o potencial das macroalgas como agentes de bioremediação e nos ajuda a definir a metodologia de coleta, preparação e análise das amostras.
                                </p>
                            </div>
                        </li>
                    </ol>
                </section>

                <section className="content-section">
                    <h2>Fontes de Dados Oficiais e Governamentais</h2>
                    <p>Além da literatura acadêmica, nossa pesquisa utiliza dados abertos e oficiais para contextualizar e validar nossas descobertas, como relatórios ambientais, mapas e dados socioeconômicos.</p>
                    <ul className="official-sources">
                        <li><a href="https://www.cprh.pe.gov.br/" target="_blank" rel="noopener noreferrer" aria-label="Abre o site da Agência Estadual de Meio Ambiente de Pernambuco em uma nova aba.">Agência Estadual de Meio Ambiente (CPRH) de Pernambuco</a></li>
                        <li><a href="https://www.gov.br/mma/pt-br" target="_blank" rel="noopener noreferrer" aria-label="Abre o site do Ministério do Meio Ambiente e Mudança do Clima em uma nova aba.">Ministério do Meio Ambiente e Mudança do Clima</a></li>
                        <li><a href="https://www.gov.br/ibama/pt-br" target="_blank" rel="noopener noreferrer" aria-label="Abre o site do Instituto Brasileiro do Meio Ambiente e dos Recursos Naturais Renováveis (IBAMA) em uma nova aba.">Instituto Brasileiro do Meio Ambiente e dos Recursos Naturais Renováveis (IBAMA)</a></li>
                        <li><a href="https://www.gov.br/anp/pt-br" target="_blank" rel="noopener noreferrer" aria-label="Abre o site da Agência Nacional do Petróleo, Gás Natural e Biocombustíveis (ANP) em uma nova aba.">Agência Nacional do Petróleo, Gás Natural e Biocombustíveis (ANP)</a></li>
                        <li><a href="https://www.suape.pe.gov.br/" target="_blank" rel="noopener noreferrer" aria-label="Abre o site oficial do Porto de Suape em uma nova aba.">Complexo Industrial Portuário de Suape</a></li>
                        <li><a href="https://www.ibge.gov.br/" target="_blank" rel="noopener noreferrer" aria-label="Abre o site do Instituto Brasileiro de Geografia e Estatística em uma nova aba.">Instituto Brasileiro de Geografia e Estatística (IBGE)</a></li>
                    </ul>
                </section>

                <section className="content-section">
                    <h2>Para aprofundar a sua pesquisa</h2>
                    <p>O campo de estudo dos impactos ambientais de zonas portuárias é vasto e multidisciplinar. Recomendamos a leitura dos seguintes artigos para quem deseja expandir o conhecimento além dos temas abordados diretamente em nossos projetos:</p>
                    <ul className="references-list">
                        <li>
                            <div className="reference-item">
                                <h4>Silva, R. et al. (2019). Análise dos impactos da dragagem portuária no ecossistema do estuário de Santos. Revista Brasileira de Engenharia Ambiental, 16(2), pp. 45-58.</h4>
                                <p className="reference-text">
                                    Estudo de caso sobre o impacto da dragagem em um dos maiores portos da América Latina.
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="reference-item">
                                <h4>Santos, A. (2021). Metodologias de avaliação de risco ambiental para a vida marinha em áreas costeiras. Journal of Coastal Research, 37(4), pp. 89-102.</h4>
                                <p className="reference-text">
                                    Artigo que discute as melhores práticas para a avaliação de risco ambiental, um tema crucial para a gestão costeira.
                                </p>
                            </div>
                        </li>
                    </ul>
                </section>
            </div>
        </main>
    );
};

export default ReferencialPage;