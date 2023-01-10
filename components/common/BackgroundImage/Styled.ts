import styled from "styled-components";

export const BackgroundImage = styled.div<{ cover?: boolean; url: string }>`
  margin-bottom: 25px;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.85;
  min-height: 40vh;

  ${({ cover }) => cover && `min-height: calc(100vh);`}
  ${({ url }) => `background-image: url(${url});`}
`;

export const BackgroundContent = styled.div<{ cover?: boolean }>`
  position: absolute;
  margin: 0px 20px;
  background-color: ${({ theme }) => theme.colors.black};
  padding: 12px 24px;

  ${({ cover, theme }) =>
    cover && `margin-top: ${theme.constants.navBarHeight}`}
`;

export const BackgroundBox = styled.span`
  display: block;
  margin-right: -10px;
  letter-spacing: 10px;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  font-size: 24px;
`;
