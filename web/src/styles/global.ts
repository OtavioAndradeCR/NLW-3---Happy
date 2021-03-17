import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
}

  body {
    background: #ebf2f5;
    color: #fff;
    -webkit-font-smoothing: antialiased;
}

  body, input, button{
    font-family: 'Nunito', sans-serif;
    font-weight: 600;
    font-size: 18px;
  }

  button {
    cursor: pointer;
  }
`;
