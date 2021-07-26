import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../logo.png';
/* Styles */
import './logo.css';

export default function Logo (props){
    return (
        <>
            <Link to={props.url} className="logoContainer">
                <div>
                    <img src={logo} alt="logo" />
                </div>
                <div className="logoTitle">
                    <p className="hide">{props.subTitle}</p>
                    <h1>{props.title}</h1>
                </div>
            </Link>
        </>
    )
}