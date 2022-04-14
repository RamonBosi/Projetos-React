import styled from 'styled-components'

export const Menu = styled.header`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #533E85;
`

export const Logo = styled.div`
    > h2{
        color: orange;
    }
`

export const Pesquisar = styled.div`
    display:flex;
    height: 20px;
    
    > input{
        width: 200px;
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

export const InformacaoDaConta = styled.ul`
    display: flex;
    justify-content: space-around;
    list-style-type: none;
   
`