import styled from 'styled-components'

export const Products = styled.div`
    padding: 0 0 0 130px;
    flex-grow: 1;
    display: grid;
    grid-template-columns: repeat(4,170px);
    grid-template-rows: repeat(5,165px);
    gap: 20px 35px;
`

export const Product = styled.div`
    padding: 10px;
    background-color: #533E85;
    color: #fff;

    > div{

        :nth-of-type(1){
            display:flex;
            justify-content: center;
            align-items: center;
            width: 150px;
            height: 80px;
            background-color: #4A4444;
            margin: 0 0 10px 0;
        }

        :nth-of-type(2){

            > p{
                margin: 8px 0;
            }
        }
    }
`