import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

 :root {

    --white: #FFFFFF;

    --black1: #404040;
    --black2: #8c8c8c;
    --black3: #b9b9b9;

    --red: #FF1510;
    --pink: #FDECEC;
    --green: #E7F6E7;

  }
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: 'Work Sans', sans-serif;

  }
  html,body, #root{
    max-height:100vh;
    max-width:100vw;
    background:var(--white);
  }
  *,button,input{
    border:0;
    background:none;
    margin:0;
  }
  
`;
