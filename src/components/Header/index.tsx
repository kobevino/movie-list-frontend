import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

function Header() {
  return (
    <div className="header">
      <h1><Link to="/">SolidWare</Link></h1>
      <ul>
        <li><Link to="/">Upcoming movies</Link></li>
        <li><Link to="/mylist">Watch list</Link></li>
      </ul>
    </div>
  )
}

export default Header;