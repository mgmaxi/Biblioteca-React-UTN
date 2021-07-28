import React from 'react';
import {  useSelector } from 'react-redux';
/* Components */
import Nav from '../Nav';
import Footer from '../Footer';
import CardBook from './CardBook';
import Logo from '../others/logo/logo';
/* Styles */
import '../styles/main.css';
import '../styles/bookView.css'
/* Services */

export default function BookList() {

    const listado = useSelector((state) => state.libros);

    const bookListArray = listado.map((libro)=> ( <CardBook key={libro.id} libro={libro} /> ));

    return (
        <>
            <Nav />
            <div className="mainContainer">
                <div className="bookContainer">
                    <Logo title="LISTADO DE LIBROS" url="/libro" />
                    <ul>
                        {bookListArray}
                    </ul>
                </div>
            </div>
            <Footer />
        </>
    )
}