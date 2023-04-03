import React from "react";
import { LinkedInIcon } from "@/assets/svgs/LinkedInIcon";
import { GithubIcon } from "@/assets/svgs/GithubIcon";
import { SectionContainer } from "@/components/common/SectionContainer/SectionContainer";
import { SectionHeader } from "@/components/common/SectionHeader/SectionHeader";
import { Container } from "@/components/common/Container/Container";

import * as S from "./Styled";

export const ContactSection = () => {
  return (
    <SectionContainer id="languages">
      <SectionHeader title="Send me a message!" />

      <Container display="flex" justifyContent="space-around" mt="32px">
        <S.ExternalLink
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/lautaguirre"
        >
          <LinkedInIcon size={128} />
        </S.ExternalLink>
        <S.ExternalLink
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/lautaguirre"
        >
          <GithubIcon size={128} />
        </S.ExternalLink>
      </Container>
    </SectionContainer>
  );
};
