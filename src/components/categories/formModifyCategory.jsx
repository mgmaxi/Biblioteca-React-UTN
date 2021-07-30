import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams} from "react-router-dom";
import axios from "axios";
/* Components */
import Nav from "../Nav";
import Footer from "../Footer";
import Error from '../others/error/Error';
/* Styles */
import "../styles/newFormCategory.css";
import "../styles/main.css";

function Modify(props) {
  const { id, nombre } = useParams();
  const [errorfront, setErrorfront] = useState({});
  const [error, setError] = useState([]); 
  const dispatch = useDispatch();
  const [datos, setData] = useState({
    ID: id,
    nombre: nombre,
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

  const handleNombre = (e) => {
    const nuevoState = JSON.parse(JSON.stringify(datos));
    nuevoState.nombre = e.target.value;
    setData(nuevoState);
  };

  React.useEffect(() => {
    const validacion = validar(datos.nombre);
    setErrorfront(validacion);
  }, [datos]);

const enviarFormulario = async (e) => {
  e.preventDefault();
    try {
      await axios.put(  `http://localhost:3000/categoria/${id}`, datos);
      dispatch({ type: "MODIFY_CATEGORY", payload: [parseInt(id), datos.nombre] });
      props.history.push({
        pathname:`/categoria`});
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
            Editar Categoria
          </h1>
          <label htmlFor="nombre">Nombre</label>
          <input
            required
            value={datos.nombre}
            onChange={handleNombre}
            name="nombre"
            id="nombre"
            type="text"
            className="smallInputTextCategory"
          />
          <p className="error">{errorfront.nombre}</p>
          <br />
          <button
            className="btn btn-primary"
            name="send"
            type="submit"
          >
            Modificar
          </button>
          <Error message={error} />
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Modify;