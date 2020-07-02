import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Ubuntu';
    src: require('https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap');
  }

  body {
    font-family: 'Ubuntu', sans-serif;
  }
`;

export default GlobalStyle;
