// src/hooks/useActiveSection.js

import { useEffect, useState } from 'react';

/**
 * Hook personalizado para determinar qual seção está ativa (visível na viewport).
 * Ele usa a API IntersectionObserver para rastrear a visibilidade dos elementos.
 *
 * @param {Array<string>} sectionIds - Um array de IDs de strings das seções a serem observadas.
 * @param {string} rootMargin - A margem de interseção, usada para definir a área de detecção.
 * O valor padrão de '-50% 0px -50% 0px' centraliza a detecção no meio da viewport.
 * @returns {string | null} O ID da seção ativa, ou null se nenhuma seção estiver visível.
 */
const useActiveSection = (sectionIds, rootMargin = '-50% 0px -50% 0px') => {
    // Estado para armazenar o ID da seção ativa.
    const [activeSection, setActiveSection] = useState(null);

    useEffect(() => {
        // Cria uma nova instância do IntersectionObserver.
        const observer = new IntersectionObserver(
            (entries) => {
                // Itera sobre todas as entradas observadas.
                entries.forEach((entry) => {
                    // Se o elemento estiver dentro da área de interseção,
                    // atualiza o estado com o ID desse elemento.
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                // Configura as opções do observador.
                rootMargin,
                threshold: 0
            }
        );

        // Observa cada seção fornecida pelo array de IDs.
        sectionIds.forEach((id) => {
            const element = document.getElementById(id);
            if (element) {
                observer.observe(element);
            }
        });

        // Retorna uma função de limpeza para desconectar o observador
        // quando o componente for desmontado, prevenindo vazamentos de memória.
        return () => observer.disconnect();
    }, [sectionIds, rootMargin]); // O efeito é re-executado se os IDs ou a margem mudarem.

    return activeSection;
};

export default useActiveSection;
