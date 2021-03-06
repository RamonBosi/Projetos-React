import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html{
        font-size: 62.5%;
    }

    :root{
        --page-background-color: rgba(239, 235, 225, 1);
        --color-of-titles: rgba(255, 0, 0, 1);
        --primary-elements-background-color: rgba(43, 113, 177, 1);
        --secondary-elements-background-color: rgba(50, 97, 168, 0.4);
        --default-white: rgba(255, 255, 255);
        --default-black: rgba(0, 0, 0);
    }

    body{
        background-color: var(--page-background-color);
        font-family: Arial, Helvetica, sans-serif;
        font-size: 1.6rem;
    }

    a{
        text-decoration: none;
    }

    h2{
        font-size: 2.4rem;
    }
`