import styled from 'styled-components'

export const Content = styled.div`
    background-color: var(--primary-elements-background-color);
    padding: 20px;
    width: 100%;
    height: 95%;

    > div{

        :nth-child(1){
            display: flex;
            justify-content: flex-end;
            margin: 0 0 25px 0;

            > button{
                cursor: pointer;
                border: none;
                margin: 0 10px;
                padding: 10px;
                border-radius: 10px;
                color: var(--default-black);
                box-shadow: 1px 1.5px 1px 2px var(--default-black);
                font-weight: bold;
                
                :active{
                    box-shadow: none;
                }
                
                :nth-child(1){
                    color: var(--default-white);
                    background-color: rgba(0, 19, 67, 0.6);

                    :hover{
                        background-color: rgba(0, 19, 67, 0.3);
                    }
                }

                :nth-child(2){
                    background-color: rgba(255, 245, 0, 0.9);

                    :hover{
                        background-color: rgba(255, 245, 0, 0.7);
                    }
                }

                :nth-child(3){
                    background-color: rgba(255, 0, 0, 0.9);

                    :hover{
                        background-color: rgba(255, 0, 0, 0.7);
                    }
                }
            }
        }
    }

    @media(max-width: 340px){
        padding: 20px 10px;
    }
`