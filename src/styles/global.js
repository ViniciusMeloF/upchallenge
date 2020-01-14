import { createGlobalStyle } from "styled-components";
import img from "../assets/images/pista.gif";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    background-color: #616161;
    /*background-image: url(${img});
    background-position:center; 
    background-repeat:no-repeat; */
    font-family: 'Montserrat', sans-serif;
    width: 100%;
    height: 100vh;
  }
`;

export default GlobalStyle;
