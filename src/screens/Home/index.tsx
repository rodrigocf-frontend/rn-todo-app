import {
  Body,
  Button,
  Container,
  CounterWrapper,
  Header,
  InputWrapper,
  Logo,
  TodoList,
} from "./styles";
import { Input } from "../../components/Input";
import { useTheme } from "styled-components/native";
import { ClipboardIcon, PlusCircleIcon } from "phosphor-react-native";
import { Counter } from "../../components/Counter";
import { useState } from "react";
import { Task } from "../../components/Task";
import { FlatList } from "react-native";
import { EmptyTasks } from "../../components/EmptyTasks";

export function Home() {
  const theme = useTheme();

  const [data, setData] = useState();

  return (
    <>
      <Container>
        <Header>
          <Logo />

          <InputWrapper>
            <Input placeholder="Adicione uma nova tarefa" />
            <Button>
              <PlusCircleIcon size={16} color={theme.color.GRAY_100} />
            </Button>
          </InputWrapper>
        </Header>
        <Body>
          <CounterWrapper>
            d
            <Counter title="Criadas" value={0} labelColor="BLUE_500" />
            <Counter title="Concluídas" value={0} labelColor="PURPLE_900" />
          </CounterWrapper>

          <TodoList
            data={[]}
            renderItem={() => <Task isCompleted />}
            ListEmptyComponent={<EmptyTasks />}
          />
        </Body>
      </Container>
    </>
  );
}
