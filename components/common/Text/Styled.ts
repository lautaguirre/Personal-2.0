import { css, DefaultTheme } from "styled-components";

export const textMixin = css<{
  fontSize?: React.CSSProperties["fontSize"];
  textColor?: keyof DefaultTheme["colors"];
  font?: keyof DefaultTheme["fonts"];
  textDecoration?: React.CSSProperties["textDecoration"];
  textAlign?: React.CSSProperties["textAlign"];
}>`
  font-family: ${({ theme, font }) =>
    font ? theme.fonts[font] : theme.fonts.medium};
  color: ${({ theme, textColor }) =>
    textColor ? theme.colors[textColor] : theme.colors.darkerGrey};
  text-decoration: ${({ textDecoration }) => textDecoration ?? undefined};
  font-size: ${({ fontSize }) => fontSize ?? undefined};
  text-align: ${({ textAlign }) => textAlign ?? undefined};
`;
