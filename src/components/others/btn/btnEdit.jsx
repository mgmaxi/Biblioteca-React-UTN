import React from 'react';
import { Link } from 'react-router-dom';
/* Styles */
import './styles/btn.css';

export default function Edit (props){
    return (
        <>
            <Link to={props.url}>
            <div className="btnContainer">
                <i className="fa fa-book btn" aria-hidden="true"></i>
                
            </div>
            </Link>
        </>
    )
}