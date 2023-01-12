import styled from "styled-components";
import * as Separator from "@radix-ui/react-separator";

export const SeparatorRoot = styled(Separator.Root)`
  background-color: ${({ theme }) => theme.colors.opacityGrey};

  &[data-orientation="horizontal"] {
    height: 2px;
    margin: 10px 0;
  }

  &[data-orientation="vertical"] {
    width: 2px;
    margin: 0 10px;
  }
`;
