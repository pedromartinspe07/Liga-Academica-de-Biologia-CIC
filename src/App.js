// src/App.js

// Importações de bibliotecas e hooks
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importação de componentes e estilos
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import ResultsPage from './pages/ResultsPage';
import ReferencialPage from './pages/ReferencialPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import MembersPage from './pages/MembersPage';
import ContentPage from './pages/ContentPage'; // Adicione esta linha
import PublicationsPage from './pages/PublicationsPage';
import DadosPage from './pages/DadosPage';
import GlossarioPage from './pages/GlossarioPage';

import './style.css';

/**
 * Componente principal da aplicação.
 * Responsável por configurar o roteamento e a estrutura geral do layout.
 */
function App() {
  return (
    <Router>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projetos" element={<ProjectPage />} />
          <Route path="/resultados" element={<ResultsPage />} />
          <Route path="/sobre" element={<AboutPage />} />
          <Route path="/contato" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/membros" element={<MembersPage />} />
          <Route path="/publicacoes" element={<PublicationsPage />} />
          <Route path="/dados" element={<DadosPage />} />
          <Route path="/glossario" element={<GlossarioPage />} />
          {/* Rotas específicas para as páginas que possuem componentes próprios */}
          <Route path="/referencial" element={<ReferencialPage/>} />

          {/* Esta rota genérica deve vir por último para evitar conflitos */}
          <Route path="/:page" element={<ContentPage/>} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
