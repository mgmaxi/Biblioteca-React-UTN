import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../styles/bookList.css';
import CardBook from './CardBook';

export default function BookList() {
    
    const [bookList, setBookList] = useState([]);

    useEffect(() => {
        try{
            const fetchData = async () => {
                const url = 'http://localhost:3000/libro'; 
                const response = await axios.get(url);
                if (response.status === 200) {
                setBookList(response.data)
                console.log(response.data);
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
            {array}
        </div>
    )
}