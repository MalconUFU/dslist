import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../../services/api';
import Card from '../Card/Card';
import './ListaPorGenero.css';

import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  SortableContext,
  useSortable,
  arrayMove,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

function SortableItem({ id, children }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    cursor: 'grab',
    listStyle: 'none'
  };

  return (
    <li ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {children}
    </li>
  );
}

const ListaPorGenero = () => {
  const { id: listId } = useParams();
  const [jogos, setJogos] = useState([]);

  useEffect(() => {
    api.get(`/lists/${listId}/games`)
      .then(res => setJogos(res.data))
      .catch(err => console.error(err));
  }, [listId]);

  const sensors = useSensors(useSensor(PointerSensor));

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      const oldIndex = jogos.findIndex(j => j.id === active.id);
      const newIndex = jogos.findIndex(j => j.id === over.id);
      const newOrder = arrayMove(jogos, oldIndex, newIndex);
      setJogos(newOrder);

      api.post(`/lists/${listId}/replacement`, {
        sourceIndex: oldIndex,
        destinationIndex: newIndex
      }).catch(err => console.error(err));
    }
  };

  return (
    <div className='container-lista-genero'>
      <div className='lista-genero'>
        <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
          <SortableContext items={jogos.map(j => j.id)} strategy={verticalListSortingStrategy}>
            <ul>
              {jogos.map(jogo => (
                <SortableItem key={jogo.id} id={jogo.id}>
                  <Link to={`/games/${jogo.id}`} className="link-card">
                    <Card
                      imagem={jogo.imgUrl}
                      titulo={jogo.title}
                      descricao={jogo.shortDescription}
                      ano={jogo.year}
                    />
                  </Link>
                </SortableItem>
              ))}
            </ul>
          </SortableContext>
        </DndContext>
      </div>
    </div>
  );
};

export default ListaPorGenero;