import { Container, MovieList, Movie } from "./styles"
import { APIKey } from '../../config/Key'
import { useState, useEffect } from "react"

function Home() {

    const [movies, setMovies] = useState([])
    const image_path = 'https://image.tmdb.org/t/p/w500'

    useEffect(() => {
        //consumir a API

    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}&language=en-US`)
        .then(response => response.json())
        .then(data => setMovies(data.results))
    }, [])

    return(
        <Container>
            <h1>Filmes</h1>
            <MovieList>

                {movies.map(movie => {
                    return (
                        <Movie key={movie.id}>
                            <a href="#"><img src={`${image_path}${movie.poster_path}`} alt={movie.title}/></a>
                            <span>{movie.title}</span>
                        </Movie>
                    )
                })}

            </MovieList>
        </Container>
    )  
}

export default Home