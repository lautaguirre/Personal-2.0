import { DefaultTheme } from "styled-components";
import {
  boldFont,
  demiFont,
  heavyFont,
  lightFont,
  mediumFont,
  regularFont,
} from "./fonts";

export const theme: DefaultTheme = {
  colors: {
    green: "#a9dbc3",
    blue: "#7db7d4",
    pink: "#f5aca6",
    blueBlack: "#39474d",
    darkGreen: "#95cfb3",
    darkBlue: "#70adcc",
    darkPink: "#f19d95",
    darkGrey: "#718990",
    grey: "#8da0a6",
    offWhite: "#f7f7f7",
    veryLightGrey: "#f0f0f0",
    lightGrey: "#d8d8d8",
    lightBlue: "#e6f3fa",
    lightBlueBlack: "#435359",
    charcoalGrey: "#303b40",
    white: "#fff",
    black: "#000",
    strongGrey: "#9da4a6",
    opacityGrey: "#777777",
    darkerGrey: "#343534",
    backgroundDarkOpacity: "rgb(48, 59, 64, 0.5)",
  },
  breakPoints: {
    breakMobile: "320px",
    breakMobileMedium: "375px",
    breakMobileLarge: "425px",
    breakTablet: "768px",
    breakDesktopMinimum: "1024px",
    breakDesktopDesktop: "1280px",
  },
  spacing: {
    formPaddingHorizontal: "40px",
  },
  fonts: {
    bold: boldFont.style.fontFamily,
    demi: demiFont.style.fontFamily,
    heavy: heavyFont.style.fontFamily,
    light: lightFont.style.fontFamily,
    medium: mediumFont.style.fontFamily,
    regular: regularFont.style.fontFamily,
  },
  constants: {
    navBarHeight: "60px",
  },
};
