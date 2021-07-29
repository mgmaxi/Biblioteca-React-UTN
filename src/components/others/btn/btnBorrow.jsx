import React from 'react';
import { Link } from 'react-router-dom';
/* Styles */
import './styles/btn.css';

export default function Borrow (props){
    return (
        <>
            <Link to={props.url}>
            <div className="btnContainer">
                <button onClick={props.onClick}><i class="fa fa-share btn" ></i></button>
                <p className="btnText">{props.subTitle}</p>
            </div>
            </Link>
        </>
    )
}