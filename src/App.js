import React from 'react';
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
import formNewPerson from './components/person/formNewPerson';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home} /> 

        <Route exact path="/libro" component={BookList} /> {/* Muestra todos los libros */}
        <Route exact path="/libro/view/:id" component={BookByID} /> {/* Muestra un libro específico */}
        <Route exact path="/libro/new" component={formNewBook} />  {/* Agrega un libro */ }

        <Route exact path="/categoria" component={CategoryList} />  {/* Muestra todas las categorías */}
        <Route exact path="/categoria/view/:id" component={CategoryByID} />  {/* Muestra de una categoría específica todos los libros */ }
        <Route exact path="/categoria/new" component={formNewCategory} />  {/* Agrega una categoria */ }

        <Route exact path="/persona" component={PersonList} />  {/* Muestra todas las personas */}
       {/* <Route exact path="/persona/view/:id" component={PersonaByID} /> */} {/* Muestra una persona específica */}
       <Route exact path="/persona/new" component={formNewPerson} />  {/* Agrega una persona */ }

      </Router>
    </div>
  );
}

export default App;
