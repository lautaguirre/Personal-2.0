import styled from "styled-components";
import Link from "next/link";
import { Container } from "@/components/common/Container/Container";
import { AlignCenterMixin } from "@/styles/mixins";

export const Content = styled(Container)`
  background-color: ${({ theme }) => theme.colors.darkerGrey};
  height: 20vh;
`;

export const ScrollLink = styled(Link)`
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.black};
  border-radius: 50%;
  height: 45px;
  width: 45px;

  ${AlignCenterMixin}

  &:hover {
    background-color: ${({ theme }) => theme.colors.opacityGrey};
    color: black;
  }
`;
