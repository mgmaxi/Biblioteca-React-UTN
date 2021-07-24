import axios from 'axios';
const url = 'http://localhost:3000';

/* CONSUMO DE LA TABLA CATEGORIA */

/* Obtiene todas las CATEGORIAS */

export const getCategory = async () => {
    try {
        const response = await axios.get(url+"/categoria");
        return (response);
    } catch(error) {
        console.log(error);
        return [];
    }
}
