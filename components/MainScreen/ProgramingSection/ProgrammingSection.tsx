import React from "react";
import Image from "next/image";
import { Skill } from "@/types/skills";
import { useAppSelector } from "@/lib/hooks/useAppSelector";
import { getSkills } from "@/state/selectors/dashboard/dashboardSelectors";
import { Text } from "@/components/common/Text/Text";
import { Container } from "@/components/common/Container/Container";
import { SectionContainer } from "@/components/common/SectionContainer/SectionContainer";
import { SectionHeader } from "@/components/common/SectionHeader/SectionHeader";

import * as S from "./Styled";

export const ProgrammingSection = () => {
  const skills = useAppSelector(getSkills);

  const renderProgramming = (data: Skill) => {
    const renderList = data.content.map((item) => {
      return (
        <S.SkillContentContainer key={item._id}>
          <Image src={item.asset} alt="skill-image" height={80} width={80} />
          <Container mt="4px">
            <Text as="h4">{item.description}</Text>
          </Container>
        </S.SkillContentContainer>
      );
    });

    return (
      <Container key={data._id}>
        <SectionHeader key={data._id} title={data.name} />
        <S.ListContainer>{renderList}</S.ListContainer>
      </Container>
    );
  };

  return (
    <SectionContainer id="programming">
      {skills.map(renderProgramming)}
    </SectionContainer>
  );
};
