import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset}

  html {
    box-sizing: border-box;
  }

  body {
    padding: 50px;
    font-family: 'Noto Sans KR';
    min-width: 500px;
  }

  button {
    :hover {
      cursor: pointer;
      background-color: lightgray;
    }

    :active {
      border: 1px solid gray;
    }
  }

  a {
    color: black;
    text-decoration: none;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }
`;

export default GlobalStyles;
