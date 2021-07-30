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
  const [error, setError] = useState([]); 
  const [data, setData] = useState({
    ID: id,
    descripcion: descripcion,
  });

  const handleDescripcion = (e) => {
    const nuevoState = JSON.parse(JSON.stringify(data));
    nuevoState.descripcion = e.target.value;
    setData(nuevoState);
  };

const enviarFormulario = async (e) => {
  e.preventDefault();
    try {
      await axios.put(  `http://localhost:3000/libro/${id}`, data);
      dispatch({ type: "MODIFY_BOOK", payload: [parseInt(id), data.descripcion] });
      props.history.push({
        pathname:`/libro`});
    } catch (error) {
      console.log(error)
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

export default ModifyBook;