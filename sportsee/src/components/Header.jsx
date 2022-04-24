import React from "react";
import { Link } from "react-router-dom";
import logo from '../sportsee-logo.svg';

import "../scss/components/Header.scss"

function Header() {
    return (
        <header className="App-header">
            <Link to='/'>
                <img src={logo} className='header-logo' alt='logo kasa'/> 
                <p>SportSee</p>
            </Link>
            <nav>
                <Link to='/'>Accueil</Link>
                <Link to='/'>Profil</Link>
                <Link to='/'>Réglage</Link>
                <Link to='/'>Communauté</Link>
            </nav>
         </header>
    );
}
export default Header
