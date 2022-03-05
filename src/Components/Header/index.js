import React from 'react';
import { Link, NavLink } from 'react-router-dom';



const Header = () => {
  return (
    <nav>
        <Link to="/" className='logo'>BioInsumos</Link>
        <ul>
            <li><NavLink to="/convencional" className="link">Agricultura Convencional</NavLink></li>
            <li><NavLink to="/organico" className="link">Agricultura Orgânica</NavLink></li>
        </ul>
    </nav>
  );
}

export default Header ; 