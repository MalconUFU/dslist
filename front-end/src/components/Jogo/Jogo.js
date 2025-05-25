import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';
import './Jogo.css';

const Jogo = () => {
    const { id } = useParams();
    const [jogo, setJogo] = useState([]);

    useEffect(() => {
        api.get(`/games/${id}`)
            .then(res => setJogo(res.data))
            .catch(err => console.error(err));
    }, [id]);

    if (!jogo) {
        return <p>Carregando...</p>;
    }

    return (
        <div className='caixa'>
            <div className='container-jogo'>
                <img className="jogo-imagem" src={jogo.imgUrl} alt={jogo.title} />
                <div className="jogo-conteudo">
                    <h2 className="jogo-titulo">{jogo.title}</h2>
                    <p className="jogo-ano">{jogo.year}</p>
                    <p className='jogo-genero'>Gênero:{jogo.genre}</p>
                    <p className='jogo-plataforma'>Plataformas: {jogo.platforms}</p>
                    <p className="jogo-nota">Nota: {jogo.score}</p>
                    <p className='jogo-descricao-curta'>{jogo.shortDescription}</p>
                    <p className="jogo-descricao">{jogo.longDescription}</p>
                </div>
            </div>
        </div>
    );
};

export default Jogo;
