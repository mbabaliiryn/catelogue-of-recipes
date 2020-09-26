import React from 'react';
import { Link } from 'react-router-dom';
import SearchIngredients from './searchIngredients';
import '../styles/header.scss';

const Header = () => (
  <section className="header">
    <nav className="nav">
      <Link to="/" className="logo">
        <h2>Keen Foods</h2>
      </Link>
      <SearchIngredients />
    </nav>
  </section>
);

export default Header;
