import React from 'react';
import { Link } from 'react-router-dom';
/* Styles */
import './styles/btn.css';

export default function Book (props){
    return (
        <>
            <Link to={props.url}>
            <div className="btnContainer">
                <button onClick={props.onClick}><i className="fa fa-book btn" aria-hidden="true"></i></button>
                <p className="btnText">{props.subTitle}</p>
            </div>
            </Link>
        </>
    )
}