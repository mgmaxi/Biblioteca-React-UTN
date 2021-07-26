import React from 'react';
/* Styles */
import './styles/btn.css';

export default function Delete (){
    return (
        <div className="btnContainer">
            <i className="fa fa-trash btn" aria-hidden="true"></i>
            <p>Eliminar</p>
        </div>
    )
}