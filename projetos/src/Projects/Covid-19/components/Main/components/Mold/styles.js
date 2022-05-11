import styled from 'styled-components'

export const Container = styled.article`
    background-color: var(--background-color-of-elements);
    display: flex;
    justify-content: center;

    > div{
        max-width: 1350px;

        > header{
            margin: 0 0 15px 0;

            > h2{
                color: var(--color-of-titles);
                text-align: center;
            }
        }

        > section{
            
            > p{
                line-height: 25px;
                text-align: justify;
                color: var(--default-black);
            }
        }
    }
`