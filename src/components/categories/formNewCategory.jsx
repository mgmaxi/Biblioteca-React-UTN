/** @format */
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
/* Components */
import Nav from "../Nav";
import Footer from "../Footer";
import Error from '../others/error/Error';
/* Styles */

import "../styles/main.css";

function NewCategory(props) {
  const dispatch = useDispatch();
  const [errorfront, setErrorfront] = useState({});
  const [error, setError] = useState([]); 
  const [datos, setDatos] = useState({
    nombre: "",
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


  const handleChangeNombre = (e) => {
    const nuevoState = JSON.parse(
      JSON.stringify(datos)
    );
    nuevoState.nombre = e.target.value;
    setDatos(nuevoState);
  };

  React.useEffect(() => {
    const validacion = validar(datos.nombre);
    setErrorfront(validacion);
  }, [datos]);

  const enviarFormulario = async (e) => {
    e.preventDefault();
  try {
    const response = await axios.post(
      "http://localhost:3000/categoria",
      datos
    );

    dispatch({
      type: "ADD_CATEGORY",
      payload: response.data,
    });
    props.history.push({
      pathname:"/categoria", listo:'agregaste una categoria'});
  } catch (error) {
    setError(error.response.data.Mensaje);
  }
}  

  return (
    <div>
      <Nav />
      <div className="mainContainer">
      <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Nombre de la nueva categoria</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
      </div>
      <Footer />
    </div>
  );
}

export default NewCategory;
