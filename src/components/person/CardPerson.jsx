import React from 'react';
import '../styles/cardPerson.css';

export default function CardPerson ({ persona }) {
    return (
        <div className="container">
            <div key={persona.id} className="card">
                <div className="cardBackGround">
                    <h2 className="tittleBook">Nombre: {persona.nombre}</h2>
                    <h2 className="surnamePerosn">Apellido: {persona.apellido}</h2>
                    
                    
                    
                </div>
            </div>
        </div>
    )
}