// src/components/FadeInOnScroll.js
import React, { useRef, useEffect, useState } from 'react';

/**
 * Componente que aplica uma animação de fade-in quando entra na viewport.
 * O conteúdo interno do componente é animado.
 */
const FadeInOnScroll = ({ children }) => {
    // 1. Cria uma referência para o elemento DOM que será observado.
    const domRef = useRef();
    // 2. Cria um estado para controlar se o elemento está visível.
    const [isVisible, setVisible] = useState(false);

    // 3. O 'useEffect' lida com a lógica do IntersectionObserver.
    useEffect(() => {
        // Opções do observador, semelhantes às do seu main.js
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            // Se o elemento estiver visível, atualiza o estado para 'true' e para de observar.
            if (entries[0].isIntersecting) {
                setVisible(true);
                observer.unobserve(domRef.current);
            }
        }, observerOptions);

        // Inicia a observação do elemento com a nossa referência.
        if (domRef.current) {
            observer.observe(domRef.current);
        }

        // 4. Retorna uma função de limpeza que desconecta o observador.
        // Isso é crucial para evitar vazamento de memória.
        return () => {
            if (domRef.current) {
                observer.disconnect();
            }
        };
    }, []); // Array de dependências vazio para o efeito rodar apenas uma vez.

    return (
        <div
            ref={domRef}
            // 5. Adiciona condicionalmente a classe 'visible' se o estado for verdadeiro.
            // O seu CSS fará o resto da animação.
            className={`content-section ${isVisible ? 'visible' : ''}`}
        >
            {children}
        </div>
    );
};

export default FadeInOnScroll;