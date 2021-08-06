import React from 'react';
import {  useSelector } from 'react-redux';
/* Styles */
import "../styles/main.css";

/* Components */
import CardPerson from "./CardPerson";
import Nav from "../Nav";
import Footer from "../Footer";

export default function PersonList() {
  
  const listado = useSelector((state) => state.personReducer.personas);

  const personListArray = listado.map(
    (persona) => {
      return (
        <div>
          <CardPerson
            key={persona.id}
            persona={persona}
          />
        </div>
      );
    }
  );

  return (
    <div>
      <Nav />
      <div className="mainContainer">
        <div className="boxContainer">
          {personListArray}
        </div>
      </div>
      <Footer />
    </div>
  );
}
