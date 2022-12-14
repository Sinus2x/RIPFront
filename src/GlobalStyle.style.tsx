import { COLORS } from "constants/colors";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: 'Rubik Vinyl','Unbounded',  cursive, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        box-sizing: border-box;
        overflow-x: hidden;
        overflow-y: auto;
        color: #006f9e;
    }

    code {
        font-family:'Rubik Vinyl','Unbounded',  cursive, monospace, sans-serif;
    }

    h1,
    h2,
    h3,
    h4,
    span,
    a,
    p {
        margin: 0;
        padding: 0;
        color: ${COLORS.TextColor2};
        text-decoration: none

    }

    * {
        box-sizing: border-box;
        font-family: 'Unbounded',  cursive, sans-serif;
        color: ${COLORS.TextColor2};
    }

    input,
    textarea,
    select {
        -webkit-appearance: none;
        outline:none;
    }

`;
