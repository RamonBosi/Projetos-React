import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

    *{
        padding:0;
        margin: 0;
        box-sizing: border-box
    }
    
    :root{
        --elements-background-color: rgba(83, 62, 133);
        --page-background-color: rgba(243, 233, 221);
        --brand-color: rgba(255, 199, 0);

        --default-white: rgba(255, 255, 255);
        --default-black: rgba(0, 0, 0);
    }
    
    html{
        font-size: 62.5%;
    }

    body{
        font-family: Arial, Helvetica, sans-serif;
        background-color: var(--page-background-color);
        font-size: 1.6rem;
    }

    a{
        color: var(--default-white);
        text-decoration: none;
    }

    @media(max-width: 400px){
        html{
            font-size: 55%;
        }
    }
`