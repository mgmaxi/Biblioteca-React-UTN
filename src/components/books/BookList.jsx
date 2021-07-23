import React, {useState, useEffect} from 'react';
/* Services */
import { getBooks } from '../../services/bookServices.jsx';
/* Components */
import CardBook from './CardBook';
import Nav from '../Nav';
import Footer from '../Footer';
/* Styles */
import '../styles/main.css';

export default function BookList() {
    
    const [bookList, setBookList] = useState([]);

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