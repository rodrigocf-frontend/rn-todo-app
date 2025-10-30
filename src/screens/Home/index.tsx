import {
  CheckCircleIcon,
  CircleIcon,
  PlusCircleIcon,
  TrashIcon,
} from "phosphor-react-native";
import { Button, Container } from "./styles";
import { Input } from "../../components/Input";

export function Home() {
  return (
    <Container>
      <CheckCircleIcon size={60} />
      <CircleIcon size={60} />
      <PlusCircleIcon size={60} />
      <Button>
        <TrashIcon size={60} />
      </Button>

      <Input placeholder="teste" />
    </Container>
  );
}
