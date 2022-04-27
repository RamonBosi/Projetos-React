import styled from "styled-components"

export const Product = styled.div`
    background-color: var(--elements-background-color);
    color: var(--default-white);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px;
    width: 240px;
    height: 340px;
    cursor: pointer;
    border-radius: 10px;

    :hover{
        transform: scale(102%);
    }

    > div{

        :nth-child(1){
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            
            > img{
                border-radius: 10px;
                width: 100%;
                background-color: rgba(74, 68, 68);
            }
        }

        :nth-child(2){

            > p{
                font-size: 2rem;
                margin: 7px 0;
            }
        }
    }
`