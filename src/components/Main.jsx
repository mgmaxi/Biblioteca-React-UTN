import React from 'react';
import ViewBooks from './books/ViewBooks';
import './styles/main.css'


export default function Main () {

    return (
        <div className="mainContainer">
            <div className="boxContainer">
                <ViewBooks />
            </div>
        </div>
    )
}