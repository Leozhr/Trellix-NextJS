import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background: ${theme.colors.bg};
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  img {
    max-width: 100%;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  .container {
    max-width: 1440px;
    margin: 0 auto;
  }
`
