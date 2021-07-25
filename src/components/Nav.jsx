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
                            <li class="dropdown">
                                <Link to="/libro" class="dropbtn">LIBROS</Link>
                                <div class="dropdown-content">
                                    <Link to="/libro">Todos los libros</Link>
                                    <Link to="/libro/new">Agregar un libro</Link>
                                </div>
                            </li>
                            <li class="dropdown">
                                <Link to="/categoria" class="dropbtn">CATEGORIAS</Link>
                                <div class="dropdown-content">
                                    <Link to="/categoria">Todas las categorias</Link>
                                    <Link to="/categoria/new">Agregar una categoria</Link>
                                </div>
                            </li>
                            <li class="dropdown">
                                <Link to="/persona" class="dropbtn">PERSONAS</Link>
                                <div class="dropdown-content">
                                    <Link to="/persona">Todas las personas</Link>
                                    <Link to="/persona/new">Agregar una persona</Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="navbarLoginSignin">
                        <ul>
                            <li>
                                <Link aria-current="page" to="./login.jsx"><i className="bx bxs-user-circle bx-tada"></i><span className="hide"> Iniciar Sesión</span></Link>
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