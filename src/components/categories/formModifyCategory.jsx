import React, { useState } from "react";
import { useParams} from "react-router-dom";

import Nav from "../Nav";
import Footer from "../Footer";
import "../styles/newFormCategory.css";
import "../styles/main.css";
import axios from "axios";
import { useDispatch } from "react-redux";

function Modify(props) {
  const { id, nombre } = useParams();

  const dispatch = useDispatch();

  const [datos, setData] = useState({
    ID: id,
    nombre: nombre,
  });

  const handleNombre = (e) => {
    const nuevoState = JSON.parse(JSON.stringify(datos));
    nuevoState.nombre = e.target.value;
    setData(nuevoState);
  };

const enviarFormulario = async () => {
    
    try {
      await axios.put(  `http://localhost:3000/categoria/${id}`, datos);
      dispatch({ type: "MODIFICAR_CATEGORIA", payload: [parseInt(id), datos.nombre] });
     
    } catch (error) {
      console.log(error)
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
          <br />
          <button
            className="btn btn-primary"
            name="send"
            type="submit"
          >
            Editar
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}



export default Modify;