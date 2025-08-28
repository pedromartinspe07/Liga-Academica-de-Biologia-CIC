document.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (form) {
        form.addEventListener('submit', async (event) => {
            event.preventDefault(); // Impede o envio padrão do formulário

            // 1. Coleta os dados do formulário
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);

            // 2. Validação básica dos campos
            const name = data.name.trim();
            const email = data.email.trim();
            const message = data.message.trim();
            
            if (name === '' || email === '' || message === '') {
                showStatus('Por favor, preencha todos os campos.', 'error');
                return;
            }

            // 3. Simula o envio
            showStatus('Enviando...', 'info');

            try {
                // Simulação de envio real para um servidor
                // Substitua 'https://sua-api.com/contato' pela URL do seu endpoint de back-end
                const response = await fetch('https://httpbin.org/post', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                });

                if (response.ok) {
                    showStatus('Mensagem enviada com sucesso! Agradecemos o seu contato.', 'success');
                    form.reset();
                } else {
                    throw new Error('Erro no servidor. Tente novamente mais tarde.');
                }
            } catch (error) {
                showStatus(`Falha no envio: ${error.message}`, 'error');
            }
        });
    }

    /**
     * Atualiza o status do formulário na tela com a cor e mensagem corretas.
     * @param {string} message - A mensagem a ser exibida.
     * @param {string} type - O tipo de status: 'info', 'success', ou 'error'.
     */
    function showStatus(message, type) {
        formStatus.textContent = message;
        
        switch (type) {
            case 'info':
                formStatus.style.color = '#004d40'; // Cor do tema (azul escuro/verde)
                break;
            case 'success':
                formStatus.style.color = '#006400'; // Verde para sucesso
                break;
            case 'error':
                formStatus.style.color = '#dc3545'; // Vermelho para erro
                break;
            default:
                formStatus.style.color = '#000'; // Cor padrão
        }
    }

});
