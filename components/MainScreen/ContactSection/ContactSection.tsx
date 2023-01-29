import React from "react";
import { LinkedInIcon } from "@/assets/svgs/LinkedInIcon";
import { SectionContainer } from "@/components/common/SectionContainer/SectionContainer";
import { SectionHeader } from "@/components/common/SectionHeader/SectionHeader";
import { Container } from "@/components/common/Container/Container";

import * as S from "./Styled";

export const ContactSection = () => {
  return (
    <SectionContainer id="languages" mb="32px">
      <SectionHeader title="Send me a message" />

      <Container>
        <S.ExternalLink
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/lautaguirre"
        >
          <LinkedInIcon size={86} />
        </S.ExternalLink>
      </Container>
    </SectionContainer>
  );
};
