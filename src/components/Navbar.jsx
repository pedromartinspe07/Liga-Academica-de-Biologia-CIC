// src/components/Navbar.jsx

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

// Array de links com as rotas correspondentes
const navLinks = [
    { name: 'Início', to: '/' },
    { name: 'O Projeto', to: '/projeto' },
    { name: 'Referencial', to: '/referencial' },
    { name: 'Resultados', to: '/resultados' },
    { name: 'Publicações', to: '/publicacoes' },
    { name: 'Dados', to: '/dados' },
    { name: 'Glossário', to: '/glossario' },
    { name: 'Sobre', to: '/sobre' },
    { name: 'Contato', to: '/contato' },
];

const Navbar = () => {
    // Estado para controlar a visibilidade do menu de navegação em dispositivos móveis
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };

    return (
        <header className="bg-white shadow-md">
            <nav className="container mx-auto px-4 py-4 flex items-center justify-between" role="navigation" aria-label="Menu Principal">
                {/* Logo */}
                <NavLink className="flex items-center rounded-md" to="/">
                    <img src="https://placehold.co/40x40/E8E8E8/404040?text=LABIC" alt="Ícone da Logo" className="h-10" />
                    <span className="ml-2 text-xl font-bold text-gray-800 hidden md:block">LABIC</span>
                </NavLink>

                {/* Botão para abrir/fechar menu em mobile */}
                <button
                    className="md:hidden p-2 rounded-full text-gray-600 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
                    type="button"
                    onClick={toggleMenu}
                    aria-controls="main-menu"
                    aria-expanded={isMenuOpen}
                    aria-label="Abrir menu de navegação"
                >
                    {isMenuOpen ? 
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg> 
                        : 
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    }
                </button>

                {/* Conteúdo do menu de navegação */}
                <div
                    className={`md:flex md:items-center w-full md:w-auto ${isMenuOpen ? 'block' : 'hidden'}`}
                    id="main-menu"
                >
                    <ul className="flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0 items-center w-full">
                        {navLinks.map(link => (
                            <li className="nav-item w-full md:w-auto" key={link.to}>
                                <NavLink
                                    className={({ isActive }) => 
                                        `block py-2 px-4 transition-colors duration-200 ${
                                            isActive 
                                            ? 'font-bold text-blue-600 border-b-2 border-blue-600' 
                                            : 'text-gray-800 hover:text-blue-600'
                                        }`
                                    }
                                    to={link.to}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
