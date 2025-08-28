import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import '../style.css';

const DadosPage = () => {
  // Dados simulados para os projetos
  const projectData = [
    { name: '3º Ano', value: 85, description: 'Indicadores da Qualidade da Água.' },
    { name: '2º A', value: 70, description: 'Rotas de Tubarões.' },
    { name: '2º B', value: 92, description: 'Saneamento na Ilha de Tatuoquinha.' },
    { name: '1º Ano', value: 95, description: 'Biofiltração com Macroalgas.' },
  ];

  const svgRef = useRef();

  useEffect(() => {
    // Configurações do gráfico
    const margin = { top: 20, right: 30, bottom: 40, left: 40 };
    const width = 600 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    // Limpa o SVG anterior para evitar duplicatas
    d3.select(svgRef.current).selectAll('*').remove();

    // Cria o SVG principal
    const svg = d3.select(svgRef.current)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // Escalas
    const xScale = d3.scaleBand()
      .domain(projectData.map(d => d.name))
      .range([0, width])
      .padding(0.2);

    const yScale = d3.scaleLinear()
      .domain([0, 100])
      .range([height, 0]);

    // Cria as barras
    svg.selectAll(".bar")
      .data(projectData)
      .enter().append("rect")
      .attr("class", "bar")
      .attr("x", d => xScale(d.name))
      .attr("y", d => yScale(d.value))
      .attr("width", xScale.bandwidth())
      .attr("height", d => height - yScale(d.value))
      .attr("fill", "#3f88c5") // Cor de destaque
      .transition()
      .duration(800)
      .attr("y", d => yScale(d.value))
      .attr("height", d => height - yScale(d.value));

    // Adiciona o texto dos valores em cada barra
    svg.selectAll(".bar-label")
      .data(projectData)
      .enter().append("text")
      .attr("class", "bar-label")
      .attr("x", d => xScale(d.name) + xScale.bandwidth() / 2)
      .attr("y", d => yScale(d.value) - 5) // Posição acima da barra
      .attr("text-anchor", "middle")
      .text(d => `${d.value}%`)
      .attr("fill", "#212529")
      .style("font-size", "14px");

    // Adiciona eixos
    svg.append("g")
      .attr("class", "x-axis")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(xScale));

    svg.append("g")
      .attr("class", "y-axis")
      .call(d3.axisLeft(yScale).ticks(5).tickFormat(d => `${d}%`));

    // Adiciona rótulos dos eixos
    svg.append("text")
      .attr("transform", `translate(${width / 2}, ${height + margin.top + 10})`)
      .attr("text-anchor", "middle")
      .text("Projetos LABIC");

    svg.append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - margin.left)
      .attr("x", 0 - (height / 2))
      .attr("dy", "1em")
      .attr("text-anchor", "middle")
      .text("Índice de Eficiência");

  }, []);

  return (
    <div className="data-container">
      <h1>Dados Relevantes dos Projetos</h1>
      <p className="intro-text">
        Os gráficos abaixo ilustram a eficiência de cada projeto,
        com base em dados simulados.
      </p>

      <div className="chart-container flex justify-center">
        <svg ref={svgRef}></svg>
      </div>

      <div className="data-item">
        <h3>Projeto 3º ano: Bioindicadores da Qualidade da Água</h3>
        <p>Dados de longo prazo revelam uma diminuição significativa na taxa de clorofila a e alterações na comunidade de zooplâncton no estuário do Rio Ipojuca, indicando um desequilíbrio ecológico.</p>
      </div>

      <div className="data-item">
        <h3>Projeto 2º ano A: Rotas de Tubarões</h3>
        <p>Estudos correlacionam o aumento de incidentes com tubarões com a degradação de habitats e alterações nos padrões migratórios, possivelmente influenciados pela atividade portuária.</p>
      </div>
      
      <div className="data-item">
        <h3>Projeto 2º ano B: Saneamento na Ilha de Tatuoquinha</h3>
        <p>A pesquisa aponta para a contaminação da água e do solo na ilha devido à falta de saneamento, resultando em maior incidência de doenças e degradação do manguezal.</p>
      </div>

      <div className="data-item">
        <h3>Projeto 1º ano: Biofiltração com Macroalgas</h3>
        <p>Resultados preliminares demonstram a alta eficiência de certas espécies de macroalgas em absorver poluentes, tornando-as promissoras para a biorremediação de efluentes portuários.</p>
      </div>
    </div>
  );
};

export default DadosPage;
