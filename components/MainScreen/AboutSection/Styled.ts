import styled from "styled-components";
import Image from "next/image";

export const Avatar = styled(Image)`
  border-radius: 50px;
  transition-duration: 200ms;
  transition-property: transform;
  transition-timing-function: ease-in-out;

  &:hover {
    transform: rotate(10deg);
  }
`;

const TIMELINE_SIZE = 36;
const TIMELINE_HALF_SIZE = TIMELINE_SIZE / 2;

export const Wrapper = styled.div`
  padding-left: 25%;
  padding-right: 25%;

  ${({ theme }) => `
    @media screen and (max-width: ${theme.breakPoints.breakDesktopMinimum}) {
      padding-left: 25px;
      padding-right: 25px;
    }
  `}
`;

export const List = styled.ol``;

export const ListItemIcon = styled.span`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  border-radius: 999999px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px;
  left: -${TIMELINE_HALF_SIZE}px;

  transition-timing-function: ease-in-out;
  transition-duration: 200ms;
  transition-property: transform;
`;

export const ListItemContent = styled.div`
  margin-left: ${TIMELINE_SIZE}px;
  padding-bottom: 16px;
`;

export const ListItem = styled.li`
  position: relative;
  border-left: 2px solid ${({ theme }) => theme.colors.charcoalGrey};
  margin-left: ${TIMELINE_HALF_SIZE}px;

  &:last-child {
    border-left: none;
  }

  &:hover {
    ${ListItemIcon} {
      transform: scale(1.2) rotate(-15deg);
    }
  }
`;
