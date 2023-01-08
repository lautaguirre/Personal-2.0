import React, { FC } from "react";
import Image from "next/image";
import { Text } from "@/components/common/Text/Text";

import * as S from "./Styled";

interface Props {
  title: string;
  titleLink: string;
  description: string;
  techStack: string[];
  images: string[];
}

const PortfolioItem: FC<Props> = (props) => {
  const { title, titleLink, description, techStack, images } = props;

  const renderTech = (tech: string) => {
    return (
      <li key={tech}>
        <strong>{tech}</strong>
      </li>
    );
  };

  const renderCarouselItem = (image: string) => {
    return (
      <Image
        key={image}
        src={image}
        alt="carousel-item"
        height={100}
        width={100}
      />
    );
  };

  return (
    <div>
      <div>
        <div>
          {titleLink ? (
            <S.ItemLink
              target="_blank"
              rel="noopener noreferrer"
              href={titleLink}
            >
              <Text textDecoration="underline">{title}</Text>
              {/* <FontAwesomeIcon icon={faLink} /> */}
            </S.ItemLink>
          ) : (
            <Text textDecoration="underline">{title}</Text>
          )}
          <div>
            <p>{description}</p>

            <p>To develope this website I used:</p>
            <ul>{techStack.map(renderTech)}</ul>
          </div>

          {images && images.length > 0 && images.map(renderCarouselItem)}
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
