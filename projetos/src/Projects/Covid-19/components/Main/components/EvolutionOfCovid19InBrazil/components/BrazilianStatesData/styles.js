import styled from 'styled-components'

export const Content = styled.section`

    > header{
        margin: 0 0 10px 0;
    }

    > section{

        > p{
            margin: 5px 0;
        }
    }

    @media(max-width: 360px){

        > section{

            > p{
                margin: 5px 15px;
            }
        }
    }
`