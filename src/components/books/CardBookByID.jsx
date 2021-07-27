import React, {useState, useEffect} from 'react';
/* Components */
import Edit from '../others/btn/btnEdit';
import Return from '../others/btn/btnReturn';
import Delete from '../others/btn/btnDelete';
import Logo from '../others/logo/logo';
import Error from '../others/error/Error';
/* Styles */
import '../styles/cardBook.css';
/* Services */
import { getCategoryByID, getPersonByID } from '../../services/allServices.jsx';

export default function CardBookByID ({ libro }) {

    const [category, setCategory] = useState([]);
    const [person, setPerson] = useState([]);
    const [errorPerson, setErrorPerson] = useState([]); 
    const [errorCategory, setErrorCategory] = useState([]); 

    /* Consumo de la tabla Categoria */

    const fetchCategory = async () => {
        const response = await getCategoryByID(libro.categoriaid);
        if (response.status === 200) {
            setCategory(response.data);
        } else {
            setErrorCategory(response)
        }
    }

    /* Consumo de la tabla Persona */

    const fetchPerson= async () => {
        const response = await getPersonByID(libro.personaid);
        console.log(response);

        if (response.status === 200) {
            setPerson(response.data);
        } else {
            setErrorPerson(response)
        }
    }

    useEffect(() => {
        fetchCategory(); // eslint-disable-next-line
        fetchPerson(); // eslint-disable-next-line
    }, []);

    const nameCategory = category.map((categoria)=> categoria.nombre)
    const aliasPerson = person.map((persona)=> persona.alias)

    return (
            <div key={libro.id} className="bookContainer">
                <h1 className="tittleBook">{libro.nombre}</h1>
                <h2>Género: {nameCategory}</h2>
                <Error message={errorCategory} />
                <p>{libro.descripcion}</p> 
                <div className="availability">
                    <span className="owner">Prestado a: {aliasPerson}  </span>
                </div>
                <Error message={errorPerson} />
                <ul className="options">
                    <li><Edit /></li>
                    <li><Return /></li>
                    <li><Delete /></li>
                </ul>
                <Logo subTitle="Volver a Libros" url="/libro" />
            </div>
    )
}