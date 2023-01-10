import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      green: string;
      blue: string;
      pink: string;
      blueBlack: string;
      darkGreen: string;
      darkBlue: string;
      darkPink: string;
      darkGrey: string;
      grey: string;
      offWhite: string;
      veryLightGrey: string;
      lightGrey: string;
      lightBlue: string;
      lightBlueBlack: string;
      charcoalGrey: string;
      white: string;
      black: string;
      strongGrey: string;
      opacityGrey: string;
      darkerGrey: string;
      backgroundDarkOpacity: string;
    };
    breakPoints: {
      breakMobile: string;
      breakMobileMedium: string;
      breakMobileLarge: string;
      breakTablet: string;
      breakDesktopMinimum: string;
      breakDesktopDesktop: string;
    };
    fonts: {
      bold: string;
      demi: string;
      heavy: string;
      light: string;
      medium: string;
      regular: string;
    };
    constants: {
      navBarHeight: string;
    };
  }
}
