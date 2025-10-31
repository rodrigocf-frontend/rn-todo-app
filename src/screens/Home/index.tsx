import {
  Body,
  Button,
  Container,
  CounterWrapper,
  FilterWrapper,
  Header,
  InputWrapper,
  Logo,
} from "./styles";
import { Input } from "../../components/Input";
import { useTheme } from "styled-components/native";
import { PlusCircleIcon } from "phosphor-react-native";
import { Counter } from "../../components/Counter";
import { useEffect, useRef, useState } from "react";
import { Task } from "../../components/Task";
import { EmptyTasks } from "../../components/EmptyTasks";
import { Alert, FlatList, TextInput } from "react-native";
import _ from "lodash";
import { loadData, storeData } from "../../services/tasks";
import { Filter } from "../../components/Filter";
import { AppError } from "../../utils/errors";

export type AppState = {
  tasks: Task[];
  lastId: number;
};

type FilterValue = {
  condition: [string] | [string, string];
  orderBy: ["asc" | "desc"];
};

export function Home() {
  const theme = useTheme();
  const [taskText, setTaskText] = useState("");
  const inputRef = useRef<TextInput>(null);

  const [data, setData] = useState<AppState>({
    tasks: [],
    lastId: 0,
  });

  const [filter, setFilter] = useState<FilterValue>({
    condition: [""],
    orderBy: ["asc"],
  });

  const { tasks } = data;

  const handleAddTask = () => {
    inputRef.current?.blur();
    if (taskText.length < 1) {
      return Alert.alert(
        "Inválido",
        "Título da task deve ter no min. 1 caracter"
      );
    }
    return Alert.alert("Criar", `Deseja criar a task ${taskText}?`, [
      {
        text: "Sim",
        onPress: () => {
          setData((prevState) => ({
            ...prevState,
            tasks: [
              {
                id: (prevState.lastId += 1).toString(),
                title: taskText,
                isCompleted: false,
              },
              ...prevState.tasks,
            ],
            lastId: (prevState.lastId += 1),
          }));
          setTaskText("");
        },
      },
      {
        text: "Não",
      },
    ]);
  };

  const handleDeleteTask = (taskData: Task) => {
    setData((prevState) => ({
      ...prevState,
      tasks: prevState.tasks.filter((task) => task.id !== taskData.id),
    }));
  };

  const handleCompleteTask = (taskData: Task) => {
    setData((prevState) => ({
      ...prevState,
      tasks: prevState.tasks.map((task) => {
        if (task.id === taskData.id) {
          return {
            ...task,
            isCompleted: !taskData.isCompleted,
          };
        }
        return task;
      }),
    }));
  };

  const handleFilter = (filterValue: FilterValue) => setFilter(filterValue);

  useEffect(() => {
    loadData()
      .then((data) => setData(data))
      .catch((e) => AppError(e));
  }, []);

  useEffect(() => {
    storeData(data).catch((e) => AppError(e));
  }, [data]);

  const completedTasks = _.filter(tasks, "isCompleted");
  const countCompletedTasks = _.size(completedTasks);
  const countTasksCreated = _.size(tasks);

  const filteredData = _.orderBy(
    data.tasks,
    filter.condition,
    filter.orderBy
  ) as Task[];

  return (
    <Container>
      <Header>
        <Logo />
        <InputWrapper>
          <Input
            ref={inputRef}
            placeholder="Adicione uma nova tarefa"
            onChangeText={setTaskText}
            value={taskText}
          />
          <Button onPress={handleAddTask}>
            <PlusCircleIcon size={16} color={theme.color.GRAY_100} />
          </Button>
        </InputWrapper>
      </Header>
      <Body>
        <CounterWrapper>
          <Counter
            title="Criadas"
            value={countTasksCreated}
            labelColor="BLUE_500"
          />
          <Counter
            title="Concluídas"
            value={countCompletedTasks}
            labelColor="PURPLE_900"
          />
        </CounterWrapper>

        <FilterWrapper>
          <Filter
            clearFilter={() =>
              handleFilter({
                condition: [""],
                orderBy: ["asc"],
              })
            }
            buttons={[
              {
                title: "A-Z",
                onPress: () =>
                  handleFilter({
                    condition: ["title"],
                    orderBy: ["asc"],
                  }),
              },
              {
                title: "Completas",
                onPress: () =>
                  handleFilter({
                    condition: ["isCompleted", "title"],
                    orderBy: ["desc"],
                  }),
              },
              {
                title: "Incompletas",
                onPress: () =>
                  handleFilter({
                    condition: ["isCompleted", "title"],
                    orderBy: ["asc"],
                  }),
              },
            ]}
          />
        </FilterWrapper>

        <FlatList
          contentContainerStyle={{
            rowGap: 5,
            marginTop: 20,
          }}
          data={filteredData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Task
              id={item.id}
              title={item.title}
              isCompleted={item.isCompleted}
              onPressTask={handleCompleteTask}
              onRemove={handleDeleteTask}
            />
          )}
          ListEmptyComponent={<EmptyTasks />}
          showsVerticalScrollIndicator={false}
        />
      </Body>
    </Container>
  );
}
