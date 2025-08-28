// src/pages/Resultados.js
import React from 'react';
import FadeInOnScroll from './FadeInOnScroll';
import BarChart from '../components/BarChart';
import DownloadCSV from '../components/DownloadCSV';

// Dados dos seus gráficos, agora em objetos JavaScript normais
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

// ... e assim por diante para os outros gráficos

const Resultados = () => {
    const primaryColor = '#004d40';
    const accentGreen = '#81c784';
    const accentBrown = '#a1887f';
    const accentRed = '#D45D5D';

    const getRowsFromData = (data) => {
        return data.labels.map((label, i) => [label, data.data[i]]);
    };

    return (
        <main>
            <FadeInOnScroll>
                <div className="chart-wrapper">
                    <BarChart
                        title="Bioindicadores da Qualidade da Água"
                        {...dadosBioindicadores} // Espalha os dados do objeto como props
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

            <FadeInOnScroll>
                <div className="chart-wrapper">
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
            
            {/* Adicione os outros gráficos aqui */}
        </main>
    );
};

export default Resultados;