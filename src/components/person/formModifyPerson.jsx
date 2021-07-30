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

function ModifyPerson(props) {
  const { id, nombre, apellido, email, alias } = useParams();
  const [errorfront, setErrorfront] = useState({});
  const [error, setError] = useState([]); 
  const dispatch = useDispatch();

  const [datos, setData] = useState({
    ID: id,
    nombre: nombre,
    apellido: apellido,
    email: email,
    alias: alias,
  });

 const validar = (nombre, apellido, alias) => {
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
    if (apellido.length === 0) {
      errores.apellido = 'El apellido no puede estar en blanco';
    }

    if (apellido.length < 5 && apellido.length !== 0) {
      errores.apellido = 'El apellido debe tener 5 caracteres como mínimo';
    }
    if (apellido.length > 50) {
      errores.apellido = 'El apellido no puede contener mas de 50 caracteres';
    }
    if (apellido && !nombresValidos.exec(apellido)) {
      errores.apellido = 'El apellido solo puede contener letras, números y espacios';
    }
    if (alias.length === 0) {
      errores.alias = 'El alias no puede estar en blanco';
    }

    if (alias.length < 5 && alias.length !== 0) {
      errores.alias = 'El alias debe tener 5 caracteres como mínimo';
    }
    if (alias.length > 50) {
      errores.alias= 'El alias no puede contener mas de 50 caracteres';
    }
    if (alias && !nombresValidos.exec(alias)) {
      errores.alias = 'El alias solo puede contener letras, números y espacios';
    }
    
    return errores;

  }

  const handleNombre = (e) => {
    const nuevoState = JSON.parse(JSON.stringify(datos));
    nuevoState.nombre = e.target.value;
    setData(nuevoState);
  };
  const handleApellido = (e) => {
    const nuevoState = JSON.parse(JSON.stringify(datos));
    nuevoState.apellido = e.target.value;
    setData(nuevoState);
  };
  const handleEmail = (e) => {
    const nuevoState = JSON.parse(JSON.stringify(datos));
    nuevoState.email = e.target.value;
    setData(nuevoState);
  };
  const handleAlias = (e) => {
    const nuevoState = JSON.parse(JSON.stringify(datos));
    nuevoState.alias = e.target.value;
    setData(nuevoState);
  };

  React.useEffect(() => {
    const validacion = validar(datos.nombre, datos.apellido, datos.alias);
    setErrorfront(validacion);
  }, [datos]);

const enviarFormulario = async (e) => {
  e.preventDefault();
    try {
      await axios.put(  `http://localhost:3000/persona/${id}`, datos);
      dispatch({ type: "MODIFY_PERSON", payload: [parseInt(id), datos] });
      props.history.push({
        pathname:`/persona`, listo:'modificaste la persona'});
    } catch (error) {
      setError(error.response.data.Mensaje);
  }
}

return (
    <div>
      <Nav />
      <div className="mainContainer">
        <form
          className="formContainerPerson"
          onSubmit={enviarFormulario}
        >
          <h1 className="formName">
            Editar Persona
          </h1>
          <label htmlFor="nombre">Nombre</label>
          <input
           required value={datos.nombre}
            onChange={handleNombre}
            name="nombre"
            id="nombre"
            type="text"
            className="smallInputTextPerson"
          />
          <p className="error">{errorfront.nombre}</p>
          <br />
          <label htmlFor="apellido">
            Apellido
          </label>
          <input
            required value={datos.apellido}
            onChange={handleApellido}
            name="apellido"
            id="apellido"
            type="text"
            className="smallInputTextPerson"
          />
           <p className="error">{errorfront.apellido}</p>
          <br />
          <label htmlFor="nombre">Email</label>
          <input
            
           required value={datos.email}
            onChange={handleEmail}
            name="nombre"
            id="nombre"
            type="text"
            className="greyout"
            readOnly
          />
          <br />
          <label htmlFor="alias">Alias</label>
          <input 
           required value={datos.alias}
            onChange={handleAlias}
            name="alias"
            id="alias"
            type="text"
            className="smallInputTextPerson"
          />
          <p className="error">{errorfront.alias}</p>
          <br />

          <br />
          <button
            className="btn btn-primary"
            name="send"
            type="submit"
            disabled={errorfront.nombre || errorfront.apellido || errorfront.email || errorfront.alias}
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

export default ModifyPerson;
