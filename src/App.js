import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home'
import BookList from './components/books/BookList';
import BookByID from './components/books/BookByID';
import formNewBook from './components/books/formNewBook';
import CategoryList from './components/categories/CategoryList';
import CategoryByID from './components/categories/CategoryByID';
import formNewCategory from './components/categories/formNewCategory';
import PersonList from './components/person/PersonList';
import PersonByID from './components/person/PersonByID';
import formNewPerson from './components/person/formNewPerson';
import axios from 'axios';
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const App = () => {


  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAll = async () => {
      let respuesta = await axios.get("http://localhost:3000/libro");
      dispatch({ type: "AGREGAR_LISTADO_LIBROS", listado: respuesta.data });
       respuesta = await axios.get(
        "http://localhost:3000/categoria"
      );
      dispatch({ type: "AGREGAR_LISTA_CATEGORIAS", listado: respuesta.data });
       respuesta = await axios.get("http://localhost:3000/persona");
      dispatch({ type: "AGREGAR_LISTA_PERSONAS", listado: respuesta.data });
    };
    fetchAll();
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home} /> 

        <Route exact path="/libro" component={BookList} /> {/* Muestra todos los libros */}
        <Route exact path="/libro/view/:id" component={BookByID} /> {/* Muestra un libro específico */}
        <Route exact path="/libro/new" component={formNewBook} />  {/* Agrega un libro */ }
        {/*<Route exact path="/libro/modify" component={} /> */}

        <Route exact path="/categoria" component={CategoryList} />  {/* Muestra todas las categorías */}
        <Route exact path="/categoria/view/:id" component={CategoryByID} />  {/* Muestra de una categoría específica todos los libros */ }
        <Route exact path="/categoria/new" component={formNewCategory} />  {/* Agrega una categoria */ }
        {/*<Route exact path="/categoria/modify" component={} /> */}

        <Route exact path="/persona" component={PersonList} />  {/* Muestra todas las personas */}
        <Route exact path="/persona/view/:id" component={PersonByID} />  {/* Muestra una persona específica */}
        <Route exact path="/persona/new" component={formNewPerson} />  {/* Agrega una persona */ }
       {/*<Route exact path="/persona/modify" component={}/> */}

      </Router>
    </div>
  );
}

export default App;
