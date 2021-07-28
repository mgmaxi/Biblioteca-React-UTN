/*
import React, { useState,useRef,useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

function modifyBook(props) {

  return (
    <div>
      <Nav />
      <div className="mainContainer">
        <form
          className="formContainerBook"
          onSubmit={enviarFormulario}
        >
          <h1 className="formName">
            Nuevo libro
          </h1>
          <label htmlFor="nombre">Titulo</label>
          <input
            onChange={handleChangeNombre}
            name="nombre"
            id="nombre"
            type="text"
            className="smallInputTextBook"
          />
          <br />
          <label htmlFor="descripcion">
            Descripcion
          </label>
          <input
            onChange={handleChangeDescripcion}
            name="descripcion"
            id="descripcion"
            type="text"
            className="bigInputTextBook"
            
          />
          <br />
          <select class="btn btn-danger dropdown-toggle"
            name="categoria"
            onChange={handleChangeCategoria}
          >
            <option>Seleccione un género</option>
            {categorias.map((unaCategoria) => (
              <option value={unaCategoria.ID}>
                {unaCategoria.nombre}
              </option>
            ))}
          </select>
          <br />
          <button
            className="btn btn-primary"
            name="send"
            type="submit"
          >
            Agregar
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
  

  }

  */