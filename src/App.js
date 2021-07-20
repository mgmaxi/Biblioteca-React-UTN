import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home'
import BookList from './components/books/BookList';
import BookByID from './components/books/BookByID';
import BookByCategory from './components/books/BookByCategory';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home} /> 

        {/* <Route exact path="/categoria" component={CategoriaListado} /> */} {/* Muestra todas las categorías */}
        {/* <Route exact path="/categoria/id" component={CategoriaPorID} />*/}  {/* Muestra una categoría específica */ }

        <Route exact path="/libro" component={BookList} /> {/* Muestra todos los libros */}
        <Route exact path="/libro/:id" component={BookByID} /> {/* Muestra un libro específico */}
        <Route exact path="/libro/categoria/:id" component={BookByCategory} /> {/* Muestra todos los libros de un género */}

        {/* <Route exact path="/persona" component={PersonaListado} /> */} {/* Muestra todas las personas */}
        {/* <Route exact path="/persona/:id" component={PersonaPorID} /> */} {/* Muestra una persona específica */}
      </Router>
    </div>
  );
}

export default App;
