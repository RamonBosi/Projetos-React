import styled from "styled-components"

export const Product = styled.div`
    background-color: var(--elements-background-color);
    color: var(--default-white);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    width: 240px;
    height: 370px;
    cursor: pointer;
    border-radius: 10px;

    > div{

        :nth-of-type(1){
            display:flex;
            justify-content: center;
            align-items: center;
            width: 220px;
            height: 300px;
            background-color: rgba(74, 68, 68);
            margin: 0 0 10px 0;
        }

        :nth-of-type(2){
            align-self: flex-start;

            > p{
                font-size: 2rem;
                margin: 10px 0;
            }
        }
    }
`