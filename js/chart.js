document.addEventListener('DOMContentLoaded', () => {
    
    // Dados fictícios para os gráficos
    const bioindicadoresData = {
        labels: ['Ponto A', 'Ponto B', 'Ponto C', 'Ponto D'],
        datasets: [{
            label: 'Nível de Poluente (ppm)',
            data: [25, 45, 80, 65],
            backgroundColor: [
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(255, 99, 132, 0.6)',
                'rgba(75, 192, 192, 0.6)'
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 1
        }]
    };

    const sharksData = {
        labels: ['2019', '2020', '2021', '2022', '2023'],
        datasets: [{
            label: 'Incidentes com Tubarões',
            data: [2, 3, 5, 8, 10],
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 2,
            tension: 0.4,
            fill: false
        }]
    };

    // Opções de configuração para os gráficos
    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };

    // Cria o gráfico de Bioindicadores
    const bioindicadoresCanvas = document.getElementById('bioindicadoresChart');
    if (bioindicadoresCanvas) {
        new Chart(bioindicadoresCanvas, {
            type: 'bar',
            data: bioindicadoresData,
            options: chartOptions
        });
    }

    // Cria o gráfico de Tubarões
    const sharksCanvas = document.getElementById('sharksChart');
    if (sharksCanvas) {
        new Chart(sharksCanvas, {
            type: 'line',
            data: sharksData,
            options: chartOptions
        });
    }
});
