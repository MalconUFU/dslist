import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../../services/api';
import Card from '../Card/Card';
import './ListaPorGenero.css';

const ListaPorGenero = () => {
    const { id } = useParams();
    const [jogos, setJogos] = useState([]);

    useEffect(() => {
        api.get(`/lists/${id}/games`)
            .then(res => setJogos(res.data))
            .catch(err => console.error(err));
    }, [id]);

    return (
        <div className='container-lista-genero'>
            <div className='lista-genero'>
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
        </div>
    );
};

export default ListaPorGenero;
