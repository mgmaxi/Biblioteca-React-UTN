/** @format */

import React from "react";
import axios from "axios";
import Nav from "../Nav";
import Footer from "../Footer";
import "../styles/newForm.css";
import "../styles/main.css";

function NewBook(props) {
  const [categorias, setCategorias] =
    React.useState([]);
  const [datos, setDatos] = React.useState({
    nombre: "",
    descripcion: "",
    categoriaid: "",
  });
  const obtenerCategorias = async () => {
    try {
      const respuesta = await axios.get(
        "http://localhost:3000/categoria"
      );
      setCategorias(respuesta.data);
    } catch (e) {}
  };
  React.useEffect(() => {
    obtenerCategorias();
  }, []);

  const handleChangeNombre = (e) => {
    const nuevoState = JSON.parse(
      JSON.stringify(datos)
    );
    nuevoState.nombre = e.target.value;
    setDatos(nuevoState);
  };

  const handleChangeDescripcion = (e) => {
    const nuevoState = JSON.parse(
      JSON.stringify(datos)
    );
    nuevoState.descripcion = e.target.value;
    setDatos(nuevoState);
  };

  const handleChangeCategoria = (e) => {
    const nuevoState = JSON.parse(
      JSON.stringify(datos)
    );
    nuevoState.categoriaid = e.target.value;
    setDatos(nuevoState);
  };
  const enviarFormulario = async () => {
    await axios.post(
      "http://localhost:3000/libro",
      datos
    );
  };

  return (
    <div>
      <Nav />
      <div className="mainContainer">
        <form
          className="formContainer"
          onSubmit={enviarFormulario}
        >
          <h1 className="formName">
            Nuevo libro
          </h1>
          <label htmlFor="nombre">Título</label>
          <input
            onChange={handleChangeNombre}
            name="nombre"
            id="nombre"
            type="text"
          />
          <br />
          <label htmlFor="descripcion">
            Descripción
          </label>
          <input
            onChange={handleChangeDescripcion}
            name="descripcion"
            id="descripcion"
            type="text"
            className="bigInputText"
          />
          <br />
          <select
            name="categoria"
            onChange={handleChangeCategoria}
          >
            <option>Seleccione un género</option>
            {categorias.map((unaCategoria) => (
              <option value={unaCategoria.ID}>
                {unaCategoria.nombre}
              </option>
            ))}
          </select>
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

export default NewBook;
