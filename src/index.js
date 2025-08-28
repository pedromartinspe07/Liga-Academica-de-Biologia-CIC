import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import HomePage from './components/HomePage';
import './output.css'; // Importa o CSS compilado pelo Tailwind

// Cria o ponto de renderização do seu aplicativo na página HTML.
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderiza o aplicativo principal.
root.render(
  // O React.StrictMode ajuda a encontrar problemas potenciais no código.
  <React.StrictMode>
    {/* O BrowserRouter habilita o roteamento do React (ex: <Link>). */}
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>
  </React.StrictMode>
);
