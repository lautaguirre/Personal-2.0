import React from "react";
import styled, { useTheme } from "styled-components";
import Link from "next/link";
import {
  ExclamationTriangleIcon,
  ArrowLeftCircleIcon,
} from "@heroicons/react/24/solid";
import { Container } from "@/components/common/Container/Container";
import { Text } from "@/components/common/Text/Text";

const Content = styled.div`
  min-height: calc(100vh);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function NotFound() {
  const { colors } = useTheme();

  return (
    <Content>
      <Container
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <ExclamationTriangleIcon color={colors.black} width={72} height={72} />
        <Text font="bold" fontSize={32}>
          Oops! Wrong URL
        </Text>
        <Link href="/">
          <Container display="flex" mt="20px">
            <Container mr="10px" display="flex" alignItems="center">
              <ArrowLeftCircleIcon
                width={24}
                height={24}
                color={colors.black}
              />
            </Container>
            <Text>Go back</Text>
          </Container>
        </Link>
      </Container>
    </Content>
  );
}
