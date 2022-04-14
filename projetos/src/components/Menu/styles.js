import styled from 'styled-components'

const edgeThickness = 2

export const Menu = styled.header`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #533E85;
    height: 85px;
`

export const Logo = styled.div`
    > h2{
        color: orange;
    }
`

export const Endereco = styled.a`
    display: flex;
    flex-direction: column;
    padding: 8px;
    border-radius: 10px;
    border: ${edgeThickness}px solid rgba(255, 255, 255, 0);

    :hover{
        border: ${edgeThickness}px solid rgba(255, 255, 255, 100);
    }
`

export const Pesquisar = styled.div`
    display:flex;
    height: 20px;
    
    > input{
        width: 400px;
        outline: none;
        border: none;
        padding: 0 0 0 2px;
    }
    
    > div{
        width: 30px;
    }

    > div:nth-of-type(1){
        background-color: black;
        border-radius: 20px 0 0 20px;
    }

    > div:nth-of-type(2){
        background-color: orange;
        border-radius: 0 20px 20px 0;
    }
`

export const InformacaoDaConta = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style-type: none;

   > a{
        border-radius: 10px;
        margin: 0 15px;
        padding: 8px;
        border: ${edgeThickness}px solid rgba(255, 255, 255, 0);

       :hover{
            border: ${edgeThickness}px solid rgba(255, 255, 255, 100);
        }

       :nth-of-type(3){
            padding: 15px;
       }
   }
`