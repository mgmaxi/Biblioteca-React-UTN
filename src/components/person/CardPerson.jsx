import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
/* Components */
import Edit from "../others/btn/btnEdit";
import Delete from "../others/btn/btnDelete";
import Book from '../others/btn/btnBook';
import Error from '../others/error/Error';
/* Styles */


export default function CardPerson({
  persona,
  libro,
}) {

  const dispatch = useDispatch();
  const [error, setError] = useState([]); 

  const handleBorrarPersona = async (IdPersona) => {
    try {
    await axios.delete('http://localhost:3000/persona/' + IdPersona);
    dispatch({ type: "DELETE_PERSON", IdPersonaARemover: IdPersona });
    } catch (error) {
      setError(error.response.data.Mensaje);
    }
};

  return (
<div class="card cardPerson" styles="width: 3rem;">
  <div class="card-header text-dark">
    ID:&nbsp;{persona.ID}
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">{persona.nombre}&nbsp;{persona.apellido}</li>
    <li class="list-group-item">{persona.email}</li>
    <li class="list-group-item">{persona.alias}</li>
  </ul>
  <div class="btn-group" role="group" aria-label="Basic example" styles="margin-top: 5px;">
  <button type="button" class="btn btn-info">Libros</button>
  <button onClick= {`/persona/modify/${persona.ID}/${persona.nombre}/${persona.apellido}/${persona.email}/${persona.alias}`} type="button" class="btn btn-warning">Modificar</button>
  <button onClick={() => handleBorrarPersona(persona.ID)} type="button" class="btn btn-danger">Eliminar</button>
</div>
</div>

 );
}
 
