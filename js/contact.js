document.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault(); // Impede o envio padrão do formulário

            // Simula o envio
            formStatus.textContent = 'Enviando...';
            formStatus.style.color = '#004d40'; // Cor do tema

            // Simula um atraso de rede
            setTimeout(() => {
                formStatus.textContent = 'Mensagem enviada com sucesso! Agradecemos o seu contato.';
                formStatus.style.color = '#006400'; // Cor verde para sucesso
                form.reset(); // Limpa o formulário
            }, 2000);
        });
    }

});
