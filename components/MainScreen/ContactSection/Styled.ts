import styled, { keyframes } from "styled-components";
import { Container } from "@/components/common/Container/Container";

export const Content = styled(Container)`
  margin-bottom: 50px;
`;

const contactAnimation = keyframes`
  30% { transform: scale(1.2); }
  40%, 60% { transform: rotate(-20deg) scale(1.2); }
  50% { transform: rotate(20deg) scale(1.2); }
  70% { transform: rotate(0deg) scale(1.2); }
  100% { transform: scale(1); }
`;

export const ExternalLink = styled.a`
  color: ${({ theme }) => theme.colors.black};

  &:hover {
    animation: ${contactAnimation} 1s ease;
  }
`;
