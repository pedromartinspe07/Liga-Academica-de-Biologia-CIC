// src/App.js

import React from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage'; // Importa o novo componente HomePage
import './css/style.css'; 

function App() {
    return (
        <div>
            {/* O Navbar será sempre visível, independentemente do conteúdo */}
            <Navbar />
            
            {/* O HomePage agora é o conteúdo principal da sua página */}
            <HomePage />
        </div>
    );
}

export default App;