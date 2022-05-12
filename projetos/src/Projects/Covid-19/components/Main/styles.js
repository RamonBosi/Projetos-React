import styled from 'styled-components'

export const MainContext = styled.div`

    > h1{
        text-align: center;
        color: rgba(0, 40, 255, 1);
        margin: 25px 0 0 0;
    }

    > article{
        padding: 35px;
        margin: 25px 0;

        h2{
            color: var(--color-of-titles);
            text-align: center;
        }

        p{
            text-align: justify;
            color: var(--default-black);
            line-height: 23px;
        }
    }
`