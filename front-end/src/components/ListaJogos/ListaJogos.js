import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import Card from '../Card/Card';
import './ListaJogos.css';

const ListaJogos = () => {
  const [jogos, setJogos] = useState([]);

  useEffect(() => {
    api.get('/games')
      .then(res => setJogos(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className='container-jogos'>
      <ul>
        {jogos.map(jogo => (
          <Card
            key={jogo.id}
            imagem={jogo.imgUrl}
            titulo={jogo.title}
            descricao={jogo.shortDescription}
            ano={jogo.year}
          />
        ))}
      </ul>
    </div>
  );
};

export default ListaJogos;