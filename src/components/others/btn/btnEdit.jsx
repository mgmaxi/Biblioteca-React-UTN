import React from 'react';
/* Styles */
import './styles/btn.css';

export default function Edit (props){
    return (
        <div className="btnContainer">
            <i onClick={props.onClick} className="fa fa-pencil btn" aria-hidden="true"></i>
            <p>Modificar</p>
        </div>
    )
}