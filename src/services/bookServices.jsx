import axios from 'axios';
const url = 'http://localhost:3000';

/* CONSUMO DE LA TABLA LIBRO */

/* Obtiene todos los libros */

export const getBooks = async () => {
    try {
        const response = await axios.get(url+"/libro");
        return (response);
    } catch(error) {
        console.log(error);
        return [];
    }
}

/* Obtiene todos los libros por ID */

export const getBooksByID = async (id = 0) => {
    try {
        const response = await axios.get(url+"/libro/"+id);
        return (response);
    } catch(error) {
        console.log(error);
        return [];
    }
}