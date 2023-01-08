import { createGlobalStyle } from "styled-components";
import { fonts } from "@/styles/fonts";

export const GlobalStyle = createGlobalStyle`
  ${fonts}

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html {
    scroll-behavior: smooth;

    &,
    body {
      max-width: 100vw;
      overflow-x: hidden;
    }

    body {
      background-color: ${({ theme }) => theme.colors.veryLightGrey};
      font-family: ${({ theme }) => theme.fonts.medium}, sans-serif;
      color: ${({ theme }) => theme.colors.opacityGrey};

      &::-webkit-scrollbar {
        width: 0.5em;
      }

      &::-webkit-scrollbar-track {
        background-color: ${({ theme }) => theme.colors.veryLightGrey};
      }

      &::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.colors.opacityGrey};

        &:hover {
          background-color: ${({ theme }) => theme.colors.darkerGrey};
        }
      }
    }
  }
`;
