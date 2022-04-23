import styled from 'styled-components'

export const Products = styled.div`
    flex-grow: 1;
    display: grid;
    grid-template-columns: repeat(4, 250px);
    justify-content: center;
    justify-items: center;
    gap: 10px 25px;

    @media(max-width: 1400px){
        gap: 10px 0;
        margin: 10px 0 0 0;
        justify-content: space-evenly;
    }

    @media(max-width: 1100px){
        grid-template-columns: repeat(3, 250px);
    }

    @media(max-width: 860px){
        grid-template-columns: repeat(2, 250px);
    }

    @media(max-width: 600px){
        grid-template-columns: repeat(1, 300px);
    }
`