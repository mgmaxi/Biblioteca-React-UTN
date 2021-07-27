import axios from 'axios';
const url = 'http://localhost:3000';

/* CONSUMO DE LA TABLA LIBRO */

/* Obtiene todos los libros */

export const getBooks = async () => {
    try {
        const response = await axios.get(url + "/libro");
        return (response);
    } catch(error) {
        console.log(error.response);
        return [error.response.data.Mensaje];
    }
}

/* Obtiene un libro a través de su ID */

export const getBooksByID = async (id = 0) => {
    try {
        const response = await axios.get(url + "/libro/" + id);
        return (response);
    } catch(error) {
        console.log(error.response);
        return [error.response.data.Mensaje];
    }
}

/* CONSUMO DE LA TABLA CATEGORIA */

/* Obtiene todas las CATEGORIAS */

export const getCategory = async () => {
    try {
        const response = await axios.get(url+"/categoria");
        return (response);
    } catch(error) {
        console.log(error);
        return [error.response.data.Mensaje];
    }
}

/* Obtiene todos los libros de una categoria a través de su ID */

export const getBooksByCategory = async (id = 0) => {
    try {
        const response = await axios.get(url + "/libro/categoria/" + id);
        return (response);
    } catch(error) {
        console.log(error.response);
        return [error.response.data.Mensaje];
    }
}

/* Obtiene la categoria a través de su ID */

export const getCategoryByID = async (id = 0) => {
    try {
        const response = await axios.get(url + "/categoria/" + id);
        return(response);
    } catch(error) {
        console.log(error.response);
        return [error.response.data.Mensaje];
    }
}

/* CONSUMO DE LA TABLA PERSONA */

export const getPerson = async () => {
    try {
        const response = await axios.get(url+"/persona");
        return (response);
    } catch(error) {
        console.log(error);
        return [error.response.data.Mensaje];
    }
}

/* Obtiene la persona a través de su ID */

export const getPersonByID = async (id = 0) => {
    try {
        const response = await axios.get(url + "/persona/" + id);
        return(response);
    } catch(error) {
        console.log(error.response);
        return [error.response.data.Mensaje];
    }
}

/* export const deletePerson = async () => {
    try {
        const response = await axios.delete(url+"/persona/"+);
        return (response);
    } catch(error) {
        console.log(error);
        return [];
    }
}
*/