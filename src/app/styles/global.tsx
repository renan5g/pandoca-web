import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  ${({ theme }) => css`
    *,
    *::after,
    *::before {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: ${theme.fonts.FAMILY};
    }

    html {
      scroll-behavior: smooth;
      box-sizing: inherit;
      width: 100%;
    }

    // Scrollbar styles
    html {
      scrollbar-width: thin;
      scrollbar-color: ${theme.colors.TEXT_HEADING};
    }

    body::-webkit-scrollbar {
      width: 6px;
    }

    body::-webkit-scrollbar-thumb {
      background-color: ${theme.colors.TEXT_HEADING};
      border-radius: 10px;
    }

    body {
      background-color: ${theme.colors.BACKGROUND};
      color: ${theme.colors.TEXT_HEADING};
      -webkit-text-size-adjust: 100%;
      -webkit-font-smoothing: antialiased;
    }

    ul,
    li,
    ol {
      list-style: none;
    }

    a {
      text-decoration: none;
      color: ${theme.colors.TEXT_HEADING};
    }

    button {
      outline: none;
      border: none;
      font-size: ${theme.fonts.SIZES[16]};
      color: ${theme.colors.TEXT_HEADING};
      cursor: pointer;
    }
  `}
`;
