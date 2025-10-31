import styled from "styled-components/native";

type Container = {
  isFocused: boolean;
};

export const Container = styled.TextInput.attrs<Container>(
  ({ theme, isFocused = false }) => ({
    placeholderTextColor: theme.color.GRAY_300,
  })
)`
  background-color: ${({ theme }) => theme.color.GRAY_500};
  padding: 16px;
  color: ${({ theme }) => theme.color.GRAY_100};
  font-size: ${({ theme }) => theme.size.NM};
  font-family: ${({ theme }) => theme.fontFamily.INTER_REGULAR};
  border-radius: 8px;
  border: 1px;
  border-color: ${({ theme, isFocused }) =>
    isFocused ? theme.color.PURPLE_900 : theme.color.GRAY_700};
  flex: 1;
`;
