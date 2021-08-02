import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './others/logo/logo';

export default function Nav () {
    return (
<div> 
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="/libro">My Books</a>   
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="/libro">Libros</a>
        <a class="nav-link" href="/categoria">Categorias</a>
        <a class="nav-link" href="/persona">Personas</a>
        
      </div>
    </div>
  </div>
</nav>
</div>

)
}