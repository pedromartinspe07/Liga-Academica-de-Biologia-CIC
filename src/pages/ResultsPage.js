// src/pages/Results.js
import React from 'react';
import Chart from '../components/Chart';
import Card from '../components/Card';

// Dados para os gráficos
const data3rdYear = {
  labels: ['Ponto A', 'Ponto B', 'Ponto C', 'Ponto D'],
  datasets: [
    {
      label: 'Nível de Poluição (ppm)',
      data: [85, 120, 150, 95],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      borderColor: 'rgb(255, 99, 132)',
      borderWidth: 1,
    },
  ],
};

const data2ndYearA = {
  labels: ['2018', '2019', '2020', '2021', '2022', '2023', '2024'],
  datasets: [
    {
      label: 'Ocorrências de Tubarões',
      data: [5, 7, 12, 18, 15, 20, 25],
      fill: true,
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
    },
    {
      label: 'Volume de Carga (milhões de ton)',
      data: [10, 12, 15, 17, 16, 19, 21],
      fill: false,
      borderColor: 'rgba(255, 159, 64, 1)',
      backgroundColor: 'rgba(255, 159, 64, 0.2)',
    },
  ],
};

const data2ndYearB = {
  labels: ['Doenças de Pele', 'Doenças Respiratórias', 'Infecções'],
  datasets: [
    {
      label: 'Casos por Doença',
      data: [45, 25, 30],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
    },
  ],
};

const data1stYear = {
  labels: ['Macroalga A', 'Macroalga B', 'Macroalga C'],
  datasets: [
    {
      label: 'Remoção de Poluentes (%)',
      data: [75, 90, 80],
      backgroundColor: ['#4BC0C0', '#9966FF', '#FF9F40'],
      borderColor: ['#4BC0C0', '#9966FF', '#FF9F40'],
      borderWidth: 1,
    },
  ],
};

export default function ResultsPage() {
  // Opções para diminuir o tamanho dos gráficos e melhorar a visualização
  const chartOptions = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      title: {
        display: true,
        text: 'Título do Gráfico',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    // Você pode usar 'aspectRatio' para definir a proporção, ou 'height' e 'width'
    // Como estamos usando 'maintainAspectRatio: false', o tamanho será controlado pelo container
  };

  return (
    <div className="container results-page">
      <h2>Resultados</h2>

      {/* 3º Ano - Gráfico de Barras */}
      <Card>
        <h3>3º ano: Bioindicadores da Qualidade da Água</h3>
        <p>
          Este gráfico mostra os níveis de poluição (em partes por milhão - ppm) em diferentes pontos de coleta na área de Suape.
          Os dados de longo prazo revelam uma diminuição significativa na taxa de clorofila a e alterações na comunidade de zooplâncton no estuário do Rio Ipojuca, indicando um desequilíbrio ecológico.
        </p>
        <div style={{ height: '300px' }}> {/* Adiciona um container com altura fixa para controlar o tamanho */}
          <Chart
            type="bar"
            data={data3rdYear}
            options={{
              ...chartOptions,
              plugins: {
                ...chartOptions.plugins,
                title: { text: 'Nível de Poluição por Ponto de Coleta' }
              }
            }}
          />
        </div>
      </Card>

      {/* 2º Ano A - Gráfico de Linhas */}
      <Card>
        <h3>2º ano A: Rotas Alteradas?</h3>
        <p>
          Comparativo entre o volume de carga no porto de Suape e o número de ocorrências de tubarões ao longo dos anos.
          A pesquisa correlaciona o aumento de incidentes com tubarões com a degradação de habitats e alterações nos padrões migratórios, possivelmente influenciados pela atividade portuária.
        </p>
        <div style={{ height: '300px' }}>
          <Chart
            type="line"
            data={data2ndYearA}
            options={{
              ...chartOptions,
              plugins: {
                ...chartOptions.plugins,
                title: { text: 'Relação entre Volume de Carga e Ocorrências de Tubarões' }
              }
            }}
          />
        </div>
      </Card>
      
      {/* 2º Ano B - Gráfico de Pizza */}
      <Card>
        <h3>2º ano B: Análise dos Impactos do Saneamento Básico</h3>
        <p>
          Distribuição percentual dos principais tipos de doenças relacionados ao saneamento básico precário na Ilha de Tatuoquinha.
          A pesquisa aponta para a contaminação da água e do solo na ilha devido à falta de saneamento, resultando em maior incidência de doenças e degradação do manguezal.
        </p>
        <div style={{ height: '300px' }}>
          <Chart
            type="pie"
            data={data2ndYearB}
            options={{
              ...chartOptions,
              plugins: {
                ...chartOptions.plugins,
                title: { text: 'Distribuição de Doenças na Ilha de Tatuoquinha' }
              }
            }}
          />
        </div>
      </Card>

      {/* 1º Ano - Gráfico de Barras */}
      <Card>
        <h3>1º ano: Biofiltração Inteligente</h3>
        <p>
          Este gráfico demonstra a eficiência de diferentes espécies de macroalgas na remoção de poluentes, com resultados preliminares que as tornam promissoras para a biorremediação de efluentes portuários.
        </p>
        <div style={{ height: '300px' }}>
          <Chart
            type="bar"
            data={data1stYear}
            options={{
              ...chartOptions,
              plugins: {
                ...chartOptions.plugins,
                title: { text: 'Eficiência de Biofiltração por Macroalga' }
              }
            }}
          />
        </div>
      </Card>
    </div>
  );
}
