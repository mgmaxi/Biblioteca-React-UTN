import React, {useState, useEffect} from 'react';
/* Components */
import Nav from '../Nav';
import Footer from '../Footer';
import CardBook from './CardBook';
/* Styles */
import '../styles/main.css';
/* Services */
import { getBooks } from '../../services/allServices.jsx';

export default function BookList() {
    
    const [bookList, setBookList] = useState([]);

    /* Consumo de la tabla Libro */

    const fetchBooks = async () => {
        const response = await getBooks();
        if (response.status === 200) {
            setBookList(response.data);
        }
    }

    useEffect(() => {
        fetchBooks();
    }, [])

    const bookListArray = bookList.map((libro)=> ( <CardBook key={libro.id} libro={libro} /> ));

    return (
        <>
            <Nav />
            <div className="mainContainer">
                <div className="boxContainer">
                    {bookListArray}
                </div>
            </div>
            <Footer />
        </>
    )
}