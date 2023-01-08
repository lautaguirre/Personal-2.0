import styled from "styled-components";

export const ItemLink = styled.a`
  color: ${({ theme }) => theme.colors.darkerGrey};

  &:hover {
    color: ${({ theme }) => theme.colors.opacityGrey};
  }
`;
