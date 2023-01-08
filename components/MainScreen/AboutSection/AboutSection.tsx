import React from "react";
import Image from "next/image";
import { About } from "@/types/about";
import { useAppSelector } from "@/lib/hooks/useAppSelector";
import { getAbout } from "@/state/selectors/dashboard/dashboardSelectors";
import { Container } from "@/components/common/Container/Container";

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
    <Container>
      <div id="about">
        <div>
          <div className="center">
            <h2 className="title">About</h2>
          </div>
        </div>

        <div>
          <Container hideOnMobile mb={30}>
            <Image width={165} height={165} src={avatar.src} alt="avatar" />
          </Container>
        </div>

        <div>
          <div>
            <div>{about.map(renderAboutList)}</div>
          </div>
        </div>
      </div>
    </Container>
  );
};
