import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { APIKey } from '../../config/Key'
import { Container } from './styles'

function Details() {

    const { id } = useParams()

    const [ movie, setMovie ] = useState({})
    const image_path = 'https://image.tmdb.org/t/p/w500'

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${APIKey}&language=en-US`)
        .then(response => response.json())
        .then(data => {

            const {title, poster_path, overview, release_date} = data 

            const movie = {
                id,
                title,
                sinopse: overview,
                image: `${image_path}${poster_path}`,
                releaseDate: release_date,
            }

            setMovie(movie)
        })

    }, [id])

    return (
        <Container>
            <div className='movie'>
                <div className='display'>
                    <div className='imagem'>
                        <img src={movie.image} alt={movie.sinopse}/>
                    </div>
                    <div className='datails'>
                        <h1>{movie.title}</h1>
                        <span>Sinopse: {movie.sinopse}</span>
                        <span className='release-date'>Data de lançamento: {movie.releaseDate}</span>
                        <div className='botao'><Link to="/"><button>Voltar</button></Link></div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Details