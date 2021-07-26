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
            <div className="container"key={libro.id}>
                <div className="cardBook">
                <div className="cardBookFlex">
                    <Link to={'/libro/view/' + libro.id} className="titleBook">{libro.nombre}</Link>
                    <span className="borrowedPerson">Prestado a: {namePerson}</span>
                    <div className="btnGroupBook">
                        <Edit /><Return /><Delete />
                    </div>
                </div>
                </div>
            </div>
    )
}