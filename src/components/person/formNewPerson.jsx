/** @format */
import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import Nav from "../Nav";
import Footer from "../Footer";
import Error from '../others/error/Error';
import "../styles/newFormPerson.css";
import "../styles/main.css";

function NewPerson(props) {
  const dispatch = useDispatch();
  const [error, setError] = React.useState([]); 
  const [datos, setDatos] = React.useState({
    nombre: "",
    apellido: "",
    email: "",
    alias: "",
  });
  const handleChangeNombre = (e) => {
    const nuevoState = JSON.parse(
      JSON.stringify(datos)
    );
    nuevoState.nombre = e.target.value;
    setDatos(nuevoState);
  };

  const handleChangeApellido = (e) => {
    const nuevoState = JSON.parse(
      JSON.stringify(datos)
    );
    nuevoState.apellido = e.target.value;
    setDatos(nuevoState);
  };

  const handleChangeEmail = (e) => {
    const nuevoState = JSON.parse(
      JSON.stringify(datos)
    );
    nuevoState.email = e.target.value;
    setDatos(nuevoState);
  };
  const handleChangeAlias = (e) => {
    const nuevoState = JSON.parse(
      JSON.stringify(datos)
    );
    nuevoState.alias = e.target.value;
    setDatos(nuevoState);
  };
  const enviarFormulario = async () => {
    
    try {
      const response = await axios.post(
        "http://localhost:3000/persona",
        datos
      );

      dispatch({
        type: "ADD_PERSON",
        payload: response.data,
      });
    } catch (error) {
      setError(error.response.data.Mensaje);
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
            Nueva Persona
          </h1>
          <label htmlFor="nombre">Nombre</label>
          <input
            onChange={handleChangeNombre}
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
            onChange={handleChangeApellido}
            name="apellido"
            id="apellido"
            type="text"
            className="smallInputTextPerson"
          />
          <br />
          <label htmlFor="email">Email</label>
          <input
            onChange={handleChangeEmail}
            name="email"
            id="email"
            type="text"
            className="smallInputTextPerson"
          />
          <br />
          <label htmlFor="alias">Alias</label>
          <input
            onChange={handleChangeAlias}
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
            Enviar
          </button>
          <Error message={error} />
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default NewPerson;
