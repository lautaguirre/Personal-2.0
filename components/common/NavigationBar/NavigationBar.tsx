import React from "react";
import Link from "next/link";
import { useTheme } from "styled-components";
import {
  CommandLineIcon,
  IdentificationIcon,
  PhotoIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Container } from "@/components/common/Container/Container";

import * as S from "./Styled";

const NavigationBar = () => {
  const { colors } = useTheme();

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <S.NavigationMenuRoot>
      <S.NavigationMenuList>
        <NavigationMenu.Item>
          <S.NavigationMenuLink asChild>
            <Link href="/" onClick={scrollToTop} scroll={false}>
              <Container display="flex" alignItems="center" height="100%">
                <CommandLineIcon color={colors.black} width={26} height={26} />
              </Container>
            </Link>
          </S.NavigationMenuLink>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <S.NavigationMenuLink asChild>
            <Link href="/#about" scroll={false}>
              <Container display="flex" alignItems="center" height="100%">
                <S.NavItemText>About&nbsp;</S.NavItemText>
                <IdentificationIcon
                  color={colors.black}
                  width={24}
                  height={24}
                />
              </Container>
            </Link>
          </S.NavigationMenuLink>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <S.NavigationMenuLink asChild>
            <Link href="/#portfolio" scroll={false}>
              <Container display="flex" alignItems="center" height="100%">
                <S.NavItemText>Portfolio&nbsp;</S.NavItemText>
                <PhotoIcon color={colors.black} width={24} height={24} />
              </Container>
            </Link>
          </S.NavigationMenuLink>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <S.NavigationMenuLink asChild>
            <Link href="/#contact" scroll={false}>
              <Container display="flex" alignItems="center" height="100%">
                <S.NavItemText>Contact&nbsp;</S.NavItemText>
                <EnvelopeIcon color={colors.black} width={24} height={24} />
              </Container>
            </Link>
          </S.NavigationMenuLink>
        </NavigationMenu.Item>
      </S.NavigationMenuList>

      <NavigationMenu.Viewport />
    </S.NavigationMenuRoot>
  );
};

export default NavigationBar;
