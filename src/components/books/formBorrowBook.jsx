/** @format */
import React from "react";
import { useParams} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
/* Components */
import Nav from "../Nav";
import Footer from "../Footer";
import Error from '../others/error/Error';
/* Styles */

import "../styles/main.css";

function BorrowBook(props) {
    const {id, nombre} = useParams();
    const dispatch = useDispatch();
    const personas = useSelector((state) => state.personReducer.personas);
    console.log(personas)
    const [error, setError] = React.useState([]); 
    const [data, setData] = React.useState({
   
personaid: null,
    });
    
    const handlePrestarLibro = ({target}) => {
      console.log(target.value) 
      const nuevoState = JSON.parse(
        JSON.stringify(data)
      );
      nuevoState.personaid = target.value;
      setData(nuevoState);
    };
    
  
    const enviarFormulario = async (e) => {
      e.preventDefault();
      try {
        
        await axios.put(
            `http://localhost:3000/libro/prestar/${id}`, data
          
        );
    
        dispatch({
          type: "BORROW_BOOK",
          payload: {
            persona: data.persona_id,
            id: id,
          },  });
          props.history.push({pathname:`/libro`, listo: 'prestaste el libro'});
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
            Prestar Libro
          </h1>
          <label htmlFor="nombre">Titulo</label>
          <input
          value={nombre}
          
            readOnly
            name="nombre"
            id="nombre"
            type="text"
            className="greyout"
          />
          <br />
          <select class="btn btn-danger dropdown-toggle"
            name="libro"
            onChange={handlePrestarLibro}
          >
            <option>Seleccione una persona</option>
            {personas.map((unaPersona) => (
              <option key={unaPersona.ID}> 
              {unaPersona.ID}
                {unaPersona.nombre}
              </option>
            ))}
          </select>
          <br />
          <button
            className="btn btn-primary"
            name="send"
            type="submit"
          >
            Prestar
          </button>
          <Error message={error} />
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default BorrowBook;