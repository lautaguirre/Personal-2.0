import React from "react";
import { useTheme } from "styled-components";
import { Language } from "@/types/languages";
import { Text } from "@/components/common/Text/Text";
import { useAppSelector } from "@/lib/hooks/useAppSelector";
import { getLanguages } from "@/state/selectors/dashboard/dashboardSelectors";
import { Container } from "@/components/common/Container/Container";
import { Progress } from "@/components/common/Progress/Progress";
import { SectionHeader } from "@/components/common/SectionHeader/SectionHeader";
import { SectionContainer } from "@/components/common/SectionContainer/SectionContainer";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/solid";

export const LanguagesSection = () => {
  const languages = useAppSelector(getLanguages);
  const { colors } = useTheme();

  const renderLanguages = (language: Language) => {
    return (
      <Container key={language.name} mb="36px">
        <Container display="flex" alignItems="center" mb="12px">
          <Text as="h3">{language.name}</Text>
          &nbsp;
          <ChevronDoubleRightIcon
            color={colors.charcoalGrey}
            width={24}
            height={24}
          />
          &nbsp;
          <Text as="h3">{language.description}</Text>
        </Container>

        <Progress percentage={language.percentage} />
      </Container>
    );
  };

  return (
    <SectionContainer id="languages">
      <SectionHeader title="Languages" />

      <Container>{languages.map(renderLanguages)}</Container>
    </SectionContainer>
  );
};
