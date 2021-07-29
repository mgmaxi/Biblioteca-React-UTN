import React from 'react';
/* Styles */
import './styles/btn.css';

export default function Return (props){
    return (
        <div className="btnContainer">
            <button onClick={props.onClick}><i  className="fa fa-retweet btn" aria-hidden="true"></i></button>
            <p>Devolver</p>
        </div>
    )
}