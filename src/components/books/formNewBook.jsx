import React, { Fragment, useState } from 'react';
import axios from 'axios';

const Formu = () => {



    
   


    const [datos, setdatos] = useState({
        nombre: '',
        descripcion: '',
        categoria: '',
        persona: ''
    })

    const handleInputChange = (e) => {

        setdatos({
            ...datos,
            [e.target.name]: e.target.value
        });
    }

    const  enviarFormulario = (e) => {
        e.preventDefault();
        console.log(datos.nombre + ' ' + datos.descripcion + ' ' + datos.categoria + ' ' + datos.persona);        
        const respuesta = axios.post('http://localhost:3000/libro',datos);
    }

    return (

        <div>
            <h1>Formulario</h1>
            <form onSubmit={enviarFormulario}>
                <input onChange={handleInputChange} placeholder="Nombre" name="nombre" type="text"></input>
                <br />
                <input onChange={handleInputChange} placeholder="Descripción" name="descripcion" type="text"></input>
                <br />
                <input onChange={handleInputChange} placeholder="Categoría" name="categoria" type="text"></input>
                <br />
                <input onChange={handleInputChange} placeholder="Persona" name="persona" type="text"></input>
                <br />
                <button className="btn btn-primary" name="send" type="submit">Enviar</button>
            </form>
        </div>

    );
};




export default Formu;