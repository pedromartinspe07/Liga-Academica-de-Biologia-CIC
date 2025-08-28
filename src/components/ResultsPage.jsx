// src/components/ResultsPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, LineElement, PointElement } from 'chart.js';
import { Bar, Line, Pie } from 'react-chartjs-2';

// Register the necessary Chart.js components.
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, LineElement, PointElement);

// Example data and options for the charts.
// In a real project, this data would come from an API or database.

// Bioindicators Chart Configuration (Bar)
const bioindicadoresData = {
    labels: ['Praia de Calhetas', 'Ponto de Descarte', 'Canal Principal'],
    datasets: [
        {
            label: 'Nível de Poluentes (arbitrário)',
            data: [20, 95, 80],
            backgroundColor: ['#2563eb', '#dc2626', '#1d4ed8'],
            borderColor: ['#1e40af', '#991b1b', '#1e3a8a'],
            borderWidth: 1,
        },
    ],
};

const bioindicadoresOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Nível de Poluentes em Pontos Estratégicos',
            font: {
                size: 18,
                weight: 'bold',
            },
        },
    },
};

// Sharks Chart Configuration (Line)
const sharksData = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    datasets: [
        {
            label: 'Ocorrências de Tubarões',
            data: [5, 7, 12, 10, 15, 20, 18, 16, 14, 11, 8, 6],
            fill: false,
            borderColor: '#fb923c',
            tension: 0.4,
        },
    ],
};

const sharksOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Ocorrências de Tubarões por Mês',
            font: {
                size: 18,
                weight: 'bold',
            },
        },
    },
};

// Sanitation Chart Configuration (Pie)
const saneamentoData = {
    labels: ['Com Saneamento', 'Sem Saneamento'],
    datasets: [
        {
            label: 'População',
            data: [35, 65],
            backgroundColor: ['#10b981', '#ef4444'],
            borderColor: ['#047857', '#b91c1c'],
            borderWidth: 1,
        },
    ],
};

const saneamentoOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Situação de Saneamento na Comunidade',
            font: {
                size: 18,
                weight: 'bold',
            },
        },
    },
};

// Biofiltration Chart Configuration (Bar)
const macroalgasData = {
    labels: ['Metal Pesado', 'Químicos Orgânicos', 'Nutrientes'],
    datasets: [
        {
            label: 'Eficiência de Remoção (%)',
            data: [85, 92, 78],
            backgroundColor: '#8b5cf6',
            borderColor: '#6d28d9',
            borderWidth: 1,
        },
    ],
};

const macroalgasOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Eficiência de Remoção de Poluentes por Macroalgas',
            font: {
                size: 18,
                weight: 'bold',
            },
        },
    },
};

