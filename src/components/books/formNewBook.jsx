/** @format */
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import axios from "axios";
import Nav from "../Nav";
import Footer from "../Footer";
import Error from '../others/error/Error';

import "../styles/main.css";

function NewBook(props) {
  const dispatch = useDispatch();
  const categorias = useSelector((state) => state.categoryReducer.categorias);
  const [errorfront, setErrorfront] = React.useState({});
  const [error, setError] = React.useState([]); 
  const [datos, setDatos] = React.useState({
    nombre: "",
    descripcion: "",
    categoriaid: "",
  });

  const validar = (nombre, descripcion, categoria) => {
    const errores = {};
    const nombresValidos = /^[a-zA-Z0-9ÑñÁáÉéÍíÓóÚú\s]+$/;

    if (nombre.length === 0) {
      errores.nombre = 'El nombre no puede estar en blanco';
    }

    if (nombre.length < 2 && nombre.length !== 0) {
      errores.nombre = 'El nombre debe tener 2 caracteres como mínimo';
    }
    if (nombre.length > 50) {
      errores.nombre = 'El nombre no puede contener mas de 50 caracteres';
    }
    if (nombre && !nombresValidos.exec(nombre)) {
      errores.nombre = 'El nombre solo puede contener letras, números y espacios';
    }
    if(descripcion.length > 50) {
      errores.descripcion = 'La descripción no puede tener más de 50 caracteres';
    }
    if (descripcion && !nombresValidos.exec(descripcion)) {
      errores.descripcion = 'La descripción solo puede contener letras, números y espacios';
    }
    if (categoria.length === 0) {
      errores.categoria = 'Debes elegir una categoría';
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
  React.useEffect(() => {
    const validacion = validar(datos.nombre, datos.descripcion, datos.categoriaid);
    setErrorfront(validacion);
  }, [datos]);

  const enviarFormulario = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/libro",
        datos
      );
  
      dispatch({
        type: "ADD_BOOK",
        payload: response.data,
      });
      props.history.push({
        pathname:(`/libro`), listo:'agregaste un nuevo libro!'});
    } catch (error) {
      setError(error.response.data.Mensaje);
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
                      <p className="error">{errorfront.nombre}</p>
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
                                <p className="error">{errorfront.descripcion}</p>
          <br />
          <select class="btn"
            name="categoria"
            onChange={handleChangeCategoria}
          >
            <option value="">Seleccione un género</option>
            {categorias.map((unaCategoria) => (
              <option value={unaCategoria.ID}>
                {unaCategoria.nombre}
              </option>
            ))}
          </select>
          <p className="error">{errorfront.categoria}</p>
          <br />
          
          <button
            className="btn"
            name="send" id="send"
            disabled={errorfront.nombre || errorfront.descripcion || errorfront.categoria}
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

export default NewBook;
