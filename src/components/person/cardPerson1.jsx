import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
/* Components */
import Edit from "../others/btn/btnEdit";
import Delete from "../others/btn/btnDelete";
import Book from '../others/btn/btnBook';
import Error from '../others/error/Error';
/* Styles */
import "../styles/cardPerson.css";

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
<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">{persona.nombre}&nbsp;{persona.apellido}</h5>
    <h6 class="card-subtitle mb-2 text-muted">{persona.email}</h6>
    <p class="card-text">{persona.alias}</p>
    <Book subTitle="Libros que posee" url={'/persona/view/' + persona.ID} />
            <Edit url={`/persona/modify/${persona.ID}/${persona.nombre}/${persona.apellido}/${persona.email}/${persona.alias}`}/>
            <Delete onClick={() => handleBorrarPersona(persona.ID)} />
  </div>
</div>
 );
}