import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './reset.css';
import './App.css';

import Home from './pags/Home';
import Listas from './pags/Listas';
import ListaPorGenero from './pags/Genero';

function App() {
  return (
    <div className='fundo'>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lists" element={<Listas/>}/>
        <Route path="/lists/:id/games" element={<ListaPorGenero />} />
      </Routes>
    </Router>
  </div>
  );
}

export default App;
