import styled from 'styled-components'

const gridAreaNames = {
    Mark: 'Mark',
    Address: 'Address',
    Search: 'Search',
    AccountInformation: 'AccountInformation',
    gridTemplateArea(){
        return `
        ". ${this.Mark} ${this.AccountInformation} ${this.AccountInformation}"
        "${this.Search} ${this.Search} ${this.Search} ${this.Search}"
        "${this.Address} ${this.Address} . ."
        ` 
    }
}

export const Menu = styled.header`
    background-color: var(--elements-background-color);
    padding: 15px;
    border-bottom: 5px solid var(--default-black);
`

export const MenuContent = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media(max-width: 400px){
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(3, 1fr);
        grid-template-areas: ${gridAreaNames.gridTemplateArea()};
    }
`

export const Mark = styled.div`
    > h2{
        font-family: 'Courgette', Arial, Helvetica, sans-serif;
        font-size: 2.3rem;
        color: var(--brand-color);
    }

    @media(max-width: 400px){
        grid-area: ${gridAreaNames.Mark};
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

    @media(max-width: 400px){
        grid-area: ${gridAreaNames.Address};
    }
`

export const Search = styled.div`
    display:flex;
    height: 40px;
    
    > input{
        font-size: 2rem;
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
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0 3.5px 1px 0;
            background-color: rgba(255, 199, 0);
            border-radius: 0 20px 20px 0;

            > span{
                font-size: 3.6rem;
                color: var(--default-white);
            }
        }
    }

    @media(max-width: 400px){
        grid-area: ${gridAreaNames.Search};
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
           padding: 10px;

           > span{
               font-size: 3rem;
            }
       }
   }

   @media(max-width: 400px){
       grid-area: ${gridAreaNames.AccountInformation};
        
        > a:nth-of-type(2){
            display: none;
        }
    }
`