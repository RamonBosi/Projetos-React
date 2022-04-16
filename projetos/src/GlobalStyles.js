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

    a{
        color: var(--default-white);
        text-decoration: none;
    }

    body{
        background-color: var(--page-background-color);
    }
`