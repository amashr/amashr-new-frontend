import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%; /* 10px/16px = 62.5% -> 1rem = 10px */
  }

  body {
    font-family: 'Rubik', sans-serif;
    color: #a0a6ad;
    font-size: 1.4rem;
    font-weight: 400;
    background: ${props => props.theme.white};
    position: relative;
    padding-top: 8rem;
  }

  p {
    font-size: 1.4rem;
    color: #5e629c;
    line-height: 2.6rem;
    margin-bottom: 0; 
  }

  a:hover, a:focus {
    color: #000;
  }

  a {
    color: #000;
    transition: all 0.3s ease-in-out;
  }

  h1, h2, h3, h4, h5 {
    font-family: 'Poppins', sans-serif;
    font-size: 4rem;
    font-weight: 400;
    color: #151948;
  }

  ul {
    list-style: none; 
  }

  a:hover,
  a:focus {
    text-decoration: none;
    outline: none; 
  }

  a:not([href]):not([tabindex]) {
    color: ${props => props.theme.white}; 
  }

  a:not([href]):not([tabindex]):focus, a:not([href]):not([tabindex]):hover {
    color: ${props => props.theme.white}; 
  }
`;

export default GlobalStyle;
