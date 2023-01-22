import React from "react";
import { useTheme } from "styled-components";
import * as Icons from "@heroicons/react/24/solid";
import { AboutItem } from "@/types/about";
import { useAppSelector } from "@/lib/hooks/useAppSelector";
import { getAbout } from "@/state/selectors/dashboard/dashboardSelectors";
import { Container } from "@/components/common/Container/Container";
import { Text } from "@/components/common/Text/Text";
import { Separator } from "@/components/common/Separator/Separator";
import { SectionHeader } from "@/components/common/SectionHeader/SectionHeader";
import { SectionContainer } from "@/components/common/SectionContainer/SectionContainer";
import avatar from "@/assets/images/avatar.png";

import * as S from "./Styled";

export const AboutSection = () => {
  const about = useAppSelector(getAbout);
  const { colors } = useTheme();

  const renderItems = (sectionItem: AboutItem) => {
    return (
      <S.ListItem key={sectionItem._id}>
        <S.ListItemContent>
          <S.ListItemIcon>
            <Icons.CalendarDaysIcon
              color={colors.charcoalGrey}
              width={24}
              height={24}
            />
          </S.ListItemIcon>

          <Container pt="8px">
            <Container mb="2px">
              <Text as="h4" font="bold" textColor="darkerGrey">
                {sectionItem.itemHeader}
              </Text>
            </Container>
            <Text>{sectionItem.itemText}</Text>
          </Container>
        </S.ListItemContent>
      </S.ListItem>
    );
  };

  return (
    <SectionContainer id="about">
      <SectionHeader title="About" />

      <Container hideOnMobile mb="30px" display="flex" justifyContent="center">
        <S.Avatar width={165} height={165} src={avatar.src} alt="avatar" />
      </Container>

      <Container>
        {about.map((section) => {
          const Icon = Icons?.[section.icon as keyof typeof Icons];

          return (
            <Container key={section._id} mb="32px">
              <Container display="flex" alignItems="center">
                <Container hideOnMobile mr="15px">
                  {section.icon && Icon && <Icon width={24} height={24} />}
                </Container>

                <Text as="h2">{section.header}</Text>
              </Container>

              <Separator />

              <Container>
                <S.List>{section.items.map(renderItems)}</S.List>
              </Container>
            </Container>
          );
        })}
      </Container>
    </SectionContainer>
  );
};
