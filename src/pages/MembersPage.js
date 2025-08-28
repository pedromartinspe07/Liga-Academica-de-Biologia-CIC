// src/pages/MembersPage.js
import React from 'react';
import MemberCard from '../components/MemberCard';

// Dados completos dos membros
const membersData = [
  { name: 'Flora Nascimento', group: '1º Ano' },
  { name: 'Gabriele Machado', group: '1º Ano' },
  { name: 'Gabrielly Marinho', group: '1º Ano' },
  { name: 'Alícia Vitória', group: '1º Ano' },
  { name: 'Heitor', group: '1º Ano' },
  { name: 'Bruno', group: '1º Ano' },
  { name: 'Maria Eduarda Gaspar', group: '2º Ano A' },
  { name: 'Mayra', group: '2º Ano A' },
  { name: 'Maria Clara', group: '2º Ano A' },
  { name: 'Ana Beatriz do Canto', group: '2º Ano A' },
  { name: 'Yasmin Melo', group: '2º Ano A' },
  { name: 'Julia Beatriz', group: '2º Ano A' },
  { name: 'Julie Azevedo', group: '2º Ano A' },
  { name: 'Giovana Silveira', group: '2º Ano B' },
  { name: 'Júlia Silveira', group: '2º Ano B' },
  { name: 'Eutália Duarte', group: '2º Ano B' },
  { name: 'Fernando José', group: '2º Ano B' },
  { name: 'Adélia Amorim', group: '2º Ano B' },
  { name: 'Pedro Miguel', group: '2º Ano B' },
  { name: 'Maria Vitória Galamba', group: '2º Ano B' },
  { name: 'Arthur Lemos', group: '3º Ano' },
  { name: 'Marília Laura', group: '3º Ano' },
  { name: 'Lyvia Beatriz', group: '3º Ano' },
  { name: 'Taísa Paiva', group: '3º Ano' },
  { name: 'Maria Letícia', group: '3º Ano' },
  { name: 'Maria Eduarda', group: '3º Ano' },
  { name: 'Pedro Martins', group: '3º Ano' },
];

export default function MembersPage() {
  return (
    <div className="members-container">
      <h2>Membros</h2>
      <div className="members-grid">
        {membersData.map((member, index) => (
          <MemberCard key={index} name={member.name} group={member.group} />
        ))}
      </div>
    </div>
  );
}