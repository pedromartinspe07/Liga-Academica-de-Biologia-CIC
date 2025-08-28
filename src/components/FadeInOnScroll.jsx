// src/components/FadeInOnScroll.jsx

import React, { useRef, useEffect, useState } from 'react';

/**
 * Componente que aplica uma animação de fade-in quando entra na viewport.
 * O conteúdo interno do componente é animado.
 * * Este componente usa a API IntersectionObserver para detectar quando o elemento
 * se torna visível na tela e aplica uma animação de transição usando classes do Tailwind CSS.
 * Ele renderiza o 'children' que é passado para ele.
 */
const FadeInOnScroll = ({ children }) => {
    // 1. Cria uma referência para o elemento DOM que será observado.
    const domRef = useRef();
    // 2. Cria um estado para controlar se o elemento está visível.
    const [isVisible, setVisible] = useState(false);

    // 3. O 'useEffect' lida com a lógica do IntersectionObserver.
    useEffect(() => {
        // Objeto de opções para o IntersectionObserver.
        // O 'threshold' de 0.1 significa que o callback será acionado quando
        // 10% do elemento estiver visível na viewport.
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            // Se o elemento estiver visível (isIntersecting), atualiza o estado
            // para 'true' e para de observar para evitar re-execução desnecessária.
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
        // Isso é crucial para evitar vazamento de memória quando o componente é desmontado.
        return () => {
            if (domRef.current) {
                observer.disconnect();
            }
        };
    }, []); // Array de dependências vazio para o efeito rodar apenas uma vez na montagem do componente.

    return (
        <div
            ref={domRef}
            // 5. Adiciona condicionalmente as classes 'opacity-100' e 'translate-y-0'
            // se o estado 'isVisible' for verdadeiro, criando o efeito de fade-in e deslize para cima.
            // As classes 'transition' e 'duration' controlam a animação.
            className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
            {children}
        </div>
    );
};

export default FadeInOnScroll;
