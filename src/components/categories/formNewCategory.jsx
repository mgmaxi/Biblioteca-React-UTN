/** @format */

import React from "react";
import axios from "axios";
import Nav from "../Nav";
import Footer from "../Footer";
import "../styles/newFormCategory.css";
import "../styles/main.css";

function NewCategory(props) {
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
    await axios.post(
      "http://localhost:3000/categoria",
      datos
    );
  };

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
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default NewCategory;
