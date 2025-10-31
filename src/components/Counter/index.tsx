import { Container, Label, LabelProps, Value, Wrapper } from "./styles";

type Props = LabelProps & {
  title: string;
  value: number;
};

export function Counter({ labelColor = "GRAY_100", title, value }: Props) {
  return (
    <Container>
      <Label labelColor={labelColor}>{title}</Label>
      <Wrapper>
        <Value>{value}</Value>
      </Wrapper>
    </Container>
  );
}
