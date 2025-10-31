import { Image } from "react-native";
import { Container, Title, Wrapper } from "./styles";

export function EmptyTasks() {
  return (
    <Container>
      <Wrapper>
        <Image source={require("../../../assets/clipboard.png")} />
      </Wrapper>
      <Title isBold>Você ainda não tem tarefas cadastradas</Title>
      <Title>Crie tarefas e organize seus itens a fazer</Title>
    </Container>
  );
}
