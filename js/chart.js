// js/chart.js - Versão compatível com GitHub Pages
console.log('Chart.js script carregado');

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM carregado, verificando Chart.js...');

    if (typeof Chart === 'undefined') {
        console.error('Chart.js não foi carregado. Verifique o CDN.');
        return;
    }

    // Função para pegar cores do CSS
    function getCssVariable(variable) {
        return getComputedStyle(document.documentElement).getPropertyValue(variable).trim();
    }

    const primaryColor = getCssVariable('--primary-color') || '#004d40';
    const accentGreen = getCssVariable('--accent-color-green') || '#81c784';
    const accentBrown = getCssVariable('--accent-color-brown') || '#a1887f';
    const accentRed = '#D45D5D';

    console.log('Cores carregadas:', { primaryColor, accentGreen, accentBrown, accentRed });

    // Função exportar CSV
    function exportarCSV(headers, rows, nomeArquivo) {
        let csv = headers.join(',') + '\n';
        rows.forEach(row => csv += row.join(',') + '\n');
        const blob = new Blob([csv], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = nomeArquivo;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    // ================================
    // Função genérica para gráficos
    // ================================
    function criarGraficoBarras(ctxId, titulo, labels, data, datasetLabel, yTitulo, yMax, yStep, cor, arquivoCSV) {
        const ctx = document.getElementById(ctxId);
        if (!ctx) {
            console.error(`Elemento ${ctxId} não encontrado`);
            return;
        }

        const chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: datasetLabel,
                    data: data,
                    backgroundColor: cor,
                    borderColor: cor,
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
                        text: titulo,
                        font: { size: 18, family: 'Montserrat' }
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
                            font: { size: 14, family: 'Open Sans' }
                        }
                    },
                    x: {
                        ticks: { color: '#333' },
                        title: {
                            display: true,
                            text: 'Locais de Amostragem',
                            font: { size: 14, family: 'Open Sans' }
                        }
                    }
                }
            }
        });

        // Botão CSV
        const btn = document.getElementById(`download-${ctxId}`);
        if (btn) {
            btn.addEventListener('click', () => {
                const headers = ['Local', datasetLabel];
                const rows = labels.map((l, i) => [l, data[i]]);
                exportarCSV(headers, rows, arquivoCSV);
            });
        }
    }

    // ===========================================
    // Gráfico 1: Bioindicadores da Qualidade da Água
    // ===========================================
    criarGraficoBarras(
        'bioindicadoresChart',
        'Bioindicadores da Qualidade da Água - Porto de Suape',
        ['Praia de Calhetas', 'Canal Principal', 'Ponto de Descarte'],
        [2, 8, 9],
        'Nível de Poluentes',
        'Índice de Qualidade da Água',
        10, 2,
        accentRed,
        'grafico1_bioindicadores.csv'
    );

    // ===========================================
    // Gráfico 2: Tubarões e Rotas
    // ===========================================
    criarGraficoBarras(
        'sharksChart',
        'Tubarões e Rotas - Porto de Suape',
        ['2018', '2019', '2020', '2021', '2022'],
        [3, 5, 4, 6, 7],
        'Incidência de Tubarões',
        'Número de Registros',
        10, 1,
        primaryColor,
        'grafico2_tubaroes.csv'
    );

    // ===========================================
    // Gráfico 3: Saneamento na Comunidade Local
    // ===========================================
    criarGraficoBarras(
        'saneamentoChart',
        'Saneamento na Comunidade Local - Porto de Suape',
        ['Suape', 'Recife', 'Olinda', 'Cabo de Santo Agostinho'],
        [70, 85, 80, 60],
        'Cobertura de Saneamento (%)',
        'Percentual da População Atendida',
        100, 20,
        accentGreen,
        'grafico3_saneamento.csv'
    );

    // ===========================================
    // Gráfico 4: Biofiltração com Macroalgas
    // ===========================================
    criarGraficoBarras(
        'macroalgasChart',
        'Biofiltração com Macroalgas - Porto de Suape',
        ['Ponto A', 'Ponto B', 'Ponto C', 'Ponto D'],
        [12, 18, 25, 15],
        'Densidade de Macroalgas',
        'Unidades por m²',
        30, 5,
        accentBrown,
        'grafico4_macroalgas.csv'
    );
});
