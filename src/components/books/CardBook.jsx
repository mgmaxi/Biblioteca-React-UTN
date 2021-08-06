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
        <div class="card cardBook" styles="width: 3rem;">
          <div class="card-header text-dark">
            ID:&nbsp;{libro.id}
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item textBook">{libro.nombre}</li>
            <li class="list-group-item">Prestado a:&nbsp;{namePerson}</li>
            
          </ul>
          <div class="btn-group" role="group" aria-label="Basic example" styles="margin-top: 5px;">
          <button type="button" class="btn btn-info">Ver Libro</button>
          <button onClick type="button" class="btn btn-warning">Modificar</button>
          <button onClick type="button" class="btn btn-success">Prestar</button>
          <button onClick type="button" class="btn btn-primary">Devolver</button>
          <button onClick type="button" class="btn btn-danger">Eliminar</button>
        </div>
        </div>
        
         );
        }
