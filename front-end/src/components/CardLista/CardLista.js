import React from 'react';
import './CardLista.css';

const CardLista = ({ nome }) => {
  return (
    <div className="cardLista-container">
      <h1 className='nome-lista'>{nome}</h1>
    </div>
  );
};

export default CardLista;