import Input from '../input/Input.js';
import Cards from '../card/Card.js';
import Container from 'react-bootstrap/Container';
import './Display.css';
import { useState } from 'react';

function Display(){
    const [allMovies, setAllMovies] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);

    async function getAllMovies(){
        await fetch('https://ghibliapi.vercel.app/films')
        .then(response => {
            if (!response.ok) {
            throw new Error('Erro ao carregar os dados');
            }
            return response.json();
        })
        .then(data => {
            setAllMovies(data);
            setFilteredMovies(data); 
        })
        .catch(error => {
            console.error('Houve um erro:', error);
        });
    }

    function filterMovies(term){
        const filtered = allMovies.filter(movie => movie.title.toLowerCase().includes(term).toLowerCase());
        setFilteredMovies(filtered);
    }

    return (
    <Container className="container-display">
        <Input></Input>
        <Cards></Cards>
    </Container>
    );

}

export default Display;