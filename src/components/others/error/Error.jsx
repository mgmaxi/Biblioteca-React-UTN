import React from 'react';
import './error.css';

export default function Error (props) {

    return (
        <div className="errorCondtainer">
            <span className="errorMessage">{props.message}</span>
        </div>
    )
}