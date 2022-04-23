import styled from 'styled-components'

export const Products = styled.div`
    flex-grow: 1;
    display: grid;
    grid-template-columns: repeat(4, 250px);
    justify-content: center;
    justify-items: center;
    gap: 10px 25px;

    @media(max-width: 1400px){
        grid-template-columns: repeat(3, 250px)
    }

    @media(max-width: 1130px){
        grid-template-columns: repeat(2, 250px)
    }

    @media(max-width: 860px){
        margin: 10px 0 0 0;
    }

    @media(max-width: 590px){
        grid-template-columns: repeat(1, 250px);
    }
`