import React from "react";
import Image from "next/image";
import { Skill } from "@/types/skills";
import { useAppSelector } from "@/lib/hooks/useAppSelector";
import { getSkills } from "@/state/selectors/dashboard/dashboardSelectors";
import { Text } from "@/components/common/Text/Text";
import { Container } from "@/components/common/Container/Container";

export const ProgrammingSection = () => {
  const skills = useAppSelector(getSkills);

  const renderProgramming = (data: Skill) => {
    const renderList = data.content.map((item) => {
      if (item.type === "icon") {
        return (
          <div key={item._id}>
            {/* <FontAwesomeIcon
              icon={
                icons[
                  item.asset as keyof typeof icons
                ] as FontAwesomeIconProps["icon"]
              }
              size="5x"
            /> */}
            <Text as="h4">{item.description}</Text>
          </div>
        );
      } else if (item.type === "image") {
        return (
          <div key={item._id}>
            <Image src={item.asset} alt="skill-image" height={80} width={80} />
            <Text as="h4">{item.description}</Text>
          </div>
        );
      }

      return null;
    });

    return (
      <div key={data._id}>
        <div>
          <div>
            <Text as="h2">{data.name}</Text>
          </div>
        </div>
        <div>{renderList}</div>
      </div>
    );
  };

  return (
    <Container id="programming">{skills.map(renderProgramming)}</Container>
  );
};
