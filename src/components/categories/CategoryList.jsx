/** @format */

import React, {
    useState,
    useEffect,
  } from "react";
  
  /* Services */
  import { getCategory } from "../../services/categoryServices";
  /* Styles */
  import "../styles/main.css";
  import "../styles/CategoryList.css";
  /* Components */
  import CardCategory from "./CardCategory"
  import Nav from "../Nav";
  import Footer from "../Footer";
  
  export default function CategoryList() {
    const [categorylist, setCategoryList] = useState(
      []
    );
  
    const fetchData = async () => {
      const response = await getCategory();
      if (response.status === 200) {
        setCategoryList(response.data);
      }
    };
    useEffect(() => {
      fetchData();
    }, []);
  
    const categoryListArray = categorylist.map(
      (categoria) => {
        return (
          <div>
            <CardCategory
              key={categoria.id}
              categoria={categoria}
            />
          </div>
        );
      }
    );
  
    return (
      <div>
        <Nav />
        <div className="mainContainer">
          <div className="boxContainer">
            {categoryListArray}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  