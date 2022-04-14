import styled from "styled-components"; 

export const FilterByValue = styled.aside`
    display: flex;
    flex-direction: column;
    background-color: #533E85;
    padding: 10px;
    
    > h2{
        font-size: 18px;
        color: #fff;
        margin: 0 0 10px 0;
        text-align: center;
    }

    > div{

        > input{
            font-size: 15px;
            outline: none;
            border: none;
            margin: 0 5px;
            padding: 0 0 0 5px;
            height: 25px;
            width: 80px;

            ::-webkit-inner-spin-button{ 
                all: unset; 
            }
        }

        > button{
            padding: 10px 15px;
            margin: 0 0 0 5px;
            background-color: rgba(0, 255, 56);
            border: none;
            border-radius: 10px;
            cursor: pointer;
            box-shadow: 2px 2px 2px 0 black;

            :active{
                box-shadow: none;
            }

            :hover{
                background-color: rgba(0, 255, 56, 0.9);
            }
        }
    }
`