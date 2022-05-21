import styled from 'styled-components'

export const Content = styled.div`
    height: 600px;
    margin: 15px 0 0 0;

    > div{
    
        > h2{
            color: var(--default-white);
            text-decoration: underline;
        }

        :nth-child(1){
            width: 70%;
            display: grid;
            grid-template-columns: 1fr;
            background-color: var(--primary-elements-background-color);
            border-radius: 10px;

            > span.material-icons, > select{
                grid-area: 1 / 1 / 2 / 2;
            }

            > span.material-icons{
                font-size: 4.8rem;
                justify-self: flex-end;
                padding: 3px 2px 0 0;
                color: var(--default-white);
            }
            
            > select{    
                cursor: pointer;  
                border: 2px solid var(--default-black);
                z-index: 10;
                appearance: none;
                -webkit-appearance: none;
                -moz-appearance: none;
                color: var(--default-white);
                background-color: transparent;
                font-size: 2rem;
                padding: 15px;
                border-radius: 10px;
                outline: none;

                > option{
                    background-color: var(--primary-elements-background-color);
                }
            }
        } 
    }

    @media(max-width: 700px){

        > div{

            :nth-child(1){
                width: 100%;
            }
        }
    }
`

export const DataContent = styled.div`
    background-color: var(--primary-elements-background-color);
    margin: 15px 0 0 0;
    padding: 30px;
    height: 30%;

    > div{
        display: flex;
        justify-content: space-between;
        font-size: 3rem;
        margin: 20px 0 0 0;

        > div{
            padding: 25px 10px;
            flex-grow: 1;
            
            > p{
                text-align: center;    
                color: var(--default-white);

                > span{
                    font-weight: bold;
                }
            }

            :nth-child(1){
                background-color: rgba(0, 19, 67, 0.8);
            }

            :nth-child(2){
                background-color: rgba(189, 167, 6);
            }

            :nth-child(3){
                background-color: rgba(189, 13, 4);
            }
        }
    }
`