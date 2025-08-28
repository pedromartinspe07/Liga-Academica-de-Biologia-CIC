// src/pages/BlogPage.js
import React from 'react';
import Card from '../components/Card';

const blogPosts = [
  {
    title: 'A Importância dos Bioindicadores',
    date: '10 de Janeiro, 2025',
    excerpt: 'Descubra como pequenos organismos podem nos dizer muito sobre a saúde de um ecossistema aquático...',
    link: '/blog/post1'
  },
  {
    title: 'Monitoramento da Fauna Marinha em Suape',
    date: '25 de Fevereiro, 2025',
    excerpt: 'Nossa equipe de pesquisadores realizou uma expedição para mapear as espécies presentes na região...',
    link: '/blog/post2'
  },
  // Adicione mais posts aqui
];

export default function BlogPage() {
  return (
    <div className="blog-container">
      <h2>Blog</h2>
      <p>Fique por dentro das últimas notícias e descobertas da nossa liga.</p>
      <div className="blog-posts-grid">
        {blogPosts.map((post, index) => (
          <Card key={index}>
            <h3>{post.title}</h3>
            <p className="blog-date">{post.date}</p>
            <p>{post.excerpt}</p>
            <a href={post.link}>Ler mais</a>
          </Card>
        ))}
      </div>
    </div>
  );
}