import { Container, MovieList, Movie } from "./styles"

function Home() {

    const movies = [
        {
            id: 1,
            title: 'Spider-Man',
            image_url: 'https://br.web.img3.acsta.net/pictures/bzp/01/29007.jpg'
        },

        {
            id: 2,
            title: 'The Batman',
            image_url: 'https://br.web.img3.acsta.net/pictures/bzp/01/29007.jpg'
        },

        {
            id: 3,
            title: 'Vingadores',
            image_url: 'https://br.web.img3.acsta.net/pictures/bzp/01/29007.jpg'
        },
    ]

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