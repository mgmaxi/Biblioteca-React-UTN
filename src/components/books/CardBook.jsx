import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
/* Components */
import Edit from '../others/btn/btnEdit';
import Return from '../others/btn/btnReturn';
import Delete from '../others/btn/btnDelete';
/* Styles */
import '../styles/cardBook.css';
/* Services */
import { getPerson } from '../../services/allServices.jsx';

export default function CardBook ({ libro }) {

    const [person, setPerson] = useState([]);

    /* Consumo de la tabla Persona */

    const fetchPerson= async () => {
        const response = await getPerson(libro.personaid);
        if (response.status === 200) {
            setPerson(response.data);
        }
    }

    useEffect(() => {
        fetchPerson(); // eslint-disable-next-line
    }, []);

    const namePerson = person.map((persona)=> persona.nombre)

    return (
            <div className="containerBookList"key={libro.id}>
                <li className="listBooks">
                    <Link to={'/libro/view/' + libro.id}>{libro.nombre}</Link>
                    <span>Prestado a: {namePerson}</span>
                    <div className="btnGroup">
                        <Edit /><Return /><Delete />
                    </div>
                </li>
            </div>
    )
}