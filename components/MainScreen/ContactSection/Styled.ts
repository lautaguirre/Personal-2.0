import styled from "styled-components";
import { Container } from "@/components/common/Container/Container";

export const Content = styled(Container)`
  margin-bottom: 50px;
`;

export const ExternalLink = styled.a`
  color: ${({ theme }) => theme.colors.darkerGrey};

  &:hover {
    color: black;
  }
`;
