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
`

export const  Options = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 0 0 20px 0;

    @media(max-width: 1290px){
        display: grid;
        grid-template-columns: repeat(2,400px);
        justify-content: space-evenly;
        justify-items: flex-start;
        gap: 40px 0;
    }

    @media(max-width: 830px){
        grid-template-columns: repeat(1, 100%);
        gap: 20px 0;
    }
`

export const Option = styled.div`

    > div {
        
        > span{
            display: none;
            font-size: 3.6rem;
            color: var(--default-white);
        }

        > h2{
            color: var(--default-white); 
        }
    }

    > nav{

        &.mostrarOcultar{
            display: block;
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

    @media(max-width: 830px){
        width: 100%;

        > div{
            display: grid;
            grid-template-columns: 1fr; 
            grid-template-rows: 70px;
            align-items: center;
            border-radius: 10px;

            :hover{
                background-color: rgba(0, 0, 0, 0.2);
            }

            > h2, > span{
                grid-area: 1 / 1 / 2 / 2;
            }

            > h2{
                justify-self: flex-start;
                padding: 0 0 0 10px;
            }

            > span{
                font-size: 4.8rem;
                display: block;
                cursor: pointer;
                width: 100%;
                z-index: 10;
                transform: rotateY(180deg);
                padding: 0 0 0 10px;
            }
        }

        > nav{
            padding: 0 0 0 10px;

            &.mostrarOcultar{
                display: none;
            }
        }
    }

    @media(max-width: 390px){
        > div > h2{
            font-size: 2rem;
        }
    }
`