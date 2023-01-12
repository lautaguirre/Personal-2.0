import styled from "styled-components";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Text } from "../Text/Text";

export const NavigationMenuRoot = styled(NavigationMenu.Root)`
  position: fixed;
  top: 0;
  padding-top: 10px;
  display: flex;
  justify-content: center;
  width: 100%;
  z-index: 1;
  background: ${({ theme }) => theme.colors.darkerGrey};
  background: ${({ theme }) => `
    linear-gradient(
      180deg,
      ${theme.colors.darkerGrey}7F 0%,
      ${theme.colors.opacityGrey}00 100%
    );
  `};
`;

export const NavigationMenuList = styled(NavigationMenu.List)`
  display: flex;
  justify-content: center;
  background-color: white;
  padding: 4px;
  border-radius: 6px;
  list-style: none;
  box-shadow: 0 2px 10px ${({ theme }) => theme.colors.opacityGrey};
  margin: 0;
`;

export const NavigationMenuLink = styled(NavigationMenu.Link)`
  display: block;
  height: 100%;
  text-decoration: none;
  padding: 8px 12px;
  outline: none;
  user-select: none;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.darkerGrey};

  transition: background-color 200ms;

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGrey};
  }
`;

export const NavItemText = styled(Text)`
  ${({ theme }) => `
    @media screen and (max-width: ${theme.breakPoints.breakMobileLarge}) {
      display: none;
    }
  `}
`;
