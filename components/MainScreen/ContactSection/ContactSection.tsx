import React from "react";
import { Text } from "@/components/common/Text/Text";

import * as S from "./Styled";

export const ContactSection = () => {
  return (
    <S.Content
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Text as="h2">Send me a message</Text>

      <S.ExternalLink
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/lautaguirre"
      >
        {/* <FontAwesomeIcon icon={faLinkedin} size="5x" /> */}
      </S.ExternalLink>
    </S.Content>
  );
};
