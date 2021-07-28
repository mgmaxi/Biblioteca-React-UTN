import React, {useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
/* Services */
import { getPersonByID, getBooksByPerson } from '../../services/allServices.jsx';
/* Components */
import Nav from '../Nav';
import Footer from '../Footer'
import Logo from '../others/logo/logo';
import Error from '../others/error/Error';
/* Styles */
import '../styles/main.css'
import '../styles/bookView.css'

export default function PersonByID () {

    const params = useParams();
    const [personByID, setPersonByID] = useState([]);
    const [bookPersonList, setBookPersonList] = useState([]);
    const [error, setError] = useState([]); 

    /* Consumo de la tabla Persona por ID */

    const fetchPersonByID = async () => {
        const response = await getPersonByID(params.id);
        if (response.status === 200) {
            setPersonByID(response.data);
        } else {
            setError(response)
        }
    }

    /* Consumo de la tabla Libro por personaid */

    const fetchBooksByPerson = async () => {
        const response = await getBooksByPerson(params.id);
        if (response.status === 200) {
            setBookPersonList(response.data);
        } else {
            setError(response)
        }
    }

    useEffect(() => {
        fetchPersonByID(); // eslint-disable-next-line
        fetchBooksByPerson(); // eslint-disable-next-line
    },[params]);

    const personName = personByID.map((persona)=> persona.nombre)

    const bookList = bookPersonList.map(libro=>(
        <div key={libro.id}>
            <li><Link to={'/libro/view/' + libro.id}>{libro.nombre}</Link></li>
        </div>
    ))

    return (
        <>
            <Nav />
            <div className="mainContainer">
                <div className="bookContainer">
                    <h1>Libros que posee <span className="lowercase">{personName}</span>:</h1>
                    <ul className="listBooksByCategory">
                        {bookList}
                    </ul>
                    <Error message={error} />
                    <Logo subTitle="Volver" url="/persona" />
                </div>
            </div>
            <Footer />
        </>
    )
}