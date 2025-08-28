// src/components/ResultsPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, LineElement, PointElement } from 'chart.js';
import { Bar, Line, Pie } from 'react-chartjs-2';

// Registra os componentes necessários do Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, LineElement, PointElement);

// Dados e opções de exemplo para os gráficos.
// Em um projeto real, esses dados viriam de uma API ou banco de dados.

// Configuração do Gráfico de Bioindicadores (Barras)
const bioindicadoresData = {
    labels: ['Praia de Calhetas', 'Ponto de Descarte', 'Canal Principal'],
    datasets: [
        {
            label: 'Nível de Poluentes (arbitrário)',
            data: [20, 95, 80],
            backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)'],
            borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
            borderWidth: 1,
        },
    ],
};

const bioindicadoresOptions = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Nível de Poluentes em Pontos Estratégicos',
        },
    },
};

// Configuração do Gráfico de Tubarões (Linha)
const sharksData = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    datasets: [
        {
            label: 'Ocorrências de Tubarões',
            data: [5, 7, 12, 10, 15, 20, 18, 16, 14, 11, 8, 6],
            fill: false,
            borderColor: 'rgba(255, 159, 64, 1)',
            tension: 0.1,
        },
    ],
};

const sharksOptions = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Ocorrências de Tubarões por Mês',
        },
    },
};

// Configuração do Gráfico de Saneamento (Pizza)
const saneamentoData = {
    labels: ['Com Saneamento', 'Sem Saneamento'],
    datasets: [
        {
            label: 'População',
            data: [35, 65],
            backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 99, 132, 0.6)'],
            borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)'],
            borderWidth: 1,
        },
    ],
};

const saneamentoOptions = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Situação de Saneamento na Comunidade',
        },
    },
};

// Configuração do Gráfico de Biofiltração (Barras)
const macroalgasData = {
    labels: ['Metal Pesado', 'Químicos Orgânicos', 'Nutrientes'],
    datasets: [
        {
            label: 'Eficiência de Remoção (%)',
            data: [85, 92, 78],
            backgroundColor: 'rgba(153, 102, 255, 0.6)',
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 1,
        },
    ],
};

const macroalgasOptions = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Eficiência de Remoção de Poluentes por Macroalgas',
        },
    },
};

const ResultsPage = () => {
    // Função para simular o download de dados
    const handleDownload = (chartId) => {
        // Em um projeto real, você teria um endpoint de API para baixar o arquivo
        // ou uma lógica mais complexa para gerar um CSV a partir dos dados do gráfico.
        console.log(`Dados do gráfico ${chartId} seriam baixados aqui.`);
    };

    return (
        <main className="page-content">
            <div className="container">
                <nav aria-label="Breadcrumb" className="breadcrumb-nav">
                    <ol className="breadcrumb">
                        {/* Exemplo de Breadcrumb no React */}
                        <li className="breadcrumb-item"><Link to="/">Início</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Resultados</li>
                    </ol>
                </nav>

                <h1 className="page-title">Resultados da Pesquisa</h1>
                <p className="subtitle">Transformando dados em descobertas: uma jornada visual pela ciência.</p>

                <section className="content-section">
                    <p>Nesta seção, apresentamos os resultados dos projetos da LABIC por meio de visualizações de dados claras e objetivas. Cada gráfico e infográfico é acompanhado por uma análise que explica as principais descobertas, conectando os dados com as conclusões de nossas pesquisas.</p>
                    <div className="info-box" role="alert">
                        <p><strong>Quer ir além?</strong> Você pode baixar as bases de dados completas na página de <Link to="/dados">Dados</Link> e explorar a metodologia na página de <Link to="/referencial">Referencial Teórico</Link>.</p>
                    </div>
                </section>
                
                <section className="content-section chart-section">
                    <h2 className="section-title">Grupo 3º Ano: Bioindicadores da Qualidade da Água</h2>
                    <figure className="chart-figure">
                        <Bar data={bioindicadoresData} options={bioindicadoresOptions} />
                        <figcaption className="chart-caption">
                            <p><strong>Figura 1: Nível de Poluentes em Pontos Estratégicos.</strong></p>
                            <p>Este gráfico de barras compara os níveis de poluentes em diferentes pontos de amostragem na área de estudo. O ponto "Ponto de Descarte" e "Canal Principal" mostram concentrações significativamente mais altas que a área de controle ("Praia de Calhetas"), indicando um forte impacto das atividades industriais na qualidade da água. Os dados corroboram a hipótese de que a poluição afeta diretamente a saúde das comunidades de bioindicadores.</p>
                            <button onClick={() => handleDownload('bioindicadores')} className="btn btn-primary btn-sm">Baixar dados</button>
                        </figcaption>
                    </figure>
                </section>

                <section className="content-section chart-section">
                    <h2 className="section-title">Grupo 2º Ano A: Tubarões e Rotas</h2>
                    <figure className="chart-figure">
                        <Line data={sharksData} options={sharksOptions} />
                        <figcaption className="chart-caption">
                            <p><strong>Figura 2: Ocorrências de Tubarões por Mês.</strong></p>
                            <p>Este gráfico de linha ilustra a tendência de ocorrências de tubarões na região metropolitana do Recife. O aumento nas ocorrências em determinados meses sugere possíveis relações com fatores sazonais ou de migração. Nossos dados abrem uma importante discussão sobre os impactos indiretos da atividade humana no comportamento da fauna marinha.</p>
                            <button onClick={() => handleDownload('sharks')} className="btn btn-primary btn-sm">Baixar dados</button>
                        </figcaption>
                    </figure>
                </section>

                <section className="content-section chart-section">
                    <h2 className="section-title">Grupo 2º Ano B: Saneamento na Comunidade Local</h2>
                    <figure className="chart-figure">
                        <Pie data={saneamentoData} options={saneamentoOptions} />
                        <figcaption className="chart-caption">
                            <p><strong>Figura 3: Situação de Saneamento na Comunidade.</strong></p>
                            <p>Este gráfico de pizza apresenta a distribuição do saneamento na comunidade local, com uma ênfase nas residências com e sem esgoto tratado. A alta porcentagem de residências sem saneamento básico confirma a hipótese inicial do nosso projeto, reforçando a urgência de melhorias na infraestrutura local.</p>
                            <button onClick={() => handleDownload('saneamento')} className="btn btn-primary btn-sm">Baixar dados</button>
                        </figcaption>
                    </figure>
                </section>

                <section className="content-section chart-section">
                    <h2 className="section-title">Grupo 1º Ano: Biofiltração com Macroalgas</h2>
                    <figure className="chart-figure">
                        <Bar data={macroalgasData} options={macroalgasOptions} />
                        <figcaption className="chart-caption">
                            <p><strong>Figura 4: Eficiência de Remoção de Poluentes por Macroalgas.</strong></p>
                            <p>Este gráfico de barras demonstra a capacidade de remoção de diferentes poluentes por macroalgas nativas. A alta eficiência de remoção indica o potencial da biofiltração como uma solução sustentável e de baixo custo para o tratamento de efluentes em áreas portuárias.</p>
                            <button onClick={() => handleDownload('biofiltracao')} className="btn btn-primary btn-sm">Baixar dados</button>
                        </figcaption>
                    </figure>
                </section>
            </div>
        </main>
    );
};

export default ResultsPage;
