import React, {useState, useEffect} from 'react';
import { Link , useParams } from 'react-router-dom';
/* Services */
import { getBooksByCategory, getCategory } from '../../services/allServices.jsx';
/* Components */
import Nav from '../Nav';
import Footer from '../Footer'
/* Styles */
import '../styles/main.css'
import '../styles/bookView.css'

export default function CategoryByID () {

    const params = useParams();
    const [viewBookByCategory, setViewBookByCategory] = useState([]);
    const [category, setCategory] = useState([]);

    /* Consumo de la tabla Libro (por Categoria) */

    const fetchBooksByCategory = async () => {
        const response = await getBooksByCategory(params.id);
        if (response.status === 200) {
            setViewBookByCategory(response.data);
        }
    }

    /* Consumo de la tabla Categoria */

    const fetchCategory = async () => {
        const response = await getCategory(params.id);
        if (response.status === 200) {
            setCategory(response.data);
        }
    }

    useEffect(() => {
        fetchBooksByCategory(); // eslint-disable-next-line
        fetchCategory(); // eslint-disable-next-line
    },[params]);

    const bookByCategoryArray = viewBookByCategory.map(libro=>(
        <div key={libro.id}>
            <li><Link to={'/libro/' + libro.id}>{libro.nombre}</Link></li>
        </div>
    ))

    const nameCategory = category.map((categoria)=> categoria.nombre)

    return (
        <>
            <Nav />
            <div className="mainContainer">
                <div className="bookContainer">
                    <h1>Libros en la categoria <span className="lowercase">{nameCategory}</span>:</h1>
                    <ul className="listBooksByCategory">
                        {bookByCategoryArray}
                    </ul>
                    <Link to="/categoria" className="linkBooks">Volver a Categorias</Link>
                </div>
            </div>
            <Footer />
        </>
    )
}