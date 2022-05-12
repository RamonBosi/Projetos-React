import styled from 'styled-components'

export const MainContext = styled.div`

    > h1{
        text-align: center;
        color: rgba(0, 40, 255, 1);
        margin: 25px 0 0 0;
    }

    > article{
        display: flex;
        justify-content: center;
        padding: 35px;
        margin: 25px 0;
        background-color: var(--secondary-elements-background-color);

        h2{
            color: var(--color-of-titles);
            text-align: center;
        }

        p{
            text-align: justify;
            color: var(--default-black);
            line-height: 23px;
        }

        > div{
            max-width: 1350px;

            > header{
                margin: 0 0 17px 0;
            }
        }
    }
`