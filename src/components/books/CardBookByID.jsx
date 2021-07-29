import React, {useState, useEffect} from 'react';
/* Components */
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
                <div className="subContent">
                    <h1 className="tittleBook">{libro.nombre}</h1>
                    <h2 className="subText">Género: <span className="text">{nameCategory} </span></h2>
                    <Error message={errorCategory} />
                    <h2 className="subText">Descripción:</h2><span className="text">{libro.descrispancion}</span> 
                    <div>
                        <h2 className="subText">Prestado a: <span className="text"> {aliasPerson} </span> </h2>
                    </div>
                    <Error message={errorPerson} />
                </div>
                <Logo subTitle="Volver a Libros" url="/libro" />
            </div>
    )
}