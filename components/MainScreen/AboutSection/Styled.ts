import styled from "styled-components";
import Image from "next/image";

export const Avatar = styled(Image)`
  border-radius: 50px;
  transition-duration: 200ms;
  transition-property: transform;

  &:hover {
    transform: rotate(10deg);
  }
`;
