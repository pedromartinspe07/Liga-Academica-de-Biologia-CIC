// src/components/MemberCard.js
import React from 'react';

export default function MemberCard({ name, group }) {
  return (
    <div className="member-card">
      <h4>{name}</h4>
      <p>Grupo: {group}</p>
    </div>
  );
}