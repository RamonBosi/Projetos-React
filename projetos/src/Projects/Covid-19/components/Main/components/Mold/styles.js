import styled from 'styled-components'

export const Container = styled.article`
    display: flex;
    justify-content: center;
    background-color: var(--secondary-elements-background-color);

    > div{
        max-width: 1350px;

        > header{
            margin: 0 0 17px 0;
        }

        > section{

            > ul, > ol{
                margin: 10px 0;
                padding: 0 0 0 35px;

                > li{
                    margin: 10px 0;
                }
            }
        }
    }
`