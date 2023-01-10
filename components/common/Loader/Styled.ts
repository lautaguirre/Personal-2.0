import styled, { keyframes } from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";

export const Overlay = styled(Dialog.Overlay)`
  background-color: ${({ theme }) => theme.colors.backgroundDarkOpacity};
  position: fixed;
  inset: 0;
`;

export const ModalContent = styled(Dialog.Content)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  &:focus {
    outline: none;
  }
`;

const EllipsisOne = keyframes`
  0% {
    transform: scale(0);
  }

  100% {
    transform: scale(1);
  }
`;

const EllipsisTwo = keyframes`
  0% {
    transform: translate(0, 0);
  }

  100% {
    transform: translate(19px, 0);
  }
`;

const EllipsisThree = keyframes`
  0% {
    transform: scale(1);
  }

  100% {
    transform: scale(0);
  }
`;

export const Ellipsis = styled.div`
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;

  div {
    position: absolute;
    top: 27px;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.white};
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }

  div:nth-child(1) {
    left: 6px;
    animation: ${EllipsisOne} 0.6s infinite;
  }

  div:nth-child(2) {
    left: 6px;
    animation: ${EllipsisTwo} 0.6s infinite;
  }

  div:nth-child(3) {
    left: 26px;
    animation: ${EllipsisTwo} 0.6s infinite;
  }

  div:nth-child(4) {
    left: 45px;
    animation: ${EllipsisThree} 0.6s infinite;
  }
`;
