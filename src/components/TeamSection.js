// src/components/TeamSection.js
import React from 'react';
import MemberCard from './MemberCard';
import { membersData } from '../data/membersData'; // Importe os dados de um arquivo separado

export default function TeamSection() {
  return (
    <div className="team-section">
      <h2>Membros da Liga</h2>
      <div className="members-grid">
        {membersData.map((member, index) => (
          <MemberCard key={index} name={member.name} group={member.group} />
        ))}
      </div>
    </div>
  );
}