// src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Importa o componente App.js que criamos

// Opcionalmente, você pode importar um arquivo CSS para estilos globais
// import './index.css'; 

// Cria a raiz do React no elemento com id="root"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Renderiza o seu componente principal, o App */}
    <App />
  </React.StrictMode>,
);