import React from "react";
import Image from "next/image";
import { About } from "@/types/about";
import { useAppSelector } from "@/lib/hooks/useAppSelector";
import { getAbout } from "@/state/selectors/dashboard/dashboardSelectors";
import { Container } from "@/components/common/Container/Container";
import { Text } from "@/components/common/Text/Text";

import * as S from "./Styled";

import avatar from "@/assets/images/avatar.png";

export const AboutSection = () => {
  const about = useAppSelector(getAbout);

  const renderAboutList = (section: About) => {
    const renderSectionItems = section.items.map((item, idx) => {
      return (
        <li key={item._id}>
          <strong>{item.itemHeader}</strong>
          <br />
          {item.itemText}
          {idx + 1 === section.items.length ? null : <hr />}
        </li>
      );
    });

    return (
      <div key={section._id}>
        <div>
          <div className="center hideOnMobile">
            {section.icon && (
              <></>
              // <FontAwesomeIcon
              //   icon={
              //     icons[
              //       section.icon as keyof typeof icons
              //     ] as FontAwesomeIconProps["icon"]
              //   }
              //   size="5x"
              // />
            )}
          </div>
          <div>
            <h4>{section.header}</h4>
            <hr />
            <ul>{renderSectionItems}</ul>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Container id="about" pl="50px" pr="50px">
      <Container display="flex" justifyContent="center" mb="10px">
        <Text font="bold" as="h1">
          About
        </Text>
      </Container>

      <Container hideOnMobile mb="30px" display="flex" justifyContent="center">
        <S.Avatar width={165} height={165} src={avatar.src} alt="avatar" />
      </Container>

      <div>
        <div>
          <div>{about.map(renderAboutList)}</div>
        </div>
      </div>
    </Container>
  );
};
