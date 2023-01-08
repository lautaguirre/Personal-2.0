import React from "react";
import { css } from "styled-components";

export const containerMixin = css<{
  shadow?: boolean;
  hideOnMobile?: boolean;
  display?: React.CSSProperties["display"];
  flexDirection?: React.CSSProperties["flexDirection"];
  justifyContent?: React.CSSProperties["justifyContent"];
  alignItems?: React.CSSProperties["alignItems"];
  backgroundColor?: React.CSSProperties["backgroundColor"];
  borderRadius?: React.CSSProperties["borderRadius"];
  height?: React.CSSProperties["height"];
  width?: React.CSSProperties["width"];
  mt?: React.CSSProperties["marginTop"];
  mb?: React.CSSProperties["marginBottom"];
  mr?: React.CSSProperties["marginRight"];
  ml?: React.CSSProperties["marginLeft"];
  pt?: React.CSSProperties["paddingTop"];
  pb?: React.CSSProperties["paddingBottom"];
  pr?: React.CSSProperties["paddingRight"];
  pl?: React.CSSProperties["paddingLeft"];
}>`
  display: ${({ display }) => display ?? undefined};
  flex-direction: ${({ flexDirection }) => flexDirection ?? undefined};
  justify-content: ${({ justifyContent }) => justifyContent ?? undefined};
  align-items: ${({ alignItems }) => alignItems ?? undefined};
  margin-top: ${({ mt }) => mt ?? undefined};
  margin-bottom: ${({ mb }) => mb ?? undefined};
  margin-right: ${({ mr }) => mr ?? undefined};
  margin-left: ${({ ml }) => ml ?? undefined};
  padding-top: ${({ pt }) => pt ?? undefined};
  padding-bottom: ${({ pb }) => pb ?? undefined};
  padding-right: ${({ pr }) => pr ?? undefined};
  padding-left: ${({ pl }) => pl ?? undefined};
  background-color: ${({ backgroundColor }) => backgroundColor ?? undefined};
  border-radius: ${({ borderRadius }) => borderRadius ?? undefined};
  width: ${({ width }) => width ?? undefined};
  height: ${({ height }) => height ?? undefined};

  ${({ shadow }) =>
    shadow &&
    `
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2), 0 4px 20px 0 rgba(0, 0, 0, 0.19);
    -webkit-box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2), 0 4px 20px 0 rgba(0, 0, 0, 0.19);
  `}

  ${({ hideOnMobile, theme }) =>
    hideOnMobile &&
    `
    @media screen and (max-width: ${theme.breakPoints.breakMobileLarge}) {
      display: none;
    }
  `}
`;
