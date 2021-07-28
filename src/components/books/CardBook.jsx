import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
/* Components */
import Edit from '../others/btn/btnEdit';
import Return from '../others/btn/btnReturn';
import Delete from '../others/btn/btnDelete';
import Error from '../others/error/Error';
import Book from '../others/btn/btnBook';
/* Styles */
import '../styles/cardBook.css';
/* Services */
import { getPersonByID } from '../../services/allServices.jsx';

export default function CardBook ({ libro }) {

    const [person, setPerson] = useState([]);
    const [error, setError] = useState([]); 

    /* Consumo de la tabla Persona */

    const fetchPerson= async () => {
        const response = await getPersonByID(libro.personaid);
        if (response.status === 200) {
            setPerson(response.data);
        } else {
            setError(response);
        }
    }

    useEffect(() => {
        fetchPerson(); // eslint-disable-next-line
    }, []);

    const namePerson = person.map((persona)=> persona.nombre)

    return (
            <div key={libro.id}>
                <li className="listBooks">
                    <Link to={'/libro/view/' + libro.id}>{libro.nombre}</Link>
                    <span className="owner">Prestado a: {namePerson}</span>
                    <Error message={error} />
                    <div className="btnGroup">
                    <Book subTitle="Ver Libro" url={'/libro/view/' + libro.id} /><Edit /><Return /><Delete />
                    </div>
                </li>
                <hr />
            </div>
    )
}