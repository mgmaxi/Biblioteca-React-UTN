/** @format */

import React from "react";
import { useSelector } from "react-redux";
/* Components */
import Nav from "../Nav";
import Footer from "../Footer";
import CardBook from "./CardBook";

/* Styles */
import "../styles/main.css";

/* Services */

export default function BookList() {
  const listado = useSelector(
    (state) => state.bookReducer.libros
  );

  const bookListArray = listado.map((libro) => (
    <CardBook key={libro.id} libro={libro} />
  ));

  return (
    <>
      <Nav />
      <div className="mainContainer">
        <div className="boxContainer">
          {bookListArray}
        </div>
      </div>
      <Footer />
    </>
  );
}
