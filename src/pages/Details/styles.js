import styled from 'styled-components'

export const Container =  styled.div`

    h1 {
        margin: 3rem 0;
    }

    .movie {
        display: flex;
        align-items: center;
        justify-content: justify;
    }

    img {
        width: 300px;
        border-radius: 15px;
    }

    .datails {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-left: 1rem;
        max-width: 50%;
    }

    button  {
        background-color: red;
        border: none;
        border-radius: 3px;
        color: white;
        font-size: 100%;
        margin-top: 1rem;
        padding: 10px 1rem 10px 1rem;
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

        .datails { 
            margin-left: 3rem;
        }
    
    }
`