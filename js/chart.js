document.addEventListener('DOMContentLoaded', () => {

    // Dados para os gráficos dos projetos da LABIC
    // Grupo 3º Ano A: Bioindicadores da Qualidade da Água
    const bioindicadoresData = {
        labels: ['Praia de Calhetas', 'Ponto de Descarte (Estuário)', 'Canal Principal', 'Praia de Suape'],
        datasets: [{
            label: 'Nível de Poluentes (Índice de Qualidade)',
            data: [2.5, 8.1, 6.7, 4.3],
            backgroundColor: [
                'rgba(75, 192, 192, 0.7)', // Cor para o ponto de controle
                'rgba(255, 99, 132, 0.7)',
                'rgba(255, 159, 64, 0.7)',
                'rgba(54, 162, 235, 0.7)'
            ],
            borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 1
        }]
    };

    // Grupo 2º Ano A: Tubarões e Rotas
    const sharksData = {
        labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'],
        datasets: [{
            label: 'Incidentes com Tubarões',
            data: [1, 2, 4, 3, 5, 7, 8, 10, 11, 13],
            backgroundColor: 'rgba(255, 99, 132, 0.7)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 2,
            tension: 0.4,
            fill: false
        },
        {
            label: 'Volume de Carga (milhões de toneladas)',
            data: [15, 18, 22, 25, 28, 30, 32, 35, 38, 41],
            backgroundColor: 'rgba(54, 162, 235, 0.7)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 2,
            tension: 0.4,
            fill: false,
            // Permite usar um eixo Y secundário para esta série de dados
            yAxisID: 'y1' 
        }]
    };

    // Grupo 2º Ano B: Saneamento na Ilha de Tatuoquinha
    const saneamentoData = {
        labels: ['Sem Acesso', 'Acesso Parcial', 'Acesso Completo'],
        datasets: [{
            label: 'Porcentagem de Moradores',
            data: [65, 25, 10],
            backgroundColor: [
                'rgba(255, 99, 132, 0.7)',
                'rgba(255, 159, 64, 0.7)',
                'rgba(75, 192, 192, 0.7)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 1
        }]
    };
    
    // Grupo 1º Ano: Biofiltração com Macroalgas
    const macroalgasData = {
        labels: ['Espécie A', 'Espécie B', 'Espécie C'],
        datasets: [{
            label: 'Remoção de Chumbo (%)',
            data: [45, 80, 60],
            backgroundColor: 'rgba(54, 162, 235, 0.7)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        },
        {
            label: 'Remoção de Cádmio (%)',
            data: [30, 75, 50],
            backgroundColor: 'rgba(255, 159, 64, 0.7)',
            borderColor: 'rgba(255, 159, 64, 1)',
            borderWidth: 1
        }]
    };

    // Opções de configuração para todos os gráficos
    const defaultOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                display: true,
                position: 'top',
            },
            tooltip: {
                mode: 'index',
                intersect: false,
            }
        }
    };
    
    // Opções específicas para o gráfico de tubarões, com dois eixos Y
    const sharksOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                type: 'linear',
                display: true,
                position: 'left',
                title: {
                    display: true,
                    text: 'Número de Incidentes'
                }
            },
            y1: {
                beginAtZero: true,
                type: 'linear',
                display: true,
                position: 'right',
                title: {
                    display: true,
                    text: 'Volume de Carga (milhões de toneladas)'
                },
                grid: {
                    drawOnChartArea: false, // Oculta as linhas de grade para este eixo
                },
            }
        },
        plugins: {
            legend: {
                display: true,
                position: 'top',
            },
            tooltip: {
                mode: 'index',
                intersect: false,
            }
        }
    };

    // Opções específicas para o gráfico de saneamento (pizza)
    const saneamentoOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        let label = context.label || '';
                        if (label) {
                            label += ': ';
                        }
                        if (context.parsed !== null) {
                            label += context.parsed + '%';
                        }
                        return label;
                    }
                }
            }
        }
    };

    // --- Criação dos Gráficos ---

    // Gráfico de Bioindicadores
    const bioindicadoresCanvas = document.getElementById('bioindicadoresChart');
    if (bioindicadoresCanvas) {
        new Chart(bioindicadoresCanvas, {
            type: 'bar',
            data: bioindicadoresData,
            options: defaultOptions
        });
    }

    // Gráfico de Tubarões e Rotas
    const sharksCanvas = document.getElementById('sharksChart');
    if (sharksCanvas) {
        new Chart(sharksCanvas, {
            type: 'line',
            data: sharksData,
            options: sharksOptions
        });
    }

    // Gráfico de Saneamento
    const saneamentoCanvas = document.getElementById('saneamentoChart');
    if (saneamentoCanvas) {
        new Chart(saneamentoCanvas, {
            type: 'pie',
            data: saneamentoData,
            options: saneamentoOptions
        });
    }
    
    // Gráfico de Biofiltração
    const macroalgasCanvas = document.getElementById('macroalgasChart');
    if (macroalgasCanvas) {
        new Chart(macroalgasCanvas, {
            type: 'bar',
            data: macroalgasData,
            options: defaultOptions
        });
    }
});
