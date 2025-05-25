import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './reset.css';
import './App.css';

import Home from './pags/Home';
import Listas from './pags/Listas';
import Genero from './pags/Genero';
import PaginaJogo from './pags/PaginaJogo';

function App() {
  return (
    <div className='fundo'>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lists" element={<Listas/>}/>
        <Route path="/lists/:id/games" element={<Genero />} />
        <Route path='/games/:id' element={<PaginaJogo/>}/>
      </Routes>
    </Router>
  </div>
  );
}

export default App;
