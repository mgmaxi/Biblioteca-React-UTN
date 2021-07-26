import React from 'react';
/* Styles */
import './styles/btn.css';

export default function Edit (){
    return (
        <div className="btnContainer">
            <i className="fa fa-pencil btn" aria-hidden="true"></i>
            <p>Modificar</p>
        </div>
    )
}