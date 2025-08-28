// src/components/Navbar.js
import React, { useState } from 'react';
import 'css/style.css'; // Verifique se o caminho do seu CSS está correto

// 1. Array de links para tornar o código mais flexível
const navLinks = [
    { name: 'Início', href: 'index.html', active: true },
    { name: 'O Projeto', href: 'projeto.html' },
    { name: 'Referencial', href: 'referencial.html' },
    { name: 'Resultados', href: 'resultados.html' },
    { name: 'Publicações', href: 'publicacoes.html' },
    { name: 'Dados', href: 'dados.html' },
    { name: 'Glossário', href: 'glossario.html' },
    { name: 'Sobre', href: 'sobre.html' },
    { name: 'Contato', href: 'contato.html' },
];

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // 2. Função de toggle mais simples e direta
    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };

    // Função para fechar o menu ao clicar em um link
    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    // 3. Lógica para verificar o link ativo (simples, por URL)
    const isLinkActive = (href) => {
        return window.location.pathname.includes(href) || window.location.pathname.includes('/' + href);
    };

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Seu Logo</a>
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={toggleMenu}
                    aria-controls="navbarNav"
                    aria-expanded={isMenuOpen}
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        {/* 4. Mapeando a lista de links para gerar os elementos */}
                        {navLinks.map(link => (
                            <li className="nav-item" key={link.name}>
                                <a
                                    className={`nav-link ${isLinkActive(link.href) ? 'active' : ''}`}
                                    onClick={handleLinkClick}
                                    href={link.href}
                                    aria-current={isLinkActive(link.href) ? "page" : undefined}
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