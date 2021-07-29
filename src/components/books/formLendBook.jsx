import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import axios from 'axios';
import Error from '../others/error/Error';
import Nav from "../Nav";
import Footer from "../Footer";
import "../styles/main.css";

export default function FormLendBook(props) {
    const persons = useSelector((state) => state.personReducer.personas);
    const { id, nombre } = useParams();
    const [error, setError] = useState([]); 

    const dispatch = useDispatch ();

    const [form, setForm] = useState ({
        personaid: 0
    });

    const selectPerson = () => {
        return persons.map((element) => (
            <option key={element.personaid} value={element.personaid}>
                {element.nombre}
            </option>
        ));
    };

    const submitForm = async (e) => {
        e.preventDefault(); //eslint
        try {
            await axios.put (`http://localhost:3000/libro/prestar/${id}`, form); // (('http://localhost:3000/libro/prestar/'+ID), form);
            dispatch ({ type: "PRESTAR_LIBRO", payload: {persona: form.persona_id, id:id},})
        
        } catch (error) { 
            setError(error.response.data.Mensaje)
        }
    };

    const personID = ({target}) => {
        const lendForm = JSON.parse(JSON.stringify(form));
        lendForm.persona_id = target.value;
        setForm(lendForm); 
    }



    return(
        <>
            <Nav />
                <div className="mainContainer">
                    <h1>Prestar Libro</h1>
                    <form onSubmit={submitForm}>
                        <label htmlFor="">Libro</label>
                        <input type="text" value={nombre} name="nombre" />
                        <br />
                        <select onChange={personID} name="persona" id="persona"></select>
                        <option value="">
                            {selectPerson}
                        </option>
                        <button type="submit">Prestar</button>

                    </form>

                    <Error message={error} />
                </div>
            <Footer />
        </>
    )
}