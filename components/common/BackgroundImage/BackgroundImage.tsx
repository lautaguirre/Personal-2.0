import React, { FC } from "react";

import * as S from "./Styled";

interface Props {
  showBox: boolean;
  boxText: string;
  sectionName: string;
  image: string;
  cover?: boolean;
}

export const BackgroundImage: FC<Props> = (props) => {
  return (
    <S.BackgroundImage
      id={props.sectionName}
      url={props.image}
      cover={props.cover}
    >
      {props.showBox && (
        <S.BackgroundContent cover={props.cover}>
          <S.BackgroundBox>{props.boxText.toUpperCase()}</S.BackgroundBox>
        </S.BackgroundContent>
      )}
    </S.BackgroundImage>
  );
};
