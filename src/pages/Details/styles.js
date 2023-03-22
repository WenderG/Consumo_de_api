import styled from 'styled-components'

export const Container =  styled.div`

    h1 {
        margin: 2rem 0 1rem 0;
    }

    .movie {
        align-items: center;
        display: flex;
        justify-content: justify;
    }

    .display {
        display: grid;
        grid-template-areas: "a",
                             "b";
        align-items: center;
    }

    .imagem {
        text-align: center;
    }

    img {
        border-radius: 15px;
        width: 300px;
    }

    .datails {
        margin-left: 1rem;
        text-align: justify
        max-width: 50%;
    }

    .botao {
        text-align: center;
    }

    button  {
        background-color: red;
        border: none;
        border-radius: 3px;
        color: white;
        font-size: 100%;
        margin-top: 1rem;
        padding: 10px 1rem 10px 1rem;
        text-aling: center;
        transition: 0.3s;
    }

    button:hover {
        background-color: #b10202;
    }

    span {
        line-height: 130%;
        margin-botton: 1rem;
    }

    .release-date {
        margin-top: 1rem;
    }

    @media screen and (min-width: 768px) {
        padding: 1.5rem 0 0 7rem;

        .display {
            display: flex;
        }

        .datails {
            align-items: flex-start;
            display: flex;
            flex-direction: column;
            margin-left: 3rem;
            max-width: 50%;
        }
    }
`