// src/components/BarChart.jsx

import React, { useRef, useEffect } from 'react';
// Importa a biblioteca Chart.js, permitindo o uso de gráficos.
import Chart from 'chart.js/auto';

/**
 * Componente que renderiza um gráfico de barras usando a biblioteca Chart.js.
 * Ele gerencia o ciclo de vida do gráfico para garantir que ele seja
 * corretamente criado e destruído.
 *
 * @param {object} props - As propriedades do componente.
 * @param {string} props.title - Título principal do gráfico.
 * @param {Array<string>} props.labels - Rótulos para o eixo X.
 * @param {Array<number>} props.data - Dados para o eixo Y.
 * @param {string} props.datasetLabel - Rótulo para o conjunto de dados.
 * @param {string} props.yTitulo - Título para o eixo Y.
 * @param {number} props.yMax - Valor máximo do eixo Y.
 * @param {number} props.yStep - Tamanho do passo para as ticks do eixo Y.
 * @param {string} props.backgroundColor - Cor de fundo das barras.
 * @param {string} props.borderColor - Cor da borda das barras.
 */
const BarChart = ({
    title,
    labels,
    data,
    datasetLabel,
    yTitulo,
    yMax,
    yStep,
    backgroundColor,
    borderColor
}) => {
    // Referência para o elemento <canvas> do DOM.
    const chartRef = useRef(null);
    // Referência para a instância do Chart.js.
    const chartInstance = useRef(null);

    useEffect(() => {
        // Se uma instância do gráfico já existe, a destrói para evitar duplicatas.
        if (chartInstance.current) {
            chartInstance.current.destroy();
        }

        // Obtém o contexto de renderização 2D do canvas.
        const ctx = chartRef.current.getContext('2d');
        
        // Cria uma nova instância do gráfico com as props fornecidas.
        chartInstance.current = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: datasetLabel,
                    data: data,
                    backgroundColor: backgroundColor,
                    borderColor: borderColor,
                    borderWidth: 1,
                    borderRadius: 6
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: title,
                        font: { size: 18 }
                    },
                    legend: { display: false }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        min: 0,
                        max: yMax,
                        ticks: { stepSize: yStep, color: '#333' },
                        title: {
                            display: true,
                            text: yTitulo,
                            font: { size: 14 }
                        }
                    },
                    x: {
                        ticks: { color: '#333' },
                        title: {
                            display: true,
                            text: 'Locais de Amostragem',
                            font: { size: 14 }
                        }
                    }
                }
            }
        });

        // Retorna uma função de limpeza.
        // Isso garante que o gráfico seja destruído quando o componente é desmontado,
        // evitando vazamentos de memória.
        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, [title, labels, data, datasetLabel, yTitulo, yMax, yStep, backgroundColor, borderColor]); // Dependências do useEffect. O gráfico é recriado se qualquer uma dessas props mudar.

    return (
        // Substitui a classe CSS customizada por classes utilitárias do Tailwind.
        // Adiciona padding, fundo branco, cantos arredondados e sombra.
        <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto h-[400px]">
            <canvas ref={chartRef}></canvas>
        </div>
    );
};

export default BarChart;
