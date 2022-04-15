import styled from 'styled-components'

export const Products = styled.div`
    flex-grow: 1;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-template-rows: repeat(5,1fr);
    gap: 10px 0;

    > div{
        justify-self: center;
    }
`