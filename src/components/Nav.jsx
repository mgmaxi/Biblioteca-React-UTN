import React from 'react';
import './styles/nav.css' 
import logo from '../logo.png';

export default function Nav () {
    return (
        <div>
            <nav className="navbarContainer">
                    <a href="/" className="navbarLogo">
                        <div>
                            <img src={logo} alt="" />
                        </div>
                        <div className="navbarTitle hide">
                            <p>Where Are My Books?</p>
                        </div>
                    </a>
                    <div className="navbarLinks">
                        <ul>
                            <li><a href="/">INICIO</a></li>
                            <li><a href="/">LIBROS</a></li>
                            <li><a href="/">GÉNEROS</a></li>
                        </ul>
                    </div>
                    <div className="navbarLoginSignin">
                        <ul>
                            <li>
                                <a aria-current="page" href="/login"><i className="bx bxs-user-circle bx-tada"></i><span className="hide"> Iniciar Sesión</span></a>
                            </li>
                            <li>
                                <a aria-current="page" href="/signin"><i className="bx bxs-user-account bx-tada"></i><span className="hide"> Registrarse</span></a>
                            </li>
                        </ul>
                    </div>
            </nav>
        </div>
    )
}