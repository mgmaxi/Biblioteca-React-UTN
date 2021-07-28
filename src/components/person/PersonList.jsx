/** @format */

import React, {
  useState,
  useEffect,
} from "react";

/* Services */
import { getPerson } from "../../services/allServices";
/* Styles */
import "../styles/main.css";
import "../styles/PersonList.css";
/* Components */
import CardPerson from "./CardPerson";
import Nav from "../Nav";
import Footer from "../Footer";
import Error from '../others/error/Error';

export default function PersonList() {
  const [personlist, setPersonList] = useState(
    []
  );
  const [error, setError] = useState([]); 

  const fetchData = async () => {
    const response = await getPerson();
    if (response.status === 200) {
      setPersonList(response.data);
    } else {
      setError(response)
  }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const personListArray = personlist.map(
    (persona) => {
      return (
        <div>
          <CardPerson
            key={persona.id}
            persona={persona}
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
          {personListArray}
          <Error message={error} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