const ResultsPage = () => {
    // Function to simulate data download
    const handleDownload = (chartId) => {
        // In a real project, you would have an API endpoint to download the file
        // or a more complex logic to generate a CSV from the chart data.
        console.log(`Data from chart ${chartId} would be downloaded here.`);
    };

    return (
        <main className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 p-4 sm:p-6 lg:p-8">
            <div className="container mx-auto">
                {/* Breadcrumb Navigation */}
                <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-6">
                    <ol className="flex space-x-2">
                        <li><Link to="/" className="hover:underline transition-colors duration-200">Início</Link></li>
                        <li className="text-gray-400">/</li>
                        <li className="font-semibold text-gray-800 dark:text-gray-200">Resultados</li>
                    </ol>
                </nav>

                {/* Page Header */}
                <header className="mb-10 text-center">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2 leading-tight">Resultados da Pesquisa</h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400">Transformando dados em descobertas: uma jornada visual pela ciência.</p>
                </header>

                {/* Introductory Section */}
                <section className="mb-12 max-w-4xl mx-auto text-lg text-center leading-relaxed">
                    <p>Nesta seção, apresentamos os resultados dos projetos da LABIC por meio de visualizações de dados claras e objetivas. Cada gráfico e infográfico é acompanhado por uma análise que explica as principais descobertas, conectando os dados com as conclusões de nossas pesquisas.</p>
                    <div className="mt-6 p-4 rounded-lg bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 text-blue-800 dark:text-blue-200 transition-colors duration-200">
                        <p className="font-semibold">Quer ir além?</p>
                        <p>Você pode baixar as bases de dados completas na página de <Link to="/dados" className="underline font-medium hover:text-blue-600 transition-colors duration-200">Dados</Link> e explorar a metodologia na página de <Link to="/referencial" className="underline font-medium hover:text-blue-600 transition-colors duration-200">Referencial Teórico</Link>.</p>
                    </div>
                </section>

                {/* Charts Section Grid */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {/* Bioindicators Chart Card */}
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                        <h2 className="text-xl font-semibold mb-4 text-center">Grupo 3º Ano: Bioindicadores da Qualidade da Água</h2>
                        <figure className="flex flex-col items-center">
                            <div className="h-72 w-full mb-4">
                                <Bar data={bioindicadoresData} options={bioindicadoresOptions} />
                            </div>
                            <figcaption className="text-sm text-center text-gray-600 dark:text-gray-400 mt-4">
                                <p className="font-bold text-gray-800 dark:text-gray-200">Figura 1: Nível de Poluentes em Pontos Estratégicos.</p>
                                <p className="mt-2">Este gráfico de barras compara os níveis de poluentes em diferentes pontos de amostragem na área de estudo. O ponto "Ponto de Descarte" e "Canal Principal" mostram concentrações significativamente mais altas que a área de controle ("Praia de Calhetas"), indicando um forte impacto das atividades industriais na qualidade da água. Os dados corroboram a hipótese de que a poluição afeta diretamente a saúde das comunidades de bioindicadores.</p>
                                <button onClick={() => handleDownload('bioindicadores')} className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full font-medium shadow-md hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105">Baixar dados</button>
                            </figcaption>
                        </figure>
                    </div>

                    {/* Sharks Chart Card */}
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                        <h2 className="text-xl font-semibold mb-4 text-center">Grupo 2º Ano A: Tubarões e Rotas</h2>
                        <figure className="flex flex-col items-center">
                            <div className="h-72 w-full mb-4">
                                <Line data={sharksData} options={sharksOptions} />
                            </div>
                            <figcaption className="text-sm text-center text-gray-600 dark:text-gray-400 mt-4">
                                <p className="font-bold text-gray-800 dark:text-gray-200">Figura 2: Ocorrências de Tubarões por Mês.</p>
                                <p className="mt-2">Este gráfico de linha ilustra a tendência de ocorrências de tubarões na região metropolitana do Recife. O aumento nas ocorrências em determinados meses sugere possíveis relações com fatores sazonais ou de migração. Nossos dados abrem uma importante discussão sobre os impactos indiretos da atividade humana no comportamento da fauna marinha.</p>
                                <button onClick={() => handleDownload('sharks')} className="mt-4 px-6 py-2 bg-orange-500 text-white rounded-full font-medium shadow-md hover:bg-orange-600 transition-colors duration-300 transform hover:scale-105">Baixar dados</button>
                            </figcaption>
                        </figure>
                    </div>

                    {/* Sanitation Chart Card */}
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                        <h2 className="text-xl font-semibold mb-4 text-center">Grupo 2º Ano B: Saneamento na Comunidade Local</h2>
                        <figure className="flex flex-col items-center">
                            <div className="h-72 w-full mb-4 flex items-center justify-center">
                                <Pie data={saneamentoData} options={saneamentoOptions} />
                            </div>
                            <figcaption className="text-sm text-center text-gray-600 dark:text-gray-400 mt-4">
                                <p className="font-bold text-gray-800 dark:text-gray-200">Figura 3: Situação de Saneamento na Comunidade.</p>
                                <p className="mt-2">Este gráfico de pizza apresenta a distribuição do saneamento na comunidade local, com uma ênfase nas residências com e sem esgoto tratado. A alta porcentagem de residências sem saneamento básico confirma a hipótese inicial do nosso projeto, reforçando a urgência de melhorias na infraestrutura local.</p>
                                <button onClick={() => handleDownload('saneamento')} className="mt-4 px-6 py-2 bg-teal-600 text-white rounded-full font-medium shadow-md hover:bg-teal-700 transition-colors duration-300 transform hover:scale-105">Baixar dados</button>
                            </figcaption>
                        </figure>
                    </div>

                    {/* Biofiltration Chart Card */}
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                        <h2 className="text-xl font-semibold mb-4 text-center">Grupo 1º Ano: Biofiltração com Macroalgas</h2>
                        <figure className="flex flex-col items-center">
                            <div className="h-72 w-full mb-4">
                                <Bar data={macroalgasData} options={macroalgasOptions} />
                            </div>
                            <figcaption className="text-sm text-center text-gray-600 dark:text-gray-400 mt-4">
                                <p className="font-bold text-gray-800 dark:text-gray-200">Figura 4: Eficiência de Remoção de Poluentes por Macroalgas.</p>
                                <p className="mt-2">Este gráfico de barras demonstra a capacidade de remoção de diferentes poluentes por macroalgas nativas. A alta eficiência de remoção indica o potencial da biofiltração como uma solução sustentável e de baixo custo para o tratamento de efluentes em áreas portuárias.</p>
                                <button onClick={() => handleDownload('biofiltracao')} className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-full font-medium shadow-md hover:bg-purple-700 transition-colors duration-300 transform hover:scale-105">Baixar dados</button>
                            </figcaption>
                        </figure>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default ResultsPage;
