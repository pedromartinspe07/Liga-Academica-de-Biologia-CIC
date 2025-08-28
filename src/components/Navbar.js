// src/components/Navbar.js
import React, { useState } from 'react';
import { scrollToSection } from '../utils/ScrollUtils';
import useActiveSection from '../hooks/useActiveSection';
import 'css/style.css'; 

// Array de links com os IDs das seções correspondentes
const navLinks = [
    { name: 'Início', href: '#inicio', id: 'inicio' },
    { name: 'O Projeto', href: '#projeto', id: 'projeto' },
    { name: 'Referencial', href: '#referencial', id: 'referencial' },
    { name: 'Resultados', href: '#resultados', id: 'resultados' },
    { name: 'Publicações', href: '#publicacoes', id: 'publicacoes' },
    { name: 'Dados', href: '#dados', id: 'dados' },
    { name: 'Glossário', href: '#glossario', id: 'glossario' },
    { name: 'Sobre', href: '#sobre', id: 'sobre' },
    { name: 'Contato', href: '#contato', id: 'contato' },
];

// Mapeia apenas os IDs dos links para o nosso hook de rolagem
const sectionIds = navLinks.map(link => link.id);

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // Usa o hook para obter o ID da seção que está no centro da tela
    const activeSection = useActiveSection(sectionIds);

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };

    const handleLinkClick = (e, href) => {
        e.preventDefault();
        // Usa a função de rolagem suave que criamos
        scrollToSection(href);
        // Fecha o menu depois que o usuário clica em um link
        setIsMenuOpen(false);
    };

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand" href="#inicio" onClick={(e) => handleLinkClick(e, '#inicio')}>Seu Logo</a>
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={toggleMenu}
                    aria-controls="navbarNav"
                    aria-expanded={isMenuOpen}
                    aria-label="Toggle navigation"
                >
                    {/* Linhas animadas do botão hambúrguer */}
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>
                <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        {navLinks.map(link => (
                            <li className="nav-item" key={link.id}>
                                <a
                                    // Compara o ID do link com o ID ativo retornado pelo hook
                                    className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                                    onClick={(e) => handleLinkClick(e, link.href)}
                                    href={link.href}
                                    aria-current={activeSection === link.id ? 'page' : undefined}
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;