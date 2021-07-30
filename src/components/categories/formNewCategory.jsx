/** @format */
import { useDispatch } from "react-redux";
import React from "react";
import axios from "axios";
/* Components */
import Nav from "../Nav";
import Footer from "../Footer";
import Error from '../others/error/Error';
/* Styles */
import "../styles/newFormCategory.css";
import "../styles/main.css";

function NewCategory(props) {
  const dispatch = useDispatch();
  const [errorfront, setErrorfront] = React.useState({});
  const [error, setError] = React.useState([]); 
  const [datos, setDatos] = React.useState({
    nombre: "",
  });

  const validar = (nombre) => {
    const errores = {};
    const nombresValidos = /^[a-zA-Z0-9ÑñÁáÉéÍíÓóÚú\s]+$/;

    if (nombre.length === 0) {
      errores.nombre = 'El nombre no puede estar en blanco';
    }

    if (nombre.length < 5 && nombre.length !== 0) {
      errores.nombre = 'El nombre debe tener 5 caracteres como mínimo';
    }
    if (nombre.length > 50) {
      errores.nombre = 'El nombre no puede contener mas de 50 caracteres';
    }
    if (nombre && !nombresValidos.exec(nombre)) {
      errores.nombre = 'El nombre solo puede contener letras, números y espacios';
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

  React.useEffect(() => {
    const validacion = validar(datos.nombre);
    setErrorfront(validacion);
  }, [datos]);

  const enviarFormulario = async (e) => {
    e.preventDefault();
  try {
    const response = await axios.post(
      "http://localhost:3000/categoria",
      datos
    );

    dispatch({
      type: "ADD_CATEGORY",
      payload: response.data,
    });
    props.history.push({
      pathname:"/categoria"});
  } catch (error) {
    setError(error.response.data.Mensaje);
  }
}  

  return (
    <div>
      <Nav />
      <div className="mainContainer">
        <form
          className="formContainerCategory"
          onSubmit={enviarFormulario}
        >
          <h1 className="formName">
            Nueva categoria
          </h1>
          <label htmlFor="nombre">Nombre</label>
          <input
            onChange={handleChangeNombre}
            name="nombre"
            id="nombre"
            type="text"
            className="smallInputTextCategory"
          />
          <p className="error">{errorfront.nombre}</p>
          <br />
          <button
            className="btn"
            name="send"
            type="submit"
          >
            Agregar
          </button>
        <Error message={error} />
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default NewCategory;
