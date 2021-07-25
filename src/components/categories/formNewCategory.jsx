import React from 'react';
import axios from 'axios';

function NewCategory(props) {
    const [datos, setDatos] = React.useState({
        nombre: '',
        
            });
    const handleChangeNombre = e => {
        const nuevoState = JSON.parse(JSON.stringify(datos));
        nuevoState.nombre = e.target.value;
        setDatos(nuevoState);
    };
    const enviarFormulario = async () => {
        await axios.post('http://localhost:3000/categoria', datos)
    };

    return (

        <div>
            <h1>Nueva categoria</h1>
            <form onSubmit={enviarFormulario}>
                <label htmlFor="nombre">Nombre</label>
                <input onChange={handleChangeNombre} name="nombre" id="nombre" type="text" />
              <br />
                <button className="btn btn-primary" name="send" type="submit">Enviar</button>
            </form>
        </div>

    );
};



export default NewCategory;