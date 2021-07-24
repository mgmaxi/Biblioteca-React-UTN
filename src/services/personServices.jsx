import axios from 'axios';
const url = 'http://localhost:3000';

/* CONSUMO DE LA TABLA PERSONA */

/* Obtiene todas las personas */

export const getPerson = async () => {
    try {
        const response = await axios.get(url+"/persona");
        return (response);
    } catch(error) {
        console.log(error);
        return [];
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

}

*/

