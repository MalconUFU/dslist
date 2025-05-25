import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header-title"><Link to="/">DSList</Link></h1>
      <h2 className='header-lists'><Link to="/lists">Listas</Link></h2>
    </header>
  );
};

export default Header;