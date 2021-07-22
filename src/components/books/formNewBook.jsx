import React from 'react';
import axios from 'axios';

function NewBook(props) {
    const [categorias, setCategorias] = React.useState([]);
    const [datos, setDatos] = React.useState({
        nombre: '',
        descripcion: '',
        categoria: ''
    });
    const obtenerCategorias = async () => {
        try {
            const respuesta = await axios.get('http://localhost:3000/categoria');
            setCategorias(respuesta.data);
        } catch (e) {}
    };
    React.useEffect(() => {
        obtenerCategorias();
    }, []);

    const handleChangeNombre = e => {
        const nuevoState = JSON.parse(JSON.stringify(datos));
        nuevoState.nombre = e.target.value;
        setDatos(nuevoState);
    };

    const handleChangeDescripcion = e => {
        const nuevoState = JSON.parse(JSON.stringify(datos));
        nuevoState.descripcion = e.target.value;
        setDatos(nuevoState);
    };

    const handleChangeCategoria = e => {
        const nuevoState = JSON.parse(JSON.stringify(datos));
        nuevoState.categoria = e.target.value;
        setDatos(nuevoState);
    };
    const enviarFormulario = async () => {
        await axios.post('http://localhost:3000/libro', datos);
    };

    return (

        <div>
            <h1>Nuevo libro</h1>
            <form onSubmit={enviarFormulario}>
                <label htmlFor="nombre">Título</label>
                <input onChange={handleChangeNombre} placeholder="Título del libro" name="nombre" type="text" />
                <br />
                <label htmlFor="descripcion">Descripción</label>
                <input onChange={handleChangeDescripcion} placeholder="Descripción" name="descripcion" type="text"/>
                <br />
                <select name="categoria" onChange={handleChangeCategoria}>
                <option value="">Seleccione un género</option>
                {categorias.map(unaCategoria => (
                    <option value={unaCategoria.id}>
                        {unaCategoria.nombre}
                    </option>
                    ))}
                </select>
                <br />
                <button className="btn btn-primary" name="send" type="submit">Enviar</button>
            </form>
        </div>

    );
};



export default NewBook;