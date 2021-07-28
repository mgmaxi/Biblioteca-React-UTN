import React from 'react';
import { Link } from 'react-router-dom';
import './styles/nav.css' 
import Logo from './others/logo/logo';

export default function Nav () {
    return (
        <div>
            <nav className="navbarContainer">
                    <div className="navbarLogoContainer">
                        <Logo url="/" subTitle="Where Are My Books?" />
                    </div>
                    <div className="navbarLinks">
                        <ul>
                            <li className="hide"><Link to="/">INICIO</Link></li>
                            <li className="dropdown">
                                <Link to="/libro" className="dropbtn">LIBROS</Link>
                                <div className="dropdown-content">
                                    <Link to="/libro">Todos los libros</Link>
                                    <Link to="/libro/new">Agregar un libro</Link>
                                </div>
                            </li>
                            <li className="dropdown">
                                <Link to="/categoria" className="dropbtn">CATEGORIAS</Link>
                                <div className="dropdown-content">
                                    <Link to="/categoria">Todas las categorias</Link>
                                    <Link to="/categoria/new">Agregar una categoria</Link>
                                </div>
                            </li>
                            <li className="dropdown">
                                <Link to="/persona" className="dropbtn">PERSONAS</Link>
                                <div className="dropdown-content">
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