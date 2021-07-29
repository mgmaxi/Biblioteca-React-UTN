import React from 'react';
/* Styles */
import './styles/btn.css';

export default function Delete (props){
    return (
        <div className="btnContainer">
            <button onClick={props.onClick}><i className="fa fa-trash btn" aria-hidden="true"></i></button>
            <p>Borrar</p>
        </div>
    )
}