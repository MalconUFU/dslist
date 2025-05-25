import React from 'react';
import './Card.css';

const Card = ({ imagem, titulo, descricao, ano }) => {
  return (
    <div className="card-container">
      <img className="card-imagem" src={imagem} alt={titulo}/>
      <div className="card-conteudo">
        <h2 className="card-titulo">{titulo}</h2>
        <p className="card-descricao">{descricao}</p>
        <p className="card-ano">{ano}</p>
      </div>
    </div>
  );
};

export default Card;