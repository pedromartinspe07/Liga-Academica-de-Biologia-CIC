// src/components/ContactForm.js
import React from 'react';

export default function ContactForm() {
  return (
    <form className="contact-form">
      <label htmlFor="name">Nome:</label>
      <input type="text" id="name" name="name" />
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" />
      <label htmlFor="message">Mensagem:</label>
      <textarea id="message" name="message" rows="4" />
      <button type="submit">Enviar</button>
    </form>
  );
}