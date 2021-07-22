import React from 'react';
import '../styles/cardPerson.css';

export default function CardPerson ({ persona, libro }) {
    return (
        <div className="container">
            <div key={persona.id} className="cardPerson">
                <div>
                    <h2 className="namePerson">Nombre: {persona.nombre}</h2>
                    <h2 className="surnamePerson">Apellido: {persona.apellido}</h2>
                    <h2 className="emailPerson">Email: {persona.email}</h2>
                    <h2 className="aliasPerson">Alias: {persona.alias}</h2>
                    <h2 className="personaID">ID: {persona.ID}</h2 >
                    

                    
                    
                    
                </div>
            </div>
        </div>
    )
}