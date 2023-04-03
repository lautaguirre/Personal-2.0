import styled, { keyframes } from "styled-components";
import Link from "next/link";
import { Container } from "@/components/common/Container/Container";
import { AlignCenterMixin } from "@/styles/mixins";

export const Content = styled(Container)`
  background-color: ${({ theme }) => theme.colors.darkerGrey};
  padding: 48px 0px;
`;

const bounceAnimation = keyframes`
  0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
	40% {transform: translateY(-15px);}
	60% {transform: translateY(-8px);}
`;

export const ScrollLink = styled(Link)`
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.black};
  border-radius: 50%;
  height: 45px;
  width: 45px;
  margin-top: 20px;

  ${AlignCenterMixin}

  &:hover {
    background-color: ${({ theme }) => theme.colors.opacityGrey};
    color: black;

    animation: ${bounceAnimation} 1s ease;
  }
`;
