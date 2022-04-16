import styled from 'styled-components'

export const Menu = styled.header`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: var(--elements-background-color);
    height: 100px;
    padding: 15px;
    border-bottom: 5px solid var(--default-black);
`

export const Mark = styled.div`
    > h2{
        color: var(--brand-color);
    }
`

export const Address = styled.a`
    display: flex;
    flex-direction: column;
    padding: 8px;
    border-radius: 10px;
    border: 2px solid rgba(255, 255, 255, 0);

    :hover{
        border: 2px solid rgba(255, 255, 255, 100);
    }
`

export const Search = styled.div`
    display:flex;
    height: 40px;
    
    > input{
        font-size: 20px;
        width: 400px;
        outline: none;
        border: none;
        padding: 0 0 0 3px;
    }
    
    > div{
        width: 45px;
    
        :nth-of-type(1){
            background-color: var(--default-black);
            border-radius: 20px 0 0 20px;
        }

        :nth-of-type(2){
            background-color: rgba(255, 199, 0);
            border-radius: 0 20px 20px 0;
        }
    }
`

export const AccountInformation = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;

   > a{
        border-radius: 10px;
        margin: 0 15px;
        padding: 8px;
        border: 2px solid rgba(255, 255, 255, 0);

       :hover{
            border: 2px solid rgba(255, 255, 255, 100);
        }

       :nth-of-type(3){
            padding: 15px;
       }
   }
`