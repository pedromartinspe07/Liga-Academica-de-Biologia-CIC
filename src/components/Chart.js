// src/components/Chart.js
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
} from 'chart.js';
import { Bar, Pie, Line } from 'react-chartjs-2';

// Registre os componentes do Chart.js que você vai usar
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement
);

/**
 * Um componente de gráfico genérico que renderiza diferentes tipos de gráficos.
 * @param {string} type - O tipo do gráfico ('bar', 'pie', 'line').
 * @param {object} data - Os dados do gráfico.
 * @param {object} options - As opções de configuração do gráfico.
 */
export default function Chart({ type, data, options }) {
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: options.title,
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return tooltipItem.label + ': ' + tooltipItem.raw + '%';
          },
        },
      },
    },
    ...options,
  };

  switch (type) {
    case 'bar':
      return <Bar data={data} options={chartOptions} />;
    case 'pie':
      return <Pie data={data} options={chartOptions} />;
    case 'line':
      return <Line data={data} options={chartOptions} />;
    default:
      return null;
  }
}