/** @format */
import React from "react";
import { useParams} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Nav from "../Nav";
import Footer from "../Footer";
import "../styles/newFormBook.css";
import "../styles/main.css";

function BorrowBook(props) {
    const {personaid} = useParams();
    const dispatch = useDispatch();
    const personas = useSelector((state) => state.personReducer.personas);
    const [data, setData] = React.useState({
    personaid:personaid,  
     

    });
    
    const handleNombre = (e) => {
        const nuevoState = JSON.parse(JSON.stringify(data));
        nuevoState.nombre = e.target.value;
        setData(nuevoState);
      };
    const handlePrestarLibro = (e) => {
      const nuevoState = JSON.parse(
        JSON.stringify(data)
      );
      nuevoState.id = e.target.value;
      setData(nuevoState);
    };
  
    const enviarFormulario = async () => {
      
      try {
        
        await axios.put(
            `http://localhost:3000/libro/prestar/${id}`, data
          
        );
    
        dispatch({
          type: "PRESTAR_LIBRO",
          payload: [data.personaid],
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
            Prestar Libro
          </h1>
          <label htmlFor="nombre">Titulo</label>
          <input
          required value={data.nombre}
          onChange={handleNombre}
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
              <option value={unaPersona.ID}>
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
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default BorrowBook;