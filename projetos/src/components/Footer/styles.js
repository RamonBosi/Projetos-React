import styled from 'styled-components'

export const Footer = styled.footer`
    background-color: #533E85;
    padding: 20px 10px 10px 10px;
    margin: 30px 0 0 0;
    display: flex;
    flex-direction: column;

    > div > h2{
        text-align: center;
        padding: 20px;
    }
`

export const  Options = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 0 0 20px 0;

    > div{

        > h2{
            color: #fff;
        }

        > ul{
            list-style-type: none;

            > li{
                margin: 15px 0;

                > a{

                    :hover{
                        text-decoration:underline;
                    }
                }
            }
        }
    }
`