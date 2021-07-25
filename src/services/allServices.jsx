import axios from 'axios';
const url = 'http://localhost:3000';

/* CONSUMO DE LA TABLA LIBRO */

/* Obtiene todos los libros */

export const getBooks = async () => {
    try {
        const response = await axios.get(url + "/libro");
        return (response);
    } catch(error) {
        console.log(error);
        return [];
    }
}

/* Obtiene un libro a través de su ID */

export const getBooksByID = async (id = 0) => {
    try {
        const response = await axios.get(url + "/libro/" + id);
        return (response);
    } catch(error) {
        console.log(error);
        return [];
    }
}

/* CONSUMO DE LA TABLA CATEGORIA */

/* Obtiene todos los libros de una categoria a través de su ID */

export const getBooksByCategory = async (id = 0) => {
    try {
        const response = await axios.get(url + "/libro/categoria/" + id);
        return (response);
    } catch(error) {
        console.log(error);
        return [];
    }
}

/* Obtiene la categoria a través de su ID */

export const getCategory = async (id = 0) => {
    try {
        const response = await axios.get(url + "/categoria/" + id);
        return(response);
    } catch(error) {
        console.log(error);
        return [];
    }
}

/* CONSUMO DE LA TABLA PERSONA */

/* Obtiene la persona a través de su ID */

export const getPerson = async (id = 0) => {
    try {
        const response = await axios.get(url + "/persona/" + id);
        return(response);
    } catch(error) {
        console.log(error);
        return [];
    }
}