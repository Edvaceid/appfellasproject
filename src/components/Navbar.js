// frontend/src/components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1 className="navbar-brand">Uçuş Rezervasyon</h1>
            <ul className="navbar-links">
                <li><Link to="/">Ana Sayfa</Link></li>
                <li><Link to="/my-flights">Uçuşlarım</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
