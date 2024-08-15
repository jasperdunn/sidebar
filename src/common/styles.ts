import { createGlobalStyle, css } from 'styled-components';

const globalStyles = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
  }

  dt,
  dd {
    margin: 0;
  }
`;

export const GlobalStyle = createGlobalStyle`
  ${globalStyles}
`;
