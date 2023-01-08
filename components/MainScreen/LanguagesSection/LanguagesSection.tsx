import React from "react";
import { Language } from "@/types/languages";
import { useTheme } from "styled-components";
import { Text } from "@/components/common/Text/Text";
import { useAppSelector } from "@/lib/hooks/useAppSelector";
import { getLanguages } from "@/state/selectors/dashboard/dashboardSelectors";
import { Container } from "@/components/common/Container/Container";
import { Progress } from "@/components/common/Progress/Progress";

export const LanguagesSection = () => {
  const languages = useAppSelector(getLanguages);
  const { colors } = useTheme();

  const renderLanguages = (language: Language) => {
    return (
      <div key={language.name}>
        <Text as="h3">
          {language.name}
          <Text>
            &nbsp;
            {/* <FontAwesomeIcon icon={faChevronCircleRight} /> */}
            &nbsp;
            {language.description}
          </Text>
        </Text>

        <Progress percentage={language.percentage} />
      </div>
    );
  };

  return (
    <Container>
      <div id="languages">
        <div>
          <div>
            <Text as="h2">Languages</Text>
            {/* <FontAwesomeIcon
              color={colors.opacityGrey}
              icon={faComments}
              size="2x"
            /> */}
          </div>
        </div>

        <div>
          <div>{languages.map(renderLanguages)}</div>
        </div>
      </div>
    </Container>
  );
};
