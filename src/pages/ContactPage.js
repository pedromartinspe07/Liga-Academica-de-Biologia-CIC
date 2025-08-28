// src/pages/ContactPage.js
import React from 'react';
import ContactForm from '../components/ContactForm';

export default function ContactPage() {
  return (
    <div className="contact-container">
      <h2>Contato</h2>
      <p>
        Entre em contato conosco para saber mais sobre nossos projetos ou para
        fazer parte da liga.
      </p>
      <ContactForm />
    </div>
  );
}