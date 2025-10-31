import styled from "styled-components/native";

export const Container = styled.View`
  padding-top: 5px;
`;

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  overflow: hidden;
  margin-top: 2px;
`;

type ButtonProps = {
  isActive: boolean;
};

export const Button = styled.TouchableOpacity<ButtonProps>`
  padding: 12px;
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.color.PURPLE_900 : theme.color.GRAY_400};
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.color.GRAY_100};
  font-family: ${({ theme }) => theme.fontFamily.INTER_BOLD};
  font-size: ${({ theme }) => theme.size.SM};
`;
