import React, {useState, useEffect} from 'react';
import axios from 'axios';
/* Components */
import CardBook from './CardBook';
import Nav from '../Nav';
import Footer from '../Footer'
/* Styles */
import '../styles/main.css'

export default function BookList() {
    
    const [bookList, setBookList] = useState([]);

    useEffect(() => {
        try{
            const fetchData = async () => {
                const url = 'http://localhost:3000/libro'; 
                const response = await axios.get(url);
                if (response.status === 200) {
                    setBookList(response.data)
            }}
            fetchData()
        } catch (error) {
            console.log(error)
        }
    }, [])

    const array = bookList.map((libro)=>{
        return (
            <div>
                <CardBook key={libro.id} libro={libro} />
            </div>
        )
    })

    return (
        <div>
            <Nav />
            <div className="mainContainer">
                <div className="boxContainer">
                    {array}
                </div>
            </div>
            <Footer />
        </div>
    )
}