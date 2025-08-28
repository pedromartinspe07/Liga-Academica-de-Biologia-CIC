import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const App = () => {
  // Estado para controlar a visibilidade do menu de navegação em dispositivos móveis
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Estado para os dados do formulário de contato
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  // Estado para a mensagem de status do formulário
  const [formStatus, setFormStatus] = useState('');

  // Função para alternar o estado do menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Manipulador de mudança para os campos do formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Manipulador de envio do formulário
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('Enviando...');

    // Lógica simulada de envio de formulário
    try {
      // Aqui você faria a chamada para a sua API ou serviço de backend
      // const response = await fetch('/submit-form', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(formData),
      // });
      
      // const result = await response.json();
      
      // if (response.ok) {
      //   setFormStatus('Mensagem enviada com sucesso!');
      //   setFormData({ name: '', email: '', subject: '', message: '' });
      // } else {
      //   setFormStatus(result.message || 'Falha ao enviar a mensagem.');
      // }

      // Simulação de sucesso
      await new Promise(resolve => setTimeout(resolve, 1500));
      setFormStatus('Mensagem enviada com sucesso!');
      setFormData({ name: '', email: '', subject: '', message: '' });

    } catch (error) {
      console.error('Erro ao enviar o formulário:', error);
      setFormStatus('Ocorreu um erro ao enviar a mensagem. Tente novamente.');
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen font-[Roboto]">
      {/* Cabeçalho e barra de navegação */}
      <header className="bg-white shadow-md">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between" role="navigation" aria-label="Menu Principal">
          {/* Logo */}
          <a className="flex items-center" href="index.html">
            <img src="https://placehold.co/40x40/E8E8E8/404040?text=LABIC" alt="Ícone da Logo" className="h-10" />
            <span className="ml-2 text-xl font-bold text-gray-800 hidden md:block">LABIC</span>
          </a>

          {/* Botão para abrir/fechar menu em mobile */}
          <button
            className="md:hidden p-2 rounded-full text-gray-600 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
            type="button"
            onClick={toggleMenu}
            aria-controls="main-menu"
            aria-expanded={isMenuOpen}
            aria-label="Abrir menu de navegação"
          >
            {isMenuOpen ? 
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg> 
              : 
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            }
          </button>

          {/* Conteúdo do menu de navegação */}
          <div
            className={`md:flex md:items-center w-full md:w-auto ${isMenuOpen ? 'block' : 'hidden'}`}
            id="main-menu"
          >
            <ul className="flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0 items-center w-full">
              <li className="nav-item w-full md:w-auto">
                <a className="nav-link block py-2 px-4 text-gray-800 hover:text-blue-600 transition-colors duration-200" href="index.html">Início</a>
              </li>
              <li className="nav-item w-full md:w-auto">
                <a className="nav-link block py-2 px-4 text-gray-800 hover:text-blue-600 transition-colors duration-200" href="projeto.html">O Projeto</a>
              </li>
              <li className="nav-item w-full md:w-auto">
                <a className="nav-link block py-2 px-4 text-gray-800 hover:text-blue-600 transition-colors duration-200" href="referencial.html">Referencial</a>
              </li>
              <li className="nav-item w-full md:w-auto">
                <a className="nav-link block py-2 px-4 text-gray-800 hover:text-blue-600 transition-colors duration-200" href="resultados.html">Resultados</a>
              </li>
              <li className="nav-item w-full md:w-auto">
                <a className="nav-link block py-2 px-4 text-gray-800 hover:text-blue-600 transition-colors duration-200" href="publicacoes.html">Publicações</a>
              </li>
              <li className="nav-item w-full md:w-auto">
                <a className="nav-link block py-2 px-4 text-gray-800 hover:text-blue-600 transition-colors duration-200" href="dados.html">Dados</a>
              </li>
              <li className="nav-item w-full md:w-auto">
                <a className="nav-link block py-2 px-4 text-gray-800 hover:text-blue-600 transition-colors duration-200" href="glossario.html">Glossário</a>
              </li>
              <li className="nav-item w-full md:w-auto">
                <a className="nav-link block py-2 px-4 text-gray-800 hover:text-blue-600 transition-colors duration-200" href="sobre.html">Sobre</a>
              </li>
              <li className="nav-item w-full md:w-auto">
                <a className="nav-link block py-2 px-4 font-bold text-blue-600 border-b-2 border-blue-600" aria-current="page" href="contato.html">Contato</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/* Conteúdo principal da página */}
      <main className="page-content py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl lg:text-5xl font-[Playfair+Display] font-bold text-gray-900 text-center mb-2">Entre em Contato</h1>

          <section className="content-section bg-white p-6 rounded-lg shadow-md mb-8">
            <p className="text-gray-700 leading-relaxed mb-6">Nossa equipe está à disposição para responder a dúvidas, discutir parcerias e receber sugestões. Sua contribuição é fundamental para o sucesso de nossos projetos. Escolha a melhor forma de se conectar conosco!</p>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card de E-mail */}
              <li className="contact-card p-6 bg-gray-100 rounded-lg shadow-sm text-center transition-transform duration-300 hover:scale-105">
                <img src="https://placehold.co/60x60/E8E8E8/404040?text=Email" alt="Ícone de E-mail" className="h-14 w-14 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">E-mail</h3>
                <p className="text-gray-600 mb-4">Para assuntos gerais, parcerias e colaborações.</p>
                <a href="mailto:labic.imaculada@gmail.com" className="text-blue-600 hover:text-blue-800 font-semibold underline">labic.imaculada@gmail.com</a>
              </li>

              {/* Card de Redes Sociais */}
              <li className="contact-card p-6 bg-gray-100 rounded-lg shadow-sm text-center transition-transform duration-300 hover:scale-105">
                <img src="https://placehold.co/60x60/E8E8E8/404040?text=Social" alt="Ícone de Redes Sociais" className="h-14 w-14 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">Redes Sociais</h3>
                <p className="text-gray-600 mb-4">Siga-nos para acompanhar o dia a dia de nossos projetos.</p>
                <a href="https://www.instagram.com/labic.imaculada/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-semibold underline">Instagram</a>
              </li>

              {/* Card de Orientação */}
              <li className="contact-card p-6 bg-gray-100 rounded-lg shadow-sm text-center transition-transform duration-300 hover:scale-105">
                <img src="https://placehold.co/60x60/E8E8E8/404040?text=Prof" alt="Ícone de Professor" className="h-14 w-14 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">Orientação</h3>
                <p className="text-gray-600 mb-4">Contato direto com o Professor Vanbasten Rocha.</p>
                <a href="mailto:vanbasten.rocha@colegiocic.com.br" className="text-blue-600 hover:text-blue-800 font-semibold underline">vanbasten.rocha@colegiocic.com.br</a>
              </li>
            </ul>
          </section>
          
          <section className="content-section contact-form-section bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-3xl font-[Playfair+Display] font-bold text-gray-900 mb-2">Envie sua Mensagem</h2>
            <p className="text-gray-700 mb-6">Preencha o formulário abaixo e nossa equipe responderá o mais breve possível.</p>
            <form id="contact-form" onSubmit={handleSubmit} className="space-y-4">
              <div className="form-group">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                  placeholder="Seu nome completo"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                  placeholder="seu.email@exemplo.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Assunto</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  autoComplete="subject"
                  placeholder="Assunto da mensagem"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Escreva sua mensagem aqui..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-md hover:bg-blue-700 transition-colors duration-300"
              >
                Enviar Mensagem
              </button>
              {formStatus && (
                <div className="form-status mt-4 text-center text-sm font-medium" role="status" aria-live="polite">
                  <p className={formStatus.includes('sucesso') ? 'text-green-600' : 'text-red-600'}>{formStatus}</p>
                </div>
              )}
            </form>
          </section>
        </div>
      </main>

      {/* Rodapé do site */}
      <footer className="site-footer bg-gray-900 text-gray-300 py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-center md:text-left">
          <div className="footer-info mb-4 md:mb-0">
            <p>&copy; 2025 - LABIC | Liga Acadêmica de Biologia.</p>
            <p className="mt-1">Orientação: Professor Vanbasten Rocha</p>
          </div>
          <div className="footer-social-links">
            <a
              href="https://www.instagram.com/labic.imaculada/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da LABIC"
            >
              <img
                src="https://placehold.co/40x40/E8E8E8/404040?text=IG"
                alt="Ícone do Instagram"
                className="h-10 w-10 transition-transform duration-300 hover:scale-110"
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
