import React from "react";
import {  useSelector } from 'react-redux';
/* Styles */
import "../styles/main.css";

/* Components */
import CardCategory from "./CardCategory"
import Nav from "../Nav";
import Footer from "../Footer";

export default function CategoryList() {
  
  const listado = useSelector((state) => state.categoryReducer.categorias);

  const categoryListArray = listado.map(
    (categoria) => 
    
    
          <CardCategory
            key={categoria.id}
            categoria={categoria}
          />
        );
  

  return (
    <>
      <Nav />
      <div className="mainContainer">
        <div className="boxContainer">
          {categoryListArray}
        </div>
      </div>
      <Footer />
    
  
</>
  )
  }

  