import React, {useState, useEffect} from 'react';
/* Components */
import Nav from '../Nav';
import Footer from '../Footer';
import CardBook from './CardBook';
import Logo from '../others/logo/logo';
import Error from '../others/error/Error';
/* Styles */
import '../styles/main.css';
import '../styles/bookView.css'
/* Services */
import { getBooks } from '../../services/allServices.jsx';

export default function BookList() {
    
    const [bookList, setBookList] = useState([]);
    const [error, setError] = useState([]); 

    /* Consumo de la tabla Libro */

    const fetchBooks = async () => {
        const response = await getBooks();
        if (response.status === 200) {
            setBookList(response.data);
        } else {
            setError(response)
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
                <div className="bookContainer">
                    <Logo title="LISTADO DE LIBROS" url="/libro" />
                    <ul>
                        {bookListArray}
                    </ul>
                    <Error message={error} />
                </div>
            </div>
            <Footer />
        </>
    )
}