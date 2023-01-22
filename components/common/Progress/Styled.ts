import styled from "styled-components";
import * as Progress from "@radix-ui/react-progress";

export const ProgressRoot = styled(Progress.Root)`
  position: relative;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.lightGrey};
  border-radius: 8px;
  height: 25px;
  transform: translateZ(0);
`;

export const ProgressIndicator = styled(Progress.Indicator)<{
  progress: number;
}>`
  background-image: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.charcoalGrey} 0%,
    ${({ theme }) => theme.colors.opacityGrey} 100%
  );
  width: ${({ progress }) => progress}%;
  height: 100%;
  border-radius: 8px;

  transition-duration: 600ms;
  transition-property: width;
  transition-timing-function: cubic-bezier(0.65, 0, 0.35, 1);
`;
