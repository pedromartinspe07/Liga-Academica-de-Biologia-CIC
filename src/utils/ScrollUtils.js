// src/utils/ScrollUtils.js

/**
 * Função para rolar suavemente para um elemento específico na página.
 * Ela verifica se o ID de destino existe na URL e, em seguida,
 * rola para o elemento correspondente com uma transição suave.
 *
 * @param {string} targetId O ID do elemento de destino (ex: '#sobre').
 */
export const scrollToSection = (targetId) => {
    // Procura o elemento de destino no DOM usando o seletor CSS.
    const targetElement = document.querySelector(targetId);

    // Se o elemento for encontrado, rola suavemente para ele.
    if (targetElement) {
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    } else {
        // Se o elemento não for encontrado, exibe uma mensagem no console para depuração.
        console.error(`Elemento com o ID "${targetId}" não encontrado.`);
    }
};
