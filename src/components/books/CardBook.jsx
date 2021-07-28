import React from 'react';
import '../styles/cardBook.css';

export default function CardBook ({ libro }) {
    return (
        <div className="container">
            <div key={libro.id} className="card">
                <div className="cardBackGround">
                    <h2 className="tittleBook">{libro.nombre}</h2>
                    <span className="genreBook">Género: {libro.categoriaid}</span>
                    <p className="descriptionBook">{libro.descripcion}</p>
                    <div className="availability">
                        <span className="available">DISPONIBLE</span> - <span className="notAvailable">PRESTADO</span> <span className="owner">Prestado a: {libro.personaid}</span>
                    </div>
                    <ul className="options">
                        <li><a href="/"><i className="fa fa-pencil btn" aria-hidden="true"></i><p>Modificar</p></a></li>
                        <li><a href="/"><i className="fa fa-share btn" aria-hidden="true"></i><p>Devolver</p></a></li>
                        <li><a href="/"><i className="fa fa-trash btn" aria-hidden="true"></i><p>Eliminar</p></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}