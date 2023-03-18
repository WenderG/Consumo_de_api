import { Container, MovieList, Movie } from "./styles"
import { APIKey } from '../../config/Key'
import { useState, useEffect } from "react"

function Home() {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        //consumir a API

    fetch(`https://api.themoviedb.org/3/movie/{movie_id}?api_key=${APIKey}&language=en-US`)
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
                            <a href="www.google.com"><img src="https://br.web.img3.acsta.net/pictures/bzp/01/29007.jpg" alt="Banner Spider Man"/></a>
                            <span>{movie.title}</span>
                        </Movie>
                    )
                })}

            </MovieList>
        </Container>
    )  
}

export default Home