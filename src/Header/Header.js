import React, { Component } from 'react';
import './Header.scss';
import CallToAction from '../CallToAction/CallToAction';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <header className="page-header">
                <div className="page-header-login">
                    <ul>
                        <li><a href="/" target="_blank" rel="noopener noreferrer">Zaloguj</a></li>
                        <li><a href="/" target="_blank" rel="noopener noreferrer">Załóż konto</a></li>
                    </ul>
                </div>
                <div className="page-header-menu">
                    <ul>
                        <li><a href="/" target="_blank" rel="noopener noreferrer">Start</a></li>
                        <li><a href="/" target="_blank" rel="noopener noreferrer">O co chodzi?</a></li>
                        <li><a href="/" target="_blank" rel="noopener noreferrer">O nas</a></li>
                        <li><a href="/" target="_blank" rel="noopener noreferrer">Fundacje i organizacje</a></li>
                        <li><a href="/" target="_blank" rel="noopener noreferrer">Kontakt</a></li>
                    </ul>
                </div>
                <CallToAction />
            </header>
        );
    }
}
 
export default Header;