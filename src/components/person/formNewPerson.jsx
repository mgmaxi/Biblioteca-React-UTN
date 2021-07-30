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
  const [errorfront, setErrorfront] = React.useState({});
  const [error, setError] = React.useState([]); 
  const [datos, setDatos] = React.useState({
    nombre: "",
    apellido: "",
    email: "",
    alias: "",
  });
  const validar = (nombre, apellido, email, alias) => {
    const errores = {};
    const nombresValidos = /^[a-zA-ZÑñÁáÉéÍíÓóÚú\s]+$/;
    const correoValido = /^\w+@(\w+\.)+\w{2,4}$/; 

    if (nombre.length === 0) {
      errores.nombre = 'El nombre no puede estar en blanco';
    }

    if (nombre.length < 5 && nombre.length !== 0) {
      errores.nombre = 'El nombre debe tener 5 caracteres como mínimo';
    }
    if (nombre.length > 20) {
      errores.nombre = 'El nombre no puede contener mas de 20 caracteres';
    }
    if (nombre && !nombresValidos.exec(nombre)) {
      errores.nombre = 'El nombre solo puede contener letras y espacios';
    }

    if (apellido.length === 0) {
      errores.apellido = 'El apellido no puede estar en blanco';
    }

    if (apellido.length < 5 && apellido.length !== 0) {
      errores.apellido = 'El apellido debe tener 5 caracteres como mínimo';
    }
    if (apellido.length > 30) {
      errores.apellido = 'El apellido no puede contener mas de 30 caracteres';
    }
    if (apellido && !nombresValidos.exec(nombre)) {
      errores.apellido = 'El apellido solo puede contener letras y espacios';
    }

    if (email.length === 0) {
      errores.email = 'El email no puede estar en blanco';
    }
    if (email && !correoValido.exec(email)) {
      errores.email = 'Debes escribir un correo válido';
    }

    if (alias.length === 0) {
      errores.alias = 'El alias no puede estar en blanco';
    }

    if (alias.length < 3 && alias.length !== 0) {
      errores.alias = 'El alias debe tener 3 caracteres como mínimo';
    }
    if (alias.length > 20) {
      errores.alias = 'El alias no puede contener mas de 20 caracteres';
    }
    if (alias && !nombresValidos.exec(alias)) {
      errores.alias = 'El alias solo puede contener letras y espacios';
    }

    return errores;

  }

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
  React.useEffect(() => {
    const validacion = validar(datos.nombre, datos.apellido, datos.email, datos.alias);
    setErrorfront(validacion);
  }, [datos]);
  const enviarFormulario = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/persona",
        datos
      );

      dispatch({
        type: "ADD_PERSON",
        payload: response.data,
      });
      props.history.push({
        pathname:"/persona"});
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
                    <p className="error">{errorfront.nombre}</p>
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
                    <p className="error">{errorfront.apellido}</p>
          <br />
          <label htmlFor="email">Email</label>
          <input
            onChange={handleChangeEmail}
            name="email"
            id="email"
            type="text"
            className="smallInputTextPerson"
          />
                    <p className="error">{errorfront.email}</p>
          <br />
          <label htmlFor="alias">Alias</label>
          <input
            onChange={handleChangeAlias}
            name="alias"
            id="alias"
            type="text"
            className="smallInputTextPerson"
          />
                    <p className="error">{errorfront.alias}</p>
          <br />

          <br />
          <button
            className="btn"
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
