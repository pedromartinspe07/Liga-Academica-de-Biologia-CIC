// src/pages/Resultados.jsx

import React from 'react';
import FadeInOnScroll from '../components/FadeInOnScroll';
import BarChart from '../components/BarChart';
import DownloadCSV from '../components/DownloadCSV';

// Dados de exemplo para os gráficos, organizados como objetos para fácil manipulação.
const dadosBioindicadores = {
    labels: ['Praia de Calhetas', 'Canal Principal', 'Ponto de Descarte'],
    data: [2, 8, 9],
    datasetLabel: 'Nível de Poluentes',
    yTitulo: 'Índice de Qualidade da Água',
    yMax: 10,
    yStep: 2,
    fileName: 'grafico1_bioindicadores.csv'
};

const dadosTubaroes = {
    labels: ['2018', '2019', '2020', '2021', '2022'],
    data: [3, 5, 4, 6, 7],
    datasetLabel: 'Incidência de Tubarões',
    yTitulo: 'Número de Registros',
    yMax: 10,
    yStep: 1,
    fileName: 'grafico2_tubaroes.csv'
};

const dadosPesquisa = {
    labels: ['Coleta de Dados', 'Análise de Laboratório', 'Relatório Final', 'Publicação'],
    data: [100, 75, 50, 25],
    datasetLabel: 'Progresso da Pesquisa',
    yTitulo: 'Porcentagem Concluída (%)',
    yMax: 100,
    yStep: 25,
    fileName: 'grafico3_pesquisa.csv'
};

const dadosModelagem = {
    labels: ['Modelo de Correntes', 'Modelo de Ondas', 'Modelo de Dispersão'],
    data: [85, 95, 70],
    datasetLabel: 'Precisão do Modelo',
    yTitulo: 'Precisão (%)',
    yMax: 100,
    yStep: 10,
    fileName: 'grafico4_modelagem.csv'
};

const Resultados = () => {
    // Definição de cores para os gráficos usando Tailwind
    const primaryColor = '#004d40';
    const accentGreen = '#81c784';
    const accentBrown = '#a1887f';
    const accentRed = '#D45D5D';

    /**
     * Função utilitária para converter os dados do gráfico em um formato de linhas para CSV.
     * @param {object} data - O objeto de dados do gráfico.
     * @returns {Array<Array<any>>} As linhas formatadas para o CSV.
     */
    const getRowsFromData = (data) => {
        return data.labels.map((label, i) => [label, data.data[i]]);
    };

    return (
        <main className="container mx-auto py-8 px-4">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Resultados</h1>

            {/* Seção de Bioindicadores */}
            <section className="mb-16">
                <FadeInOnScroll>
                    <div className="flex flex-col gap-4 items-center">
                        <BarChart
                            title="Bioindicadores da Qualidade da Água"
                            {...dadosBioindicadores}
                            backgroundColor={accentRed}
                            borderColor={accentRed}
                        />
                        <DownloadCSV
                            headers={['Local', dadosBioindicadores.datasetLabel]}
                            rows={getRowsFromData(dadosBioindicadores)}
                            nomeArquivo={dadosBioindicadores.fileName}
                        />
                    </div>
                </FadeInOnScroll>
            </section>

            {/* Seção de Tubarões e Rotas */}
            <section className="mb-16">
                <FadeInOnScroll>
                    <div className="flex flex-col gap-4 items-center">
                        <BarChart
                            title="Tubarões e Rotas"
                            {...dadosTubaroes}
                            backgroundColor={primaryColor}
                            borderColor={primaryColor}
                        />
                        <DownloadCSV
                            headers={['Local', dadosTubaroes.datasetLabel]}
                            rows={getRowsFromData(dadosTubaroes)}
                            nomeArquivo={dadosTubaroes.fileName}
                        />
                    </div>
                </FadeInOnScroll>
            </section>
            
            {/* Seção de Progresso da Pesquisa */}
            <section className="mb-16">
                <FadeInOnScroll>
                    <div className="flex flex-col gap-4 items-center">
                        <BarChart
                            title="Progresso da Pesquisa"
                            {...dadosPesquisa}
                            backgroundColor={accentGreen}
                            borderColor={accentGreen}
                        />
                        <DownloadCSV
                            headers={['Etapa', dadosPesquisa.datasetLabel]}
                            rows={getRowsFromData(dadosPesquisa)}
                            nomeArquivo={dadosPesquisa.fileName}
                        />
                    </div>
                </FadeInOnScroll>
            </section>

            {/* Seção de Modelagem */}
            <section className="mb-16">
                <FadeInOnScroll>
                    <div className="flex flex-col gap-4 items-center">
                        <BarChart
                            title="Modelagem de Dispersão"
                            {...dadosModelagem}
                            backgroundColor={accentBrown}
                            borderColor={accentBrown}
                        />
                        <DownloadCSV
                            headers={['Modelo', dadosModelagem.datasetLabel]}
                            rows={getRowsFromData(dadosModelagem)}
                            nomeArquivo={dadosModelagem.fileName}
                        />
                    </div>
                </FadeInOnScroll>
            </section>
        </main>
    );
};

export default Resultados;
