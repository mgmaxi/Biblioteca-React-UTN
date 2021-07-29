import React from 'react';
import { Link } from 'react-router-dom';
/* Styles */
import './styles/btn.css';

export default function Edit (props){
    return (
        <>
            <Link to={props.url}>
            <div className="btnContainer">
                <button onClick={props.onClick}><i className="fa fa-pencil-square-o btn" aria-hidden="true"></i></button>
                <p>Modificar</p>
            </div>
            </Link>
        </>
    )
}