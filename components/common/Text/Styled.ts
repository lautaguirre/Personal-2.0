import { css, DefaultTheme } from "styled-components";

export const textMixin = css<{
  textColor?: keyof DefaultTheme["colors"];
  font?: keyof DefaultTheme["fonts"];
  textDecoration?: React.CSSProperties["textDecoration"];
}>`
  font-family: ${({ theme, font }) =>
    font ? theme.fonts[font] : theme.fonts.medium};
  color: ${({ theme, textColor }) =>
    textColor ? theme.colors[textColor] : theme.colors.darkerGrey};
  text-decoration: ${({ textDecoration }) => textDecoration ?? "initial"};
`;
