import styled from "styled-components"

export const Product = styled.div`
    background-color: var(--elements-background-color);
    color: var(--default-white);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px;
    width: 240px;
    height: 370px;
    cursor: pointer;
    border-radius: 10px;

    > div{

        :nth-child(1){
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            
            > img{
                width: 100%;
                background-color: rgba(74, 68, 68);
                margin: 0 0 10px 0;
            }
        }

        :nth-child(2){
            align-self: flex-start;

            > p{
                font-size: 2rem;
                margin: 10px 0;
            }
        }
    }

    @media(max-width: 600px){
        width: 290px;
    }
`