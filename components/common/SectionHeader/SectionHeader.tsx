import { Container } from "../Container/Container";
import { Text } from "../Text/Text";

interface Props {
  title?: string;
}

export const SectionHeader = ({ title }: Props) => {
  return (
    <Container display="flex" justifyContent="center" mb="16px">
      <Text font="bold" as="h1">
        {title}
      </Text>
    </Container>
  );
};
