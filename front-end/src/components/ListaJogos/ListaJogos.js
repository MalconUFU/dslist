import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import Card from '../Card/Card';
import './ListaJogos.css';
import { Link } from 'react-router-dom';

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
          <li key={jogo.id} style={{ listStyle: 'none' }}>
            <Link to={`/games/${jogo.id}`} className="link-card">
              <Card
                imagem={jogo.imgUrl}
                titulo={jogo.title}
                descricao={jogo.shortDescription}
                ano={jogo.year}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaJogos;