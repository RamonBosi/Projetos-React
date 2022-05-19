import styled from 'styled-components'

export const Menu = styled.header`
    background-image: linear-gradient(90deg, rgba(6, 16, 104, 1) 30%, rgba(16, 105, 187, 1));
    padding: 15px 25px 0 25px;
    height: 85px;
    width: 100%;

    @media(max-width: 770px){
        height: auto;
        padding: 10px 10px 0 10px;
    }
`

export const MenuContent = styled.div`
    display: flex;
    justify-content: space-between;
    height: 100%;

    > div{

        :nth-child(1){

            div{
                display: grid;
                grid-template-columns: 40px;
                justify-items: center;
                align-items: center;
                color: var(--default-white);

                > span{
                    grid-area: 1 / 1 / 2 / 2;
                    
                    :nth-child(1){
                        z-index: 10;
                        width: 40px;
                        height: 40px;
                    }
    
                    &.material-icons{
                        font-size: 3.6rem;
                    }  
                }
            }

            > span{
                display: flex;
                color: var(--default-white);
                padding: 0 0 10px 0;
                align-items: center;
        
                > h2{
                    font-size: 2.4rem;
                }

                > div{
                    padding: 16px 0 0 0;
                }
            }

            > div{
                display: none;
            }
        }

        :nth-child(3){

            &.hide, &.show{
                display: none;
            }
        }
    }

    > nav{
        display: flex;
        align-items: flex-end;

        > a{
            color: var(--default-white);
            padding: 15px;
            border-bottom: 3px solid rgba(255,255,255,0);

            :hover{
                border-radius: 5px 5px 0 0;
                background-color: rgba(0, 0 ,0, .3);
                border-bottom: 3px solid var(--default-white);
            }
        }
    }

    @media(max-width: 770px){
        flex-direction: column;
        justify-content: center;
        align-items: center;

        > div{

            :nth-child(1){
                width: 100%;
                display: grid;
                grid-template-columns: 1fr 2fr 1fr;
                justify-items: center;
                align-items: center;

                > span{
                    grid-area: 1 / 2 / 2 / 3;
                }

                > div{
                    display: grid;
                    grid-area: 1 / 3 / 2 / 4;
                    cursor: pointer;
                    margin: 0 0 0 15px;
                }
            }

            :nth-child(3){
                background-color: rgba(0, 0, 0, 0.5);
                width: 100vw;
                
                &.show{
                    display: block;
                }

                &.hide{
                    display: none;
                }

                > nav{
                    display: flex;
                    flex-direction: column;
                    padding: 10px;

                    > a{
                        color: var(--default-white);
                        padding: 15px;
                        border-radius: 10px;

                        :active{
                            background-color: rgba(50, 97, 168, 0.4)
                        }
                    }
                }
            }
        }

        > nav{
            display: none;
        }
    }
`