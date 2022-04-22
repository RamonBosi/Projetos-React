import styled from 'styled-components'

export const Products = styled.div`
    flex-grow: 1;
    display: grid;
    grid-template-columns: repeat(4, 250px);
    justify-content: center;
    justify-items: center;
    gap: 10px 25px;
    
    @media(max-width: 1450px){
        margin: 15px 0 0 0;
    }

    @media(max-width: 1110px){
        grid-template-columns: repeat(3, 250px);
    }

    @media(max-width: 840px){
        grid-template-columns: repeat(2,250px);
    }

    @media(max-width: 600px){
        grid-template-columns: repeat(1,250px);
    }
`