import React from "react";
import { Text } from "@/components/common/Text/Text";

import * as S from "./Styled";

export const Footer = () => {
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
      <Text color="white" as="h4">
        Thanks for reading!
      </Text>
      <S.ScrollLink href="/" onClick={scrollToTop} scroll={false}>
        {/* <FontAwesomeIcon icon={faArrowUp} /> */}
      </S.ScrollLink>
    </S.Content>
  );
};
