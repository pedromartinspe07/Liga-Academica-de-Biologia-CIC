// src/components/BarChart.js
import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto'; // Importa automaticamente todos os componentes necessários

// O componente recebe todas as opções do gráfico como props
const BarChart = ({ title, labels, data, datasetLabel, yTitulo, yMax, yStep, backgroundColor, borderColor, downloadFileName }) => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        // Se já existe uma instância do gráfico, a destrói para evitar conflitos
        if (chartInstance.current) {
            chartInstance.current.destroy();
        }

        const ctx = chartRef.current.getContext('2d');
        
        // Cria uma nova instância do gráfico Chart.js
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

        // Retorna uma função de limpeza para o useEffect
        // Isso garante que o gráfico seja destruído corretamente quando o componente for removido
        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, [title, labels, data, datasetLabel, yTitulo, yMax, yStep, backgroundColor, borderColor]); // Array de dependências para rodar o efeito quando os dados mudarem

    return (
        <div className="chart-container">
            <canvas ref={chartRef}></canvas>
        </div>
    );
};

export default BarChart;