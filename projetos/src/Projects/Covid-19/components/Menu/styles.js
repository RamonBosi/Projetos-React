import styled from 'styled-components'

export const Menu = styled.header`
    background-image: linear-gradient(
            90deg, rgba(6, 16, 104, 1) 30%, rgba(16, 105, 187, 1)
        );
    padding: 15px 25px 0 25px;
    height: 85px;
`

export const MenuContent = styled.div`
    display: flex;
    justify-content: space-between;
    height: 100%;

    > div{
        display: flex;
        color: var(--default-white);
        padding: 0 0 10px 0;
        align-items: center;

        > h2{
            font-size: 2.4rem;
        }

        > div{
            display: grid;
            grid-template-columns: 40px;
            justify-content: center;
            align-items: center;

            > span{
                grid-area: 1 / 1 / 2 / 2;
                width: 40px;
                height: 40px;
                
                :nth-child(1){
                    z-index: 10;

                    :hover{
                        background-color: orange;
                    }
                }

                &.material-icons{
                    font-size: 3.6rem;
        
                    :hover{
                        background-color: red;
                    }
                }  
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
                border-bottom: 3px solid rgba(255,255,255,1);
            }
        }
    }
`