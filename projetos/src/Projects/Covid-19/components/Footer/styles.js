import styled from 'styled-components'

export const Footer = styled.footer`
    background-color: var(--primary-elements-background-color);
    padding: 40px;
    color: var(--default-white);

    a{
        font-weight: bold;
        color: rgba(255, 162, 0, 1);

        :hover{
            text-decoration: underline;
        }
    }

    > div{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin: 0 0 0 15px;

        > h2{
            margin: 5px 0;
        }

        > div{

            > p{
                margin: 10px 0;
            }
        }
    }
`