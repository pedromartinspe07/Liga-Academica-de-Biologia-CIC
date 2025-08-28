import React from 'react';
import { useParams } from 'react-router-dom';
import HomePage from './HomePage';
import ProjectPage from './ProjectPage';
import ResultsPage from './ResultsPage';
import ReferencialPage from './ReferencialPage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import BlogPage from './BlogPage';
import MembersPage from './MembersPage';
import '../style.css'; // Certifique-se de que o caminho está correto

/**
 * Componente dinâmico que renderiza a página correta com base no parâmetro da URL.
 * Isso evita a necessidade de declarar uma rota para cada página individualmente.
 */
export default function ContentPage() {
  const { page } = useParams();

  // Mapeia o nome da página da URL para o componente correspondente
  const renderPage = () => {
    switch (page) {
      case 'home':
        return <HomePage />;
      case 'projetos':
        return <ProjectPage />;
      case 'resultados':
        return <ResultsPage />;
      case 'referencial':
        return <ReferencialPage />;
      case 'sobre':
        return <AboutPage />;
      case 'contato':
        return <ContactPage />;
      case 'blog':
        return <BlogPage />;
      case 'membros':
        return <MembersPage />;
      default:
        // Se a URL não corresponder a nenhuma página, retorne um 404
        return (
          <div className="container" style={{ textAlign: 'center', marginTop: '5rem' }}>
            <h1>404 - Página não encontrada</h1>
            <p>A URL que você digitou não corresponde a nenhuma página existente.</p>
          </div>
        );
    }
  };

  return <main className="main-content">{renderPage()}</main>;
}
