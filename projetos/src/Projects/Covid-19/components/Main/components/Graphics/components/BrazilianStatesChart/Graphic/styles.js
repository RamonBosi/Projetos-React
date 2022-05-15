import styled from 'styled-components'

export const Content = styled.div`
    height: 600px;
    margin: 15px 0 0 0;

    > div{

        :nth-child(1){
            width: 50%;
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

        :nth-child(2){
            margin: 15px 0 0 0;
            height: 80%;
        }
    }
`