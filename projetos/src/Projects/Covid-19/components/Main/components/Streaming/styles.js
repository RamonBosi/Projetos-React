import styled from 'styled-components'

export const Container = styled.article`
    background-color: var(--background-color-of-elements);
    display: flex;
    justify-content: center;

    h2{
        color: var(--color-of-titles);
        text-align: center;
    }

    p{
        line-height: 22px;
        text-align: justify;
    }

    > div{
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        max-width: 1350px;

        > header{
            margin: 0 0 20px 0;
        }

        > aside{
            margin: 30px 0 0 0;
            display: flex;
            justify-content: space-between;

            > section{
                width: 30%;

                ul{
                    margin: 10px 0 0 0;
                    padding: 0 0 0 20px;
                }

                h2{
                    font-size: 1.8rem;
                }

                > header{
                    margin: 0 0 15px 0;
                }
            }
        }
    }
`