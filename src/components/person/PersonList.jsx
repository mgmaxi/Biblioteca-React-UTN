import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../styles/main.css'
import '../styles/PersonList.css';
import CardPerson from './CardPerson';
import Nav from '../Nav';
import Footer from '../Footer'

export default function PersonList() {
    
    const [personlist, setPersonList] = useState([]);

    useEffect(() => {
        try{
            const fetchData = async () => {
                const url = 'http://localhost:3000/persona'; 
                const response = await axios.get(url);
                if (response.status === 200) {
                    setPersonList(response.data)
            }}
            fetchData()
        } catch (error) {
            console.log(error)
        }
    }, [])

    const array = personlist.map((persona)=>{
        return (
            <div>
                <CardPerson key={persona.id} persona={persona} />
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