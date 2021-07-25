import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
/* Components */
import Nav from '../Nav';
import Footer from '../Footer'
import CardBookByID from './CardBookByID'
/* Styles */
import '../styles/main.css'
import '../styles/bookView.css'
/* Services */
import { getBooksByID } from '../../services/allServices.jsx';

export default function BookByID () {

    const params = useParams();
    const [viewBook, setViewBook] = useState([]);

    /* Consumo de la tabla Libro (por ID) */

    const fetchBooksByID = async () => {
        const response = await getBooksByID(params.id);
        if (response.status === 200) {
            setViewBook(response.data);
        }
    }

    useEffect(() => { 
        fetchBooksByID() // eslint-disable-next-line
    }, []); 

    const bookArray = viewBook.map(libro=>( <CardBookByID key={libro.id} libro={libro} /> ))

    return (
        <>
            <Nav />
            <div className="mainContainer">
                {bookArray}
            </div>
            <Footer />
        </>
    )
}