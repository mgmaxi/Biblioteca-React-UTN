import React from 'react';
/* Styles */
import './styles/btn.css';

export default function Delete (props){
    return (
        <div className="btnContainer">
            <i onClick={props.onClick} className="fa fa-trash btn" aria-hidden="true"></i>
            <p>Eliminar</p>
        </div>
    )
}