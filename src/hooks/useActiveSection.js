// src/hooks/useActiveSection.js
import { useEffect, useState } from 'react';

// Recebe os IDs das seções para observar e a margem de interseção
const useActiveSection = (sectionIds, rootMargin = '-50% 0px -50% 0px') => {
    const [activeSection, setActiveSection] = useState(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Define a seção ativa pelo ID do elemento
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                rootMargin,
                threshold: 0
            }
        );

        // Observa cada seção pelo seu ID
        sectionIds.forEach((id) => {
            const element = document.getElementById(id);
            if (element) {
                observer.observe(element);
            }
        });

        // Retorna uma função de limpeza para o useEffect
        return () => observer.disconnect();
    }, [sectionIds, rootMargin]);

    return activeSection;
};

export default useActiveSection;