import React, { useState } from "react";
import { useParams} from "react-router-dom";

import Nav from "../Nav";
import Footer from "../Footer";
import "../styles/newFormCategory.css";
import "../styles/main.css";
import axios from "axios";
import { useDispatch } from "react-redux";

function ModifyBook(props) {
  const { id, descripcion } = useParams();

  const dispatch = useDispatch();

  const [data, setData] = useState({
    ID: id,
    descripcion: descripcion,
  });

  const handleDescripcion = (e) => {
    const nuevoState = JSON.parse(JSON.stringify(data));
    nuevoState.descripcion = e.target.value;
    setData(nuevoState);
  };

const enviarFormulario = async () => {
    
    try {
      await axios.put(  `http://localhost:3000/libro/${id}`, data);
      dispatch({ type: "MODIFY_BOOK", payload: [parseInt(id), data.descripcion] });
     
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
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default ModifyBook;