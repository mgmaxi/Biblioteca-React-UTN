/** @format */

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
            ID: {categoria.ID}
          </h2>

          <div className="buttonGroup">
            <button
              onClick={categoria.ID}
              className="modifyButton"
              type="button"
            >
              Modificar
            </button>
            <button
              onClick={categoria.ID}
              className="deleteButton"
              type="button"
            >
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
