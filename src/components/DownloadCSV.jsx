// src/components/DownloadCSV.jsx

import React from 'react';

/**
 * Função utilitária para gerar e exportar um arquivo CSV.
 * @param {Array<string>} headers - Um array de strings com os cabeçalhos das colunas.
 * @param {Array<Array<any>>} rows - Um array de arrays, onde cada array interno representa uma linha de dados.
 * @param {string} nomeArquivo - O nome do arquivo a ser baixado (ex: "dados.csv").
 */
const exportarCSV = (headers, rows, nomeArquivo) => {
    // 1. Converte os dados para o formato CSV.
    let csv = headers.join(',') + '\n';
    rows.forEach(row => {
        // Envolve cada valor com aspas duplas e escapa as aspas internas.
        // Isso lida com dados que contêm vírgulas ou aspas.
        const escapedRow = row.map(value => {
            if (typeof value === 'string') {
                return `"${value.replace(/"/g, '""')}"`;
            }
            return value;
        }).join(',');
        csv += escapedRow + '\n';
    });

    // 2. Cria um Blob com o conteúdo CSV.
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    
    // 3. Cria um URL para o Blob e um link temporário para o download.
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = nomeArquivo;
    
    // 4. Simula o clique no link e remove o elemento.
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    
    // 5. Libera o URL do objeto para evitar vazamento de memória.
    URL.revokeObjectURL(url);
};

/**
 * Componente de botão para baixar um arquivo CSV.
 * @param {Array<string>} headers - Cabeçalhos do arquivo CSV.
 * @param {Array<Array<any>>} rows - Linhas de dados.
 * @param {string} nomeArquivo - Nome do arquivo.
 * @param {string} buttonText - Texto a ser exibido no botão.
 */
const DownloadCSV = ({ headers, rows, nomeArquivo, buttonText = "Baixar CSV" }) => {
    const handleDownload = () => {
        exportarCSV(headers, rows, nomeArquivo);
    };

    return (
        <button
            onClick={handleDownload}
            // Classes do Tailwind para estilizar o botão
            className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300 shadow-md"
        >
            {buttonText}
        </button>
    );
};

export default DownloadCSV;
