import React, { useState } from "react";
import { useParams} from "react-router-dom";

import Nav from "../Nav";
import Footer from "../Footer";
import "../styles/newFormCategory.css";
import "../styles/main.css";
import axios from "axios";
import { useDispatch } from "react-redux";

function ModifyPerson(props) {
  const { id, nombre, apellido, email, alias } = useParams();

  const dispatch = useDispatch();

  const [datos, setData] = useState({
    ID: id,
    nombre: nombre,
    apellido: apellido,
    email: email,
    alias: alias,
  });

  const handleNombre = (e) => {
    const nuevoState = JSON.parse(JSON.stringify(datos));
    nuevoState.nombre = e.target.value;
    setData(nuevoState);
  };
  const handleApellido = (e) => {
    const nuevoState = JSON.parse(JSON.stringify(datos));
    nuevoState.apellido = e.target.value;
    setData(nuevoState);
  };
  const handleEmail = (e) => {
    const nuevoState = JSON.parse(JSON.stringify(datos));
    nuevoState.email = e.target.value;
    setData(nuevoState);
  };
  const handleAlias = (e) => {
    const nuevoState = JSON.parse(JSON.stringify(datos));
    nuevoState.alias = e.target.value;
    setData(nuevoState);
  };

const enviarFormulario = async () => {
    
    try {
      await axios.put(  `http://localhost:3000/persona/${id}`, datos);
      dispatch({ type: "MODIFICAR_PERSONA", payload: [parseInt(id), datos] });
     
    } catch (error) {
      console.log(error)
  }
}

return (
    <div>
      <Nav />
      <div className="mainContainer">
        <form
          className="formContainerPerson"
          onSubmit={enviarFormulario}
        >
          <h1 className="formName">
            Editar Persona
          </h1>
          <label htmlFor="nombre">Nombre</label>
          <input
           required value={datos.nombre}
            onChange={handleNombre}
            name="nombre"
            id="nombre"
            type="text"
            className="smallInputTextPerson"
          />
          <br />
          <label htmlFor="apellido">
            Apellido
          </label>
          <input
            required value={datos.apellido}
            onChange={handleApellido}
            name="apellido"
            id="apellido"
            type="text"
            className="smallInputTextPerson"
          />
          <br />
          <label htmlFor="nombre">Email</label>
          <input
            
           required value={datos.email}
            onChange={handleEmail}
            name="nombre"
            id="nombre"
            type="text"
            className="greyout"
            readOnly
          />
          <br />
          <label htmlFor="alias">Alias</label>
          <input 
           required value={datos.alias}
            onChange={handleAlias}
            name="alias"
            id="alias"
            type="text"
            className="smallInputTextPerson"
          />
          <br />

          <br />
          <button
            className="btn btn-primary"
            name="send"
            type="submit"
          >
            Modificar
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default ModifyPerson;
