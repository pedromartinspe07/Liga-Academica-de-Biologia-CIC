// src/components/DadosPage.jsx

import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';

// Definição dos dados das tabelas em arrays de objetos
const tabelaAguaData = [
    { ano: 2015, fosfato: 0.25, nitrato: 1.12, coliformes: 5000 },
    { ano: 2017, fosfato: 0.31, nitrato: 1.45, coliformes: 7500 },
    { ano: 2020, fosfato: 0.48, nitrato: 1.85, coliformes: 12000 }
];

const tabelaCO2Data = [
    { ano: 2015, emissoes: "120.500" },
    { ano: 2018, emissoes: "155.300" },
    { ano: 2021, emissoes: "180.900" }
];

const tabelaPIBData = [
    { ano: 2015, pib: 50 },
    { ano: 2018, pib: 68 },
    { ano: 2021, pib: 82 }
];

// Função genérica para exportar dados para CSV
const exportToCSV = (data, filename) => {
    // Obter as chaves do primeiro objeto para usar como cabeçalho
    const header = Object.keys(data[0]);
    // Mapear os dados para um array de linhas, cada uma com os valores em string
    const rows = data.map(obj => header.map(key => `"${String(obj[key]).replace(/"/g, '""')}"`).join(','));
    // Unir o cabeçalho e as linhas
    const csvString = [header.join(','), ...rows].join('\n');

    const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");

    if (link.download !== undefined) {
        const url = URL.createObjectURL(blob);
        link.setAttribute("href", url);
        link.setAttribute("download", filename);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
};

const DadosPage = () => {
    // Funções de download otimizadas com useCallback
    const handleDownloadAgua = useCallback(() => {
        exportToCSV(tabelaAguaData, 'qualidade_agua_suape.csv');
    }, []);

    const handleDownloadCO2 = useCallback(() => {
        exportToCSV(tabelaCO2Data, 'emissoes_co2_suape.csv');
    }, []);

    const handleDownloadPIB = useCallback(() => {
        exportToCSV(tabelaPIBData, 'pib_suape.csv');
    }, []);

    return (
        <main className="page-content">
            <div className="container">
                <nav aria-label="Breadcrumb" className="breadcrumb-nav">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Início</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Dados</li>
                    </ol>
                </nav>

                <h1 className="page-title">Dados Abertos da Pesquisa</h1>

                <section className="content-section">
                    <p className="section-description">Em busca da transparência e da colaboração científica, disponibilizamos aqui as bases de dados e materiais brutos utilizados em nossos projetos. Os arquivos estão em formatos acessíveis e prontos para download. Encorajamos o uso desses dados para fins de pesquisa, ensino e análise, com a devida citação da fonte.</p>
                    <div className="info-box" role="alert">
                        <p><strong>Atenção:</strong> Os dados são fornecidos "como estão". Para entender a metodologia de coleta e a análise dos resultados, por favor, consulte a seção <Link to="/resultados">Resultados</Link> e <Link to="/publicacoes">Publicações</Link>.</p>
                    </div>
                </section>

                <section className="content-section data-tables-section">
                    <h2 className="section-title">Bases de Dados Disponíveis</h2>
                    <p className="section-description">Acesse e baixe os dados brutos utilizados em nossos estudos. Clique no botão "Baixar CSV" em cada tabela.</p>

                    {/* Tabela de Qualidade da Água */}
                    <div className="data-table-container">
                        <h3>Tabela 1: Qualidade da Água na Baía de Suape</h3>
                        <p><strong>Fonte:</strong> Análises de relatórios anuais da CPRH (Agência Estadual de Meio Ambiente de Pernambuco).</p>
                        <table className="data-table" id="tabela-agua">
                            <thead>
                                <tr>
                                    <th scope="col">Ano</th>
                                    <th scope="col">Nível de Fosfato (mg/L)</th>
                                    <th scope="col">Nível de Nitrato (mg/L)</th>
                                    <th scope="col">Coliformes Fecais (NMP/100mL)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tabelaAguaData.map((row, index) => (
                                    <tr key={index}>
                                        <td data-label="Ano">{row.ano}</td>
                                        <td data-label="Nível de Fosfato (mg/L)">{row.fosfato}</td>
                                        <td data-label="Nível de Nitrato (mg/L)">{row.nitrato}</td>
                                        <td data-label="Coliformes Fecais (NMP/100mL)">{row.coliformes}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <button className="cta-button" onClick={handleDownloadAgua}>Baixar CSV</button>
                    </div>

                    {/* Tabela de Emissões de CO₂ */}
                    <div className="data-table-container">
                        <h3>Tabela 2: Emissões de Gás Carbônico (CO₂)</h3>
                        <p><strong>Fonte:</strong> Estimativas baseadas em relatórios do SINDPE (Sindicato das Indústrias de Pernambuco) e estudos acadêmicos sobre a pegada de carbono do setor industrial.</p>
                        <table className="data-table" id="tabela-co2">
                            <thead>
                                <tr>
                                    <th scope="col">Ano</th>
                                    <th scope="col">Emissões de CO₂ (toneladas)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tabelaCO2Data.map((row, index) => (
                                    <tr key={index}>
                                        <td data-label="Ano">{row.ano}</td>
                                        <td data-label="Emissões de CO₂ (toneladas)">{row.emissoes}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <button className="cta-button" onClick={handleDownloadCO2}>Baixar CSV</button>
                    </div>

                    {/* Tabela de Crescimento Econômico (PIB) */}
                    <div className="data-table-container">
                        <h3>Tabela 3: Crescimento Econômico (PIB Regional)</h3>
                        <p><strong>Fonte:</strong> Dados agregados do IBGE e estudos sobre a economia regional de Pernambuco.</p>
                        <table className="data-table" id="tabela-pib">
                            <thead>
                                <tr>
                                    <th scope="col">Ano</th>
                                    <th scope="col">PIB da Região de Suape (bilhões de R$)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tabelaPIBData.map((row, index) => (
                                    <tr key={index}>
                                        <td data-label="Ano">{row.ano}</td>
                                        <td data-label="PIB da Região de Suape (bilhões de R$)">{row.pib}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <button className="cta-button" onClick={handleDownloadPIB}>Baixar CSV</button>
                    </div>

                    <div className="content-section">
                        <h2>Metadados e Metodologia de Coleta</h2>
                        <p>Os dados apresentados são dados secundários compilados de fontes públicas e confiáveis. A coleta foi realizada em um período de 5 meses e os valores foram arredondados para facilitar a leitura. Os valores exatos e a metodologia de coleta podem ser encontrados no arquivo de metadados incluído no pacote de download.</p>
                        <p>Baixe os dados completos e os metadados em formatos abertos:</p>
                        <div className="data-links">
                            <a href="assets/data/dados_completos.csv" className="primary-cta" download>Pacote completo (.csv)</a>
                            <a href="assets/data/dados_completos.xlsx" className="primary-cta" download>Pacote completo (.xlsx)</a>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default DadosPage;
