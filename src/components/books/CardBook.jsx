import React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
/* Components */
import Edit from '../others/btn/btnEdit';
import Return from '../others/btn/btnReturn';
import Delete from '../others/btn/btnDelete';
import Error from '../others/error/Error';
import Book from '../others/btn/btnBook';
import Borrow from '../others/btn/btnBorrow';
/* Styles */
import '../styles/cardBook.css';
/* Services */
import { getPersonByID } from '../../services/allServices.jsx';

export default function CardBook ({ libro }) {

    const [person, setPerson] = useState([]);
    const [error, setError] = useState([]); 
    const [errorDelete, setErrorDelete] = useState([]);
    const [errorReturn, setErrorReturn] = useState([]); 

    const dispatch = useDispatch();

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

    const handleBorrarLibro = async (idLibro) => {
        try {
        await axios.delete('http://localhost:3000/libro/' + idLibro);
        dispatch({ type: "DELETE_BOOK", idLibroARemover: idLibro });
        } catch (error) {
        setErrorDelete(error.response.data.Mensaje);
        }
    };
    const handleDevolverLibro = async (idLibro1) => {
        try {
        await axios.put('http://localhost:3000/libro/devolver/' + idLibro1);
        dispatch({ type: "RETURN_BOOK", idLibroADevolver: idLibro1 });
        } catch (error) {
        setErrorReturn(error.response.data.Mensaje);
        }
    };

    return (
            <div key={libro.id}>
                <li className="listBooks">
                    <h2 className="titleBook"> 
                    <Link to={'/libro/view/' + libro.id}> {libro.nombre}</Link>
                    </h2>
                    <h2 className="subText">Prestado a: <span className="owner">{namePerson}</span></h2>
                    <Error message={error} />
                    <div className="btnGroup">
                    <Book subTitle="Ver Libro" url={'/libro/view/' + libro.id} /><Borrow subTitle="Prestar" url={`/libro/borrow/${libro.id}/${libro.nombre}`} /><Edit url={`/libro/modify/${libro.id}/${libro.descripcion}`} /><Return onClick={() => handleDevolverLibro(libro.id)} /><Delete onClick={() => handleBorrarLibro(libro.id)} />
                    </div>
                    <Error message={errorReturn} /><Error message={errorDelete} /> 
                </li>
                <hr />
            </div>
    )
}