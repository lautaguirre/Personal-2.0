import React from "react";
import { Text } from "@/components/common/Text/Text";
import { ArrowSmallUpIcon } from "@heroicons/react/24/solid";
import { useTheme } from "styled-components";

import * as S from "./Styled";

export const Footer = () => {
  const { colors } = useTheme();

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <S.Content
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Text textColor="white" as="h3">
        Thanks for reading!
      </Text>

      <S.ScrollLink href="/" onClick={scrollToTop} scroll={false}>
        <ArrowSmallUpIcon color={colors.white} width={24} height={24} />
      </S.ScrollLink>
    </S.Content>
  );
};
