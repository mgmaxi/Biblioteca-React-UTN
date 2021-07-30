import React, {useState} from 'react';
import NewBook from './NewBook';

const Form = () => {

    const [formIsSubmitted, setformIsSubmitted] = useState(false)

    const submitForm = () => {
        setformIsSubmitted(true);
    }

    return (

        <div>
            {!formIsSubmitted ? <NewBook submitForm={submitForm} /> : "Agregado Nuevo Libro"}
        </div>
    )
}

export default Form;