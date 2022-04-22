import styled from 'styled-components'

const gridAreaNames = {
    Mark: 'Mark',
    Address: 'Address',
    Search: 'Search',
    AccountInformation: 'AccountInformation'
}

export const Menu = styled.header`
    background-color: var(--elements-background-color);
    padding: 15px;
    border-bottom: 5px solid var(--default-black);

    @media(max-width: 1310px){
        padding: 8px 8px 8px 11px;
    }
`

export const MenuContent = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;

    > span{
        cursor: pointer;
        display: none;
        color: var(--default-white);
        font-size: 3.8rem;
    }
    
    @media(max-width: 1310px){
        height: 220px;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(3, 80px);
        grid-template-areas: ${() => {

            const {Mark, Address, Search, AccountInformation} = gridAreaNames

            return `
                ". ${Mark} ${Mark} . "
                "${Search} ${Search} ${AccountInformation} ${AccountInformation}"
                "${Address} ${Address} ${Address} ."
            ` 
        }};

        > span{
            display: block;
            justify-self: center;
            padding: 0 5px 0 0;
        }
    }

    @media(max-width: 900px){
        grid-template-areas: ${() => {

        const {Mark, Address, Search, AccountInformation} = gridAreaNames

        return `
            ". ${Mark} ${Mark} ${AccountInformation} "
            "${Search} ${Search} ${Search} ${Search}"
            "${Address} ${Address} ${Address} ."
        ` 
        }};
    }
`

export const Mark = styled.div`
    > h2{
        font-family: 'Courgette', Arial, Helvetica, sans-serif;
        font-size: 2.3rem;
        color: var(--brand-color);
    }

    @media(max-width: 1310px){
        grid-area: ${gridAreaNames.Mark};
        justify-self: center;

        > h2{
            font-size: 2.6rem;
        }
    }

    @media(max-width: 353px){

        > h2{
            font-size: 2.2rem;
        }
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

    @media(max-width: 1310px){
        grid-area: ${gridAreaNames.Address};
        justify-self: flex-start;
        align-self: flex-start;
    }
`

export const Search = styled.div`
    display:flex;
    height: 40px;
    width: 95%;
    max-width: 650px;
    
    > input{
        width: 100%;
        font-size: 2rem;
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

    @media(max-width: 1310px){
        grid-area: ${gridAreaNames.Search};
        justify-self: center;
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

   @media(max-width: 1310px){
        grid-area: ${gridAreaNames.AccountInformation};
        justify-content: space-evenly;

        > a{
            margin: 0 5px;

        }
    }

    @media(max-width: 900px){
        > a{

            :nth-of-type(2){
                display: none;
            }
        }
    }
`