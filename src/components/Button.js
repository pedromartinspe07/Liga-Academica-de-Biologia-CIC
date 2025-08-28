// src/components/Button.js
import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({ text, link, secondary }) {
  const buttonClass = secondary ? 'button secondary' : 'button primary';
  return (
    <Link to={link} className={buttonClass}>
      {text}
    </Link>
  );
}

