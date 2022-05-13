import styled from 'styled-components'

export const Content = styled.section`

    > header{
        margin: 0 0 10px 0;
    }

    > section{

        > div{
            background-image: url('./Icon/selectIcon.png');
            background-repeat: no-repeat;
            background-position: center center;
            width: 30%;

            > select{
                background-color: transparent;
                
                appearance: none;
                -webkit-appearance: none;
                -moz-appearance: none;

                color: var(--default-white);
                font-size: 2rem;
                margin: 10px 0 0 0;
                padding: 15px;
                border-radius: 10px;
            }
        }
    }
`