import styled from "styled-components"; 

export const FilterByValue = styled.aside`
    display: flex;
    flex-direction: column;
    background-color: var(--elements-background-color);
    padding: 10px;
    height: 100px;
    border-radius: 10px;
    width: 300px;

    > div{
    
        :nth-child(1){
            display: flex;
            align-items: center;

            > h2{
                font-size: 1.8rem;
                text-align: center;
                flex-grow: 1;
                padding: 0 8px 0 0;
            }

            > span{
                font-size: 2.4rem;
                padding:5px;
                cursor: pointer;
                border-radius: 10px;

                :hover{
                    background-color: rgba(0,0,0,0.2)
                }
            }
        }

        :nth-child(2){
            align-self: center;
            margin: 8px 0 0 0;

            > input{
                font-size: 1.5rem;
                outline: none;
                border: none;
                margin: 0 5px;
                padding: 0 0 0 5px;
                height: 25px;
                width: 80px;
                border-radius: 5px;

                ::-webkit-inner-spin-button{ 
                    all: unset; 
                }
            }

            > button{
                font-size: 1.4rem;
                padding: 10px 15px;
                margin: 0 0 0 5px;
                background-color: rgba(0, 255, 56);
                border: none;
                border-radius: 10px;
                cursor: pointer;
                box-shadow: 2px 2px 2px 0 var(--default-black);

                :active{
                    box-shadow: none;
                }

                :hover{
                    background-color: rgba(0, 255, 56, 0.9);
                }
            }
        }
    }

    @media(max-width: 1400px){
        align-self: center;
    }
`