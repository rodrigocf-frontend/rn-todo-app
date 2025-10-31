import { TextInputProps, ViewProps } from "react-native";
import { Container } from "./styles";
import { Ref, RefObject, useState } from "react";

type Props = TextInputProps & {
  ref: Ref<any> | undefined;
};

export function Input({ ...args }: Props) {
  const [focused, setFocused] = useState(false);

  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);

  return (
    <Container
      {...args}
      isFocused={focused}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  );
}
