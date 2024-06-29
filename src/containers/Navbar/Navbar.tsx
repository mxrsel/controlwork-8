// src/components/NavBar.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => (
    <nav>
        <Link to="/">Все цитаты</Link>
        <Link to="/category/star-wars">Star Wars</Link>
        <Link to="/category/famous-people">Famous People</Link>
        <Link to="/category/saying">Saying</Link>
        <Link to="/category/humour">Humour</Link>
        <Link to="/category/motivational">Motivational</Link>
        <Link to="/add">Добавить цитату</Link>
    </nav>
);

export default NavBar;
