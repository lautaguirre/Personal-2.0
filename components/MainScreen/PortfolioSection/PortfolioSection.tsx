import React from "react";
import { useAppSelector } from "@/lib/hooks/useAppSelector";
import { getPortfolio } from "@/state/selectors/dashboard/dashboardSelectors";
import { Text } from "@/components/common/Text/Text";

import PortfolioItem from "./components/PortfolioItem";

import * as S from "./Styled";

export const PortfolioSection = () => {
  const portfolio = useAppSelector(getPortfolio);

  return (
    <S.Content>
      <Text as="h2">My Work</Text>

      <div>
        {portfolio.map((item) => {
          return (
            <PortfolioItem
              key={item._id}
              title={item.title}
              titleLink={item.titleLink}
              description={item.description}
              techStack={item.techStack}
              images={item.images}
            />
          );
        })}
      </div>
    </S.Content>
  );
};
