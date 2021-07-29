/** @format */
import { useDispatch } from "react-redux";
import React from "react";
import axios from "axios";
import Nav from "../Nav";
import Footer from "../Footer";
import Error from '../others/error/Error';
import "../styles/newFormCategory.css";
import "../styles/main.css";

function NewCategory(props) {
  const dispatch = useDispatch();
  const [error, setError] = React.useState([]); 
  const [datos, setDatos] = React.useState({
    nombre: "",
  });
  const handleChangeNombre = (e) => {
    const nuevoState = JSON.parse(
      JSON.stringify(datos)
    );
    nuevoState.nombre = e.target.value;
    setDatos(nuevoState);
  };

  const enviarFormulario = async () => {
    
  try {
    const response = await axios.post(
      "http://localhost:3000/categoria",
      datos
    );

    dispatch({
      type: "AGREGAR_CATEGORIA",
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
          <br />
          <button
            className="btn btn-primary"
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
