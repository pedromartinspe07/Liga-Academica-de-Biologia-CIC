import React, { useState, useCallback } from 'react';
import { createRoot } from 'react-dom/client';

/**
 * @file DadosPage.jsx
 * @description Componente da página de dados abertos, com tabelas de exemplo
 * e funcionalidade de download para arquivos CSV. O design é responsivo
 * utilizando Tailwind CSS.
 */

// Definição dos dados das tabelas em arrays de objetos
const tabelaAguaData = [
  { ano: 2015, fosfato: 0.25, nitrato: 1.12, coliformes: 5000 },
  { ano: 2017, fosfato: 0.31, nitrato: 1.45, coliformes: 7500 },
  { ano: 2020, fosfato: 0.48, nitrato: 1.85, coliformes: 12000 }
];

const tabelaCO2Data = [
  { ano: 2015, emissoes: "120.500" },
  { ano: 2018, emissoes: "155.300" },
  { ano: 2021, emissoes: "180.900" }
];

const tabelaPIBData = [
  { ano: 2015, pib: 50 },
  { ano: 2018, pib: 68 },
  { ano: 2021, pib: 82 }
];

// Função genérica para exportar dados para CSV
const exportToCSV = (data, filename) => {
  // Se não houver dados, retorna imediatamente
  if (!data || data.length === 0) {
    console.error("Não há dados para exportar.");
    return;
  }

  // Obter as chaves do primeiro objeto para usar como cabeçalho
  const header = Object.keys(data[0]);
  // Mapear os dados para um array de linhas, cada uma com os valores em string
  const rows = data.map(obj => header.map(key => `"${String(obj[key]).replace(/"/g, '""')}"`).join(','));
  // Unir o cabeçalho e as linhas
  const csvString = [header.join(','), ...rows].join('\n');

  // Cria um Blob com o conteúdo do CSV
  const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement("a");

  // Verifica se o navegador suporta o atributo 'download'
  if (link.download !== undefined) {
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", filename);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};

const App = () => {
  // Estado para controlar a visibilidade do menu de navegação em dispositivos móveis
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Função para alternar o estado do menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  // Funções de download otimizadas com useCallback para evitar recriação desnecessária
  const handleDownloadAgua = useCallback(() => {
    exportToCSV(tabelaAguaData, 'qualidade_agua_suape.csv');
  }, []);

  const handleDownloadCO2 = useCallback(() => {
    exportToCSV(tabelaCO2Data, 'emissoes_co2_suape.csv');
  }, []);

  const handleDownloadPIB = useCallback(() => {
    exportToCSV(tabelaPIBData, 'pib_suape.csv');
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen font-inter">
      {/* Cabeçalho e barra de navegação */}
      <header className="bg-white shadow-md rounded-b-2xl">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between" role="navigation" aria-label="Menu Principal">
          {/* Logo */}
          <a className="flex items-center" href="#">
            <span className="font-extrabold text-2xl text-blue-600">LABIC</span>
          </a>

          {/* Botão para abrir/fechar menu em mobile */}
          <button
            className="md:hidden p-2 rounded-full text-gray-600 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-colors duration-200"
            type="button"
            onClick={toggleMenu}
            aria-controls="main-menu"
            aria-expanded={isMenuOpen}
            aria-label="Abrir menu de navegação"
          >
            {isMenuOpen ?
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              :
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            }
          </button>

          {/* Conteúdo do menu de navegação */}
          <div
            className={`absolute z-50 top-20 right-4 md:static md:flex md:items-center w-full md:w-auto ${isMenuOpen ? 'block bg-white p-6 rounded-lg shadow-xl' : 'hidden'}`}
            id="main-menu"
          >
            <ul className="flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0 items-start md:items-center w-full">
              {/* Simplificado para fins de exemplo */}
              <li className="nav-item w-full md:w-auto">
                <a className="nav-link block py-2 px-4 text-gray-800 hover:text-blue-600 transition-colors duration-200" href="#">Início</a>
              </li>
              <li className="nav-item w-full md:w-auto">
                <a className="nav-link block py-2 px-4 text-gray-800 hover:text-blue-600 transition-colors duration-200" href="#">O Projeto</a>
              </li>
              <li className="nav-item w-full md:w-auto">
                <a className="nav-link block py-2 px-4 text-gray-800 hover:text-blue-600 transition-colors duration-200" href="#">Resultados</a>
              </li>
              <li className="nav-item w-full md:w-auto">
                <a className="nav-link block py-2 px-4 font-bold text-blue-600 border-b-2 border-blue-600" aria-current="page" href="#">Dados</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/* Conteúdo principal da página */}
      <main className="page-content py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 text-center mb-2">Dados Abertos da Pesquisa</h1>
          <p className="text-center text-gray-600 mb-8">Em busca da transparência e da colaboração científica.</p>

          <section className="bg-white p-6 rounded-2xl shadow-lg mb-8">
            <p className="text-gray-700 leading-relaxed mb-4">Em busca da transparência e da colaboração científica, disponibilizamos aqui as bases de dados e materiais brutos utilizados em nossos projetos. Os arquivos estão em formatos acessíveis e prontos para download. Encorajamos o uso desses dados para fins de pesquisa, ensino e análise, com a devida citação da fonte.</p>
            <div className="bg-blue-100 border border-blue-400 text-blue-800 px-4 py-3 rounded-lg relative" role="alert">
              <strong className="font-bold">Atenção:</strong>
              <span className="block sm:inline ml-2">Os dados são fornecidos "como estão". Para entender a metodologia de coleta e a análise dos resultados, por favor, consulte as seções de <a href="#" className="underline font-semibold">Resultados</a> e <a href="#" className="underline font-semibold">Publicações</a>.</span>
            </div>
          </section>

          <section className="content-section data-tables-section space-y-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 text-center">Bases de Dados Disponíveis</h2>
            <p className="text-center text-gray-700 mb-8">Acesse e baixe os dados brutos utilizados em nossos estudos. Clique no botão "Baixar CSV" em cada tabela.</p>

            {/* Tabela de Qualidade da Água */}
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Tabela 1: Qualidade da Água na Baía de Suape</h3>
              <p className="text-gray-600 mb-4"><strong>Fonte:</strong> Análises de relatórios anuais da CPRH (Agência Estadual de Meio Ambiente de Pernambuco).</p>
              <div className="overflow-x-auto">
                <table className="min-w-full table-auto border-collapse">
                  <thead className="bg-gray-200">
                    <tr className="text-gray-700 uppercase text-sm leading-normal">
                      <th scope="col" className="py-3 px-6 text-left border-b-2 border-gray-300">Ano</th>
                      <th scope="col" className="py-3 px-6 text-left border-b-2 border-gray-300">Nível de Fosfato (mg/L)</th>
                      <th scope="col" className="py-3 px-6 text-left border-b-2 border-gray-300">Nível de Nitrato (mg/L)</th>
                      <th scope="col" className="py-3 px-6 text-left border-b-2 border-gray-300">Coliformes Fecais (NMP/100mL)</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 text-sm font-light">
                    {tabelaAguaData.map((row, index) => (
                      <tr key={index} className="border-b border-gray-200 hover:bg-gray-100 transition-colors duration-200">
                        <td className="py-3 px-6 text-left whitespace-nowrap">{row.ano}</td>
                        <td className="py-3 px-6 text-left">{row.fosfato}</td>
                        <td className="py-3 px-6 text-left">{row.nitrato}</td>
                        <td className="py-3 px-6 text-left">{row.coliformes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="flex justify-center mt-6">
                <button
                  className="bg-blue-600 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-200 transform hover:scale-105"
                  onClick={handleDownloadAgua}
                >
                  Baixar CSV
                </button>
              </div>
            </div>

            {/* Tabela de Emissões de CO₂ */}
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Tabela 2: Emissões de Gás Carbônico ($CO_{2}$)</h3>
              <p className="text-gray-600 mb-4"><strong>Fonte:</strong> Estimativas baseadas em relatórios do SINDPE (Sindicato das Indústrias de Pernambuco) e estudos acadêmicos sobre a pegada de carbono do setor industrial.</p>
              <div className="overflow-x-auto">
                <table className="min-w-full table-auto border-collapse">
                  <thead className="bg-gray-200">
                    <tr className="text-gray-700 uppercase text-sm leading-normal">
                      <th scope="col" className="py-3 px-6 text-left border-b-2 border-gray-300">Ano</th>
                      <th scope="col" className="py-3 px-6 text-left border-b-2 border-gray-300">Emissões de $CO_{2}$ (toneladas)</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 text-sm font-light">
                    {tabelaCO2Data.map((row, index) => (
                      <tr key={index} className="border-b border-gray-200 hover:bg-gray-100 transition-colors duration-200">
                        <td className="py-3 px-6 text-left whitespace-nowrap">{row.ano}</td>
                        <td className="py-3 px-6 text-left">{row.emissoes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="flex justify-center mt-6">
                <button
                  className="bg-blue-600 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-200 transform hover:scale-105"
                  onClick={handleDownloadCO2}
                >
                  Baixar CSV
                </button>
              </div>
            </div>

            {/* Tabela de Crescimento Econômico (PIB) */}
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Tabela 3: Crescimento Econômico (PIB Regional)</h3>
              <p className="text-gray-600 mb-4"><strong>Fonte:</strong> Dados agregados do IBGE e estudos sobre a economia regional de Pernambuco.</p>
              <div className="overflow-x-auto">
                <table className="min-w-full table-auto border-collapse">
                  <thead className="bg-gray-200">
                    <tr className="text-gray-700 uppercase text-sm leading-normal">
                      <th scope="col" className="py-3 px-6 text-left border-b-2 border-gray-300">Ano</th>
                      <th scope="col" className="py-3 px-6 text-left border-b-2 border-gray-300">PIB da Região de Suape (bilhões de R$)</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 text-sm font-light">
                    {tabelaPIBData.map((row, index) => (
                      <tr key={index} className="border-b border-gray-200 hover:bg-gray-100 transition-colors duration-200">
                        <td className="py-3 px-6 text-left whitespace-nowrap">{row.ano}</td>
                        <td className="py-3 px-6 text-left">{row.pib}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="flex justify-center mt-6">
                <button
                  className="bg-blue-600 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-200 transform hover:scale-105"
                  onClick={handleDownloadPIB}
                >
                  Baixar CSV
                </button>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Metadados e Metodologia de Coleta</h2>
              <p className="text-gray-700 leading-relaxed">Os dados apresentados são dados secundários compilados de fontes públicas e confiáveis. A coleta foi realizada em um período de 5 meses e os valores foram arredondados para facilitar a leitura. Os valores exatos e a metodologia de coleta podem ser encontrados no arquivo de metadados incluído no pacote de download.</p>
            </div>
          </section>
        </div>
      </main>

      {/* Rodapé do site */}
      <footer className="site-footer bg-gray-900 text-gray-300 py-8 mt-12 rounded-t-2xl">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-center md:text-left">
          <div className="footer-info mb-4 md:mb-0">
            <p className="text-sm">&copy; 2025 - LABIC | Liga Acadêmica de Biologia.</p>
            <p className="text-sm mt-1">Orientação: Professor Vanbasten Rocha</p>
          </div>
          <div className="footer-social-links">
            <a
              href="https://www.instagram.com/labic.imaculada/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da LABIC"
            >
              <img
                src="https://placehold.co/40x40/E8E8E8/404040?text=IG"
                alt="Ícone do Instagram"
                className="h-10 w-10 rounded-full transition-transform duration-300 hover:scale-110"
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
