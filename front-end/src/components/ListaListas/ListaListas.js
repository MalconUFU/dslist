import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import CardLista from '../CardLista/CardLista';
import './ListaListas.css';
import {Link} from 'react-router-dom';

const ListaListas = () => {
  const [listas, setListas] = useState([]);

  useEffect(() => {
    api.get('/lists')
      .then(res => setListas(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className='container-listas'>
      <h1 className='titulo'>Gêneros</h1>  
      <div className='lista' >
      <ul>
        {listas.map(lista => (
          <li key={lista.id}>
              <Link to={`/lists/${lista.id}/games`} className="link-card">
                <CardLista nome={lista.name} />
              </Link>
            </li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default ListaListas;