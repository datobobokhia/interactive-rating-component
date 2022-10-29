import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    html,body {
        background-color: #131518;
        overflow: hidden;
    }
    body {
        display: flex;
        justify-content: center;
        height: 100vh;
        align-items: center;
    }

`;
