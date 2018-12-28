import React from 'react';
import './Navbars.scss';

const Navbars = () => {
    return (
        <div>
            <div className="page-header-login">
                <ul>
                    <li><a href="/" target="_blank" rel="noopener noreferrer">Zaloguj</a></li>
                    <li><a href="/" target="_blank" rel="noopener noreferrer">Załóż konto</a></li>
                </ul>
            </div>
            <nav className="page-header-menu">
                <ul>
                    <li><a href="/" target="_blank" rel="noopener noreferrer">Start</a></li>
                    <li><a href="/" target="_blank" rel="noopener noreferrer">O co chodzi?</a></li>
                    <li><a href="/" target="_blank" rel="noopener noreferrer">O nas</a></li>
                    <li><a href="/" target="_blank" rel="noopener noreferrer">Fundacje i organizacje</a></li>
                    <li><a href="/" target="_blank" rel="noopener noreferrer">Kontakt</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbars;

