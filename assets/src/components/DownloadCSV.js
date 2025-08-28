// src/components/DownloadCSV.js
import React from 'react';

// Função utilitária para exportar para CSV
const exportarCSV = (headers, rows, nomeArquivo) => {
    let csv = headers.join(',') + '\n';
    rows.forEach(row => csv += row.join(',') + '\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = nomeArquivo;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
};

const DownloadCSV = ({ headers, rows, nomeArquivo, buttonText = "Baixar CSV" }) => {
    const handleDownload = () => {
        exportarCSV(headers, rows, nomeArquivo);
    };

    return (
        <button onClick={handleDownload} className="btn-download-csv">
            {buttonText}
        </button>
    );
};

export default DownloadCSV;