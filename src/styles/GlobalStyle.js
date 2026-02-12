import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Press Start 2P", monospace;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    margin: 0;
    display: block;
    background-image: linear-gradient(#ddd 1px, transparent 1px), linear-gradient(90deg, #eee 1px, transparent 1px);
    background-size: 40px 40px;
  }

  img {
    max-width: 100%;
    display: block;
  }

  button {
    font-family: inherit;
  }
`;

export default GlobalStyle;
