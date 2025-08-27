document.addEventListener('DOMContentLoaded', () => {

    // ===========================================
    // 1. Controle do Menu Responsivo (Hambúrguer)
    // ===========================================
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        // Alterna a classe 'active' no clique para abrir/fechar o menu
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });

        // Fecha o menu quando um link é clicado (útil em menus de página única)
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });
    }

    // ===========================================
    // 2. Animação de Entrada de Seções (Fade-in)
    // ===========================================
    const sections = document.querySelectorAll('.content-section, .chart-container, .publication-gallery, .profile-card');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    // ===========================================
    // 3. Rolagem Suave (Smooth Scrolling)
    // ===========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===========================================
    // 4. Destaque do Menu de acordo com a Posição
    // ===========================================
    const navLinks = document.querySelectorAll('.nav-menu a');
    const sectionsToObserve = document.querySelectorAll('section');

    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Remove a classe 'active-link' de todos os links
                navLinks.forEach(link => {
                    link.classList.remove('active-link');
                });
                
                // Adiciona 'active-link' ao link correspondente à seção visível
                const currentId = entry.target.id;
                const correspondingLink = document.querySelector(`.nav-menu a[href*="#${currentId}"]`);
                if (correspondingLink) {
                    correspondingLink.classList.add('active-link');
                } else {
                    // Para a página inicial, se não houver ID correspondente, ativa o link de Início
                    document.querySelector('.nav-menu a[href="index.html"]').classList.add('active-link');
                }
            }
        });
    }, {
        rootMargin: '-50% 0px -50% 0px', // Ajusta a margem para que o centro da tela dispare a interseção
        threshold: 0
    });

    sectionsToObserve.forEach(section => {
        if (section.id) { // Observa apenas seções com ID para vincular ao menu
            navObserver.observe(section);
        }
    });

});
