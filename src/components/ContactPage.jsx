import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

/**
 * @file ContactPage.jsx
 * @description Componente da página de contato com um formulário funcional
 * e seções de informações de contato. O design é responsivo utilizando
 * Tailwind CSS.
 */

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

  // Manipulador de envio do formulário (lógica de envio simulada)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('Enviando...');

    // Lógica simulada de envio de formulário
    try {
      // Simulação de atraso de 1.5 segundos para o envio
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Simulação de sucesso
      setFormStatus('Mensagem enviada com sucesso!');
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Exemplo de como você faria uma chamada real para uma API
      // Nota: Esta parte está comentada porque não há um backend real.
      // const response = await fetch('/api/submit-contact', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(formData),
      // });
      // if (response.ok) {
      //   setFormStatus('Mensagem enviada com sucesso!');
      //   setFormData({ name: '', email: '', subject: '', message: '' });
      // } else {
      //   const errorData = await response.json();
      //   setFormStatus(errorData.message || 'Falha ao enviar a mensagem.');
      // }

    } catch (error) {
      console.error('Erro ao enviar o formulário:', error);
      setFormStatus('Ocorreu um erro ao enviar a mensagem. Tente novamente.');
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen font-inter">
      {/* Cabeçalho e barra de navegação */}
      <header className="bg-white shadow-md rounded-b-2xl">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between" role="navigation" aria-label="Menu Principal">
          {/* Logo */}
          <a className="flex items-center" href="#">
            <span className="font-extrabold text-2xl text-blue-600">LABIC</span>
          </a>

          {/* Botão para abrir/fechar menu em mobile */}
          <button
            className="md:hidden p-2 rounded-full text-gray-600 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-colors duration-200"
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
            className={`absolute z-50 top-20 right-4 md:static md:flex md:items-center w-full md:w-auto ${isMenuOpen ? 'block bg-white p-6 rounded-lg shadow-xl' : 'hidden'}`}
            id="main-menu"
          >
            <ul className="flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0 items-start md:items-center w-full">
              {/* Simplificado para fins de exemplo */}
              <li className="w-full md:w-auto">
                <a className="block py-2 px-4 text-gray-800 hover:text-blue-600 transition-colors duration-200" href="#">Início</a>
              </li>
              <li className="w-full md:w-auto">
                <a className="block py-2 px-4 text-gray-800 hover:text-blue-600 transition-colors duration-200" href="#">O Projeto</a>
              </li>
              <li className="w-full md:w-auto">
                <a className="block py-2 px-4 text-gray-800 hover:text-blue-600 transition-colors duration-200" href="#">Dados</a>
              </li>
              <li className="w-full md:w-auto">
                <a className="block py-2 px-4 font-bold text-blue-600 border-b-2 border-blue-600" aria-current="page" href="#">Contato</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/* Conteúdo principal da página */}
      <main className="page-content py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 text-center mb-2">Entre em Contato</h1>
          <p className="text-center text-gray-600 mb-8">Nossa equipe está à disposição para responder a dúvidas e sugestões.</p>

          <section className="bg-white p-6 rounded-2xl shadow-lg mb-8">
            <p className="text-gray-700 leading-relaxed mb-6">Nossa equipe está à disposição para responder a dúvidas, discutir parcerias e receber sugestões. Sua contribuição é fundamental para o sucesso de nossos projetos. Escolha a melhor forma de se conectar conosco!</p>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card de E-mail */}
              <li className="p-6 bg-gray-100 rounded-lg shadow-sm text-center transition-transform duration-300 hover:scale-105">
                <img src="https://placehold.co/60x60/E8E8E8/404040?text=Email" alt="Ícone de E-mail" className="h-14 w-14 mx-auto mb-4 rounded-full" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">E-mail</h3>
                <p className="text-gray-600 mb-4">Para assuntos gerais, parcerias e colaborações.</p>
                <a href="mailto:labic.imaculada@gmail.com" className="text-blue-600 hover:text-blue-800 font-semibold underline">labic.imaculada@gmail.com</a>
              </li>

              {/* Card de Redes Sociais */}
              <li className="p-6 bg-gray-100 rounded-lg shadow-sm text-center transition-transform duration-300 hover:scale-105">
                <img src="https://placehold.co/60x60/E8E8E8/404040?text=Social" alt="Ícone de Redes Sociais" className="h-14 w-14 mx-auto mb-4 rounded-full" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">Redes Sociais</h3>
                <p className="text-gray-600 mb-4">Siga-nos para acompanhar o dia a dia de nossos projetos.</p>
                <a href="https://www.instagram.com/labic.imaculada/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-semibold underline">Instagram</a>
              </li>

              {/* Card de Orientação */}
              <li className="p-6 bg-gray-100 rounded-lg shadow-sm text-center transition-transform duration-300 hover:scale-105">
                <img src="https://placehold.co/60x60/E8E8E8/404040?text=Prof" alt="Ícone de Professor" className="h-14 w-14 mx-auto mb-4 rounded-full" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">Orientação</h3>
                <p className="text-gray-600 mb-4">Contato direto com o Professor Vanbasten Rocha.</p>
                <a href="mailto:vanbasten.rocha@colegiocic.com.br" className="text-blue-600 hover:text-blue-800 font-semibold underline">vanbasten.rocha@colegiocic.com.br</a>
              </li>
            </ul>
          </section>
          
          <section className="bg-white p-6 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Envie sua Mensagem</h2>
            <p className="text-gray-700 mb-6">Preencha o formulário abaixo e nossa equipe responderá o mais breve possível.</p>
            <form id="contact-form" onSubmit={handleSubmit} className="space-y-4">
              <div>
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow duration-200"
                />
              </div>
              <div>
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow duration-200"
                />
              </div>
              <div>
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow duration-200"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Escreva sua mensagem aqui..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow duration-200"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-md shadow-lg hover:bg-blue-700 transition-colors duration-300"
                disabled={formStatus === 'Enviando...'}
              >
                {formStatus === 'Enviando...' ? 'Enviando...' : 'Enviar Mensagem'}
              </button>
              {formStatus && (
                <div className="mt-4 text-center text-sm font-medium" role="status" aria-live="polite">
                  <p className={formStatus.includes('sucesso') ? 'text-green-600' : 'text-red-600'}>{formStatus}</p>
                </div>
              )}
            </form>
          </section>
        </div>
      </main>

      {/* Rodapé do site */}
      <footer className="bg-gray-900 text-gray-300 py-8 mt-12 rounded-t-2xl">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-center md:text-left">
          <div className="footer-info mb-4 md:mb-0">
            <p className="text-sm">&copy; 2025 - LABIC | Liga Acadêmica de Biologia.</p>
            <p className="text-sm mt-1">Orientação: Professor Vanbasten Rocha</p>
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
                className="h-10 w-10 rounded-full transition-transform duration-300 hover:scale-110"
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
