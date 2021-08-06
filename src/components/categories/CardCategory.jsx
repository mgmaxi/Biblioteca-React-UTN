import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
/* Components */
import Edit from '../others/btn/btnEdit';
import Delete from '../others/btn/btnDelete';
import Book from '../others/btn/btnBook';
import Error from '../others/error/Error';
/* Styles */


export default function CardCategory({
  categoria,
}) {

  const dispatch = useDispatch();
  const [error, setError] = useState([]); 

  const handleBorrarCategoria = async (idCategoria) => {
    try {
    await axios.delete('http://localhost:3000/categoria/' + idCategoria);
    dispatch({ type: "DELETE_CATEGORY", idCategoriaARemover: idCategoria });
    } catch (error) {
      setError(error.response.data.Mensaje);
    }
};

  return (
    <div class="card cardCategory" styles="width: 3rem;">
    <div class="card-header text-dark">
      ID:&nbsp;{categoria.ID}
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item textCategory">{categoria.nombre}</li>
    </ul>
    <div class="btn-group" role="group" aria-label="Basic example" styles="margin-top: 5px;">
    <button type="button" class="btn btn-info">Libros</button>
    <button onClick type="button" class="btn btn-warning">Modificar</button>
    <button onClick type="button" class="btn btn-danger">Eliminar</button>
  </div>
  </div>
    
  );
}
