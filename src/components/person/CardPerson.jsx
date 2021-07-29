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
    <div className="container">
      <div
        key={persona.id}
        className="cardPerson"
      >
        <div>
          <h2 className="namePerson">Nombre:</h2>
          <h3 className="dataSpace">
            {persona.nombre}
          </h3>
          <h2 className="surnamePerson">
            Apellido:
          </h2>
          <h3 className="dataSpace">
            {persona.apellido}
          </h3>
          <h2 className="emailPerson">Email:</h2>
          <h3 className="dataSpace">
            {persona.email}
          </h3>
          <h2 className="aliasPerson">Alias:</h2>
          <h3 className="dataSpace">
            {persona.alias}
          </h3>
          <h2 className="personID">
            ID {persona.ID}
          </h2>

          <div className="btnGroupPerson">
            <Book subTitle="Libros que posee" url={'/persona/view/' + persona.ID} />
            <Edit url={`/persona/modify/${persona.ID}/${persona.nombre}/${persona.apellido}/${persona.email}/${persona.alias}`}/>
            <Delete onClick={() => handleBorrarPersona(persona.ID)} />
          </div>
          <Error message={error} />
        </div>
      </div>
    </div>
  );
}
