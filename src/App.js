import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home'
import BookList from './components/books/BookList';
import BookByID from './components/books/BookByID';
import PersonList from './components/person/PersonList';
import CategoryList from './components/categories/CategoryList';
import CategoryByID from './components/categories/CategoryByID';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home} /> 

        <Route exact path="/categoria" component={CategoryList} />  {/* Muestra todas las categorías */}
        <Route exact path="/categoria/:id" component={CategoryByID} />  {/* Muestra de una categoría específica todos los libros */ }

        <Route exact path="/libro" component={BookList} /> {/* Muestra todos los libros */}
        <Route exact path="/libro/:id" component={BookByID} /> {/* Muestra un libro específico */}

        <Route exact path="/persona" component={PersonList} />  {/* Muestra todas las personas */}
       {/* <Route exact path="/persona/:id" component={PersonaByID} /> */} {/* Muestra una persona específica */}
      </Router>
    </div>
  );
}

export default App;
