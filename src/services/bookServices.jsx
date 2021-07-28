const url = 'http://localhost:3000/libros';

export default function BookServices () {

    const getBooks = () => {
        const booksTemp = await axios.get(url+"/libros");

        return [...booksTemp];
    }

    const getBooksByGenre = (id = 0) => {
        const booksTemp = await axios.get(url+"/libros/genero/"+id);

        return [...booksTemp];
    }
}
