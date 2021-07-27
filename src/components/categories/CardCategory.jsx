/** @format */
import Edit from '../others/btn/btnEdit';
import Delete from '../others/btn/btnDelete';
import Book from '../others/btn/btnBook';
import React from "react";
import "../styles/cardCategory.css";

export default function CardCategory({
  categoria,
}) {
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
                      <Book subTitle="Libros en esta Cat" url={'/categoria/view/' + categoria.ID} /><Edit /><Delete /> 
                    </div>
          </div>
        </div>
      </div>
    
  );
}
