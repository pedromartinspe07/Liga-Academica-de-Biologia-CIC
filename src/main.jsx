// src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
// Importa o componente principal da sua aplicação.
import App from './App'; 
// Importa o arquivo de estilos global do Tailwind CSS.
import './output.css'; 

// Cria a raiz do React no elemento HTML com id="root".
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Renderiza o seu componente principal, o App, dentro do StrictMode. */}
    <App />
  </React.StrictMode>,
);
