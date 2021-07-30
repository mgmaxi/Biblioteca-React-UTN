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

function ModifyBook(props) {
  const { id, descripcion } = useParams();
  const dispatch = useDispatch();
  const [errorfront, setErrorfront] = useState({});
  const [error, setError] = useState([]); 
  const [data, setData] = useState({
    ID: id,
    descripcion: descripcion,
  });
   const validar = (desc) => {
    const errores = {};
    const nombresValidos = /^[a-zA-Z0-9ÑñÁáÉéÍíÓóÚú\s]+$/;

    if (desc && desc.length < 50 && desc.length !== 0) {
      errores.desc = 'La descripcion debe tener 50 caracteres como minimo';
    }
    if (desc && desc.length > 150) {
      errores.desc = 'La descripcion no puede contener mas de 150 caracteres';
    }
    if (desc && !nombresValidos.exec(desc)) {
      errores.desc = 'La descripcion solo puede contener letras, números y espacios';
    }
    return errores;
  }
  
  const handleDescripcion = (e) => {
    const nuevoState = JSON.parse(JSON.stringify(data));
    nuevoState.descripcion = e.target.value;
    setData(nuevoState);
  };

  React.useEffect(() => {
    const validacion = validar(data.descripcion);
    setErrorfront(validacion);
  }, [data]);

const enviarFormulario = async (e) => {
  e.preventDefault();
    try {
      await axios.put(  `http://localhost:3000/libro/${id}`, data);
      dispatch({ type: "MODIFY_BOOK", payload: [parseInt(id), data.descripcion] });
      props.history.push({
        pathname:`/libro`, listo:'modificaste el libro'});
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
            Editar Descripcion Del Libro
          </h1>
          <label htmlFor="descripcion">Descripcion</label>
          <input
            required
            value={data.descripcion}
            onChange={handleDescripcion}
            name="descripcion"
            id="descripcion"
            type="text"
            className="bigInputTextBook"
          />
          <p className="error">{errorfront.desc}</p>
          <br />
          <button
            className="btn btn-primary"
            name="send"
            type="submit"
            disabled={errorfront.desc}
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

export default ModifyBook;