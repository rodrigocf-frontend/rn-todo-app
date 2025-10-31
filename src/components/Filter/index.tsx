import { useState } from "react";
import { Container, Title, Button, Wrapper } from "./styles";

type Props = {
  clearFilter?: () => void;
  buttons: {
    onPress: () => void;
    title: string;
  }[];
};

export function Filter({ buttons, clearFilter }: Props) {
  const [active, setActive] = useState<number | undefined>();

  const handlePress = (id: number, onPress: () => void) => {
    if (id === active && clearFilter) {
      setActive(undefined);
      return clearFilter();
    } else {
      setActive(id);
      return onPress();
    }
  };

  return (
    <Container>
      <Title>Ordenar por:</Title>
      <Wrapper>
        {buttons.map(({ onPress, title }, index) => (
          <Button
            isActive={active === index}
            key={`filter_button_${index}`}
            onPress={() => handlePress(index, onPress)}
          >
            <Title>{title}</Title>
          </Button>
        ))}
      </Wrapper>
    </Container>
  );
}
