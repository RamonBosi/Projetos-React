import styled from 'styled-components'

export const Content = styled.section`
    height: 950px;

    > header{
        margin: 0 0 15px 0;
    }

    > section{
        height: 80%;

        > p{
            margin: 20px 0;
        }
    }

    @media(max-width:360px){

        > section{

            > p{
                width: 90%;
                margin: 20px 15px;
            }
        }
    }
`