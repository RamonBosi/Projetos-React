import styled from "styled-components"; 

export const FilterByValue = styled.aside`
    display: flex;
    flex-direction: column;
    background-color: var(--elements-background-color);
    padding: 10px;
    height: 90px;
    border-radius: 10px;

    > h2{
        font-size: 1.8rem;
        margin: 0 0 10px 0;
        text-align: center;
    }

    > div{

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
`