// src/App.jsx

import React from 'react';
// Importa os componentes necessários do React Router para roteamento.
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importa os componentes de página da pasta 'components'.
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import ReferencialPage from './components/ReferencialPage';
import ProjectPage from './components/ProjectPage';
import DadosPage from './components/DadosPage';
import GlossaryPage from './components/GlossaryPage';
import PublicacoesPage from './components/PublicacoesPage';
import ResultadosPage from './components/ResultsPage';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer'; // Agora, o Footer é um componente separado.


/**
 * Componente principal da aplicação.
 * Configura o roteamento com o React Router.
 */
function App() {
    return (
        // BrowserRouter habilita o roteamento para toda a aplicação.
        <BrowserRouter>
            {/* O Navbar é renderizado em todas as páginas, pois está fora do Routes. */}
            <Navbar />
            
            {/* O componente Routes define as rotas da sua aplicação. */}
            <Routes>
                {/* Rota para a Home Page. */}
                <Route path="/" element={<HomePage />} />
                
                {/* Rota para a página de Referencial Teórico. */}
                <Route path="/referencial" element={<ReferencialPage />} />
                
                {/* Rota para a página de Projeto. */}
                <Route path="/projeto" element={<ProjectPage />} />

                {/* Rota para a página de Dados. */}
                <Route path="/dados" element={<DadosPage />} />

                {/* Rota para a página de Publicações. */}
                <Route path="/publicacoes" element={<PublicacoesPage />} />

                {/* Rota para a página de Resultados. */}
                <Route path="/resultados" element={<ResultadosPage />} />
                
                {/* Rota para a página do Glossário. */}
                <Route path="/glossario" element={<GlossaryPage />} />

                {/* Rota para a página de Contato. */}
                <Route path="/contato" element={<ContactPage />} />

            </Routes>
            
            {/* O Footer também é renderizado em todas as páginas. */}
            <Footer />
        </BrowserRouter>
    );
}

export default App;
