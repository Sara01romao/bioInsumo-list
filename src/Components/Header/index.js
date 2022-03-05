import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './styles.module.css'



const Header = () => {
  return (
    <nav className={styles.header}>
        <Link to="/" className={styles.logo}>BioInsumos</Link>
        <ul>
            <li><NavLink to="/convencional" className={styles.link}>Agricultura Convencional</NavLink></li>
            <li><NavLink to="/organico" className={styles.link}>Agricultura Orgânica</NavLink></li>
        </ul>
    </nav>
  );
}

export default Header ; 