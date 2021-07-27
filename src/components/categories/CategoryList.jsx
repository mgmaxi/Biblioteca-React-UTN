/** @format */

import React, {
    useState,
    useEffect,
  } from "react";
  
  /* Services */
  import { getCategory } from "../../services/allServices";
  /* Styles */
  import "../styles/main.css";
  import "../styles/CategoryList.css";
  /* Components */
  import CardCategory from "./CardCategory"
  import Nav from "../Nav";
  import Footer from "../Footer";
  import Error from '../others/error/Error';
  
  export default function CategoryList() {
    const [categorylist, setCategoryList] = useState(
      []
    );
    const [error, setError] = useState([]); 

  
    const fetchData = async () => {
      const response = await getCategory();
      if (response.status === 200) {
        setCategoryList(response.data);
      } else {
        setError(response)
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
            <Error message={error} />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  