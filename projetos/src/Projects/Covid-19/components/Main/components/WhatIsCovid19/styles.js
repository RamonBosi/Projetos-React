import styled from 'styled-components'

export const Container = styled.article`
    background-color: var(--background-color-of-elements);
    display: flex;
    flex-direction: column;
    padding: 40px 20px;

    > header{
        margin: 0 0 15px 0;

        > h2{
            color: var(--color-of-titles);
            text-align: center;
        }
    }

    > section{
        max-width: 1160px;
        align-self: center;
        
        > p{
            line-height: 25px;
            text-align: justify;
            color: var(--default-black);
        }
    }
`