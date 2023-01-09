import { css, DefaultTheme } from "styled-components";

export const textMixin = css<{
  fontSize?: number;
  textColor?: keyof DefaultTheme["colors"];
  font?: keyof DefaultTheme["fonts"];
  textDecoration?: React.CSSProperties["textDecoration"];
}>`
  font-family: ${({ theme, font }) =>
    font ? theme.fonts[font] : theme.fonts.medium};
  color: ${({ theme, textColor }) =>
    textColor ? theme.colors[textColor] : theme.colors.darkerGrey};
  text-decoration: ${({ textDecoration }) => textDecoration ?? "initial"};
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : "16px")};
`;
