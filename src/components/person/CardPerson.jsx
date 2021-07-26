/** @format */
import Edit from "../others/btn/btnEdit";
import Delete from "../others/btn/btnDelete";
import React from "react";
import "../styles/cardPerson.css";

export default function CardPerson({
  persona,
  libro,
}) {
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
            <Edit />
            <Delete />
          </div>
          {/*<h2 className="bookBorrowed">
            Libros prestados: {libro.personaid}
  </h2>*/}
        </div>
      </div>
    </div>
  );
}
