import React, {useState, useEffect} from 'react';
/* Components */
import Edit from '../others/btn/btnEdit';
import Return from '../others/btn/btnReturn';
import Delete from '../others/btn/btnDelete';
import Logo from '../others/logo/logo';
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
                <h1 className="tittleBook">{libro.nombre}</h1>
                <h2>Género: {nameCategory}</h2>
                <p>{libro.descripcion}</p> 
                <div className="availability">
                    <span className="available">DISPONIBLE</span> - <span className="notAvailable">PRESTADO</span> <span className="owner">Prestado a: {namePerson}</span>
                </div>
                <ul className="options">
                    <li><Edit /></li>
                    <li><Return /></li>
                    <li><Delete /></li>
                </ul>
                <Logo subTitle="Volver a Libros" url="/libro" />
            </div>
    )
}