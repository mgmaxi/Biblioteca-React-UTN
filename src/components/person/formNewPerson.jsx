import React from 'react';
import axios from 'axios';

function NewPerson(props) {
    const [datos, setDatos] = React.useState({
        nombre: '',
        apellido: '',
        email: '',
        alias:''
            });
        const handleChangeNombre = e => {
        const nuevoState = JSON.parse(JSON.stringify(datos));
        nuevoState.nombre = e.target.value;
        setDatos(nuevoState);
    };

    const handleChangeApellido = e => {
        const nuevoState = JSON.parse(JSON.stringify(datos));
        nuevoState.apellido = e.target.value;
        setDatos(nuevoState);
    };

    const handleChangeEmail = e => {
        const nuevoState = JSON.parse(JSON.stringify(datos));
        nuevoState.email = e.target.value;
        setDatos(nuevoState);
    };
    const handleChangeAlias = e => {
        const nuevoState = JSON.parse(JSON.stringify(datos));
        nuevoState.alias = e.target.value;
        setDatos(nuevoState);
    };
    const enviarFormulario = async () => {
        await axios.post('http://localhost:3000/persona', datos)
    };

    return (

        <div>
            <h1>Nuevo Persona</h1>
            <form onSubmit={enviarFormulario}>
                <label htmlFor="nombre">Nombre</label>
                <input onChange={handleChangeNombre} name="nombre" id="nombre" type="text" />
                <br />
                <label htmlFor="apellido">Apellido</label>
                <input onChange={handleChangeApellido} name="apellido" id="apellido" type="text"/>
                <br />
                <label htmlFor="email">Email</label>
                <input onChange={handleChangeEmail} name="email" id="email" type="text" />
                <br />
                <label htmlFor="alias">Alias</label>
                <input onChange={handleChangeAlias} name="alias" id="alias" type="text"/>
                <br />
                
                <br />
                <button className="btn btn-primary" name="send" type="submit">Enviar</button>
            </form>
        </div>

    );
};



export default NewPerson;