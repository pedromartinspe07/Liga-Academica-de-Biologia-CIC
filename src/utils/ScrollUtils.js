// src/utils/ScrollUtils.js

/**
 * Função para rolar suavemente para um elemento.
 * @param {string} targetId O ID do elemento de destino (ex: '#sobre').
 */
export const scrollToSection = (targetId) => {
    // Se a rolagem é para uma âncora na mesma página, usa a rolagem suave.
    if (targetId.startsWith('#')) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    } else {
        // Se é um link para outra página, permite o comportamento padrão.
        window.location.href = targetId;
    }
};