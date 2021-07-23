import React, {useState, useEffect} from 'react';
import { Link , useParams } from 'react-router-dom';
/* Services */
import { getBooksByID } from '../../services/bookServices.jsx';
/* Components */
import Nav from '../Nav';
import Footer from '../Footer'
/* Styles */
import '../styles/main.css'
import '../styles/bookByID.css'

export default function BookByID () {

    const params = useParams();
    const [viewBook, setViewBook] = useState([]);

    const fetchBooksByID = async () => {
        const response = await getBooksByID(params.id);
        if (response.status === 200) {
            setViewBook(response.data);
        }
    }

    useEffect(() => {
        fetchBooksByID()
    }, [params]);

    const bookArray = viewBook.map(libro=>(
        <div key={libro.id} className="bookContainer">
            <h1>{libro.nombre}</h1>
            <h2>{libro.categoriaid}</h2>
            <p>{libro.descripcion}</p>
            <Link to="/libro" className="linkBooks">Volver a Libros</Link>
        </div>
    ))

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