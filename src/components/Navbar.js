// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import logoLabic from '../assets/images/logo_labic.png'; // Importa a imagem do logo

export default function Navbar() {
  const navLinks = [
    { text: 'Home', path: '/' },
    { text: 'O Projeto', path: '/projetos' },
    { text: 'Referencial', path: '/referencial' },
    { text: 'Resultados', path: '/resultados' },
    { text: 'Publicações', path: '/publicacoes' },
    { text: 'Dados', path: '/dados' },
    { text: 'Glossário', path: '/glossario' },
    { text: 'Blog', path: '/blog' },
    { text: 'Sobre', path: '/sobre' },
    { text: 'Contato', path: '/contato' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={logoLabic} alt="Logo da LABIC" className="logo" />
        </Link>
      </div>
      <ul className="navbar-links">
        {navLinks.map((link) => (
          <li key={link.text}>
            <Link to={link.path}>{link.text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
