// src/components/AdvisorCard.js
import React from 'react';

export default function advisorcard({ name, bio }) {
  return (
    <div className="advisor-card">
      <img src="/images/vanbasten.png" alt={name} />
      <h3>{name}</h3>
      <p>{bio}</p>
    </div>
  );
}