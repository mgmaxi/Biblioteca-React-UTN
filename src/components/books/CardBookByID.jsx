import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
/* Styles */
import '../styles/cardBook.css';
/* Services */
import { getCategory, getPerson } from '../../services/allServices.jsx';

export default function CardBookByID ({ libro }) {

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
            <div key={libro.id} className="bookContainer">
                <h1>{libro.nombre}</h1>
                <h2>Género: {nameCategory}</h2>
                <p>{libro.descripcion}</p> 
                <div className="availability">
                    <span className="available">DISPONIBLE</span> - <span className="notAvailable">PRESTADO</span> <span className="owner">Prestado a: {namePerson}</span>
                </div>
                <ul className="options">
                    <li><i className="fa fa-pencil btn" aria-hidden="true"></i><p>Modificar</p></li>
                    <li><i className="fa fa-share btn" aria-hidden="true"></i><p>Devolver</p></li>
                    <li><i className="fa fa-trash btn" aria-hidden="true"></i><p>Eliminar</p></li>
                </ul>
                <Link to="/libro" className="linkBooks">Volver a Libros</Link>
            </div>
    )
}