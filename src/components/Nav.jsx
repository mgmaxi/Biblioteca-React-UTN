import React from 'react';
import { Link } from 'react-router-dom';
import './styles/nav.css' 
import logo from '../logo.png';

export default function Nav () {
    return (
        <div>
            <nav className="navbarContainer">
                    <Link to="/" className="navbarLogo">
                        <div>
                            <img src={logo} alt="logo" />
                        </div>
                        <div className="navbarTitle hide">
                            <p>Where Are My Books?</p>
                        </div>
                    </Link>
                    <div className="navbarLinks">
                        <ul>
                            <li className="hide"><Link to="/">INICIO</Link></li>
                            <li><Link to="/libro">LIBROS</Link></li>
                            <li><Link to="/categoria">CATEGORIAS</Link></li>
                            <li><Link to="/persona">PERSONAS</Link></li>
                        </ul>
                    </div>
                    <div className="navbarLoginSignin">
                        <ul>
                            <li>
                                <Link aria-current="page" to="/login"><i className="bx bxs-user-circle bx-tada"></i><span className="hide"> Iniciar Sesión</span></Link>
                            </li>
                            <li>
                                <Link aria-current="page" to="/signup"><i className="bx bxs-user-account bx-tada"></i><span className="hide"> Registrarse</span></Link>
                            </li>
                        </ul>
                    </div>
            </nav>
        </div>
    )
}