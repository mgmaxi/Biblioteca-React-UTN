import React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home'
import BookList from './components/books/BookList';
import BookByID from './components/books/BookByID';
import formNewBook from './components/books/formNewBook';
import FormLendBook from './components/books/formLendBook';
import CategoryList from './components/categories/CategoryList';
import CategoryByID from './components/categories/CategoryByID';
import formNewCategory from './components/categories/formNewCategory';
import fomrModifyCategory from './components/categories/formModifyCategory'
import PersonList from './components/person/PersonList';
import PersonByID from './components/person/PersonByID';
import formNewPerson from './components/person/formNewPerson';
import Error from './components/others/error/Error';
import { getBooks, getCategory, getPerson } from  './services/allServices';

const App = () => {

  const dispatch = useDispatch();
  const [error, setError] = useState([]); 

  useEffect(() => {
    const fetchAll = async () => {
      let respuesta = await getBooks();
      if (respuesta.status === 200) {
      dispatch({ type: "AGREGAR_LISTADO_LIBROS", listado: respuesta.data });
      } else {
      setError(respuesta)
      }
      respuesta = await getCategory();
      if (respuesta.status === 200) {
      dispatch({ type: "AGREGAR_LISTADO_CATEGORIAS", listado: respuesta.data });
      } else {
      setError(respuesta)
      }
      respuesta = await getPerson();
      if (respuesta.status === 200) {
      dispatch({ type: "AGREGAR_LISTADO_PERSONAS", listado: respuesta.data });
      } else {
      setError(respuesta)
      }
    };
    fetchAll();
  }, [dispatch]);

  return (
    <div className="App">
      <Error message={error} />
      <Router>
        <Route exact path="/" component={Home} /> 

        <Route exact path="/libro" component={BookList} /> {/* Muestra todos los libros */}
        <Route exact path="/libro/view/:id" component={BookByID} /> {/* Muestra un libro específico */}
        <Route exact path="/libro/new" component={formNewBook} />  {/* Agrega un libro */ }
        {/*<Route exact path="/libro/modify" component={} /> */}
        <Route exact path="/libro/lend/:id" component={FormLendBook} /> {/* Prestar libro */}

        <Route exact path="/categoria" component={CategoryList} />  {/* Muestra todas las categorías */}
        <Route exact path="/categoria/view/:id" component={CategoryByID} />  {/* Muestra de una categoría específica todos los libros */ }
        <Route exact path="/categoria/new" component={formNewCategory} />  {/* Agrega una categoria */ }
        <Route exact path="/categoria/modify/:id/:nombre" component={fomrModifyCategory} /> 

        <Route exact path="/persona" component={PersonList} />  {/* Muestra todas las personas */}
        <Route exact path="/persona/view/:id" component={PersonByID} />  {/* Muestra una persona específica */}
        <Route exact path="/persona/new" component={formNewPerson} />  {/* Agrega una persona */ }
       {/*<Route exact path="/persona/modify" component={}/> */}

      </Router>
    </div>
  );
}

export default App;
