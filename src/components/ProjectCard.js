// src/components/ProjectCard.js
import React from 'react';

export default function ProjectCard({ title, description, members }) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="project-members">
        <h4>Membros:</h4>
        <ul>
          {members.map((member, index) => (
            <li key={index}>{member}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}