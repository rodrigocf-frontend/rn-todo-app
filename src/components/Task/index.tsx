import { CheckCircleIcon, CircleIcon, TrashIcon } from "phosphor-react-native";
import { Button, Container, Title, Wrapper } from "./styles";
import { useTheme } from "styled-components/native";
import { Alert } from "react-native";

export type Task = {
  id: string;
  title: string;
  isCompleted: boolean;
};

type Props = Task & {
  onPressTask: (taskData: Task) => void;
  onRemove: (taskData: Task) => void;
};

export function Task({ onPressTask, onRemove, ...data }: Props) {
  const { isCompleted, title } = data;

  const theme = useTheme();

  const isChecked = isCompleted ? (
    <CheckCircleIcon size={17} color={theme.color.PURPLE_900} />
  ) : (
    <CircleIcon size={17} color={theme.color.BLUE_500} />
  );

  const handlePressTask = () => {
    const titleModal = isCompleted ? "Reativar" : "Concluir";
    const descriptionModal = isCompleted
      ? `Deseja reativar a atividade ${title}?`
      : `Deseja completar a atividade ${title}?`;

    return Alert.alert(titleModal, descriptionModal, [
      {
        text: "Sim",
        onPress: () => onPressTask(data),
      },
      {
        text: "Não",
      },
    ]);
  };

  const handleRemoveTask = () => {
    return Alert.alert("Remover", `Deseja remover a atividade ${title}`, [
      {
        text: "Sim",
        onPress: () => onRemove(data),
      },
      {
        text: "Não",
      },
    ]);
  };

  return (
    <Container onPress={handlePressTask}>
      <Wrapper>
        {isChecked}
        <Title hasLineThrough={isCompleted}>{title}</Title>
      </Wrapper>

      <Button onPress={handleRemoveTask}>
        <TrashIcon size={14} color={theme.color.GRAY_300} />
      </Button>
    </Container>
  );
}
