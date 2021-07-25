import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
/* Styles */
import '../styles/cardBook.css';
/* Services */
import { getCategory, getPerson } from '../../services/allServices.jsx';

export default function CardBook ({ libro }) {

    const [category, setCategory] = useState([]);
    const [person, setPerson] = useState([]);

    /* Consumo de la tabla Categoria */

    const fetchCategory = async () => {
        const response = await getCategory(libro.categoriaid);
        if (response.status === 200) {
            setCategory(response.data);
        }
    }

    /* Consumo de la tabla Persona */

    const fetchPerson= async () => {
        const response = await getPerson(libro.personaid);
        if (response.status === 200) {
            setPerson(response.data);
        }
    }

    useEffect(() => {
        fetchCategory(); // eslint-disable-next-line
        fetchPerson(); // eslint-disable-next-line
    }, []);

    const nameCategory = category.map((categoria)=> categoria.nombre)
    const namePerson = person.map((persona)=> persona.nombre)

    return (
            <div key={libro.id}>
                <Link to={'/libro/view/' + libro.id}>
                    <div className="card">
                        <div className="cardBackGround">
                            <h2 className="tittleBook">{libro.nombre}</h2>
                            <span className="genreBook">Género: {nameCategory}</span>
                            <div className="availability">
                                <span className="available">DISPONIBLE</span> - <span className="notAvailable">PRESTADO</span> <span className="owner">Prestado a: {namePerson}</span>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
    )
}