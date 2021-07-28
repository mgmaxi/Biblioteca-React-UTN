/** @format */
import { useDispatch } from "react-redux";
import React from "react";
import axios from "axios";
import Nav from "../Nav";
import Footer from "../Footer";
import "../styles/newFormBook.css";
import "../styles/main.css";

function NewBook(props) {
  const dispatch = useDispatch();
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
    
    try {
      const response = await axios.post(
        "http://localhost:3000/libro",
        datos
      );
  
      dispatch({
        type: "AGREGAR_LIBRO",
        payload: response.data,
      });
    } catch (error) {
      console.log(error.response);
    }
  }  

  return (
    <div>
      <Nav />
      <div className="mainContainer">
        <form
          className="formContainerBook"
          onSubmit={enviarFormulario}
        >
          <h1 className="formName">
            Nuevo libro
          </h1>
          <label htmlFor="nombre">Titulo</label>
          <input
            onChange={handleChangeNombre}
            name="nombre"
            id="nombre"
            type="text"
            className="smallInputTextBook"
          />
          <br />
          <label htmlFor="descripcion">
            Descripcion
          </label>
          <input
            onChange={handleChangeDescripcion}
            name="descripcion"
            id="descripcion"
            type="text"
            className="bigInputTextBook"
            
          />
          <br />
          <select class="btn btn-danger dropdown-toggle"
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
