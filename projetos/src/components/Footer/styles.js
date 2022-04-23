import styled from 'styled-components'

export const Footer = styled.footer`
    background-color: var(--elements-background-color);
    padding: 20px 10px 10px 10px;
    margin: 30px 0 0 0;
    border-top: 5px solid var(--default-black);
`

export const FooterContent = styled.div`
    display: flex;
    flex-direction: column;
    
    > div > h2{
        text-align: center;
        padding: 20px;
    }

    @media(max-width: 1290px){
       padding: 20px;
    }
`

export const  Options = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 0 0 20px 0;

    > div{

        > h2{
            color: var(--default-white);
        }

        > nav > ul{
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

    @media(max-width: 1290px){
        display: grid;
        grid-template-columns: repeat(2,400px);
        justify-content: space-evenly;
        justify-items: flex-start;
        gap: 40px 0;
    }

    @media(max-width: 850px){
        grid-template-columns: repeat(1, 80%);
    }
`