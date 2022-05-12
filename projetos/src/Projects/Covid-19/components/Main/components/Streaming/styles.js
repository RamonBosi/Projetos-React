import styled from 'styled-components'

export const Container = styled.article`

    > div{
        flex-grow: 1;
        display: flex;
        flex-direction: column;

        > aside{
            margin: 30px 0 0 0;
            display: flex;
            justify-content: space-between;

            > section{
                width: 30%;

                ul{
                    margin: 10px 0 0 0;
                    padding: 0 0 0 20px;

                    > li{
                        margin: 10px 0;
                    }
                }

                > header{
                    margin: 0 0 15px 0;

                    > h2{
                        font-size: 1.8rem;
                    }
                }
            }
        }
    }
`