import styled from "styled-components";
import { Container } from "../Container/Container";

export const SectionContainer = styled(Container)`
  padding-left: 25%;
  padding-right: 25%;

  ${({ theme }) => `
    @media screen and (max-width: ${theme.breakPoints.breakDesktopMinimum}) {
      padding-left: 25px;
      padding-right: 25px;
    }
  `}
`;
