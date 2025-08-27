document.addEventListener('DOMContentLoaded', () => {

    // ===========================================
    // 1. Controle do Menu Responsivo (Hambúrguer)
    // ===========================================
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    if (navbarToggler && navbarCollapse) {
        // Função para alternar o estado do menu
        const toggleMenu = () => {
            const isExpanded = navbarToggler.getAttribute('aria-expanded') === 'true';
            navbarToggler.setAttribute('aria-expanded', !isExpanded);
            navbarCollapse.classList.toggle('show');
        };

        // Abre/fecha o menu ao clicar no botão
        navbarToggler.addEventListener('click', toggleMenu);

        // Fecha o menu quando um link é clicado
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                // Checa se o menu está aberto para telas menores antes de fechar
                if (window.innerWidth <= 992) {
                    toggleMenu();
                }
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
    const sectionsToObserve = document.querySelectorAll('section');

    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Remove a classe 'active' de todos os links
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    link.removeAttribute('aria-current'); // Melhoria de acessibilidade
                });
                
                // Adiciona 'active' ao link correspondente à seção visível
                const currentId = entry.target.id;
                const correspondingLink = document.querySelector(`.nav-link[href*="#${currentId}"]`);
                if (correspondingLink) {
                    correspondingLink.classList.add('active');
                    correspondingLink.setAttribute('aria-current', 'page');
                } else {
                    // Ativa o link de Início se a seção atual não tiver ID (p. ex., Hero)
                    const homeLink = document.querySelector('.nav-link[href="index.html"]');
                    if (homeLink) {
                        homeLink.classList.add('active');
                        homeLink.setAttribute('aria-current', 'page');
                    }
                }
            }
        });
    }, {
        rootMargin: '-50% 0px -50% 0px', // O centro da tela dispara a interseção
        threshold: 0
    });

    sectionsToObserve.forEach(section => {
        if (section.id) { // Observa apenas seções com ID
            navObserver.observe(section);
        }
    });

});