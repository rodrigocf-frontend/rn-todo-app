import { CheckCircleIcon, CircleIcon, TrashIcon } from "phosphor-react-native";
import { Button, Container, Title, Wrapper } from "./styles";
import { useTheme } from "styled-components/native";
import { View } from "react-native";

interface Props {
  title: string;
  isCompleted?: boolean;
}

export function Task({ title, isCompleted }: Props) {
  const theme = useTheme();

  const isChecked = isCompleted ? (
    <CheckCircleIcon size={17} color={theme.color.PURPLE_900} />
  ) : (
    <CircleIcon size={17} color={theme.color.BLUE_500} />
  );

  return (
    <Container>
      <Wrapper>
        {isChecked}
        <Title>
          Integer urna interdum massa libero auctor neque turpis turpis semper.
        </Title>
      </Wrapper>

      <Button>
        <TrashIcon size={14} color={theme.color.GRAY_300} />
      </Button>
    </Container>
  );
}
