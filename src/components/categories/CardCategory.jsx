import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
/* Components */
import Edit from '../others/btn/btnEdit';
import Delete from '../others/btn/btnDelete';
import Book from '../others/btn/btnBook';
import Error from '../others/error/Error';
/* Styles */
import "../styles/cardCategory.css";

export default function CardCategory({
  categoria,
}) {

  const dispatch = useDispatch();
  const [error, setError] = useState([]); 

  const handleBorrarCategoria = async (idCategoria) => {
    try {
    await axios.delete('http://localhost:3000/categoria/' + idCategoria);
    dispatch({ type: "REMOVER_CATEGORIA", idCategoriaARemover: idCategoria });
    } catch (error) {
      setError(error)
    }
};

  return (
    <div className="container">
      <div
        key={categoria.id}
        className="cardCategory"
      >
        <div>
          <h2 className="nameCategory">
            {categoria.nombre}
          </h2>
          <h2 className="categoryID">
            ID {categoria.ID}
          </h2>

          <div className="btnGroupCategory">
                      <Book subTitle="Libros en esta Cat" url={'/categoria/view/' + categoria.ID} /><Link to={`/categoria/modify/${categoria.ID}/${categoria.nombre}`}>modificar</Link> <Delete onClick={() => handleBorrarCategoria(categoria.ID)} />
          </div>
          <Error message={error} />
          </div>
        </div>
      </div>
    
  );
}
